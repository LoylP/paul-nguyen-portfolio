"use client";

import { motion, useInView, useReducedMotion, useScroll } from "motion/react";
import { ArrowRight, Compass, FlaskConical, GraduationCap, Workflow } from "lucide-react";
import { useRef } from "react";
import { getPortfolioContent } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";

const phaseIcons = [Compass, Workflow, FlaskConical, GraduationCap];

export function FrameworkFlow() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).framework;
  const frameworkRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameworkRef,
    offset: ["start 85%", "end 45%"],
  });

  return (
    <Reveal as="div" className="framework-subblock" labelledBy="framework-title">
      <div className="expertise-subheading">
        <p className="eyebrow">{language === "vi" ? "Phương pháp" : "Method"}</p>
        <h3 id="framework-title">{copy.title}</h3>
      </div>
      <div className="framework-flow" ref={frameworkRef}>
        <div aria-hidden="true" className="framework-progress-track">
          <motion.div
            className="framework-progress-fill"
            style={reducedMotion
              ? { scaleX: 1, scaleY: 1 }
              : { scaleX: scrollYProgress, scaleY: scrollYProgress }}
          />
        </div>
        <ol className="framework-grid">
          {copy.steps.map((step, index) => (
            <FrameworkStep
              index={index}
              key={step.phase}
              phase={step.phase}
              summary={step.summary}
              title={step.title}
            />
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

function FrameworkStep({
  index,
  phase,
  summary,
  title,
}: {
  index: number;
  phase: string;
  summary: string;
  title: string;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isActive = useInView(ref, { amount: 0.45 });
  const Icon = phaseIcons[index];

  return (
    <li className="framework-step" ref={ref}>
      <Reveal className="framework-step-reveal" delay={index * 0.06}>
        <Spotlight as="article" className={`framework-card${isActive ? " is-active" : ""}`}>
          <span className="framework-icon" aria-hidden="true"><Icon size={19} strokeWidth={1.8} /></span>
          <span className="framework-phase">{phase}</span>
          <h3>{title}</h3>
          <p className="framework-summary">{summary}</p>
          {index < 3 ? (
            <span className="framework-arrow" aria-hidden="true">
              <ArrowRight size={16} strokeWidth={1.8} />
            </span>
          ) : null}
        </Spotlight>
      </Reveal>
    </li>
  );
}
