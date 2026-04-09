# MAG.wiki — Data Maintenance Guide

This document explains how to update papers and benchmark data in MAG.wiki.

---

## Data Architecture

```
src/data/
├── papers.json                  # Canonical paper registry (all papers)
├── benchmarks/
│   ├── llm.json                 # LLM benchmark data (14 categories)
│   ├── vlm.json                 # VLM benchmark data (5 categories)
│   ├── vla.json                 # VLA benchmark data (3 categories)
│   └── world.json               # World Models benchmark data (5 categories)
├── topics.js                    # GENERATED FILE — do not edit manually
└── topics.js.bak                # Backup before rebuild

scripts/
└── build_topics.js              # Build script — run after any data change
```

**Rule: Edit ONLY the JSON files in `src/data/`. Never edit `topics.js` directly.**

---

## Paper Registry (`papers.json`)

Each paper has this structure:

```json
{
  "papers": {
    "flashattention": {
      "id": "flashattention",
      "name": "FlashAttention",
      "title": "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
      "authors": "Dao et al.",
      "year": "2022",
      "arxiv": "https://arxiv.org/abs/2205.14135",
      "categories": [1],
      "bibtex": "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
    }
  }
}
```

**Fields:**
- `id` — URL-safe lowercase key, unique
- `name` — Short name used for matching with techniques
- `title` — Full paper title
- `authors` — Author names
- `year` — Publication year
- `arxiv` — arXiv URL (https://arxiv.org/abs/...)
- `categories` — Array of category IDs this paper belongs to
- `bibtex` — BibTeX citation string

**Adding a new paper:**
1. Find the paper's category ID from the table below
2. Add entry to `papers.json.papers`
3. Run `node scripts/build_topics.js`

---

## Category ID Reference

| ID | LLM Category | VLM Category | VLA Category | World Category |
|----|-------------|-------------|-------------|---------------|
| 1 | Attention Mechanisms | Image Encoding Latency | Robot Manipulation | NeRF Reconstruction |
| 2 | Quantization | VQA Accuracy | Imitation Learning | Generative FID |
| 3 | Model Compression | Generation Speed | Navigation | Video Prediction (FVD) |
| 4 | Parameter-Efficient FT | Training Efficiency | — | Physics Simulation |
| 5 | Memory-Efficient Training | Flickr30K Recall@1 | — | MBRL Sample Efficiency |
| 6 | Training Stability | — | — | — |
| 7 | Alignment | — | — | — |
| 8 | Data Efficiency | — | — | — |
| 9 | Inference Optimization | — | — | — |
| 10 | Long Context | — | — | — |
| 11 | RAG & Knowledge | — | — | — |
| 12 | Sparse/MoE | — | — | — |
| 13 | Architecture Innovation | — | — | — |
| 14 | Serving | — | — | — |

---

## Benchmark Files (`benchmarks/*.json`)

Each benchmark file contains categories. Each category has:

```json
{
  "1": {
    "titleCN": "注意力机制 - 显存占用 (GB)",
    "titleEN": "Attention — Memory Footprint (GB)",
    "metricCN": "显存占用 (GB)",
    "metricEN": "Memory (GB)",
    "unit": "GB",
    "higherBetter": false,
    "source": "FlashAttention paper (Dao et al., 2022)",
    "items": [
      {
        "name": "FlashAttention-2 (A100-80GB)",
        "val": 18.5,
        "color": "#e67e22",
        "note": "FA2 on A100 80GB"
      }
    ]
  }
}
```

**Fields:**
- `titleCN/EN` — Category name in Chinese and English (shown in UI)
- `metricCN/EN` — What is being measured
- `unit` — Unit string (empty string if unitless)
- `higherBetter` — `true` = higher value is better (green), `false` = lower is better
- `source` — Paper or source URL for the benchmark data
- `items` — Array of benchmark entries

**Adding a new benchmark item:**
1. Find the correct category in the topic's benchmark JSON file
2. Add entry to the `items` array
3. Run `node scripts/build_topics.js`

---

## Build Script

```bash
node scripts/build_topics.js
```

This script:
1. Loads `papers.json` and all `benchmarks/*.json` files
2. Parses the existing `topics.js`
3. Merges papers into each technique (matched by name + category)
4. Preserves all existing benchmark data in `topics.js`
5. Writes the updated `topics.js`

---

## Adding a New Technique

1. Add the technique to the original HTML source file
2. Re-extract using `fix_topics_v2.py` (in `/tmp/`)
3. Run `node scripts/build_topics.js` to inject papers

---

## Adding a New Topic

1. Add topic section to the HTML source
2. Create a new benchmark file: `src/data/benchmarks/[topic].json`
3. Re-extract with `fix_topics_v2.py`
4. Run `node scripts/build_topics.js`
5. Verify benches in `benchmarks/[topic].json` are linked to `topics.js`

---

## Recommended Update Frequency

- **Papers**: Add as new techniques are published (monthly)
- **Benchmarks**: Update when new models/versions are released (quarterly)
- **Techniques**: Update when major advances are published (monthly)

---

## Data Sources for Benchmarks

| Category | Recommended Sources |
|---------|-------------------|
| LLM Efficiency | Paper figures, GitHub README benchmarks, HuggingFace leaderboard |
| VLM/VLA | Academic benchmarks (VQA-v2, NLVR2, COCO), model cards |
| World Models | NeurIPS/ICML benchmark papers, official evaluations |
| Physics Sim | Genesis/Isaac Gym papers, official benchmarks |

**Always cite the source when adding benchmark data** using the `source` field.
