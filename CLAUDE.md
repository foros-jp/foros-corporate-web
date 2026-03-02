# FOROS Corporate Website

## Overview
FOROS株式会社のコーポレートサイト。Astro + Tailwind CSS v4 で構築。
GitHub Pages でホスティング（0円運用）。

## Tech Stack
- **Framework:** Astro 5.x (Static Site Generator)
- **Styling:** Tailwind CSS 4.x (CSS-first config via `@theme`)
- **Hosting:** GitHub Pages (custom domain: foros.jp)
- **CI/CD:** GitHub Actions (push to main → auto build → deploy)

## Project Structure
```
src/
├── layouts/Layout.astro     # Base HTML with SEO/OGP/JSON-LD
├── components/              # Reusable Astro components
│   ├── Header.astro         # Fixed header with glassmorphism
│   ├── Hero.astro           # Animated SVG constellation hero
│   ├── Services.astro       # Analysis/Planning/Execution cards
│   ├── Product.astro        # Sitrom-CC showcase
│   ├── Stories.astro        # Solution stories bento grid
│   ├── About.astro          # Company info
│   ├── Contact.astro        # Contact form (mailto-based)
│   └── Footer.astro         # Site footer
├── pages/
│   ├── index.astro          # Homepage (single-page sections)
│   └── careers.astro        # Careers page
└── styles/
    └── global.css           # Tailwind theme + animations + utilities
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build for production (outputs to `dist/`)
- `npm run preview` — Preview production build locally

## Design System
- **Colors:** Dark theme — surface #050507, primary #818cf8, accent #22d3ee, emerald #34d399
- **Fonts:** Inter + Noto Sans JP (body), JetBrains Mono (code/accents)
- **Animations:** CSS @keyframes + IntersectionObserver scroll triggers
- **Classes:** `.anim` (fade up), `.anim-left` / `.anim-right` (slide), `.stagger` (children delay), `.card` / `.glass` (containers), `.gradient-text`, `.svg-draw`

## SEO
- JSON-LD structured data (Organization)
- OGP & Twitter Card meta tags
- Auto-generated sitemap via @astrojs/sitemap
- Semantic HTML5 sections
- Custom robots.txt

## Deployment
Push to `main` or `master` branch triggers GitHub Actions workflow:
1. Checkout → Node 22 → npm ci → npm run build
2. Upload `dist/` as Pages artifact
3. Deploy to GitHub Pages
