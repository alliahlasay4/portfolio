# Portfolio Audit & Refactoring Plan

**Project:** `c:/Users/Alliah/Documents/projects/portfolio-1` (and certificate assets in `c:/Users/Alliah/Documents/projects/portfolio`)  
**Goal:** Make the portfolio simple, clean, professional, and progressive for a Frontend Developer.

---

## 1. Dead Files, Orphans & Dependencies to Remove Immediately

Cleaning these up will shrink bundle size, remove ~2.8 MB of unused repository weight, and keep the GitHub repository clean for hiring managers:

### Unused Dependencies (`package.json`)
- **`framer-motion` (`^12.35.2`)**: Installed in `dependencies` (adding significant bundle weight), but **only** imported in an unused legacy file (`src/sections/Achievements.jsx`). Meanwhile, `DESIGN.md` mandates pure hardware-accelerated CSS transitions.
  - **Action:** Uninstall `framer-motion`.
- **`gh-pages` scripts**: `package.json` contains `"homepage": "https://alliahlasay4.github.io/portfolio"`, `"predeploy": "npm run build"`, and `"deploy": "gh-pages -d dist"`, yet `gh-pages` is not installed in `devDependencies`, and the repo is configured for Vercel (`vercel.json` + `base: '/'` in `vite.config.js`).
  - **Action:** Remove `homepage`, `predeploy`, and `deploy` from `package.json` if deploying on Vercel.

### Orphaned Code Files (Never Imported Anywhere)
- `src/data/projects.js` — Duplicate legacy project array; the app actually uses `src/data/portfolioData.js`.
- `src/sections/Achievements.jsx` — Legacy component using undefined Tailwind classes (`bg-primary`, `text-dark`). Academic honors are already rendered inside `src/sections/Certifications.jsx`.
- `src/components/ScrollToTop.jsx` — Never rendered in `App.jsx` or `Home.jsx`, and uses broken legacy class `bg-secondary`.

### Unused Portrait & Background Assets (~1.6 MB)
- `src/assets/me.jpg` (82 KB) — Unused (`Hero.jsx` only imports `lasay_2x2.jpg`).
- `src/assets/me.png` (557 KB) — Unused.
- `src/assets/me2.png` (427 KB) — Unused.
- `public/backgrounds/bg.png` (567 KB) — Unused anywhere.
- `public/vite.svg` — Still used as the browser tab favicon in `index.html`. Replace with a custom monogram (`AL`) SVG favicon.

### Unreferenced Project Screenshots (~1.2 MB in `public/projects/`)
The following images exist in `public/projects/` but are not referenced in `src/data/portfolioData.js`:
- `blood-system-5.png` (123.5 KB)
- `blood-system-6.png` (181.3 KB)
- `food-system-3.png` (216.5 KB)
- `loaning-app-4.png` (116.9 KB)
- `todo-app-2.png` (701.7 KB)
- `song-archive-system-1.png` (194.1 KB)
- `song-archive-system-2.png` (182.9 KB)
- `song-archive-system-3.png` (223.6 KB)

---

## 2. UI/UX & Content Audit: What to Remove or Consolidate

To make the portfolio **simple, clean, and progressive for a Frontend Developer**, several sections currently repeat information or dilute your strongest work:

### A. Redundant Personal Highlights (Hero vs. About)
- **Issue:** In `src/sections/Hero.jsx`, the right column has a Developer Profile card with floating badges (`Supsoft Tech Intern`, `DOST Scholar`, `DLSU-D BS IT`) *plus* two highlight cards directly underneath repeating `Supsoft Tech / Frontend Intern` and `DLSU-D IT / DOST Scholar`. Immediately below in `src/sections/About.jsx`, the 4-card grid repeats the exact same 4 facts (`Frontend Intern`, `BS Info Tech`, `DOST Scholar`, `Cavite, Philippines`).
- **Action:**
  1. Remove the redundant 2-card bar underneath the Hero photo card.
  2. Merge **About + Experience** into a single cohesive **"Experience & Background"** section so recruiters see your story and your Supsoft Tech internship in one place without scrolling through repetitive stat cards.

### B. Project Section Clutter (Spotlight Box + 7 Grid Cards)
- **Issue:** `src/sections/Projects.jsx` renders a large "Spotlight Demo" box at the top *and* a 3-column grid below it that repeats the exact same projects, plus a modal when clicked. Furthermore, showcasing **7 projects** (including basic classroom/vanilla exercises like a basic To-Do App, Food Ordering mock, and Java Android apps) dilutes positioning as a modern **React / Frontend Engineer**.
- **Action:**
  1. **Remove the duplicate "Spotlight Preview" box** above the grid (or make the top 3–4 featured projects rich case-study cards and put older/smaller projects in a compact archive table).
  2. **Curate down to 3–4 strongest Frontend/Fullstack projects** (e.g., *Intern Management System (React)*, *Blood Donation Management System*, *Interactive Food Ordering Web App*, or newer workspace projects like *Taktic* / *Movie System*).
  3. **Fix Dead Demo Links:** Every project in `portfolioData.js` currently has `demo: "#"`. Add live deployment URLs where available, or hide the demo logic cleanly.

### C. Certifications & "Planned" Courses
- **Issue:** `src/sections/Certifications.jsx` has its own top-level navbar link and takes up a huge 9-card grid, 4 of which are marked `"Planned Roadmap"` (e.g., *"Build a Resume Using AI - Planned"*). Listing unstarted short courses — especially "Build a Resume Using AI" — looks like padding.
- **New Assets Found in `c:/Users/Alliah/Documents/projects/portfolio`:**
  - Completed certificates and badge PNGs from October 2026 exist in the sibling `portfolio` folder:
    - `HTML Essentials` (`html-essentials.png` + PDF)
    - `JavaScript Essentials 1` (`js-essentials-1.png` + PDF)
    - `JavaScript Essentials 2` (`js-essentials-2.png` + PDF)
    - `Intro to Modern AI` (`intro-to-modern-ai.png` + PDF)
    - `Prompt Like an Engineer` (`prompt-like-an-engineer.png` + PDF)
    - `IT Essentials` (`it-essentials.png` + PDF)
    - `IT Specialist - Databases` (`IT Specialist - Databases.png`)
- **Action:**
  1. Update `portfolioData.js` to reflect the certifications actually **completed** (and copy badge PNGs/PDFs into `portfolio-1/public/certificates` if desired).
  2. **Delete all "Planned" roadmap items** (especially *"Build a Resume Using AI"* and *"Finding Insights Using AI"*).
  3. Combine **Skills & Verified Credentials** into one clean, compact section instead of giving Certifications a massive standalone section before Projects.

### D. Section Ordering (Put Proof of Work First)
- **Current Order:** `Hero → About → Skills → Certifications → Projects → Experience → Contact` (Recruiters must scroll past 4 sections before seeing a single project or internship).
- **Recommended Progressive Frontend Order:**
  1. `Hero` (Clean intro + Photo/Code toggle)
  2. `Projects` (Selected Frontend & Fullstack Case Studies)
  3. `Experience & Background` (Supsoft Tech Internship + Bio + Education/DOST Scholar)
  4. `Skills & Credentials` (Focused Frontend/Web stack + Verified Certifications)
  5. `Contact` (Streamlined direct contact CTA)

### E. Contact Section Over-Engineering
- **Issue:** `src/sections/Contact.jsx` has a 4-field form (`Name`, `Email`, `Subject`, `Message`) that only triggers `window.location.href = "mailto:..."`. On many desktop browsers without a configured local mail app, `mailto:` forms fail silently after a user types a message.
- **Action:** Either wire the form to a real free endpoint (Formspree / Web3Forms) OR remove the fake form and make the Contact section a clean, high-impact CTA section with one-click **Copy Email**, **LinkedIn**, **GitHub**, and **Download CV**.

---

## 3. Code & Design System Bugs to Fix

1. **Broken Tailwind Tokens (`brand-blue` & `brand-cyan`):**
   - `tailwind.config.js` only defines `brand.indigo` (`#4F46E5`), `brand.sky` (`#0284C7`), and `brand.emerald` (`#059669`).
   - However, `About.jsx`, `Skills.jsx`, `Experience.jsx`, `Footer.jsx`, `ProjectModal.jsx`, and `Certifications.jsx` use `text-brand-blue`, `bg-brand-blue`, and `text-brand-cyan` — which compile to **nothing** (resulting in invisible icon backgrounds and unstyled text).
   - **Fix:** Replace all `brand-blue` and `brand-cyan` references with `brand-indigo` and `brand-sky`.

2. **Background Color Mismatches:**
   - `index.html` sets `bg-[#FAFAFA] dark:bg-[#090D16]`, `Home.jsx` sets `bg-slate-50 dark:bg-slate-950`, and `tailwind.config.js` defines `canvas-light: #F8FAFC` and `canvas-dark: #111827`.
   - **Fix:** Standardize on `bg-canvas-light dark:bg-canvas-dark` across `index.html`, `Home.jsx`, and section containers.

3. **Design Spec Violations (`DESIGN.md`):**
   - `src/sections/Skills.jsx` line 81 uses an emoji (`⚡ {item}`) despite `DESIGN.md` banning emojis in badges/headings.
   - `src/sections/Skills.jsx` lists `C#`, `C++`, `Dart`, `Java`, `Python`, `jQuery` alongside React. Trim or group non-frontend coursework languages so **React, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3, REST APIs, Git, Figma, and Vite** take center stage.

4. **Theme Context Bug (`src/context/ThemeContext.jsx`):**
   - Line 9 has `window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "dark"` — ternary returns `"dark"` on both branches.

5. **Boilerplate `README.md`:**
   - Replace the default Vite template `README.md` with a clean project overview, tech stack, and local development instructions.

---

## 4. Implementation Checklist

- [x] **Phase 1: Cleanup & Bug Fixes**
  - [x] Delete `src/data/projects.js`, `src/sections/Achievements.jsx`, `src/components/ScrollToTop.jsx`
  - [x] Delete unused assets (`src/assets/me.jpg`, `me.png`, `me2.png`, `public/backgrounds/bg.png`, unused `public/projects/*` images)
  - [x] Remove `framer-motion` and unused `gh-pages` scripts from `package.json`
  - [x] Fix `brand-blue` / `brand-cyan` classes across all components
  - [x] Fix `ThemeContext.jsx` ternary and unify canvas background colors in `index.html` and `Home.jsx`
  - [x] Add custom `AL` SVG favicon and update `README.md`
- [x] **Phase 2: Content & Data Update (`portfolioData.js`)**
  - [x] Update `certifications` with completed October 2026 certificates (`JavaScript Essentials 2`, `Intro to Modern AI`, `Prompt Like an Engineer`, `IT Essentials`) and remove `"planned"` filler items
  - [x] Refine `skills` to highlight Frontend Engineering & Tools without college language clutter
  - [x] Curate `projects` to highlight strongest Frontend/Fullstack work
- [x] **Phase 3: Layout & Section Streamlining**
  - [x] Reorder `Home.jsx` to `Hero → Projects → Experience & About → Skills & Certifications → Contact`
  - [x] Remove redundant highlight cards in `Hero.jsx`
  - [x] Remove duplicate Spotlight box in `Projects.jsx`
  - [x] Consolidate `About.jsx` + `Experience.jsx`
  - [x] Streamline `Contact.jsx`
