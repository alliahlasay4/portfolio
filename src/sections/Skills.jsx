import { portfolioData } from "../data/portfolioData";
import { FaCode, FaServer, FaLaptopCode, FaTools, FaGraduationCap } from "react-icons/fa";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    Frontend: <FaCode className="text-brand-blue" />,
    Backend: <FaServer className="text-brand-indigo" />,
    Programming: <FaLaptopCode className="text-emerald-500" />,
    "Tools & Workflow": <FaTools className="text-amber-500" />
  };

  const categories = Object.keys(skills).filter((key) => key !== "currentlyLearning");

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((category) => (
            <div
              key={category}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-base">
                  {categoryIcons[category]}
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills[category].map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Upskilling Highlight Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-blue/10 via-brand-indigo/10 to-brand-cyan/10 border border-brand-blue/20 dark:border-brand-blue/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-blue text-white text-xl">
              <FaGraduationCap />
            </div>
            <div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Active Learning & Upskilling Focus
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Currently pursuing advanced coursework to stay ahead in web development & AI engineering.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.currentlyLearning.map((item, index) => (
              <span
                key={index}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-brand-blue border border-brand-blue/30 shadow-sm"
              >
                ⚡ {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}