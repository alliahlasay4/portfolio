import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { portfolioData } from "../../data/portfolioData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-canvas-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-borderSubtle-dark shadow-sm py-2.5 sm:py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2.5 group truncate max-w-[210px] sm:max-w-none"
        >
          <span className="w-8 h-8 rounded-lg bg-brand-indigo dark:bg-brand-sky flex items-center justify-center text-white font-mono font-black text-xs shadow-sm group-hover:bg-indigo-700 dark:group-hover:bg-sky-500 transition-colors duration-200 shrink-0">
            AL
          </span>
          <span className="font-semibold truncate">{portfolioData.personal.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-indigo dark:text-slate-300 dark:hover:text-brand-sky transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark text-slate-700 dark:text-slate-200 hover:text-brand-indigo dark:hover:text-brand-sky transition-colors duration-200"
          >
            {theme === "dark" ? <FaSun className="text-amber-400 text-sm" /> : <FaMoon className="text-slate-700 text-sm" />}
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
