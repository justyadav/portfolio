# Manish Yadav — Premium Personal Developer Portfolio

> **CTO × CMO | Developer | Tech Entrepreneur**  
> Luxury Creative Agency Aesthetic × Modern Developer Landing Page × Interactive Résumé

---

## 🌟 Overview

This is a developer portfolio built for **Manish Yadav**, combining:
- **Luxury Editorial Layout**: Deep near-black canvas (`#08080D`), oversized typography, Playfair Display editorial serifs, and burgundy accents (`#7B263B`).
- **Dramatic Visual Focus**: Centered portrait with ambient violet illumination (`#9367FF`), subtle floating physics, and dynamic rotating descriptors.
- **Interactive Résumé & Glass Cards**: Translucent information cards (`#15151C`), interactive category filters, career timeline, and capabilities grid.
- **Honest & Non-Fabricated Data Architecture**: All content is centralized in a single configuration file (`src/data/portfolio.ts`) with clear placeholders and zero invented statistics or fake client claims.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | React 19 + TypeScript | Type-safe, reactive component architecture |
| **Build Tool** | Vite 8 + ESBuild | Ultra-fast HMR and optimized production bundles |
| **Styling** | Tailwind CSS v4 | High-performance CSS engine with modern theme tokens |
| **Motion** | Framer Motion 14 | Fluid layout animations, scroll triggers, and micro-interactions |
| **Icons** | Lucide React + Custom SVGs | Cohesive, featherlight icon set |
| **Typography** | Inter & Playfair Display | Seamless pairing of modern sans-serif and editorial serif |

---

## 📁 Project Architecture

```
c:\Users\MANISH\portfolio\
├── public/
│   ├── favicon.svg                          — Custom monogram "MY" vector favicon
│   ├── images/
│   │   ├── portrait.jpg                     — High-resolution portrait photo
│   │   └── projects/                        — Directory for project screenshots & mockups
│   └── og-image.jpg                         — Open Graph preview asset
│
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx                   — Fixed glassmorphism nav with active section pill & mobile drawer
│   │   │   ├── Hero.tsx                     — Dramatic 3-column hero with portrait, glow, and rotating descriptors
│   │   │   ├── About.tsx                    — Editorial asymmetric bio, capabilities, and quote
│   │   │   ├── Expertise.tsx                — 4-column tech capabilities grid with category badges
│   │   │   ├── Projects.tsx                 — Filterable 3-column project showcase (All/Dev/Infra/Automation/Mobile)
│   │   │   ├── Experience.tsx               — Professional timeline (CTO × CMO ArixByte) + "What I Do" panel
│   │   │   ├── Process.tsx                  — 5-step engineering process with progress indicator
│   │   │   ├── Achievements.tsx             — Verified milestones & highlights
│   │   │   ├── Contact.tsx                  — Form with input validation, social profiles & configuration notice
│   │   │   └── Footer.tsx                   — MY Monogram, copyright & back-to-top button
│   │   │
│   │   └── ui/
│   │       ├── CustomCursor.tsx             — Desktop-only physics-based ambient cursor
│   │       └── SectionHeading.tsx           — Reusable editorial section heading component
│   │
│   ├── data/
│   │   └── portfolio.ts                     — ⭐ CENTRAL PORTFOLIO CONFIGURATION (Edit all content here)
│   │
│   ├── hooks/
│   │   ├── useActiveSection.ts              — IntersectionObserver for scroll spy navigation
│   │   └── useReducedMotion.ts              — Accessibility hook for prefers-reduced-motion
│   │
│   ├── utils/
│   │   └── animations.ts                    — Shared Framer Motion variant definitions
│   │
│   ├── App.tsx                              — Main application orchestrator
│   ├── index.css                            — Tailwind CSS v4 configuration, theme variables & utility classes
│   └── main.tsx                             — React StrictMode entry point
│
├── index.html                               — Semantic HTML5 shell with Open Graph meta tags
├── package.json                             — Dependencies and build scripts
└── vite.config.ts                           — Vite build configuration
```

---

## ⚡ Quick Start & Development

### 1. Install Dependencies
```bash
cd c:\Users\MANISH\portfolio
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, minified bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
Serves the `dist/` folder locally at `http://localhost:4173`.

---

## ✏️ How to Personalize Your Content

All data is intentionally decoupled from UI logic. Open [`src/data/portfolio.ts`](file:///c:/Users/MANISH/portfolio/src/data/portfolio.ts):

1. **Social & Contact Links**:
   ```typescript
   export const contact = {
     email: 'your.email@example.com',
     links: {
       linkedIn: 'https://linkedin.com/in/yourprofile',
       github: 'https://github.com/yourhandle',
       arixbyte: 'https://arixbyte.com',
       discord: 'https://discord.gg/yourserver',
     },
   };
   ```
2. **Hero Availability**:
   Update `availability: 'Available for projects'` or set to empty string `''` to hide.
3. **Projects**:
   Add or update items in `projects: Project[]`. Place screenshots in `public/images/projects/`.
4. **Verified Testimonials**:
   Add verified client or team testimonials in the `testimonials` array with `verified: true`. The section automatically hides when empty.
5. **Connecting the Contact Form**:
   The contact form in [`Contact.tsx`](file:///c:/Users/MANISH/portfolio/src/components/sections/Contact.tsx) includes real validation and console logging. To connect email delivery, integrate [EmailJS](https://www.emailjs.com/), [Formspree](https://formspree.io/), or a serverless function endpoint.

---

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Framework preset: **Vite**, Root directory: `./`

### Deploy to Netlify
1. Connect repository or run `netlify deploy --prod`
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to Cloudflare Pages
1. Build command: `npm run build`
2. Build output directory: `dist`

---

## 🎨 Design System Tokens

- **Canvas Background**: `#08080D`
- **Surface / Cards**: `#15151C`
- **Electric Violet (Primary Accent)**: `#9367FF`
- **Burgundy (Secondary Accent)**: `#7B263B`
- **Primary Text**: `#F5F3F7`
- **Muted Text**: `#A5A2AE`
- **Borders**: `#2A2A35`
