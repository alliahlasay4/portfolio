import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800
      text-white pt-24"
    >
      <div className="max-w-4xl mx-auto text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hi, I'm Alliah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-gray-300 text-lg"
        >
          Web developer focused on building modern web applications
          using React and clean UI design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          ↓
        </motion.div>

      </div>
    </section>
  );
}