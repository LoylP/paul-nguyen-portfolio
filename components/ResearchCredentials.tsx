"use client";

import {
  Award,
  BookOpenText,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { PAPER_URLS } from "@/config/site";
import { getPortfolioContent, type ResearchCredential } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";

const icons = {
  paper: BookOpenText,
  credential: ShieldCheck,
  award: Award,
  education: GraduationCap,
} as const;

export function ResearchCredentials() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).research;

  return (
    <Reveal
      as="section"
      className="section-shell page-width research-section"
      id="achievements"
      labelledBy="achievements-title"
    >
      <SectionHeading
        eyebrow={language === "vi" ? "04 / Thành tích" : "04 / Achievements"}
        title={copy.title}
        titleId="achievements-title"
      />
      <div className="credential-grid">
        {copy.items.map((item, index) => (
          <ResearchCard item={item} index={index} key={item.title} language={language} />
        ))}
      </div>
    </Reveal>
  );
}

function ResearchCard({
  item,
  index,
  language,
}: {
  item: ResearchCredential;
  index: number;
  language: "vi" | "en";
}) {
  const Icon = icons[item.type];
  const content = (
    <Spotlight as="article" className="credential-card">
      {item.image ? (
        <Image
          alt={item.image.alt[language]}
          className="credential-thumbnail"
          height={item.image.height}
          loading="lazy"
          sizes="(max-width: 700px) 72px, 84px"
          src={item.image.src}
          style={{
            objectFit: item.image.fit ?? "cover",
            objectPosition: item.image.objectPosition ?? "center",
          }}
          width={item.image.width}
        />
      ) : (
        <span className="credential-icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.8} />
        </span>
      )}
      <div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
      </div>
    </Spotlight>
  );

  if (item.projectTab) {
    return (
      <Reveal as="div" delay={index * 0.04}>
        <a
          aria-label={`${item.title} — ${item.summary}`}
          className="credential-action"
          href="#work"
          onClick={(event) => {
            event.preventDefault();
            document.dispatchEvent(new CustomEvent("portfolio:select-tab", { detail: item.projectTab }));
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {content}
        </a>
      </Reveal>
    );
  }

  if (item.paperUrl) {
    return (
      <Reveal as="div" delay={index * 0.04}>
        <a
          aria-label={`${item.title} — ${item.summary}`}
          className="credential-link"
          href={PAPER_URLS[item.paperUrl]}
          rel="noreferrer"
          target="_blank"
        >
          {content}
        </a>
      </Reveal>
    );
  }

  return (
    <Reveal as="div" delay={index * 0.04}>
      {content}
    </Reveal>
  );
}
