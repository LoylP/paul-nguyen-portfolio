"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

function parseValue(value: string) {
  const match = value.match(/^([\d,.]+)(.*)$/);

  if (!match) {
    return { amount: 0, suffix: "", decimals: 0, separator: "," };
  }

  const [whole, fraction] = match[1].split(/[,.]/);
  const amount = Number(match[1].replaceAll(",", ""));
  const separator = match[1].includes(".") ? "." : ",";

  return {
    amount,
    decimals: fraction?.length ?? 0,
    separator,
    suffix: match[2],
    whole,
  };
}

export function CountUp({ value, className, duration = 1.2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const reducedMotion = useReducedMotion();
  const { amount, decimals, separator, suffix, whole } = parseValue(value);
  const count = useMotionValue(0);
  const display = useTransform(count, (current) => {
    const rounded = current.toFixed(decimals);
    const [integer, fraction] = rounded.split(".");
    const formattedInteger = Number(integer).toLocaleString("en-US");
    const normalizedInteger = separator === "." ? formattedInteger.replaceAll(",", ".") : formattedInteger;
    return `${normalizedInteger}${fraction ? `${separator}${fraction}` : ""}${suffix}`;
  });

  useEffect(() => {
    if (reducedMotion || !isInView) return;
    const controls = animate(count, amount, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [amount, count, duration, isInView, reducedMotion]);

  if (reducedMotion) {
    return <span className={className}>{value}</span>;
  }

  return (
    <motion.span className={className} ref={ref}>
      {isInView ? display : `${whole}${suffix}`}
    </motion.span>
  );
}
