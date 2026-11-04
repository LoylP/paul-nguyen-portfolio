"use client";

import { useState } from "react";
import { getPortfolioContent } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";
import { IndustryGrid } from "./IndustryGrid";

export function SkillsGrid() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).skills;
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  return (
    <section className="expertise-subblock" aria-labelledby="toolkit-block-title">
      <div className="expertise-subheading">
        <p className="eyebrow">{language === "vi" ? "Bộ công cụ" : "Toolkit"}</p>
        <h3 id="toolkit-block-title">{copy.title}</h3>
      </div>
      <div className="skills-grid">
        {copy.groups.map((group, index) => (
          <Reveal
            as="article"
            className={`content-card skill-card skill-card-${index + 1}`}
            delay={index * 0.06}
            key={group.title}
          >
            <Spotlight>
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <ul className="tag-list" id={`skill-list-${index}`}>
                {(expandedGroups[group.title] ? group.skills : group.skills.slice(0, 6))
                  .map((skill) => <li key={skill}>{skill}</li>)}
                {group.skills.length > 6 ? (
                  <li>
                    <button
                      aria-controls={`skill-list-${index}`}
                      aria-expanded={Boolean(expandedGroups[group.title])}
                      className="tag-expand"
                      id={`skill-expand-${index}`}
                      onClick={() => setExpandedGroups((current) => ({
                        ...current,
                        [group.title]: !current[group.title],
                      }))}
                      type="button"
                    >
                      {expandedGroups[group.title]
                        ? language === "vi" ? "Thu gọn" : "Show less"
                        : `+${group.skills.length - 6}`}
                    </button>
                  </li>
                ) : null}
              </ul>
            </Spotlight>
          </Reveal>
        ))}
        <IndustryGrid />
      </div>
    </section>
  );
}
