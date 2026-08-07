// Grouped tech stack. Each row scrolls as an infinite marquee.
// `c` is the little dot colour next to each pill.

export const skillGroups = [
  {
    label: 'Languages',
    dir: 'left',
    items: [
      { name: 'Python', c: '#4B8BBE' },
      { name: 'JavaScript', c: '#F0DB4F' },
      { name: 'TypeScript', c: '#3178C6' },
      { name: 'SQL', c: '#E38C00' },
      { name: 'C', c: '#5C6BC0' },
    ],
  },
  {
    label: 'AI / ML',
    dir: 'right',
    items: [
      { name: 'PyTorch', c: '#EE4C2C' },
      { name: 'TensorFlow', c: '#FF6F00' },
      { name: 'HuggingFace', c: '#FFD21E' },
      { name: 'LangGraph', c: '#2ECC71' },
      { name: 'CrewAI', c: '#FF5A5F' },
      { name: 'YOLO', c: '#00B8D4' },
      { name: 'OpenCV', c: '#5C85D6' },
      { name: 'scikit-learn', c: '#F7931E' },
      { name: 'XGBoost', c: '#E23A3A' },
    ],
  },
  {
    label: 'Web',
    dir: 'left',
    items: [
      { name: 'React', c: '#61DAFB' },
      { name: 'Next.js', c: '#CBD5E1' },
      { name: 'Node.js', c: '#68A063' },
      { name: 'NestJS', c: '#E0234E' },
      { name: 'FastAPI', c: '#009688' },
      { name: 'Tailwind', c: '#38BDF8' },
      { name: 'Framer Motion', c: '#BD34FE' },
      { name: 'Three.js', c: '#94A3B8' },
    ],
  },
  {
    label: 'Databases',
    dir: 'right',
    items: [
      { name: 'PostgreSQL', c: '#4169E1' },
      { name: 'MongoDB', c: '#47A248' },
      { name: 'MySQL', c: '#E38C00' },
      { name: 'Oracle', c: '#F80000' },
      { name: 'Supabase', c: '#3ECF8E' },
      { name: 'Qdrant', c: '#E5484D' },
    ],
  },
  {
    label: 'Tools',
    dir: 'left',
    items: [
      { name: 'Git', c: '#F05032' },
      { name: 'GitHub', c: '#CBD5E1' },
      { name: 'Docker', c: '#2496ED' },
      { name: 'AWS', c: '#FF9900' },
      { name: 'n8n', c: '#EA4B71' },
      { name: 'Vercel', c: '#CBD5E1' },
    ],
  },
]
