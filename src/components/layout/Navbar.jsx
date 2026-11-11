import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { portfolioData } from "../../data/portfolioData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-canvas-dark/85 backdrop-blur-md border-b border-slate-200/80 dark:border-borderSubtle-dark/80 shadow-sm py-2.5 sm:py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand-indigo via-indigo-500 to-brand-sky transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2"
          aria-label={portfolioData.personal.name}
        >
          <span className="w-8 h-8 rounded-lg bg-brand-indigo dark:bg-brand-sky flex items-center justify-center text-white font-mono font-black text-xs shadow-sm group-hover:bg-indigo-700 dark:group-hover:bg-sky-500 transition-colors duration-200 shrink-0">
            AL
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-slate-700 hover:text-brand-indigo dark:text-slate-300 dark:hover:text-brand-sky transition-colors duration-200 py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-indigo to-brand-sky transition-all duration-300 ease-out group-hover:w-full rounded-full" />
            </a>
          ))}

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark text-slate-700 dark:text-slate-200 hover:text-brand-indigo dark:hover:text-brand-sky hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 active:scale-95 flex items-center justify-center overflow-hidden"
          >
            <span className="inline-block transition-transform duration-300 transform active:rotate-45">
              {theme === "dark" ? <FaSun className="text-amber-400 text-sm animate-[spin_10s_linear_infinite]" /> : <FaMoon className="text-slate-700 text-sm" />}
            </span>
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark text-slate-700 dark:text-slate-200"
          >
            {theme === "dark" ? <FaSun className="text-amber-400 text-sm" /> : <FaMoon className="text-slate-700 text-sm" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark text-slate-800 dark:text-slate-200"
          >
            {mobileOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-canvas-dark/95 backdrop-blur-lg border-b border-slate-200 dark:border-borderSubtle-dark px-4 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-indigo dark:hover:text-brand-sky py-1.5"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
