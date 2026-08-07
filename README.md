<div align="center">

# ✨ maram.k — Personal Portfolio

### AI Engineer & Full-Stack Developer Portfolio

A cosmic, terminal-themed one-page portfolio — animated starfield background, a self-typing terminal hero, hover-to-play project demos, and a light/dark mode toggle.

[![Live Site](https://img.shields.io/badge/Live%20Site-maramkouki.me-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white)](https://maramkouki.me)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-BD34FE?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-3B82F6?style=flat-square)](#license)
[![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-EE4C2C?style=flat-square)](https://github.com/maram-kouki03)

**[🌐 maramkouki.me](https://maramkouki.me)**

</div>

<br/>

## 🪐 About

This is my personal portfolio — a single-page site built to feel like exploring a small corner of space from a terminal. It types itself out, drifts, and reacts to you.

| | |
|---|---|
| 🖥️ | **Terminal-style hero** — self-typing `whoami` / `role --list` / `about.txt` sequence |
| 🌌 | **Living background** — twinkling starfield + a parallax ringed planet that reacts to scroll and mouse |
| 🖱️ | **Custom cursor** — a trailing ring that swells over clickable elements |
| ☀️🌙 | **Light / dark mode** — toggle in the nav, remembers your choice |
| 🎬 | **Project cards** — hover to autoplay a demo clip, click to expand into a full case-study modal |
| 🧩 | **Tech marquee** — an infinite scrolling row per category (Languages, AI/ML, Web, Databases, Tools) |
| 🛤️ | **Experience & education timeline** — dual glowing timeline with animated nodes |
| 🏅 | **Certificates gallery** — clickable grid that opens a lightbox |
| ✉️ | **Working contact form** — serverless function + [Resend](https://resend.com) delivers messages straight to my inbox |

<br/>

## 🎨 Palette

<div align="center">

| Purple | Blue | Background (dark) | Background (light) |
|:---:|:---:|:---:|:---:|
| `#8B5CF6` | `#3B82F6` | `#0D0A1A` | `#EEEBF6` |
| ![#8B5CF6](https://placehold.co/60x30/8B5CF6/8B5CF6.png) | ![#3B82F6](https://placehold.co/60x30/3B82F6/3B82F6.png) | ![#0D0A1A](https://placehold.co/60x30/0D0A1A/0D0A1A.png) | ![#EEEBF6](https://placehold.co/60x30/EEEBF6/EEEBF6.png) |

Fonts: **[Sora](https://fonts.google.com/specimen/Sora)** for display/body, **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)** for the terminal and labels.

</div>

<br/>

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

</div>

- **React + Vite** — component structure, fast dev/build
- **Framer Motion** — scroll reveals, modal transitions, the "about" expand
- **Canvas API** — the animated starfield (no heavy 3D library)
- **lucide-react** — icon set
- **Vercel Serverless Function + Resend** — powers the contact form
- **Vercel** — hosting, deploys on every push to `main`

<br/>

## 📂 Project Structure

```
maram-portfolio/
├── api/
│   └── contact.js          # Serverless function → emails me via Resend
├── public/
│   ├── resume.pdf
│   ├── demos/               # project demo clips / screenshots
│   └── certificates/        # certificate images
├── src/
│   ├── components/          # Navbar, Hero, About, Projects, Skills,
│   │                         # Experience, Achievements, Contact,
│   │                         # Background, CustomCursor, Reveal
│   ├── context/
│   │   └── ThemeContext.jsx # light/dark mode
│   ├── data/                # projects.js, skills.js, timeline.js, certificates.js
│   ├── App.jsx
│   └── index.css            # design tokens + all component styles
└── index.html
```

Content lives in plain data files under `src/data/` — adding a project, skill, timeline entry, or certificate means editing a data file, not the components.

<br/>

## 🚀 Run it locally

```bash
git clone https://github.com/maram-kouki03/maram-portfolio.git
cd maram-portfolio
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build      # production build → /dist
npm run preview    # preview the build locally
```

> The contact form's `/api/contact` route only runs on Vercel (or via `vercel dev`) — plain `npm run dev` won't send real emails.

<br/>

## 🌐 Deployment

Live on **Vercel**, connected to this repo — every push to `main` redeploys automatically.

```
Production: https://maramkouki.me
Preview:    https://maram-portfolio-ten.vercel.app
```

Environment variable required for the contact form: `RESEND_API_KEY` (set in Vercel → Settings → Environment Variables).

<br/>

## 📄 License

MIT — feel free to fork the structure for your own portfolio, just swap the content in `src/data/` for yours.

<br/>

## 📬 Contact

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-maramkouki.me-8B5CF6?style=for-the-badge)](https://maramkouki.me)
[![GitHub](https://img.shields.io/badge/GitHub-maram--kouki03-181717?style=for-the-badge&logo=github)](https://github.com/maram-kouki03)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-maram--kouki-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/maram-kouki-b51861244/)
[![Email](https://img.shields.io/badge/Email-maram.kouki%40supcom.tn-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maram.kouki@supcom.tn)

</div>