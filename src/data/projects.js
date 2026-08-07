// Each project's `video` and `poster` point to files in /public.
// Drop your real demo clips there (e.g. public/demos/assurio-demo.mp4) and the
// card hover-autoplay + click-to-expand modal will use them automatically.
// Leave `video` as null to keep the "[ file.mp4 ] hover = autoplay" placeholder.

export const projects = [
  {
    id: 'assurio',
    title: 'Assurio',
    blurb: 'A multi-agent system that automates insurance operations end to end.',
    description:
      'An orchestrated ecosystem of AI agents covering the core insurance workflows — claims, underwriting, fraud detection, repetitive operations and prevention — over an MCP tool layer. Two interfaces (policyholders and insurer teams) with human-in-the-loop collaboration. The policyholder chat understands Tunisian dialect and reads damage photos with vision; a Claims agent opens a real file while a Fraud agent scores it behind the scenes. Built with FastAPI + SQLite, a React/Vite front end and Gemini.',
    tags: ['FastAPI', 'React', 'Gemini', 'Multi-Agent'],
    video: '/demos/assurio-demo.mp4',
    poster: null,
    github: 'https://github.com/maram-kouki03/assurio',
    live: null,
    file: 'assurio-demo.mp4',
  },
  {
    id: 'wisevision',
    title: 'WiseVision — Retail CV Pipeline',
    blurb: 'Computer-vision pipeline that turns store cameras into retail analytics.',
    description:
      'The vision engine behind the CRK platform: YOLO person detection, BoT-SORT tracking with OSNet re-identification, an HSV + fine-tuned classifier that tells staff from customers, and a Proximity Engagement Counter (PEC) that measures seller–client interactions. Runs on NVIDIA Jetson across store locations.',
    tags: ['Python', 'YOLO', 'OpenCV', 'Jetson'],
    video: '/demos/wisevision-demo.mp4',
    poster: null,
    github: 'https://github.com/ahmedlayouni2001/WiseVision',
    live: null,
    file: 'wisevision-demo.mp4',
  },
  {
    id: 'crk-dashboard',
    title: 'CRK Analytics Dashboard',
    blurb: 'React dashboard for the WiseVision retail computer-vision platform.',
    description:
      'The analytics front end for the CRK retail platform at WiseVision: KPI cards (visitors, engagement/PEC, conversion, revenue potential), comparison charts, a French date-range picker, and a Gemini-powered agent that writes weekly reports. Built in React + Vite and deployed on Vercel.',
    tags: ['React', 'Vite', 'Recharts', 'Gemini'],
    video: '/demos/crk-demo.mp4',
    poster: null,
    github: 'https://github.com/maram-kouki03/CRK-analytics-dashboard',
    live: null,
    file: 'crk-demo.mp4',
  },
  {
    id: 'bugcrew',
    title: 'BugCrew',
    blurb: 'A multi-agent CLI that finds and fixes crashing bugs in your code.',
    description:
      'A terminal tool, in the spirit of a mini coding agent, where an orchestrator drives six agents — locate, diagnose, fix, test-writer and verify — that read and actually edit your Python code. It writes a pytest anchored on the previously working behaviour and requires that test to fail on the buggy code and pass on the fix, so the agents cannot cheat. It asks for confirmation, then edits the faulty file directly. No RAG. Installs as a `bugcrew` command.',
    tags: ['Python', 'Gemini', 'Multi-Agent', 'CLI'],
    video: null,
    image: '/demos/bugcrew-demo.png',
    poster: null,
    github: 'https://github.com/maram-kouki03/Bugcrew',
    live: null,
    file: 'bugcrew-demo.mp4',
  },
  {
    id: 'bioscout',
    title: 'BioScout',
    blurb: 'Multimodal drug-repurposing engine over text, image and protein embeddings.',
    description:
      'Reframes drug repurposing as a biological retrieval problem: a disease is encoded through three modalities — text (PubMedBERT), image (ViT) and protein sequence (ESM2) — projected into a shared 256-D latent space. Relevant proteins are retrieved with Qdrant multivector indexing (sequence / function / pathway) and drugs are inferred downstream via protein–drug relationships. Built during an AI hackathon on multimodal biological discovery.',
    tags: ['PyTorch', 'HuggingFace', 'ESM2', 'Qdrant'],
    video: null,
    image: '/demos/bioscout-demo.png',
    poster: null,
    github: 'https://github.com/maram-kouki03/BioScout',
    live: null,
    file: 'bioscout-demo.mp4',
  },
]
