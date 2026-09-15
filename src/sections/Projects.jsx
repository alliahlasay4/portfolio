import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import { FaGithub, FaLayerGroup } from "react-icons/fa";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [spotlightId, setSpotlightId] = useState(projects[0].id);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const categories = ["All", "Featured", "React / Frontend", "Fullstack / Web App", "Mobile App"];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Featured") return p.featured;
    return p.category.toLowerCase().includes(activeCategory.toLowerCase().split(" ")[0]);
  });

  const spotlightProject = projects.find((p) => p.id === spotlightId) || projects[0];

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
    <section id="projects" className="py-14 sm:py-20 relative bg-canvas-light dark:bg-canvas-dark border-y border-slate-200 dark:border-borderSubtle-dark transition-colors duration-200 w-full max-w-full overflow-x-hidden">
      
      {/* Background Micro Polka Dot Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 min-w-0 max-w-full">
          <div className="min-w-0 max-w-full">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-sky mb-1">
              Engineering Case Studies
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark text-xs font-mono font-medium shadow-sm max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-brand-indigo text-white shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SPOTLIGHT PREVIEW CONTAINER (Strict Box Bounds) */}
        <div className="mb-10 sm:mb-12 p-5 sm:p-8 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark shadow-lg grid lg:grid-cols-12 gap-6 sm:gap-8 items-start w-full max-w-full overflow-hidden box-border">
          
          {/* Left Column: Spotlight Image & Quick Switcher */}
          <div className="lg:col-span-7 space-y-4 w-full min-w-0 max-w-full overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md w-full max-h-[320px]">
              <img
                src={spotlightProject.images?.[0]}
                alt={spotlightProject.title}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-md max-w-[80%] truncate">
                Spotlight Demo
              </div>
            </div>

            {/* Quick Switcher Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 text-xs font-mono scrollbar-thin">
              <span className="text-slate-400 text-[10px] uppercase shrink-0 flex items-center gap-1">
                <FaLayerGroup /> Quick View:
              </span>
              {projects.slice(0, 4).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSpotlightId(p.id)}
                  className={`px-3 py-1 rounded-md transition-all shrink-0 ${
                    spotlightId === p.id
                      ? "bg-brand-indigo text-white font-semibold"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {p.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Spotlight Details (Strict Bound Containment) */}
          <div className="lg:col-span-5 space-y-4 text-left w-full min-w-0 max-w-full overflow-hidden">
            <div className="min-w-0 max-w-full">
              <span className="text-xs font-mono text-brand-indigo dark:text-brand-sky font-semibold block truncate">
                {spotlightProject.role} • {spotlightProject.date}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 break-words">
                {spotlightProject.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-words">
              {spotlightProject.solution}
            </p>

            <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300 min-w-0 max-w-full">
              <p className="font-bold text-slate-900 dark:text-slate-100 text-[11px] font-mono uppercase tracking-wider">
                Key Contributions:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400 break-words">
                {spotlightProject.contributions.slice(0, 3).map((c, i) => (
                  <li key={i} className="break-words">{c}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 max-w-full">
              <button
                onClick={() => setSelectedProjectId(spotlightProject.id)}
                className="px-4 py-2.5 rounded-lg bg-brand-indigo text-white font-semibold text-xs shadow hover:bg-indigo-700 transition-colors shrink-0 max-w-full"
              >
                View Case Study & Code
              </button>
              {spotlightProject.github && (
                <a
                  href={spotlightProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-brand-indigo transition-colors shrink-0"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="text-sm" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Compact 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProjectId(project.id)}
            />
          ))}
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