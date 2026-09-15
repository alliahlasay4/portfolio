import { useState, useEffect } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectModal({ project, close, onPrev, onNext }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setActiveImgIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close, onPrev, onNext]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative animate-in fade-in duration-200">
        
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          <FaTimes className="text-base" />
        </button>

        {/* Gallery Image Display */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-6 border border-slate-200 dark:border-slate-700">
          <img
            src={project.images?.[activeImgIndex]}
            alt={project.title}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
            }}
          />

          {project.images?.length > 1 && (
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
                }}
                className="pointer-events-auto p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
                }}
                className="pointer-events-auto p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          )}
        </div>

        {/* Header Info */}
        <div className="space-y-2 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 hover:bg-brand-blue dark:hover:bg-brand-blue transition-colors duration-200"
                >
                  <FaGithub /> Source Code
                </a>
              )}
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-blue text-white hover:bg-brand-indigo transition-colors duration-200"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="text-brand-blue font-semibold">{project.role}</span>
            <span>•</span>
            <span>{project.date}</span>
            <span>•</span>
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded">
              {project.category}
            </span>
          </div>
        </div>

        {/* Breakdown Grid */}
        <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
          
          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-red-500 dark:text-red-400">
                The Problem
              </h4>
              <p className="leading-relaxed text-xs sm:text-sm">{project.problem}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                The Solution
              </h4>
              <p className="leading-relaxed text-xs sm:text-sm">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Key Features</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Contributions */}
          {project.contributions && (
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">My Specific Contributions</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                {project.contributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Navigation Footer */}
        <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onPrev}
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors flex items-center gap-1.5"
          >
            ← Previous Project
          </button>
          <button
            onClick={onNext}
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors flex items-center gap-1.5"
          >
            Next Project →
          </button>
        </div>

      </div>
    </div>
  );
}
