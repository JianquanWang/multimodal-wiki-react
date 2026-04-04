// ═══════════════════════════════════════════════════════════════════
// Card - Individual technique card
// ═══════════════════════════════════════════════════════════════════

function Card({ tech, topic, lang, cats, onOpen, dimmed = false }) {
  const title = lang === 'cn' ? tech.cn : tech.name;
  const hasCN = tech.cn && tech.cn !== tech.name;
  const desc = lang === 'cn' ? tech.desc_cn : tech.desc_en;
  const shortDesc = desc ? desc.substring(0, 100) + (desc.length > 100 ? '…' : '') : '';

  const badgeClass = tech.badge === '🟢' ? 'bg' : tech.badge === '🔴' ? 'br' : 'by';
  const paper = tech.paper || '';

  const catLabels = (tech.categories || [])
    .map(cid => {
      const cat = cats.find(c => c.id === cid);
      if (!cat) return null;
      return {
        id: cid,
        label: lang === 'cn' ? cat.labelCN : cat.labelEN,
        color: cat.color,
      };
    })
    .filter(Boolean);

  return (
    <div className={`card${dimmed ? ' dimmed' : ''}`} onClick={() => !dimmed && onOpen(tech)}>
      <div className="card-head">
        <div className="card-title">{title}</div>
        {tech.badge && (
          <span className={`card-badge ${badgeClass}`}>{tech.badge}</span>
        )}
      </div>
      {hasCN && (
        <div className="card-cn">{tech.cn}</div>
      )}
      {shortDesc && (
        <div className="card-desc">{shortDesc}</div>
      )}
      {paper && (
        <div className="card-ref">
          <i className="far fa-file-alt" style={{ marginRight: 4 }}></i>
          {paper.split('—')[0].trim()}
        </div>
      )}
      {tech.bench && tech.bench.length > 0 && (
        <div style={{ display: 'flex', gap: 4, marginTop: 4, flexWrap: 'wrap' }}>
          {tech.bench.slice(0, 2).map((b, i) => (
            <span key={i} style={{ fontSize: '0.6rem', background: 'var(--bg)', color: 'var(--accent3)', padding: '1px 6px', borderRadius: 4, border: '1px solid var(--accent3)' }}>
              📊 {b.v} {b.metric.substring(0, 15)}
            </span>
          ))}
          {tech.bench.length > 2 && (
            <span style={{ fontSize: '0.6rem', color: 'var(--text3)', padding: '1px 4px' }}>+{tech.bench.length - 2}</span>
          )}
        </div>
      )}
      <div className="card-hint">
        <i className="fas fa-arrow-right" style={{ fontSize: '0.6rem' }}></i>
        <span>{lang === 'cn' ? '点击查看详情' : 'Click for details'}</span>
      </div>
      {catLabels.length > 0 && (
        <div className="card-tags">
          {catLabels.map(cat => (
            <span
              key={cat.id}
              className="ctag"
              style={{ borderLeft: `2px solid ${cat.color}`, paddingLeft: 4 }}
            >
              {cat.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
