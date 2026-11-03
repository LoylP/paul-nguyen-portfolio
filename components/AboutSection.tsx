"use client";

import { getPortfolioContent } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./Providers";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";

export function AboutSection() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).about;

  return (
    <Reveal
      as="section"
      className="section-shell page-width"
      id="about"
      labelledBy="about-title"
    >
      <SectionHeading eyebrow="01 / About" title={copy.title} titleId="about-title" />
      <div className="about-grid">
        {copy.pillars.map((pillar, index) => (
          <Reveal as="article" className="content-card about-card" delay={index * 0.06} key={pillar.title}>
            <Spotlight>
              <span className="card-index">0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
      <Spotlight className="trajectory-card">
        <span className="trajectory-mark" aria-hidden="true">
          <ArrowRight size={20} strokeWidth={1.8} />
        </span>
        <div>
          <h3>{copy.trajectory.title}</h3>
          <p>{copy.trajectory.description}</p>
        </div>
      </Spotlight>
    </Reveal>
  );
}
