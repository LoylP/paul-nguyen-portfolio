"use client";

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
        description={language === "vi"
          ? "Các dự án tiêu biểu, tóm tắt để quét nhanh và có thể mở để xem chi tiết."
          : "Selected projects, summarized for quick scanning with details available on demand."}
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const suppressCloseRef = useRef(false);
  const closeLabel = language === "vi" ? "Đóng chi tiết dự án" : "Close project details";
  const labels = language === "vi"
    ? {
        problem: "Bài toán",
        approach: "Hướng tiếp cận",
        architecture: "Kiến trúc",
        role: "Vai trò của tôi",
        timeline: "Thời gian & quy mô",
        outcome: "Kết quả",
        details: "Số liệu chi tiết: trao đổi trực tiếp",
      }
    : {
        problem: "Problem",
        approach: "Approach",
        architecture: "Architecture",
        role: "My role",
        timeline: "Timeline & scale",
        outcome: "Outcome",
        details: "Detailed metrics available on request",
      };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => {
      if (dialog.open) {
        suppressCloseRef.current = true;
        dialog.close();
      }
    };
  }, []);

  const details = [
    [labels.problem, project.context],
    [labels.approach, project.approach ?? project.solution ?? project.contribution],
    [labels.outcome, project.outcome],
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));
  const tags = project.stack ?? project.ecosystem ?? [];
  const timelineAndScale = [project.period, project.customerSegment, project.conference]
    .filter(Boolean)
    .join(" · ");

  return (
    <dialog
      aria-labelledby="project-dialog-title"
      aria-modal="true"
      className="project-dialog"
      onClose={() => {
        if (suppressCloseRef.current) {
          suppressCloseRef.current = false;
          return;
        }
        onClose();
      }}
      ref={dialogRef}
    >
      <div className="drawer-topline">
        <span>{project.tag}</span>
        <button autoFocus aria-label={closeLabel} className="icon-button" onClick={() => dialogRef.current?.close()} type="button">
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
      <section className="drawer-detail">
        <h3>{labels.architecture}</h3>
        {project.architectureImage ? (
          <ImageLightbox image={project.architectureImage} language={language} variant="detail" />
        ) : project.architectureDiagram ? (
          <ArchitectureDiagram diagram={project.architectureDiagram} language={language} />
        ) : (
          <ul className="tag-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        )}
      </section>
      <section className="drawer-detail">
        <h3>{labels.role}</h3>
        <p>{project.role ?? (language === "vi" ? "Thành viên dự án" : "Project contributor")}</p>
      </section>
      <section className="drawer-detail">
        <h3>{labels.timeline}</h3>
        <p>{[project.organization, timelineAndScale].filter(Boolean).join(" · ")}</p>
      </section>
      {details.slice(2).map(([label, text]) => (
        <section className="drawer-detail" key={label}>
          <h3>{label}</h3>
          <p>{text}</p>
        </section>
      ))}
      <p className="metrics-on-request">{labels.details}</p>
    </dialog>
  );
}
