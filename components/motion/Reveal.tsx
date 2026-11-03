"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealTag = "div" | "section" | "article" | "li";

const motionTags = {
  article: motion.article,
  div: motion.div,
  li: motion.li,
  section: motion.section,
};

type RevealProps = {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  labelledBy?: string;
};

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  id,
  labelledBy,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag aria-labelledby={labelledBy} className={className} id={id}>
        {children}
      </StaticTag>
    );
  }

  const MotionTag = motionTags[as];

  return (
    <MotionTag
      aria-labelledby={labelledBy}
      className={className}
      id={id}
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.32, ease: "easeOut", delay }}
      viewport={{ amount: 0.12, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </MotionTag>
  );
}
