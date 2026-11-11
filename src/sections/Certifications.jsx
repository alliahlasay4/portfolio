import { portfolioData } from "../data/portfolioData";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { Reveal, StaggerGroup, StaggerItem } from "../components/common/Reveal";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-12 sm:py-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <Reveal>
          <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-1">
                04 / Credentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                Certifications & Badges
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Grouped Credentials Sections */}
        <div className="space-y-8 pt-7">
          {certifications.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              {/* Category Subheading */}
              <Reveal delay={0.04}>
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-2">
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                    {group.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {group.items.length}
                  </span>
                </div>
              </Reveal>

              {/* Compact 2-Column Ledger */}
              <StaggerGroup stagger={0.05} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {group.items.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center justify-between gap-3 p-3.5 rounded-md border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        {item.badgeUrl ? (
                          <div className="w-9 h-9 shrink-0 p-1 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                            <img
                              src={item.badgeUrl}
                              alt={`${item.title} badge`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-9 h-9 shrink-0 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[10px] font-mono text-slate-400">
                            CERT
                          </div>
                        )}

                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                            {item.title}
                          </h4>
                          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                            {item.issuer} · {item.date}
                          </p>
                        </div>
                      </div>

                      {item.pdfUrl && (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Open PDF certificate"
                        >
                          <FaFilePdf className="text-rose-500 text-[11px]" />
                          <span>PDF</span>
                          <FaExternalLinkAlt className="text-[9px] text-slate-400" />
                        </a>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
