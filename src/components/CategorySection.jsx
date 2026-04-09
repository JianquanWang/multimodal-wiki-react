// ═══════════════════════════════════════════════════════════════════
// CategorySection - A category block with header and tech cards
// ═══════════════════════════════════════════════════════════════════

import Card from './Card';

function CategorySection({ cat, techs, allForCat, cats, lang, onOpenTech, activeCat }) {
  const title = lang === 'cn' ? cat.labelCN : cat.labelEN;

  // When a category filter is active AND this section is NOT that category, hide entirely
  if (activeCat && activeCat !== 'all' && cat.id !== activeCat) {
    return null;
  }

  // Hide section if no cards are visible after search
  if (techs.length === 0) return null;

  return (
    <div className="section" id={`cat${cat.id}`}>
      <div className="cat-header">
        <div
          className="cat-icon"
          style={{ background: `${cat.color}20`, color: cat.color }}
        >
          <i className={`fas ${cat.icon || 'fa-folder'}`}></i>
        </div>
        <div className="cat-info">
          <div className="cat-title" style={{ color: cat.color }}>
            {title}
          </div>
          {cat.subTopics && cat.subTopics.length > 0 && (
            <div className="subtopics">
              {cat.subTopics.map((st, i) => (
                <span key={i} className="subpill">{st}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="cards">
        {allForCat.map(tech => {
          // Dim: not in visible set (filtered out by search/bench/cat)
          const isDimmed = !techs.some(v => v.id === tech.id);
          return (
            <Card
              key={tech.id}
              tech={tech}
              lang={lang}
              cats={cats}
              onOpen={onOpenTech}
              dimmed={isDimmed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategorySection;
