"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

const desktopPaths = [
  "M 154 126 L 204 126",
  "M 354 126 C 382 126 386 66 416 66",
  "M 354 126 C 382 126 386 186 416 186",
  "M 586 66 C 621 66 619 126 654 126",
  "M 586 186 C 621 186 619 126 654 126",
];
const desktopNodes = [
  { x: 14, y: 98, width: 140, title: "Enterprise", detail: "Data" },
  { x: 204, y: 98, width: 150, title: "AI Agents", detail: "Orchestration" },
  { x: 416, y: 38, width: 170, title: "Microsoft 365", detail: "Copilot" },
  { x: 416, y: 158, width: 170, title: "Amazon Quick", detail: "Enterprise AI" },
  { x: 654, y: 98, width: 150, title: "Business", detail: "Users" },
];
const mobilePaths = [
  "M 180 66 L 180 94",
  "M 180 142 L 180 170",
  "M 180 218 L 180 246",
];
const mobileNodes = [
  { x: 40, y: 12, width: 280, title: "Enterprise Data", detail: "" },
  { x: 40, y: 88, width: 280, title: "AI Agents", detail: "Orchestration" },
  { x: 40, y: 164, width: 280, title: "Microsoft 365 Copilot", detail: "Amazon Quick" },
  { x: 40, y: 240, width: 280, title: "Business Users", detail: "" },
];

export function HeroDiagram() {
  const reducedMotion = useReducedMotion();
  const id = useId().replaceAll(":", "");

  return (
    <div className="hero-diagram-shell" aria-label="Enterprise AI solution architecture">
      <DiagramSvg
        id={`${id}-desktop`}
        mobile={false}
        paths={desktopPaths}
        nodes={desktopNodes}
        reducedMotion={reducedMotion}
        title="Enterprise Data to AI Agents to Microsoft 365 Copilot or Amazon Quick to Business Users"
        viewBox="0 0 820 260"
      />
      <DiagramSvg
        id={`${id}-mobile`}
        mobile
        paths={mobilePaths}
        nodes={mobileNodes}
        reducedMotion={reducedMotion}
        title="Enterprise Data to AI Agents to Microsoft 365 Copilot and Amazon Quick to Business Users"
        viewBox="0 0 360 310"
      />
    </div>
  );
}

type DiagramNode = {
  x: number;
  y: number;
  width: number;
  title: string;
  detail: string;
};

function DiagramSvg({
  id,
  mobile,
  nodes,
  paths,
  reducedMotion,
  title,
  viewBox,
}: {
  id: string;
  mobile: boolean;
  nodes: DiagramNode[];
  paths: string[];
  reducedMotion: boolean | null;
  title: string;
  viewBox: string;
}) {
  return (
    <svg
      className={`hero-diagram${mobile ? " hero-diagram-mobile" : " hero-diagram-desktop"}`}
      role="img"
      viewBox={viewBox}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={`${id}-line`} x1="0" x2="1">
          <stop offset="0%" stopColor="var(--diagram-line)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
        <filter height="300%" id={`${id}-glow`} width="300%" x="-100%" y="-100%">
          <feGaussianBlur result="blur" stdDeviation="3" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths.map((path, index) => (
        <g key={path}>
          <motion.path
            animate={reducedMotion ? undefined : { pathLength: 1 }}
            d={path}
            initial={reducedMotion ? false : { pathLength: 0 }}
            pathLength={1}
            stroke={`url(#${id}-line)`}
            strokeLinecap="round"
            strokeWidth="2"
            transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
          />
          {!reducedMotion ? (
            <motion.circle
              animate={{ offsetDistance: ["0%", "100%"] }}
              fill="var(--accent-secondary)"
              filter={`url(#${id}-glow)`}
              r="4"
              style={{ offsetPath: `path('${path}')`, offsetRotate: "0deg" }}
              transition={{
                delay: 0.7 + index * 0.18,
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          ) : null}
        </g>
      ))}
      {nodes.map((node) => (
        <g className="hero-diagram-node" key={node.title} transform={`translate(${node.x} ${node.y})`}>
          <rect height={mobile ? "48" : "64"} rx="14" width={node.width} />
          <text className="diagram-node-title" textAnchor="middle" x={node.width / 2} y={mobile ? "21" : "27"}>
            {node.title}
          </text>
          {node.detail ? (
            <text className="diagram-node-detail" textAnchor="middle" x={node.width / 2} y={mobile ? "37" : "45"}>
              {node.detail}
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}
