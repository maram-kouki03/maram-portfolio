// Projects, in display order.
//
// Optional media fields:
//   demoVideo — path to a clip in /public/demos (e.g. '/demos/unilink-demo.mp4').
//               When set, the card plays it muted on loop and the modal shows
//               a full player with controls. When null, no player is shown.
//   image     — a screenshot used when there is no demo video.
//   poster    — optional still frame shown before the video loads.
// Optional links: github, live (null hides the button).
//
// `categories` drives the filter chips in Projects.jsx: 'ai', 'cv', 'fullstack'.

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'cv', label: 'Computer Vision' },
  { id: 'fullstack', label: 'Full-Stack' },
]

export const projects = [
  {
    id: 'assurio',
    title: 'Assurio — Multi-Agent Insurance Automation',
    blurb: 'Claims processing, fraud detection and underwriting with human-in-the-loop review.',
    description:
      'An orchestrated ecosystem of AI agents covering the core insurance workflows: claims, underwriting, fraud detection, repetitive operations and prevention, over an MCP tool layer. Two interfaces (policyholders and insurer teams) with human-in-the-loop review. The policyholder chat understands Tunisian dialect and reads damage photos with vision; a Claims agent opens a real file while a Fraud agent scores it behind the scenes. Built with FastAPI + SQLite, a React/Vite front end and Gemini.',
    tags: ['Agentic AI', 'Multi-Agent', 'Gemini', 'FastAPI', 'React'],
    categories: ['ai'],
    demoVideo: '/demos/assurio-demo.mp4',
    image: null,
    poster: null,
    github: 'https://github.com/maram-kouki03/assurio',
    live: null,
  },
  {
    id: 'bugcrew',
    title: 'BugCrew — Multi-Agent Bug-Fixing CLI',
    blurb: 'Multi-agent CLI that inspects code issues, coordinates debugging and automates fixes.',
    description:
      'A terminal tool, in the spirit of a mini coding agent, where a LangGraph orchestrator drives agents (locate, diagnose, fix, test-writer and verify) that read and actually edit your Python code. It writes a pytest anchored on the previously working behaviour and requires that test to fail on the buggy code and pass on the fix, so the agents cannot cheat. It asks for confirmation, then edits the faulty file directly. Installs as a `bugcrew` command.',
    tags: ['Agentic AI', 'LangGraph', 'Gemini', 'Python'],
    categories: ['ai'],
    demoVideo: null,
    image: '/demos/bugcrew-demo.png',
    poster: null,
    github: 'https://github.com/maram-kouki03/Bugcrew',
    live: null,
  },
  {
    id: 'bioscout',
    title: 'BioScout — Multimodal Drug Repositioning',
    blurb: 'Multimodal retrieval over protein sequences, scientific text and images for drug-repositioning research.',
    description:
      'Reframes drug repositioning as a biological retrieval problem: a disease is encoded through three modalities (text with PubMedBERT, images with ViT, protein sequences with ESM2) projected into a shared 256-D latent space. Relevant proteins are retrieved with Qdrant multivector indexing (sequence / function / pathway) and drugs are inferred downstream via protein–drug relationships. Built during an AI hackathon on multimodal biological discovery.',
    tags: ['PyTorch', 'ESM2', 'ViT', 'Qdrant'],
    categories: ['ai'],
    demoVideo: null,
    image: '/demos/bioscout-demo.png',
    poster: null,
    github: 'https://github.com/maram-kouki03/BioScout',
    live: null,
  },
  {
    id: 'crk-analytics',
    title: 'CRK Analytics — Retail Intelligence',
    blurb: 'Dashboard joining in-store footfall and interaction events with POS data to surface conversion insights.',
    description:
      'Built for client CRK Maroquinier at WiseVision. Store cameras run detection, tracking and staff/customer classification on NVIDIA Jetson; the resulting footfall and seller–client interaction events are joined with Joolan POS sales through a FastAPI/SQLite backend. A React dashboard shows KPI cards (visitors, engagement, conversion, revenue potential), comparison charts and date-range filtering, with a Gemini-powered agent that writes weekly reports.',
    tags: ['YOLO11-Pose', 'Jetson', 'FastAPI', 'React'],
    categories: ['cv', 'fullstack'],
    demoVideo: '/demos/crk-demo.mp4',
    image: null,
    poster: null,
    github: 'https://github.com/maram-kouki03/CRK-analytics-dashboard',
    live: null,
  },
  {
    id: 'unilink',
    title: "UniLink — SUP'COM Student App",
    blurb: 'Campus app for document sharing, events, carpooling, lost-and-found and real-time chat.',
    description:
      "The SUP'COM student app, behind a @supcom.tn login: a Drive-style document library organised by level, period and subject, carpooling, rent & borrow, lost & found, events, discussions and direct messages. The Expo / React Native app talks to its own Node.js + Express API (JWT auth, file uploads, Socket.IO live updates), with PostgreSQL hosted on Supabase used purely as the database.",
    tags: ['React Native', 'Expo', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO'],
    categories: ['fullstack'],
    demoVideo: null,
    image: null,
    poster: null,
    github: 'https://github.com/maram-kouki03/unilink',
    live: null,
  },
  {
    id: 'spendsmart',
    title: 'SpendSmart — Personal Finance Platform',
    blurb: 'Student finance app for transactions, budgets with alerts, shared expenses, subscriptions and savings goals.',
    description:
      'A personal finance web app for students, built as a team of three: cards and cash with live balances, quick transaction logging, monthly budgets per category with alert thresholds, shared expenses with split requests and settle-up, subscriptions with renewal reminders, and savings goals. Amounts default to TND (EUR and USD also supported). React + Vite front end, an Express REST API with its own JWT auth, and PostgreSQL hosted on Supabase.',
    tags: ['React', 'Vite', 'Express', 'PostgreSQL / Supabase'],
    categories: ['fullstack'],
    demoVideo: null,
    image: null,
    poster: null,
    github: 'https://github.com/maram-kouki03/spendsmart',
    live: null,
  },
  {
    id: 'sje-website',
    title: "SUP'COM Junior Enterprise Website",
    blurb: 'Showcase website for SJE: services, partners, sponsors, events and recruitment.',
    description:
      "Showcase website for SUP'COM Junior Enterprise (founded 2013): services, partner testimonials, a two-row sponsors slider, event cards with photo carousels, an integrated recruitment application form (embedded Google Form) and contact / quote-request forms. A five-page React + Vite single-page app with all content centralised in one data file, deployed on Vercel.",
    tags: ['React', 'Vite', 'React Router', 'Vercel'],
    categories: ['fullstack'],
    demoVideo: null,
    image: null,
    poster: null,
    github: 'https://github.com/maram-kouki03/SJE_Website',
    live: 'https://sje-website.vercel.app',
  },
]
