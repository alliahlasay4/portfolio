import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaCode, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";
import meImg from "../assets/lasay_2x2.jpg";

export default function Hero() {
  const { personal, upskillingNotice } = portfolioData;
  const [viewMode, setViewMode] = useState("photo"); // 'photo' | 'code'

  return (
    <section id="hero" className="relative min-h-[90dvh] flex items-center pt-24 sm:pt-32 pb-14 sm:pb-16 overflow-hidden bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full max-w-full">
      
      {/* High-Visibility Micro Polka Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#94A3B8_1.25px,transparent_1.25px)] dark:bg-[radial-gradient(#4B5563_1.25px,transparent_1.25px)] [background-size:20px_20px] opacity-70 dark:opacity-60 pointer-events-none" />

      {/* Seamless Radial/Linear Gradient Fade Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-canvas-light/50 to-canvas-light dark:via-canvas-dark/50 dark:to-canvas-dark pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Copy & Actions Column */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left min-w-0 max-w-full">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border border-slate-200 dark:border-borderSubtle-dark text-[11px] sm:text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm max-w-full min-w-0">
            <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0 animate-pulse" />
            <span className="text-slate-500 dark:text-slate-400 shrink-0">{upskillingNotice.title}:</span>
            <span className="text-brand-indigo dark:text-brand-sky font-semibold truncate">{upskillingNotice.highlight}</span>
          </div>

          {/* Headline */}
          <div className="space-y-2 sm:space-y-3 min-w-0 max-w-full">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.15] break-words">
              {personal.name} <br />
              <span className="text-brand-indigo dark:text-brand-sky">
                Frontend Developer
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed pt-1 font-normal break-words">
              {personal.bioShort}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 max-w-full">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-indigo text-white font-semibold text-sm shadow-sm hover:bg-indigo-700 active:translate-y-[1px] hover:-translate-y-0.5 transition-all duration-150 shrink-0"
            >
              Explore Projects <FaArrowRight className="text-xs" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-borderSubtle-dark font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-700 active:translate-y-[1px] hover:-translate-y-0.5 transition-all duration-150 shadow-sm shrink-0"
            >
              Contact Me
            </a>

            <a
              href={personal.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 dark:border-borderSubtle-dark text-slate-700 dark:text-slate-300 font-medium text-sm hover:border-brand-indigo dark:hover:border-brand-sky active:translate-y-[1px] hover:-translate-y-0.5 transition-all duration-150 shrink-0 bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm"
            >
              <FaFileDownload className="text-xs text-brand-indigo dark:text-brand-sky" />
              Download CV
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-3 text-slate-500 dark:text-slate-400 max-w-full">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-indigo dark:hover:text-brand-sky text-xl transition-colors duration-150"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-indigo dark:hover:text-brand-sky text-xl transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-brand-indigo dark:hover:text-brand-sky text-xl transition-colors duration-150"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 pl-3 border-l border-slate-200 dark:border-borderSubtle-dark truncate">
              {personal.location}
            </span>
          </div>

        </div>

        {/* Right Developer Showcase Card Column */}
        <div className="lg:col-span-5 space-y-4 min-w-0 max-w-md mx-auto lg:mx-0 w-full overflow-hidden">
          
          {/* Main Showcase Card with Gradient Glow Ring */}
          <div className="relative group">
            
            {/* Subtle Gradient Glow Ring behind card */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-indigo via-brand-sky to-emerald-500 opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

            {/* Card Body */}
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-4 shadow-2xl space-y-3">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between px-1 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Developer Profile</span>
                </div>

                <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md text-[10px]">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`px-2.5 py-1 rounded transition-all font-semibold ${
                      viewMode === "photo"
                        ? "bg-brand-indigo text-white shadow"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Photo
                  </button>
                  <button
                    onClick={() => setViewMode("code")}
                    className={`px-2.5 py-1 rounded transition-all font-semibold ${
                      viewMode === "code"
                        ? "bg-brand-indigo text-white shadow"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Code Spec
                  </button>
                </div>
              </div>

              {/* Card Main Display */}
              {viewMode === "photo" ? (
                <div className="relative aspect-[4/4.3] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-md">
                  <img
                    src={meImg}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                  />
                  
                  {/* Glassmorphism Floating Badge Top-Left */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                    Supsoft Tech Intern
                  </div>

                  {/* Glassmorphism Floating Badge Bottom-Right */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5 shadow-lg">
                    <FaGraduationCap className="text-amber-400 text-xs" /> DOST Scholar
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto min-h-[220px]">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-300">developer</span> = &#123;
                  </div>
                  <div className="pl-3">
                    <span className="text-sky-300">name</span>:{" "}
                    <span className="text-emerald-400">"{personal.name}"</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-sky-300">role</span>:{" "}
                    <span className="text-emerald-400">"Frontend Intern @ Supsoft Tech"</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-sky-300">stack</span>: [
                    <span className="text-amber-300">"React 19"</span>,{" "}
                    <span className="text-amber-300">"JS"</span>,{" "}
                    <span className="text-amber-300">"Tailwind"</span>],
                  </div>
                  <div className="pl-3">
                    <span className="text-sky-300">credentials</span>: [
                    <span className="text-emerald-400">"Cisco HTML & JS"</span>,{" "}
                    <span className="text-emerald-400">"IT Specialist DB"</span>],
                  </div>
                  <div className="pl-3">
                    <span className="text-sky-300">availableForHire</span>:{" "}
                    <span className="text-purple-400">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              )}

              {/* Bottom Quick Meta Strip */}
              <div className="pt-2 px-1 flex items-center justify-between text-xs font-mono border-t border-slate-100 dark:border-slate-800/80">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Alliah Cassandra Lasay</span>
                <span className="text-[10px] font-semibold text-brand-indigo dark:text-brand-sky bg-brand-indigo/10 dark:bg-brand-sky/10 px-2.5 py-0.5 rounded-md border border-brand-indigo/20">
                  DLSU-D BS IT
                </span>
              </div>

            </div>
          </div>

          {/* Quick Highlight Cards Bar */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono w-full max-w-full">
            <div className="p-3 rounded-xl bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border border-slate-200 dark:border-borderSubtle-dark flex items-center gap-2.5 shadow-sm min-w-0">
              <FaCheckCircle className="text-emerald-500 shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-slate-900 dark:text-slate-100 truncate">Supsoft Tech</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Frontend Intern</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border border-slate-200 dark:border-borderSubtle-dark flex items-center gap-2.5 shadow-sm min-w-0">
              <FaCheckCircle className="text-brand-sky shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-slate-900 dark:text-slate-100 truncate">DLSU-D IT</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">DOST Scholar</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}