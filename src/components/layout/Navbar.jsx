import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      let current = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120; // adjust for navbar height
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (id, label) => (
    <a
      href={`#${id}`}
      className={`transition ${
        active === id
          ? "text-secondary font-semibold border-b-2 border-secondary pb-1"
          : "hover:text-accent"
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-dark text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="font-bold text-xl">
          <a href="#hero">My Portfolio</a>
        </h1>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-8">
          <li>{navLink("hero", "Home")}</li>
          <li>{navLink("about", "About")}</li>
          <li>{navLink("skills", "Skills")}</li>
          <li>{navLink("projects", "Projects")}</li>
          <li>{navLink("contact", "Contact")}</li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-dark text-center py-4 space-y-4 border-t border-secondary">
          {["hero", "about", "skills", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`block ${
                active === id
                  ? "text-secondary font-semibold"
                  : "hover:text-accent"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
