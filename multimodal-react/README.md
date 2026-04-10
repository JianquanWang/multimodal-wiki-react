# Multimodal Wiki | 多模态AI指南

🧠 Comprehensive guide to multimodal AI techniques — **LLM / VLM / VLA / World Models**

🌐 **Live Demo:** https://multimodalwiki.ai

> A curated, practical guide covering 106+ techniques across four domains: LLM efficiency, Vision-Language Models, Vision-Language-Action (robotics), and World Models.

## Features | 功能特点

- **106+ techniques** with descriptions, paper citations, and benchmark comparisons
- **Bilingual** — full Chinese / English (EN/CN toggle)
- **Benchmark rankings** with bar charts per category
- **Tag search** and category filtering
- **Modal cards** — click any technique to see details, related methods, and cross-topic references
- **Dark theme** UI

## Topics | 主题

| Topic | 技术领域 | Techniques |
|-------|----------|------------|
| **LLM** | 大语言模型训练与推理效率 | 20 techniques across 14 categories |
| **VLM** | 视觉-语言多模态模型 | 32 techniques across 8 categories |
| **VLA** | 机器人VLA：操控、导航与模仿学习 | 24 techniques across 8 categories |
| **World Models** | 世界模型：NeRF / Gaussian / MBRL / 仿真环境 | 30 techniques across 8 categories |

## Tech Stack | 技术栈

- React 18 + Vite
- Pure CSS (no Tailwind)
- Deployed via `npm run build` → `dist/`

## Development | 开发

```bash
npm install
npm run dev    # dev server on http://localhost:5173
npm run build  # production build → dist/
```

## Data | 数据

Technique data lives in `src/data/`:
- `topics.js` — techniques, categories, descriptions
- `papers.json` — paper metadata with arXiv/GitHub/HuggingFace links
- `benchmarks/` — benchmark rankings per topic

## License

MIT
