import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";
import meImg from "../assets/lasay_2x2-enahnced.jpg";

export default function Hero() {
  const { personal, upskillingNotice } = portfolioData;

  return (
    <section id="hero" className="relative pt-20 sm:pt-24 pb-14 sm:pb-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Top Header Strip: Metadata + Small Photo + Status */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-slate-200 dark:border-slate-800 items-center">
          
          {/* Identity & Photo */}
          <div className="md:col-span-6 flex items-center gap-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-sm">
              <img
                src={meImg}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block">
                Frontend Developer Portfolio
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 truncate">
                {personal.name}
              </h2>
              <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5">
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="md:col-span-6 md:text-right flex items-center md:justify-end">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Tech Opportunities</span>
            </div>
          </div>
        </div>

        {/* Main Editorial Headline Section */}
        <div className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.12]">
              Building responsive, tested, and reliable web applications.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-normal">
              {personal.bioShort}
            </p>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 active:translate-y-[1px] transition-all"
            >
              Explore Projects <FaArrowRight className="text-xs" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:translate-y-[1px] transition-all"
            >
              Contact Me
            </a>

            <a
              href={personal.cvUrl}
              download="Lasay_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-medium text-sm hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-400 active:translate-y-[1px] transition-all"
            >
              <FaFileDownload className="text-xs" />
              Download Resume
            </a>

            <div className="flex items-center gap-3 pl-3 ml-2 border-l border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white text-lg transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white text-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-slate-900 dark:hover:text-white text-lg transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Swiss 3-Column Info Rail */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 pt-8">
          
          {/* Column 1: Core Technologies */}
          <div className="pb-6 md:pb-0 md:pr-6">
            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500 block mb-2 font-semibold">
              01 / Core Stack
            </span>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              React, TypeScript, Tailwind CSS, JavaScript
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Component architecture, state management, and modern responsive design.
            </p>
          </div>

          {/* Column 2: Verification & Testing */}
          <div className="py-6 md:py-0 md:px-6">
            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500 block mb-2 font-semibold">
              02 / Testing & AI Workflows
            </span>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Vitest, Playwright & Prompt Engineering
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Automated testing suites and AI-assisted workflows for efficient development and debugging.
            </p>
          </div>

          {/* Column 3: Experience */}
          <div className="pt-6 md:pt-0 md:pl-6">
            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500 block mb-2 font-semibold">
              03 / Recent Experience
            </span>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Frontend Intern — Supsoft Tech
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Built intern management portal from Figma designs with PDF generation & themes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}