import { portfolioData } from "../data/portfolioData";
import { FaGraduationCap, FaBriefcase, FaAward, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <FaBriefcase className="text-brand-blue" />,
      title: "Frontend Intern",
      subtitle: "Supsoft Tech"
    },
    {
      icon: <FaGraduationCap className="text-brand-indigo" />,
      title: "BS Info Tech",
      subtitle: "DLSU – Dasmariñas"
    },
    {
      icon: <FaAward className="text-emerald-500" />,
      title: "DOST Scholar",
      subtitle: "SEI Merit Grant"
    },
    {
      icon: <FaMapMarkerAlt className="text-amber-500" />,
      title: "Location",
      subtitle: personal.location
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
            Background & Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Bio paragraphs */}
          <div className="lg:col-span-8 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {personal.bioLong.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
