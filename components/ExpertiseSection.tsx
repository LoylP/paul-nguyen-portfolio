"use client";

import { useLanguage } from "./Providers";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion/Reveal";
import { IndustryGrid } from "./IndustryGrid";
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
        eyebrow={language === "vi" ? "04 / Chuyên môn" : "04 / Expertise"}
        title={language === "vi" ? "Chuyên môn" : "Expertise"}
        titleId="expertise-title"
        description={language === "vi"
          ? "Kinh nghiệm theo ngành và năng lực kỹ thuật, trình bày gọn để dễ quét nhanh."
          : "Industry experience and technical capabilities, organized for a quick scan."}
      />
      <div className="expertise-blocks">
        <IndustryGrid />
        <SkillsGrid />
      </div>
    </Reveal>
  );
}
