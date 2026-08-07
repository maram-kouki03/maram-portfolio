# maram.k — portfolio

A cosmic, terminal-themed personal portfolio built with **React + Vite** and **Framer Motion**.
Custom cursor, light/dark mode, an animated starfield + ringed-planet background, a
typewriter terminal hero, hover-to-play project demos, an infinite tech marquee, a dual
experience/education timeline, a certificates gallery, and a contact form.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To make a production build:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the build locally
```

## Deploy on Vercel

1. Push this folder to a GitHub repo (make sure `package.json` is at the **repo root**).
2. On Vercel → New Project → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`.
4. Deploy.

## Make it yours — where everything lives

All content is in plain data files under `src/data/` and a few marked spots:

| What | Where |
|------|-------|
| Projects (title, blurb, tags, links, demo video) | `src/data/projects.js` |
| Tech stack rows | `src/data/skills.js` |
| Experience & education entries | `src/data/timeline.js` |
| Certificates | `src/data/certificates.js` |
| Hero terminal lines | `LINES` in `src/components/Hero.jsx` |
| About bio + "Read More" text | `src/components/About.jsx` |
| Email / social links | `src/components/Contact.jsx` and `Hero.jsx` |

### Add your assets (put files in `/public`)

- **Resume:** drop `resume.pdf` in `/public` — the Resume buttons already point to `/resume.pdf`.
- **Portrait:** put an image in `/public` (e.g. `portrait.jpg`) and set `PORTRAIT = '/portrait.jpg'` at the top of `src/components/About.jsx`.
- **Project demos:** put clips in `/public` (e.g. `public/demos/fain-demo.mp4`) and set the `video` field for that project in `src/data/projects.js`. Hover autoplays it in the card; clicking opens it full-size in the modal.
- **Certificates:** put images in `/public` and set the `image` field in `src/data/certificates.js` to make the card clickable (opens a lightbox).

### Colors & fonts

Theme tokens (both light and dark) are CSS variables at the top of `src/index.css`
under `:root`, `[data-theme='dark']`, and `[data-theme='light']`. Change the two
accents there (`--accent-purple`, `--accent-blue`) to re-skin the whole site.
Fonts are loaded in `index.html` (Sora + JetBrains Mono).

## Notes

- The contact form has no backend — "Send message" opens the visitor's mail client
  pre-filled to your address. Swap in a service like Formspree in `Contact.jsx` if you
  want submissions in your inbox instead.
- The custom cursor and starfield automatically turn off on touch devices and respect
  `prefers-reduced-motion`.
