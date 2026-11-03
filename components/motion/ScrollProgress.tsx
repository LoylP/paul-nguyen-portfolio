"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";

export function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
    />
  );
}
