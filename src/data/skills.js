// Grouped tech stack. Each row scrolls as an infinite marquee.
// `c` is the little dot colour next to each pill.

export const skillGroups = [
  {
    label: 'AI / CV',
    dir: 'left',
    items: [
      { name: 'PyTorch', c: '#EE4C2C' },
      { name: 'TensorFlow', c: '#FF6F00' },
      { name: 'YOLO11', c: '#00B8D4' },
      { name: 'YOLO-Pose', c: '#26C6DA' },
      { name: 'OpenCV', c: '#5C85D6' },
      { name: 'BoT-SORT', c: '#A78BFA' },
      { name: 'OSNet Re-ID', c: '#F472B6' },
    ],
  },
  {
    label: 'Agentic AI',
    dir: 'right',
    items: [
      { name: 'LangGraph', c: '#2ECC71' },
      { name: 'LangChain', c: '#1C9C7C' },
      { name: 'Multi-agent systems', c: '#8B5CF6' },
      { name: 'LLM tool use', c: '#60A5FA' },
      { name: 'Human-in-the-loop', c: '#FBBF24' },
    ],
  },
  {
    label: 'Languages',
    dir: 'left',
    items: [
      { name: 'Python', c: '#4B8BBE' },
      { name: 'TypeScript', c: '#3178C6' },
      { name: 'JavaScript', c: '#F0DB4F' },
      { name: 'SQL', c: '#E38C00' },
    ],
  },
  {
    label: 'Backend / Web',
    dir: 'right',
    items: [
      { name: 'FastAPI', c: '#009688' },
      { name: 'Node.js', c: '#68A063' },
      { name: 'Express', c: '#CBD5E1' },
      { name: 'React', c: '#61DAFB' },
      { name: 'React Native', c: '#61DAFB' },
      { name: 'Expo', c: '#CBD5E1' },
      { name: 'REST APIs', c: '#94A3B8' },
      { name: 'Socket.IO', c: '#CBD5E1' },
    ],
  },
  {
    label: 'Data / Deploy',
    dir: 'left',
    items: [
      { name: 'PostgreSQL', c: '#4169E1' },
      { name: 'SQLite', c: '#0F80CC' },
      { name: 'Supabase', c: '#3ECF8E' },
      { name: 'Qdrant', c: '#E5484D' },
      { name: 'NVIDIA Jetson', c: '#76B900' },
      { name: 'Windows Server', c: '#0078D4' },
      { name: 'PowerShell', c: '#5391FE' },
      { name: 'Git', c: '#F05032' },
    ],
  },
]
