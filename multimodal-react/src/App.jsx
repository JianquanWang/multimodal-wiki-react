import { useState, useEffect } from 'react'
import { TOPICS } from './data/topics'
import { T } from './i18n/translations'

import TopicNav from './components/TopicNav'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import SubTabBar from './components/SubTabBar'
import TOC from './components/TOC'
import CategorySection from './components/CategorySection'
import BackToTop from './components/BackToTop'
import TechModal from './components/TechModal'
import BenchmarksPage from './components/BenchmarksPage'
import TagsPage from './components/TagsPage'
import TagModal from './components/TagModal'

function parseBQ(q) {
  const m = q.match(/([a-zA-Z%/\s]+)\s*(>=|<=|>|<)\s*([\d.]+)/i)
  if (!m) return null
  return { metric: m[1].trim().toLowerCase(), op: m[2], val: parseFloat(m[3]) }
}

function matchBench(tech, bq) {
  if (!bq || !tech.bench || !tech.bench.length) return true
  for (const b of tech.bench) {
    const bm = b.metric.toLowerCase()
    if (!bm.includes(bq.metric) && !bq.metric.includes(bm)) continue
    const nm = b.v.match(/([\d.]+)/)
    if (!nm) continue
    const num = parseFloat(nm[1])
    let pass = false
    if (bq.op === '>') pass = num > bq.val
    else if (bq.op === '<') pass = num < bq.val
    else if (bq.op === '>=') pass = num >= bq.val
    else if (bq.op === '<=') pass = num <= bq.val
    if (pass) return true
  }
  return false
}

export default function App() {
  const [curTopic, setCurTopic] = useState('llm')
  const [curLang, setCurLang] = useState('cn')
  const [curSubTab, setCurSubTab] = useState('main')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCat, setActiveCat] = useState('all')
  const [modalTech, setModalTech] = useState(null)
  const [tagModalCat, setTagModalCat] = useState(null)
  const [activeBenchCat, setActiveBenchCat] = useState(null)

  const topic = TOPICS[curTopic]
  const isCN = curLang === 'cn'
  const bq = parseBQ(searchQuery)
  const hasFilter = searchQuery !== '' || activeCat !== 'all'

  const sections = topic.cats.map(cat => {
    // visible = techs to SHOW (respects search/bench filter); allForCat = ALL techs in this category (for dimming)
    const allForCat = topic.techs.filter(t => t.categories.includes(cat.id))
    const visible = allForCat.filter(tech => {
      const matchQ = !searchQuery ? true : (tech.name + ' ' + tech.cn + ' ' + (tech.paper || '')).toLowerCase().includes(searchQuery.toLowerCase())
      const matchB = !bq ? true : matchBench(tech, bq)
      return matchQ && matchB
    })
    return { cat, visible, allForCat }
  })

  const visibleCount = sections.reduce((acc, s) => acc + s.visible.length, 0)
  const benchKeys = topic.benches ? Object.keys(topic.benches) : []

  useEffect(() => {
    if (curSubTab === 'bench' && benchKeys.length > 0 && !activeBenchCat) {
      setActiveBenchCat(parseInt(benchKeys[0]))
    }
  }, [curSubTab])

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') { setModalTech(null); setTagModalCat(null) } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const benchQuery = bq ? `${bq.metric} ${bq.op} ${bq.val}${bq.val > 10 ? 'x' : '%'}` : null

  return (
    <div>
      <TopicNav currentTopic={curTopic} lang={curLang}
        onTopicChange={t => { setCurTopic(t); setCurSubTab('main'); setSearchQuery(''); setActiveCat('all'); setModalTech(null); setTagModalCat(null) }}
        onLangChange={setCurLang} />
      <Hero topicData={topic} isCN={isCN} visibleCount={visibleCount} hasFilter={hasFilter} />
      <SearchBar value={searchQuery} onChange={setSearchQuery}
        categories={topic.cats} activeCat={activeCat} onCatChange={setActiveCat}
        isCN={isCN} benchQuery={benchQuery} />
      <div className="container">
        <SubTabBar active={curSubTab} onChange={setCurSubTab} isCN={isCN} />
        {curSubTab === 'main' && (
          <>
            <TOC categories={topic.cats} isCN={isCN} />
            {sections.map(({ cat, visible, allForCat }) => (
              <CategorySection key={cat.id} cat={cat} techs={visible} allForCat={allForCat}
                cats={topic.cats} lang={curLang} onOpenTech={setModalTech}
                activeCat={activeCat} />
            ))}
            {visibleCount === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text3)' }}>
                <i className="fas fa-search" style={{ fontSize: '2rem', marginBottom: 12, display: 'block', opacity: 0.5 }}></i>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 6 }}>{isCN ? T.noResultsCN : T.noResultsEN}</div>
                <div style={{ fontSize: '0.8rem' }}>{isCN ? T.noResultsHintCN : T.noResultsHintEN}</div>
              </div>
            )}
          </>
        )}
        {curSubTab === 'bench' && (
          <BenchmarksPage benches={topic.benches} cats={topic.cats} techs={topic.techs} isCN={isCN}
            onOpenTech={setModalTech} />
        )}
        {curSubTab === 'tags' && (
          <TagsPage cats={topic.cats} techs={topic.techs} isCN={isCN} onOpenTag={setTagModalCat} />
        )}
      </div>
      {modalTech && (
        <TechModal tech={modalTech} topicName={curTopic} topic={topic} topics={TOPICS}
          isCN={isCN} onClose={() => setModalTech(null)}
          onOpenRelated={setModalTech}
          onOpenCrossTopic={(tn, t) => { setCurTopic(tn); setModalTech(null); setTimeout(() => setModalTech(t), 80) }} />
      )}
      {tagModalCat && (
        <TagModal cat={tagModalCat} techs={topic.techs} isCN={isCN}
          onClose={() => setTagModalCat(null)}
          onOpenTech={t => { setTagModalCat(null); setModalTech(t) }} />
      )}
      <BackToTop />
    </div>
  )
}
