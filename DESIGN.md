# Design System: Alliah Cassandra Lasay — Portfolio

## 1. Visual Theme & Atmosphere
A restrained, high-agency engineering portfolio with confident asymmetric layouts, split-screen hero architecture, and fluid CSS transitions. The atmosphere is clinical yet sophisticated — combining deep slate surfaces (`#111827`), crisp typography, and targeted indigo/cyan accent highlights (`#4F46E5` & `#0284C7`).

## 2. Color Palette & Roles
- **Dark Canvas Background** (`#111827`) — Soft slate-900 background surface
- **Dark Surface Card** (`#1F2937`) — Slate-800 card and section container fill
- **Light Canvas Background** (`#F8FAFC`) — Soft slate-50 background surface
- **Light Surface Card** (`#FFFFFF`) — Pure white card fill
- **Primary Text Dark** (`#F9FAFC`) — High contrast text
- **Secondary Text Slate** (`#94A3B8`) — Metadata, descriptions, and labels
- **Subtle Border** (`#374151` dark / `#E5E7EB` light) — Card borders and structural lines
- **Single Accent Indigo** (`#4F46E5`) — Primary CTA buttons, active state highlights, and focus rings
- **Secondary Accent Sky** (`#0284C7`) — Status indicators and active tag borders

## 3. Typography & Text Wrapping Rules
- **Display & Headings:** `Plus Jakarta Sans` — Track-tight (`tracking-tight`), weight-driven hierarchy.
- **Body Text:** `Plus Jakarta Sans` — Relaxed leading (`leading-relaxed`), max-width 65 characters (`max-w-prose`), secondary slate text.
- **Mono / Code:** `JetBrains Mono` / `ui-monospace` — Used for technical tags, dates, and credential badges.
- **Word Wrapping Mandate:** All text containers must use `break-words overflow-wrap-break-word` to guarantee zero text overflow outside parent card borders.

## 4. Component Stylings & Responsive Bounds
- **Buttons:** Tactile flat buttons. No neon outer glow. Subtle hover translate (`-translate-y-0.5`). Primary indigo fill (`bg-indigo-600`), ghost border for secondary actions.
- **Project Cards (`ProjectCard.jsx`):** Generously rounded corners (`rounded-2xl`). Must enforce `w-full max-w-full overflow-hidden break-words min-w-0`. Inner padding and text blocks must never spill outside card borders across mobile (<768px), tablet (768px–1024px), or desktop (>1024px) viewports.
- **Cards & Surface Panes:** 1px subtle borders (`border-slate-700` dark / `border-slate-200` light).
- **Inputs & Forms:** Label above input, clean focus ring in indigo accent color.

## 5. Viewport Responsiveness & Layout Architecture
- **Zero Horizontal Scroll Mandate:** `html`, `body`, `#root`, and all `<section>` containers must strictly adhere to `w-full max-w-full overflow-x-hidden`. No horizontal scrolling on mobile viewports.
- **Flex Child Safety (`min-w-0`):** Every flexbox parent must set `min-w-0` on child elements to prevent long text strings or flex items from forcing viewport overflow.
- **Hero Architecture:** Asymmetric split-screen layout. Left-aligned typography hierarchy paired with right-column structured visual card.
- **Mobile-First Collapse:** All multi-column layouts collapse cleanly to single-column under 768px.
- **Tablet Layout Optimization (768px–1024px):** 2-column balanced grids for projects, certifications, and skills.

## 6. Motion & Interaction
- **Transitions:** Smooth, hardware-accelerated CSS transitions (`transition-all duration-200 ease-out`).
- **Tactile Feedback:** Subtle hover elevation (`-translate-y-1`) and active state compression (`scale-[0.98]`).

## 7. Anti-Patterns (Banned)
- No horizontal viewport scrolling or forced zoom-out on mobile
- No card text spilling outside card borders (`break-words` enforced everywhere)
- No emojis anywhere in UI headings or badges
- No `Inter` font usage
- No pure black (`#000000`)
- No neon outer glow shadows or purple gradients
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen")
- No fabricated statistics or invented performance numbers
- No filler UI text ("Scroll to explore", "Swipe down")
