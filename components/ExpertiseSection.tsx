"use client";

import { useLanguage } from "./Providers";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion/Reveal";
import { FrameworkFlow } from "./FrameworkFlow";
import { SkillsGrid } from "./SkillsGrid";

export function ExpertiseSection() {
  const { language } = useLanguage();

  return (
    <Reveal
      as="section"
      className="section-shell page-width expertise-section"
      id="expertise"
      labelledBy="expertise-title"
    >
      <SectionHeading
        eyebrow={language === "vi" ? "03 / Chuyên môn" : "03 / Expertise"}
        title={language === "vi" ? "Chuyên môn" : "Expertise"}
        titleId="expertise-title"
      />
      <div className="expertise-blocks">
        <FrameworkFlow />
        <SkillsGrid />
      </div>
    </Reveal>
  );
}
