function bClass(b) {
  return b === '🟢' ? 'bg' : b === '🟡' ? 'by' : 'br';
}

function TagModal({ cat, techs, isCN, onClose, onOpenTech }) {
  const items = techs.filter(t => t.categories.includes(cat.id));

  return (
    <div className="tag-modal-overlay open" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="tag-modal" style={{ maxWidth: 560 }}>
        <button className="modal-close" onClick={onClose} style={{ position: 'absolute', top: 12, right: 14, background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text2)', borderRadius: 7, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <i className="fas fa-times"></i>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: cat.color, display: 'inline-block', flexShrink: 0 }}></span>
          <h3 style={{ color: cat.color, fontSize: '1.1rem' }}>{isCN ? cat.labelCN : cat.labelEN}</h3>
          <span style={{ background: cat.color + '22', color: cat.color, borderRadius: 20, padding: '2px 10px', fontSize: '0.7rem', fontWeight: 700 }}>
            {items.length} {isCN ? '项技术' : 'techniques'}
          </span>
        </div>
        {cat.subTopics && cat.subTopics.length > 0 && (
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 10 }}>
            {cat.subTopics.map((st, i) => (
              <span key={i} style={{ fontSize: '0.65rem', color: 'var(--text3)', background: 'var(--bg)', padding: '2px 8px', borderRadius: 4, border: '1px solid var(--border)' }}>{st}</span>
            ))}
          </div>
        )}
        {cat.papers && cat.papers.length > 0 && (
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text3)', marginBottom: 8 }}>
              📚 {isCN ? '权威论文' : 'Key Papers'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {cat.papers.map((p, i) => (
                <div key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent2)' }}>{p.name}</span>
                    <span style={{ fontSize: '0.62rem', color: 'var(--text3)' }}>{p.authors} {p.year}</span>
                    {p.arxiv && (
                      <a href={p.arxiv} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
                        style={{ fontSize: '0.6rem', color: 'var(--accent)', marginLeft: 'auto' }}>
                        arXiv ↗
                      </a>
                    )}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text2)', lineHeight: 1.4 }}>{p.why}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={{ fontSize: '0.72rem', color: 'var(--text3)', marginBottom: 14 }}>
          {isCN ? '点击任一技术卡片查看详情与论文' : 'Click any technique to view details & paper'}
        </div>
        <div className="tag-modal-list">
          {items.map(t => (
            <div key={t.id} className="tag-modal-item" onClick={() => onOpenTech(t)} style={{ padding: '10px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className={`modal-badge ${bClass(t.badge)}`} style={{ fontSize: '0.6rem', padding: '2px 6px' }}>{t.badge}</span>
                <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>{isCN ? t.cn : t.name}</span>
                {t.cn !== t.name && (
                  <span style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>({t.name})</span>
                )}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text2)', marginTop: 3 }}>
                {isCN ? t.desc_cn?.substring(0, 80) : t.desc_en?.substring(0, 80)}
                {(isCN ? t.desc_cn?.length : t.desc_en?.length) > 80 ? '…' : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagModal;
