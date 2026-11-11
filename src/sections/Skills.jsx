import { portfolioData } from "../data/portfolioData";
import { Reveal, StaggerGroup, StaggerItem } from "../components/common/Reveal";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryDetails = [
    {
      index: "01",
      name: "Frontend",
      key: "Frontend"
    },
    {
      index: "02",
      name: "Testing & Tooling",
      key: "Testing & Tooling"
    },
    {
      index: "03",
      name: "Backend & DB",
      key: "Backend & DB"
    },
    {
      index: "04",
      name: "Tools & Design",
      key: "Tools & Design"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <Reveal>
          <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-1">
                03 / Technical Skills
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                Skills & Tooling
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
              Languages, testing frameworks, and engineering tools
            </p>
          </div>
        </Reveal>

        {/* Horizontal Spec Rows */}
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {categoryDetails.map((category, rowIdx) => {
            const list = skills[category.key] || [];

            return (
              <Reveal
                key={category.key}
                delay={rowIdx * 0.05}
                className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 md:items-center"
              >
                {/* Left: Category Label & Index */}
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-300 block font-semibold">
                    {category.index} / {category.name}
                  </span>
                </div>

                {/* Right: Technical Badges */}
                <StaggerGroup stagger={0.03} className="md:col-span-8 flex flex-wrap gap-2">
                  {list.map((skill, index) => (
                    <StaggerItem key={index} y={8} duration={0.3}>
                      <span
                        className="inline-block text-xs font-mono px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium hover:border-brand-indigo/50 dark:hover:border-brand-sky/50 transition-colors"
                      >
                        {skill}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}