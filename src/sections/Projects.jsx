import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";
import ProjectModal from "../components/projects/ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProjectIndex = projects.findIndex((p) => p.id === selectedProjectId);
  const selectedProject = selectedProjectIndex !== -1 ? projects[selectedProjectIndex] : null;

  const handlePrev = () => {
    const prevIdx = (selectedProjectIndex - 1 + projects.length) % projects.length;
    setSelectedProjectId(projects[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (selectedProjectIndex + 1) % projects.length;
    setSelectedProjectId(projects[nextIdx].id);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-1">
              01 / Featured Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
            Selected applications & production codebases
          </p>
        </div>

        {/* Project Ledger Rows */}
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {projects.map((project, index) => {
            const indexStr = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.id}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
              >
                {/* Left Column: Image Preview + Direct Links */}
                <div className="lg:col-span-5 space-y-4">
                  <div
                    onClick={() => setSelectedProjectId(project.id)}
                    className="group relative aspect-video w-full rounded-md overflow-hidden bg-slate-900 border border-slate-300 dark:border-slate-700 cursor-pointer shadow-sm"
                  >
                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-mono font-semibold text-white bg-slate-900/90 px-3 py-1.5 rounded border border-white/20">
                        View Details & Specs →
                      </span>
                    </div>
                  </div>

                  {/* Clean Links Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono font-semibold">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <FaGithub className="text-xs" /> Source Code
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      Specifications <FaArrowRight className="text-[10px]" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Ledger Entry Details */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Meta Strip */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 border-b border-slate-200/60 dark:border-slate-800/60 pb-2">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {indexStr} / {project.category}
                    </span>
                    <span>{project.date}</span>
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      Role: {project.role}
                    </p>
                  </div>

                  {/* Problem & Solution Paragraph */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {project.solution || project.problem}
                  </p>

                  {/* Key Engineering Highlights */}
                  {project.features && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                        Core Architecture & Highlights
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {project.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-slate-400 dark:text-slate-500 select-none font-mono">
                              —
                            </span>
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Flat Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          close={() => setSelectedProjectId(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}