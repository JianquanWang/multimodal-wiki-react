// ═══════════════════════════════════════════════════════════════════
// Hero - Hero section with stats
// ═══════════════════════════════════════════════════════════════════

function Hero({ topicData, isCN, visibleCount, hasFilter }) {
  const catCount = topicData.cats.length;
  const techCount = topicData.techs.length;

  // Get category label based on topic
  const getCatLabel = () => {
    if (isCN) {
      if (topicData.labelCN.includes('LLM')) return '14 大类别';
      return `${catCount} 大类别`;
    }
    if (topicData.labelEN.includes('LLM')) return '14 Categories';
    return `${catCount} Categories`;
  };

  return (
    <div className="hero">
      <h1>
        <span className="accent">{topicData.labelCN} | {topicData.labelEN}</span>
      </h1>
      <p>{topicData.heroCN && topicData.heroEN ? (isCN ? topicData.heroCN : topicData.heroEN) : ''}</p>
      {topicData.footerCN && topicData.footerEN && (
        <p style={{fontSize:'0.78rem',color:'var(--text3)',marginTop:4}}>{isCN ? topicData.footerCN : topicData.footerEN}</p>
      )}
      <div className="hero-meta">
        <span>
          <i className="fas fa-layer-group"></i>
          <span>{getCatLabel()}</span>
        </span>
        <span>
          <i className="fas fa-bolt"></i>
          <span>{techCount} {isCN ? '项技术' : 'techniques'}</span>
        </span>
        <span>
          <i className="fas fa-file-alt"></i>
          <span>{isCN ? '论文' : 'Papers'}</span>
        </span>
        <span>
          <i className="fas fa-signal"></i>
          <span>{isCN ? 'Benchmark对比' : 'Benchmarks'}</span>
        </span>
        {hasFilter && (
          <span style={{ color: 'var(--accent3)' }}>
            <i className="fas fa-filter"></i>
            <span>{visibleCount} {isCN ? '项可见' : 'visible'}</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default Hero;
