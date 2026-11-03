"use client";

import { useReducedMotion } from "motion/react";
import { createElement, type ElementType } from "react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useEffect, useState } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
};

type SpotlightStyle = CSSProperties & {
  "--spotlight-x"?: string;
  "--spotlight-y"?: string;
};

const tags: Record<NonNullable<SpotlightProps["as"]>, ElementType> = {
  article: "article",
  div: "div",
  li: "li",
};

export function Spotlight({ children, className, as = "div" }: SpotlightProps) {
  const reducedMotion = useReducedMotion();
  const [desktopPointer, setDesktopPointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePointer = () => setDesktopPointer(query.matches);
    updatePointer();
    query.addEventListener("change", updatePointer);
    return () => query.removeEventListener("change", updatePointer);
  }, []);

  function updateSpotlight(event: PointerEvent<HTMLDivElement>) {
    if (!desktopPointer || reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const style: SpotlightStyle = {
      "--spotlight-x": `${event.clientX - bounds.left}px`,
      "--spotlight-y": `${event.clientY - bounds.top}px`,
    };
    Object.assign(event.currentTarget.style, style);
  }

  return createElement(
    tags[as],
    {
      className: `spotlight-card${className ? ` ${className}` : ""}`,
      onPointerMove: updateSpotlight,
    },
    children,
  );
}
