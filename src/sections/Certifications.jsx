import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaCertificate, FaMedal, FaCheckCircle, FaSpinner, FaCalendarAlt, FaAward } from "react-icons/fa";

export default function Certifications() {
  const { certifications, honors } = portfolioData;
  const [activeTab, setActiveTab] = useState("all");

  const statusBadges = {
    completed: {
      label: "Completed",
      icon: <FaCheckCircle className="text-emerald-500" />,
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
    },
    "in-progress": {
      label: "In Progress",
      icon: <FaSpinner className="text-amber-500 animate-spin text-xs" />,
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
    },
    planned: {
      label: "Planned Roadmap",
      icon: <FaCalendarAlt className="text-brand-indigo dark:text-brand-cyan" />,
      color: "bg-brand-indigo/10 text-brand-indigo dark:text-brand-cyan border-brand-indigo/20"
    }
  };

  const allItems = certifications.flatMap((group) => group.items);

  const filteredItems =
    activeTab === "all"
      ? allItems
      : activeTab === "completed"
      ? allItems.filter((item) => item.status === "completed")
      : activeTab === "upskilling"
      ? allItems.filter((item) => item.status === "in-progress" || item.status === "planned")
      : allItems;

  return (
    <section id="certifications" className="py-20 bg-slate-100/60 dark:bg-canvas-dark/40 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-cyan mb-1">
              Verified Technical Credentials
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
              Certifications & Upskilling
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 dark:bg-surface-dark text-xs font-mono font-medium">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-lg transition-all duration-150 ${
                activeTab === "all"
                  ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Credentials ({allItems.length})
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-3.5 py-1.5 rounded-lg transition-all duration-150 ${
                activeTab === "completed"
                  ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Earned Certs
            </button>
            <button
              onClick={() => setActiveTab("upskilling")}
              className={`px-3.5 py-1.5 rounded-lg transition-all duration-150 ${
                activeTab === "upskilling"
                  ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              In Progress / Roadmap
            </button>
          </div>
        </div>

        {/* Certifications Asymmetric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => {
            const statusConfig = statusBadges[item.status] || statusBadges.completed;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between space-y-4 hover:border-brand-indigo/50 dark:hover:border-brand-indigo/50 transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-brand-indigo dark:text-brand-cyan text-base">
                      <FaCertificate />
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border ${statusConfig.color}`}
                    >
                      {statusConfig.icon}
                      {statusConfig.label}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-indigo dark:text-brand-cyan font-medium mt-1">
                      {item.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Issued / Term: {item.date}</span>
                  {item.badge && (
                    <span className="text-xs font-semibold text-brand-indigo dark:text-brand-cyan flex items-center gap-1">
                      <FaMedal /> Cisco Badge
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Honors & Academic Achievements Sub-section */}
        <div>
          <div className="mb-6 flex items-center gap-2.5">
            <FaAward className="text-amber-500 text-xl" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Academic Honors & Merit Grants
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {honors.map((honor, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 text-lg shrink-0">
                  <FaMedal />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {honor.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {honor.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-brand-indigo dark:text-brand-cyan font-medium">{honor.organization}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">{honor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
