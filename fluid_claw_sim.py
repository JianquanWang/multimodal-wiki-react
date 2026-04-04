import taichi as ti
import numpy as np
import time

RES = (900, 700)
PARTICLES = 2500
GRAVITY = -980.0
H = 20.0
STIFFNESS = 18000.0
MU_VISC = 80.0
DT = 1 / 900
SUB_STEPS = 6
WALL_P = 0.5
FLUID_D = 10.0
W, H_px = RES
CX = W / 2
POOL_LEFT, POOL_RIGHT = 80.0, W - 80.0
POOL_BOTTOM, POOL_TOP = 80.0, 500.0
GRID_RES = 64
CELL = max((POOL_RIGHT - POOL_LEFT) / GRID_RES, H * 2.1)

ti.init(arch=ti.gpu, debug=False)

pos = ti.Vector.field(2, dtype=ti.f32, shape=PARTICLES)
vel = ti.Vector.field(2, dtype=ti.f32, shape=PARTICLES)
acc = ti.Vector.field(2, dtype=ti.f32, shape=PARTICLES)
rho = ti.field(dtype=ti.f32, shape=PARTICLES)
press = ti.field(dtype=ti.f32, shape=PARTICLES)

NUM_BODIES = 30
rb_pos = ti.Vector.field(2, dtype=ti.f32, shape=NUM_BODIES)
rb_vel = ti.Vector.field(2, dtype=ti.f32, shape=NUM_BODIES)
rb_angle = ti.field(dtype=ti.f32, shape=NUM_BODIES)
rb_angvel = ti.field(dtype=ti.f32, shape=NUM_BODIES)
rb_life = ti.field(dtype=ti.i32, shape=NUM_BODIES)
rb_hsize = ti.Vector.field(2, dtype=ti.f32, shape=NUM_BODIES)
rb_color = ti.Vector.field(3, dtype=ti.f32, shape=NUM_BODIES)
rb_shape = ti.field(dtype=ti.i32, shape=NUM_BODIES)
# Track rigid body motion for settle detection
rb_settle_counter = ti.field(dtype=ti.i32, shape=NUM_BODIES)
rb_last_y = ti.field(dtype=ti.f32, shape=NUM_BODIES)

head = ti.field(ti.i32, GRID_RES * GRID_RES)
last = ti.field(ti.i32, PARTICLES)

@ti.func
def grid_idx(p):
    ix = ti.max(0, ti.min(GRID_RES-1, int((p[0] - POOL_LEFT) / CELL)))
    iy = ti.max(0, ti.min(GRID_RES-1, int((p[1] - POOL_BOTTOM) / CELL)))
    return ix, iy

@ti.func
def grid1d(ix, iy):
    return ix * GRID_RES + iy

@ti.kernel
def build_hash(pool_end: ti.i32):
    for i in range(GRID_RES * GRID_RES):
        head[i] = -1

    ti.loop_config(serialize=True)
    for i in range(pool_end):
        ix, iy = grid_idx(pos[i])
        cell = grid1d(ix, iy)
        last[i] = head[cell]
        head[cell] = i

@ti.kernel
def init_pool() -> ti.i32:
    cols, rows = 40, 30
    for i in range(cols * rows):
        pos[i] = ti.Vector([
            POOL_LEFT + 30.0 + (i % cols) * FLUID_D,
            POOL_BOTTOM + 30.0 + (i // cols) * FLUID_D
        ])
        vel[i] = ti.Vector([0.0, 0.0])
    return cols * rows

@ti.kernel
def spawn_rigid(b: ti.i32):
    rb_shape[b] = int(ti.random() * 3.0)
    rb_hsize[b] = ti.Vector([ti.random() * 15.0 + 15.0, ti.random() * 15.0 + 15.0])
    rb_pos[b] = ti.Vector([CX + (ti.random() - 0.5) * 200.0, POOL_TOP + 150.0])
    rb_vel[b] = ti.Vector([0.0, -300.0])
    rb_angle[b] = ti.random() * 6.28
    rb_angvel[b] = (ti.random() - 0.5) * 5.0
    rb_color[b] = ti.Vector([ti.random(), ti.random(), ti.random()])
    rb_life[b] = 1800
    rb_settle_counter[b] = 0
    rb_last_y[b] = rb_pos[b][1]

@ti.kernel
def step_physics(pool_end: ti.i32):
    # Compute density
    for i in range(pool_end):
        ix, iy = grid_idx(pos[i])
        d = 0.0
        for dx in range(-1, 2):
            for dy in range(-1, 2):
                nx, ny = ix + dx, iy + dy
                if 0 <= nx < GRID_RES and 0 <= ny < GRID_RES:
                    j = head[grid1d(nx, ny)]
                    while j != -1:
                        r = pos[j] - pos[i]
                        dist = r.norm()
                        if dist < H:
                            d += (1.0 - dist / H) ** 3
                        j = last[j]
        rho[i] = ti.max(d, 0.1)
        raw_press = STIFFNESS * (rho[i] - 1.0)
        press[i] = ti.max(raw_press, -STIFFNESS * 0.15)
        acc[i] = ti.Vector([0.0, GRAVITY])

    # Compute forces + integrate
    for i in range(pool_end):
        ix, iy = grid_idx(pos[i])
        for dx in range(-1, 2):
            for dy in range(-1, 2):
                nx, ny = ix + dx, iy + dy
                if 0 <= nx < GRID_RES and 0 <= ny < GRID_RES:
                    j = head[grid1d(nx, ny)]
                    while j != -1:
                        if i != j:
                            r = pos[j] - pos[i]
                            dist = r.norm()
                            if dist < 1e-4:
                                # Strong anti-overlap jitter to fix particle disappearance
                                acc[i] += ti.Vector([ti.random() - 0.5, ti.random() - 0.5]) * 8000.0
                            elif dist < H:
                                rn = r / dist
                                # Pressure
                                fp = -0.5 * (press[i] + press[j]) * (1.0 - dist / H) ** 2 * rn
                                # Viscosity
                                fv = MU_VISC * (vel[j] - vel[i]) * (1.0 - dist / H)
                                acc[i] += (fp + fv) / rho[i]
                                # Stronger separation force to fix overlap
                                sep = 30000.0 * (H - dist) / H * ti.exp(-dist * 4.0 / H)
                                acc[i] += rn * sep / rho[i]
                        j = last[j]

        # Rigid body splash force
        for b in range(NUM_BODIES):
            if rb_life[b] > 0:
                r_vec = pos[i] - rb_pos[b]
                dist = r_vec.norm()
                radius = ti.max(rb_hsize[b][0], rb_hsize[b][1]) * 1.2
                if dist < radius and dist > 1e-4:
                    acc[i] += r_vec.normalized() * 25000.0 + rb_vel[b] * 80.0
                elif dist < 1e-4:
                    acc[i] += ti.Vector([ti.random() - 0.5, ti.random() - 0.5]) * 5000.0

        vel[i] += acc[i] * DT
        speed = vel[i].norm()
        if speed > 1500.0:
            vel[i] *= 1500.0 / speed
        pos[i] += vel[i] * DT

        # Strict boundaries
        if pos[i][0] < POOL_LEFT:
            pos[i][0] = POOL_LEFT
            vel[i][0] *= -WALL_P
        if pos[i][0] > POOL_RIGHT:
            pos[i][0] = POOL_RIGHT
            vel[i][0] *= -WALL_P
        if pos[i][1] < POOL_BOTTOM:
            pos[i][1] = POOL_BOTTOM
            vel[i][1] *= -WALL_P
        if pos[i][1] > POOL_TOP + 400.0:
            pos[i][1] = POOL_TOP + 400.0
            vel[i][1] *= -WALL_P

@ti.kernel
def step_rigid():
    for b in range(NUM_BODIES):
        if rb_life[b] > 0:
            rb_life[b] -= 1

            # Settle detection: check if body barely moving at bottom for 120 frames
            is_at_bottom = rb_pos[b][1] < POOL_BOTTOM + rb_hsize[b][1] + 5.0
            dy = ti.abs(rb_pos[b][1] - rb_last_y[b])
            rb_last_y[b] = rb_pos[b][1]

            if is_at_bottom and dy < 0.5:
                rb_settle_counter[b] += 1
            else:
                rb_settle_counter[b] = 0

            # Force despawn if settled at bottom for > 120 frames
            if rb_settle_counter[b] > 120:
                rb_life[b] = 0

            if rb_life[b] <= 0:
                rb_pos[b] = ti.Vector([-9999.0, -9999.0])
                rb_settle_counter[b] = 0
            else:
                rb_vel[b][1] += GRAVITY * DT
                rb_pos[b] += rb_vel[b] * DT
                rb_angle[b] += rb_angvel[b] * DT

                if rb_pos[b][1] < POOL_BOTTOM + rb_hsize[b][1]:
                    rb_pos[b][1] = POOL_BOTTOM + rb_hsize[b][1]
                    rb_vel[b][1] *= -0.4
                    rb_vel[b][0] *= 0.9

def draw_shape(gui, b, rgb):
    hs, ang, p = rb_hsize[b], rb_angle[b], rb_pos[b]
    ca, sa = ti.cos(ang), ti.sin(ang)

    if rb_shape[b] == 0:
        corn = [
            ti.Vector([-hs[0], -hs[1]]), ti.Vector([hs[0], -hs[1]]),
            ti.Vector([hs[0], hs[1]]), ti.Vector([-hs[0], hs[1]])
        ]
    elif rb_shape[b] == 1:
        corn = [
            ti.Vector([0.0, -hs[1]]), ti.Vector([hs[0], 0.0]),
            ti.Vector([0.0, hs[1]]), ti.Vector([-hs[0], 0.0])
        ]
    else:
        corn = [
            ti.Vector([0.0, hs[1]]), ti.Vector([hs[0], -hs[1]]),
            ti.Vector([-hs[0], -hs[1]])
        ]

    pts = []
    for c in corn:
        pts.append([
            (p[0] + c[0] * ca - c[1] * sa) / W,
            (p[1] + c[0] * sa + c[1] * ca) / H_px
        ])
    for i in range(len(corn)):
        gui.line(pts[i], pts[(i + 1) % len(corn)], radius=3, color=rgb)

def vel_to_color(speed):
    """Map speed [0, 800] to dark-blue -> cyan gradient."""
    t = min(speed / 800.0, 1.0)
    # dark blue (0,0,0.5) -> cyan (0, 0.8, 1.0)
    r = 0
    g = int(t * 0.8 * 255)
    b = int((0.5 + t * 0.5) * 255)
    return (r << 16) | (g << 8) | b

@ti.kernel
def compute_speeds(pool_end: ti.i32, speeds: ti.types.ndarray()):
    for i in range(pool_end):
        speeds[i] = vel[i].norm()

def main():
    gui = ti.GUI("Claw Fluid Splash Sim", res=RES)
    pool_end = init_pool()
    next_body, spawn_timer = 0, 0

    # FPS tracking
    fps_window = []
    fps_display = 0.0
    last_time = time.time()

    # Pre-allocate numpy array for speeds (for color mapping)
    speeds_arr = np.zeros(PARTICLES, dtype=np.float32)

    while gui.running:
        # FPS computation
        now = time.time()
        fps_window.append(now)
        # keep last 30 frames
        while fps_window and fps_window[0] < now - 1.5:
            fps_window.pop(0)
        if len(fps_window) >= 2:
            fps_display = (len(fps_window) - 1) / (fps_window[-1] - fps_window[0] + 1e-9)

        spawn_timer += 1
        if spawn_timer > 60:
            spawn_rigid(next_body)
            next_body = (next_body + 1) % NUM_BODIES
            spawn_timer = 0

        for _ in range(SUB_STEPS):
            build_hash(pool_end)
            step_physics(pool_end)
            step_rigid()

        gui.clear(0x080810)

        # Pool walls
        pl = POOL_LEFT / W
        pr = POOL_RIGHT / W
        pb = POOL_BOTTOM / H_px
        pt = POOL_TOP / H_px
        gui.line((pl, pb), (pr, pb), radius=4, color=0x4a6fa5)
        gui.line((pl, pb), (pl, pt), radius=4, color=0x4a6fa5)
        gui.line((pr, pb), (pr, pt), radius=4, color=0x4a6fa5)

        # Velocity-based fluid colors: fast=cyan, slow=dark-blue
        compute_speeds(pool_end, speeds_arr)
        fluid_pos_np = pos.to_numpy()[:pool_end]
        fluid_pos_ndc = fluid_pos_np / np.array([W, H_px])
        colors_np = np.array([vel_to_color(s) for s in speeds_arr[:pool_end]], dtype=np.uint32)
        gui.circles(fluid_pos_ndc, radius=FLUID_D / 1.5, color=colors_np)

        # Draw rigid bodies
        rb_p = rb_pos.to_numpy()
        rb_c = rb_color.to_numpy()
        for b in range(NUM_BODIES):
            if rb_p[b][1] > -9000.0:
                rgb = (
                    (int(rb_c[b][0] * 255) << 16) |
                    (int(rb_c[b][1] * 255) << 8) |
                    int(rb_c[b][2] * 255)
                )
                draw_shape(gui, b, rgb)

        # HUD: FPS + particle count
        gui.text(
            f"FPS: {fps_display:.1f}  Particles: {pool_end}",
            pos=(0.01, 0.97),
            font_size=16,
            color=0xcccccc
        )

        gui.show()

if __name__ == "__main__":
    main()
