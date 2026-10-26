import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaEnvelope, FaCheck, FaCopy, FaArrowRight, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const directChannels = [
    {
      index: "01",
      name: "LinkedIn",
      detail: "Professional background, updates & messaging",
      action: "Connect ↗",
      href: personal.linkedin,
      external: true,
      icon: <FaLinkedin />
    },
    {
      index: "02",
      name: "GitHub",
      detail: "Code repositories, project commits & contributions",
      action: "View Profile ↗",
      href: personal.github,
      external: true,
      icon: <FaGithub />
    },
    {
      index: "03",
      name: "Resume",
      detail: "Download latest formatted resume (PDF)",
      action: "Download PDF ↓",
      href: personal.cvUrl,
      download: "Lasay_Resume.pdf",
      icon: <FaFileDownload />
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-1">
              05 / Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Get in Touch
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Available for Tech Opportunities</span>
          </div>
        </div>

        {/* 2-Column Ledger: Primary Channels (Left) & Profiles/Docs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
          
          {/* Left Column: Direct Communication (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Email Contact Box */}
            <div className="p-5 rounded-md border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Primary Email</span>
                <span>Response within 24h</span>
              </div>

              <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-slate-100 break-all">
                {personal.email}
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-mono font-semibold hover:opacity-90 active:translate-y-[1px] transition-all"
                >
                  <FaEnvelope className="text-[11px]" />
                  <span>Send Email</span>
                  <FaArrowRight className="text-[9px]" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium hover:bg-slate-100 dark:hover:bg-slate-800 active:translate-y-[1px] transition-all"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-500 text-xs" />
                      <span>Copied Address</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-slate-400 text-xs" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Secondary Meta details */}
            <div className="grid grid-cols-2 gap-4 pt-1 text-xs font-mono">
              <div className="space-y-0.5">
                <span className="text-slate-400 dark:text-slate-500 block">Phone</span>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="text-slate-800 dark:text-slate-200 font-semibold hover:underline"
                >
                  {personal.phone}
                </a>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 dark:text-slate-500 block">Location</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">
                  {personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Profiles & Verified Materials (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 block">
              Professional Profiles & Materials
            </span>

            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {directChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  download={channel.download}
                  className="group py-4 sm:py-5 flex items-center justify-between gap-4 first:pt-0 last:pb-0 hover:bg-slate-50 dark:hover:bg-slate-800/40 px-2 -mx-2 rounded transition-colors"
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {channel.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {channel.detail}
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white inline-flex items-center gap-1.5 transition-colors">
                    {channel.action}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}