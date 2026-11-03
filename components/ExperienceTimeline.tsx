"use client";

import { getPortfolioContent } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion/Reveal";

export function ExperienceTimeline() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).experience;

  return (
    <Reveal
      as="section"
      className="section-shell page-width"
      id="experience"
      labelledBy="experience-title"
    >
      <SectionHeading
        eyebrow={language === "vi" ? "03 / Kinh nghiệm" : "03 / Experience"}
        title={copy.title}
        titleId="experience-title"
        description={copy.intro}
      />
      <ol className="timeline">
        {copy.items.map((item, index) => (
          <Reveal as="li" className="timeline-item" delay={index * 0.05} key={`${item.organization}-${item.title}`}>
            <span className="timeline-dot" aria-hidden="true" />
            <details className="timeline-entry">
              <summary>
                <span className="timeline-meta">
                  <span>{item.period}</span>
                  {item.location ? <span>{item.location}</span> : null}
                </span>
                <span className="timeline-content">
                  <span className="timeline-title">{item.title}</span>
                  <span className="timeline-organization">{item.organization}</span>
                  <span className="timeline-summary">{item.description}</span>
                </span>
              </summary>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </details>
          </Reveal>
        ))}
      </ol>
      <p className="career-vision">{copy.careerVision}</p>
    </Reveal>
  );
}
