"use client";

import { getPortfolioContent } from "@/data/portfolioData";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/config/site";
import { useLanguage } from "./Providers";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion/Reveal";

export function ContactFooter() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).footer;
  const labels = language === "vi"
    ? { eyebrow: "06 / Liên hệ", email: "Email", linkedin: "LinkedIn" }
    : { eyebrow: "06 / Contact", email: "Email", linkedin: "LinkedIn" };

  return (
    <Reveal
      as="section"
      className="contact-section page-width"
      id="contact"
      labelledBy="contact-title"
    >
      <SectionHeading eyebrow={labels.eyebrow} title={copy.title} titleId="contact-title" />
      <p className="contact-message">{copy.message}</p>
      <ul className="contact-channels" aria-label={language === "vi" ? "Kênh liên hệ" : "Contact channels"}>
        <li><a href={`mailto:${CONTACT_EMAIL}`}>{labels.email}: {CONTACT_EMAIL}</a></li>
        <li>
          <a href={LINKEDIN_URL} rel="noreferrer" target="_blank">
            {labels.linkedin}: {LINKEDIN_URL.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        </li>
      </ul>
    </Reveal>
  );
}
