export const portfolioData = {
  personal: {
    name: "Alliah Cassandra Lasay",
    role: "Frontend Developer",
    subtitle: "Building clean, accessible & responsive web interfaces",
    bioShort: "BS Information Technology student specializing in Web Development at De La Salle University – Dasmariñas and Frontend Developer Intern at Supsoft Tech. Focused on translating complex Figma designs into performant, user-centric React applications.",
    bioLong: [
      "I am a BS Information Technology student specializing in Web Development at De La Salle University – Dasmariñas. My focus centers on frontend engineering — building responsive, performant, and intuitive user interfaces using modern web technologies like React, JavaScript, and Tailwind CSS.",
      "Currently, as a Frontend Developer Intern at Supsoft Tech, I work alongside engineering teams to translate Figma wireframes into modular React components and integrate frontend layouts with data-driven APIs.",
      "I am committed to continuous technical growth, currently completing advanced Cisco certifications and exploring AI-assisted developer workflows."
    ],
    email: "alliahlasay4@gmail.com",
    phone: "0928 659 3680",
    location: "Cavite, Philippines",
    github: "https://github.com/alliahlasay4",
    linkedin: "https://www.linkedin.com/in/alliah-cassandra-lasay-28519326a/",
    cvUrl: "/Lasay_CV.pdf",
    cvUpdating: true,
  },

  upskillingNotice: {
    title: "Current Technical Focus",
    highlight: "TypeScript, Advanced React Patterns & Modern Web APIs",
    description: "Actively leveling up component architecture, type safety, and modern frontend performance optimization."
  },

  skills: {
    Frontend: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "REST APIs", "Responsive Design"],
    "Tools & Workflow": ["Git", "GitHub", "Vite", "Figma", "VS Code", "npm", "Chrome DevTools"],
    Backend: ["Node.js Basics", "PHP", "MySQL", "MongoDB"],
    Programming: ["JavaScript", "Python", "Java"],
    currentlyLearning: ["TypeScript", "Next.js", "Advanced React Architecture"]
  },

  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Supsoft Tech",
      period: "2026 – Present",
      location: "Remote / On-site",
      type: "Internship",
      description: "Translating Figma design system specs into scalable, responsive React components for client web projects.",
      points: [
        "Developed responsive UI components using React, HTML5, CSS3, and JavaScript.",
        "Translated Figma UI/UX wireframes into functional frontend web pages.",
        "Integrated client-side state and UI components with backend-driven data APIs.",
        "Ensured cross-browser compatibility and mobile responsiveness across multiple screen sizes.",
        "Identified and debugged client-side issues to improve interface usability and load speed."
      ],
      tech: ["React", "JavaScript", "HTML5", "Tailwind CSS", "Figma", "Git"]
    }
  ],

  certifications: [
    {
      category: "Frontend & Web Development",
      items: [
        {
          title: "JavaScript Essentials 2",
          issuer: "Cisco Networking Academy",
          date: "October 2026",
          status: "completed",
          badge: true,
          description: "Advanced JavaScript objects, asynchronous patterns, OOP principles, and modern ES6+ paradigms."
        },
        {
          title: "JavaScript Essentials 1",
          issuer: "Cisco Networking Academy",
          date: "2026",
          status: "completed",
          badge: true,
          description: "Fundamental JavaScript programming concepts, syntax, control structures, and DOM logic."
        },
        {
          title: "HTML Essentials",
          issuer: "DICT-ITU DTC Initiative & Cisco Networking Academy",
          date: "May 2026",
          status: "completed",
          badge: true,
          description: "Comprehensive certification covering HTML5 structure, semantic markup, forms, and web standards."
        },
        {
          title: "Certified IT Specialist – Databases",
          issuer: "Certiport",
          date: "2024",
          status: "completed",
          badge: false,
          description: "Database design principles, relational tables, SQL querying, and structured data handling."
        },
        {
          title: "IT Essentials: PC Hardware and Software",
          issuer: "Cisco Networking Academy",
          date: "2024",
          status: "completed",
          badge: true,
          description: "Computer hardware architecture, operating system fundamentals, network troubleshooting, and security basics."
        }
      ]
    },
    {
      category: "AI & Modern Engineering",
      items: [
        {
          title: "Intro to Modern AI",
          issuer: "Cisco Networking Academy",
          date: "October 2026",
          status: "completed",
          badge: true,
          description: "Foundations of modern AI, LLMs, prompt interfaces, and responsible AI engineering."
        },
        {
          title: "Prompt Like an Engineer",
          issuer: "Cisco Networking Academy",
          date: "October 2026",
          status: "completed",
          badge: true,
          description: "Structured prompt design techniques, system instructions, and leveraging AI for developer productivity."
        },
        {
          title: "Principles of Graphic Design",
          issuer: "University of the Philippines Open University (UPOU)",
          date: "2024",
          status: "completed",
          badge: false,
          description: "Visual composition, typography hierarchy, color theory, and user-centered design principles."
        }
      ]
    }
  ],

  honors: [
    {
      title: "DOST Scholar",
      organization: "Department of Science and Technology (DOST-SEI)",
      period: "2022 – Present",
      description: "Merit-based national science and technology scholarship."
    },
    {
      title: "Dean’s List",
      organization: "De La Salle University – Dasmariñas",
      period: "2022 – Present",
      description: "Consistent academic honor awardee for high academic standing."
    }
  ],

  projects: [
    {
      id: "intern-management-system",
      title: "Intern Management System",
      category: "React / Frontend",
      featured: true,
      problem: "Tracking intern progress, evaluation metrics, and task assignments manually lacked real-time visibility for supervisors.",
      solution: "Engineered a modular React interface with role-based dashboards, progress monitoring, and dynamic state management.",
      features: [
        "Role-based dashboard views (Intern / Supervisor)",
        "Dynamic progress tracking components",
        "Fully responsive layouts across tablet and mobile devices"
      ],
      contributions: [
        "Developed frontend application architecture using React and modern component design",
        "Translated Figma wireframes into clean, reusable React components",
        "Managed client-side form state and validation logic",
        "Ensured responsive layouts and accessible UI elements"
      ],
      role: "Frontend Developer",
      date: "February 2026",
      tech: ["React", "JavaScript", "HTML5", "CSS3", "Figma", "Git"],
      github: "https://github.com/alliahlasay4/inturn",
      demo: "",
      images: [
        "/projects/intern-system-1.png",
        "/projects/intern-system-2.png",
        "/projects/intern-system-3.png",
        "/projects/intern-system-4.png"
      ]
    },
    {
      id: "blood-donation-system",
      title: "Blood Donation Management System",
      category: "Fullstack / Web App",
      featured: true,
      problem: "Manual tracking of blood donor records led to inconsistent data and delayed report generation for healthcare administrators.",
      solution: "Developed a web-based management platform featuring donor registries, appointment scheduling, and automated reporting.",
      features: [
        "Donor record management with validation",
        "Blood drive scheduling system",
        "Admin dashboard with automated report export",
        "Form validation and structured relational database handling"
      ],
      contributions: [
        "Designed and developed responsive UI layouts using HTML5, CSS3, and Bootstrap",
        "Implemented interactive frontend logic with JavaScript and AJAX",
        "Integrated frontend interfaces with backend REST APIs",
        "Designed dashboard navigation flow and user permissions"
      ],
      role: "Frontend Developer",
      date: "December 2025",
      tech: ["Laravel", "PHP", "HTML5", "Bootstrap", "JavaScript", "MySQL"],
      github: "https://github.com/alliahlasay4/blood-donation-management-system",
      demo: "",
      images: [
        "/projects/blood-system-1.png",
        "/projects/blood-system-2.png",
        "/projects/blood-system-3.png",
        "/projects/blood-system-4.png"
      ]
    },
    {
      id: "food-ordering-app",
      title: "Interactive Food Ordering Web App",
      category: "Frontend Web App",
      featured: true,
      problem: "Users needed a fast, interactive interface to filter menu items, adjust quantities, and preview order summaries in real time.",
      solution: "Built a responsive single-page application with dynamic cart state management and instant search/category filtering.",
      features: [
        "Dynamic menu item filtering by category and query",
        "Real-time cart addition, removal, and balance recalculation",
        "Simulated checkout modal with responsive confirmation"
      ],
      contributions: [
        "Architected modular JavaScript modules for state management and DOM rendering",
        "Implemented reactive cart state handling and local item persistence",
        "Designed mobile-friendly layout and smooth interactive transitions"
      ],
      role: "Frontend Developer",
      date: "June 2025",
      tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"],
      github: "https://github.com/alliahlasay4/foodpanda",
      demo: "",
      images: [
        "/projects/food-system-1.png",
        "/projects/food-system-2.png"
      ]
    },
    {
      id: "employee-management-system",
      title: "Employee Management System",
      category: "Fullstack / Database",
      featured: false,
      problem: "Organizations required a secure, structured system for employee records, department classification, and role-based access.",
      solution: "Designed and implemented a data management application with CRUD API endpoints and database schema validation.",
      features: [
        "Full CRUD operations for employee records",
        "Role-based access control (RBAC)",
        "Structured MongoDB document schema"
      ],
      contributions: [
        "Designed MongoDB database schemas and collections",
        "Implemented backend API handlers for data manipulation",
        "Built responsive administration view"
      ],
      role: "Fullstack Developer",
      date: "July 2025",
      tech: ["JavaScript", "MongoDB", "HTML5", "CSS3", "REST APIs"],
      github: "https://github.com/alliahlasay4/employee-ms",
      demo: "",
      images: [
        "/projects/employee-system-1.png",
        "/projects/employee-system-2.png",
        "/projects/employee-system-3.png"
      ]
    }
  ]
};
