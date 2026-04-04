// ═══════════════════════════════════════════════════════════════════
// TopicNav - Top navigation (LLM|VLM|VLA|World) + CN/EN language toggle
// ═══════════════════════════════════════════════════════════════════

const TOPIC_KEYS = ['llm', 'vlm', 'vla', 'world'];
const TOPIC_LABELS = { llm: 'LLM', vlm: 'VLM', vla: 'VLA', world: 'World Models' };

function TopicNav({ currentTopic, onTopicChange, lang, onLangChange }) {
  return (
    <div className="topic-nav">
      <div className="topic-nav-inner">
        <div className="topic-logo">
          <span>MAG</span>.wiki
        </div>
        <div className="topic-tabs">
          {TOPIC_KEYS.map(topic => (
            <button
              key={topic}
              className={`topic-tab ${currentTopic === topic ? 'active' : ''}`}
              onClick={() => onTopicChange(topic)}
            >
              {topic === 'llm' ? 'LLM' :
               topic === 'vlm' ? 'VLM' :
               topic === 'vla' ? 'VLA' : 'World Models'}
            </button>
          ))}
        </div>
        <div className="topic-spacer"></div>
        <div className="lang-wrap">
          <button
            className={`lang-btn ${lang === 'cn' ? 'active' : ''}`}
            id="langCN"
            onClick={() => onLangChange('cn')}
          >
            中文
          </button>
          <button
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            id="langEN"
            onClick={() => onLangChange('en')}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopicNav;
