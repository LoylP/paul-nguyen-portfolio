"use client";

import { motion, useReducedMotion } from "motion/react";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { getPortfolioContent, type PortfolioProject } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ImageLightbox } from "./ImageLightbox";
import { Reveal } from "./motion/Reveal";

export function ProjectTabs() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).projects;
  const tabs = copy.tabs;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeTabData = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  useEffect(() => {
    const handleSelectTab = (event: Event) => {
      if (!(event instanceof CustomEvent)) return;
      const tabId: unknown = event.detail;
      if (typeof tabId === "string" && tabs.some((tab) => tab.id === tabId)) {
        setActiveTab(tabId);
      }
    };

    document.addEventListener("portfolio:select-tab", handleSelectTab);
    return () => document.removeEventListener("portfolio:select-tab", handleSelectTab);
  }, [tabs]);

  function moveTabFocus(currentIndex: number, direction: -1 | 1) {
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    setActiveTab(nextTab.id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <Reveal
      as="section"
      className="section-shell page-width work-section"
      id="work"
      labelledBy="work-title"
    >
      <SectionHeading
        eyebrow={language === "vi" ? "01 / Dự án" : "01 / Selected Work"}
        title={copy.title}
        titleId="work-title"
      />
      <div className="project-tabs" role="tablist" aria-label={copy.title}>
        {tabs.map((tab, index) => (
          <button
            aria-controls={`panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            className="project-tab"
            id={`tab-${tab.id}`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                moveTabFocus(index, 1);
              } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                moveTabFocus(index, -1);
              } else if (event.key === "Home") {
                event.preventDefault();
                setActiveTab(tabs[0].id);
                tabRefs.current[0]?.focus();
              } else if (event.key === "End") {
                event.preventDefault();
                const lastIndex = tabs.length - 1;
                setActiveTab(tabs[lastIndex].id);
                tabRefs.current[lastIndex]?.focus();
              }
            }}
            ref={(element) => { tabRefs.current[index] = element; }}
            role="tab"
            tabIndex={activeTab === tab.id ? 0 : -1}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        aria-labelledby={`tab-${activeTabData.id}`}
        className="project-panel"
        id={`panel-${activeTabData.id}`}
        role="tabpanel"
        tabIndex={0}
      >
        <div className="project-grid">
          {activeTabData.projects.map((project, index) => (
              <Reveal as="div" delay={index * 0.06} key={project.title}>
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </Reveal>
            ))}
        </div>
      </div>
      {selectedProject ? (
        <ProjectDrawer
          language={language}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </Reveal>
  );
}

function ProjectDrawer({
  language,
  project,
  onClose,
}: {
  language: "vi" | "en";
  project: PortfolioProject;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [portalTarget] = useState<HTMLElement | null>(
    () => typeof document === "undefined" ? null : document.body,
  );
  const reducedMotion = useReducedMotion();
  const closeLabel = language === "vi" ? "Đóng chi tiết dự án" : "Close project details";
  const labels = language === "vi"
    ? {
        problem: "Bài toán",
        approach: "Hướng tiếp cận",
        architecture: "Kiến trúc",
        stack: "Công nghệ",
        role: "Vai trò của tôi",
        timeline: "Thời gian & quy mô",
        outcome: "Kết quả",
        details: "Số liệu chi tiết: trao đổi trực tiếp",
      }
    : {
        problem: "Problem",
        approach: "Approach",
        architecture: "Architecture",
        stack: "Tech stack",
        role: "My role",
        timeline: "Timeline & scale",
        outcome: "Outcome",
        details: "Detailed metrics available on request",
      };

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!portalTarget || !panel) return;
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = panel?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !panel?.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !panel?.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, portalTarget]);

  const details = [
    [labels.problem, project.context],
    [labels.approach, project.approach ?? project.solution ?? project.contribution],
    [labels.outcome, project.outcome],
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));
  const tags = project.stack ?? project.ecosystem ?? [];
  const timelineAndScale = [project.period, project.customerSegment, project.conference]
    .filter(Boolean)
    .join(" · ");

  if (!portalTarget) return null;

  return createPortal(
    <div
      className="project-drawer-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        aria-labelledby="project-dialog-title"
        aria-modal="true"
        className="project-dialog"
        initial={false}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
        ref={panelRef}
        role="dialog"
        tabIndex={-1}
      >
        <div className="drawer-topline">
          <span>{project.status ?? project.tag}</span>
          <button
            aria-label={closeLabel}
            className="icon-button"
            onClick={onClose}
            ref={closeRef}
            type="button"
          >
            <X aria-hidden="true" size={20} strokeWidth={1.8} />
          </button>
        </div>
        <h2 id="project-dialog-title">{project.title}</h2>
        {details.slice(0, 2).map(([label, text]) => (
          <section className="drawer-detail" key={label}>
            <h3>{label}</h3>
            <p>{text}</p>
          </section>
        ))}
        {tags.length ? (
          <section className="drawer-detail">
            <h3>{labels.stack}</h3>
            <ul className="tag-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </section>
        ) : null}
        <section className="drawer-detail">
          <h3>{labels.architecture}</h3>
          {project.switchTab ? (
            <ArchitectureDiagram diagram={project.architectureDiagram ?? "tailored-ai-solutions"} language={language} />
          ) : project.architectureImage ? (
            <ImageLightbox image={project.architectureImage} language={language} variant="detail" />
          ) : project.architectureDiagram ? (
            <ArchitectureDiagram diagram={project.architectureDiagram} language={language} />
          ) : (
            <ul className="tag-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          )}
        </section>
        {project.role ? (
          <section className="drawer-detail">
            <h3>{labels.role}</h3>
            <p>{project.role}</p>
          </section>
        ) : null}
        {project.organization || timelineAndScale ? (
          <section className="drawer-detail">
            <h3>{labels.timeline}</h3>
            <p>{[project.organization, timelineAndScale].filter(Boolean).join(" · ")}</p>
          </section>
        ) : null}
        {details.slice(2).map(([label, text]) => (
          <section className="drawer-detail" key={label}>
            <h3>{label}</h3>
            <p>{text}</p>
          </section>
        ))}
        {project.switchTab ? (
          <button
            className="button button-secondary systems-tab-link"
            onClick={() => {
              document.dispatchEvent(new CustomEvent("portfolio:select-tab", { detail: project.switchTab }));
              onClose();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            type="button"
          >
            {language === "vi" ? "Xem các hệ thống đã xây dựng" : "See systems built"}
          </button>
        ) : null}
        <p className="metrics-on-request">{labels.details}</p>
      </motion.div>
    </div>,
    portalTarget,
  );
}
