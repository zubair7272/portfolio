# Mohammed Zubair Portfolio

Personal portfolio site for Mohammed Zubair — Software Development Engineer at Computacenter, Bengaluru.

**Live site:** [portfolio-sepia-xi-37.vercel.app](https://portfolio-sepia-xi-37.vercel.app/)

![Homepage preview](./public/screenshot-home-light.png)

## What this project is

A single-page portfolio built with the Next.js App Router. Résumé content (about, skills, experience, education, certifications, projects, and contact) lives in `src/app/(main)/page.tsx` as structured React components. There is no separate CMS or database: updates are made directly in the codebase.

## Features

- Responsive layout with section anchors
- Light and dark themes (`next-themes`)
- Scroll-driven section animations (Framer Motion + `react-intersection-observer`)
- Project cards with optional GitHub and live-demo links (rendered only when provided)

## Tech stack

| Layer | Choices |
| --- | --- |
| Framework | Next.js 15, React 19, TypeScript |
| Styling | Tailwind CSS, `tailwindcss-animate` |
| UI | Radix Slot, class-variance-authority, Lucide icons |
| Motion | Framer Motion |
| Deployment | Vercel |

## Architecture

```
src/
├── app/
│   ├── (main)/          # Public portfolio route group
│   │   ├── layout.tsx   # Header + main + footer shell
│   │   └── page.tsx     # All homepage sections and content
│   ├── layout.tsx       # Root layout, fonts, theme provider
│   └── globals.css      # Design tokens and CSS animations
├── components/          # Header, footer, theme toggle, shared UI
├── lib/utils.ts         # `cn()` helper for Tailwind class merging
└── providers/           # Theme provider wrapper
```

**Request flow:** The root layout wraps the app in `ThemeProvider`. The `(main)` layout adds navigation chrome; `page.tsx` renders the full scrollable portfolio as client components with in-view animations.

## Getting started

### Prerequisites

- Node.js 18+ (20 recommended)
- npm

### Installation

```bash
git clone https://github.com/zubair7272/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint (Next.js flat config in `eslint.config.mjs`) |

No environment variables are required for the public portfolio.

## Customization

- **Copy and sections:** Edit `src/app/(main)/page.tsx`.
- **Theme tokens:** CSS variables in `src/app/globals.css`; Tailwind theme in `tailwind.config.js`.
- **Navigation:** `src/components/header.tsx` and `src/components/footer.tsx`.

## Deployment

The site is deployed on Vercel. Push to the default branch or run:

```bash
npm run build
```

Connect the GitHub repository in the Vercel dashboard for automatic preview deployments.

## License

MIT