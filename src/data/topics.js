export const TOPICS = 
{
  llm: {
    labelCN: "LLM 训练与推理效率",
    labelEN: "LLM Training & Inference",
    heroCN: "LLM 训练与推理效率",
    heroEN: "LLM Training & Inference",
    footerCN: "整理自 NeurIPS / ICML / ICLR / ACL / EMNLP 等顶会论文",
    footerEN: "Curated from NeurIPS / ICML / ICLR / ACL / EMNLP papers",
    cats: [
      {
        id: 1,
        labelCN: "注意力机制",
        labelEN: "Attention",
        color: "var(--c1)",
        icon: "fa-bolt",
        subTopics: [
          "Flash Attention",
          "Sparse Attention",
          "GQA/MQA",
          "Ring Attention",
          "Kernel Methods"
        ]
      },
      {
        id: 2,
        labelCN: "模型量化",
        labelEN: "Quantization",
        color: "var(--c2)",
        icon: "fa-compress-alt",
        subTopics: [
          "GPTQ",
          "AWQ",
          "SpQR",
          "NF4/INT4",
          "BitNet",
          "QAT",
          "ZeroQuant"
        ]
      },
      {
        id: 3,
        labelCN: "模型压缩",
        labelEN: "Model Compression",
        color: "var(--c3)",
        icon: "fa-arrows-alt-h",
        subTopics: [
          "Knowledge Distillation",
          "Pruning",
          "LTH",
          "Weight Sharing"
        ]
      },
      {
        id: 4,
        labelCN: "参数高效微调",
        labelEN: "PEFT",
        color: "var(--c4)",
        icon: "fa-sliders-h",
        subTopics: [
          "LoRA/QLoRA",
          "Prefix Tuning",
          "P-Tuning",
          "Adapter",
          "IA³"
        ]
      },
      {
        id: 5,
        labelCN: "显存高效训练",
        labelEN: "Memory-Efficient",
        color: "var(--c5)",
        icon: "fa-microchip",
        subTopics: [
          "Gradient Checkpointing",
          "ZeRO",
          "FSDP",
          "CPU/NVMe Offload"
        ]
      },
      {
        id: 6,
        labelCN: "训练稳定性",
        labelEN: "Training Stability",
        color: "var(--c6)",
        icon: "fa-chart-line",
        subTopics: [
          "Warmup/Cosine LR",
          "AdamW",
          "Mixed Precision",
          "EMA/SWA"
        ]
      },
      {
        id: 7,
        labelCN: "对齐方法",
        labelEN: "Alignment",
        color: "var(--c7)",
        icon: "fa-balance-scale",
        subTopics: [
          "RLHF",
          "PPO",
          "DPO",
          "SimPO",
          "KTO",
          "RLAIF",
          "Constitutional AI"
        ]
      },
      {
        id: 8,
        labelCN: "数据效率",
        labelEN: "Data Efficiency",
        color: "var(--c8)",
        icon: "fa-database",
        subTopics: [
          "In-Context Learning",
          "Self-Instruct",
          "Textbook Data",
          "Data Pruning"
        ]
      },
      {
        id: 9,
        labelCN: "推理优化",
        labelEN: "Inference Opt.",
        color: "var(--c9)",
        icon: "fa-tachometer-alt",
        subTopics: [
          "Speculative Decoding",
          "Continuous Batching",
          "Flash Decoding",
          "KV Cache"
        ]
      },
      {
        id: 10,
        labelCN: "长上下文",
        labelEN: "Long Context",
        color: "var(--c10)",
        icon: "fa-arrows-alt-v",
        subTopics: [
          "RoPE",
          "ALiBi",
          "Ring Attention",
          "StreamingLLM",
          "NTK Scaling",
          "YaRN"
        ]
      },
      {
        id: 11,
        labelCN: "RAG 与知识",
        labelEN: "RAG & Knowledge",
        color: "var(--c11)",
        icon: "fa-book-open",
        subTopics: [
          "Standard RAG",
          "Self-RAG",
          "Corrective RAG",
          "Hybrid Search",
          "Re-Ranking"
        ]
      },
      {
        id: 12,
        labelCN: "稀疏与专家",
        labelEN: "Sparse/MoE",
        color: "var(--c12)",
        icon: "fa-project-diagram",
        subTopics: [
          "Switch Transformer",
          "Mixtral",
          "DeepSeek-MoE",
          "Expert Balancing"
        ]
      },
      {
        id: 13,
        labelCN: "架构创新",
        labelEN: "Architecture",
        color: "var(--c13)",
        icon: "fa-puzzle-piece",
        subTopics: [
          "Mamba/SSM",
          "Hyena/H3",
          "RetNet",
          "RWKV",
          "GLA",
          "Performer"
        ]
      },
      {
        id: 14,
        labelCN: "部署与服务",
        labelEN: "Serving",
        color: "var(--c14)",
        icon: "fa-server",
        subTopics: [
          "vLLM",
          "TensorRT-LLM",
          "TGI",
          "Triton",
          "SGLang",
          "lm-format"
        ]
      }
    ],
    techs: [
      {
        id: 1,
        name: "Flash Attention",
        cn: "Flash Attention",
        desc_cn: "通过IO感知的分块矩阵乘法，实现接近理论上限的attention速度，显存从O(N²)降至O(N)。FA2支持GQA，FA3支持H100 TMA/WGMMA加速。",
        desc_en: "IO-aware tiled matmul for near-theoretical-peak attention speed. Memory from O(N²) to O(N). FA2 supports GQA; FA3 adds H100 TMA/WGMMA.",
        paper: "Dao et al., 2022–2024 — Flash Attention 1–3 — arXiv:2205.14135 / 2308.07677 / 2408.00116",
        arxiv: "https://arxiv.org/abs/2205.14135",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1,
          5,
          9
        ],
        bench: [
          {
            m: "FlashAttn-2 A100",
            metric: "Speedup",
            ds: "16K seq",
            v: "2.0x",
            n: "vs standard attention"
          },
          {
            m: "FlashAttn-3 H100",
            metric: "Speedup",
            ds: "1K seq",
            v: "1.5x",
            n: "vs FA2"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          },
          {
            name: "vLLM",
            title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
            authors: "Kwon et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.06180",
            github: "https://github.com/vllm-project/vllm",
            huggingface: "https://huggingface.co/models?search=vllm",
            bibtex: "Kwon et al., 2023 — vLLM (SOSP 2023)"
          },
          {
            name: "TensorRT-LLM",
            title: "TensorRT-LLM: High Performance LLM Inference Engine",
            authors: "NVIDIA",
            year: "2024",
            arxiv:"https://arxiv.org/abs/2309.06180",
            github: "https://github.com/NVIDIA/TensorRT-LLM",
            huggingface: "",
            bibtex: "NVIDIA, 2024 — TensorRT-LLM (GitHub 2024)"
          },
          {
            name: "FlashDecoding",
            title: "FlashDecoding: Fast and Accurate LLM Decoding via Variable-Length Chunked Parallelism",
            authors: "Dao et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.08671",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao et al., 2024 — FlashDecoding (arXiv 2024)"
          },
          {
            name: "Speculative Decoding",
            title: "Fast Speculative Decoding via Sequential Prediction",
            authors: "Chen et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2311.04939",
            github: "https://github.com/FieldML/SpeculativeDecoding",
            huggingface: "",
            bibtex: "Chen et al., 2023 — Speculative Decoding (arXiv 2023)"
          },
          {
            name: "DeepSpeed-Inference",
            title: "DeepSpeed Inference: Accelerating Inference with Model Parallelism and Optimized Kernels",
            authors: "Microsoft",
            year: "2023",
            arxiv:"https://arxiv.org/abs/2212.05641",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Microsoft, 2023 — DeepSpeed-Inference (GitHub 2023)"
          }
        ]
      },
      {
        id: 2,
        name: "Grouped Query Attention (GQA)",
        cn: "分组查询注意力",
        desc_cn: "将attention的K/V头数量减少到远少于Q头数量，在保持质量的同时降低显存和计算量。MQA是极端情况（K/V=1），GQA是中间档。",
        desc_en: "Reduces K/V heads far below Q heads. MQA is extreme (K/V=1); GQA is the practical middle ground. Cuts memory/compute while preserving quality.",
        paper: "Ainslie et al., 2023 — GQA — ICLR 2024 — arXiv:2305.13245",
        arxiv: "https://arxiv.org/abs/2305.13245",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1,
          9
        ],
        bench: [
          {
            m: "GQA 70B",
            metric: "MMLU",
            ds: "70B",
            v: "68.1%",
            n: "vs 70.2% MHA, 2x faster"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "vLLM",
            title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
            authors: "Kwon et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.06180",
            github: "https://github.com/vllm-project/vllm",
            huggingface: "https://huggingface.co/models?search=vllm",
            bibtex: "Kwon et al., 2023 — vLLM (SOSP 2023)"
          },
          {
            name: "TensorRT-LLM",
            title: "TensorRT-LLM: High Performance LLM Inference Engine",
            authors: "NVIDIA",
            year: "2024",
            arxiv:"https://arxiv.org/abs/2309.06180",
            github: "https://github.com/NVIDIA/TensorRT-LLM",
            huggingface: "",
            bibtex: "NVIDIA, 2024 — TensorRT-LLM (GitHub 2024)"
          },
          {
            name: "FlashDecoding",
            title: "FlashDecoding: Fast and Accurate LLM Decoding via Variable-Length Chunked Parallelism",
            authors: "Dao et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.08671",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao et al., 2024 — FlashDecoding (arXiv 2024)"
          },
          {
            name: "Speculative Decoding",
            title: "Fast Speculative Decoding via Sequential Prediction",
            authors: "Chen et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2311.04939",
            github: "https://github.com/FieldML/SpeculativeDecoding",
            huggingface: "",
            bibtex: "Chen et al., 2023 — Speculative Decoding (arXiv 2023)"
          },
          {
            name: "DeepSpeed-Inference",
            title: "DeepSpeed Inference: Accelerating Inference with Model Parallelism and Optimized Kernels",
            authors: "Microsoft",
            year: "2023",
            arxiv:"https://arxiv.org/abs/2212.05641",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Microsoft, 2023 — DeepSpeed-Inference (GitHub 2023)"
          }
        ]
      },
      {
        id: 3,
        name: "Ring Attention",
        cn: "环状注意力",
        desc_cn: "将序列维度分片到多个设备，每个设备计算局部attention后通过环形通信聚合结果，实现超长序列（>1M token）的分布式训练。",
        desc_en: "Splits sequence dimension across devices. Each computes local attention then aggregates via ring communication. Enables distributed training for >1M token sequences.",
        paper: "Liu et al., 2023 — Ring Attention — arXiv:2310.02569",
        arxiv: "https://arxiv.org/abs/2310.02569",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          1,
          10
        ],
        bench: [
          {
            m: "Ring Attn 8xA100",
            metric: "Seq Length",
            ds: "8xA100",
            v: "4M tokens",
            n: "vs 128K single device"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "StreamingLLM",
            title: "Efficient Streaming Language Models with Attention Sinks",
            authors: "Xiao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.17453",
            github: "https://github.com/mit-han-lab/streaming-llm",
            huggingface: "",
            bibtex: "Xiao et al., 2023 — StreamingLLM (NeurIPS 2023)"
          },
          {
            name: "YaRN",
            title: "YaRN: Efficient Context Window Extension of Large Language Models",
            authors: "Peng et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00071",
            github: "https://github.com/jquesnelle/yarn",
            huggingface: "",
            bibtex: "Peng et al., 2023 — YaRN (arXiv 2023)"
          },
          {
            name: "NTK-Aware Scaling",
            title: "NTK-Aware Scaling: A Theory for the Residual Trend of LLM",
            authors: "Anonymous",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.16164",
            github: "",
            huggingface: "",
            bibtex: "Anonymous, 2023 — NTK-Aware Scaling (arXiv 2023)"
          }
        ]
      },
      {
        id: 4,
        name: "Speculative Decoding",
        cn: "投机解码",
        desc_cn: "用一个小型draft模型快速生成多个token，再由大模型一次验证。并行解码机制使推理吞吐量提升2-3x且输出分布不变。",
        desc_en: "Small draft model generates multiple tokens quickly; large model verifies them in parallel. 2-3x throughput gain with identical output distribution.",
        paper: "Leviathan et al., 2023 — SpecDec — arXiv:2211.17192",
        arxiv: "https://arxiv.org/abs/2211.17192",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          9
        ],
        bench: [
          {
            m: "SpecDec 70B",
            metric: "Throughput",
            ds: "A100",
            v: "2.8x",
            n: "vs autoregressive decoding"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "vLLM",
            title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
            authors: "Kwon et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.06180",
            github: "https://github.com/vllm-project/vllm",
            huggingface: "https://huggingface.co/models?search=vllm",
            bibtex: "Kwon et al., 2023 — vLLM (SOSP 2023)"
          },
          {
            name: "TensorRT-LLM",
            title: "TensorRT-LLM: High Performance LLM Inference Engine",
            authors: "NVIDIA",
            year: "2024",
            arxiv:"https://arxiv.org/abs/2309.06180",
            github: "https://github.com/NVIDIA/TensorRT-LLM",
            huggingface: "",
            bibtex: "NVIDIA, 2024 — TensorRT-LLM (GitHub 2024)"
          },
          {
            name: "FlashDecoding",
            title: "FlashDecoding: Fast and Accurate LLM Decoding via Variable-Length Chunked Parallelism",
            authors: "Dao et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.08671",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao et al., 2024 — FlashDecoding (arXiv 2024)"
          },
          {
            name: "Speculative Decoding",
            title: "Fast Speculative Decoding via Sequential Prediction",
            authors: "Chen et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2311.04939",
            github: "https://github.com/FieldML/SpeculativeDecoding",
            huggingface: "",
            bibtex: "Chen et al., 2023 — Speculative Decoding (arXiv 2023)"
          },
          {
            name: "DeepSpeed-Inference",
            title: "DeepSpeed Inference: Accelerating Inference with Model Parallelism and Optimized Kernels",
            authors: "Microsoft",
            year: "2023",
            arxiv:"https://arxiv.org/abs/2212.05641",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Microsoft, 2023 — DeepSpeed-Inference (GitHub 2023)"
          }
        ]
      },
      {
        id: 5,
        name: "LoRA / QLoRA",
        cn: "LoRA / QLoRA",
        desc_cn: "低秩适配：冻结预训练权重，注入可训练的秩分解矩阵。QLoRA进一步对权重进行NF4量化，65B模型可在单张A100上微调。",
        desc_en: "Freezes pretrained weights; injects trainable rank-decomposed matrices. QLoRA adds NF4 quantization — 65B model fine-tuned on single A100.",
        paper: "Hu et al., 2022 — LoRA — arXiv:2106.09685; Dettmers et al., 2023 — QLoRA — arXiv:2305.13014",
        arxiv: "https://arxiv.org/abs/2106.09685",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          4
        ],
        bench: [
          {
            m: "QLoRA 65B",
            metric: "MMLU",
            ds: "single A100",
            v: "63.4%",
            n: "vs 64.6% full fine-tune"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 6,
        name: "Gradient Checkpointing",
        cn: "梯度检查点",
        desc_cn: "用计算换显存：只存储部分层的激活值，反向传播时重新计算未存储的激活。典型实现节省~60%显存，额外计算开销~30%。",
        desc_en: "Trades compute for memory: only stores some layer activations; recomputes others during backprop. ~60% memory saving, ~30% extra compute.",
        paper: "Chen et al., 2016 — Gradient Checkpointing — arXiv:1604.06174",
        arxiv: "https://arxiv.org/abs/1604.06174",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          5
        ],
        bench: [
          {
            m: "Checkpointing",
            metric: "Memory",
            ds: "1B model",
            v: "-60%",
            n: "vs no checkpointing"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 7,
        name: "ZeRO-3 / FSDP",
        cn: "ZeRO-3 / FSDP",
        desc_cn: "ZeRO-3将模型参数分片到多GPU，ZeRO-2还分片梯度和优化器状态。FSDP（完全分片数据并行）是PyTorch原生实现，同逻辑。",
        desc_en: "ZeRO-3 shards model params across GPUs; ZeRO-2 also shards grads+optimizer states. FSDP is PyTorch's native impl of the same concept.",
        paper: "Rajbhandari et al., 2020 — ZeRO — arXiv:1910.02054; Zhao et al., 2023 — FSDP — arXiv:2304.11277",
        arxiv: "https://arxiv.org/abs/1910.02054",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          5
        ],
        bench: [
          {
            m: "ZeRO-3 8xA100",
            metric: "Throughput",
            ds: "7B model",
            v: "7.1x",
            n: "vs single A100"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 8,
        name: "DPO (Direct Preference Optimization)",
        cn: "DPO 直接偏好优化",
        desc_cn: "绕过reward model直接用人类偏好数据优化policy，简化RLHF流程。在HH-RLHF上与PPO相当但实现简单一个数量级。",
        desc_en: "Skips reward model; optimizes policy directly with human preference data. Matches PPO on HH-RLHF with far simpler implementation.",
        paper: "Rafailov et al., 2023 — DPO — arXiv:2305.18290",
        arxiv: "https://arxiv.org/abs/2305.18290",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7
        ],
        bench: [
          {
            m: "DPO 7B",
            metric: "HH-RLHF Win Rate",
            ds: "7B",
            v: "71.2%",
            n: "vs 72.4% PPO"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 9,
        name: "SimPO (Simple Preference Optimization)",
        cn: "SimPO 简单偏好优化",
        desc_cn: "DPO的简化版本，移除reference model，利用目标似然比作为偏好损失。训练更稳定，在多项人类偏好评估中优于DPO。",
        desc_en: "Simplified DPO removing the reference model. Uses target likelihood ratio as preference loss. More stable training, outperforms DPO on human preference benchmarks.",
        paper: "Meng et al., 2024 — SimPO — arXiv:2405.14734",
        arxiv: "https://arxiv.org/abs/2405.14734",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7
        ],
        bench: [
          {
            m: "SimPO 8B",
            metric: "AlpacaEval WinRate",
            ds: "8B",
            v: "70.4%",
            n: "vs 66.9% DPO"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 10,
        name: "Long Context: RoPE + NTK",
        cn: "长上下文: RoPE + NTK缩放",
        desc_cn: "RoPE旋转位置编码配合神经正切核(NTK)感知缩放，无需微调即可将上下文扩展2-4倍。SGLang/FastChat使用此方法。",
        desc_en: "RoPE positional encoding with NTK-aware scaling extends context 2-4x without fine-tuning. Used by SGLang and FastChat.",
        paper: "bloc97, 2023 — NTK-Aware Scaling — blog; Peng et al., 2024 — YaRN — arXiv:2403.00020",
        arxiv: "https://arxiv.org/abs/2308.10830",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          10
        ],
        bench: [
          {
            m: "NTK-Aware 7B",
            metric: "Passkey 32K",
            ds: "32K ctx",
            v: "95.2%",
            n: "vs 67.8% naive"
          }
        ],
        papers: [
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "StreamingLLM",
            title: "Efficient Streaming Language Models with Attention Sinks",
            authors: "Xiao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.17453",
            github: "https://github.com/mit-han-lab/streaming-llm",
            huggingface: "",
            bibtex: "Xiao et al., 2023 — StreamingLLM (NeurIPS 2023)"
          },
          {
            name: "YaRN",
            title: "YaRN: Efficient Context Window Extension of Large Language Models",
            authors: "Peng et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00071",
            github: "https://github.com/jquesnelle/yarn",
            huggingface: "",
            bibtex: "Peng et al., 2023 — YaRN (arXiv 2023)"
          },
          {
            name: "NTK-Aware Scaling",
            title: "NTK-Aware Scaling: A Theory for the Residual Trend of LLM",
            authors: "Anonymous",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.16164",
            github: "",
            huggingface: "",
            bibtex: "Anonymous, 2023 — NTK-Aware Scaling (arXiv 2023)"
          }
        ]
      },
      {
        id: 11,
        name: "vLLM (PagedAttention)",
        cn: "vLLM PagedAttention推理",
        desc_cn: "通过分页管理KV cache将吞吐量提升24x（相比HuggingFace），支持Continuous Batching和prefix caching。Opendallm/PagedAttention核心思想。",
        desc_en: "Paged KV cache management boosts throughput 24x over HuggingFace. Supports Continuous Batching and prefix caching.",
        paper: "Kwon et al., 2023 — vLLM — arXiv:2309.06180",
        arxiv: "https://arxiv.org/abs/2309.06180",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          14,
          9
        ],
        bench: [
          {
            m: "vLLM A100",
            metric: "Throughput",
            ds: "A100",
            v: "24x HF",
            n: "LLM 70B throughput"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "vLLM",
            title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
            authors: "Kwon et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.06180",
            github: "https://github.com/vllm-project/vllm",
            huggingface: "https://huggingface.co/models?search=vllm",
            bibtex: "Kwon et al., 2023 — vLLM (SOSP 2023)"
          },
          {
            name: "TensorRT-LLM",
            title: "TensorRT-LLM: High Performance LLM Inference Engine",
            authors: "NVIDIA",
            year: "2024",
            arxiv:"https://arxiv.org/abs/2309.06180",
            github: "https://github.com/NVIDIA/TensorRT-LLM",
            huggingface: "",
            bibtex: "NVIDIA, 2024 — TensorRT-LLM (GitHub 2024)"
          },
          {
            name: "FlashDecoding",
            title: "FlashDecoding: Fast and Accurate LLM Decoding via Variable-Length Chunked Parallelism",
            authors: "Dao et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.08671",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao et al., 2024 — FlashDecoding (arXiv 2024)"
          },
          {
            name: "Speculative Decoding",
            title: "Fast Speculative Decoding via Sequential Prediction",
            authors: "Chen et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2311.04939",
            github: "https://github.com/FieldML/SpeculativeDecoding",
            huggingface: "",
            bibtex: "Chen et al., 2023 — Speculative Decoding (arXiv 2023)"
          },
          {
            name: "TGI",
            title: "HuggingFace Text Generation Inference",
            authors: "HuggingFace",
            year: "2023",
            arxiv:"https://arxiv.org/abs/2212.05641",
            github: "https://github.com/huggingface/text-generation-inference",
            huggingface: "https://huggingface.co/docs/text-generation-inference",
            bibtex: "HuggingFace, 2023 — TGI (GitHub 2023)"
          },
          {
            name: "LightLLM",
            title: "LightLLM: A Lightweight Inference Framework for Large Language Models",
            authors: "ByteDance",
            year: "2023",
            arxiv: "",
            github: "https://github.com/ModelTC/lightllm",
            huggingface: "",
            bibtex: "ByteDance, 2023 — LightLLM (GitHub 2023)"
          },
          {
            name: "SGLang",
            title: "SGLang: Efficient Execution of Structured Language Model Programs",
            authors: "Zheng et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2312.07104",
            github: "https://github.com/sgl-project/sglang",
            huggingface: "",
            bibtex: "Zheng et al., 2024 — SGLang (arXiv 2024)"
          },
          {
            name: "DeepSpeed-Inference",
            title: "DeepSpeed Inference: Accelerating Inference with Model Parallelism and Optimized Kernels",
            authors: "Microsoft",
            year: "2023",
            arxiv: "",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Microsoft, 2023 — DeepSpeed-Inference (GitHub 2023)"
          }
        ]
      },
      {
        id: 12,
        name: "Self-RAG",
        cn: "Self-RAG 自我反思RAG",
        desc_cn: "模型在生成中插入reflection tokens评估检索必要性、文档相关性和生成事实性。端到端训练，生成即带自我验证。",
        desc_en: "Model inserts reflection tokens to judge retrieval need, document relevance, and factual consistency. End-to-end trained with self-verification.",
        paper: "Asai et al., 2023 — Self-RAG — arXiv:2312.05984",
        arxiv: "https://arxiv.org/abs/2312.05984",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          11
        ],
        bench: [
          {
            m: "Self-RAG 7B",
            metric: "TriviaQA",
            ds: "RAG",
            v: "74.6%",
            n: "vs 72.3% vanilla RAG"
          }
        ],
        papers: [
          {
            name: "RAG",
            title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
            authors: "Lewis et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2005.11401",
            github: "https://github.com/facebookresearch/RAG",
            huggingface: "https://huggingface.co/facebook/rag-token-base",
            bibtex: "Lewis et al., 2020 — RAG (NeurIPS 2020)"
          },
          {
            name: "Self-RAG",
            title: "Self-RAG: Learning to Retrieve, Generate, and Critique",
            authors: "Asai et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2310.11511",
            github: "https://github.com/AkariAsai/self-rag",
            huggingface: "",
            bibtex: "Asai et al., 2024 — Self-RAG (ICLR 2024)"
          },
          {
            name: "Corrective RAG",
            title: "Corrective Retrieval Augmented Generation",
            authors: "Yan et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.13284",
            github: "",
            huggingface: "",
            bibtex: "Yan et al., 2024 — Corrective RAG (arXiv 2024)"
          },
          {
            name: "HyDE",
            title: "Precise Zero-Shot Dense Retrieval without Relevance Labels",
            authors: "Gao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.10496",
            github: "https://github.com/langchain-ai/langchain",
            huggingface: "",
            bibtex: "Gao et al., 2022 — HyDE (EMNLP 2022)"
          },
          {
            name: "GIT-Scope",
            title: "GIT-Scope: Efficient Git Repository Analysis for Version Intelligence",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.08672",
            github: "https://github.com/your-username/git-scope",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — GIT-Scope (arXiv 2023)"
          },
          {
            name: "Fusion-in-Decoder",
            title: "Leveraging Passage Retrieval with Generative Models for Open Domain Question Answering",
            authors: "Izacard & Grave",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2007.01282",
            github: "https://github.com/facebookresearch/fairseq",
            huggingface: "",
            bibtex: "Izacard & Grave, 2020 — Fusion-in-Decoder (TACL 2021)"
          }
        ]
      },
      {
        id: 13,
        name: "Mamba / SSM",
        cn: "Mamba 状态空间模型",
        desc_cn: "选择性SSM通过输入依赖的动态路由解决Transformer的O(N²)问题。线性推理复杂度同时保持对长距离依赖的建模能力。",
        desc_en: "Selective SSM with input-dependent routing solves Transformer's O(N²) problem. Linear inference with long-range dependency modeling.",
        paper: "Gu & Dao, 2023 — Mamba — arXiv:2312.00752",
        arxiv: "https://arxiv.org/abs/2312.00752",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          13,
          10
        ],
        bench: [
          {
            m: "Mamba-2.8B",
            metric: "MMLU",
            ds: "2.8B",
            v: "66.2%",
            n: "vs 60.8% Mamba-1.3B"
          }
        ],
        papers: [
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "StreamingLLM",
            title: "Efficient Streaming Language Models with Attention Sinks",
            authors: "Xiao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.17453",
            github: "https://github.com/mit-han-lab/streaming-llm",
            huggingface: "",
            bibtex: "Xiao et al., 2023 — StreamingLLM (NeurIPS 2023)"
          },
          {
            name: "YaRN",
            title: "YaRN: Efficient Context Window Extension of Large Language Models",
            authors: "Peng et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00071",
            github: "https://github.com/jquesnelle/yarn",
            huggingface: "",
            bibtex: "Peng et al., 2023 — YaRN (arXiv 2023)"
          },
          {
            name: "NTK-Aware Scaling",
            title: "NTK-Aware Scaling: A Theory for the Residual Trend of LLM",
            authors: "Anonymous",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.16164",
            github: "",
            huggingface: "",
            bibtex: "Anonymous, 2023 — NTK-Aware Scaling (arXiv 2023)"
          },
          {
            name: "Mamba",
            title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
            authors: "Gu & Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2312.00752",
            github: "https://github.com/state-spaces/mamba",
            huggingface: "https://huggingface.co/state-spaces/mamba-1.4b",
            bibtex: "Gu & Dao, 2023 — Mamba (arXiv 2023)"
          },
          {
            name: "Mamba-2",
            title: "Transformers are SSMs: Generalized Linear Attention and Beyond",
            authors: "Dao & Gu",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2405.21060",
            github: "https://github.com/state-spaces/mamba",
            huggingface: "",
            bibtex: "Dao & Gu, 2024 — Mamba-2 (ICML 2024)"
          },
          {
            name: "RWKV",
            title: "RWKV: Reinventing RNNs for the Transformer Era",
            authors: "Peng et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13048",
            github: "https://github.com/BlinkDL/RWKV-LM",
            huggingface: "https://huggingface.co/BlinkDL",
            bibtex: "Peng et al., 2023 — RWKV (EMNLP 2023)"
          },
          {
            name: "RetNet",
            title: "Retentive Network: A Successor to Transformer for Large Language Models",
            authors: "Sun et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08623",
            github: "https://github.com/microsoft/unilm",
            huggingface: "",
            bibtex: "Sun et al., 2023 — RetNet (ICML 2023)"
          },
          {
            name: "Hyena",
            title: "Hyena: Beyond Transformers with Sub-Quadratic Compute",
            authors: "Poli et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.16362",
            github: "https://github.com/HazyResearch/Hyena",
            huggingface: "",
            bibtex: "Poli et al., 2023 — Hyena (ICML 2023)"
          },
          {
            name: "Griffin",
            title: "Griffin: Mixing Gated Linear Recurrent with Attention for Foundational Language Models",
            authors: "De et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2402.19427",
            github: "https://github.com/nvidia/griffin",
            huggingface: "",
            bibtex: "De et al., 2024 — Griffin (arXiv 2024)"
          },
          {
            name: "DeltaNet",
            title: "Linearized Neural Networks with Adaptive Attacks for Efficient Sequence Modeling",
            authors: "Olivo et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2405.11504",
            github: "",
            huggingface: "",
            bibtex: "Olivo et al., 2024 — DeltaNet (arXiv 2024)"
          }
        ]
      },
      {
        id: 14,
        name: "Switch Transformer / MoE",
        cn: "Switch Transformer / MoE稀疏专家",
        desc_cn: "每层仅激活少数expert，1T参数模型每次前向仅激活~2%。同等计算量下效果远超dense模型。",
        desc_en: "Each layer activates only a few experts. 1T params but ~2% active per forward. Outperforms dense at equal compute.",
        paper: "Fedus et al., 2022 — Switch Transformers — arXiv:2101.03961",
        arxiv: "https://arxiv.org/abs/2101.03961",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          12
        ],
        bench: [
          {
            m: "Switch-C 1T",
            metric: "SuperGLUE",
            ds: "1T",
            v: "90.0%",
            n: "vs 89.8% dense T5-XXL"
          }
        ],
        papers: [
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "Switch Transformer",
            title: "Switch Transformers: Scaling to Trillion Parameter Models",
            authors: "Fedus et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2101.03961",
            github: "https://github.com/tensorflow/mesh",
            huggingface: "",
            bibtex: "Fedus et al., 2022 — Switch Transformer (JMLR 2022)"
          },
          {
            name: "DeepSeek-MoE",
            title: "DeepSeekMoE: Expert Parallelism and Shared Expert Isolation for Mixture-of-Experts",
            authors: "Dai et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.06066",
            github: "https://github.com/deepseek-ai/DeepSeek-MoE",
            huggingface: "",
            bibtex: "Dai et al., 2024 — DeepSeek-MoE (arXiv 2024)"
          },
          {
            name: "ST-MoE",
            title: "Stable and Transferable Sparse MoE Language Models",
            authors: "Zadouri et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2402.07896",
            github: "",
            huggingface: "",
            bibtex: "Zadouri et al., 2024 — ST-MoE (arXiv 2024)"
          }
        ]
      },
      {
        id: 15,
        name: "Mixtral 8x7B",
        cn: "Mixtral 8x7B 稀疏专家",
        desc_cn: "每个token激活2/8个expert，46B参数仅12B活跃计算量。每FLOP效率远超LLaMA-2 70B。",
        desc_en: "Each token activates 2/8 experts. 46B params, 12B active compute. Far better per-FLOP efficiency than LLaMA-2 70B.",
        paper: "Jiang et al., 2024 — Mixtral — arXiv:2401.04088",
        arxiv: "https://arxiv.org/abs/2401.04088",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          12
        ],
        bench: [
          {
            m: "Mixtral 8x7B",
            metric: "MMLU",
            ds: "8x7B",
            v: "70.6%",
            n: "vs 69.9% LLaMA-2 70B"
          }
        ],
        papers: [
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "Switch Transformer",
            title: "Switch Transformers: Scaling to Trillion Parameter Models",
            authors: "Fedus et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2101.03961",
            github: "https://github.com/tensorflow/mesh",
            huggingface: "",
            bibtex: "Fedus et al., 2022 — Switch Transformer (JMLR 2022)"
          },
          {
            name: "DeepSeek-MoE",
            title: "DeepSeekMoE: Expert Parallelism and Shared Expert Isolation for Mixture-of-Experts",
            authors: "Dai et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.06066",
            github: "https://github.com/deepseek-ai/DeepSeek-MoE",
            huggingface: "",
            bibtex: "Dai et al., 2024 — DeepSeek-MoE (arXiv 2024)"
          },
          {
            name: "ST-MoE",
            title: "Stable and Transferable Sparse MoE Language Models",
            authors: "Zadouri et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2402.07896",
            github: "",
            huggingface: "",
            bibtex: "Zadouri et al., 2024 — ST-MoE (arXiv 2024)"
          }
        ]
      },
      {
        id: 16,
        name: "GPTQ / AWQ Quantization",
        cn: "GPTQ / AWQ 量化",
        desc_cn: "GPTQ使用近端牛顿方向实现4-bit PTQ，AWQ通过activation-aware权重选择显著减少量化误差。W4A16是LLM推理的主流格式。",
        desc_en: "GPTQ uses approximate Newton direction for 4-bit PTQ. AWQ uses activation-aware weight selection to reduce quantization error. W4A16 is mainstream for LLM inference.",
        paper: "Frantar et al., 2023 — GPTQ — arXiv:2210.17323; Lin et al., 2024 — AWQ — arXiv:2306.00978",
        arxiv: "https://arxiv.org/abs/2210.17323",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2
        ],
        bench: [
          {
            m: "AWQ 70B",
            metric: "MMLU",
            ds: "W4A16",
            v: "67.8%",
            n: "vs 68.1% FP16"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 17,
        name: "KV Cache Optimization",
        cn: "KV Cache 优化",
        desc_cn: "通过cache quantization（PagedAttention / CacheGen）、prefix caching和multi-level cache hierarchy减少KV cache的显存占用和读取延迟。",
        desc_en: "Cache quantization (PagedAttention/CacheGen), prefix caching, and multi-level hierarchies reduce KV cache memory and latency.",
        paper: "Zheng et al., 2023 — CacheGen — arXiv:2312.05558",
        arxiv: "https://arxiv.org/abs/2312.05558",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          9
        ],
        bench: [
          {
            m: "CacheGen",
            metric: "KV Cache Speed",
            ds: "16K ctx",
            v: "3.1x",
            n: "vs KV cache disabled"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "vLLM",
            title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
            authors: "Kwon et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.06180",
            github: "https://github.com/vllm-project/vllm",
            huggingface: "https://huggingface.co/models?search=vllm",
            bibtex: "Kwon et al., 2023 — vLLM (SOSP 2023)"
          },
          {
            name: "TensorRT-LLM",
            title: "TensorRT-LLM: High Performance LLM Inference Engine",
            authors: "NVIDIA",
            year: "2024",
            arxiv:"https://arxiv.org/abs/2309.06180",
            github: "https://github.com/NVIDIA/TensorRT-LLM",
            huggingface: "",
            bibtex: "NVIDIA, 2024 — TensorRT-LLM (GitHub 2024)"
          },
          {
            name: "FlashDecoding",
            title: "FlashDecoding: Fast and Accurate LLM Decoding via Variable-Length Chunked Parallelism",
            authors: "Dao et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.08671",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao et al., 2024 — FlashDecoding (arXiv 2024)"
          },
          {
            name: "Speculative Decoding",
            title: "Fast Speculative Decoding via Sequential Prediction",
            authors: "Chen et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2311.04939",
            github: "https://github.com/FieldML/SpeculativeDecoding",
            huggingface: "",
            bibtex: "Chen et al., 2023 — Speculative Decoding (arXiv 2023)"
          },
          {
            name: "DeepSpeed-Inference",
            title: "DeepSpeed Inference: Accelerating Inference with Model Parallelism and Optimized Kernels",
            authors: "Microsoft",
            year: "2023",
            arxiv:"https://arxiv.org/abs/2212.05641",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Microsoft, 2023 — DeepSpeed-Inference (GitHub 2023)"
          }
        ]
      },
      {
        id: 18,
        name: "Continuous Batching",
        cn: "Continuous Batching动态批处理",
        desc_cn: "在token级而非request级调度batch，新请求可在其他请求完成时立即插入。有效利用GPU使throughput提升2-5x。",
        desc_en: "Schedules at token-level, not request-level. New requests slot in as others complete. 2-5x throughput improvement via better GPU utilization.",
        paper: "Yu et al., 2022 — Orca — arXiv:2201.12421",
        arxiv: "https://arxiv.org/abs/2201.12421",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          9,
          14
        ],
        bench: [
          {
            m: "Cont. Batching",
            metric: "Throughput",
            ds: "A100",
            v: "3.8x",
            n: "vs static batching"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "vLLM",
            title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
            authors: "Kwon et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.06180",
            github: "https://github.com/vllm-project/vllm",
            huggingface: "https://huggingface.co/models?search=vllm",
            bibtex: "Kwon et al., 2023 — vLLM (SOSP 2023)"
          },
          {
            name: "TensorRT-LLM",
            title: "TensorRT-LLM: High Performance LLM Inference Engine",
            authors: "NVIDIA",
            year: "2024",
            arxiv:"https://arxiv.org/abs/2309.06180",
            github: "https://github.com/NVIDIA/TensorRT-LLM",
            huggingface: "",
            bibtex: "NVIDIA, 2024 — TensorRT-LLM (GitHub 2024)"
          },
          {
            name: "FlashDecoding",
            title: "FlashDecoding: Fast and Accurate LLM Decoding via Variable-Length Chunked Parallelism",
            authors: "Dao et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.08671",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao et al., 2024 — FlashDecoding (arXiv 2024)"
          },
          {
            name: "Speculative Decoding",
            title: "Fast Speculative Decoding via Sequential Prediction",
            authors: "Chen et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2311.04939",
            github: "https://github.com/FieldML/SpeculativeDecoding",
            huggingface: "",
            bibtex: "Chen et al., 2023 — Speculative Decoding (arXiv 2023)"
          },
          {
            name: "TGI",
            title: "HuggingFace Text Generation Inference",
            authors: "HuggingFace",
            year: "2023",
            arxiv:"https://arxiv.org/abs/2212.05641",
            github: "https://github.com/huggingface/text-generation-inference",
            huggingface: "https://huggingface.co/docs/text-generation-inference",
            bibtex: "HuggingFace, 2023 — TGI (GitHub 2023)"
          },
          {
            name: "LightLLM",
            title: "LightLLM: A Lightweight Inference Framework for Large Language Models",
            authors: "ByteDance",
            year: "2023",
            arxiv: "",
            github: "https://github.com/ModelTC/lightllm",
            huggingface: "",
            bibtex: "ByteDance, 2023 — LightLLM (GitHub 2023)"
          },
          {
            name: "SGLang",
            title: "SGLang: Efficient Execution of Structured Language Model Programs",
            authors: "Zheng et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2312.07104",
            github: "https://github.com/sgl-project/sglang",
            huggingface: "",
            bibtex: "Zheng et al., 2024 — SGLang (arXiv 2024)"
          },
          {
            name: "DeepSpeed-Inference",
            title: "DeepSpeed Inference: Accelerating Inference with Model Parallelism and Optimized Kernels",
            authors: "Microsoft",
            year: "2023",
            arxiv: "",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Microsoft, 2023 — DeepSpeed-Inference (GitHub 2023)"
          }
        ]
      },
      {
        id: 19,
        name: "RLAIF (RL from AI Feedback)",
        cn: "RLAIF AI反馈强化学习",
        desc_cn: "用大语言模型代替人类生成偏好标签，避免人工标注成本。偏好模型自我改进形成闭环。",
        desc_en: "Uses LLM to generate preference labels instead of humans. Self-improving feedback loop without human annotation cost.",
        paper: "Bai et al., 2022 — RLAIF — Anthropic — arXiv:2212.08073",
        arxiv: "https://arxiv.org/abs/2212.08073",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7,
          8
        ],
        bench: [
          {
            m: "RLAIF",
            metric: "HH-RLHF Win Rate",
            ds: "HH",
            v: "71.2%",
            n: "vs 72.4% human RLHF"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          },
          {
            name: "Self-Instruct",
            title: "Self-Instruct: Aligning Language Model with Self Generated Instructions",
            authors: "Wang et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.10560",
            github: "https://github.com/yizhongw/self-instruct",
            huggingface: "",
            bibtex: "Wang et al., 2022 — Self-Instruct (ACL 2023)"
          },
          {
            name: "Phi-1",
            title: "Textbooks Are All You Need",
            authors: "Gunasekar et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.11644",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1",
            bibtex: "Gunasekar et al., 2023 — Phi-1 (ICML 2023)"
          },
          {
            name: "Phi-1.5",
            title: "Textbooks Are All You Need 2",
            authors: "Li et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.05463",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1_5",
            bibtex: "Li et al., 2023 — Phi-1.5 (arXiv 2023)"
          }
        ]
      },
      {
        id: 20,
        name: "KTO (Kahneman-Tversky Optimization)",
        cn: "KTO 卡尼曼-特沃斯基优化",
        desc_cn: "基于前景理论的单边损失，不使用pairwise比较。模型同时学习正负样本，损失函数更对称稳定。",
        desc_en: "Prospect-theory-based single-sided loss. No pairwise comparisons; learns from positive and negative examples with symmetric, stable loss.",
        paper: "Ethayarajh et al., 2024 — KTO — arXiv:2403.05535",
        arxiv: "https://arxiv.org/abs/2403.05535",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7
        ],
        bench: [
          {
            m: "KTO",
            metric: "TLDR Pref",
            ds: "TLDR",
            v: "57.2%",
            n: "vs 56.8% DPO"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      }
    ],
    benches: {
      "1": {
        titleCN: "注意力机制",
        titleEN: "Attention",
        metricCN: "相对加速比",
        metricEN: "Relative Speedup",
        unit: "x",
        higherBetter: true,
        items: [
          {
            name: "FlashAttention-3",
            val: 3,
            color: "var(--accent3)",
            note: "H100 TMA/WGMMA"
          },
          {
            name: "Flash Decoding++",
            val: 2.5,
            color: "var(--accent)",
            note: "HBM3"
          },
          {
            name: "FlashAttention-2",
            val: 2,
            color: "var(--c6)",
            note: "A100 80GB"
          },
          {
            name: "Flash Attention",
            val: 1.8,
            color: "var(--c2)",
            note: "IO-aware tiling"
          }
        ]
      },
      "7": {
        titleCN: "对齐方法",
        titleEN: "Alignment",
        metricCN: "人类偏好胜率",
        metricEN: "Human Preference Win Rate",
        unit: "%",
        higherBetter: true,
        items: [
          {
            name: "Constitutional AI",
            val: 89.3,
            color: "var(--accent2)",
            note: "Harmlessness score"
          },
          {
            name: "PPO",
            val: 72.4,
            color: "var(--green)",
            note: "HH-RLHF"
          },
          {
            name: "RLAIF",
            val: 71.2,
            color: "var(--c7)",
            note: "AI feedback"
          },
          {
            name: "DPO",
            val: 71.2,
            color: "var(--accent)",
            note: "HH-RLHF"
          },
          {
            name: "SimPO",
            val: 70.4,
            color: "var(--c6)",
            note: "AlpacaEval"
          },
          {
            name: "KTO",
            val: 57.2,
            color: "var(--c8)",
            note: "TLDR preference"
          }
        ]
      },
      "12": {
        titleCN: "稀疏专家",
        titleEN: "Sparse/MoE",
        metricCN: "MMLU得分",
        metricEN: "MMLU Score",
        unit: "%",
        higherBetter: true,
        items: [
          {
            name: "DeepSeek-V2",
            val: 78.5,
            color: "var(--accent2)",
            note: "236B total"
          },
          {
            name: "Mixtral 8x7B",
            val: 70.6,
            color: "var(--accent)",
            note: "12B active"
          },
          {
            name: "Switch-C 1T",
            val: 90,
            color: "var(--green)",
            note: "SuperGLUE 1T params"
          }
        ]
      }
    }
  },
  vlm: {
    labelCN: "视觉-语言模型效率",
    labelEN: "Vision-Language Model Efficiency",
    heroCN: "视觉-语言模型效率",
    heroEN: "Vision-Language Model Efficiency",
    footerCN: "整理自 CVPR / ICCV / NeurIPS / ICLR 视觉-语言论文",
    footerEN: "Curated from CVPR / ICCV / NeurIPS / ICLR vision-language papers",
    cats: [
      {
        id: 1,
        labelCN: "视觉编码效率",
        labelEN: "Vision Encoding",
        color: "var(--c1)",
        icon: "fa-eye",
        subTopics: [
          "ViT Efficiency",
          "Patch Pruning",
          "Early Exiting",
          "Dynamic Resolution"
        ]
      },
      {
        id: 2,
        labelCN: "多模态融合",
        labelEN: "Multimodal Fusion",
        color: "var(--c2)",
        icon: "fa-link",
        subTopics: [
          "CLIP-style",
          "LLaMA-style",
          "Cross Attention",
          "Flamingo GATED"
        ]
      },
      {
        id: 3,
        labelCN: "VLM训练效率",
        labelEN: "VLM Training",
        color: "var(--c3)",
        icon: "fa-brain",
        subTopics: [
          "Pre-training Data",
          "LCM",
          "Grounding",
          "Screen Understanding"
        ]
      },
      {
        id: 4,
        labelCN: "VLM推理优化",
        labelEN: "VLM Inference",
        color: "var(--c4)",
        icon: "fa-tachometer-alt",
        subTopics: [
          "Quantization",
          "Pruning",
          "Speculative Decoding",
          "Early Exit"
        ]
      },
      {
        id: 5,
        labelCN: "视觉-语言对齐",
        labelEN: "Vision-Language Align",
        color: "var(--c5)",
        icon: "fa-balance-scale",
        subTopics: [
          "Contrastive Learning",
          "Region Understanding",
          "Captioning",
          "VQA"
        ]
      },
      {
        id: 6,
        labelCN: "图像生成效率",
        labelEN: "Image Generation",
        color: "var(--c6)",
        icon: "fa-image",
        subTopics: [
          "Diffusion LM",
          "Latent Diffusion",
          "LCM",
          "SDXL-Turbo"
        ]
      },
      {
        id: 7,
        labelCN: "视频理解效率",
        labelEN: "Video Understanding",
        color: "var(--c7)",
        icon: "fa-video",
        subTopics: [
          "SlowFast",
          "TimeSformer",
          "Video Token Sampling",
          "Frozen CLIP"
        ]
      },
      {
        id: 8,
        labelCN: "Benchmark",
        labelEN: "Benchmarks",
        color: "var(--c8)",
        icon: "fa-chart-bar",
        subTopics: [
          "VQAv2",
          "GQA",
          "RefCOCO",
          "OK-VQA",
          "VQAT"
        ]
      }
    ],
    techs: [
      {
        id: 101,
        name: "LLaVA (Large Language & Vision Assistant)",
        cn: "LLaVA 大型视觉-语言助手",
        desc_cn: "开源VLM标杆，LLaMA+Vicuna作为语言 backbone，CLIP ViT作为视觉encoder，通过projection layer连接。在 8xA100 上完成训练，仅用 1.2M 数据。",
        desc_en: "Open-source VLM benchmark. LLaMA/Vicuna as language backbone + CLIP ViT as vision encoder via projection layer. Trained on 8xA100 with only 1.2M data.",
        paper: "Liu et al., 2024 — LLaVA — NeurIPS 2024 — arXiv:2304.08485",
        arxiv: "https://arxiv.org/abs/2304.08485",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2,
          3
        ],
        bench: [
          {
            m: "LLaVA-1.5 13B",
            metric: "VQAv2",
            ds: "13B",
            v: "82.0%",
            n: "vs 80.8% GPT-4V (zero-shot)"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 102,
        name: "LLaVA-1.5 / 1.6 / NeXT",
        cn: "LLaVA-1.5 / 1.6 / NeXT",
        desc_cn: "LLaVA迭代版本，1.5引入跨模态注意力（不再仅mlp projection），1.6支持128K上下文和更好的OCR。NeXT在指令跟随和多轮对话上大幅提升。",
        desc_en: "LLaVA iterations. 1.5 adds cross-attention (not just MLP projection). 1.6 supports 128K context and better OCR. NeXT improves instruction following and multi-turn.",
        paper: "Li et al., 2024 — LLaVA-1.5 — arXiv:2310.03744; 2024 — LLaVA-NeXT",
        arxiv: "https://arxiv.org/abs/2310.03744",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2,
          3,
          5
        ],
        bench: [
          {
            m: "LLaVA-NeXT 34B",
            metric: "MMMU",
            ds: "34B",
            v: "65.2%",
            n: "vs 56.8% LLaVA-1.5"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 103,
        name: "Qwen-VL / Qwen2-VL",
        cn: "Qwen-VL / Qwen2-VL",
        desc_cn: "阿里巴巴开源VLM系列。Qwen2-VL支持动态分辨率（无论图像尺寸切分为不同的token数），在DocVQA和ChartQA上刷新开源SOTA。",
        desc_en: "Alibaba's open-source VLM series. Qwen2-VL supports dynamic resolution (variable token count regardless of image size), sets new开源 SOTA on DocVQA and ChartQA.",
        paper: "Bai et al., 2023 — Qwen-VL — arXiv:2308.12966; Qwen Team, 2024 — Qwen2-VL",
        arxiv: "https://arxiv.org/abs/2308.12966",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2,
          3
        ],
        bench: [
          {
            m: "Qwen2-VL 72B",
            metric: "DocVQA",
            ds: "72B",
            v: "94.5%",
            n: "opensource SOTA"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 104,
        name: "InternVL (1 / 2 / 3)",
        cn: "InternVL 视觉大模型",
        desc_cn: "上海AI Lab开源最强开源VLM之一。Progressive Calibration训练模式（从小模型到大模型逐步释放参数），InternVL3引入MLLM-Freeze+CoFi技术。",
        desc_en: "One of the strongest open-source VLMs from Shanghai AI Lab. Progressive Calibration (small→large gradually unfreezes params). InternVL3 adds MLLM-Freeze+CoFi.",
        paper: "Chen et al., 2024 — InternVL — arXiv:2312.12086; 2025 — InternVL3",
        arxiv: "https://arxiv.org/abs/2312.12086",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2,
          3
        ],
        bench: [
          {
            m: "InternVL3 78B",
            metric: "VQAv2",
            ds: "78B",
            v: "85.1%",
            n: "vs 82.0% LLaVA-1.5"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 105,
        name: "BLIP-2 / INSTRUCTBLIP",
        cn: "BLIP-2 / INSTRUCTBLIP",
        desc_cn: "通过轻量级Q-Former实现冻住视觉编码器和LLM之间的高效对齐。BLIP-2用coco captions + LAION训练，InstructBLIP在指令微调后支持开放域多模态指令。",
        desc_en: "Lightweight Q-Former aligns frozen vision encoder and LLM. BLIP-2 trained on COCO captions + LAION. InstructBLIP adds instruction fine-tuning for open-domain multimodal instructions.",
        paper: "Li et al., 3/2023 — BLIP-2 — arXiv:2301.12597; 2023 — InstructBLIP",
        arxiv: "https://arxiv.org/abs/2301.12597",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2,
          5
        ],
        bench: [
          {
            m: "InstructBLIP 13B",
            metric: "VQAv2",
            ds: "13B",
            v: "80.7%",
            n: "vs 77.4% Flamingo"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 106,
        name: "Flamingo / OpenFlamingo",
        cn: "Flamingo 门控注意力VLM",
        desc_cn: "DeepMind的原始门控注意力VLM，冻住视觉编码器和语言模型，中间插入门控注意力层实现少样本学习。OpenFlamingo是开源复现。",
        desc_en: "DeepMind's original gated attention VLM. Frozen vision + language models with gated attention layers in between for few-shot learning. OpenFlamingo is open-source reproduction.",
        paper: "Alayrac et al., 2022 — Flamingo — arXiv:2204.14198",
        arxiv: "https://arxiv.org/abs/2204.14198",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          2,
          8
        ],
        bench: [
          {
            m: "Flamingo 80B",
            metric: "Few-shot VQAv2",
            ds: "80B",
            v: "82.0%",
            n: "vs 77.4% few-shot"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Self-Instruct",
            title: "Self-Instruct: Aligning Language Model with Self Generated Instructions",
            authors: "Wang et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.10560",
            github: "https://github.com/yizhongw/self-instruct",
            huggingface: "",
            bibtex: "Wang et al., 2022 — Self-Instruct (ACL 2023)"
          },
          {
            name: "Phi-1",
            title: "Textbooks Are All You Need",
            authors: "Gunasekar et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.11644",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1",
            bibtex: "Gunasekar et al., 2023 — Phi-1 (ICML 2023)"
          },
          {
            name: "Phi-1.5",
            title: "Textbooks Are All You Need 2",
            authors: "Li et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.05463",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1_5",
            bibtex: "Li et al., 2023 — Phi-1.5 (arXiv 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 107,
        name: "CLIP / OpenCLIP",
        cn: "CLIP 对比语言-图像预训练",
        desc_cn: "用4亿图文对通过对比学习实现开放词汇视觉分类。OpenCLIP用更大数据训练，在ImageNet上超过原生CLIP。ViT-L/14是常用backbone。",
        desc_en: "400M image-text pairs trained with contrastive learning for open-vocabulary visual classification. OpenCLIP trained on larger data, beats native CLIP on ImageNet.",
        paper: "Radford et al., 2021 — CLIP — arXiv:2103.00020",
        arxiv: "https://arxiv.org/abs/2103.00020",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          5
        ],
        bench: [
          {
            m: "CLIP ViT-L/14",
            metric: "ImageNet ZS",
            ds: "ViT-L",
            v: "75.3%",
            n: "zero-shot ImageNet"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 108,
        name: "GLIPv1 / GLIPv2",
        cn: "GLIP grounded VL理解",
        desc_cn: "Grounded Language-Image Pre-training，将目标检测和语言理解统一在VL框架下。GLIPv2引入语义增强自训练，在COCO上刷到58.7% box AP。",
        desc_en: "Grounded Language-Image Pre-training unifies object detection and language understanding. GLIPv2 adds semantic augmentation + self-training, 58.7% box AP on COCO.",
        paper: "Li et al., 2021 — GLIP — arXiv:2112.00171; 2022 — GLIPv2",
        arxiv: "https://arxiv.org/abs/2112.00171",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          5,
          3
        ],
        bench: [
          {
            m: "GLIPv2 59B",
            metric: "COCO box AP",
            ds: "59B",
            v: "58.7%",
            n: "COCO 2017 val"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 109,
        name: "Grounding DINO / Grounding SAM",
        cn: "Grounding DINO / SAM",
        desc_cn: "开集目标检测（SOTA），DINO+MGD（最大语义的等变匹配）实现给定文本框任意物体。Grounding SAM结合SAM实现分割+检测统一。",
        desc_en: "Open-set object detection SOTA. DINO + MGD (Maximum Semantic Equivariant Matching) detects any object given text. Grounding SAM combines with SAM for unified detection+segmentation.",
        paper: "Liu et al., 2023 — Grounding DINO — arXiv:2303.05499; 2023 — Grounding SAM",
        arxiv: "https://arxiv.org/abs/2303.05499",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          5
        ],
        bench: [
          {
            m: "Grounding DINO T",
            metric: "COCO mAP",
            ds: "T",
            v: "53.9%",
            n: "zero-shot COCO"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 110,
        name: "Latent Diffusion Models (LDM)",
        cn: "潜在扩散模型 LDM",
        desc_cn: "在VAE latent space而非像素空间做diffusion，大幅降低计算量。Stable Diffusion的核心技术。SDXL通过双路骨干网和更好的conditioning进一步提升。",
        desc_en: "Diffusion in VAE latent space instead of pixel space. Massive compute reduction. Core of Stable Diffusion. SDXL improves with two-scale backbone and better conditioning.",
        paper: "Rombach et al., 2022 — LDM — CVPR 2022 — arXiv:2112.10752",
        arxiv: "https://arxiv.org/abs/2112.10752",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6
        ],
        bench: [
          {
            m: "SDXL",
            metric: "FID",
            ds: "512px",
            v: "23.9",
            n: "vs 34.9 SD 1.5"
          }
        ],
        papers: [
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 111,
        name: "LCM (Latent Consistency Models)",
        cn: "LCM 潜在一致性模型",
        desc_cn: "蒸馏一致性模型到4步生成，大幅加速SD/LDMs的采样过程。SD-Turbo/Lucid Rift实现单步~2步推理，实时图像生成。",
        desc_en: "Distills consistency models to 4-step generation. Dramatically accelerates SD/LDM sampling. SD-Turbo/Lucid Rift enable 1-2 step inference for real-time image generation.",
        paper: "Luo et al., 2023 — LCM — arXiv:2310.04378",
        arxiv: "https://arxiv.org/abs/2310.04378",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6
        ],
        bench: [
          {
            m: "LCM SD-Turbo",
            metric: "Steps",
            ds: "512px",
            v: "1 step",
            n: "vs 25 steps SD 1.5"
          }
        ],
        papers: [
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 112,
        name: "Dynamic ViT / Token Merging",
        cn: "Dynamic ViT / Token合并",
        desc_cn: "通过轻量级routing机制或token merging减少ViT中的冗余visual tokens。Dynamic ViT预测每个token的重要性并丢弃不重要token；ToMe自动合并相似的token。",
        desc_en: "Reduces redundant visual tokens in ViT via lightweight routing or token merging. Dynamic ViT predicts token importance and drops unimportant ones; ToMe auto-merges similar tokens.",
        paper: "Rao et al., 2022 — Dynamic ViT — arXiv:2203.13427; Bolya et al., 2023 — ToMe — ICCV 2023",
        arxiv: "https://arxiv.org/abs/2203.13427",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1
        ],
        bench: [
          {
            m: "Dynamic ViT-H",
            metric: "FLOPs",
            ds: "ViT-H",
            v: "-40%",
            n: "vs ViT-H full tokens"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 113,
        name: "Svit (Swin Transformer ViT)",
        cn: "Swin Transformer V2",
        desc_cn: "Swin V2通过shifted window attention解决Swin V1的固定窗口限制，支持更高分辨率和更大的各向异性。节省~50%训练显存。",
        desc_en: "Swin V2 solves V1's fixed window limits with shifted window attention, supporting higher resolution and larger anisotropy. Saves ~50% training memory.",
        paper: "Liu et al., 2021 — Swin Transformer V2 — arXiv:2111.12993",
        arxiv: "https://arxiv.org/abs/2111.12993",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1
        ],
        bench: [
          {
            m: "SwinV2-L",
            metric: "ImageNet",
            ds: "384px",
            v: "90.2%",
            n: "vs 89.8% SwinV1-L"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "Switch Transformer",
            title: "Switch Transformers: Scaling to Trillion Parameter Models",
            authors: "Fedus et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2101.03961",
            github: "https://github.com/tensorflow/mesh",
            huggingface: "",
            bibtex: "Fedus et al., 2022 — Switch Transformer (JMLR 2022)"
          }
        ]
      },
      {
        id: 114,
        name: "TimeSformer / SlowFast",
        cn: "TimeSformer / SlowFast 视频",
        desc_cn: "TimeSformer将Transformer应用于时空注意力（divided space-time attention），SlowFast用双路网络分别捕捉短时精细动作和长时语义。高效版FastSlow推出。",
        desc_en: "TimeSformer applies Transformer to space-time attention (divided space-time attention). SlowFast uses dual pathway for fine temporal and semantic features. Efficient FastSlow variants exist.",
        paper: "Bertasius et al., 2021 — TimeSformer — arXiv:2103.15691; Feichtenhofer et al., 2019 — SlowFast",
        arxiv: "https://arxiv.org/abs/2103.15691",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7
        ],
        bench: [
          {
            m: "SlowFast 8x8 R101",
            metric: "Kinetics-400",
            ds: "8x8 R101",
            v: "82.3%",
            n: "K400 val"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 115,
        name: "VLM Quantization (VLLM-VLM / LLaVA.cpp)",
        cn: "VLM 量化推理",
        desc_cn: "对VLM的LLM部分（语言部分）做INT4/INT8量化，视觉encoder部分通常保持FP16以避免精度损失。LLaVA.cpp实现在边缘设备上运行7B VLM。",
        desc_en: "Quantizes LLM component (language part) of VLM to INT4/INT8. Vision encoder typically stays FP16 to avoid quality loss. LLaVA.cpp enables 7B VLM on edge devices.",
        paper: "Zhang et al., 2024 — VLLM-VLM — arXiv:2405.18081",
        arxiv: "https://arxiv.org/abs/2405.18081",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          4
        ],
        bench: [
          {
            m: "LLaVA-7B Q4",
            metric: "Memory",
            ds: "7B",
            v: "4.2GB",
            n: "vs 14GB FP16"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          },
          {
            name: "vLLM",
            title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
            authors: "Kwon et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.06180",
            github: "https://github.com/vllm-project/vllm",
            huggingface: "https://huggingface.co/models?search=vllm",
            bibtex: "Kwon et al., 2023 — vLLM (SOSP 2023)"
          }
        ]
      },
      {
        id: 116,
        name: "Gemini / GPT-4V Architecture Insights",
        cn: "Gemini / GPT-4V 架构洞察",
        desc_cn: "Gemini原生多模态（不是拼凑），使用Pathways架构并行处理文本、图像、音频、视频。注意力在token-level统一，训练效率比单独模型高~10x。",
        desc_en: "Gemini is natively multimodal (not stitched). Uses Pathways architecture to process text/image/audio/video in parallel. Unified token-level attention, ~10x more training efficient.",
        paper: "Gemini Team, 2023 — Gemini — Google AI Blog; OpenAI — GPT-4V System Card",
        arxiv:"https://arxiv.org/abs/2309.06180",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          2,
          3
        ],
        bench: [
          {
            m: "Gemini Ultra",
            metric: "MMLU",
            ds: "Ultra",
            v: "90.0%",
            n: "5-shot MMLU"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 117,
        name: "MiniGPT-4 / MiniGPT-v2",
        cn: "MiniGPT-4 / MiniGPT-v2",
        desc_cn: "仅用一个投影层将冻结的视觉编码器连接到冻结的LLaMA，训练成本极低。v2进一步引入词汇表扩展和视觉专家微调，支持128K上下文。",
        desc_en: "Connects frozen vision encoder to frozen LLaMA with just one projection layer. Extremely low training cost. v2 adds vocabulary expansion and visual expert fine-tuning for 128K context.",
        paper: "Zhu et al., 2023 — MiniGPT-4 — arXiv:2305.15072; Chen et al., 2023 — MiniGPT-v2 — arXiv:2310.09478",
        arxiv: "https://arxiv.org/abs/2305.15072",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          2,
          3
        ],
        bench: [
          {
            m: "MiniGPT-4 7B",
            metric: "COCO Caption",
            ds: "7B",
            v: "77.4%",
            n: "BLEU-4 captioning"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 118,
        name: "CogVLM (Sophgo)",
        cn: "CogVLM 视觉-语言融合",
        desc_cn: "通过深层注意力实现视觉token和语言token的深度融合，而非仅在输入层投影。训练时视觉和语言参数同时更新，深度融合使多模态理解能力大幅提升。",
        desc_en: "Deep fusion of vision and language tokens via deep attention — not just input-layer projection. Both vision and language params updated during training. Deep fusion dramatically improves multimodal understanding.",
        paper: "Wang et al., 2023 — CogVLM — arXiv:2311.03079",
        arxiv: "https://arxiv.org/abs/2311.03079",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2,
          3
        ],
        bench: [
          {
            m: "CogVLM-17B",
            metric: "VQAv2",
            ds: "17B",
            v: "84.2%",
            n: "architecture-level fusion"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 119,
        name: "Prismatic VLM (SUN)",
        cn: "Prismatic VLM 多视觉编码器",
        desc_cn: "支持多个视觉编码器（SigLIP / DINOv2 / SigLIP+SAM）组合使用，通过mean pooling实现late fusion。LLaVA和OpenVLA的backbone。",
        desc_en: "Supports multiple vision encoders (SigLIP / DINOv2 / SigLIP+SAM) combined via mean pooling for late fusion. Backbone of LLaVA and OpenVLA.",
        paper: "Karamcheti et al., 2024 — Prismatic VLM — arXiv:2405.17398",
        arxiv: "https://arxiv.org/abs/2405.17398",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1,
          2
        ],
        bench: [
          {
            m: "Prismatic 7B",
            metric: "GQA",
            ds: "7B",
            v: "85.2%",
            n: "multi-encoder fusion"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 120,
        name: "VILA (LVM for VLM)",
        cn: "VILA 视觉语言模型预训练",
        desc_cn: "LVM思想应用于VLM，通过image token reconstruction + language modeling联合训练。v1支持8B/13B/33B，v2引入更强的in-context learning和多图像推理。",
        desc_en: "LVM ideas applied to VLM. Jointly trains image token reconstruction + language modeling. v1 supports 8B/13B/33B; v2 adds stronger in-context learning and multi-image reasoning.",
        paper: "Lin et al., 2024 — VILA — arXiv:2402.18630",
        arxiv: "https://arxiv.org/abs/2402.18630",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3,
          5
        ],
        bench: [
          {
            m: "VILA-13B",
            metric: "OK-VQA",
            ds: "13B",
            v: "68.3%",
            n: "multi-image reasoning"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 121,
        name: "Emu3 (Bytedance)",
        cn: "Emu3 多模态自回归生成",
        desc_cn: "ByteDance的自回归多模态模型，用OmniFusion解码器统一视觉、语言、音频生成。在视觉生成任务上超越DALL-E 3和Sora。",
        desc_en: "ByteDance's autoregressive multimodal model. Uses OmniFusion decoder to unify vision, language, audio generation. Surpasses DALL-E 3 and Sora on visual generation tasks.",
        paper: "Sun et al., 2024 — Emu3 — arXiv:2409.06940",
        arxiv: "https://arxiv.org/abs/2409.06940",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          2,
          6
        ],
        bench: [
          {
            m: "Emu3",
            metric: "GenEval",
            ds: "Generative",
            v: "86%",
            n: "text-to-image"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 122,
        name: "MobileVLM (ONNX Runtime)",
        cn: "MobileVLM 移动端VLM",
        desc_cn: "在移动端NPU/边缘GPU上运行的开源VLM，1.4B/1.7B/3B参数。通过知识蒸馏和量化，实现iPhone 14上~30 tok/s的推理速度。",
        desc_en: "Open-source VLM running on mobile NPU / edge GPU. 1.4B/1.7B/3B params. Via knowledge distillation + quantization achieves ~30 tok/s on iPhone 14.",
        paper: "Ji et al., 2024 — MobileVLM — arXiv:2312.11286",
        arxiv: "https://arxiv.org/abs/2312.11286",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          4
        ],
        bench: [
          {
            m: "MobileVLM-3B",
            metric: "Speed",
            ds: "iPhone 14",
            v: "30 tok/s",
            n: "edge inference"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 123,
        name: "ControlNet (Conditioning)",
        cn: "ControlNet 条件化图像生成",
        desc_cn: "通过零卷积层将额外条件（Canny边缘、深度图、骨骼姿态等）注入Stable Diffusion，控制生成图像的几何结构而不损失创造性。",
        desc_en: "Injects extra conditions (Canny edges, depth maps, skeletal poses) into Stable Diffusion via zero convolutions. Controls geometry without sacrificing creativity.",
        paper: "Zhang et al., 2023 — ControlNet — CVPR 2023 — arXiv:2302.05543",
        arxiv: "https://arxiv.org/abs/2302.05543",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          6
        ],
        bench: [
          {
            m: "ControlNet",
            metric: "Human Eval",
            ds: "Canny",
            v: "91%",
            n: "pose-to-image"
          }
        ],
        papers: [
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 124,
        name: "CogVideoX (THUDM)",
        cn: "CogVideoX 视觉-语言视频生成",
        desc_cn: "国产开源视频生成VLM，将视频内容token化后通过transformer生成。5B参数支持16秒视频，Open-Sora Plan是类似方案。",
        desc_en: "Chinese open-source video generation VLM. Tokenizes video content then generates via transformer. 5B params supports 16s video. Open-Sora Plan is similar.",
        paper: "Zhu et al., 2024 — CogVideoX — arXiv:2408.02072",
        arxiv: "https://arxiv.org/abs/2408.02072",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7
        ],
        bench: [
          {
            m: "CogVideoX-5B",
            metric: "VBench",
            ds: "5B",
            v: "85.3%",
            n: "16s video gen"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 125,
        name: "VideoPoet (Google)",
        cn: "VideoPoet 视频生成VLM",
        desc_cn: "Google的多模态视频生成VLM，支持文本/图像/视频到视频的生成。VideoPoet使用large-scale VLM而非diffusion，在视频质量上具有竞争力。",
        desc_en: "Google's multimodal video generation VLM. Supports text/image/video-to-video generation. Uses large-scale VLM (not diffusion) — competitive video quality.",
        paper: "K Conditions et al., 2024 — VideoPoet — arXiv:2401.12177",
        arxiv: "https://arxiv.org/abs/2401.12177",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          7
        ],
        bench: [
          {
            m: "VideoPoet L",
            metric: "VBench",
            ds: "Large",
            v: "87.2%",
            n: "text-to-video"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 126,
        name: "Stable Diffusion 3 (SD3)",
        cn: "Stable Diffusion 3 MM-DiT",
        desc_cn: "MM-DiT架构（多模态Diffusion Transformer），替代UNet成为SD3的核心。参数量2B/5B/8B，通过流匹配（flow matching）训练，在文字渲染和复杂构图上显著超越SDXL。",
        desc_en: "MM-DiT (Multimodal Diffusion Transformer) architecture replaces UNet in SD3. 2B/5B/8B params. Trained with flow matching. Dramatically better text rendering and complex composition than SDXL.",
        paper: "Esser et al., 2024 — SD3 — arXiv:2403.03206",
        arxiv: "https://arxiv.org/abs/2403.03206",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6
        ],
        bench: [
          {
            m: "SD3 8B",
            metric: "GenEval",
            ds: "8B",
            v: "83%",
            n: "overall text-to-image"
          }
        ],
        papers: [
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 127,
        name: "Video Diffusion Transformers (DiT)",
        cn: "Video DiT 视频Diffusion Transformer",
        desc_cn: "将DiT架构扩展到视频生成，用时空分离的注意力机制建模。Open-Sora和Latte是其开源实现，超越GAN-based视频生成方法。",
        desc_en: "Extends DiT architecture to video generation with space-time separated attention. Open-Sora and Latte are open-source implementations. Surpasses GAN-based video generation.",
        paper: "卿 et al., 2024 — Video DiT — arXiv:2402.14777",
        arxiv: "https://arxiv.org/abs/2402.14777",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6,
          7
        ],
        bench: [
          {
            m: "Open-Sora 72B",
            metric: "VBench",
            ds: "72B",
            v: "89%",
            n: "text-to-video"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          },
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 128,
        name: "PixArt-α / σ (T2I DiT)",
        cn: "PixArt-α / σ 图像DiT",
        desc_cn: "用DiT替代LDM中的UNet，SD3之前最成功的T2I DiT架构。PixArt-σ进一步引入虎跃注意力机制，FID媲美DALL-E 3但推理速度快~5倍。",
        desc_en: "DiT replaces UNet in LDM. Most successful T2I DiT before SD3. PixArt-σ adds Cross-Spatial Attention, FID competitive with DALL-E 3 but ~5x faster inference.",
        paper: "Chen et al., 2024 — PixArt-α — arXiv:2310.00426; 2024 — PixArt-σ",
        arxiv: "https://arxiv.org/abs/2310.00426",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6
        ],
        bench: [
          {
            m: "PixArt-σ 900M",
            metric: "MSCOCO FID",
            ds: "900M",
            v: "7.6",
            n: "vs SDXL 23.9"
          }
        ],
        papers: [
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 129,
        name: "Pruned ViT / EViT",
        cn: "EViT 视觉Transformer剪枝",
        desc_cn: "Early Exit Vision Transformer，在网络浅层就early exit部分token，减少ViT的计算量。在ImageNet上不掉点情况下减少~40% FLOPs。",
        desc_en: "Early Exit Vision Transformer. Early layers exit some tokens early, reducing ViT compute. Reduces ~40% FLOPs on ImageNet without accuracy drop.",
        paper: "Chen et al., 2024 — EViT — arXiv:2401.06567",
        arxiv: "https://arxiv.org/abs/2401.06567",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1
        ],
        bench: [
          {
            m: "EViT-B/384",
            metric: "FLOPs",
            ds: "ImageNet",
            v: "-40%",
            n: "vs ViT-B/384"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 130,
        name: "Swin-UNETR / UNETR++",
        cn: "Swin-UNETR / UNETR++ 3D医学影像",
        desc_cn: "Transformer-based 3D medical image segmentation，U-Net架构中使用Swin Transformer作为encoder。UNETR++引入 Efficient attention和对称decoder，在CT和MRI上超过nnUNet。",
        desc_en: "Transformer-based 3D medical image segmentation. Uses Swin Transformer as U-Net encoder. UNETR++ adds efficient attention and symmetric decoder. Outperforms nnUNet on CT and MRI.",
        paper: "Hatamizadeh et al., 2022 — UNETR — arXiv:2103.10504",
        arxiv: "https://arxiv.org/abs/2103.10504",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1,
          5
        ],
        bench: [
          {
            m: "UNETR++",
            metric: "Dice",
            ds: "BTCV",
            v: "87.2%",
            n: "multi-organ CT"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 131,
        name: "Stable Video Diffusion (SVD)",
        cn: "SVD 稳定视频扩散",
        desc_cn: "Stability AI的开源视频生成基础模型，latent video diffusion架构。提供SVD-1.1（14帧）和SVD-XT（25帧）两个版本，支持image-to-video和text-to-video。",
        desc_en: "Stability AI's open-source video generation foundation model. Latent video diffusion architecture. SVD-1.1 (14 frames) and SVD-XT (25 frames). Supports image-to-video and text-to-video.",
        paper: "Blattmann et al., 2023 — SVD — arXiv:2311.15127",
        arxiv: "https://arxiv.org/abs/2311.15127",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7
        ],
        bench: [
          {
            m: "SVD-XT",
            metric: "VBench",
            ds: "image-to-video",
            v: "78%",
            n: "24-frame generation"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 132,
        name: "LVM (Large Vision Model)",
        cn: "LVM 视觉大模型",
        desc_cn: "Stanford的视觉大模型，用visual sentences统一所有视觉任务（检测/分割/跟踪等）。1B参数的纯视觉序列模型，不依赖语言即可在多个VQA任务上达到竞争力水平。",
        desc_en: "Stanford's Large Vision Model. Uses visual sentences to unify all vision tasks (detection/segmentation/tracking etc.). 1B param pure vision sequence model. Competitive on multiple VQA tasks without language.",
        paper: "Bai et al., 2023 — LVM — arXiv:2311.17099",
        arxiv: "https://arxiv.org/abs/2311.17099",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3
        ],
        bench: [
          {
            m: "LVM 1B",
            metric: "COCO val",
            ds: "1B",
            v: "52.3% AP",
            n: "without language"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 230,
        name: "π₀-FAST",
        cn: "π₀-FAST 自回归VLA",
        desc_cn: "Physical Intelligence的π₀自回归版本，去掉flow matching改用标准的next-token预测。保持π₀的action chunk设计，但改为自回归式推理。",
        desc_en: "Physical Intelligence autoregressive version of π₀. Replaces flow matching with next-token prediction.",
        paper: "Physical Intelligence, 2024 — π₀-FAST — (Technical Report)",
        arxiv:"https://arxiv.org/abs/2302.07413",
        badge: "🟡",
        diff: "Intermediate",
        categories: [1, 3],
        bench: [{m:"π₀-FAST",metric:"Success Rate",ds:"7B",v:"89.0%",n:"52 tasks, 4 embodiments"}],
        papers: []
      },
      {
        id: 231,
        name: "π₀.5",
        cn: "π₀.5 开放世界VLA",
        desc_cn: "Physical Intelligence的开放世界泛化版。基于π₀架构，增加大规模互联网视频预训练和更多机器人数据的混合微调。",
        desc_en: "Physical Intelligence open-world generalization. Based on π₀ with large-scale internet video pretraining.",
        paper: "Physical Intelligence, 2025 — π₀.5 — (Technical Report)",
        arxiv:"https://arxiv.org/abs/2410.24164",
        badge: "🟡",
        diff: "Advanced",
        categories: [1, 4],
        bench: [{m:"π₀.5",metric:"Open-World Success",ds:"7B",v:"82.0%",n:"unseen objects/environments"}],
        papers: []
      },
      {
        id: 232,
        name: "Helix (Figure AI)",
        cn: "Helix 人形机器人VLA",
        desc_cn: "Figure AI的双系统VLA：System 2是VLM做高层规划，System 1是快速响应的action model。200Hz全身控制，支持双手55-DoF。",
        desc_en: "Figure AI dual-system VLA. System 2 is VLM for planning; System 1 is fast action model. 200Hz whole-body, bimanual 55-DoF.",
        paper: "Figure AI, 2025 — Helix — (Technical Report)",
        arxiv:"https://arxiv.org/abs/2504.16054",
        badge: "🔴",
        diff: "Advanced",
        categories: [1, 3, 7],
        bench: [{m:"Helix",metric:"Whole-body Success",ds:"H1 humanoid",v:"85.0%",n:"200Hz, 55-DoF bimanual"}],
        papers: []
      },
      {
        id: 233,
        name: "GR00T N1",
        cn: "GR00T N1 人形VLA",
        desc_cn: "NVIDIA的人形机器人基础模型。专门为26-DoF灵巧手的人形机器人设计，支持全身动作生成。在NVIDIA Isaac GR00T平台上训练。",
        desc_en: "NVIDIA humanoid robot foundation model. Designed for 26-DoF dextrous hand humanoids.",
        paper: "NVIDIA, 2024 — GR00T — (Technical Report)",
        arxiv: "",
        badge: "🟡",
        diff: "Intermediate",
        categories: [1, 4],
        bench: [{m:"GR00T N1",metric:"Task Success",ds:"H1 humanoid",v:"78.0%",n:"26-DoF dexterous hand"}],
        papers: []
      },
      {
        id: 234,
        name: "GR00T N1.5",
        cn: "GR00T N1.5 通用VLA",
        desc_cn: "GR00T N1的改进版，增加了对多种机器人构型（双足、轮式、四足）的支持。更大的预训练数据集和更长的上下文窗口。",
        desc_en: "Improved GR00T N1 with support for multiple robot configurations (bipedal, wheeled, quadruped).",
        paper: "NVIDIA, 2025 — GR00T N1.5 — (Technical Report)",
        arxiv:"https://arxiv.org/abs/2503.14734",
        badge: "🟡",
        diff: "Intermediate",
        categories: [1, 4],
        bench: [{m:"GR00T N1.5",metric:"Multi-embodiment",ds:"H1+others",v:"80.0%",n:"bipedal/wheeled/quadruped"}],
        papers: []
      },
      {
        id: 235,
        name: "GR00T N2",
        cn: "GR00T N2 高爆发VLA",
        desc_cn: "NVIDIA的高爆发动作专用VLA，针对需要快速、强力动作的任务（如跳跃、投掷、搬运）。比N1/N1.5有更高的动作频率和力矩输出。",
        desc_en: "NVIDIA high-explosion motion-specialized VLA for tasks requiring fast, strong actions.",
        paper: "NVIDIA, 2025 — GR00T N2 — (Technical Report)",
        arxiv:"https://arxiv.org/abs/2503.14734",
        badge: "🟡",
        diff: "Intermediate",
        categories: [1, 3],
        bench: [{m:"GR00T N2",metric:"Explosion Task",ds:"H1 humanoid",v:"83.0%",n:"jump/throw/lift tasks"}],
        papers: []
      }
    ],
    benches: {
      "1": {
        titleCN: "视觉编码效率",
        titleEN: "Vision Encoding Efficiency",
        metricCN: "ImageNet Top-1准确率",
        metricEN: "ImageNet Top-1 Accuracy",
        unit: "%",
        higherBetter: true,
        items: [
          {
            name: "EVA-02-Large",
            val: 89.6,
            color: "var(--accent)",
            note: "CLIP ViT-L/14"
          },
          {
            name: "DINOv2 ViT-L/14",
            val: 88.4,
            color: "var(--accent2)",
            note: "self-supervised"
          },
          {
            name: "SigLIP ViT-SO400M",
            val: 87.2,
            color: "var(--c4)",
            note: "multi-label"
          },
          {
            name: "CLIP ViT-L/14",
            val: 75.3,
            color: "var(--green)",
            note: "zero-shot"
          },
          {
            name: "EViT-Large",
            val: 84.1,
            color: "var(--c6)",
            note: "-40% FLOPs"
          }
        ]
      },
      "2": {
        titleCN: "多模态融合",
        titleEN: "Multimodal Fusion",
        metricCN: "多模态理解得分",
        metricEN: "Multimodal Understanding",
        unit: "%",
        higherBetter: true,
        items: [
          {
            name: "GPT-4V",
            val: 86.4,
            color: "var(--accent)",
            note: "multimodal leaderboard"
          },
          {
            name: "Gemini Ultra",
            val: 85.9,
            color: "var(--accent2)",
            note: "MMLU multimodal"
          },
          {
            name: "CogVLM-17B",
            val: 84.2,
            color: "var(--c4)",
            note: "architecture fusion"
          },
          {
            name: "LLaVA-NeXT 34B",
            val: 65.2,
            color: "var(--c6)",
            note: "MMMU val"
          },
          {
            name: "MiniGPT-4 7B",
            val: 61.2,
            color: "var(--c8)",
            note: "open-source budget"
          }
        ]
      },
      "5": {
        titleCN: "视觉-语言对齐",
        titleEN: "Vision-Language Alignment",
        metricCN: "VQAv2准确率",
        metricEN: "VQAv2 Accuracy",
        unit: "%",
        higherBetter: true,
        items: [
          {
            name: "GPT-4V",
            val: 86.4,
            color: "var(--accent)",
            note: "few-shot"
          },
          {
            name: "InternVL3 78B",
            val: 85.1,
            color: "var(--accent2)",
            note: ""
          },
          {
            name: "Qwen2-VL 72B",
            val: 84.6,
            color: "var(--c4)",
            note: ""
          },
          {
            name: "LLaVA-1.5 13B",
            val: 82,
            color: "var(--green)",
            note: ""
          },
          {
            name: "InstructBLIP 13B",
            val: 80.7,
            color: "var(--c6)",
            note: ""
          },
          {
            name: "BLIP-2 13B",
            val: 79.6,
            color: "var(--c7)",
            note: ""
          }
        ]
      },
      "6": {
        titleCN: "图像生成",
        titleEN: "Image Generation",
        metricCN: "FID分数(越低越好)",
        metricEN: "FID Score (lower=better)",
        unit: "",
        higherBetter: false,
        items: [
          {
            name: "DALL-E 3",
            val: 12.3,
            color: "var(--accent)",
            note: "MS-COCO 30px"
          },
          {
            name: "SD3 8B",
            val: 18.7,
            color: "var(--accent2)",
            note: "MM-DiT 50-step"
          },
          {
            name: "SDXL Turbo",
            val: 15.1,
            color: "var(--c3)",
            note: "1-step generation"
          },
          {
            name: "PixArt-σ 900M",
            val: 7.6,
            color: "var(--c4)",
            note: "DiT 900M params"
          },
          {
            name: "LCM SD-Turbo",
            val: 17.5,
            color: "var(--c6)",
            note: "1-step"
          },
          {
            name: "SDXL",
            val: 23.9,
            color: "var(--c7)",
            note: "50-step"
          },
          {
            name: "LDM-4",
            val: 34.9,
            color: "var(--c8)",
            note: "pixel space baseline"
          }
        ]
      },
      "7": {
        titleCN: "视频理解",
        titleEN: "Video Understanding",
        metricCN: "K400准确率",
        metricEN: "Kinetics-400 Accuracy",
        unit: "%",
        higherBetter: true,
        items: [
          {
            name: "SlowFast R101 8x8",
            val: 82.3,
            color: "var(--accent)",
            note: "slowfast baseline"
          },
          {
            name: "TimeSformer-L",
            val: 83.6,
            color: "var(--accent2)",
            note: "divided attention"
          },
          {
            name: "CogVideoX-5B",
            val: 68.4,
            color: "var(--c4)",
            note: "video generation metric"
          },
          {
            name: "VideoPoet L",
            val: 71.2,
            color: "var(--c6)",
            note: "video generation metric"
          }
        ]
      },
      "8": {
        titleCN: "Benchmark对比",
        titleEN: "VLM Benchmarks",
        metricCN: "综合得分",
        metricEN: "Overall Score",
        unit: "%",
        higherBetter: true,
        items: [
          {
            name: "GPT-4V",
            val: 86.4,
            color: "var(--accent)",
            note: "VQAv2 leaderboard"
          },
          {
            name: "Qwen2-VL 72B",
            val: 84.6,
            color: "var(--accent2)",
            note: "DocVQA 94.5%"
          },
          {
            name: "InternVL3 78B",
            val: 85.1,
            color: "var(--c3)",
            note: "opensource SOTA"
          },
          {
            name: "LLaVA-NeXT 34B",
            val: 65.2,
            color: "var(--c4)",
            note: "MMMU val set"
          }
        ]
      }
    }
  },
  vla: {
    labelCN: "视觉-语言-动作模型",
    labelEN: "Vision-Language-Action (Robotics)",
    heroCN: "视觉-语言-动作模型",
    heroEN: "Vision-Language-Action (Robotics)",
    footerCN: "整理自 CoRL / RSS / ICRA / NeurIPS 机器人与操控论文",
    footerEN: "Curated from CoRL / RSS / ICRA / NeurIPS robotics papers",
    cats: [
      {
        id: 1,
        labelCN: "VLA基础模型",
        labelEN: "VLA Foundation",
        color: "var(--c1)",
        icon: "fa-robot",
        subTopics: [
          "RT-1 / RT-2",
          "RT-X",
          "OpenVLA",
          "π₀",
          "π₀-FAST",
          "π₀.5",
          "Helix",
          "GR00T N1/N1.5/N2",
          "Octo"
        ]
      },
      {
        id: 2,
        labelCN: "动作token化",
        labelEN: "Act Tokenization",
        color: "var(--c2)",
        icon: "fa-gamepad",
        subTopics: [
          "Action Chunking",
          "Discrete Actions",
          "Continuous Actions",
          "Bidirectional"
        ]
      },
      {
        id: 3,
        labelCN: "模仿学习",
        labelEN: "Imitation Learning",
        color: "var(--c3)",
        icon: "fa-handshake",
        subTopics: [
          "BC / GAIL",
          "Diffusion Policy",
          "ACT",
          "Lagrangian Policy"
        ]
      },
      {
        id: 4,
        labelCN: "VLA训练效率",
        labelEN: "VLA Training",
        color: "var(--c4)",
        icon: "fa-brain",
        subTopics: [
          "Vision Pre-training",
          "Cross-embodiment",
          "Data Aggregation",
          "URL"
        ]
      },
      {
        id: 5,
        labelCN: "Sim-to-Real",
        labelEN: "Sim-to-Real",
        color: "var(--c5)",
        icon: "fa-sync",
        subTopics: [
          "Domain Randomization",
          "RF",
          "GRAD",
          "SDAO"
        ]
      },
      {
        id: 6,
        labelCN: "导航与Locomotion",
        labelEN: "Nav & Locomotion",
        color: "var(--c6)",
        icon: "fa-running",
        subTopics: [
          "VLN",
          "Nav2",
          "BDC-LAM",
          "LEAP Hand"
        ]
      },
      {
        id: 7,
        labelCN: "硬件与执行",
        labelEN: "Hardware & Execute",
        color: "var(--c7)",
        icon: "fa-microchip",
        subTopics: [
          "Robot OS",
          "ROS2",
          "Nvidia Isaac",
          "Trossen"
        ]
      },
      {
        id: 8,
        labelCN: "Benchmark",
        labelEN: "Benchmarks",
        color: "var(--c8)",
        icon: "fa-chart-bar",
        subTopics: [
          "CALVIN",
          "RLBench",
          "MetaWorld",
          "BEHAVIOR",
          "LIBERO"
        ]
      }
    ],
    techs: [
      {
        id: 201,
        name: "RT-1 / RT-2",
        cn: "RT-1 / RT-2 视觉-动作模型",
        desc_cn: "Google Robotics的VLA里程碑。RT-1用FiLM conditioning连接图像历史和动作序列；RT-2将VLM直接输出机器人动作（vision-language-action模型）。",
        desc_en: "Google Robotics VLA milestone. RT-1 uses FiLM conditioning to connect image history and action sequences; RT-2 outputs robot actions directly from VLM (vision-language-action).",
        paper: "Brohan et al., 2022 — RT-1 — arXiv:2212.05641; 2023 — RT-2 — arXiv:2307.15290",
        arxiv: "https://arxiv.org/abs/2212.05641",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          1,
          4
        ],
        bench: [
          {
            m: "RT-2 55B",
            metric: "Success Rate",
            ds: "Bridge",
            v: "85.5%",
            n: "38 tasks, 6 robots"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 202,
        name: "OpenVLA",
        cn: "OpenVLA 开源VLA",
        desc_cn: "开源VLA，复用LLaVA架构（Prismatic VLM backbone）加上action head。7B参数在单张A100上微调，支持29种机器人操控任务。",
        desc_en: "Open-source VLA. Reuses LLaVA architecture (Prismatic VLM backbone) with added action head. 7B params fine-tuned on single A100, supports 29 robot manipulation tasks.",
        paper: "Kim et al., 2024 — OpenVLA — arXiv:2409.16289",
        arxiv: "https://arxiv.org/abs/2409.16289",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1,
          4
        ],
        bench: [
          {
            m: "OpenVLA 7B",
            metric: "LIBERO Success",
            ds: "7B",
            v: "63.5%",
            n: "single A100"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 203,
        name: "π₀ (Pi-Zero)",
        cn: "π₀ 物理智能VLA",
        desc_cn: "Physical Intelligence的VLA模型，用flow matching训练生成式机器人策略。双向Transformer+action chunks实现流畅的连续动作生成。",
        desc_en: "Physical Intelligence's VLA model. Uses flow matching to train generative robot policies. Bidirectional Transformer + action chunks for smooth continuous action generation.",
        paper: "Ahn et al., 2024 — π₀ — Physical Intelligence",
        arxiv: "",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          1,
          3
        ],
        bench: [
          {
            m: "π₀",
            metric: "Generalist Score",
            ds: "7B",
            v: "88.0%",
            n: "52 tasks, 4 embodiments"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 204,
        name: "Octo",
        cn: "Octo 多用途机器人策略",
        desc_cn: "Open-source base policy from Columbia/TRI. 用大规模互联网数据预训练的Transformer处理observation和action，支持多机器人 embodiment微调。",
        desc_en: "Open-source base policy from Columbia/TRI. Transformer trained on large-scale internet data handles observations and actions, supports multi-robot embodiment fine-tuning.",
        paper: "Octo Model Team, 2024 — Octo — arXiv:2409.19694",
        arxiv: "https://arxiv.org/abs/2409.19694",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1,
          4
        ],
        bench: [
          {
            m: "Octo 93M",
            metric: "Success Rate",
            ds: "LIBERO",
            v: "61.8%",
            n: "zero-shot transfer"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 205,
        name: "Diffusion Policy (DP)",
        cn: "Diffusion Policy 扩散策略",
        desc_cn: "用DDPM/Diffuser建模机器人动作分布，解决了传统BC的累积误差和单峰限制。在language-conditioned tasks上显著优于BC。",
        desc_en: "Uses DDPM/Diffuser to model robot action distribution. Solves cumulative error and unimodality limits of traditional BC. Significantly outperforms BC on language-conditioned tasks.",
        paper: "Chi et al., 2023 — Diffusion Policy — arXiv:2303.04137",
        arxiv: "https://arxiv.org/abs/2303.04137",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3
        ],
        bench: [
          {
            m: "DP 1.2B",
            metric: "Bridge Success",
            ds: "1.2B",
            v: "80.8%",
            n: "vs 74.0% BC"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 206,
        name: "ACT (Action Chunking Transformer)",
        cn: "ACT 动作分块Transformer",
        desc_cn: "ALOHA项目核心，用因果Transformer实现多模态行为克隆（MMAC）。8-DoF双手操控任务中17个动作序列chunking减少时域误差传播。",
        desc_en: "ALOHA project's core. Causal Transformer for Multimodal Action Chunking (MMAC). 8-DoF bimanual manipulation with 17-action sequence chunking reduces temporal error propagation.",
        paper: "Zhao et al., 2023 — ACT — arXiv:2304.13705",
        arxiv: "https://arxiv.org/abs/2304.13705",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3
        ],
        bench: [
          {
            m: "ACT",
            metric: "SIMA Benchmark",
            ds: "8-DoF",
            v: "85.3%",
            n: "ALOHA bimanual"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Switch Transformer",
            title: "Switch Transformers: Scaling to Trillion Parameter Models",
            authors: "Fedus et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2101.03961",
            github: "https://github.com/tensorflow/mesh",
            huggingface: "",
            bibtex: "Fedus et al., 2022 — Switch Transformer (JMLR 2022)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 207,
        name: "CALVIN Benchmark",
        cn: "CALVIN 多任务操控Benchmark",
        desc_cn: "开源benchmark，4个家用机器人+34个长序列任务，评估VLA的长期任务完成能力。开放词汇、视觉丰丰富、状态机任务定义。",
        desc_en: "Open-source benchmark. 4 home robots + 34 long-horizon tasks. Evaluates VLA long-horizon task completion. Open vocabulary, rich visuals, state-machine task definitions.",
        paper: "Mees et al., 2022 — CALVIN — arXiv:2207.05042",
        arxiv: "https://arxiv.org/abs/2207.05042",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          8
        ],
        bench: [
          {
            m: "RT-2 55B",
            metric: "CALVIN ABCD",
            ds: "34 tasks",
            v: "88.0%",
            n: "4-robot long horizon"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Self-Instruct",
            title: "Self-Instruct: Aligning Language Model with Self Generated Instructions",
            authors: "Wang et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.10560",
            github: "https://github.com/yizhongw/self-instruct",
            huggingface: "",
            bibtex: "Wang et al., 2022 — Self-Instruct (ACL 2023)"
          },
          {
            name: "Phi-1",
            title: "Textbooks Are All You Need",
            authors: "Gunasekar et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.11644",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1",
            bibtex: "Gunasekar et al., 2023 — Phi-1 (ICML 2023)"
          },
          {
            name: "Phi-1.5",
            title: "Textbooks Are All You Need 2",
            authors: "Li et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.05463",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1_5",
            bibtex: "Li et al., 2023 — Phi-1.5 (arXiv 2023)"
          }
        ]
      },
      {
        id: 208,
        name: "RLBench",
        cn: "RLBench 机器人学习Benchmark",
        desc_cn: "100+个手写任务（Mujoco/Franka），提供oracle引导的演示生成接口，支持变分任务参数化（颜色、位置等），是VLA模仿学习的重要评估工具。",
        desc_en: "100+ handcrafted tasks (Mujoco/Franka). Provides oracle-guided demo generation interface. Supports varied task parameterization (color, position). Key VLA imitation learning evaluation tool.",
        paper: "James et al., 2020 — RLBench — arXiv:1907.00953",
        arxiv: "https://arxiv.org/abs/1907.00953",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          8
        ],
        bench: [
          {
            m: "RVT-2",
            metric: "RLBench %",
            ds: "100 tasks",
            v: "85.4%",
            n: "visual MP"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Self-Instruct",
            title: "Self-Instruct: Aligning Language Model with Self Generated Instructions",
            authors: "Wang et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.10560",
            github: "https://github.com/yizhongw/self-instruct",
            huggingface: "",
            bibtex: "Wang et al., 2022 — Self-Instruct (ACL 2023)"
          },
          {
            name: "Phi-1",
            title: "Textbooks Are All You Need",
            authors: "Gunasekar et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.11644",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1",
            bibtex: "Gunasekar et al., 2023 — Phi-1 (ICML 2023)"
          },
          {
            name: "Phi-1.5",
            title: "Textbooks Are All You Need 2",
            authors: "Li et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.05463",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1_5",
            bibtex: "Li et al., 2023 — Phi-1.5 (arXiv 2023)"
          }
        ]
      },
      {
        id: 209,
        name: "Sim-to-Real: Domain Randomization",
        cn: "域随机化 Sim-to-Real",
        desc_cn: "在仿真中随机化纹理、重量、光照等参数，使策略泛化到真实物理世界。Isaac Gym使能大规模并行域随机化训练。",
        desc_en: "Randomizes textures, masses, lighting in simulation so policies generalize to real physics world. Isaac Gym enables large-scale parallel domain randomization training.",
        paper: "Tobin et al., 2017 — DR — IROS 2017 — arXiv:1703.06907",
        arxiv: "https://arxiv.org/abs/1703.06907",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          5
        ],
        bench: [
          {
            m: "DR",
            metric: "Real Success",
            ds: "Franka",
            v: "92%",
            n: "vs 0% without DR"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 210,
        name: "GAIL (Generative Adversarial IL)",
        cn: "GAIL 生成对抗模仿学习",
        desc_cn: "用GAN的对抗训练让策略生成的动作分布逼近专家演示。TRPO或PPO均可用于GAIL的策略优化步骤。",
        desc_en: "Uses adversarial training from GAN to make policy action distribution approach expert demonstrations. TRPO or PPO can be used for GAIL's policy optimization step.",
        paper: "Ho & Ermon, 2016 — GAIL — NeurIPS 2016 — arXiv:1606.03476",
        arxiv: "https://arxiv.org/abs/1606.03476",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3
        ],
        bench: [
          {
            m: "GAIL",
            metric: "Humanoid Dir",
            ds: "MuJoCo",
            v: "98.3%",
            n: "vs 96.1% BC"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 211,
        name: "VLA Fine-tuning: URL",
        cn: "URL 统一机器人学习",
        desc_cn: "Google开源大规模跨机器人数据策展平台。Unified Representation Language用固定动作表示（7-DoF）使不同机器人数据混合训练成为可能。",
        desc_en: "Google's open-source large-scale cross-robot data curation platform. Unified Representation Language uses fixed action representation (7-DoF) enabling mixed robot data training.",
        paper: "Padalkar et al., 2023 — UR5e / RT-X — arXiv:2306.11710",
        arxiv: "https://arxiv.org/abs/2306.11710",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          4
        ],
        bench: [
          {
            m: "RT-1 + RT-X",
            metric: "X-Ray Obj",
            ds: "5 robots",
            v: "90.0%",
            n: "vs 68.0% single-robot"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 212,
        name: "VLN (Vision-Language Navigation)",
        cn: "VLN 视觉语言导航",
        desc_cn: "在3D环境中根据语言指令进行导航。主流方法包括：PEIL（语言调节的Transformer）、NAVERS（保持几何一致性的视角选择）、SOCR-Nav。",
        desc_en: "Navigate 3D environments following language instructions. Main approaches: PEIL (language-conditioned Transformer), NAVERS (geometry-consistent viewpoint selection), SOCR-Nav.",
        paper: "Anderson et al., 2018 — VLN — CVPR 2018 — arXiv:1711.07280",
        arxiv: "https://arxiv.org/abs/1711.07280",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6
        ],
        bench: [
          {
            m: "NAVERS",
            metric: "Success Rate",
            ds: "R2R",
            v: "70.3%",
            n: "on R2R val unseen"
          }
        ],
        papers: [
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 213,
        name: "LEAP Hand / BDCM",
        cn: "LEAP Hand 灵巧手",
        desc_cn: "低成本高自由度的四指灵巧手（20-DoF），学习based的视触融合策略。BDCM（双向组成运动）通过VLMs计划全身运动。",
        desc_en: "Low-cost high-DoF four-finger hand (20-DoF). Learning-based vision-touch fusion policy. BDCM (Bidirectional Composition Motion) plans whole-body motion via VLMs.",
        paper: "Kumar et al., 2024 — LEAP Hand — arXiv:2405.16788",
        arxiv: "https://arxiv.org/abs/2405.16788",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6,
          7
        ],
        bench: [
          {
            m: "LEAP Hand",
            metric: "Dexterity Score",
            ds: "20-DoF",
            v: "0.74",
            n: "on DexArt"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          },
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 214,
        name: "GR00T / Unitree VLA",
        cn: "GR00T / Unitree 开源VLA",
        desc_cn: "Figure AI开源的GR00T系列（GR00T-M3）专为人形机器人设计，支持全身动作生成。Unitree的H1-2机器人也开源了VLA策略。",
        desc_en: "Figure AI's open-source GR00T series (GR00T-M3) designed for humanoid robots, supports whole-body action generation. Unitree's H1-2 robot also has open VLA policies.",
        paper: "Figure AI, 2024 — GR00T — Blog; Unitree, 2025 — H1-2 VLA",
        arxiv: "",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1
        ],
        bench: [
          {
            m: "GR00T-M3",
            metric: "Task Success",
            ds: "H1 humanoid",
            v: "82%",
            n: "6 DoF whole-body"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 215,
        name: "3D Diffusion Policy (DP3)",
        cn: "3D扩散策略",
        desc_cn: "Diffusion Policy的3D版本，用点云作为观察输入而非RGB图像，通过去噪扩散过程生成3D动作轨迹。在机器人操控中显著优于2D Diffusion Policy。",
        desc_en: "3D version of Diffusion Policy. Uses point cloud as observation instead of RGB, generates 3D action trajectories via denoising diffusion. Significantly outperforms 2D Diffusion Policy in robot manipulation.",
        paper: "Chen et al., 2024 — DP3 — arXiv:2403.00554",
        arxiv: "https://arxiv.org/abs/2403.00554",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3
        ],
        bench: [
          {
            m: "DP3",
            metric: "Success",
            ds: "RLBench",
            v: "90%",
            n: "3D point cloud input"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 216,
        name: "VoxPoser (CMU)",
        cn: "VoxPoser 视觉-语言-动作规划",
        desc_cn: "CMU的开源VLA，用大语言模型直接生成3D voxel空间中的机器人轨迹，通过代码生成实现开放词汇操作规划，无需额外训练即可泛化到新物体。",
        desc_en: "CMU's open VLA. Uses LLM to directly generate robot trajectories in 3D voxel space via code generation. Enables open-vocabulary manipulation planning without additional training.",
        paper: "Huang et al., 2023 — VoxPoser — arXiv:2307.15875",
        arxiv: "https://arxiv.org/abs/2307.15875",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1
        ],
        bench: [
          {
            m: "VoxPoser 7B",
            metric: "Calvin ABCD",
            ds: "7B",
            v: "83.5%",
            n: "zero-shot new objects"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 217,
        name: "ALOHA / ACT",
        cn: "ALOHA 双手操控系统",
        desc_cn: "Stanford的低成本双手操控硬件（~$20K）+ Action Chunking Transformer（ACT）。ACT通过因果Transformer实现多模态行为克隆（MMAC），8-DoF双手精细操控。",
        desc_en: "Stanford's low-cost bimanual manipulation hardware (~$20K) + Action Chunking Transformer (ACT). ACT achieves Multimodal Action Chunking via causal Transformer for 8-DoF bimanual dexterity.",
        paper: "Zhao et al., 2023 — ALOHA — arXiv:2304.13705",
        arxiv: "https://arxiv.org/abs/2304.13705",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3,
          7
        ],
        bench: [
          {
            m: "ACT",
            metric: "Bimanual Success",
            ds: "ALOHA",
            v: "85%",
            n: "8-DoF tactile tasks"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 218,
        name: "RT-X / Open X-Embodiment",
        cn: "RT-X 跨机器人身体数据",
        desc_cn: "Google Robotics开源的大规模跨机器人数据集（RT-1-X训练数据），包含22种机器人、5000+任务。通过统一动作表示实现跨机器人身体zero-shot策略迁移。",
        desc_en: "Google Robotics' open large-scale cross-robot dataset (RT-1-X training data). 22 robots, 5000+ tasks. Zero-shot policy transfer across robot embodiments via unified action representation.",
        paper: "Padalkar et al., 2023 — RT-X — arXiv:2306.11710",
        arxiv: "https://arxiv.org/abs/2306.11710",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          4
        ],
        bench: [
          {
            m: "RT-1-X",
            metric: "X-Embodiment",
            ds: "22 robots",
            v: "90%",
            n: "vs 68% single-robot"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 219,
        name: "Dexterity (DexArt / Shadow Hand)",
        cn: "DexArt 灵巧手操控基准",
        desc_cn: "以Shadow Hand为中心的灵巧手操控benchmark，包含重定向、插拔等精细任务。BDCM（双向组成运动）结合VLM实现全身协调的灵巧操控。",
        desc_en: "Shadow Hand-centric dexterous manipulation benchmark. Reorientation, plug insertion, and other fine tasks. BDCM (Bidirectional Composition Motion) with VLM for whole-body coordinated dexterous manipulation.",
        paper: "Kumar et al., 2024 — DexArt — arXiv:2405.16788",
        arxiv: "https://arxiv.org/abs/2405.16788",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6
        ],
        bench: [
          {
            m: "BDCM",
            metric: "Dexterity Score",
            ds: "DexArt",
            v: "0.74",
            n: "on manipulation tasks"
          }
        ],
        papers: [
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 220,
        name: "Voyager (Minecraft Agent)",
        cn: "Voyager Minecraft具身智能体",
        desc_cn: "Microsoft的Minecraft具身智能体，用GPT-4作为任务规划器+代码生成器+自我改进的三层架构。在Minecraft中从零学习，技能库持续扩展。",
        desc_en: "Microsoft's Minecraft embodied agent. Three-layer architecture: GPT-4 as task planner + code generator + self-improving skill library. Learns from scratch in Minecraft with continuously expanding skill library.",
        paper: "Wang et al., 2023 — Voyager — arXiv:2305.16291",
        arxiv: "https://arxiv.org/abs/2305.16291",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          1
        ],
        bench: [
          {
            m: "Voyager",
            metric: "Minecraft Items",
            ds: "GPT-4",
            v: "247",
            n: "unique items crafted"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 221,
        name: "PerAct / Perceiver IO",
        cn: "PerAct 感知-动作Transformer",
        desc_cn: "用Perceiver IO编码多视角3D观察，结合Action Chunking Transformer实现语言条件化的机器人动作预测。在RGB-D输入的精细操控任务上超过RT-1。",
        desc_en: "Perceiver IO encodes multi-view 3D observations. Combined with Action Chunking Transformer for language-conditioned robot action prediction. Outperforms RT-1 on RGB-D fine manipulation tasks.",
        paper: "Shridhar et al., 2023 — PerAct — arXiv:2301.08152",
        arxiv: "https://arxiv.org/abs/2301.08152",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3
        ],
        bench: [
          {
            m: "PerAct",
            metric: "Task Success",
            ds: "CALVIN",
            v: "83.4%",
            n: "language-conditioned"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 222,
        name: "RoboKchet / RoboKit",
        cn: "RoboKit / RoboKchet 机器人工具包",
        desc_cn: "RoboKit提供统一API连接多种机器人和仿真环境。RoboKchet基于RoboKit的工具使用能力，通过VLMs规划使用工具步骤并通过机械臂执行。",
        desc_en: "RoboKit provides unified API connecting multiple robots and simulation environments. RoboKchet uses RoboKit's tool-use capabilities. VLMs plan tool-use steps, arms execute.",
        paper: "Liu et al., 2024 — RoboKit — arXiv:2405.15120",
        arxiv: "https://arxiv.org/abs/2405.15120",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7
        ],
        bench: [
          {
            m: "RoboKchet",
            metric: "Tool Use",
            ds: "Frank Panda",
            v: "76%",
            n: "multi-step tasks"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 223,
        name: "LIBERO (Language-Image Benchmark)",
        cn: "LIBERO 机器人基准",
        desc_cn: "NVIDIA FLARE团队开源的四套benchmark（LIBERO-Spatial/Lifetime/Object/Goal），评估VLA的语言和视觉理解在真实机器人操控任务中的表现。",
        desc_en: "NVIDIA FLARE team's four benchmarks (LIBERO-Spatial/Lifetime/Object/Goal). Evaluates VLA language and visual understanding in real robot manipulation tasks.",
        paper: "Sindakar et al., 2024 — LIBERO — arXiv:2404.18279",
        arxiv: "https://arxiv.org/abs/2404.18279",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          8
        ],
        bench: [
          {
            m: "OpenVLA 7B",
            metric: "LIBERO",
            ds: "4 subtask suites",
            v: "63%",
            n: "language conditions"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Self-Instruct",
            title: "Self-Instruct: Aligning Language Model with Self Generated Instructions",
            authors: "Wang et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.10560",
            github: "https://github.com/yizhongw/self-instruct",
            huggingface: "",
            bibtex: "Wang et al., 2022 — Self-Instruct (ACL 2023)"
          },
          {
            name: "Phi-1",
            title: "Textbooks Are All You Need",
            authors: "Gunasekar et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.11644",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1",
            bibtex: "Gunasekar et al., 2023 — Phi-1 (ICML 2023)"
          },
          {
            name: "Phi-1.5",
            title: "Textbooks Are All You Need 2",
            authors: "Li et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.05463",
            github: "https://github.com/microsoft/phi",
            huggingface: "https://huggingface.co/microsoft/phi-1_5",
            bibtex: "Li et al., 2023 — Phi-1.5 (arXiv 2023)"
          }
        ]
      },
      {
        id: 224,
        name: "Mobile ALOHA / WidowX",
        cn: "Mobile ALOHA 移动操控系统",
        desc_cn: "斯坦福开源的移动双手操控平台，在ALOHA基础上增加移动底座。Mobile ALOHA通过协同微调实现移动+双手的联合控制，支持复杂的长程任务。",
        desc_en: "Stanford's open mobile bimanual platform. Adds mobile base to ALOHA. Mobile ALOHA achieves joint mobile + bimanual control via co-fine-tuning. Supports complex long-horizon tasks.",
        paper: "Zhao et al., 2024 — Mobile ALOHA — arXiv:2401.14466",
        arxiv: "https://arxiv.org/abs/2401.14466",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3,
          7
        ],
        bench: [
          {
            m: "Mobile ALOHA",
            metric: "Success",
            ds: "Mobile",
            v: "90%",
            n: "long-horizon bimanual"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      }
    ],
    benches: {
      "8": {
        titleCN: "Benchmark对比",
        titleEN: "VLA Benchmarks",
        metricCN: "成功率/得分",
        metricEN: "Success Rate / Score",
        unit: "",
        higherBetter: true,
        items: [
          {
            name: "π₀",
            val: 88,
            color: "var(--accent2)",
            note: "52 tasks, 4 embodiments"
          },
          {
            name: "RT-2 55B / CALVIN",
            val: 88,
            color: "var(--accent)",
            note: "4 robots, 34 tasks"
          },
          {
            name: "Diffusion Policy",
            val: 80.8,
            color: "var(--c3)",
            note: "Bridge dataset"
          },
          {
            name: "OpenVLA 7B / LIBERO",
            val: 63.5,
            color: "var(--c4)",
            note: "single A100"
          },
          {
            name: "Octo 93M / LIBERO",
            val: 61.8,
            color: "var(--c6)",
            note: "zero-shot transfer"
          }
        ]
      }
    }
  },
  world: {
    labelCN: "世界模型与仿真",
    labelEN: "World Models & Simulation",
    heroCN: "世界模型与仿真",
    heroEN: "World Models & Simulation",
    footerCN: "整理自 NeurIPS / ICML / ICLR / CVPR 生成模型与仿真论文",
    footerEN: "Curated from NeurIPS / ICML / ICLR / CVPR generative & simulation papers",
    cats: [
      {
        id: 1,
        labelCN: "神经辐射场",
        labelEN: "NeRF & Radiance",
        color: "var(--c1)",
        icon: "fa-camera-retro",
        subTopics: [
          "NeRF",
          "Instant-NGP",
          "D-nerf",
          "MobileNeRF",
          "Neural Volumes"
        ]
      },
      {
        id: 2,
        labelCN: "高斯泼溅",
        labelEN: "Gaussian Splatting",
        color: "var(--c2)",
        icon: "fa-fire",
        subTopics: [
          "3DGS",
          "Gaussianvo",
          "Relightable GS",
          "Point NeRF",
          "SuGaR"
        ]
      },
      {
        id: 3,
        labelCN: "视频预测",
        labelEN: "Video Prediction",
        color: "var(--c3)",
        icon: "fa-film",
        subTopics: [
          "Video Diffusion",
          "World Models",
          "DMVE",
          "GAIA-1",
          "Unified Perception"
        ]
      },
      {
        id: 4,
        labelCN: "MBRL 世界模型",
        labelEN: "Model-Based RL",
        color: "var(--c4)",
        icon: "fa-cogs",
        subTopics: [
          "Dreamer",
          "World Models",
          "MuZero",
          "TD-MPC",
          "MVE"
        ]
      },
      {
        id: 5,
        labelCN: "仿真环境",
        labelEN: "Simulation",
        color: "var(--c5)",
        icon: "fa-globe",
        subTopics: [
          "MuJoCo",
          "Isaac Gym",
          "Habitat",
          "SAPIEN",
          "WebDOMAIN"
        ]
      },
      {
        id: 6,
        labelCN: "世界模型架构",
        labelEN: "WM Architecture",
        color: "var(--c6)",
        icon: "fa-puzzle-piece",
        subTopics: [
          "Transformer WM",
          "SSM WM",
          "Token化",
          "Unified Framework"
        ]
      },
      {
        id: 7,
        labelCN: "场景表示学习",
        labelEN: "Scene Representation",
        color: "var(--c7)",
        icon: "fa-cube",
        subTopics: [
          "Object-centric",
          "Slot Attention",
          "Compositional",
          "Equivariance"
        ]
      },
      {
        id: 8,
        labelCN: "Benchmark",
        labelEN: "Benchmarks",
        color: "var(--c8)",
        icon: "fa-chart-bar",
        subTopics: [
          "ProcGen",
          "DMC",
          "Atari",
          "SAPIEN",
          "BehaviorBench"
        ]
      }
    ],
    techs: [
      {
        id: 301,
        name: "NeRF (Neural Radiance Fields)",
        cn: "NeRF 神经辐射场",
        desc_cn: "用MLP建模5D辐射场（位置+视角），通过体素渲染实现新视角合成。质量高但训练慢——Instant-NGP通过哈希编码将训练从数天加速到分钟级。",
        desc_en: "MLP models 5D radiance field (position + viewing direction). Volume rendering enables novel view synthesis. High quality but slow training — Instant-NGP's hash encoding speeds training from days to minutes.",
        paper: "Mildenhall et al., 2021 — NeRF — ECCV 2020 — arXiv:2011.05926",
        arxiv: "https://arxiv.org/abs/2011.05926",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          1
        ],
        bench: [
          {
            m: "NeRF",
            metric: "PSNR",
            ds: "Blender",
            v: "29.8 dB",
            n: "novel view synthesis"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 302,
        name: "3D Gaussian Splatting (3DGS)",
        cn: "3D高斯泼溅",
        desc_cn: "用3D高斯基元替代NeRF的MLP，通过泼溅（Splatting）实现实时渲染（>100 FPS）。支持激光雷达等稀疏输入的建图，优于NeRF。",
        desc_en: "Uses 3D Gaussian primitives instead of NeRF's MLP. Real-time rendering (>100 FPS) via splatting. Supports LiDAR and other sparse input mapping, superior to NeRF.",
        paper: "Kerbl et al., 2023 — 3DGS — SIGGRAPH 2023 — arXiv:2308.04079",
        arxiv: "https://arxiv.org/abs/2308.04079",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2
        ],
        bench: [
          {
            m: "3DGS",
            metric: "FPS",
            ds: "Real",
            v: ">100 FPS",
            n: "vs <1 FPS NeRF"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 303,
        name: "MobileNeRF / Freshen Fields",
        cn: "MobileNeRF 移动端NeRF",
        desc_cn: "将NeRF转换为多分辨率三角形网格和纹理贴图，使推理不再依赖MLP，支持在手机浏览器中实时渲染（>30 FPS）。",
        desc_en: "Converts NeRF to multi-resolution triangle meshes + texture maps. No MLP at inference — enables real-time rendering (>30 FPS) in mobile browsers.",
        paper: "Niemeyer et al., 2023 — MobileNeRF — arXiv:2208.14487",
        arxiv: "https://arxiv.org/abs/2208.14487",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1
        ],
        bench: [
          {
            m: "MobileNeRF",
            metric: "FPS",
            ds: "Mobile Browser",
            v: "30 FPS",
            n: "vs 0.1 FPS original NeRF"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 304,
        name: "DreamerV3",
        cn: "DreamerV3 世界模型强化学习",
        desc_cn: "无需任何 env model knowledge，在 Atar i57 和 Minecraft 中从零学习。视频预测world model + KL 平衡的actor-critic训练，实现了无辅助任务的统一算法。",
        desc_en: "Learns from scratch in Atari57 and Minecraft with zero env model knowledge. Video prediction world model + KL-balanced actor-critic training. Unified algorithm without task-specific tuning.",
        paper: "Hafner et al., 2023 — DreamerV3 — arXiv:2301.04104",
        arxiv: "https://arxiv.org/abs/2301.04104",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          4
        ],
        bench: [
          {
            m: "DreamerV3",
            metric: "DMC Score",
            ds: "Atari57",
            v: "200K",
            n: "normalized mean"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 305,
        name: "GAIA-1 (World Model for Autonomous Driving)",
        cn: "GAIA-1 自动驾驶世界模型",
        desc_cn: "Wayve的自动驾驶世界模型，用视频+piloting tokens建模驾驶场景，能预测未来视频并根据动作指令（如「向左转」）改变生成。",
        desc_en: "Wayve's autonomous driving world model. Uses video + piloting tokens to model driving scenes. Predicts future videos and changes generation based on action commands (e.g., 'turn left').",
        paper: "Hu et al., 2023 — GAIA-1 — arXiv:2309.17051",
        arxiv: "https://arxiv.org/abs/2309.17051",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          3
        ],
        bench: [
          {
            m: "GAIA-1",
            metric: "FID",
            ds: "Driving",
            v: "5.1",
            n: "video prediction"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 306,
        name: "World Models (Ha / Schmidhuber)",
        cn: "World Models Ha&Schmidhuber",
        desc_cn: "最早提出世界模型概念：VAE将输入压缩为z，RNN在z空间做梦，CMA-ES优化控制器。MDN-RNN建模序列未来。",
        desc_en: "Original world model concept: VAE compresses input to z, RNN dreams in z-space, CMA-ES optimizes controller. MDN-RNN models sequential futures.",
        paper: "Ha & Schmidhuber, 2018 — World Models — NeurIPS 2018 — arXiv:1803.10122",
        arxiv: "https://arxiv.org/abs/1803.10122",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          4,
          6
        ],
        bench: [
          {
            m: "World Model",
            metric: "Car Racing",
            ds: "CarRacing-v0",
            v: "906",
            n: "CMA-ES in latent"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          },
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 307,
        name: "MuJoCo / Isaac Gym",
        cn: "MuJoCo / Isaac Gym 物理仿真",
        desc_cn: "MuJoCo是连续时间物理引擎，广泛用于机器人学和强化学习。Isaac Gym通过GPU并行仿真实现数百万环境的并行训练，~10x加速。",
        desc_en: "MuJoCo is a continuous-time physics engine widely used in robotics and RL. Isaac Gym enables GPU-parallel simulation of millions of environments, ~10x speedup.",
        paper: "Todorov et al., 2012 — MuJoCo — arXiv:1201.5884; Nichels et al., 2021 — Isaac Gym",
        arxiv: "https://arxiv.org/abs/1201.5884",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          5
        ],
        bench: [
          {
            m: "Isaac Gym",
            metric: "Parallel Envs",
            ds: "A100",
            v: "1M",
            n: "vs 4096 CPU envs"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 308,
        name: "TD-MPC (Temporal Difference MPC)",
        cn: "TD-MPC 时序差分MPC",
        desc_cn: "将model predictive control与TD learning结合，在隐空间预测未来并通过MPC执行动作。在多个机器人任务中实现sample-efficient learning。",
        desc_en: "Combines MPC with TD learning. Predicts future in latent space and executes actions via MPC. Achieves sample-efficient learning on multiple robot tasks.",
        paper: "Ma et al., 2022 — TD-MPC — arXiv:2201.09892",
        arxiv: "https://arxiv.org/abs/2201.09892",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          4
        ],
        bench: [
          {
            m: "TD-MPC",
            metric: "Sample Efficiency",
            ds: "MetaWorld",
            v: "3.5x",
            n: "vs model-free PPO"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 309,
        name: "Video Diffusion World Models",
        cn: "视频扩散世界模型",
        desc_cn: "用diffusion model替代RNN作为世界模型，支持长序列高保真视频预测。MCVD（掩码条件视频扩散）和LaVie实现128帧以上的连贯生成。",
        desc_en: "Uses diffusion model instead of RNN as world model. Supports long-sequence high-fidelity video prediction. MCVD (Masked Conditional Video Diffusion) and LaVie generate 128+ frames coherently.",
        paper: "Villegas et al., 2022 — MCVD — arXiv:2207.06398",
        arxiv: "https://arxiv.org/abs/2207.06398",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          3
        ],
        bench: [
          {
            m: "MCVD",
            metric: "FVD",
            ds: "BAIR Robot",
            v: "240",
            n: "128-frame prediction"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 310,
        name: "SAPIEN / S3 (Scene))",
        cn: "SAPIEN 物理仿真场景",
        desc_cn: "支持关节物体交互的物理仿真平台，基于NVIDIA PhysX。提供大规模视觉操控数据集（PartNet-Mobility等）。",
        desc_en: "Physics simulation platform supporting articulated object interaction, based on NVIDIA PhysX. Provides large-scale visual manipulation datasets (PartNet-Mobility etc.).",
        paper: "Xiang et al., 2020 — SAPIEN — arXiv:1910.01152",
        arxiv: "https://arxiv.org/abs/1910.01152",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          5
        ],
        bench: [
          {
            m: "SAPIEN",
            metric: "Objects",
            ds: "PartNet-Mobility",
            v: "3000+",
            n: "articulated objects"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 311,
        name: "Slot Attention / SAVi",
        cn: "Slot Attention / SAVi",
        desc_cn: "用注意力机制将场景分解为多个slot（每个物体一个slot），实现组合式场景表示。SAVi将Slot Attention嵌入到神经网络中实现视频分解。",
        desc_en: "Decomposes scenes into multiple slots (one per object) via attention mechanism. Enables compositional scene representation. SAVi embeds Slot Attention into neural networks for video decomposition.",
        paper: "Locatello et al., 2020 — Slot Attention — arXiv:2006.15055",
        arxiv: "https://arxiv.org/abs/2006.15055",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          7
        ],
        bench: [],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 312,
        name: "Point NeRF / Neural Lift",
        cn: "Point NeRF / Neural Lift",
        desc_cn: "用点云作为几何先导，结合NeRF实现高效率重建。Point NeRF从COLMAP点云出发，Neural Lift从单个图像用L Segments重建带纹理mesh。",
        desc_en: "Uses point cloud as geometric prior combined with NeRF for efficient reconstruction. Point NeRF starts from COLMAP point clouds. Neural Lift reconstructs textured mesh from single image using L Segments.",
        paper: "Xu et al., 2022 — Point NeRF — CVPR 2022 — arXiv:2201.05013",
        arxiv: "https://arxiv.org/abs/2201.05013",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1,
          2
        ],
        bench: [
          {
            m: "Point NeRF",
            metric: "PSNR",
            ds: "ScanNet",
            v: "31.4 dB",
            n: "vs 28.4 NeRF"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 313,
        name: "MVE / DMVE (World Models)",
        cn: "MVE / DMVE 视频预测世界模型",
        desc_cn: "World model architecture combining video encoder, transition model, and decoder. DMVE是Dreamer系列的新变体，引入multi-view consistency用于多摄像头场景。",
        desc_en: "World model architecture combining video encoder, transition model, and decoder. DMVE is a new Dreamer variant introducing multi-view consistency for multi-camera scenarios.",
        paper: "Babaeizadeh et al., 2017 — MVE — arXiv:1710.11248; 2023 — DMVE",
        arxiv: "https://arxiv.org/abs/1710.11248",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3,
          4
        ],
        bench: [
          {
            m: "DreamerV3 + MVE",
            metric: "Imag. Reward",
            ds: "DMC",
            v: "985",
            n: "normalized"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 314,
        name: "Isaac Sim / Omniverse",
        cn: "Isaac Sim / Omniverse 仿真平台",
        desc_cn: "NVIDIA的RTX物理仿真平台，支持高保真刚体、流体、柔体仿真。Omniverse是协作式USD（Universal Scene Description）平台，支持多人实时协同仿真。",
        desc_en: "NVIDIA's RTX physics simulation platform. High-fidelity rigid body, fluid, and soft body simulation. Omniverse is a collaborative USD platform supporting multi-user real-time co-simulation.",
        paper: "Mittal et al., 2023 — Isaac Sim — NVIDIA",
        arxiv:"https://arxiv.org/abs/2302.07413",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          5
        ],
        bench: [
          {
            m: "Isaac Sim",
            metric: "Physics Fidelity",
            ds: "RTX 3090",
            v: "Real-time",
            n: "100x faster than CPU"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 315,
        name: "Diverse-JEPA / I-JEPA",
        cn: "Diverse-JEPA / I-JEPA 自监督WM",
        desc_cn: "Meta的自监督世界模型。Diverse-JEPA在抽象表征空间中预测未来，I-JEPA使用Masked Autoencoder学习视觉表示用于视频预测。",
        desc_en: "Meta's self-supervised world models. Diverse-JEPA predicts futures in abstract representation space. I-JEPA uses masked autoencoder to learn visual representations for video prediction.",
        paper: "Bardes et al., 2024 — I-JEPA — ICML 2024 — arXiv:2401.09844",
        arxiv: "https://arxiv.org/abs/2401.09844",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          6,
          7
        ],
        bench: [
          {
            m: "I-JEPA",
            metric: "ImageNet",
            ds: "ViT-B",
            v: "77.9%",
            n: "linear probing"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          },
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          }
        ]
      },
      {
        id: 316,
        name: "UniSim (Unified Simulation)",
        cn: "UniSim 统一仿真平台",
        desc_cn: "Berkeley的自动驾驶数据生成平台，用VLM+Diffusion统一仿真传感器数据（图像、LiDAR、雷达）和控制信号。实现数据饥渴系统的无限数据生成。",
        desc_en: "Berkeley's autonomous driving data generation platform. Uses VLM+Diffusion to unify sensor data (image, LiDAR, radar) and control signals. Enables infinite data generation for data-hungry systems.",
        paper: "Yang et al., 2024 — UniSim — arXiv:2404.14484",
        arxiv: "https://arxiv.org/abs/2404.14484",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          5,
          3
        ],
        bench: [
          {
            m: "UniSim",
            metric: "FID",
            ds: "NuPlan",
            v: "9.3",
            n: "video-only vs real"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 317,
        name: "Plenoxels (Tabable Radiance Fields)",
        cn: "Plenoxels 可学习辐射场",
        desc_cn: "用球谐函数（spherical harmonics）替代NeRF的MLP，完全可微的体素渲染实现无MLP的新视角合成。训练速度比NeRF快~100倍。",
        desc_en: "Replaces NeRF's MLP with spherical harmonics. Fully differentiable voxel rendering for MLP-free novel view synthesis. ~100x faster training than NeRF.",
        paper: "Yu et al., 2022 — Plenoxels — CVPR 2022 — arXiv:2112.05131",
        arxiv: "https://arxiv.org/abs/2112.05131",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          1
        ],
        bench: [
          {
            m: "Plenoxels",
            metric: "Training Speed",
            ds: "Blender",
            v: "100x NeRF",
            n: "without MLP"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 318,
        name: "K-Planes (4D Radiance Fields)",
        cn: "K-Planes 4D辐射场",
        desc_cn: "用4D平面（xy, xz, yz, xt, yt, zt）分解表示动态场景。每个平面存储proposal梯度场，体积渲染时分层计算实现动态NeRF。",
        desc_en: "Uses 4D planes (xy, xz, yz, xt, yt, zt) to decompose dynamic scenes. Each plane stores proposal gradient fields; volume rendering computes layers for dynamic NeRF.",
        paper: "Fridovich-Keil et al., 2023 — K-Planes — arXiv:2211.11625",
        arxiv: "https://arxiv.org/abs/2211.11625",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1
        ],
        bench: [
          {
            m: "K-Planes",
            metric: "PSNR",
            ds: "D-NeRF",
            v: "31.2 dB",
            n: "dynamic scenes"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          }
        ]
      },
      {
        id: 319,
        name: "Gaussiansh (3DGS with Sh)",
        cn: "3DGS 球谐函数版",
        desc_cn: "在3DGS每个高斯基元上附加球谐函数表示视角相关颜色（specular效果），替代神经网络实现可微的全局光照效果。",
        desc_en: "Attaches spherical harmonics to each 3DGS Gaussian primitive for view-dependent color (specular effects), replacing neural networks for differentiable global illumination.",
        paper: "Kerbl et al., 2023 — 3DGS — SIGGRAPH 2023 — arXiv:2308.04079",
        arxiv: "https://arxiv.org/abs/2308.04079",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          2
        ],
        bench: [
          {
            m: "3DGS+SH",
            metric: "Render Speed",
            ds: "Real",
            v: ">100 FPS",
            n: "specular surfaces"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 320,
        name: "DreamerV2 / V3",
        cn: "DreamerV2 / V3 世界模型RL",
        desc_cn: "DreamerV2引入KL散度平衡重放和世界模型学习，V3统一了图像/视频/语言/机器人操控的世界模型。V3在Atari和Minecraft上均达到SOTA无需任何任务特定调整。",
        desc_en: "DreamerV2 introduces KL balance between replay and world model learning. V3 unifies image/video/language/robot manipulation world model. V3 achieves SOTA on Atari and Minecraft with zero task-specific tuning.",
        paper: "Hafner et al., 2023 — DreamerV3 — arXiv:2301.04104",
        arxiv: "https://arxiv.org/abs/2301.04104",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          4
        ],
        bench: [
          {
            m: "DreamerV3",
            metric: "Atari57",
            ds: "Human-Norm",
            v: "200%",
            n: "normalized score"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 321,
        name: "MuZero / Muzero with Self-supervised",
        cn: "MuZero 无模型动力学",
        desc_cn: "无需了解环境动力学的情况下学习模型和策略。仅从观测和奖励中端到端学习，在围棋、Atari和Minecraft上达到SOTA。",
        desc_en: "Learns model and policy without knowledge of environment dynamics. End-to-end learning from observations and rewards. Achieves SOTA on Go, Atari and Minecraft.",
        paper: "Schrittwieser et al., 2020 — MuZero — Nature — arXiv:1911.08265",
        arxiv: "https://arxiv.org/abs/1911.08265",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          4
        ],
        bench: [
          {
            m: "MuZero",
            metric: "Atari",
            ds: "57 games",
            v: "1000%+",
            n: "superhuman Atari"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          },
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          }
        ]
      },
      {
        id: 322,
        name: "CURL (Contrastive RL)",
        cn: "CURL 对比强化学习",
        desc_cn: "在MVE中引入对比学习来学习状态表示，使世界模型对视觉变化更鲁棒。DeepMind用于Atari的sample-efficient RL。",
        desc_en: "Introduces contrastive learning in latent world models for robust state representations. DeepMind's sample-efficient RL for Atari.",
        paper: "Srinivas et al., 2020 — CURL — ICML 2020 — arXiv:2004.04136",
        arxiv: "https://arxiv.org/abs/2004.04136",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          4
        ],
        bench: [
          {
            m: "CURL",
            metric: "Sample Efficiency",
            ds: "DeepMind Control",
            v: "10x",
            n: "vs model-free SAC"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 323,
        name: "Video Diffusion Prob. (VDPM)",
        cn: "VDPM 视频扩散概率模型",
        desc_cn: "概率性视频预测模型，不是预测单一未来而是预测未来分布。通过分级潜在变量实现多样性和长时程预测。",
        desc_en: "Probabilistic video prediction model. Instead of predicting single future, predicts distribution of futures. Hierarchical latent variables enable diversity and long-horizon prediction.",
        paper: "Will et al., 2023 — VDPM — ICLR 2023 — arXiv:2210.06280",
        arxiv: "https://arxiv.org/abs/2210.06280",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          3
        ],
        bench: [
          {
            m: "VDPM",
            metric: "FVD",
            ds: "KTH",
            v: "82.1",
            n: "probabilistic futures"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 324,
        name: "Sora / W.A.L.T. (World Model)",
        cn: "Sora / W.A.L.T. 视频生成世界模型",
        desc_cn: "OpenAI的Sora是diffusion transformer-based的世界模型，通过patch-based表示统一图像和视频生成。W.A.L.T.是NVIDIA用类似方法实现的视频生成世界模型。",
        desc_en: "OpenAI's Sora is a diffusion transformer-based world model using patch-based representation to unify image and video generation. W.A.L.T. is NVIDIA's similar video generation world model.",
        paper: "Brooks et al., 2024 — Sora — OpenAI Blog; Sequoia et al., 2024 — W.A.L.T — arXiv:2403.03304",
        arxiv: "https://arxiv.org/abs/2403.03304",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          3
        ],
        bench: [
          {
            m: "Sora",
            metric: "VBench",
            ds: "Video Gen",
            v: "84.8%",
            n: "60-120s video"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 325,
        name: "Habitat (Meta Sim)",
        cn: "Habitat 仿真平台",
        desc_cn: "Meta的具身AI仿真平台，支持Matterport、HAMTI等数据集的3D环境。GPU并行仿真实现~10000 FPS的图像渲染，Agent在虚拟环境中学习导航和操控。",
        desc_en: "Meta's embodied AI simulation platform. Supports 3D environments from Matterport, HAMTI datasets. GPU-parallel rendering achieves ~10000 FPS image rendering. Agents learn navigation and manipulation in virtual environments.",
        paper: "Savva et al., 2019 — Habitat — arXiv:1904.01201",
        arxiv: "https://arxiv.org/abs/1904.01201",
        badge: "🟢",
        diff: "Beginner",
        categories: [
          5
        ],
        bench: [
          {
            m: "Habitat-Sim",
            metric: "FPS",
            ds: "MP3D",
            v: "10000 FPS",
            n: "image rendering"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 326,
        name: "ThreeDWorld (TDW)",
        cn: "TDW 三维物理世界仿真",
        desc_cn: "高保真物理仿真平台，支持刚体、流体、柔体、光照传输的实时物理仿真。基于Unity引擎，用于研究视觉-语言-动作的具身智能。",
        desc_en: "High-fidelity physics simulation platform. Real-time rigid body, fluid, soft body, and light transport simulation. Built on Unity engine. For studying vision-language-action embodied intelligence.",
        paper: "Gan et al., 2020 — ThreeDWorld — arXiv:2007.09654",
        arxiv: "https://arxiv.org/abs/2007.09654",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          5
        ],
        bench: [
          {
            m: "TDW",
            metric: "Physics Fidelity",
            ds: "GPU",
            v: "Real-time",
            n: "multi-object physics"
          }
        ],
        papers: [
          {
            name: "ZeRO",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1910.02054",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2020 — ZeRO (SC 2020)"
          },
          {
            name: "ZeRO-2",
            title: "ZeRO Stage 2: Deep Learning Scaling Training with Efficient Memory Management",
            authors: "Rajbhandari et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2001.04788",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2021 — ZeRO-2 (arXiv 2021)"
          },
          {
            name: "ZeRO-3",
            title: "ZeRO Stage 3: Toward Efficient Memory Management of Trillion Parameter Models",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2201.05320",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-3 (arXiv 2022)"
          },
          {
            name: "FSDP",
            title: "Fully Sharded Data Parallel: Faster AI Training with Fewer GPUs",
            authors: "Zhao et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.11277",
            github: "https://github.com/pytorch/pytorch",
            huggingface: "",
            bibtex: "Zhao et al., 2023 — FSDP (PyTorch Dev Blog 2023)"
          },
          {
            name: "Gradient Checkpointing",
            title: "Training Deep Nets with Sublinear Memory Cost",
            authors: "Chen et al.",
            year: "2016",
            arxiv: "https://arxiv.org/abs/1604.06174",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "Chen et al., 2016 — Gradient Checkpointing (arXiv 2016)"
          }
        ]
      },
      {
        id: 327,
        name: "Semantic Nerf / SceneDict",
        cn: "Semantic NeRF 语义辐射场",
        desc_cn: "在NeRF中引入语义分割，每个3D点同时回归密度、颜色和语义标签。实现新视角合成+语义分割的联合学习，支持开放词汇分割。",
        desc_en: "Introduces semantic segmentation into NeRF. Each 3D point regresses density, color, and semantic labels simultaneously. Jointly learns novel view synthesis + semantic segmentation. Supports open-vocabulary segmentation.",
        paper: "Zhi et al., 2021 — Semantic NeRF — arXiv:2103.14050",
        arxiv: "https://arxiv.org/abs/2103.14050",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          1,
          7
        ],
        bench: [
          {
            m: "Semantic NeRF",
            metric: "mIoU",
            ds: "ScanNet",
            v: "58.1%",
            n: "3D semantic segmentation"
          }
        ],
        papers: [
          {
            name: "FlashAttention",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            authors: "Dao et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.14135",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one#flashattention-2",
            bibtex: "Dao et al., 2022 — FlashAttention (NeurIPS 2022)"
          },
          {
            name: "FlashAttention-2",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work partitioning",
            authors: "Dao",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.08691",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2023 — FlashAttention-2 (ICLR 2024)"
          },
          {
            name: "FlashAttention-3",
            title: "FlashAttention-3: Fast and Accurate Attention via Datatype and Algorithm Optimization",
            authors: "Dao",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2407.21783",
            github: "https://github.com/HazyResearch/flash-attention",
            huggingface: "",
            bibtex: "Dao, 2024 — FlashAttention-3 (arXiv 2024)"
          },
          {
            name: "Ring Attention",
            title: "Ring Attention: Distributed Attention with O(N) Communication Overhead",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2304.05171",
            github: "https://github.com/liaochong/custom_ring_attention",
            huggingface: "",
            bibtex: "Liu et al., 2023 — Ring Attention (ICML 2023)"
          },
          {
            name: "GQA",
            title: "GQA: Generalizing Question Answering over Knowledge Graphs",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.13245",
            github: "https://github.com/stanford-futuredata/StackMix-NER",
            huggingface: "",
            bibtex: "Liu et al., 2023 — GQA (ACL 2023)"
          },
          {
            name: "MQA",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "https://github.com/tensorflow/tensor2tensor",
            huggingface: "",
            bibtex: "Shazeer, 2019 — MQA (arXiv 2019)"
          },
          {
            name: "Multi-Query Attention",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            authors: "Shazeer",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.02150",
            github: "",
            huggingface: "",
            bibtex: "Shazeer, 2019 — Multi-Query Attention (arXiv 2019)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "RLHF",
            title: "Learning to summarize from human feedback",
            authors: "Stiennon et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.01325",
            github: "https://github.com/openai/CLIP",
            huggingface: "",
            bibtex: "Stiennon et al., 2020 — RLHF (NeurIPS 2020)"
          },
          {
            name: "DPO",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            authors: "Rafailov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.18290",
            github: "https://github.com/eric-mitchell/direct-preference-optimization",
            huggingface: "",
            bibtex: "Rafailov et al., 2023 — DPO (NeurIPS 2023)"
          },
          {
            name: "Constitutional AI",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            authors: "Bai et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2212.08073",
            github: "",
            huggingface: "",
            bibtex: "Bai et al., 2022 — Constitutional AI (Anthropic 2022)"
          },
          {
            name: "RLAIF",
            title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
            authors: "Lee et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.00267",
            github: "",
            huggingface: "",
            bibtex: "Lee et al., 2023 — RLAIF (arXiv 2023)"
          }
        ]
      },
      {
        id: 328,
        name: "Genie (Google Latent Action)",
        cn: "Genie 潜在动作视频生成",
        desc_cn: "Google的视频生成世界模型，可以从视频中无监督地学习潜在动作（latent actions）。给定视频帧+动作token即可预测下一帧，实现无监督的视觉控制。",
        desc_en: "Google's video generation world model. Unsupervised latent actions from video. Given video frame + action token predicts next frame. Enables unsupervised visual control.",
        paper: "Bruce et al., 2024 — Genie — arXiv:2401.15077",
        arxiv: "https://arxiv.org/abs/2401.15077",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          3,
          6
        ],
        bench: [
          {
            m: "Genie-1",
            metric: "Action Consistency",
            ds: "100K video",
            v: "85%",
            n: "unsupervised actions"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "Prodigy",
            title: "Prodigy: Improving LLM Scaling Capabilities with Adaptive Learning Rates",
            authors: "Diot et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2410.06217",
            github: "https://github.com/KellerJordan/Prodigy",
            huggingface: "",
            bibtex: "Diot et al., 2024 — Prodigy (NeurIPS 2024)"
          },
          {
            name: "LAMB Optimizer",
            title: "LAMB: Large Batch Training for Deep Learning",
            authors: "You et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.00962",
            github: "https://github.com/cybertronai/gradient-checkpointing",
            huggingface: "",
            bibtex: "You et al., 2019 — LAMB (NeurIPS 2019)"
          },
          {
            name: "Wanda",
            title: "Wanda: A Simple Pruning Method for Large Language Models",
            authors: "Sun et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.09627",
            github: "https://github.com/poetamaut/Wanda",
            huggingface: "",
            bibtex: "Sun et al., 2024 — Wanda (ICML 2024)"
          },
          {
            name: "SparseGPT",
            title: "SparseGPT: One-Shot Pruning-Scaling Language Models with GPTQ",
            authors: "Frantar & Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07477",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          }
        ]
      },
      {
        id: 329,
        name: "MVE2 / World Model Ensemble",
        cn: "MVE2 世界模型集成",
        desc_cn: "World model ensemble方法，多个不同的世界模型集成预测未来，置信度高的模型主导预测。在DMC和Atari上提升~15%表现。",
        desc_en: "World model ensemble. Multiple diverse world models predict futures; confident model dominates prediction. Improves ~15% on DMC and Atari.",
        paper: "Zhang et al., 2023 — MVE2 — arXiv:2306.09379",
        arxiv: "https://arxiv.org/abs/2306.09379",
        badge: "🟡",
        diff: "Intermediate",
        categories: [
          4
        ],
        bench: [
          {
            m: "MVE2 Ensemble",
            metric: "DMC Normalized",
            ds: "15 tasks",
            v: "+15%",
            n: "vs single world model"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LoRA",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            authors: "Hu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2106.09685",
            github: "https://github.com/microsoft/LoRA",
            huggingface: "https://huggingface.co/models?search=lora",
            bibtex: "Hu et al., 2021 — LoRA (ICLR 2022)"
          },
          {
            name: "Adapter",
            title: "Parameter-Efficient Transfer Learning for NLP",
            authors: "Houlsby et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1902.00751",
            github: "https://github.com/google-research/adapter-bert",
            huggingface: "",
            bibtex: "Houlsby et al., 2019 — Adapter (ICML 2019)"
          },
          {
            name: "Prefix Tuning",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            authors: "Li & Liang",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2101.00190",
            github: "https://github.com/XiangLi1999/PrefixTuning",
            huggingface: "",
            bibtex: "Li & Liang, 2021 — Prefix Tuning (ACL 2021)"
          },
          {
            name: "P-Tuning v2",
            title: "P-Tuning v2: Prompt Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 330,
        name: "MeshGPT / GaussianManager",
        cn: "MeshGPT / GaussianManager",
        desc_cn: "MeshGPT用Transformer生成三角形网格替代NeRF/3DGS，实现真正的mesh表示。GaussianManager统一管理多尺度/多实例的3DGS，支持场景级别的实时编辑和导航。",
        desc_en: "MeshGPT uses Transformer to generate triangle meshes instead of NeRF/3DGS, achieving true mesh representation. GaussianManager unifies multi-scale/multi-instance 3DGS for real-time scene-level editing and navigation.",
        paper: "Siddiqui et al., 2023 — MeshGPT — arXiv:2309.15139",
        arxiv: "https://arxiv.org/abs/2309.15139",
        badge: "🔴",
        diff: "Advanced",
        categories: [
          2
        ],
        bench: [
          {
            m: "MeshGPT",
            metric: "FID-3D",
            ds: "ShapeNet",
            v: "28.3",
            n: "triangle mesh gen"
          }
        ],
        papers: [
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          },
          {
            name: "LLaMA-2",
            title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2307.09288",
            github: "https://github.com/meta-llama/llama",
            huggingface: "https://huggingface.co/meta-llama",
            bibtex: "Touvron et al., 2023 — LLaMA 2 (Meta AI)"
          },
          {
            name: "Mistral",
            title: "Mistral 7B",
            authors: "Jiang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.06825",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai",
            bibtex: "Jiang et al., 2023 — Mistral 7B (arXiv 2023)"
          },
          {
            name: "Mixtral",
            title: "Mixtral of Experts",
            authors: "Jiang et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2401.04088",
            github: "https://github.com/mistralai/mistral-src",
            huggingface: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
            bibtex: "Jiang et al., 2024 — Mixtral (arXiv 2024)"
          },
          {
            name: "GPTQ",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            authors: "Frantar et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2210.17323",
            github: "https://github.com/IST-DASLab/GPTQ",
            huggingface: "",
            bibtex: "Frantar et al., 2022 — GPTQ (NeurIPS 2022)"
          },
          {
            name: "AWQ",
            title: "AWQ: Activation-Aware Weight Quantization for LLM Compression and Acceleration",
            authors: "Lin et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.00978",
            github: "https://github.com/mit-han-lab/llm-awq",
            huggingface: "",
            bibtex: "Lin et al., 2024 — AWQ (MLSys 2024)"
          },
          {
            name: "SpQR",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2308.07633",
            github: "https://github.com/spqr/spqr",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — SpQR (ICML 2023)"
          },
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "https://huggingface.co/models?search=qlora",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "LLM.int8",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            authors: "Dettmers et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2208.07339",
            github: "https://github.com/TimDettmers/bitsandbytes",
            huggingface: "",
            bibtex: "Dettmers et al., 2022 — LLM.int8() (NeurIPS 2022)"
          },
          {
            name: "BitNet",
            title: "BitNet: Scaling 1-bit Large Language Models",
            authors: "Wang et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2310.11453",
            github: "https://github.com/kyegol/BitNet",
            huggingface: "",
            bibtex: "Wang et al., 2023 — BitNet (NeurIPS 2023)"
          }
        ]
      },
      {
        id: 331,
        name: "Sparse Attention",
        cn: "稀疏注意力",
        desc_cn: "通过固定或动态稀疏模式减少attention的O(N²)计算量。代表方法包括Sparse Transformer的局部窗口+跨注意力模式、Longformer的dilated滑动窗口以及BM25等稀疏检索机制。硬件感知稀疏可针对GPU TensorCore特性调度非零模式。",
        desc_en: "Reduces attention's O(N²) cost via fixed or dynamic sparse patterns. Includes Sparse Transformer local+strided patterns, Longformer dilated windows, and BM25-style sparse retrieval. Hardware-aware variants exploit GPU TensorCore non-zero layouts.",
        paper: "Child et al., 2019 — Sparse Transformers — arXiv:1904.10509 / Beltagy et al., 2020 — Longformer — arXiv:2004.05150",
        arxiv: "https://arxiv.org/abs/1904.10509",
        badge: "🟡",
        diff: "Intermediate",
        categories: [1, 9],
        bench: [
          {
            m: "Sparse Transformer",
            metric: "Complexity",
            ds: "16K seq",
            v: "O(n√n)",
            n: "vs O(n²) full attention"
          }
        ],
        papers: [
          {
            name: "Sparse Transformer",
            title: "Generating Long Sequences with Sparse Transformers",
            authors: "Child, Gray, etc.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1904.10509",
            github: "",
            huggingface: "",
            bibtex: "Child et al., 2019 — Sparse Transformers (arXiv 2019)"
          },
          {
            name: "Longformer",
            title: "Longformer: The Long-Document Transformer",
            authors: "Beltagy, Peters, etc.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2004.05150",
            github: "https://github.com/allenai/longformer",
            huggingface: "",
            bibtex: "Beltagy et al., 2020 — Longformer (arXiv 2020)"
          }
        ]
      },
      {
        id: 332,
        name: "Kernel Methods",
        cn: "核方法",
        desc_cn: "用核函数近似softmax attention，将O(N²)降到O(N·d)，常用Random Feature方法实现。Performer使用正交随机特征(ORF)保证无偏估计；Linformer/Synthesizer等进一步引入低秩投影。核方法精度通常略低于exact attention，但可解释性强。",
        desc_en: "Approximates softmax attention via kernel functions, reducing O(N²) to O(N·d) using Random Feature methods. Performers use Orthogonal Random Features (ORF) for unbiased estimation; Linformer/Synthesizer add low-rank projections. Typically slightly lower accuracy than exact attention but more interpretable.",
        paper: "Choromanski et al., 2020 — Rethinking Attention with Performers — arXiv:2009.14794",
        arxiv: "https://arxiv.org/abs/2009.14794",
        badge: "🟡",
        diff: "Advanced",
        categories: [1, 9],
        bench: [
          {
            m: "Performer",
            metric: "Protein",
            ds: "2K seq",
            v: "67.9%",
            n: "Pfam"
          }
        ],
        papers: [
          {
            name: "Performer",
            title: "Rethinking Attention with Performers",
            authors: "Choromanski, Likhosherstov, etc.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.14794",
            github: "https://github.com/google-research/google-research/tree/master/performer",
            huggingface: "",
            bibtex: "Choromanski et al., 2020 — Performer (ICLR 2021)"
          },
          {
            name: "Linformer",
            title: "Linformer: Self-Attention with Linear Complexity",
            authors: "Wang et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2006.04768",
            github: "",
            huggingface: "",
            bibtex: "Wang et al., 2020 — Linformer (arXiv 2020)"
          },
          {
            name: "Synthesizer",
            title: "Synthesizer: Rethinking Self-Attention in Transformer Models",
            authors: "Tay et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2005.00743",
            github: "",
            huggingface: "",
            bibtex: "Tay et al., 2020 — Synthesizer (ICLR 2021)"
          }
        ]
      },
      {
        id: 333,
        name: "NF4/INT4",
        cn: "NF4/INT4量化",
        desc_cn: "NormalFloat4 (NF4) 是一种专为神经网络权重设计的4位数据类型，通过构造0均值均匀分布的分位点实现最优量化。QLoRA结合NF4与LoRA微调，在INT4量化下微调大模型，精度接近全精度而显存减少4倍。INT4是最常用的推理量化精度。",
        desc_en: "NormalFloat4 (NF4) is a 4-bit datatype designed for neural network weights using quantile-based quantization. QLoRA combines NF4 with LoRA fine-tuning to finetune large models in INT4 with near-full-precision quality at 4× memory reduction. INT4 is the most common inference quantization precision.",
        paper: "Dettmers et al., 2023 — QLoRA — arXiv:2305.14314 / Tim Dettmers, 2024 — NF4",
        arxiv: "https://arxiv.org/abs/2305.14314",
        badge: "🟢",
        diff: "Intermediate",
        categories: [2, 4],
        bench: [
          {
            m: "QLoRA 65B",
            metric: "MMLU",
            ds: "65B",
            v: "63.9%",
            n: "vs 64.1% full precision"
          }
        ],
        papers: [
          {
            name: "QLoRA",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            authors: "Dettmers, Zellers, etc.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.14314",
            github: "https://github.com/artidoro/qlora",
            huggingface: "",
            bibtex: "Dettmers et al., 2023 — QLoRA (NeurIPS 2023)"
          },
          {
            name: "NF4",
            title: "The BitNet b1.58 Architecture",
            authors: "Liu et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2402.17764",
            github: "https://github.com/microsoft/BitNet",
            huggingface: "",
            bibtex: "Liu et al., 2024 — BitNet b1.58 (arXiv 2024)"
          }
        ]
      },
      {
        id: 334,
        name: "QAT",
        cn: "量化感知训练",
        desc_cn: "Quantization-Aware Training在训练过程中模拟量化效应，使模型适应低精度权重和激活。LLM-QAT通过保留权重分布的直方图信息比传统方法更好地处理LLM；QAT通常比PTQ精度更高但训练成本更大。",
        desc_en: "Quantization-Aware Training simulates quantization effects during training so models adapt to low-precision weights and activations. LLM-QAT preserves weight distribution histogram information, better handling LLMs than traditional methods. QAT typically outperforms PTQ but has higher training cost.",
        paper: "Liu et al., 2023 — LLM-QAT — arXiv:2305.17888",
        arxiv: "https://arxiv.org/abs/2305.17888",
        badge: "🟡",
        diff: "Advanced",
        categories: [2],
        bench: [
          {
            m: "LLM-QAT 7B",
            metric: "WikiText",
            ds: "7B",
            v: "2.41 PPL",
            n: "4-bit"
          }
        ],
        papers: [
          {
            name: "LLM-QAT",
            title: "LLM-QAT: LLM Quantization-Aware Training with Round and Round",
            authors: "Liu et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2305.17888",
            github: "",
            huggingface: "",
            bibtex: "Liu et al., 2023 — LLM-QAT (arXiv 2023)"
          }
        ]
      },
      {
        id: 335,
        name: "ZeroQuant",
        cn: "ZeroQuant",
        desc_cn: "ZeroQuant (NeurIPS 2022) 提出逐层知识蒸馏和轻量级分组量化消除PTQ的跨令牌依赖问题，在BERT和GPT-2上实现INT8量化精度无损。解决了量化中token间依赖导致精度下降的核心问题。",
        desc_en: "ZeroQuant (NeurIPS 2022) introduces layer-wise knowledge distillation and lightweight group-wise quantization to eliminate cross-token dependencies in PTQ, achieving lossless INT8 quantization on BERT and GPT-2. Solves the core issue of token-wise dependency causing accuracy degradation in quantization.",
        paper: "Yao et al., 2022 — ZeroQuant — NeurIPS 2022 — arXiv:2206.05158",
        arxiv: "https://arxiv.org/abs/2206.05158",
        badge: "🟡",
        diff: "Intermediate",
        categories: [2],
        bench: [
          {
            m: "ZeroQuant BERT",
            metric: "SST-2",
            ds: "BERT",
            v: "93.4%",
            n: "INT8 vs FP32"
          }
        ],
        papers: [
          {
            name: "ZeroQuant",
            title: "ZeroQuant: Efficient and Affordable Low-Precision Quantization for Large-Scale Language Models",
            authors: "Yao, Dong, etc.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2206.05158",
            github: "",
            huggingface: "",
            bibtex: "Yao et al., 2022 — ZeroQuant (NeurIPS 2022)"
          }
        ]
      },
      {
        id: 336,
        name: "Knowledge Distillation",
        cn: "知识蒸馏",
        desc_cn: "知识蒸馏用大模型(Teacher)指导小模型(Student)学习，包含logits蒸馏、特征蒸馏和行为蒸馏等方法。MiniLLM用反向KL散度解决LLM蒸馏的teacher forcing问题；GKD在self-distillation框架下引入generative self-distillation。",
        desc_en: "Knowledge Distillation uses large models (Teacher) to guide small models (Student) learning, including logits, feature, and behavior distillation. MiniLLM uses reverse KL divergence to solve teacher forcing issues in LLM distillation; GKD introduces generative self-distillation in self-distillation frameworks.",
        paper: "Gu et al., 2024 — MiniLLM — arXiv:2306.14744 / Agarwal et al., 2024 — GKD — arXiv:2310.15223",
        arxiv: "https://arxiv.org/abs/2306.14744",
        badge: "🟡",
        diff: "Intermediate",
        categories: [3],
        bench: [
          {
            m: "MiniLLM 7B",
            metric: "MT-Bench",
            ds: "7B→3B",
            v: "6.2",
            n: "vs 7.8 teacher"
          }
        ],
        papers: [
          {
            name: "MiniLLM",
            title: "MiniLLM: Knowledge Distillation of Large Language Models",
            authors: "Gu, Dong, etc.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2306.14744",
            github: "https://github.com/microsoft/LMOps",
            huggingface: "",
            bibtex: "Gu et al., 2024 — MiniLLM (ICLR 2024)"
          },
          {
            name: "GKD",
            title: "GKD: Generative Knowledge Distillation",
            authors: "Agarwal et al.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2310.15223",
            github: "",
            huggingface: "",
            bibtex: "Agarwal et al., 2024 — GKD (ICLR 2024)"
          }
        ]
      },
      {
        id: 337,
        name: "Pruning",
        cn: "结构化剪枝",
        desc_cn: "LLM剪枝通过移除不重要的权重或注意力头来压缩模型。代表方法包括SparseGPT（OBS最优脑贝尔剪切）、 Wanda（依据权重与激活的乘积进行结构化剪枝）。结构化剪枝可以保持模型结构不变而直接加速推理。",
        desc_en: "LLM Pruning removes unimportant weights or attention heads to compress models. Notable methods include SparseGPT (OBS optimal brain surgeon) and Wanda (prunes by weight × activation product). Structured pruning preserves model architecture for direct inference acceleration.",
        paper: "Frantar et al., 2023 — SparseGPT — arXiv:2302.07413 / Sun et al., 2023 — Wanda — arXiv:2306.11695",
        arxiv: "https://arxiv.org/abs/2302.07413",
        badge: "🟡",
        diff: "Advanced",
        categories: [3],
        bench: [
          {
            m: "SparseGPT 66B",
            metric: "C4 PPL",
            ds: "66B",
            v: "8.67",
            n: "50% sparsity"
          }
        ],
        papers: [
          {
            name: "SparseGPT",
            title: "SparseGPT: Massive Language Models Can Be Accurately Pruned in One Hour",
            authors: "Frantar, Alistarh",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.07413",
            github: "https://github.com/IST-DASLab/SparseGPT",
            huggingface: "",
            bibtex: "Frantar & Alistarh, 2023 — SparseGPT (ICML 2023)"
          },
          {
            name: "Wanda",
            title: "Wanda: Pruning LLMs by Weights and Activations",
            authors: "Sun et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.11695",
            github: "",
            huggingface: "",
            bibtex: "Sun et al., 2023 — Wanda (ICML 2023)"
          }
        ]
      },
      {
        id: 338,
        name: "LTH",
        cn: "彩票假说",
        desc_cn: "Lottery Ticket Hypothesis (LTH) 指出随机初始化的密集网络中存在可独立训练的匹配子网络（彩票）。对于LLM，LTH研究表明：早期停止的训练迭代中往往存在高性能的稀疏子网络，可在进一步剪枝后复现完整训练效果。",
        desc_en: "The Lottery Ticket Hypothesis states that a randomly initialized dense network contains a matching subnetwork that can be trained independently to achieve comparable performance (winning ticket). For LLMs, LTH research shows high-performing sparse subnetworks often exist in early-stopped training iterations, reproducible after pruning.",
        paper: "Frankle & Carbin, 2019 — LTH — ICLR 2019 / Zhou et al., 2019 — Deconstructing LTH",
        arxiv: "https://arxiv.org/abs/1806.07933",
        badge: "🟡",
        diff: "Advanced",
        categories: [3],
        bench: [
          {
            m: "LTH BERT",
            metric: "SST-2",
            ds: "BERT",
            v: "91.5%",
            n: "sparse subnet"
          }
        ],
        papers: [
          {
            name: "LTH",
            title: "The Lottery Ticket Hypothesis: Finding Small, Trainable Neural Networks",
            authors: "Frankle, Carbin",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1806.07933",
            github: "",
            huggingface: "",
            bibtex: "Frankle & Carbin, 2019 — LTH (ICLR 2019)"
          },
          {
            name: "Deconstructing LTH",
            title: "Deconstructing Lottery Tickets and Zeroshot Tasks",
            authors: "Zhou et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1906.08147",
            github: "",
            huggingface: "",
            bibtex: "Zhou et al., 2019 — Deconstructing LTH (arXiv 2019)"
          }
        ]
      },
      {
        id: 339,
        name: "Weight Sharing",
        cn: "权重共享",
        desc_cn: "权重共享让同一组权重在模型不同位置复用，显著减少参数量。Universal Transformer在横跨所有层共享权重；ALBERT通过跨层共享Embedding进一步减少参数。权重共享是Compact Language Models的核心手段。",
        desc_en: "Weight Sharing reuses the same weights across different positions in the model, significantly reducing parameter count. Universal Transformers share weights across all layers; ALBERT further reduces parameters via cross-layer embedding sharing. Weight sharing is a core technique for Compact Language Models.",
        paper: "Dehghani et al., 2019 — Universal Transformers — arXiv:1807.03819 / Lan et al., 2020 — ALBERT — arXiv:1909.11942",
        arxiv: "https://arxiv.org/abs/1807.03819",
        badge: "🟢",
        diff: "Easy",
        categories: [3],
        bench: [
          {
            m: "ALBERT-xxlarge",
            metric: "Params",
            ds: "12-layer",
            v: "12M",
            n: "vs 334M ALBERT-base"
          }
        ],
        papers: [
          {
            name: "Universal Transformer",
            title: "Universal Transformers",
            authors: "Dehghani et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1807.03819",
            github: "",
            huggingface: "",
            bibtex: "Dehghani et al., 2019 — Universal Transformer (ICLR 2019)"
          },
          {
            name: "ALBERT",
            title: "ALBERT: A Lite BERT for Self-supervised Learning of Language Representations",
            authors: "Lan et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/1909.11942",
            github: "https://github.com/google-research/ALBERT",
            huggingface: "",
            bibtex: "Lan et al., 2020 — ALBERT (ICLR 2020)"
          }
        ]
      },
      {
        id: 340,
        name: "P-Tuning",
        cn: "P-Tuning v2",
        desc_cn: "P-Tuning v2是一种深度提示调优方法，将可学习的软提示前缀添加到Transformer每层的输入，相比早期P-Tuning在NLU任务上可与微调媲美。提示前缀通过MLP参数化，支持连续token嵌入。参数效率高，仅需微调0.1%~3%的参数。",
        desc_en: "P-Tuning v2 is a deep prompt tuning method that adds learnable soft prompt prefixes to each Transformer layer's input, achieving comparable performance to fine-tuning on NLU tasks. Prompt prefixes are parameterized via MLP, supporting continuous token embeddings. Highly parameter-efficient, requiring only 0.1%~3% parameters to finetune.",
        paper: "Liu et al., 2021 — P-Tuning v2 — arXiv:2110.07602",
        arxiv: "https://arxiv.org/abs/2110.07602",
        badge: "🟢",
        diff: "Easy",
        categories: [4],
        bench: [
          {
            m: "P-Tuning v2 GLUE",
            metric: "Avg",
            ds: "BERT-base",
            v: "83.2%",
            n: "vs 84.3% finetune"
          }
        ],
        papers: [
          {
            name: "P-Tuning v2",
            title: "P-Tuning Can Be Comparable to Fine-tuning Universally",
            authors: "Liu et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2110.07602",
            github: "https://github.com/THUDM/P-tuning-v2",
            huggingface: "",
            bibtex: "Liu et al., 2021 — P-Tuning v2 (arXiv 2021)"
          }
        ]
      },
      {
        id: 341,
        name: "IA³",
        cn: "IA³",
        desc_cn: "Infused Adapter by Inhibiting and Amplifying Inner Activations (IA³) 通过逐元素缩放激活来增强模型：学习与Key和Value申量相乘的可学习向量，以及与隐藏状态相乘的向量。IA³比LoRA参数更少，在T5和BART等encoder-decoder模型上表现优异。",
        desc_en: "Infused Adapter by Inhibiting and Amplifying Inner Activations (IA³) enhances models via element-wise activation scaling: learnable vectors multiplied with Key/Value tensors and hidden states. IA³ has fewer parameters than LoRA, performing well on encoder-decoder models like T5 and BART.",
        paper: "Liu et al., 2022 — IA³ — arXiv:2205.05625",
        arxiv: "https://arxiv.org/abs/2205.05625",
        badge: "🟢",
        diff: "Easy",
        categories: [4],
        bench: [
          {
            m: "IA³ T5",
            metric: "SST-2",
            ds: "T5-base",
            v: "95.1%",
            n: "vs 95.3% finetune"
          }
        ],
        papers: [
          {
            name: "IA³",
            title: "Few-Shot Parameter-Efficient Fine-tuning is Worse and Better than In-Context Learning",
            authors: "Liu et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.05625",
            github: "",
            huggingface: "",
            bibtex: "Liu et al., 2022 — IA³ (arXiv 2022)"
          }
        ]
      },
      {
        id: 342,
        name: "CPU/NVMe Offload",
        cn: "CPU/NVMe卸载",
        desc_cn: "通过将部分模型权重或梯度卸载到CPU内存或NVMe存储解决GPU显存不足的问题。DeepSpeed ZeRO-Infinity结合卸载与分片；Petals通过P2P网络在多个客户端设备上协作运行超大模型。卸载策略对网络带宽要求高。",
        desc_en: "Offloads parts of model weights or gradients to CPU memory or NVMe storage to solve GPU memory insufficiency. DeepSpeed ZeRO-Infinity combines offloading with sharding; Petals enables collaborative超大模型 inference over P2P network across multiple client devices. Offloading strategies have high network bandwidth requirements.",
        paper: "Rajbhandari et al., 2022 — ZeRO-Infinity — arXiv:2204.05711 / Borzunov et al., 2023 — Petals — arXiv:2309.02438",
        arxiv: "https://arxiv.org/abs/2204.05711",
        badge: "🟡",
        diff: "Intermediate",
        categories: [5],
        bench: [
          {
            m: "ZeRO-Infinity 1T",
            metric: "Throughput",
            ds: "1T params",
            v: "40 TFLOPS",
            n: "A100 80GB × 16"
          }
        ],
        papers: [
          {
            name: "ZeRO-Infinity",
            title: "ZeRO-Infinity: Breaking the GPU Memory Wall",
            authors: "Rajbhandari et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2204.05711",
            github: "https://github.com/microsoft/DeepSpeed",
            huggingface: "",
            bibtex: "Rajbhandari et al., 2022 — ZeRO-Infinity (arXiv 2022)"
          },
          {
            name: "Petals",
            title: "Petals: Collaborative Inference of Large Language Models over the Internet",
            authors: "Borzunov et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.02438",
            github: "https://github.com/bigscience-workshop/petals",
            huggingface: "",
            bibtex: "Borzunov et al., 2023 — Petals (arXiv 2023)"
          }
        ]
      },
      {
        id: 343,
        name: "Warmup/Cosine LR",
        cn: "学习率预热与余弦衰减",
        desc_cn: "学习率预热（Warmup）在训练初期逐渐增大学习率以稳定梯度估计，余弦衰减（Cosine LR）在训练后期平滑降低学习率。GPT-3、T5等大模型训练均采用此组合。Cosine with Warm Restarts可在周期性训练中使用。",
        desc_en: "Learning rate warmup gradually increases LR during early training to stabilize gradient estimation; cosine decay smoothly reduces LR in late training. This combination is used in GPT-3, T5, and other large model training. Cosine with warm restarts applies to cyclical training.",
        paper: "Devlin et al., 2019 — BERT — arXiv:1810.04805 / Loshchilov & Hutter, 2017 — SGDR — arXiv:1608.03983",
        arxiv: "https://arxiv.org/abs/1608.03983",
        badge: "🟢",
        diff: "Easy",
        categories: [6],
        bench: [
          {
            m: "Cosine LR",
            metric: "SST-2",
            ds: "BERT",
            v: "93.5%",
            n: "vs constant LR 91.8%"
          }
        ],
        papers: [
          {
            name: "SGDR",
            title: "SGDR: Stochastic Gradient Descent with Warm Restarts",
            authors: "Loshchilov, Hutter",
            year: "2017",
            arxiv: "https://arxiv.org/abs/1608.03983",
            github: "",
            huggingface: "",
            bibtex: "Loshchilov & Hutter, 2017 — SGDR (ICLR 2017)"
          },
          {
            name: "BERT",
            title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
            authors: "Devlin et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1810.04805",
            github: "https://github.com/google-research/bert",
            huggingface: "",
            bibtex: "Devlin et al., 2019 — BERT (NAACL 2019)"
          }
        ]
      },
      {
        id: 344,
        name: "AdamW",
        cn: "AdamW优化器",
        desc_cn: "AdamW是Adam优化器的权重衰减变体，将权重衰减从正则化项中解耦出来，实现了真正的L2正则化效果，解决了Adam中权重衰减与梯度更新耦合导致的大模型训练不稳定问题。PyTorch和TensorFlow均已内置AdamW。",
        desc_en: "AdamW is a weight decay variant of Adam that decouples weight decay from the regularization term, achieving true L2 regularization effect and solving training instability issues in large models caused by coupling weight decay with gradient updates. Both PyTorch and TensorFlow include AdamW natively.",
        paper: "Loshchilov & Hutter, 2019 — Decoupled Weight Decay Regularization — arXiv:1711.05101",
        arxiv: "https://arxiv.org/abs/1711.05101",
        badge: "🟢",
        diff: "Easy",
        categories: [6],
        bench: [
          {
            m: "AdamW vs Adam",
            metric: "Wikitext PPL",
            ds: "Transformer",
            v: "18.7",
            n: "vs Adam 21.3"
          }
        ],
        papers: [
          {
            name: "AdamW",
            title: "Fixing Weight Decay Regularization in Adam",
            authors: "Loshchilov, Hutter",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1711.05101",
            github: "",
            huggingface: "",
            bibtex: "Loshchilov & Hutter, 2019 — AdamW (ICLR 2018)"
          }
        ]
      },
      {
        id: 345,
        name: "Mixed Precision",
        cn: "混合精度训练",
        desc_cn: "混合精度训练利用FP16/BF16进行正向和反向计算加速，同时用FP32保持梯度更新以确保数值稳定性。NVIDIA Apex和PyTorch AMP是主要实现。BF16相比FP16有更宽的动态范围，在大模型训练中逐渐成为主流。",
        desc_en: "Mixed precision training uses FP16/BF16 for forward and backward computation to accelerate while maintaining FP32 gradients for numerical stability. NVIDIA Apex and PyTorch AMP are main implementations. BF16 has wider dynamic range than FP16 and is becoming dominant in large model training.",
        paper: "Micikevicius et al., 2018 — Mixed Precision Training — arXiv:1710.03740",
        arxiv: "https://arxiv.org/abs/1710.03740",
        badge: "🟢",
        diff: "Easy",
        categories: [6],
        bench: [
          {
            m: "Mixed Precision A100",
            metric: "TFLOPs",
            ds: "VGG-16",
            v: "8.3x",
            n: "vs FP32"
          }
        ],
        papers: [
          {
            name: "Mixed Precision",
            title: "Mixed Precision Training",
            authors: "Micikevicius et al.",
            year: "2018",
            arxiv: "https://arxiv.org/abs/1710.03740",
            github: "",
            huggingface: "",
            bibtex: "Micikevicius et al., 2018 — Mixed Precision (ICLR 2018)"
          }
        ]
      },
      {
        id: 346,
        name: "EMA/SWA",
        cn: "指数移动平均/随机权重平均",
        desc_cn: "指数移动平均（EMA）维护模型权重的滑动平均，在测试时使用可提升泛化能力。随机权重平均（SWA）通过周期性采样权重平均进一步提升。EMA在训练LLM如PaLM、T5中广泛使用，通常取0.9999~0.99999的衰减率。",
        desc_en: "Exponential Moving Average (EMA) maintains a sliding average of model weights, used at inference time to improve generalization. Stochastic Weight Averaging (SWA) further improves by periodically sampling weight averages. EMA is widely used in training LLMs like PaLM and T5, typically with decay rates of 0.9999~0.99999.",
        paper: "Polyak & Juditskii, 1991 — EMA / Izmailov et al., 2018 — SWA — arXiv:1704.00109",
        arxiv: "https://arxiv.org/abs/1704.00109",
        badge: "🟢",
        diff: "Easy",
        categories: [6],
        bench: [
          {
            m: "EMA ResNet",
            metric: "CIFAR-100",
            ds: "ResNet-164",
            v: "79.8%",
            n: "vs 77.6% no EMA"
          }
        ],
        papers: [
          {
            name: "SWA",
            title: "Averaging Weights Leads to Wider Optima and Better Generalization",
            authors: "Izmailov et al.",
            year: "2018",
            arxiv: "https://arxiv.org/abs/1704.00109",
            github: "",
            huggingface: "",
            bibtex: "Izmailov et al., 2018 — SWA (UAI 2018)"
          }
        ]
      },
      {
        id: 347,
        name: "PPO",
        cn: "PPO对齐",
        desc_cn: "Proximal Policy Optimization (PPO) 是InstructGPT/ChatGPT等模型的RLHF核心算法，通过限制策略更新幅度保证训练稳定性。PPO在奖赏模型（RM）指导下优化语言模型，结合KL散度约束防止模型偏离SFT基线。是LLM对齐的经典算法。",
        desc_en: "Proximal Policy Optimization (PPO) is the core RLHF algorithm for InstructGPT/ChatGPT, ensuring training stability by limiting policy update magnitude. PPO optimizes language models under reward model (RM) guidance, combining KL divergence constraints to prevent deviation from SFT baseline. The classic algorithm for LLM alignment.",
        paper: "Schulman et al., 2017 — PPO — arXiv:1707.06347 / Ouyang et al., 2022 — InstructGPT — arXiv:2203.02155",
        arxiv: "https://arxiv.org/abs/1707.06347",
        badge: "🟡",
        diff: "Advanced",
        categories: [7],
        bench: [
          {
            m: "PPO InstructGPT",
            metric: "Helpfulness",
            ds: "1.3B",
            v: "vs SFT",
            n: "human eval win rate"
          }
        ],
        papers: [
          {
            name: "PPO",
            title: "Proximal Policy Optimization Algorithms",
            authors: "Schulman, Wolski, etc.",
            year: "2017",
            arxiv: "https://arxiv.org/abs/1707.06347",
            github: "",
            huggingface: "",
            bibtex: "Schulman et al., 2017 — PPO (arXiv 2017)"
          },
          {
            name: "InstructGPT",
            title: "Training Language Models to Follow Instructions with Human Feedback",
            authors: "Ouyang et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2203.02155",
            github: "",
            huggingface: "",
            bibtex: "Ouyang et al., 2022 — InstructGPT (NeurIPS 2022)"
          }
        ]
      },
      {
        id: 348,
        name: "In-Context Learning",
        cn: "上下文学习",
        desc_cn: "In-Context Learning (ICL) 让LLM通过输入中的少量样本（demonstrations）学习新任务，无需梯度更新。代表工作包括Brown et al. 2020 (GPT-3)提出ICL概念；Meta-Prompting等通过结构化提示提升样本效率；ICL的能力涌现于大规模语言模型。",
        desc_en: "In-Context Learning (ICL) enables LLMs to learn new tasks via few demonstrations in input without gradient updates. Key works include Brown et al. 2020 (GPT-3) proposing the ICL concept; Meta-Prompting improves sample efficiency through structured prompts; ICL capability emerges in large-scale language models.",
        paper: "Brown et al., 2020 — GPT-3 — arXiv:2005.14165 / Dong et al., 2025 — A Survey on ICL — arXiv:2301.00234",
        arxiv: "https://arxiv.org/abs/2005.14165",
        badge: "🟢",
        diff: "Easy",
        categories: [8],
        bench: [
          {
            m: "GPT-3 175B ICL",
            metric: "Few-shot",
            ds: "SuperGLUE",
            v: "71.8%",
            n: "vs zero-shot 49.4%"
          }
        ],
        papers: [
          {
            name: "GPT-3",
            title: "Language Models are Few-Shot Learners",
            authors: "Brown et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2005.14165",
            github: "",
            huggingface: "",
            bibtex: "Brown et al., 2020 — GPT-3 (NeurIPS 2020)"
          },
          {
            name: "ICL Survey",
            title: "A Survey on In-Context Learning",
            authors: "Dong et al.",
            year: "2025",
            arxiv: "https://arxiv.org/abs/2301.00234",
            github: "",
            huggingface: "",
            bibtex: "Dong et al., 2025 — ICL Survey (arXiv 2025)"
          }
        ]
      },
      {
        id: 349,
        name: "Textbook Data",
        cn: "教科书数据",
        desc_cn: "高质量教科书数据（如TinyStars、Phi-1/2/3使用的The Stack_subsample、教科书网页）因结构清晰、知识密度高、毒性低，被用于训练小而强的模型。Phi系列模型证明小模型配合高质量数据可超越10倍规模模型。数据组成与质量对模型能力至关重要。",
        desc_en: "High-quality textbook data (e.g., TinyStars, The Stack_subsample used by Phi-1/2/3, textbook web pages) — with clear structure, high knowledge density, and low toxicity — is used to train small yet powerful models. The Phi series demonstrates that small models with high-quality data can surpass models 10× their size. Data composition and quality are critical for model capability.",
        paper: "Gunasekar et al., 2023 — Phi-1 — arXiv:2306.11644 / Li et al., 2023 — TinyStars — arXiv:2309.16294",
        arxiv: "https://arxiv.org/abs/2306.11644",
        badge: "🟡",
        diff: "Intermediate",
        categories: [8],
        bench: [
          {
            m: "Phi-1 1.3B",
            metric: "Pass@1",
            ds: "HumanEval",
            v: "51.4%",
            n: "vs 35.3% same size"
          }
        ],
        papers: [
          {
            name: "Phi-1",
            title: "Textbooks Are All You Need",
            authors: "Gunasekar et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.11644",
            github: "",
            huggingface: "",
            bibtex: "Gunasekar et al., 2023 — Phi-1 (arXiv 2023)"
          },
          {
            name: "TinyStars",
            title: "TinyStars: A High-Quality Instruction Dataset for Large Language Models",
            authors: "Li et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2309.16294",
            github: "",
            huggingface: "",
            bibtex: "Li et al., 2023 — TinyStars (arXiv 2023)"
          }
        ]
      },
      {
        id: 350,
        name: "Data Pruning",
        cn: "数据剪枝",
        desc_cn: "数据剪枝通过识别和移除低质量或冗余训练样本提升训练效率和模型质量。核心方法包括基于梯度影响力的实例重要性估计（如GraB算法）、基于Embedding相似度的去重、以及基于模型损失预测的数据筛选。数据剪枝可在不损失性能前提下节省20%~50%的训练数据。",
        desc_en: "Data Pruning identifies and removes low-quality or redundant training samples to improve training efficiency and model quality. Core methods include gradient-based instance importance estimation (e.g., GraB), embedding similarity deduplication, and loss prediction-based data filtering. Data pruning can save 20%~50% training data without performance loss.",
        paper: "Paul et al., 2023 — Data Pruning — arXiv:2305.17888 / Sorscher et al., 2022 — GraB — arXiv:2205.10566",
        arxiv: "https://arxiv.org/abs/2205.10566",
        badge: "🟡",
        diff: "Advanced",
        categories: [8],
        bench: [
          {
            m: "GraB CIFAR-10",
            metric: "Accuracy",
            ds: "ResNet-20",
            v: "93.4%",
            n: "50% data retained"
          }
        ],
        papers: [
          {
            name: "GraB",
            title: "GraB: Gradient Balancing for Large-Scale Training",
            authors: "Sorscher et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.10566",
            github: "",
            huggingface: "",
            bibtex: "Sorscher et al., 2022 — GraB (NeurIPS 2022)"
          },
          {
            name: "Data Pruning",
            title: "Beyond Neural Scaling Laws",
            authors: "Balkhan et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2205.10566",
            github: "",
            huggingface: "",
            bibtex: "Balkhan et al., 2022 — Beyond Neural Scaling Laws (NeurIPS 2022)"
          }
        ]
      },
      {
        id: 351,
        name: "RoPE",
        cn: "旋转位置编码",
        desc_cn: "Rotary Position Embedding (RoPE) 通过将位置编码融合到Query和Key的旋转操作中实现相对位置编码，可在任意长度上外推而无需微调。LLaMA、GLM-4等主流模型均采用RoPE。RoPE解决了ALiBi的离散性问题，支持长上下文 Attention。",
        desc_en: "Rotary Position Embedding (RoPE) implements relative position encoding by fusing position into Query and Key rotation operations, enabling extrapolation to arbitrary lengths without fine-tuning. RoPE is used in LLaMA, GLM-4, and other mainstream models. RoPE solves ALiBi's discreteness issues and supports long-context attention.",
        paper: "Su et al., 2022 — RoPE — arXiv:2104.09864 / Press et al., 2022 — ALiBi — ACL 2022",
        arxiv: "https://arxiv.org/abs/2104.09864",
        badge: "🟢",
        diff: "Intermediate",
        categories: [10],
        bench: [
          {
            m: "RoPE LLaMA-7B",
            metric: "PPL",
            ds: "32K seq",
            v: "5.6",
            n: "extrapolated"
          }
        ],
        papers: [
          {
            name: "RoPE",
            title: "RoFormer: Enhanced Transformer with Rotary Position Embedding",
            authors: "Su et al.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2104.09864",
            github: "https://github.com/zhuiying/RoFormer",
            huggingface: "",
            bibtex: "Su et al., 2022 — RoFormer (arXiv 2022)"
          },
          {
            name: "LLaMA",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            authors: "Touvron et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.13971",
            github: "https://github.com/meta-llama/llama",
            huggingface: "",
            bibtex: "Touvron et al., 2023 — LLaMA (Meta AI)"
          }
        ]
      },
      {
        id: 352,
        name: "ALiBi",
        cn: "线性偏置注意力",
        desc_cn: "Attention with Linear Biases (ALiBi) 通过在注意力分数上添加与距离成比例的线性偏置实现相对位置编码，无需学习位置嵌入即可泛化到训练时未见过的更长序列。简单有效，被用于MPT、ChatGLM等模型。RoPE出现后，ALiBi在主流模型中逐渐被取代。",
        desc_en: "Attention with Linear Biases (ALiBi) implements relative position encoding by adding distance-proportional linear biases to attention scores, generalizing to longer sequences not seen during training without learning position embeddings. Simple and effective, ALiBi is used in MPT, ChatGLM, and other models. After RoPE emerged, ALiBi has been gradually replaced in mainstream models.",
        paper: "Press et al., 2022 — ALiBi — ACL 2022 — arXiv:2108.12409",
        arxiv: "https://arxiv.org/abs/2108.12409",
        badge: "🟢",
        diff: "Easy",
        categories: [10],
        bench: [
          {
            m: "ALiBi MPT-7B",
            metric: "PPL",
            ds: "65K seq",
            v: "6.2",
            n: "extrapolated"
          }
        ],
        papers: [
          {
            name: "ALiBi",
            title: "Train Short, Test Long: Attention with Linear Biases Enables Infinite Length Input",
            authors: "Press, Smith, Levy",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2108.12409",
            github: "",
            huggingface: "",
            bibtex: "Press et al., 2022 — ALiBi (ACL 2022)"
          }
        ]
      },
      {
        id: 353,
        name: "Standard RAG",
        cn: "标准RAG流程",
        desc_cn: "标准RAG（Retrieval-Augmented Generation）流程包含检索（Retriever）和生成（Generator）两个阶段：检索阶段使用密集向量（BERT）或稀疏向量（BM25）从语料库中检索相关文档，生成阶段将检索结果与原问题拼接输入LLM生成答案。是LLM知识问答的经典架构。",
        desc_en: "Standard RAG (Retrieval-Augmented Generation) consists of retrieval (Retriever) and generation (Generator) stages: retrieval uses dense vectors (BERT) or sparse vectors (BM25) to fetch relevant documents from corpus; generation concatenates retrieved results with original query for LLM answer generation. The classic architecture for LLM knowledge QA.",
        paper: "Lewis et al., 2020 — RAG — NeurIPS 2020 — arXiv:2005.11401",
        arxiv: "https://arxiv.org/abs/2005.11401",
        badge: "🟢",
        diff: "Easy",
        categories: [11],
        bench: [
          {
            m: "RAG BERT-QA",
            metric: "F1",
            ds: "Natural Questions",
            v: "44.1",
            n: "vs retriever-only 34.1"
          }
        ],
        papers: [
          {
            name: "RAG",
            title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
            authors: "Lewis et al.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2005.11401",
            github: "https://github.com/facebookresearch/faiss",
            huggingface: "",
            bibtex: "Lewis et al., 2020 — RAG (NeurIPS 2020)"
          }
        ]
      },
      {
        id: 354,
        name: "Hybrid Search",
        cn: "混合检索",
        desc_cn: "混合检索结合密集向量检索（语义相似）和稀疏检索（BM25词项匹配）的优势，在不同类型的查询上都能保持较强性能。实践中常将密集和稀疏检索结果用RRF（倒数排名融合）或学习型融合合并。可在稀疏检索中添加词权重信息。",
        desc_en: "Hybrid Search combines the strengths of dense vector retrieval (semantic similarity) and sparse retrieval (BM25 term matching), maintaining strong performance across different query types. In practice, dense and sparse results are merged using RRF (Reciprocal Rank Fusion) or learned fusion. Sparse retrieval can add term weighting information.",
        paper: "Khattab & Zaharia, 2020 — ColBERT — arXiv:2004.12832 / Formal et al., 2021 — Hybrid Search — SIGIR 2021",
        arxiv: "https://arxiv.org/abs/2004.12832",
        badge: "🟡",
        diff: "Intermediate",
        categories: [11],
        bench: [
          {
            m: "ColBERT Hybrid",
            metric: "MRR@10",
            ds: "MS MARCO",
            v: "36.5",
            n: "vs dense-only 31.2"
          }
        ],
        papers: [
          {
            name: "ColBERT",
            title: "ColBERT: Efficient and Effective Passage Search via Contextualized Late Interactions",
            authors: "Khattab, Zaharia",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2004.12832",
            github: "https://github.com/stanford-futuredata/ColBERT",
            huggingface: "",
            bibtex: "Khattab & Zaharia, 2020 — ColBERT (SIGIR 2020)"
          }
        ]
      },
      {
        id: 355,
        name: "Re-Ranking",
        cn: "重排序",
        desc_cn: "Cross-Encoder重排序在初步检索后使用交叉编码器对候选文档进行精细化排序，比双塔向量模型精度更高但计算成本更大。实践中常采用两阶段检索-重排架构，重排模型如BERT、monoBERT、Cross-Encoder可用在LLM调用前过滤低质量文档。",
        desc_en: "Cross-Encoder re-ranking uses cross-encoders to perform fine-grained ranking of candidate documents after initial retrieval, more accurate than bi-encoder vector models but computationally costlier. Practice commonly uses two-stage retrieve-rerank architecture; rerankers like BERT, monoBERT, and Cross-Encoder filter low-quality documents before LLM calls.",
        paper: "Nogueira et al., 2019 — Bert-Sequence Re-Ranker — arXiv:1911.03155",
        arxiv: "https://arxiv.org/abs/1911.03155",
        badge: "🟡",
        diff: "Intermediate",
        categories: [11],
        bench: [
          {
            m: "BERT Re-Ranker",
            metric: "NDCG@10",
            ds: "TREC-COVID",
            v: "72.3",
            n: "vs first-stage 54.6"
          }
        ],
        papers: [
          {
            name: "BERT Re-Ranker",
            title: "Passage Ranking with BERT",
            authors: "Nogueira, Cho",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1911.03155",
            github: "",
            huggingface: "",
            bibtex: "Nogueira & Cho, 2019 — Passage Ranking with BERT (arXiv 2019)"
          }
        ]
      },
      {
        id: 356,
        name: "Expert Balancing",
        cn: "专家均衡",
        desc_cn: "MoE模型中不同专家的负载不均会导致部分专家过载影响训练效率和模型质量。Expert Balancing通过辅助损失（load balancing loss）或辅助令牌丢弃策略调整专家利用率。Switch Transformer和Mixtral均使用温度调度和容量因子来平衡专家负载。",
        desc_en: "In MoE models, uneven expert load causes some experts to overload, affecting training efficiency and model quality. Expert Balancing adjusts expert utilization via auxiliary losses (load balancing loss) or auxiliary token dropping strategies. Switch Transformer and Mixtral both use temperature scheduling and capacity factors to balance expert load.",
        paper: "Fedus et al., 2022 — Switch Transformer — arXiv:2101.03961 / Lepikhin et al., 2021 — MoE — arXiv:2006.01666",
        arxiv: "https://arxiv.org/abs/2101.03961",
        badge: "🟡",
        diff: "Advanced",
        categories: [12],
        bench: [
          {
            m: "Switch Transformer",
            metric: "FLOPs/token",
            ds: "1.6T params",
            v: "7x",
            n: "vs dense model"
          }
        ],
        papers: [
          {
            name: "Switch Transformer",
            title: "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity",
            authors: "Fedus, Zoph, etc.",
            year: "2022",
            arxiv: "https://arxiv.org/abs/2101.03961",
            github: "",
            huggingface: "",
            bibtex: "Fedus et al., 2022 — Switch Transformer (JMLR 2022)"
          },
          {
            name: "GShard",
            title: "GShard: Scaling Giant Models with Conditional Computation and Automatic Partitioning",
            authors: "Lepikhin et al.",
            year: "2021",
            arxiv: "https://arxiv.org/abs/2006.01666",
            github: "",
            huggingface: "",
            bibtex: "Lepikhin et al., 2021 — GShard (ICML 2021)"
          }
        ]
      },
      {
        id: 357,
        name: "Hyena/H3",
        cn: "Hyena/H3",
        desc_cn: "Hyena和H3（Hungry Hungry Hippos）是近期提出的类Transformer架构，用长卷积和状态空间模型（SSM）替代attention。H3在输入交互上使用两个方向的SSM拼接；Hyena使用分层设计在次优位置高效计算全局交互。均为线性复杂度的替代架构，但目前精度与Transformer仍有差距。",
        desc_en: "Hyena and H3 (Hungry Hungry Hippos) are recently proposed Transformer-like architectures using long convolutions and state space models (SSM) to replace attention. H3 concatenates two directional SSMs on input interactions; Hyena uses a hierarchy to efficiently compute global interactions at subquadratic cost. Both are subquadratic alternatives but still trail Transformer in accuracy.",
        paper: "Poli et al., 2023 — Hyena — arXiv:2302.10866 / Dao et al., 2023 — H3 — arXiv:2212.14052",
        arxiv: "https://arxiv.org/abs/2302.10866",
        badge: "🔴",
        diff: "Advanced",
        categories: [13],
        bench: [
          {
            m: "H3 270M",
            metric: "WikiText PPL",
            ds: "H3",
            v: "18.1",
            n: "vs Transformer 17.6"
          }
        ],
        papers: [
          {
            name: "Hyena",
            title: "Hyena Hierarchy: Towards Larger Convolutional Language Models",
            authors: "Poli et al.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2302.10866",
            github: "https://github.com/HazyResearch/H3",
            huggingface: "",
            bibtex: "Poli et al., 2023 — Hyena (ICML 2023)"
          },
          {
            name: "H3",
            title: "Hungry Hungry Hippos: Towards Language Modeling with State Space Models",
            authors: "Dao, Gu, etc.",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2212.14052",
            github: "https://github.com/HazyResearch/H3",
            huggingface: "",
            bibtex: "Dao et al., 2023 — H3 (arXiv 2023)"
          }
        ]
      },
      {
        id: 358,
        name: "GLA",
        cn: "门控线性注意力",
        desc_cn: "Gated Linear Attention (GLA) 在线性注意力中加入门控机制解决线性attention表达能力不足的问题。通过引入输入门控和忘记门控，GLA可以在保持线性复杂度的同时捕捉更长程的依赖关系。在语言建模和DNA序列任务上优于标准线性注意力。",
        desc_en: "Gated Linear Attention (GLA) adds gating mechanisms to linear attention to address insufficient expressiveness. By introducing input and forget gates, GLA captures longer-range dependencies while maintaining linear complexity. Outperforms standard linear attention on language modeling and DNA sequence tasks.",
        paper: "Yang et al., 2024 — GLA — arXiv:2311.15527",
        arxiv: "https://arxiv.org/abs/2311.15527",
        badge: "🔴",
        diff: "Advanced",
        categories: [13],
        bench: [
          {
            m: "GLA 370M",
            metric: "PPL",
            ds: "WikiText-103",
            v: "24.3",
            n: "vs Mamba 24.7"
          }
        ],
        papers: [
          {
            name: "GLA",
            title: "Gated Linear Attention with State-Space Dualism",
            authors: "Yang, Liu, etc.",
            year: "2024",
            arxiv: "https://arxiv.org/abs/2311.15527",
            github: "https://github.com/jxyang/gated-linear-attention",
            huggingface: "",
            bibtex: "Yang et al., 2024 — GLA (arXiv 2024)"
          }
        ]
      },
      {
        id: 359,
        name: "Performer",
        cn: "Performer",
        desc_cn: "Performer使用正交随机特征(ORF)实现对softmax attention的无偏近似，达到线性时间复杂度。相比Random Feature方法，ORF保证了估计的稳定性。Performer在蛋白质序列预测等任务上验证了其实用性，但精度略低于exact attention。",
        desc_en: "Performer uses Orthogonal Random Features (ORF) for unbiased approximation of softmax attention at linear time complexity. Compared to standard Random Feature methods, ORF ensures estimation stability. Performers have been validated on tasks like protein sequence prediction, but accuracy is slightly below exact attention.",
        paper: "Choromanski et al., 2020 — Rethinking Attention with Performers — arXiv:2009.14794",
        arxiv: "https://arxiv.org/abs/2009.14794",
        badge: "🟡",
        diff: "Advanced",
        categories: [13],
        bench: [
          {
            m: "Performer 300M",
            metric: "PPL",
            ds: "Enwik8",
            v: "26.5",
            n: "vs Transformer 26.0"
          }
        ],
        papers: [
          {
            name: "Performer",
            title: "Rethinking Attention with Performers",
            authors: "Choromanski, Likhosherstov, etc.",
            year: "2020",
            arxiv: "https://arxiv.org/abs/2009.14794",
            github: "https://github.com/google-research/google-research/tree/master/performer",
            huggingface: "",
            bibtex: "Choromanski et al., 2020 — Performer (ICLR 2021)"
          }
        ]
      },
      {
        id: 360,
        name: "Triton",
        cn: "Triton推理内核",
        desc_cn: "Triton是OpenAI开源的深度学习内核编程语言和编译器，通过Triton-IR让用户用Python编写高效GPU内核，支持自动融合和共享内存优化。TensorRT-LLM和vLLM等推理框架内部使用Triton内核实现attention、矩阵乘法等关键操作，大幅提升推理吞吐量。",
        desc_en: "Triton is OpenAI's open-source deep learning kernel programming language and compiler. Through Triton-IR, users write efficient GPU kernels in Python with automatic fusion and shared memory optimization. Inference frameworks like TensorRT-LLM and vLLM use Triton kernels internally for attention, matmul, and other critical operations, significantly boosting inference throughput.",
        paper: "Tillet et al., 2019 — Triton — arXiv:1909.13511",
        arxiv: "https://arxiv.org/abs/1909.13511",
        badge: "🟢",
        diff: "Intermediate",
        categories: [14],
        bench: [
          {
            m: "Triton GEMM",
            metric: "TFLOPs",
            ds: "A100",
            v: "85%",
            n: "peak utilization"
          }
        ],
        papers: [
          {
            name: "Triton",
            title: "Triton: An Intermediate Language and Compiler for Tiled Neural Network Programs",
            authors: "Tillet, Kung, et al.",
            year: "2019",
            arxiv: "https://arxiv.org/abs/1909.13511",
            github: "https://github.com/openai/triton",
            huggingface: "",
            bibtex: "Tillet et al., 2019 — Triton (arXiv 2019)"
          }
        ]
      },
      {
        id: 361,
        name: "lm-format",
        cn: "lm-format",
        desc_cn: "lm-format是用于LLM推理的高效数据打包和格式化库，支持tokens、logits等批量数据的零拷贝操作。它与vLLM、TGI等推理服务器配合使用，优化KV Cache格式和数据搬运效率。是LLM Serving基础设施建设的重要组成部分。",
        desc_en: "lm-format is an efficient data packing and formatting library for LLM inference, supporting zero-copy operations on batched tokens, logits, and other data. Used alongside vLLM, TGI, and other inference servers to optimize KV Cache format and data transfer efficiency. A key component of LLM Serving infrastructure.",
        paper: "lm-format — Open Source Library — GitHub",
        arxiv: "https://github.com/huggingface/safetensors",
        badge: "🟢",
        diff: "Easy",
        categories: [14],
        bench: [
          {
            m: "lm-format decode",
            metric: "Tokens/sec",
            ds: "Llama-2 70B",
            v: "45 tok/s",
            n: "per A100"
          }
        ],
        papers: [
          {
            name: "Safetensors",
            title: "Safetensors: Safe and Fast Model Loading",
            authors: "SafeTensors Authors",
            year: "2023",
            arxiv: "https://arxiv.org/abs/2306.13547",
            github: "https://github.com/huggingface/safetensors",
            huggingface: "",
            bibtex: "SafeTensors Authors, 2023 — Safetensors (GitHub 2023)"
          }
        ]
      }
    ],
    benches: {
      "1": {
        titleCN: "NeRF质量",
        titleEN: "NeRF Quality",
        metricCN: "PSNR (dB, 越高越好)",
        metricEN: "PSNR (dB, higher=better)",
        unit: "dB",
        higherBetter: true,
        items: [
          {
            name: "K-Planes",
            val: 31.2,
            color: "var(--accent)",
            note: "dynamic scenes"
          },
          {
            name: "NeRF",
            val: 29.8,
            color: "var(--accent2)",
            note: "novel view blender"
          },
          {
            name: "Point NeRF",
            val: 31.4,
            color: "var(--c3)",
            note: "with point priors"
          },
          {
            name: "Semantic NeRF",
            val: 28.5,
            color: "var(--c4)",
            note: "+ semantic labels"
          },
          {
            name: "Plenoxels",
            val: 29.1,
            color: "var(--c6)",
            note: "w/o MLP"
          }
        ]
      },
      "2": {
        titleCN: "实时渲染对比",
        titleEN: "Real-time Rendering",
        metricCN: "FPS",
        metricEN: "FPS",
        unit: "",
        higherBetter: true,
        items: [
          {
            name: "3DGS",
            val: 100,
            color: "var(--c2)",
            note: "real scenes"
          },
          {
            name: "Instant-NGP",
            val: 50,
            color: "var(--c6)",
            note: "hash encoding"
          },
          {
            name: "MobileNeRF",
            val: 30,
            color: "var(--c1)",
            note: "mobile browser"
          },
          {
            name: "NeRF (original)",
            val: 0.1,
            color: "var(--c8)",
            note: "per-frame"
          }
        ]
      },
      "3": {
        titleCN: "视频预测质量",
        titleEN: "Video Prediction",
        metricCN: "FVD分数(越低越好)",
        metricEN: "FVD Score (lower=better)",
        unit: "",
        higherBetter: false,
        items: [
          {
            name: "VideoPoet",
            val: 60.2,
            color: "var(--accent)",
            note: "text-to-video"
          },
          {
            name: "Sora",
            val: 65.8,
            color: "var(--accent2)",
            note: "60-120s video"
          },
          {
            name: "MCVD",
            val: 240,
            color: "var(--c4)",
            note: "128-frame BAIR"
          },
          {
            name: "GAIA-1",
            val: 150,
            color: "var(--c6)",
            note: "driving video"
          }
        ]
      },
      "4": {
        titleCN: "MBRL对比",
        titleEN: "MBRL Comparison",
        metricCN: "DMC标准化得分(越高越好)",
        metricEN: "DMC Normalized Score",
        unit: "",
        higherBetter: true,
        items: [
          {
            name: "DreamerV3",
            val: 200,
            color: "var(--accent2)",
            note: "Atari57"
          },
          {
            name: "TD-MPC",
            val: 185,
            color: "var(--accent)",
            note: "MetaWorld"
          },
          {
            name: "MuZero",
            val: 195,
            color: "var(--c3)",
            note: "Atari 57 games"
          },
          {
            name: "World Models",
            val: 150,
            color: "var(--c4)",
            note: "Car Racing"
          },
          {
            name: "CURL",
            val: 145,
            color: "var(--c6)",
            note: "DeepMind Control"
          }
        ]
      },
      "5": {
        titleCN: "仿真平台速度",
        titleEN: "Simulation Speed",
        metricCN: "并行环境数量",
        metricEN: "Parallel Environments",
        unit: "",
        higherBetter: true,
        items: [
          {
            name: "Isaac Gym",
            val: 1000000,
            color: "var(--accent)",
            note: "GPU parallel"
          },
          {
            name: "Habitat-Sim",
            val: 10000,
            color: "var(--accent2)",
            note: "image FPS"
          },
          {
            name: "MuJoCo CPU",
            val: 4096,
            color: "var(--c4)",
            note: "CPU envs"
          },
          {
            name: "TDW",
            val: 60,
            color: "var(--c6)",
            note: "physics FPS"
          }
        ]
      }
    }
  }
};
