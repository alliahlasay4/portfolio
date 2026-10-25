import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  const educationAndHonors = [
    {
      index: "01",
      title: "BS in Information Technology",
      institution: "De La Salle University – Dasmariñas",
      period: "2022 – 2026",
      detail: "Specialization in Web Development. Focused on frontend architectures, database systems, and software engineering principles."
    },
    {
      index: "02",
      title: "DOST Scholar",
      institution: "Department of Science and Technology",
      period: "2022 – 2026"
    },
    {
      index: "03",
      title: "Dean’s List",
      institution: "De La Salle University – Dasmariñas",
      period: "2022 – 2026"
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-1">
              02 / Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Experience & Education
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
            Professional history and academic credentials
          </p>
        </div>

        {/* 2-Column Split: Work History (Left) & Education/Honors (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
          
          {/* Left Column: Work History (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 block">
              Professional Work History
            </span>

            {experience.map((job, index) => (
              <div key={index} className="space-y-4">
                {/* Job Header */}
                <div className="space-y-1 border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                      {job.role}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {job.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span className="text-slate-500">{job.type}</span>
                  </div>
                </div>

                {/* Job Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {job.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {job.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-slate-400 dark:text-slate-500 select-none font-mono">
                        —
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {job.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education & Academic Honors (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 block">
              Education & Academic Honors
            </span>

            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {educationAndHonors.map((item, index) => (
                <div key={index} className="py-5 first:pt-0 last:pb-0 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      {item.index} / {item.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h4>

                  <p className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                    {item.institution}
                  </p>

                  {item.detail && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                      {item.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}