// ═══════════════════════════════════════════════════════════════════
// SearchBar - Search + category filter bar
// ═══════════════════════════════════════════════════════════════════

import { T } from '../i18n/translations';

function SearchBar({ value, onChange, categories, activeCat, onCatChange, isCN, benchQuery }) {
  return (
    <div className="nav-wrap">
      <div className="nav-inner">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            id="searchInput"
            placeholder={isCN ? T.searchPHCN : T.searchPHEN}
            value={value}
            onChange={e => onChange(e.target.value)}
          />
          {benchQuery && (
            <div className="bench-filter-indicator active">
              <i className="fas fa-filter"></i>
              <span>{benchQuery}</span>
            </div>
          )}
        </div>
        <div className="cat-filters" id="catFilters">
          <button
            className={`cat-btn ${activeCat === 'all' ? 'active' : ''}`}
            onClick={() => onCatChange('all')}
          >
            {isCN ? T.allBtnCN : T.allBtnEN}
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`cat-btn ${activeCat === cat.id ? 'active' : ''}`}
              onClick={() => onCatChange(cat.id)}
            >
              {isCN ? cat.labelCN : cat.labelEN}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
