# MEMORY.md — Long-Term Memory

## About Jianquan Wang (BlueKoala)
- Uses Discord DM as primary interface with me
- Prefers formal, clean, efficient interactions — not chatty
- Likes proactive assistance without excessive questions
- Timezone: America/Toronto (EDT)
- Discord ID: 402252602055720970

## Technical Setup
- **Orchestration model:** MiniMax M2.7
- **Heavy code tasks:** Native subagent spawns (runtime="subagent", mode="run") — works reliably
- **ACP/Codex:** Had integration issues (acpx crashes); prefer native subagents over ACP harness
- **Discord bot token** was exposed on 2026-03-30 — user notified to rotate
- **Code-server:** /tmp/code-server-4.99.0-linux-amd64/bin/code-server (VS Code Web UI)
- **GitHub:** username `JianquanWang`, repo `multimodal-wiki` (https://github.com/JianquanWang/multimodal-wiki), PAT needed for pushes

## Active Projects

### LLM Efficiency Webpage
- Location: /home/jay/.openclaw/workspace/llm-efficiency/
- Single-file HTML app (index.html, ~2186 lines)
- Dark-themed, CN/EN toggle, modal cards with click-to-expand
- **129 techniques** across **14 categories** with cross-referencing
- Each technique has: name, CN/EN description, paper citation, arXiv link, difficulty badge (🟢/🟡/🔴), benchmark table
- **Server:** port 7890, IP 192.168.0.42, Tailscale: 100.96.131.3

### Multimodal Wiki (VLM + VLA + World Models + LLM)
- Location: /home/jay/.openclaw/workspace/multimodal/index.html
- Unified SPA with top topic-nav (LLM | VLM | VLA | World Models)
- 4 topics switchable via top nav bar, each with its own categories + techniques
- Sub-tabs per topic: 技术 / 排行榜 / 标签
- LLM: 20 techniques, 14 categories
- VLM: 32 techniques, 8 categories
- VLA: 24 techniques, 8 categories
- World Models: 30 techniques, 8 categories
- Total: 106 techniques across 4 topics
- Features: modal with related techniques + cross-topic references (keyword-matched), CSS bar chart rankings, tag search, CN/EN toggle, benchmark query search, back-to-top, empty state
- **Server:** port 7891, Tailscale: 100.96.131.3

#### Original user requirements (from pasted conversation):
1. Comprehensive survey of LLM training/inference efficiency techniques
2. Categories should NOT be generic — every tech落实到对应类别, no "Other" catch-all
3. Same paper can appear in multiple categories (cross-referencing)
4. Each tech has tags for multiple categories
5. Benchmark rankings per category where applicable
6. Expand sub-categories: Attention variants, RAG extensions, Long context techniques, Memory techniques
7. Modal card on click (not redirect to paper)
8. Visually clean — better than simple card lists

#### 14 Categories implemented:
1. Attention Mechanisms (注意力机制)
2. Quantization (模型量化)
3. Model Compression (模型压缩)
4. Param-Efficient FT (参数高效微调)
5. Memory-Efficient Training (显存高效训练)
6. Training Stability (训练稳定性)
7. Alignment (对齐方法)
8. Data Efficiency (数据效率)
9. Inference Optimization (推理优化)
10. Long Context (长上下文)
11. RAG & Knowledge (RAG 与知识)
12. Sparse/MoE (稀疏与专家)
13. Architecture Innovation (架构创新)
14. Serving (部署与服务)

### GelSight Tactile Simulation
- Location: /home/jay/.openclaw/workspace-gelsight/
- Genesis physics engine 0.4.3, GPU backend (ti.gpu, RTX 5070 Ti laptop)
- 6 objects simulated with tactile sensor
- Tactile images saved to tactile_data/

### Taichi 2D Fluid Simulation
- File: fluid_claw_sim.py
- Mentioned as ongoing project

## Key Lessons
- ACP harness (acpx) is problematic on this system — use native subagent spawns instead
- Discord token exposure risk — always be careful about what's shared in chat
- Genesis API: `gs.materials` (not a submodule), `gs.morphs`, `scene.step(dt)`
