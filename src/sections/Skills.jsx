import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryDetails = [
    {
      index: "01",
      name: "Frontend Engineering",
      key: "Frontend",
      note: "Component architecture, client-side routing, state management, and modern responsive styling."
    },
    {
      index: "02",
      name: "Testing & Quality Assurance",
      key: "Testing & Tools",
      note: "Automated unit, integration, and end-to-end testing with Vitest, Testing Library, and Playwright."
    },
    {
      index: "03",
      name: "Backend & Data Persistence",
      key: "Backend & DB",
      note: "PostgreSQL database structures, Supabase auth, Row-Level Security, and offline data sync."
    },
    {
      index: "04",
      name: "Design Systems & Workflow",
      key: "Design & Workflow",
      note: "Translating Figma design tokens into production code, agile sprint management in ClickUp, and version control."
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-1">
              03 / Technical Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Skills & Tooling
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
            Languages, testing frameworks, and engineering tools
          </p>
        </div>

        {/* Horizontal Spec Rows */}
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {categoryDetails.map((category) => {
            const list = skills[category.key] || [];

            return (
              <div
                key={category.key}
                className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start"
              >
                {/* Left: Category Label & Index */}
                <div className="md:col-span-4 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block font-semibold">
                    {category.index} / {category.name}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pr-4">
                    {category.note}
                  </p>
                </div>

                {/* Right: Technical Badges */}
                <div className="md:col-span-8 flex flex-wrap gap-2 pt-1">
                  {list.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}