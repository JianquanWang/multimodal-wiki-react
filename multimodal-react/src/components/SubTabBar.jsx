// ═══════════════════════════════════════════════════════════════════
// SubTabBar - 技术/排行榜/标签 tabs
// ═══════════════════════════════════════════════════════════════════

import { T } from '../i18n/translations';

function SubTabBar({ active, onChange, isCN }) {
  return (
    <div className="subtab-bar">
      <button
        className={`subtab-btn ${active === 'main' ? 'active' : ''}`}
        onClick={() => onChange('main')}
      >
        <i className="fas fa-th-large"></i>
        <span id="subtabMainLabel">{isCN ? T.tabMainCN : T.tabMainEN}</span>
      </button>
      <button
        className={`subtab-btn ${active === 'bench' ? 'active' : ''}`}
        onClick={() => onChange('bench')}
      >
        <i className="fas fa-chart-bar"></i>
        <span id="subtabBenchLabel">{isCN ? T.benchTabCN : T.benchTabEN}</span>
      </button>
      <button
        className={`subtab-btn ${active === 'tags' ? 'active' : ''}`}
        onClick={() => onChange('tags')}
      >
        <i className="fas fa-tags"></i>
        <span id="subtabTagsLabel">{isCN ? T.tagsTabCN : T.tagsTabEN}</span>
      </button>
    </div>
  );
}

export default SubTabBar;
