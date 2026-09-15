export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-borderSubtle-dark shadow-sm hover:border-brand-indigo/60 dark:hover:border-brand-sky/60 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col h-full hover:-translate-y-1 w-full max-w-full min-w-0 box-border"
    >
      {/* Compact Thumbnail Container */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 shrink-0">
        <img
          src={project.images?.[0]}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute top-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-md font-medium border border-white/10 max-w-[85%] truncate">
          {project.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow space-y-2.5 min-w-0 max-w-full w-full">
        <div className="min-w-0 max-w-full">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-brand-indigo dark:group-hover:text-brand-sky transition-colors duration-200 line-clamp-1 break-words">
            {project.title}
          </h3>
          <p className="text-[11px] font-mono text-brand-indigo dark:text-brand-sky font-medium mt-0.5 truncate">
            {project.role} • {project.date}
          </p>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed flex-grow break-words">
          {project.problem}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1 pt-2.5 border-t border-slate-100 dark:border-slate-800/60 min-w-0 max-w-full">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 truncate max-w-full"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 self-center pl-1 shrink-0">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
