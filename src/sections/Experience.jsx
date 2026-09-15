import { portfolioData } from "../data/portfolioData";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
            Career History
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-brand-blue/40 dark:hover:border-brand-blue/40 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue text-lg">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm text-brand-blue font-medium">
                      {job.company} • <span className="text-slate-500 dark:text-slate-400 font-normal">{job.type}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {job.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
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
                    className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}