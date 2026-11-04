"use client";

import { useState } from "react";
import Image from "next/image";
import { getSkillCategories } from "@/data/toolkitData";
import { useLanguage } from "./Providers";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";
import { IndustryGrid } from "./IndustryGrid";

export function SkillsGrid() {
  const { language } = useLanguage();
  const categories = getSkillCategories(language);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  return (
    <section className="expertise-subblock" aria-labelledby="toolkit-block-title">
      <div className="expertise-subheading">
        <p className="eyebrow">{language === "vi" ? "BỘ CÔNG CỤ" : "TOOLKIT"}</p>
        <h3 id="toolkit-block-title">
          {language === "vi" ? "Năng lực kỹ thuật" : "Technical expertise"}
        </h3>
      </div>
      <div className="skills-grid">
        {categories.map((category, index) => {
          const expanded = Boolean(expandedCategories[category.id]);
          const featuredSkills = category.skills.filter((skill) => skill.featured);
          const hiddenSkills = category.skills.filter((skill) => !skill.featured);
          const visibleSkills = expanded ? category.skills : featuredSkills;

          return (
          <Reveal
            as="article"
            className={`content-card skill-card skill-card-${index + 1}`}
            delay={index * 0.06}
            key={category.id}
          >
            <Spotlight>
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{category.title}</h3>
              <ul className="skill-pill-list" id={`skill-list-${category.id}`}>
                {visibleSkills.map((skill) => (
                  <li className="skill-pill" key={skill.name}>
                    {skill.icon ? (
                      <span className="skill-pill-logo-frame" aria-hidden="true">
                        <Image
                          alt=""
                          className="skill-pill-logo"
                          fill
                          onError={(event) => {
                            event.currentTarget.parentElement?.setAttribute("hidden", "true");
                          }}
                          sizes="16px"
                          src={skill.icon}
                        />
                      </span>
                    ) : (
                      <span className="skill-pill-mark" aria-hidden="true">
                        {skill.name.slice(0, 1)}
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
              {hiddenSkills.length > 0 ? (
                <button
                  aria-controls={`skill-list-${category.id}`}
                  aria-expanded={expanded}
                  className="skill-expand"
                  onClick={() => setExpandedCategories((current) => ({
                    ...current,
                    [category.id]: !current[category.id],
                  }))}
                  type="button"
                >
                  {expanded
                    ? language === "vi" ? "Thu gọn ↑" : "Show less ↑"
                    : language === "vi"
                      ? `Xem thêm (+${hiddenSkills.length}) ↓`
                      : `Show more (+${hiddenSkills.length}) ↓`}
                </button>
              ) : null}
            </Spotlight>
          </Reveal>
          );
        })}
        <IndustryGrid />
      </div>
    </section>
  );
}
