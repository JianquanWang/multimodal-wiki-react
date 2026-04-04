// ═══════════════════════════════════════════════════════════════════
// TOC - Table of Contents
// ═══════════════════════════════════════════════════════════════════

import { T } from '../i18n/translations';

function TOC({ categories, isCN }) {
  return (
    <div className="toc">
      <h2 id="tocTitle">{isCN ? T.tocTitleCN : T.tocTitleEN}</h2>
      <div className="toc-grid" id="tocGrid">
        {categories.map(cat => (
          <a key={cat.id} className="toc-item" href={`#cat${cat.id}`}>
            <span style={{
              background: `${cat.color}18`,
              color: cat.color,
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              fontWeight: '700',
              flexShrink: 0
            }}>
              {cat.id}
            </span>
            <span style={{ fontWeight: '600', fontSize: '0.78rem' }}>
              {isCN ? cat.labelCN : cat.labelEN}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TOC;
