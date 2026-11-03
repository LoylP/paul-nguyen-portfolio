"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./Providers";

const sectionIds = ["work", "method", "experience", "expertise", "research", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

const labels: Record<"vi" | "en", Record<SectionId, string>> = {
  vi: {
    work: "Dự án",
    method: "Phương pháp",
    experience: "Kinh nghiệm",
    expertise: "Chuyên môn",
    research: "Nghiên cứu",
    contact: "Liên hệ",
  },
  en: {
    work: "Work",
    method: "Method",
    experience: "Experience",
    expertise: "Expertise",
    research: "Research",
    contact: "Contact",
  },
};

function isSectionId(value: string): value is SectionId {
  return sectionIds.some((id) => id === value);
}

function scrollLinkIntoView(
  nav: HTMLElement | null,
  link: HTMLAnchorElement | undefined,
) {
  if (!nav || !link || !window.matchMedia("(max-width: 1023px)").matches) return;

  const navBounds = nav.getBoundingClientRect();
  const linkBounds = link.getBoundingClientRect();
  nav.scrollLeft += linkBounds.left - navBounds.left
    - (nav.clientWidth - link.clientWidth) / 2;
}

export function SectionNav() {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<SectionId>("work");
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<Partial<Record<SectionId, HTMLAnchorElement>>>({});

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const updateActiveSection = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        const lastSection = sectionIds[sectionIds.length - 1];
        if (lastSection !== activeSection) {
          setActiveSection(lastSection);
          scrollLinkIntoView(navRef.current, linksRef.current[lastSection]);
        }
        return;
      }

      const headerHeight = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
      ) || 80;
      const focusLine = headerHeight + 24;
      const current = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= focusLine && bounds.bottom > focusLine;
      });

      if (current && isSectionId(current.id) && current.id !== activeSection) {
        setActiveSection(current.id);
        scrollLinkIntoView(navRef.current, linksRef.current[current.id]);
      }
    };
    const observer = new IntersectionObserver(
      updateActiveSection,
      { rootMargin: "-120px 0px -62% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [activeSection, reducedMotion]);

  useEffect(() => {
    const scrollActiveIntoView = () => {
      const nav = navRef.current;
      const activeLink = linksRef.current[activeSection];
      scrollLinkIntoView(nav, activeLink);
    };

    scrollActiveIntoView();
    window.addEventListener("resize", scrollActiveIntoView);
    return () => window.removeEventListener("resize", scrollActiveIntoView);
  }, [activeSection, reducedMotion]);

  return (
    <nav
      aria-label={language === "vi" ? "Điều hướng các mục" : "Portfolio sections"}
      className="section-nav"
      ref={navRef}
    >
      {sectionIds.map((id) => (
        <a
          aria-current={activeSection === id ? "page" : undefined}
          className="section-nav-link"
          href={`#${id}`}
          key={id}
          ref={(element) => {
            if (element) linksRef.current[id] = element;
          }}
        >
          {activeSection === id ? (
            <motion.span
              className="section-nav-active"
              layoutId={reducedMotion ? undefined : "section-nav-active"}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
            />
          ) : null}
          <span className="section-nav-label">{labels[language][id]}</span>
        </a>
      ))}
    </nav>
  );
}
