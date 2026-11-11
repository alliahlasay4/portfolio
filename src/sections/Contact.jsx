import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaEnvelope, FaCheck, FaCopy, FaArrowRight, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { Reveal, StaggerGroup, StaggerItem } from "../components/common/Reveal";
import AmbientOrbs from "../components/common/AmbientOrbs";
import SpotlightCard from "../components/common/SpotlightCard";

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
      name: "LinkedIn",
      action: "Connect ↗",
      href: personal.linkedin,
      external: true,
      icon: <FaLinkedin />
    },
    {
      name: "GitHub",
      action: "View Profile ↗",
      href: personal.github,
      external: true,
      icon: <FaGithub />
    },
    {
      name: "Resume",
      action: "Download PDF ↓",
      href: personal.cvUrl,
      download: "Lasay_Resume.pdf",
      icon: <FaFileDownload />
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-12 sm:py-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <AmbientOrbs variant="contact" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <Reveal>
          <div className="pb-5 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-1">
              05 / Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Get in Touch
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Ledger: Primary Channels (Left) & Profiles/Docs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
          
          {/* Left Column: Direct Communication (6 cols) */}
          <Reveal delay={0.05} className="lg:col-span-6 space-y-6">
            {/* Email Contact Box */}
            <SpotlightCard
              spotlightColor="rgba(2, 132, 199, 0.12)"
              className="p-5 rounded-md border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40"
            >
              <div className="space-y-3">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Email</span>
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
            </SpotlightCard>

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
          </Reveal>

          {/* Right Column: Profiles & Verified Materials (6 cols) */}
          <Reveal delay={0.12} className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 block">
              Links & Resume
            </span>

            <StaggerGroup stagger={0.07} className="divide-y divide-slate-200 dark:divide-slate-800">
              {directChannels.map((channel, index) => (
                <StaggerItem key={index} className="py-3.5 first:pt-0 last:pb-0">
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    download={channel.download}
                    className="group flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 px-2 -mx-2 py-1.5 -my-1.5 rounded transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {channel.icon}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {channel.name}
                      </span>
                    </div>

                    <span className="shrink-0 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white inline-flex items-center gap-1.5 transition-colors">
                      {channel.action}
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>

        </div>

      </div>
    </section>
  );
}