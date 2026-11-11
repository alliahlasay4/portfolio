export const portfolioData = {
  personal: {
    name: "Alliah Cassandra B. Lasay",
    role: "Frontend Developer",
    subtitle: "Building responsive, tested web applications with React, TypeScript & modern web tech",
    bioShort: "IT graduate specializing in React, TypeScript, and Tailwind CSS. I turn Figma designs into clean, accessible interfaces backed by automated tests.",
    email: "alliahlasay4@gmail.com",
    phone: "0928 - 659 - 3680",
    location: "Santa Maria, Bulacan",
    github: "https://github.com/alliahlasay4",
    linkedin: "https://www.linkedin.com/in/alliah-cassandra-lasay-28519326a/",
    cvUrl: "/Lasay_Resume.pdf"
  },

  skills: {
    Frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    "Testing & Tooling": ["Vite", "Vitest", "React Testing Library", "Playwright"],
    "Backend & DB": ["Supabase", "PostgreSQL"],
    "Tools & Design": ["Git", "GitHub", "Vercel", "Figma", "ClickUp", "Adobe Photoshop", "Canva"]
  },

  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Supsoft Tech",
      period: "2026",
      location: "Remote",
      type: "Internship",
      description: "Built the intern-facing web portal for an internal internship management system from Figma designs using React and Tailwind CSS.",
      points: [
        "Implemented core features including daily attendance tracking (time-in/out, rendered hours calculation), document submission forms, and light/dark mode theming.",
        "Handled client-side routing, state management, form validation, and downloadable monthly PDF report exports using jsPDF.",
        "Worked with UI/UX designers, QA, and backend teammates in ClickUp, using AI-assisted debugging to quickly triage and fix frontend issues across testing cycles."
      ],
      tech: ["React", "JavaScript", "Tailwind CSS", "jsPDF", "Figma", "ClickUp", "Git"]
    }
  ],

  certifications: [
    {
      category: "Frontend & Web Development",
      items: [
        {
          title: "JavaScript Essentials 2",
          issuer: "Cisco Networking Academy",
          date: "Oct 2026",
          badgeUrl: "/certifs-badges/js-essentials-2.png",
          pdfUrl: "/certifs-badges/JavaScript_Essentials_2_certificate_alliahlasay4-gmail-com_76aabad6-4927-4a18-9289-1eef0cbf9ddf.pdf"
        },
        {
          title: "JavaScript Essentials 1",
          issuer: "Cisco Networking Academy",
          date: "Sep 2026",
          badgeUrl: "/certifs-badges/js-essentials-1.png",
          pdfUrl: "/certifs-badges/JavaScript_Essentials_1_certificate_alliahlasay4-gmail-com_e99b0004-2f72-48b0-9540-15db9a8c73e6.pdf"
        },
        {
          title: "HTML Essentials",
          issuer: "Cisco Networking Academy",
          date: "May 2026",
          badgeUrl: "/certifs-badges/html-essentials.png",
          pdfUrl: "/certifs-badges/HTML_Essentials_certificate_alliahlasay4-gmail-com_9aeb8c41-139e-4289-9119-d71360ca17bc.pdf"
        },
        {
          title: "IT Essentials",
          issuer: "Cisco Networking Academy",
          date: "2026",
          badgeUrl: "/certifs-badges/it-essentials.png",
          pdfUrl: "/certifs-badges/ITEssentialsUpdate20261023-20-wx61ty.pdf"
        },
        {
          title: "TOEIC Certificate",
          issuer: "Hopkins International Partners, Inc.",
          date: "2026 – 2028"
        },
        {
          title: "Principles of Graphic Design",
          issuer: "University of the Philippines Open University",
          date: "Apr 2024",
          pdfUrl: "/certifs-badges/Certificate_for_Principles_of_Graphic_Design_(April_2024)-CA_64217.pdf"
        }
      ]
    },
    {
      category: "AI & Modern Engineering",
      items: [
        {
          title: "Prompt Like an Engineer",
          issuer: "Cisco Networking Academy",
          date: "Oct 2026",
          badgeUrl: "/certifs-badges/prompt-like-an-engineer.png",
          pdfUrl: "/certifs-badges/Prompt_Like_an_Engineer_certificate_alliahlasay4-gmail-com_84612d05-24c0-4ad2-9afa-3cfa14bde3a0.pdf"
        },
        {
          title: "Introduction to Modern AI",
          issuer: "Cisco Networking Academy",
          date: "Oct 2026",
          badgeUrl: "/certifs-badges/intro-to-modern-ai.png",
          pdfUrl: "/certifs-badges/Introduction_to_Modern_AI_certificate_alliahlasay4-gmail-com_e239001d-39e0-43b1-9fb0-e99654c5d8e7.pdf"
        }
      ]
    }
  ],

  honors: [
    {
      title: "DOST Scholar",
      organization: "Department of Science and Technology (DOST)",
      period: "2022 – 2026",
      description: "Department of Science and Technology national undergraduate science and technology scholar."
    },
    {
      title: "Dean’s List",
      organization: "De La Salle University - Dasmariñas",
      period: "2022 – 2026",
      description: "Consistent academic honor awardee for high academic achievement."
    }
  ],

  education: {
    institution: "De La Salle University - Dasmariñas",
    degree: "Bachelor of Science in Information Technology",
    specialization: "Web Development",
    period: "2022 – 2026"
  },

  projects: [
    {
      id: "taktic",
      title: "Taktic",
      category: "React / Frontend",
      featured: true,
      summary: "An installable habit, task, and focus timer PWA built for offline reliability, featuring local sync queuing, procedural ambient audio, and shared accountability Circles.",
      highlights: [
        "Offline-first sync queue storing local tasks, habits, and focus logs for instant optimistic UI updates with automatic Supabase sync",
        "Custom SVG progress rings and procedural ambient focus audio using the Web Audio API",
        "Shared accountability Circles with live activity feeds and friend invites backed by PostgreSQL & Row-Level Security",
        "Automated test suites with Vitest and Playwright covering date logic, offline-to-online syncing, and core user flows"
      ],
      role: "Solo Project",
      date: "2026",
      tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite", "Vitest", "Playwright"],
      github: "https://github.com/alliahlasay4/taktic",
      demo: "https://taktic-puce.vercel.app/",
      images: [
        "/screenshots/taktic-1.jpg",
        "/screenshots/taktic-2.jpg",
        "/screenshots/taktic-3.jpg",
        "/screenshots/taktic-4.jpg",
        "/screenshots/taktic-5.jpg",
        "/screenshots/taktic-6.jpg",
        "/screenshots/taktic-7.jpg",
        "/screenshots/taktic-8.jpg",
        "/screenshots/taktic-9.jpg",
        "/screenshots/taktic-10.jpg",
        "/screenshots/taktic-11.jpg"
      ]
    },
    {
      id: "lumina",
      title: "Lumina",
      category: "React / Frontend",
      featured: true,
      summary: "A responsive, offline-capable movie discovery PWA aggregating TMDB metadata, IMDb/Rotten Tomatoes/Metacritic ratings, and natural-language Gemini AI search.",
      highlights: [
        "Aggregated TMDB metadata, regional streaming availability, and multi-source critic ratings",
        "Natural-language mood and plot search via Google Gemini with offline and rate-limit fallbacks",
        "In-memory API caching, card hover prefetching, lazy routes, and service worker caching",
        "Role-protected admin dashboard, cross-tab state sync, and test coverage with Vitest and React Testing Library"
      ],
      role: "Solo Project",
      date: "2026",
      tech: ["React", "React Router", "Tailwind CSS", "Gemini API", "PWA", "Vitest", "Testing Library"],
      github: "https://github.com/alliahlasay4/movie-system",
      demo: "https://movie-system-ten.vercel.app/",
      images: [
        "/screenshots/lumina-1.jpg",
        "/screenshots/lumina-2.jpg",
        "/screenshots/lumina-3.jpg",
        "/screenshots/lumina-4.jpg",
        "/screenshots/lumina-5.jpg",
        "/screenshots/lumina-6.jpg",
        "/screenshots/lumina-7.jpg",
        "/screenshots/lumina-8.jpg",
        "/screenshots/lumina-9.jpg",
        "/screenshots/lumina-10.jpg",
        "/screenshots/lumina-11.jpg"
      ]
    },
    {
      id: "intern-management-system",
      title: "Intern Management System",
      category: "React / Frontend",
      featured: true,
      summary: "Intern-facing web portal built from Figma designs to replace manual attendance tracking, document submissions, and monthly reporting.",
      highlights: [
        "Daily attendance tracking with time-in/out logging and automatic rendered hours calculation",
        "Document submission workflows with client-side validation and responsive light/dark themes",
        "Downloadable monthly PDF summary reports generated client-side with jsPDF",
        "Built in collaboration with UI/UX, QA, and backend teammates using ClickUp and Git"
      ],
      role: "Frontend Intern",
      date: "2026",
      tech: ["React", "JavaScript", "Tailwind CSS", "jsPDF", "Figma", "ClickUp", "Git"],
      github: "https://github.com/alliahlasay4/inturn",
      demo: "",
      images: [
        "/screenshots/inturn-1.jpg",
        "/screenshots/inturn-2.jpg",
        "/screenshots/inturn-3.jpg",
        "/screenshots/inturn-4.jpg",
        "/screenshots/inturn-5.jpg",
        "/screenshots/inturn-6.jpg",
        "/screenshots/inturn-7.jpg",
        "/screenshots/inturn-8.jpg"
      ]
    }
  ]
};
