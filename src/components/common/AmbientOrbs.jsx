import { motion } from "framer-motion";

const MotionDiv = motion.div;

/**
 * Subtle GPU-composited ambient gradient orbs for Hero and Contact sections.
 */
export default function AmbientOrbs({ variant = "hero" }) {
  const isHero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      <MotionDiv
        animate={{
          x: [0, 24, -12, 0],
          y: [0, -18, 12, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className={`will-change-transform absolute rounded-full blur-3xl ${
          isHero
            ? "-top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-brand-indigo/10 dark:bg-brand-indigo/15"
            : "-bottom-24 -left-20 w-64 h-64 sm:w-80 sm:h-80 bg-brand-sky/10 dark:bg-brand-sky/15"
        }`}
      />

      <MotionDiv
        animate={{
          x: [0, -22, 14, 0],
          y: [0, 20, -14, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className={`will-change-transform absolute rounded-full blur-3xl ${
          isHero
            ? "top-1/3 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-brand-sky/10 dark:bg-brand-sky/15"
            : "-top-20 -right-24 w-64 h-64 sm:w-80 sm:h-80 bg-brand-indigo/10 dark:bg-brand-indigo/15"
        }`}
      />
    </div>
  );
}

