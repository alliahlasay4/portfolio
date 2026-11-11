import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const MotionDiv = motion.div;

/**
 * Interactive container that renders a subtle radial spotlight following the cursor
 * using MotionValues so mouse movement does not trigger React re-renders.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(79, 70, 229, 0.12)",
  onClick,
}) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group/spotlight relative overflow-hidden ${className}`}
    >
      <MotionDiv
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

