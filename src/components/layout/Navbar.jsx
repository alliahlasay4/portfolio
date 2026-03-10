import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/70 backdrop-blur-md">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-bold text-xl">
          My Portfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-slate-900 text-center py-4 space-y-4">
          <a href="#about" className="block text-gray-300">About</a>
          <a href="#skills" className="block text-gray-300">Skills</a>
          <a href="#projects" className="block text-gray-300">Projects</a>
          <a href="#contact" className="block text-gray-300">Contact</a>
        </div>
      )}

    </nav>
  );
}