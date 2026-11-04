import { en } from "./en";
import { vi } from "./vi";

export type Language = "vi" | "en";
export type ArchitectureDiagramId =
  | "agent-factory"
  | "copilot-adoption"
  | "knowledge-assistant"
  | "ticket-automation"
  | "genai-fashion"
  | "ticket-decision-support"
  | "tailored-ai-solutions"
  | "internal-knowledge-qa"
  | "manager-decision-support"
  | "task-schedule-management"
  | "elearning-platform"
  | "reliability-thesis";

export type PortfolioImage = {
  src: string;
  width: number;
  height: number;
  alt: Record<Language, string>;
  objectPosition?: string;
  fit?: "cover" | "contain";
};

export type PortfolioProject = {
  architectureDiagram?: ArchitectureDiagramId;
  architectureImage?: PortfolioImage;
  coverImage?: PortfolioImage;
  title: string;
  summary: string;
  tag: string;
  subtitle?: string;
  role?: string;
  organization?: string;
  period?: string;
  customerSegment?: string;
  ecosystem?: string[];
  context?: string;
  solution?: string;
  approach?: string;
  outcome?: string;
  measurement?: string;
  stack?: string[];
  conference?: string;
  contribution?: string;
  media?: string;
  status?: string;
  switchTab?: string;
};

export type ResearchCredential = {
  title: string;
  summary: string;
  type: "paper" | "credential" | "award" | "education";
  paperUrl?: "artemissearch" | "fraudtrace";
  projectTab?: string;
  image?: PortfolioImage;
};

export type PortfolioContent = {
  ui: {
    language: string;
    theme: string;
    switchToLight: string;
    switchToDark: string;
  };
  hero: {
    displayName: string;
    altName: string;
    headline: string;
    tagline: string;
    summary: string;
    meta: string;
    ctas: { label: string; href?: string }[];
  };
  metrics: { value: string; label: string }[];
  about: {
    title: string;
    pillars: { title: string }[];
    trajectory: { title: string };
  };
  experience: {
    title: string;
    careerVision: string;
    items: {
      title: string;
      organization: string;
      period: string;
      location?: string;
      bullets: string[];
    }[];
  };
  framework: {
    title: string;
    steps: { phase: string; title: string; summary: string }[];
  };
  skills: {
    title: string;
    groups: { title: string; skills: string[] }[];
  };
  projects: {
    title: string;
    tabs: {
      id: string;
      label: string;
      projects: PortfolioProject[];
      highlights?: string[];
    }[];
  };
  industry: {
    title: string;
    items: { title: string }[];
  };
  research: {
    title: string;
    items: ResearchCredential[];
  };
  footer: {
    title: string;
    message: string;
    links: string[];
    copyright: string;
  };
};

export const content: Record<Language, PortfolioContent> = { vi, en };

export function getPortfolioContent(language: Language): PortfolioContent {
  return content[language];
}
