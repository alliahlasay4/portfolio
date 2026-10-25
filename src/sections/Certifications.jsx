import { portfolioData } from "../data/portfolioData";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-12 sm:py-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-1">
              04 / Technical Accreditations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Certifications & Badges
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
            Verified industry coursework and credentials
          </p>
        </div>

        {/* Grouped Credentials Sections */}
        <div className="space-y-8 pt-7">
          {certifications.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-5">
              {/* Category Subheading */}
              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-2.5">
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                  {group.category}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  {group.items.length} Credentials
                </span>
              </div>

              {/* 2-Column Dossier Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {group.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-md border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 flex flex-col justify-between space-y-3.5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    {/* Top Row: Badge Thumbnail + Title & Issuer + PDF Action */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {item.badgeUrl ? (
                          <div className="w-11 h-11 shrink-0 p-1 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                            <img
                              src={item.badgeUrl}
                              alt={`${item.title} badge`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-11 h-11 shrink-0 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[10px] font-mono text-slate-400">
                            CERT
                          </div>
                        )}

                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                            {item.title}
                          </h4>
                          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                            {item.issuer}
                          </p>
                        </div>
                      </div>

                      {item.pdfUrl && (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Open verified PDF certificate"
                        >
                          <FaFilePdf className="text-rose-500 text-[11px]" />
                          <span>PDF</span>
                          <FaExternalLinkAlt className="text-[9px] text-slate-400" />
                        </a>
                      )}
                    </div>

                    {/* Competency Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Bottom Metadata Strip */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      <span>Issued: {item.date}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        Verified Credential
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
