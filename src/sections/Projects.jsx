import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const categories = ["All", "Featured", "React / Frontend", "Fullstack / Database"];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Featured") return p.featured;
    return p.category.toLowerCase().includes(activeCategory.toLowerCase().split(" ")[0]);
  });

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
    <section id="projects" className="py-16 sm:py-20 relative bg-canvas-light dark:bg-canvas-dark border-y border-slate-200 dark:border-borderSubtle-dark transition-colors duration-200 w-full max-w-full overflow-x-hidden">
      
      {/* Background Micro Polka Dot Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 min-w-0 max-w-full">
          <div className="min-w-0 max-w-full">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-sky mb-1">
              Engineering Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Selected Work
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

        {/* Focused 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-full">
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