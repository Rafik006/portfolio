# rafik006.github.io/portfolio

Personal portfolio of Rafik Mhadhbi — full-stack engineer, AI agents in production, real-time voice.

Live: https://rafik006.github.io/portfolio/

## Stack

- React 18 + Vite 5, Tailwind 3
- framer-motion for reveals, the timeline, the story modal and the tilt cards
- Vanta (globe / birds) on three.js 0.134, loaded lazily and only when motion is allowed
- react-icons, named imports only

## Content

Everything the page says lives in two files:

- `src/data/content.js` — profile, experience eras, ventures, skills, projects
- `src/data/stories.js` — the eight engineering stories; their diagrams are React SVG components in `src/components/diagrams/`

The CV PDFs are served from `public/cv/`.

## Develop

```bash
nvm use            # Node 20 (.nvmrc)
npm ci --legacy-peer-deps
npm run dev        # http://127.0.0.1:5173/portfolio/
npm run build      # dist/
```

Deployment: pushing `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to the `gh-pages` branch.
