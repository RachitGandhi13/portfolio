# Rachit Gandhi — Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Theming | next-themes (dark / light) |
| Deployment | Vercel |

## Project structure

```
├── app/
│   ├── globals.css       # Tailwind base + custom utilities
│   ├── layout.tsx        # Root layout — fonts, metadata, Providers
│   └── page.tsx          # Assembles all sections
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu + theme toggle
│   ├── Hero.tsx          # Full-height hero with CTA buttons
│   ├── About.tsx         # Bio + skill tags
│   ├── Experience.tsx    # Work history cards
│   ├── Projects.tsx      # Project cards with tech badges
│   ├── Education.tsx     # Education + achievements
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Footer with social icons
│   ├── ThemeToggle.tsx   # Sun / Moon toggle
│   ├── SectionHeader.tsx # Reusable numbered section header
│   └── Providers.tsx     # next-themes ThemeProvider wrapper
├── data/
│   └── portfolio.ts      # All content — edit here, not in components
└── public/
    └── resume.pdf        # Drop your resume PDF here
```

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Adding your resume

Drop your PDF into `public/resume.pdf`. The "Resume" button in the Hero links to `/resume.pdf` automatically.

## Updating content

All data lives in `data/portfolio.ts`. Edit `personalInfo`, `skills`, `experiences`, `projects`, `education`, or `achievements` — components re-render automatically.

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel          # follow the prompts; Vercel auto-detects Next.js
```

### Option B — GitHub → Vercel dashboard

```bash
# 1. Create a new repo on github.com, then:
git init
git add .
git commit -m "Initial commit — portfolio"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main

# 2. Go to vercel.com → New Project → import the repo
# 3. Leave all settings at their defaults and click Deploy
```

Vercel will give you a `.vercel.app` URL immediately.

## Lint & type-check

```bash
npm run lint
npm run build   # also runs tsc
```
