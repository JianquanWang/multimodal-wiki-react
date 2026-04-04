import { useState, useEffect } from 'react';

function BenchmarksPage({ benches, cats, techs, isCN, onOpenTech }) {
  const benchKeys = benches ? Object.keys(benches) : [];
  const [activeBenchCat, setActiveBenchCat] = useState(() => benchKeys[0] ? parseInt(benchKeys[0]) : null);
  const [sortBy, setSortBy] = useState('val'); // 'val' | 'name'

  // Reset when benches change (topic switch) - use benchKeys.length to avoid infinite loop
  useEffect(() => {
    if (benchKeys.length > 0) {
      setActiveBenchCat(parseInt(benchKeys[0]));
    }
  }, [benchKeys.length]);

  const cur = benches && activeBenchCat ? benches[activeBenchCat] : null;

  if (!cur) {
    return (
      <div id="benchmarks-page">
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text3)' }}>
          <i className="fas fa-chart-bar" style={{ fontSize: '2rem', opacity: 0.4, marginBottom: 12 }}></i>
          <p>{isCN ? '暂无排行榜数据' : 'No benchmark data available'}</p>
        </div>
      </div>
    );
  }

  const sortedItems = [...cur.items].sort((a, b) => {
    if (sortBy === 'val') return b.val - a.val;
    return a.name.localeCompare(b.name);
  });

  const max = Math.max(...cur.items.map(x => x.val));
  const avg = cur.items.reduce((s, x) => s + x.val, 0) / cur.items.length;
  const best = cur.items.reduce((best, x) => x.val > best.val ? x : best, cur.items[0]);

  return (
    <div id="benchmarks-page">
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 6 }}>
          <i className="fas fa-chart-bar" style={{ color: 'var(--accent3)' }}></i>{' '}
          {isCN ? '技术排行榜' : 'Benchmark Rankings'}
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'var(--text3)' }}>
          {isCN
            ? `按 ${cur.metricCN} 可视化对比 · 数值越高越好`
            : `Visual comparison by ${cur.metricEN} · Higher is better`}
        </p>
      </div>

      {/* Bench category tabs */}
      <div className="bench-tabs" style={{ marginBottom: 20 }}>
        {benchKeys.map(cid => benches[cid] && (
          <button key={cid}
            className={`bench-tab ${parseInt(cid) === activeBenchCat ? 'active' : ''}`}
            onClick={() => { setActiveBenchCat(parseInt(cid)); setSortBy('val'); }}>
            {isCN ? benches[cid].titleCN : benches[cid].titleEN}
          </button>
        ))}
      </div>

      {/* Summary stats */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 16px', flex: 1, minWidth: 120 }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text3)', marginBottom: 2 }}>{isCN ? '最佳技术' : 'Best'}</div>
          <div style={{ fontWeight: 800, color: 'var(--accent3)', fontSize: '0.95rem' }}>{best?.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text2)' }}>{best?.val}{cur.unit ? ' ' + cur.unit : ''}</div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 16px', flex: 1, minWidth: 120 }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text3)', marginBottom: 2 }}>{isCN ? '平均' : 'Average'}</div>
          <div style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '0.95rem' }}>{avg.toFixed(1)}{cur.unit ? ' ' + cur.unit : ''}</div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 16px', flex: 1, minWidth: 120 }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text3)', marginBottom: 2 }}>{isCN ? '技术数量' : 'Count'}</div>
          <div style={{ fontWeight: 800, color: 'var(--c1)', fontSize: '0.95rem' }}>{cur.items.length}</div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 16px', flex: 1, minWidth: 120 }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text3)', marginBottom: 2 }}>{isCN ? '最高/平均' : 'Best/Avg'}</div>
          <div style={{ fontWeight: 800, color: best?.val / avg > 1.5 ? 'var(--accent2)' : 'var(--text)', fontSize: '0.95rem' }}>{(best?.val / avg).toFixed(2)}x</div>
        </div>
      </div>

      {/* Sort controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{isCN ? '排序：' : 'Sort:'}</span>
        <button className={`cat-btn ${sortBy === 'val' ? 'active' : ''}`} onClick={() => setSortBy('val')}>
          {isCN ? '按数值' : 'By Value'}
        </button>
        <button className={`cat-btn ${sortBy === 'name' ? 'active' : ''}`} onClick={() => setSortBy('name')}>
          {isCN ? '按名称' : 'By Name'}
        </button>
      </div>

      {/* Bar chart */}
      <div className="bar-chart" style={{ marginBottom: 24 }}>
        {sortedItems.map((item, i) => {
          const pct = ((item.val / max) * 100).toFixed(1);
          const rank = i + 1;
          const isBest = i === 0;
          return (
            <div key={i} className="bar-row" style={{ cursor: 'pointer' }}
              onClick={() => {
                // Find the tech in techs that matches this bench item by keyword
                const key = item.name.replace(/\s*\([^)]*\)/g, '').split(/\s+/)[0].toLowerCase();
                const matched = techs.find(t =>
                  t.name.toLowerCase().includes(key) ||
                  (t.cn && t.cn.includes(key)) ||
                  t.categories.some(cid => cats.find(c => c.id === cid)?.labelEN.toLowerCase().includes(key))
                );
                if (matched) onOpenTech(matched);
              }}
              title={`${isCN ? '点击查看' : 'Click to view'}: ${item.name}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', minWidth: 32, gap: 6, alignSelf: 'center', height: '100%' }}>
                {isBest && <span style={{ color: 'var(--accent3)', fontSize: '0.65rem', fontWeight: 800 }}>👑</span>}
                <span style={{ color: rank <= 3 ? 'var(--accent2)' : 'var(--text3)', fontSize: '0.65rem', minWidth: 14 }}>#{rank}</span>
              </div>
              <div className="bar-label" title={item.name} style={{ fontWeight: isBest ? 700 : 400 }}>{item.name}</div>
              <div className="bar-wrap">
                <div className="bar-fill" style={{ width: pct + '%', background: item.color, opacity: isBest ? 1 : 0.75 }}>
                  <span style={{ fontWeight: 600 }}>{item.val}{cur.unit ? ' ' + cur.unit : ''}</span>
                </div>
              </div>
              <div className="bar-value">{item.note}</div>
            </div>
          );
        })}
      </div>

      {/* Source note */}
      <div style={{ fontSize: '0.72rem', color: 'var(--text3)', borderTop: '1px solid var(--border)', paddingTop: 12 }}>
        📊 {isCN ? cur.metricCN : cur.metricEN} · {isCN ? '数据来源：各技术原论文 · 同一类别内按指标降序排列' : `Source: original papers · Sorted by ${cur.metricEN} descending`}
        {cur.higherBetter !== undefined && (
          <span style={{ marginLeft: 8, color: cur.higherBetter ? 'var(--accent3)' : 'var(--accent)' }}>
            ({cur.higherBetter ? '↑ ' + (isCN ? '越高越好' : 'higher is better') : '↓ ' + (isCN ? '越低越好' : 'lower is better')})
          </span>
        )}
      </div>
    </div>
  );
}

export default BenchmarksPage;
