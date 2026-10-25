import { portfolioData } from "../data/portfolioData";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaAward } from "react-icons/fa";

export default function Experience() {
  const { personal, experience, honors } = portfolioData;

  const quickBadges = [
    {
      icon: <FaGraduationCap className="text-brand-indigo dark:text-brand-sky" />,
      title: "BS Information Technology",
      subtitle: "De La Salle University – Dasmariñas",
      detail: "Major in Web Development"
    },
    {
      icon: <FaAward className="text-emerald-500" />,
      title: "DOST Scholar",
      subtitle: "Department of Science and Technology",
      detail: "SEI Merit Scholarship Awardee"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50/60 dark:bg-canvas-dark/60 border-y border-slate-200/80 dark:border-borderSubtle-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-sky mb-1">
            Career & Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Experience & Background
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Main Experience Column (Left/Center) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Work History
            </h3>

            {experience.map((job, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark shadow-sm space-y-4 hover:border-brand-indigo/50 dark:hover:border-brand-sky/50 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-brand-sky/10 text-brand-sky text-lg shrink-0">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {job.role}
                      </h4>
                      <p className="text-sm text-brand-indigo dark:text-brand-sky font-semibold">
                        {job.company} • <span className="text-slate-500 dark:text-slate-400 font-normal">{job.type}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt /> {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {job.description}
                </p>

                <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {job.points.map((pt, i) => (
                    <li key={i} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {job.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Academic Honors Column (Right) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Education & Honors
            </h3>

            <div className="space-y-4">
              {quickBadges.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark shadow-sm space-y-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-base shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-brand-indigo dark:text-brand-sky pt-1 border-t border-slate-100 dark:border-slate-800/80">
                    {item.detail}
                  </p>
                </div>
              ))}

              {/* Bio Statement Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-indigo/5 to-brand-sky/5 dark:from-brand-indigo/10 dark:to-brand-sky/10 border border-brand-indigo/20 dark:border-brand-sky/20 space-y-2.5">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-sky">
                  About My Approach
                </p>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {personal.bioShort}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}