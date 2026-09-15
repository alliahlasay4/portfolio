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
    cvUrl: "./Lasay_CV.pdf",
    cvUpdating: true,
  },

  upskillingNotice: {
    title: "Current Upskilling Focus",
    highlight: "Cisco JavaScript Essentials 2 & Apply AI Collection",
    description: "Actively deepening JavaScript mastery and integrating AI developer tools into software workflows."
  },

  skills: {
    Frontend: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"],
    Backend: ["PHP", "MongoDB", "MySQL", "REST APIs"],
    Programming: ["Java", "Python", "C#", "C++", "Dart"],
    "Tools & Workflow": ["Git", "GitHub", "Figma", "Vite", "VS Code"],
    currentlyLearning: ["JavaScript Essentials 2 (Cisco)", "Prompt Engineering", "Modern AI Workflows"]
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
      category: "Software & Web Development",
      items: [
        {
          title: "HTML Essentials",
          issuer: "DICT-ITU DTC Initiative & Cisco Networking Academy",
          date: "May 2026",
          status: "completed",
          badge: true,
          description: "Comprehensive certification covering HTML5 structure, semantic markup, forms, and web standards."
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
          title: "JavaScript Essentials 2",
          issuer: "Cisco Networking Academy",
          date: "In Progress",
          status: "in-progress",
          badge: true,
          description: "Advanced JavaScript objects, asynchronous logic, OOP principles, and API handling."
        },
        {
          title: "Certified IT Specialist – Databases",
          issuer: "Certiport",
          date: "2024",
          status: "completed",
          badge: false,
          description: "Database design principles, relational tables, SQL querying, and data management."
        },
        {
          title: "PCAP: Programming Essentials in Python",
          issuer: "Cisco Networking Academy / Python Institute",
          date: "2023",
          status: "completed",
          badge: false,
          description: "Core Python programming syntax, algorithms, data structures, and object-oriented concepts."
        }
      ]
    },
    {
      category: "UI/UX & Design",
      items: [
        {
          title: "Principles of Graphic Design",
          issuer: "University of the Philippines Open University (UPOU)",
          date: "2024",
          status: "completed",
          badge: false,
          description: "Visual composition, typography, color theory, and user-centered design fundamentals."
        }
      ]
    },
    {
      category: "AI & Modern Productivity (Upcoming Roadmap)",
      items: [
        {
          title: "Intro to Modern AI",
          issuer: "Apply AI Series",
          date: "Planned",
          status: "planned",
          badge: false,
          description: "Fundamentals of generative AI models and practical applications."
        },
        {
          title: "Prompt Like an Engineer",
          issuer: "Apply AI Series",
          date: "Planned",
          status: "planned",
          badge: false,
          description: "Advanced prompt engineering strategies for software development and automation."
        },
        {
          title: "Build a Resume Using AI",
          issuer: "Apply AI Series",
          date: "Planned",
          status: "planned",
          badge: false,
          description: "Utilizing AI for career positioning and resume optimization."
        },
        {
          title: "Finding Insights Using AI",
          issuer: "Apply AI Series",
          date: "Planned",
          status: "planned",
          badge: false,
          description: "Data analysis and automated insight extraction using AI agents."
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
      id: "blood-donation-system",
      title: "Blood Donation Management System",
      category: "Fullstack / Web App",
      featured: true,
      problem: "Manual tracking of donor records led to inconsistent data and inefficient report generation for healthcare administrators.",
      solution: "Developed a web-based management system with structured donor records, automated blood drive scheduling, and reporting dashboards.",
      features: [
        "Donor record management with validation",
        "Blood drive scheduling system",
        "Admin dashboard with automated report export",
        "Form validation and structured relational database handling"
      ],
      contributions: [
        "Designed and developed responsive UI layouts using HTML5, CSS3, and Bootstrap",
        "Implemented interactive frontend logic with jQuery and AJAX",
        "Integrated frontend interfaces with Laravel REST APIs",
        "Designed dashboard navigation flow and user permissions"
      ],
      role: "Frontend Developer",
      date: "December 2025",
      tech: ["Laravel", "PHP", "HTML5", "Bootstrap", "jQuery", "MySQL"],
      github: "https://github.com/alliahlasay4/blood-donation-management-system",
      demo: "#",
      images: [
        "./projects/blood-system-1.png",
        "./projects/blood-system-2.png",
        "./projects/blood-system-3.png",
        "./projects/blood-system-4.png"
      ]
    },
    {
      id: "intern-management-system",
      title: "Intern Management System",
      category: "React / Frontend",
      featured: true,
      problem: "Tracking intern progress and task assignments manually lacked organization and real-time visibility for supervisors.",
      solution: "Built a responsive React interface with role-based dashboards to manage intern progress, logs, and evaluation metrics.",
      features: [
        "Role-based dashboard views (Intern / Supervisor)",
        "Dynamic progress tracking components",
        "Fully responsive layouts across tablet and mobile devices"
      ],
      contributions: [
        "Developed frontend application architecture using React",
        "Translated Figma wireframes into clean, reusable React components",
        "Managed component state and form interactions",
        "Ensured WCAG compliant typography and layout responsiveness"
      ],
      role: "Frontend Developer",
      date: "February 2026",
      tech: ["React", "JavaScript", "HTML5", "CSS3", "Figma"],
      github: "https://github.com/alliahlasay4/inturn",
      demo: "#",
      images: [
        "./projects/intern-system-1.png",
        "./projects/intern-system-2.png",
        "./projects/intern-system-3.png",
        "./projects/intern-system-4.png"
      ]
    },
    {
      id: "grocery-calculator",
      title: "Grocery Expense Calculator & Listing Mobile App",
      category: "Mobile App",
      featured: true,
      problem: "Shoppers manually tracking budget limits during grocery trips struggle to calculate total costs in real-time.",
      solution: "Developed a native Android application allowing users to manage shopping lists with instant real-time total budget calculations.",
      features: [
        "Real-time expense calculation as items are added/edited",
        "Categorized shopping list management",
        "Clean, high-contrast mobile user interface"
      ],
      contributions: [
        "Designed mobile UI layouts in Android Studio",
        "Implemented real-time calculation logic and input validation",
        "Optimized mobile touch targets and list scrolling performance"
      ],
      role: "Mobile Developer",
      date: "November 2024",
      tech: ["Java", "Android Studio", "XML"],
      github: "https://github.com/alliahlasay4/grocery-calculator",
      demo: "#",
      images: [
        "./projects/grocery-app-1.png",
        "./projects/grocery-app-2.png"
      ]
    },
    {
      id: "employee-management-system",
      title: "Employee Management System",
      category: "Backend / Database",
      featured: false,
      problem: "Organizations required a secure, structured system for employee records, department classification, and role-based access.",
      solution: "Designed and implemented a backend-focused management application with CRUD API endpoints and database schema validation.",
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
      role: "Backend / Fullstack",
      date: "July 2025",
      tech: ["JavaScript", "MongoDB", "HTML5", "CSS3"],
      github: "https://github.com/alliahlasay4/employee-ms",
      demo: "#",
      images: [
        "./projects/employee-system-1.png",
        "./projects/employee-system-2.png",
        "./projects/employee-system-3.png"
      ]
    },
    {
      id: "loaning-mobile-app",
      title: "Loaning Mobile Application",
      category: "Mobile App",
      featured: false,
      problem: "Individual lenders required an intuitive offline-first tool to track active loans, interest calculations, and repayment dates.",
      solution: "Built an Android application integrated with local SQLite database storage for secure offline financial tracking.",
      features: [
        "User authentication and local passcode lock",
        "Loan balance and repayment tracking",
        "SQLite persistent storage for offline access"
      ],
      contributions: [
        "Designed mobile XML views and theme palettes",
        "Implemented SQLite CRUD database interactions",
        "Handled financial input validation and error states"
      ],
      role: "Mobile Developer",
      date: "December 2024",
      tech: ["Java", "SQLite", "Android Studio"],
      github: "https://github.com/alliahlasay4/saloan",
      demo: "#",
      images: [
        "./projects/loaning-app-1.png",
        "./projects/loaning-app-2.png",
        "./projects/loaning-app-3.png"
      ]
    },
    {
      id: "food-ordering-app",
      title: "Interactive Food Ordering Web App",
      category: "Frontend",
      featured: false,
      problem: "Users needed a smooth interface to browse food items, customize order quantities, and simulate checkout seamlessly.",
      solution: "Created an interactive single-page web app with dynamic cart state management and menu item filtering.",
      features: [
        "Dynamic menu item filtering",
        "Real-time cart item addition and balance recalculation",
        "Simulated checkout modal"
      ],
      contributions: [
        "Built modular UI layout and dynamic DOM manipulation",
        "Implemented reactive cart state handling in vanilla JavaScript",
        "Designed clean visual interface"
      ],
      role: "Frontend Developer",
      date: "June 2025",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/alliahlasay4/foodpanda",
      demo: "#",
      images: [
        "./projects/food-system-1.png",
        "./projects/food-system-2.png"
      ]
    },
    {
      id: "todo-app",
      title: "Task Management Web App",
      category: "Frontend",
      featured: false,
      problem: "Standard task tools often feature cluttered interfaces that distract users from simple daily task organization.",
      solution: "Built a lightweight, minimal task application with instant local storage persistence.",
      features: [
        "Task creation, editing, status toggling, and deletion",
        "Local storage data persistence",
        "Clean, distraction-free UI"
      ],
      contributions: [
        "Implemented DOM state updates and local storage integration",
        "Designed clean CSS layout with smooth hover feedback"
      ],
      role: "Frontend Developer",
      date: "July 2025",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/alliahlasay4/todo",
      demo: "#",
      images: [
        "./projects/todo-app-1.png"
      ]
    }
  ]
};
