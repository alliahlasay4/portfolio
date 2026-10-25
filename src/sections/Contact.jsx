import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFileDownload, FaCheck, FaCopy, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Background Micro Polka Dot Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-sky mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Let’s Build Something Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            I am currently open to Frontend Developer roles, junior software engineering opportunities, and technical collaborations. Whether you have an open role or just want to connect, my inbox is open.
          </p>
        </div>

        {/* Central High-Impact Contact Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-indigo text-white font-semibold text-sm shadow-md hover:bg-indigo-700 transition-all hover:scale-[1.02]"
            >
              <FaPaperPlane className="text-xs" /> Send Email Directly
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-500" /> Copied {personal.email}
                </>
              ) : (
                <>
                  <FaCopy className="text-slate-500" /> Copy Email Address
                </>
              )}
            </button>
          </div>

          {/* Quick Info Grid */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 grid sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-sky/10 text-brand-sky text-base shrink-0">
                <FaEnvelope />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-brand-indigo dark:hover:text-brand-sky truncate block"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 text-base shrink-0">
                <FaPhone />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Phone</p>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-brand-indigo dark:hover:text-brand-sky truncate block"
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 text-base shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Location</p>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                  {personal.location}
                </p>
              </div>
            </div>
          </div>

          {/* Profile & Resume Quick Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 font-semibold text-xs hover:bg-brand-indigo transition-colors"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-indigo text-white font-semibold text-xs hover:bg-indigo-700 transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href={personal.cvUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-borderSubtle-dark text-slate-700 dark:text-slate-300 font-medium text-xs hover:border-brand-indigo dark:hover:border-brand-sky transition-colors"
            >
              <FaFileDownload className="text-brand-indigo dark:text-brand-sky" /> Download CV
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}