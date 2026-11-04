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
        eyebrow={language === "vi" ? "02 / Kinh nghiệm" : "02 / Experience"}
        title={copy.title}
        titleId="experience-title"
      />
      <ol className="timeline">
        {copy.items.map((item, index) => (
          <Reveal as="li" className="timeline-item" delay={index * 0.05} key={`${item.organization}-${item.title}`}>
            <span className="timeline-dot" aria-hidden="true" />
            <article className="timeline-entry">
              <time className="timeline-date">{item.period}</time>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-organization">{item.organization}</p>
              <details className="timeline-bullets-disclosure">
                <summary>
                  {language === "vi" ? "Xem trách nhiệm" : "View responsibilities"}
                </summary>
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </details>
            </article>
          </Reveal>
        ))}
      </ol>
      <p className="career-vision">{copy.careerVision}</p>
    </Reveal>
  );
}
