#!/usr/bin/env python3
"""Extract TOPICS data from index.html and write topics.js"""

import re

with open('/home/jay/.openclaw/workspace/multimodal/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract a JS assignment block like TOPICS.llm.cats = [...];
# or TOPICS.llm.benches = {...};
def extract_assignment(text, pattern_prefix):
    """Extract value of 'pattern_prefix = ' assignment, handling nested brackets."""
    idx = text.find(pattern_prefix + ' = ')
    if idx == -1:
        return None
    start = idx + len(pattern_prefix) + 3  # skip ' = '
    open_char = text[start]
    close_char = ']' if open_char == '[' else '}'
    depth = 0
    i = start
    while i < len(text):
        c = text[i]
        if c == open_char:
            depth += 1
        elif c == close_char:
            depth -= 1
            if depth == 0:
                return text[start:i+1]
        i += 1
    return None

# Extract metadata for each topic from the TOPICS = { ... } block
# Lines 307-336 in the HTML
topics_meta = {
    'llm': {
        'labelCN': 'LLM 训练与推理效率',
        'labelEN': 'LLM Training & Inference',
        'heroCN': '大语言模型训练与推理效率全面指南',
        'heroEN': 'Comprehensive Guide to LLM Training & Inference Efficiency',
        'footerCN': '整理自 NeurIPS / ICML / ICLR / ACL / EMNLP 等顶会论文',
        'footerEN': 'Curated from NeurIPS / ICML / ICLR / ACL / EMNLP papers',
    },
    'vlm': {
        'labelCN': '视觉-语言模型效率',
        'labelEN': 'Vision-Language Model Efficiency',
        'heroCN': '视觉-语言多模态模型训练与推理效率指南',
        'heroEN': 'Efficiency Techniques for Vision-Language Models',
        'footerCN': '整理自 CVPR / ICCV / NeurIPS / ICLR 视觉-语言论文',
        'footerEN': 'Curated from CVPR / ICCV / NeurIPS / ICLR vision-language papers',
    },
    'vla': {
        'labelCN': '视觉-语言-动作模型',
        'labelEN': 'Vision-Language-Action (Robotics)',
        'heroCN': '机器人VLA模型：操控、导航与模仿学习效率指南',
        'heroEN': 'VLA Robotics: Manipulation, Navigation & Imitation Learning',
        'footerCN': '整理自 CoRL / RSS / ICRA / NeurIPS 机器人与操控论文',
        'footerEN': 'Curated from CoRL / RSS / ICRA / NeurIPS robotics papers',
    },
    'world': {
        'labelCN': '世界模型与仿真',
        'labelEN': 'World Models & Simulation',
        'heroCN': '世界模型：NeRF / Gaussian / MBRL / 仿真环境指南',
        'heroEN': 'World Models: NeRF / Gaussian / MBRL / Simulation',
        'footerCN': '整理自 NeurIPS / ICML / ICLR / CVPR 生成模型与仿真论文',
        'footerEN': 'Curated from NeurIPS / ICML / ICLR / CVPR generative & simulation papers',
    },
}

def js_str(s):
    """Wrap a Python string as a JS string with double quotes, escaping as needed."""
    return json_like_str(s)

def json_like_str(s):
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    return f'"{s}"'

# Build the output
lines = ['export const TOPICS = {']

for topic in ['llm', 'vlm', 'vla', 'world']:
    meta = topics_meta[topic]

    cats_js = extract_assignment(content, f'TOPICS.{topic}.cats')
    techs_js = extract_assignment(content, f'TOPICS.{topic}.techs')
    benches_js = extract_assignment(content, f'TOPICS.{topic}.benches')

    print(f"{topic}: cats={len(cats_js) if cats_js else 0} chars, techs={len(techs_js) if techs_js else 0} chars, benches={len(benches_js) if benches_js else 0} chars")

    lines.append(f'  {topic}: {{')
    lines.append(f'    labelCN: {json_like_str(meta["labelCN"])}, labelEN: {json_like_str(meta["labelEN"])},')
    lines.append(f'    heroCN: {json_like_str(meta["heroCN"])}, heroEN: {json_like_str(meta["heroEN"])},')
    lines.append(f'    footerCN: {json_like_str(meta["footerCN"])},')
    lines.append(f'    footerEN: {json_like_str(meta["footerEN"])},')
    lines.append(f'    cats: {cats_js},')
    lines.append(f'    techs: {techs_js},')
    lines.append(f'    benches: {benches_js}')
    lines.append(f'  }}{"," if topic != "world" else ""}')

lines.append('};')
lines.append('')

output = '\n'.join(lines)

out_path = '/home/jay/.openclaw/workspace/multimodal-react/src/data/topics.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"\nWrote {len(output)} bytes to {out_path}")
