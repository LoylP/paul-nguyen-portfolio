"use client";

import Link from "next/link";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { CV_PATH } from "@/config/site";
import { getPortfolioContent } from "@/data/portfolioData";
import { CountUp } from "./motion/CountUp";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";
import { useLanguage } from "./Providers";
import { HeroDiagram } from "./HeroDiagram";

export function Hero() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language);

  return (
    <Reveal
      as="section"
      className="hero-section page-width"
      id="top"
      labelledBy="hero-title"
    >
      <div className="hero-content">
        <p className="eyebrow">{copy.hero.headline}</p>
        <h1 className="hero-name" id="hero-title">{copy.hero.displayName}</h1>
        <p className="hero-alt-name">{copy.hero.altName}</p>
        <p className="hero-tagline">{copy.hero.tagline}</p>
        <p className="hero-summary">{copy.hero.summary}</p>
        <p className="hero-meta">
          <MapPin aria-hidden="true" size={16} strokeWidth={1.8} />
          {copy.hero.meta}
        </p>
        <div className="hero-actions">
          {copy.hero.ctas.map((cta, index) => (
            <Link
              className={`button ${index === 0 ? "button-primary" : "button-secondary"}`}
              href={index === 0 ? cta.href ?? "#work" : CV_PATH}
              key={cta.label}
            >
              {cta.label}
              {index === 0
                ? <ArrowDownRight aria-hidden="true" size={17} strokeWidth={1.8} />
                : <Download aria-hidden="true" size={17} strokeWidth={1.8} />}
            </Link>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <HeroDiagram />
      </div>
      <div className="metric-grid" aria-label="Career highlights">
        {copy.metrics.map((metric, index) => (
          <Reveal as="article" className="metric-card" delay={index * 0.06} key={metric.value}>
            <Spotlight className="metric-card-spotlight">
              <p className="metric-value"><CountUp value={metric.value} /></p>
              <p>{metric.label}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
