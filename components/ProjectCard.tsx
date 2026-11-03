"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ImageLightbox } from "./ImageLightbox";
import { Spotlight } from "./motion/Spotlight";

type ProjectCardProps = {
  project: PortfolioProject;
  onSelect: (project: PortfolioProject) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <Spotlight as="article" className="project-card">
      <div className="project-cover">
        {project.coverImage ? (
          <Image
            alt={project.coverImage.alt[language]}
            className="project-cover-image"
            height={project.coverImage.height}
            loading="lazy"
            sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1000px) 50vw, 33vw"
            src={project.coverImage.src}
            style={{ objectFit: "cover", objectPosition: project.coverImage.objectPosition ?? "center" }}
            width={project.coverImage.width}
          />
        ) : project.architectureImage ? (
          <ImageLightbox image={project.architectureImage} language={language} variant="cover" />
        ) : project.architectureDiagram ? (
          <ArchitectureDiagram diagram={project.architectureDiagram} language={language} variant="cover" />
        ) : null}
      </div>
      <div className="project-card-content">
        <span className="project-tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="tag-list">
          {(project.stack ?? project.ecosystem ?? []).slice(0, 3).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <button className="text-button" type="button" onClick={() => onSelect(project)}>
          {language === "vi" ? "Xem chi tiết" : "View details"}
          <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
        </button>
      </div>
    </Spotlight>
  );
}
