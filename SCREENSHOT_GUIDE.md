# Featured Projects Screenshot & Slideshow Guide

This reference guide outlines the recommended screenshots, routes, interactive states, and Light/Dark mode pairings for the **Featured Projects** slideshow in [`Projects.jsx`](./src/sections/Projects.jsx), [`ProjectModal.jsx`](./src/components/projects/ProjectModal.jsx), and [`portfolioData.js`](./src/data/portfolioData.js).

---

## General Capture Guidelines

- **Viewport & Aspect Ratio:** Capture at **16:9 (`1440×810` or `1600×900`)** so screenshots fit cleanly inside the `aspect-video` containers in [`Projects.jsx`](./src/sections/Projects.jsx) and [`ProjectModal.jsx`](./src/components/projects/ProjectModal.jsx) without cropping top navbars or bottom controls.
- **Light vs. Dark Mode Strategy:** Use **6 slides per project**. Pair **Slide 1 & Slide 2** to contrast Dark vs. Light mode on the primary workspace, then alternate themes across **Slides 3–6** to showcase core engineering features.
- **Asset Destination:** Screenshots are stored in `portfolio-1/public/screenshots/` and referenced in [`portfolioData.js`](file:///C:/Users/Alliah/Documents/projects/portfolio-1/src/data/portfolioData.js) under each project's `images` array (total of 30 screenshots across Taktic, Lumina, and InTurn).

---

## 1. Taktic (`taktic-1`)

**Engineering Claims to Prove:** Installable PWA, Focus Hub daily planning, custom SVG habit rings with streak shields, Web Audio API background soundscapes, shared accountability Circles (Supabase RLS), and Recharts analytics.

> **Setup Tip:** Click **"Try Interactive Demo"** on the landing page (`/focushub`) and set `localStorage.setItem('taktic_onboarding_completed', 'true')` so the workspace is populated with realistic tasks, habits, and social feed posts.

| Slide | Theme | Route / View | Source Component | What to Focus On & Capture |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Dark Mode** | `/focushub` (Focus Hub) | `src/components/dashboard/DashboardView.tsx` | Main workspace showing **"Today's 3 Must-Dos"** (Priority Focus Queue), **Daily Rhythm** checklist, active streak badge in the navbar, and sidebar navigation. Turn on a navbar ambient sound (e.g., *Gentle Rain*) so the active audio indicator is visible. |
| **2** | **Light Mode** | `/inbox` (Inbox + Tactical Drawer) | `src/components/inbox/InboxView.tsx`<br>`src/components/common/TacticalDrawer.tsx` | Switch to Light Mode and open the **Tactical Drawer** (`Ctrl+J` Quick Notes or Calendar drawer) on the right side to demonstrate theme contrast and multi-pane layout density. |
| **3** | **Dark Mode** | `/focus` (Immersive Deep Focus) | `src/components/focus/FocusView.tsx` | Full-screen Pomodoro focus room with the timer running, active task selected, time-block pills, and the **Web Audio API Ambient Soundscape** selector active. |
| **4** | **Light Mode** | `/habits` (Habit Rings) | `src/components/habits/HabitView.tsx` | Habit routines view highlighting **custom SVG progress rings**, consecutive streak counters, and freeze shield indicators. |
| **5** | **Dark Mode** | `/circles` (Social Circles) | `src/components/circles/CirclesView.tsx` | Accountability Circles tab showing circle members, live online/focus presence indicators, and the shared achievement activity feed. |
| **6** | **Light Mode** | `/analytics` (Insights & Recap) | `src/components/analytics/AnalyticsView.tsx` | Recharts data visualizations showing focus session distribution, completion trends, and productivity metrics. |

**Suggested Filenames (`public/projects/`):**
- `/projects/taktic-1-focus-hub-dark.png`
- `/projects/taktic-2-inbox-drawer-light.png`
- `/projects/taktic-3-deep-focus-dark.png`
- `/projects/taktic-4-habit-rings-light.png`
- `/projects/taktic-5-social-circles-dark.png`
- `/projects/taktic-6-analytics-light.png`

---

## 2. Lumina (`movie-system-main`)

**Engineering Claims to Prove:** TMDB discovery, aggregated multi-source critic ratings (IMDb, Rotten Tomatoes, Metacritic), Google Gemini AI Cinema Concierge ("Lumi"), personal library & custom collections, and role-protected Admin analytics.

> **Setup Tip:** Demo accounts are seeded automatically via `seedDemoData.js`. Sign in as Member (`cinephile@moviehub.com` / `123456`) for Slides 1–5, and Admin (`admin@gmail.com` / `123456`) for Slide 6. Existing captures can also be found in `movie-system-main/docs/screenshots/`.

| Slide | Theme | Route / View | Source Component | What to Focus On & Capture |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Dark Mode** | `/` (Member Discovery Hero) | `src/pages/Home.jsx`<br>`src/components/Hero.jsx` | Signed in as Member (`Elena Rostova`), showing the featured hero backdrop, navigation bar, and horizontal movie carousels. |
| **2** | **Light Mode** | `/` (Member Discovery Hero) | `src/pages/Home.jsx`<br>`src/context/ThemeProvider.jsx` | Same discovery view switched to **Light Mode** to highlight zero-flash theme tokens, clean surface hierarchy, and card contrast. |
| **3** | **Dark Mode** | Lumi AI Concierge Modal | `src/components/AIConciergeModal.jsx` | Trigger Lumi AI modal with a natural-language prompt (e.g., *"rainy neo-noir thrillers"* or *"Mind-Bending Twists"*) showing Gemini's curated recommendations hydrated with live TMDB posters. |
| **4** | **Light Mode** | `/movie/:slug` or QuickView Dossier | `src/pages/MovieDetails.jsx`<br>`src/components/CriticRatings.jsx` | Movie details view clearly displaying aggregated **IMDb, Rotten Tomatoes, and Metacritic score badges**, regional streaming availability, and cast cards. |
| **5** | **Light Mode** | `/library` (Member Library) | `src/pages/Library.jsx` | Personal library showing `Watchlist / Watching / Completed` status tabs, custom user collections, and saved films. |
| **6** | **Dark Mode** | `/admin/analytics` (Admin Suite) | `src/pages/AdminAnalytics.jsx` | Signed in as Admin (`Alexander Vance`), showcasing catalog telemetry, localStorage quota metrics, and the `"View as User"` role-switching header. |

**Suggested Filenames (`public/projects/`):**
- `/projects/lumina-1-hero-dark.png`
- `/projects/lumina-2-hero-light.png`
- `/projects/lumina-3-lumi-ai-dark.png`
- `/projects/lumina-4-movie-dossier-light.png`
- `/projects/lumina-5-member-library-light.png`
- `/projects/lumina-6-admin-analytics-dark.png`

---

## 3. InTurn — Intern Portal Only (`inturn`)

**Engineering Claims to Prove:** Intern-facing portal built from Figma designs, daily attendance tracking (time-in/out & rendered hours calculation), document/report submission workflows with client-side validation, downloadable monthly PDF reports using `jsPDF`, and Light/Dark mode theming.

> **Important Scope Note:** Only capture `/intern/*` routes (the intern-facing side you engineered). Do not include `/admin/*` views.

| Slide | Theme | Route / View | Source Component | What to Focus On & Capture |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Light Mode** | `/intern` (Intern Dashboard) | `src/pages/InternDashboard.jsx`<br>`src/components/Intern/AttendanceTracker.jsx` | Main intern dashboard grid showing the `WelcomeCard`, **Attendance Tracker** (with the daily 8-hour progress bar and Time-In button), **Submission Status**, **Attendance Summary**, **Documents Summary**, and **Performance Review** cards. |
| **2** | **Dark Mode** | `/intern` (Dashboard + Theme Menu) | `src/components/Intern/Header.jsx`<br>`src/context/ThemeContext.jsx` | The `/intern` dashboard in **Dark Mode** (showing `logo-dark.png` and dark card surfaces) with the top-right profile dropdown open to highlight the `"Light Mode / Dark Mode"` theme switcher. |
| **3** | **Light Mode** | `/intern/attendance` (Attendance History Tab) | `src/pages/InternAttendance.jsx` | **Attendance History** tab showing the circular Time-In display, Total Hours counter, Time Out button, status legend (`Late`, `On Time`, `Absent`, `Undertime`), and the filterable attendance table below. |
| **4** | **Dark Mode** | `/intern/attendance` (Monthly Summary & jsPDF Export) | `src/components/Intern/MonthlyOverallSummary.jsx`<br>`src/components/Intern/MonthlySummary.jsx` | Switch to the **Monthly Summary** tab to capture the **Overall Summary** stat cards (`Total Hours / 600`, `Present Days / 75`), the **`⬇ Download DTR`** button (powered by `jsPDF` + `jspdf-autotable`), and the 12-month **Donut Chart** cards below. |
| **5** | **Light Mode** | `/intern/reports` (Daily Report Modal Open) | `src/pages/InternReports.jsx`<br>`src/components/Intern/DailyReportModal.jsx` | Submitted Documents table (`Verified` / `Pending` status pills) in the background with the **Daily Report Modal** open in the foreground showing Report Title, Tasks Completed, Challenges Faced, and the file dropzone with validation. |
| **6** | **Dark Mode** | `/intern` (Profile Validation Modal) *or* `/intern/documents` | `src/components/Intern/ProfileModal.jsx`<br>`src/pages/InternDocuments.jsx` | Two-column **Profile Modal** in Edit mode (showing `View Only` personal details on the left and editable Contact Details with live `09` phone/email validation on the right), **or** the `/intern/documents` downloadable requirements table. |

**Suggested Filenames (`public/projects/`):**
- `/projects/inturn-1-dashboard-light.png`
- `/projects/inturn-2-dashboard-dark.png`
- `/projects/inturn-3-attendance-history-light.png`
- `/projects/inturn-4-monthly-dtr-pdf-dark.png`
- `/projects/inturn-5-daily-report-modal-light.png`
- `/projects/inturn-6-profile-validation-dark.png`
