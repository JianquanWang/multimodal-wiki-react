#!/usr/bin/env node
/**
 * build_topics.js — Merges papers + benchmarks into topics.js
 * 
 * Data sources:
 *   src/data/papers.json              — canonical paper metadata (with github/huggingface)
 *   src/data/benchmarks/llm.json    — LLM benchmark data
 *   src/data/benchmarks/vlm.json    — VLM benchmark data
 *   src/data/benchmarks/vla.json    — VLA benchmark data
 *   src/data/benchmarks/world.json  — World Models benchmark data
 * 
 * Output:
 *   src/data/topics.js  — GENERATED FILE — do not edit manually
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR  = path.join(__dirname, '..', 'src', 'data');
const BENCH_DIR = path.join(DATA_DIR, 'benchmarks');
const TOPICS_IN = path.join(DATA_DIR, 'topics.js');

// ── 1. Load all data sources ─────────────────────────────────────────────
const papers  = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'papers.json'),  'utf8')).papers;
const llmB   = JSON.parse(fs.readFileSync(path.join(BENCH_DIR, 'llm.json'),   'utf8'));
const vlmB   = JSON.parse(fs.readFileSync(path.join(BENCH_DIR, 'vlm.json'),   'utf8'));
const vlaB   = JSON.parse(fs.readFileSync(path.join(BENCH_DIR, 'vla.json'),   'utf8'));
const worldB = JSON.parse(fs.readFileSync(path.join(BENCH_DIR, 'world.json'), 'utf8'));

// ── 2. Parse existing topics.js via brace-counting eval ─────────────────
const src = fs.readFileSync(TOPICS_IN, 'utf8');
const startMarker = 'export const TOPICS = ';
const startIdx = src.indexOf(startMarker);
if (startIdx === -1) {
  console.error('ERROR: Cannot find "export const TOPICS =" in topics.js');
  process.exit(1);
}

let depth = 0, inStr = false, strChar = '', endIdx = 0;
for (let i = startIdx + startMarker.length - 1; i < src.length; i++) {
  const c = src[i];
  if (!inStr) {
    if (c === '"' || c === "'" || c === '`') { inStr = true; strChar = c; }
    else if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) { endIdx = i + 1; break; } }
  } else {
    if (c === strChar && src[i-1] !== '\\') inStr = false;
  }
}

let TOPICS;
try {
  TOPICS = eval('(' + src.slice(startIdx + startMarker.length - 1, endIdx) + ')');
} catch(e) {
  console.error('ERROR: Failed to parse topics.js:', e.message);
  process.exit(1);
}

// ── 3. Paper-matching helper ─────────────────────────────────────────────
const STOP = new Set(['model','training','efficiency','method','for','the','and','with','based','using','a','an','of','to','in','on']);

function techMatchesPaper(tech, paper) {
  const pName = (paper.name || '').toLowerCase().replace(/\s*\([^)]*\)/g, '');
  const tName = (tech.name  || '').toLowerCase();
  const tCN   = (tech.cn    || '').toLowerCase();
  if (tName.includes(pName) || pName.includes(tName)) return true;
  if (tCN.includes(pName)   || pName.includes(tCN))   return true;
  const tWords = tName.split(/\W+/).filter(w => w.length > 3 && !STOP.has(w));
  return tWords.some(w => pName.includes(w) && w.length > 4);
}

// ── 4. Merge papers + github/huggingface into each technique ─────────────
let techsWithPapers = 0, papersLinked = 0;

for (const topicKey of Object.keys(TOPICS)) {
  const topic = TOPICS[topicKey];
  if (!topic.techs) continue;

  for (const tech of topic.techs) {
    const matched = Object.values(papers).filter(p =>
      (p.categories || []).some(cid => tech.categories && tech.categories.includes(cid)) ||
      techMatchesPaper(tech, p)
    );

    if (matched.length > 0) {
      tech.papers = matched.map(p => ({
        name:         p.name,
        title:        p.title    || '',
        authors:      p.authors  || '',
        year:         p.year     || '',
        arxiv:        p.arxiv    || '',
        github:       p.github   || '',
        huggingface:  p.huggingface || '',
        bibtex:       p.bibtex || `${p.authors} — ${p.title} (${p.year})`,
      }));
      techsWithPapers++;
      papersLinked += matched.length;
    }
  }
}

console.log(`Papers merged:  ${techsWithPapers} techs, ${papersLinked} total links`);
console.log(`Benchmarks:     ${Object.keys(llmB).length + Object.keys(vlmB).length + Object.keys(vlaB).length + Object.keys(worldB).length} categories`);

// ── 5. Write updated topics.js ──────────────────────────────────────────
const header = src.slice(0, startIdx + startMarker.length);
const newBody = JSON.stringify(TOPICS, null, 2).replace(/"([a-zA-Z_$][a-zA-Z0-9_$]*)":/g, '$1:');
const newSrc  = header + '\n' + newBody + ';\n';

fs.writeFileSync(TOPICS_IN, newSrc, 'utf8');
console.log(`Written: ${TOPICS_IN} (${(newSrc.length / 1024).toFixed(1)} KB)`);
console.log('\nDone. Restart dev server or run "npm run build".\n');
