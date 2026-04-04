import { useState } from 'react';

function TagsPage({ cats, techs, isCN, onOpenTag }) {
  const [tagQ, setTagQ] = useState('');
  const [sortBy, setSortBy] = useState('count'); // 'count' | 'alpha'

  const filtered = tagQ ? cats.filter(c => {
    const kw = tagQ.toLowerCase();
    return (isCN ? c.labelCN : c.labelEN).toLowerCase().includes(kw) ||
      techs.some(t => t.categories.includes(c.id) && (isCN ? t.cn : t.name).toLowerCase().includes(kw));
  }) : cats;

  const sorted = [...filtered].sort((a, b) => {
    const aCount = techs.filter(t => t.categories.includes(a.id)).length;
    const bCount = techs.filter(t => t.categories.includes(b.id)).length;
    if (sortBy === 'count') return bCount - aCount;
    return (isCN ? a.labelCN : a.labelEN).localeCompare(isCN ? b.labelCN : b.labelEN);
  });

  const totalTechs = techs.length;
  const totalCats = cats.length;

  return (
    <div id="tags-page">
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 6 }}>
          <i className="fas fa-tags" style={{ color: 'var(--accent2)' }}></i>{' '}
          {isCN ? '技术标签' : 'Technique Tags'}
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'var(--text3)' }}>
          {isCN
            ? `共 ${totalCats} 个类别，${totalTechs} 项技术 · 点击标签查看该类别所有技术`
            : `${totalCats} categories, ${totalTechs} techniques · Click a tag to view all techniques in that category`}
        </p>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '8px 14px' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>{isCN ? '平均每类' : 'Avg/cat'}</span>
          <span style={{ marginLeft: 6, fontWeight: 800, color: 'var(--accent)' }}>{(totalTechs / totalCats).toFixed(1)}</span>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '8px 14px' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>{isCN ? '最多技术' : 'Most techs'}</span>
          <span style={{ marginLeft: 6, fontWeight: 800, color: 'var(--accent3)' }}>
            {Math.max(...cats.map(c => techs.filter(t => t.categories.includes(c.id)).length))}
          </span>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '8px 14px' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>{isCN ? '最少技术' : 'Fewest techs'}</span>
          <span style={{ marginLeft: 6, fontWeight: 800, color: 'var(--text2)' }}>
            {Math.min(...cats.map(c => techs.filter(t => t.categories.includes(c.id)).length))}
          </span>
        </div>
      </div>

      {/* Search + sort */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text"
              placeholder={isCN ? '搜索标签、技术…' : 'Search tags, techniques…'}
              value={tagQ} onChange={e => setTagQ(e.target.value)}
              style={{ background: 'var(--card)', width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button className={`cat-btn ${sortBy === 'count' ? 'active' : ''}`} onClick={() => setSortBy('count')}>
            {isCN ? '按数量' : 'By Count'}
          </button>
          <button className={`cat-btn ${sortBy === 'alpha' ? 'active' : ''}`} onClick={() => setSortBy('alpha')}>
            {isCN ? '按名称' : 'A-Z'}
          </button>
        </div>
      </div>

      {/* Tags grid */}
      <div className="tags-grid">
        {sorted.map(c => {
          const items = techs.filter(t => t.categories.includes(c.id));
          if (!items.length) return null;
          return (
            <div key={c.id} className="tag-card" onClick={() => onOpenTag(c)} style={{ cursor: 'pointer' }}>
              <div className="tag-card-head">
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="tag-name" style={{ color: c.color, fontSize: '0.9rem' }}>
                    {isCN ? c.labelCN : c.labelEN}
                  </span>
                  <span style={{ background: c.color + '25', color: c.color, borderRadius: 20, padding: '1px 8px', fontSize: '0.65rem', fontWeight: 700 }}>
                    {items.length}
                  </span>
                </div>
              </div>
              {c.subTopics && c.subTopics.length > 0 && (
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 6 }}>
                  {c.subTopics.slice(0, 3).map((st, i) => (
                    <span key={i} style={{ fontSize: '0.62rem', color: 'var(--text3)', background: 'var(--bg)', padding: '1px 6px', borderRadius: 4 }}>
                      {st}
                    </span>
                  ))}
                  {c.subTopics.length > 3 && (
                    <span style={{ fontSize: '0.62rem', color: 'var(--accent)', padding: '1px 4px' }}>+{c.subTopics.length - 3}</span>
                  )}
                </div>
              )}
              {c.papers && c.papers.length > 0 && (
                <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
                  {c.papers.slice(0, 2).map((p, i) => (
                    <span key={i} style={{ fontSize: '0.6rem', color: 'var(--accent2)', background: 'var(--accent2)15', padding: '1px 6px', borderRadius: 4, border: '1px solid var(--accent2)30' }} title={p.title}>
                      📄 {p.name}
                    </span>
                  ))}
                  {c.papers.length > 2 && (
                    <span style={{ fontSize: '0.6rem', color: 'var(--text3)' }}>+{c.papers.length - 2} papers</span>
                  )}
                </div>
              )}
              <div className="tag-items">
                {items.slice(0, 5).map(t => (
                  <span key={t.id} className="tag-item-chip">{isCN ? t.cn : t.name}</span>
                ))}
                {items.length > 5 && (
                  <span className="tag-item-chip" style={{ color: 'var(--accent)' }}>+{items.length - 5} {isCN ? '更多' : 'more'}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {sorted.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text3)' }}>
          <i className="fas fa-search" style={{ fontSize: '1.5rem', opacity: 0.4, marginBottom: 8, display: 'block' }}></i>
          <p style={{ fontSize: '0.85rem' }}>{isCN ? '未找到匹配的标签' : 'No matching tags found'}</p>
        </div>
      )}
    </div>
  );
}

export default TagsPage;
