"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useState } from "react";

/* ------------------------------------------------------------------
   Enterprise AI Hub
   Core (LLM + Agents) → 4 capability groups → platforms & channels,
   wrapped by a Security · Governance ring.
   On load the hub assembles once (~2s): core → capabilities → platforms → governance ring.
   Then every ~4s the core switches to a use case and lights up the
   capabilities / platforms that solution is built from.
   Reuses existing theme classes: .hero-diagram-shell, .hero-diagram-node,
   .diagram-node-title, .diagram-node-detail and CSS vars
   --accent, --accent-secondary, --diagram-line.
------------------------------------------------------------------- */

type CapId = "K" | "A" | "D" | "I";
type OutId = "T" | "TR" | "R" | "BR" | "B" | "BL" | "L" | "TL";

const C = { x: 322, y: 302 }; // hub centre (desktop)

const caps: Record<CapId, { x: number; y: number; title: string; detail: string }> = {
  K: { x: 216, y: 196, title: "Knowledge & RAG", detail: "Search · Q&A" },
  A: { x: 428, y: 196, title: "Agents & Automation", detail: "Tickets · Tasks" },
  D: { x: 428, y: 408, title: "Decision Support", detail: "Scoring · Insights" },
  I: { x: 216, y: 408, title: "Integration & API", detail: "MCP · Systems" },
};

const outs: Record<OutId, { x: number; y: number; label: string; icon: string }> = {
  T: { x: 322, y: 67, label: "M365 Copilot", icon: "/microsoft-copilot.svg" },
  TR: { x: 488, y: 136, label: "Copilot Studio", icon: "/Copilot%20Studio.svg" },
  R: { x: 540, y: 302, label: "Power Automate", icon: "/microsoft-power-automate.svg" },
  BR: { x: 488, y: 468, label: "Teams · Web", icon: "/Teams.svg" },
  B: { x: 322, y: 537, label: "Dify", icon: "/dify.svg" },
  BL: { x: 156, y: 468, label: "MCP · REST API", icon: "/Model_Context_Protocol.svg" },
  L: { x: 104, y: 302, label: "Azure OpenAI", icon: "/Azure%20OpenAI.svg" },
  TL: { x: 156, y: 136, label: "Amazon Quick", icon: "/amazon-quick-suite.svg" },
};

const capLinks: [CapId, OutId][] = [
  ["K", "TL"], ["K", "L"], ["K", "T"],
  ["A", "TR"], ["A", "R"], ["A", "T"],
  ["D", "BR"], ["D", "R"], ["D", "B"],
  ["I", "BL"], ["I", "L"], ["I", "B"],
];

const useCases: { name: string; caps: CapId[]; links: [CapId, OutId][] }[] = [
  { name: "Ticket automation", caps: ["A", "I"], links: [["I", "B"], ["I", "BL"], ["A", "R"]] },
  { name: "Opportunity review", caps: ["D", "A"], links: [["A", "TR"], ["D", "BR"], ["D", "R"]] },
  { name: "Task assignment", caps: ["A", "D"], links: [["A", "TR"], ["A", "T"], ["D", "BR"]] },
  { name: "Knowledge Q&A", caps: ["K", "I"], links: [["K", "L"], ["K", "TL"], ["I", "BL"]] },
];

const CAP_W = 150;
const CAP_H = 48;
const PILL_W = 140;
const PILL_H = 30;

const corePath = (id: CapId) => `M ${C.x} ${C.y} L ${caps[id].x} ${caps[id].y}`;
const linkPath = (c: CapId, o: OutId) => `M ${caps[c].x} ${caps[c].y} L ${outs[o].x} ${outs[o].y}`;

export function HeroDiagram() {
  const reducedMotion = useReducedMotion();
  const id = useId().replaceAll(":", "");
  const [active, setActive] = useState(1);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setIntroDone(true), 2200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const t = window.setInterval(() => setActive((i) => (i + 1) % useCases.length), 4000);
    return () => window.clearInterval(t);
  }, [reducedMotion]);

  const uc = useCases[active];
  const capOn = (c: CapId) => uc.caps.includes(c);
  const linkOn = (c: CapId, o: OutId) => uc.links.some(([a, b]) => a === c && b === o);
  const outOn = (o: OutId) => uc.links.some(([, b]) => b === o);

  return (
    <div className="hero-diagram-shell hub" aria-label="Enterprise AI hub: AI core, capabilities, platforms and governance">
      <style>{hubCss}</style>

      {/* ---------------- Desktop / tablet ---------------- */}
      <svg className="hero-diagram hero-diagram-desktop hub-svg" role="img" viewBox="0 0 644 604">
        <title>
          AI Core connected to Knowledge and RAG, Agents and Automation, Decision Support and Integration and API,
          built on Microsoft 365 Copilot, Copilot Studio, Power Automate, Azure OpenAI, Amazon Quick, Dify, MCP and REST APIs,
          delivered in Teams and the web, wrapped by security and governance.
        </title>
        <defs>
          <linearGradient id={`${id}-hot`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
          <radialGradient id={`${id}-halo`}>
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <filter height="300%" id={`${id}-glow`} width="300%" x="-100%" y="-100%">
            <feGaussianBlur result="blur" stdDeviation="3" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path id={`${id}-ring`} d={`M ${C.x} ${C.y - 292} a 292 292 0 1 1 -0.01 0`} />
        </defs>

        {/* governance ring (slowly rotating) */}
        <motion.g animate={{ opacity: 1 }} initial={reducedMotion ? false : { opacity: 0 }} transition={{ delay: 1.7, duration: 0.6 }}>
        <g className={reducedMotion ? "" : "hub-spin"} style={{ transformOrigin: `${C.x}px ${C.y}px` }}>
          <circle className="hub-ring" cx={C.x} cy={C.y} r="292" />
          <text className="hub-ring-text">
            <textPath href={`#${id}-ring`} startOffset="0">
              SECURITY · GOVERNANCE · RESPONSIBLE AI · ACCESS CONTROL · MONITORING · SECURITY · GOVERNANCE · RESPONSIBLE AI · ACCESS CONTROL · MONITORING ·
            </textPath>
          </text>
        </g>
        </motion.g>
        <circle className="hub-orbit" cx={C.x} cy={C.y} r="235" />
        <circle cx={C.x} cy={C.y} fill={`url(#${id}-halo)`} r="150" />

        {/* capability → platform links */}
        {capLinks.map(([c, o], i) => (
          <motion.path
            animate={{ pathLength: 1 }}
            className={`hub-link${linkOn(c, o) ? " is-on" : ""}`}
            d={linkPath(c, o)}
            initial={reducedMotion ? false : { pathLength: 0 }}
            key={`${c}${o}`}
            transition={{ delay: 0.85 + i * 0.05, duration: 0.5, ease: "easeOut" }}
          />
        ))}
        {/* core → capability spokes */}
        {(Object.keys(caps) as CapId[]).map((c, i) => (
          <motion.path
            animate={{ pathLength: 1 }}
            className={`hub-link hub-spoke${capOn(c) ? " is-on" : ""}`}
            d={corePath(c)}
            initial={reducedMotion ? false : { pathLength: 0 }}
            key={`core${c}`}
            transition={{ delay: 0.35 + i * 0.08, duration: 0.4, ease: "easeOut" }}
          />
        ))}

        {/* travelling pulses on active paths */}
        {!reducedMotion &&
          [...uc.caps.map((c) => corePath(c)), ...uc.links.map(([c, o]) => linkPath(c, o))].map((d, i) => (
            <motion.circle
              animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              fill="var(--accent-secondary)"
              filter={`url(#${id}-glow)`}
              key={`${active}-${d}`}
              r="4"
              style={{ offsetPath: `path('${d}')`, offsetRotate: "0deg" }}
              transition={{ delay: (introDone ? 0 : 2) + (i < uc.caps.length ? 0 : 0.6) + (i % 3) * 0.12, duration: 1.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.4 }}
            />
          ))}

        {/* platform / channel pills — appear one by one around the circle */}
        {(Object.keys(outs) as OutId[]).map((o, i) => (
          <g key={o} transform={`translate(${outs[o].x - PILL_W / 2} ${outs[o].y - PILL_H / 2})`}>
            <motion.g
              animate={{ opacity: 1, scale: 1 }}
              className={`hero-diagram-node hub-pill${outOn(o) ? " is-on" : ""}`}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              transition={{ delay: 0.9 + i * 0.07, duration: 0.35, ease: "easeOut" }}
            >
              <rect height={PILL_H} rx={PILL_H / 2} width={PILL_W} />
              <image height="16" href={outs[o].icon} width="16" x="12" y={(PILL_H - 16) / 2} />
              <text className="diagram-node-detail hub-pill-text" textAnchor="middle" x={PILL_W / 2 + 10} y={PILL_H / 2 + 4}>
                {outs[o].label}
              </text>
            </motion.g>
          </g>
        ))}

        {/* capability nodes — pop out from the core */}
        {(Object.keys(caps) as CapId[]).map((c, i) => (
          <g key={c} transform={`translate(${caps[c].x - CAP_W / 2} ${caps[c].y - CAP_H / 2})`}>
            <motion.g
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              className={`hero-diagram-node hub-cap${capOn(c) ? " is-on" : ""}`}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.7, x: (C.x - caps[c].x) * 0.6, y: (C.y - caps[c].y) * 0.6 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.45, ease: "easeOut" }}
            >
              <rect height={CAP_H} rx="12" width={CAP_W} />
              <text className="diagram-node-title hub-cap-title" textAnchor="middle" x={CAP_W / 2} y="21">{caps[c].title}</text>
              <text className="diagram-node-detail hub-cap-detail" textAnchor="middle" x={CAP_W / 2} y="36">{caps[c].detail}</text>
            </motion.g>
          </g>
        ))}

        {/* AI core */}
        <g transform={`translate(${C.x - 80} ${C.y - 80})`}>
        <motion.g
          animate={{ opacity: 1, scale: 1 }}
          className="hero-diagram-node hub-core"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.7 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <rect height="160" rx="80" width="160" />
          <text className="diagram-node-title hub-core-title" textAnchor="middle" x="80" y="62">AI Core</text>
          <text className="diagram-node-detail" textAnchor="middle" x="80" y="80">LLM + Agents</text>
          <line className="hub-core-divider" x1="44" x2="116" y1="94" y2="94" />
          <text className="hub-usecase-label" textAnchor="middle" x="80" y="110">USE CASE</text>
          <motion.text
            animate={{ opacity: 1, y: 0 }}
            className="hub-usecase"
            initial={reducedMotion ? false : { opacity: 0, y: 4 }}
            key={uc.name}
            textAnchor="middle"
            transition={{ duration: 0.35 }}
            x="80"
            y="126"
          >
            {uc.name}
          </motion.text>
        </motion.g>
        </g>
      </svg>

      {/* ---------------- Mobile ---------------- */}
      <svg className="hero-diagram hero-diagram-mobile hub-svg" role="img" viewBox="0 0 360 340">
        <title>AI Core with four capabilities and the platforms used to deliver them</title>
        <path className="hub-link hub-spoke is-on" d="M 180 92 L 180 122" />
        {(["K", "A", "I", "D"] as CapId[]).map((c, i) => {
          const x = i % 2 === 0 ? 12 : 188;
          const y = i < 2 ? 128 : 186;
          return (
            <g key={c}>
              <g className={`hero-diagram-node hub-cap${capOn(c) ? " is-on" : ""}`} transform={`translate(${x} ${y})`}>
                <rect height="46" rx="11" width="160" />
                <text className="diagram-node-title hub-cap-title" textAnchor="middle" x="80" y="20">{caps[c].title}</text>
                <text className="diagram-node-detail hub-cap-detail" textAnchor="middle" x="80" y="35">{caps[c].detail}</text>
              </g>
            </g>
          );
        })}
        <g className="hero-diagram-node hub-core" transform="translate(110 16)">
          <rect height="76" rx="38" width="140" />
          <text className="diagram-node-title hub-core-title" textAnchor="middle" x="70" y="32">AI Core</text>
          <text className="hub-usecase" textAnchor="middle" x="70" y="52">{uc.name}</text>
        </g>
        {(Object.keys(outs) as OutId[]).map((o, i) => {
          const x = 12 + (i % 4) * 85;
          const y = 258 + Math.floor(i / 4) * 38;
          return (
            <g className={`hero-diagram-node hub-pill${outOn(o) ? " is-on" : ""}`} key={o} transform={`translate(${x} ${y})`}>
              <rect height="28" rx="14" width="80" />
              <image height="11" href={outs[o].icon} width="11" x="7" y="8.5" />
              <text className="diagram-node-detail hub-pill-text hub-pill-sm" textAnchor="middle" x="45" y="18">{outs[o].label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const hubCss = `
.hub-svg { width: 100%; height: auto; overflow: visible; }
.hub .hub-link { fill: none; stroke: var(--diagram-line); stroke-width: 1.4; opacity: .55; transition: opacity .4s ease, stroke-width .4s ease; }
.hub .hub-spoke { stroke-width: 1.8; }
.hub .hub-link.is-on { opacity: 1; stroke-width: 2.4; stroke: var(--accent); }
.hub .hub-ring { fill: none; stroke: var(--diagram-line); stroke-width: 1; stroke-dasharray: 2 6; opacity: .7; }
.hub .hub-orbit { fill: none; stroke: var(--diagram-line); stroke-width: 1; opacity: .35; }
.hub .hub-ring-text { font-size: 9.5px; letter-spacing: .22em; font-weight: 600; fill: var(--accent); opacity: .65; }
.hub .hub-spin { animation: hub-spin 90s linear infinite; }
@keyframes hub-spin { to { transform: rotate(360deg); } }
.hub .hub-cap rect, .hub .hub-pill rect, .hub .hub-core rect { transition: stroke .4s ease, stroke-width .4s ease, filter .4s ease; }
.hub .hub-cap.is-on rect, .hub .hub-pill.is-on rect { stroke: var(--accent); stroke-width: 1.8; }
.hub .hub-cap.is-on rect { filter: drop-shadow(0 0 10px color-mix(in srgb, var(--accent) 35%, transparent)); }
.hub .hub-core rect { stroke: var(--accent); stroke-width: 1.8; filter: drop-shadow(0 0 18px color-mix(in srgb, var(--accent) 30%, transparent)); }
.hub .hub-cap-title { font-size: 12.5px; }
.hub .hub-cap-detail { font-size: 10.5px; }
.hub .hub-core-title { font-size: 18px; }
.hub .hub-core-divider { stroke: var(--diagram-line); stroke-width: 1; opacity: .6; }
.hub .hub-usecase-label { font-size: 8.5px; letter-spacing: .14em; font-weight: 700; fill: var(--accent); opacity: .8; }
.hub .hub-usecase { font-size: 11.5px; font-weight: 700; fill: var(--accent); }
.hub .hub-pill-text { font-size: 11px; font-weight: 600; transition: fill .4s ease; }
.hub .hub-pill-sm { font-size: 8px; }
.hub .hub-pill.is-on .hub-pill-text { fill: var(--accent); }
@media (prefers-reduced-motion: reduce) { .hub .hub-spin { animation: none; } }
`;