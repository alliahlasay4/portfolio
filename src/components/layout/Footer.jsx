import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left info */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
            {portfolioData.personal.name} • Frontend Developer
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {currentYear} All rights reserved. Built with React, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-slate-600 dark:text-slate-400">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-brand-blue dark:hover:text-brand-blue transition-colors duration-200 text-lg"
          >
            <FaGithub />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-brand-blue dark:hover:text-brand-blue transition-colors duration-200 text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Email"
            className="hover:text-brand-blue dark:hover:text-brand-blue transition-colors duration-200 text-lg"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}