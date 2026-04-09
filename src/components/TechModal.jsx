import { TOPICS } from '../data/topics';

function bClass(b) {
  return b === '🟢' ? 'bg' : b === '🟡' ? 'by' : 'br';
}

function catLabel(cats, id, isCN) {
  const c = cats.find(x => x.id === id);
  return c ? (isCN ? c.labelCN : c.labelEN) : id;
}

// Collect all links (github + huggingface) from papers array and tech-level fields
function collectLinks(tech) {
  const links = [];
  // From tech-level fields
  if (tech.github) links.push({ label: 'GitHub', icon: 'fab fa-github', url: tech.github, type: 'github' });
  if (tech.huggingface) links.push({ label: 'HuggingFace', icon: 'icon-hf', url: tech.huggingface, type: 'hf' });
  // From papers array
  if (tech.papers) {
    for (const p of tech.papers) {
      if (p.github) links.push({ label: `GitHub · ${p.name}`, icon: 'fab fa-github', url: p.github, type: 'github' });
      if (p.huggingface) links.push({ label: `HF · ${p.name}`, icon: 'icon-hf', url: p.huggingface, type: 'hf' });
    }
  }
  // Deduplicate by URL
  const seen = new Set();
  return links.filter(l => {
    if (seen.has(l.url)) return false;
    seen.add(l.url);
    return true;
  });
}

function TechModal({ tech, topicName, topic, topics, isCN, onClose, onOpenRelated, onOpenCrossTopic }) {
  const title = isCN ? tech.cn : tech.name;
  const desc = isCN ? tech.desc_cn : tech.desc_en;
  const related = [];
  tech.categories.forEach(cid => {
    topic.techs.filter(t => t.categories.includes(cid) && t.id !== tech.id)
      .slice(0, 3).forEach(t => { if (!related.find(r => r.id === t.id)) related.push(t); });
  });
  const relShown = related.slice(0, 6);
  const stopWords = new Set(['model', 'training', 'efficiency', 'method', 'for', 'the', 'and', 'with', 'based', 'using']);
  const kw = `${tech.name} ${tech.cn} ${tech.desc_cn} ${tech.desc_en}`.toLowerCase();
  const words = kw.split(/\W+/).filter(w => w.length > 3 && !stopWords.has(w));
  const crossRefs = [];
  ['vlm', 'vla', 'world'].filter(t => t !== topicName).forEach(ot => {
    const matches = topics[ot].techs.filter(t => {
      const tkw = `${t.name} ${t.cn} ${t.desc_cn} ${t.desc_en}`.toLowerCase();
      return words.some(w => tkw.includes(w));
    }).slice(0, 4);
    if (matches.length > 0) {
      const label = ot === 'vlm' ? 'VLM' : ot === 'vla' ? 'VLA' : 'World';
      crossRefs.push({ topic: ot, label, items: matches });
    }
  });

  const links = collectLinks(tech);
  const hasPapers = tech.papers && tech.papers.length > 0;

  return (
    <div className="modal-overlay open" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}><i className="fas fa-times"></i></button>
        <span className={`modal-badge ${bClass(tech.badge)}`}>{tech.badge} {tech.diff}</span>
        <div className="modal-ptitle">{title}</div>
        <div className="modal-pcn">{tech.name !== tech.cn ? (isCN ? tech.name : tech.cn) : ''}</div>
        <div className="modal-div"></div>
        <div className="modal-label">{isCN ? '技术描述' : 'Description'}</div>
        <div className="modal-text">{desc}</div>

        {/* Papers section */}
        <div className="modal-div"></div>
        <div className="modal-label">{isCN ? '引用论文' : 'Papers'}</div>
        {hasPapers ? (
          <div className="modal-papers-list">
            {tech.papers.map((p, i) => (
              <div key={i} className="modal-paper-item">
                <div className="modal-paper-header">
                  <i className="fas fa-file-lines modal-picon"></i>
                  <div className="modal-paper-meta">
                    <div className="modal-pname">{p.name || p.title}</div>
                    <div className="modal-paper-authors">{p.authors}{p.year ? ` · ${p.year}` : ''}</div>
                    {p.title && p.name !== p.title ? <div className="modal-paper-title">{p.title}</div> : null}
                  </div>
                </div>
                <div className="modal-paper-links">
                  {p.arxiv && (
                    <a className="modal-btn modal-btn-arxiv" href={p.arxiv} target="_blank" rel="noreferrer">
                      <i className="fas fa-external-link-alt"></i>{isCN ? ' arXiv' : ' arXiv'}
                    </a>
                  )}
                  {p.github && (
                    <a className="modal-btn modal-btn-github" href={p.github} target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i>{isCN ? ' GitHub' : ' GitHub'}
                    </a>
                  )}
                  {p.huggingface && (
                    <a className="modal-btn modal-btn-hf" href={p.huggingface} target="_blank" rel="noreferrer">
                      <span style={{fontSize:'0.7em',fontWeight:800,color:'#FF9A00',letterSpacing:'-0.02em'}}>HF</span>{isCN ? ' HuggingFace' : ' HuggingFace'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Fallback: show single paper string + tech-level links
          <div className="modal-paper">
            <div className="modal-pub">
              <i className="fas fa-file-lines modal-picon"></i>
              <div><div className="modal-pname">{tech.paper || (isCN ? '暂无论文' : 'No paper available')}</div></div>
            </div>
            {tech.arxiv && (
              <a className="modal-btn modal-btn-arxiv" href={tech.arxiv} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>{isCN ? ' 在 arXiv 打开' : ' Open on arXiv'}
              </a>
            )}
          </div>
        )}

        {/* Direct links section (GitHub / HuggingFace) */}
        {links.length > 0 && (
          <>
            <div className="modal-div"></div>
            <div className="modal-label">{isCN ? '资源链接' : 'Resources'}</div>
            <div className="modal-resource-links">
              {links.map((link, i) => (
                <a key={i} className={`modal-btn ${link.type === 'github' ? 'modal-btn-github' : link.type === 'hf' ? 'modal-btn-hf' : ''}`}
                   href={link.url} target="_blank" rel="noreferrer">
                  <i className={link.icon}></i>{' '}{link.label}
                </a>
              ))}
            </div>
          </>
        )}

        <div className="modal-div"></div>
        <div className="modal-label">{isCN ? '所属类别' : 'Categories'}</div>
        <div className="modal-tags2">
          {tech.categories.map(cid => (
            <span key={cid} className="modal-ctag" style={{ borderLeft: `2px solid ${(topic.cats.find(c => c.id === cid) || {}).color || 'var(--accent)'}` }}>
              {catLabel(topic.cats, cid, isCN)}
            </span>
          ))}
        </div>
        {tech.bench && tech.bench.length > 0 && (
          <>
            <div className="modal-div"></div>
            <div className="modal-label">Benchmark</div>
            <table className="bench-table">
              <thead><tr><th>{isCN?'模型':'Model'}</th><th>{isCN?'指标':'Metric'}</th><th>{isCN?'数据集':'Dataset'}</th><th>{isCN?'结果':'Result'}</th><th>{isCN?'备注':'Note'}</th></tr></thead>
              <tbody>{tech.bench.map((b, i) => <tr key={i}><td>{b.m}</td><td>{b.metric}</td><td>{b.ds}</td><td>{b.v}</td><td>{b.n}</td></tr>)}</tbody>
            </table>
          </>
        )}
        {relShown.length > 0 && (
          <>
            <div className="modal-div"></div>
            <div className="modal-label">{isCN ? '同类技术' : 'Related Techniques'}</div>
            <div className="modal-related">
              {relShown.map(t => (
                <div key={t.id} className="modal-rel-item" onClick={() => onOpenRelated(t)}>
                  <span className="modal-rel-title">{isCN ? t.cn : t.name}</span>
                  <span className={`modal-rel-badge ${bClass(t.badge)}`}>{t.badge}</span>
                </div>
              ))}
            </div>
          </>
        )}
        {crossRefs.length > 0 && (
          <>
            <div className="modal-div"></div>
            <div className="modal-label">{isCN ? '其他主题相关' : 'Also in Other Topics'}</div>
            <div className="modal-cross-topics">
              {crossRefs.map(r => (
                <div key={r.topic} className="modal-cross-topic">
                  <div className="modal-cross-topic-label">{r.label}:</div>
                  {r.items.map(t => (
                    <div key={t.id} className="modal-cross-item" onClick={() => onOpenCrossTopic(r.topic, t)}>
                      <span>{isCN ? t.cn : t.name}</span>
                      <span className={`modal-cross-badge ${bClass(t.badge)}`}>{t.badge}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TechModal;
