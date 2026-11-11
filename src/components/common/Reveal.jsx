import { motion } from "framer-motion";

const MotionDiv = motion.div;
const EASE_OUT = [0.22, 1, 0.36, 1];

/**
 * Scroll-triggered upward fade-in wrapper for sections, headers, and blocks.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
  duration = 0.45,
  immediate = false,
}) {
  if (immediate) {
    return (
      <MotionDiv
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay, ease: EASE_OUT }}
        className={className}
      >
        {children}
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

/**
 * Container that staggers child StaggerItem animations when scrolled into view.
 */
export function StaggerGroup({
  children,
  className = "",
  stagger = 0.06,
  delay = 0,
  immediate = false,
}) {
  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  if (immediate) {
    return (
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {children}
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

/**
 * Child item animated by a parent StaggerGroup.
 */
export function StaggerItem({ children, className = "", y = 14, duration = 0.4 }) {
  return (
    <MotionDiv
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: EASE_OUT },
        },
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}
