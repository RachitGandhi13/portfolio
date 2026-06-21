# Rachit Gandhi — Portfolio

Personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Theming | next-themes (dark / light) |
| Deployment | Vercel |

## Project structure

```
├── app/
│   ├── globals.css         # Tailwind base + custom utilities (CSS vars, marquee, grain)
│   ├── layout.tsx          # Root layout — fonts, metadata, ThemeProvider
│   └── page.tsx            # Assembles all sections
├── components/
│   ├── Providers.tsx       # next-themes ThemeProvider wrapper
│   ├── Navbar.tsx          # Sticky nav — mobile menu, theme toggle, resume download
│   ├── Header.tsx          # Full-height hero with parallax background
│   ├── About.tsx           # Bio, portrait, stats
│   ├── Projects.tsx        # 4 featured projects with parallax image cards
│   ├── ServicesSection.tsx # Skill groups + marquee
│   ├── Experience.tsx      # Timeline + achievements sidebar
│   ├── Contact.tsx         # Contact form + direct links
│   └── Footer.tsx          # Footer
└── public/
    ├── RachitRESUME.pdf    # Resume (linked from navbar)
    ├── profile.jpg         # Portrait used in About
    ├── d2c.png             # D2C Campaign Engine project image
    ├── drawApp.png         # Inkboard project image
    └── videoCall.png       # Aurora Connect project image
```

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Updating content

All content is inline in each component — edit the relevant file directly:

| What | File |
|---|---|
| Hero text / description | `components/Header.tsx` |
| About bio / stats | `components/About.tsx` |
| Projects | `components/Projects.tsx` |
| Skills | `components/ServicesSection.tsx` |
| Experience / education | `components/Experience.tsx` |
| Contact / socials | `components/Contact.tsx` |

## Resume

Replace `public/RachitRESUME.pdf` with your updated PDF — the navbar download link picks it up automatically.

## Deploy to Vercel

Push to GitHub, then import the repo at vercel.com → New Project. Vercel auto-detects Next.js — leave all settings at defaults and click Deploy.

## Lint & type-check

```bash
npm run lint
npm run build
```
