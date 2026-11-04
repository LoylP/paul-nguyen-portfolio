import type { ArchitectureDiagramId } from "@/data/portfolioData";
import { useId } from "react";

type ArchitectureDiagramProps = {
  diagram: ArchitectureDiagramId;
  language: "vi" | "en";
  variant?: "cover" | "detail";
};

type DiagramData = {
  title: string;
  nodes: string[];
};

const diagrams: Record<ArchitectureDiagramId, Record<"vi" | "en", DiagramData>> = {
  "agent-factory": {
    en: {
      title: "Multi-agent orchestration architecture",
      nodes: ["Channels", "Orchestrator", "Agents: Copilot Studio · n8n · Dify", "Enterprise APIs"],
    },
    vi: {
      title: "Kiến trúc điều phối multi-agent",
      nodes: ["Kênh", "Bộ điều phối", "Tác tử AI: Copilot Studio · n8n · Dify", "API doanh nghiệp"],
    },
  },
  "copilot-adoption": {
    en: {
      title: "Microsoft 365 Copilot adoption flow",
      nodes: ["Discovery", "Role-based Playbooks", "Training", "Usage Tracking", "Support"],
    },
    vi: {
      title: "Lộ trình ứng dụng Microsoft 365 Copilot",
      nodes: ["Khảo sát", "Kịch bản theo vai trò", "Đào tạo", "Theo dõi sử dụng", "Hỗ trợ"],
    },
  },
  "knowledge-assistant": {
    en: {
      title: "Permission-aware enterprise knowledge assistant",
      nodes: ["S3 · SharePoint · Jira · Salesforce", "Permission-aware Connectors", "Amazon Quick", "Users"],
    },
    vi: {
      title: "Trợ lý tri thức doanh nghiệp có phân quyền",
      nodes: ["S3 · SharePoint · Jira · Salesforce", "Bộ kết nối có phân quyền", "Amazon Quick", "Người dùng"],
    },
  },
  "ticket-automation": {
    en: {
      title: "AI ticket automation workflow",
      nodes: ["Ticket channels", "AI classification", "Priority & routing", "Resolution team"],
    },
    vi: {
      title: "Quy trình tự động hóa ticket bằng AI",
      nodes: ["Kênh tiếp nhận", "AI phân loại", "Ưu tiên & điều phối", "Nhóm xử lý"],
    },
  },
  "genai-fashion": {
    en: {
      title: "Generative fashion design workflow",
      nodes: ["Text prompt", "Generative model", "Design concepts"],
    },
    vi: {
      title: "Quy trình tạo mẫu thời trang bằng AI",
      nodes: ["Mô tả bằng văn bản", "Mô hình tạo sinh", "Mẫu thiết kế"],
    },
  },
  "ticket-decision-support": {
    en: {
      title: "Ticket decision-support workflow",
      nodes: ["Ticket intake", "Context analysis", "Resolver recommendation"],
    },
    vi: {
      title: "Quy trình hỗ trợ quyết định xử lý ticket",
      nodes: ["Tiếp nhận ticket", "Phân tích ngữ cảnh", "Đề xuất người xử lý"],
    },
  },
  "tailored-ai-solutions": {
    en: {
      title: "Tailored enterprise AI solution process",
      nodes: [
        "Understand: current state · issues · pain points",
        "Design the right solution",
        "SaaS & open source first · Data · AI · Security",
        "Easy to use · fast enablement",
      ],
    },
    vi: {
      title: "Quy trình thiết kế giải pháp AI may đo",
      nodes: [
        "Tìm hiểu: hiện trạng · vấn đề · pain point",
        "Thiết kế giải pháp phù hợp",
        "SaaS & mã nguồn mở · Dữ liệu · AI · Bảo mật",
        "Dễ dùng · hướng dẫn nhanh",
      ],
    },
  },
  "internal-knowledge-qa": {
    en: {
      title: "Internal knowledge Q&A feedback loop",
      nodes: [
        "Collect & analyze user data",
        "Clean knowledge base",
        "RAG query design",
        "Answers with images",
        "Feedback · evaluation · KB updates",
      ],
    },
    vi: {
      title: "Vòng lặp hỏi đáp tri thức nội bộ",
      nodes: [
        "Thu thập & phân tích dữ liệu",
        "Làm sạch kho tri thức",
        "Thiết kế truy vấn RAG",
        "Trả lời kèm hình ảnh",
        "Phản hồi · đánh giá · cập nhật kho tri thức",
      ],
    },
  },
  "manager-decision-support": {
    en: {
      title: "Manager decision-support flow",
      nodes: ["Business context", "Existing Microsoft license", "AI recommendation", "Manager decision"],
    },
    vi: {
      title: "Luồng hỗ trợ quyết định cho quản lý",
      nodes: ["Bối cảnh nghiệp vụ", "License Microsoft sẵn có", "AI đề xuất", "Quản lý quyết định"],
    },
  },
  "task-schedule-management": {
    en: {
      title: "Task and schedule assistant",
      nodes: ["Requests & schedules", "AI assistant", "Owner · reminders · alerts", "Team"],
    },
    vi: {
      title: "Trợ lý quản lý công việc và lịch",
      nodes: ["Yêu cầu & lịch", "Trợ lý AI", "Phân công · nhắc lịch · cảnh báo", "Đội ngũ"],
    },
  },
  "elearning-platform": {
    en: {
      title: "Trainer and presales learning platform",
      nodes: ["Industry portfolio", "Training library", "Use cases", "Reusable enablement"],
    },
    vi: {
      title: "Nền tảng học tập cho Trainer và Presales",
      nodes: ["Portfolio theo ngành", "Kho tài liệu", "Use case", "Tái sử dụng đào tạo"],
    },
  },
  "reliability-thesis": {
    en: {
      title: "Reliability propagation decision support",
      nodes: ["Multiple assessments", "Reliability weights", "Evidence aggregation", "Decision support"],
    },
    vi: {
      title: "Hỗ trợ quyết định bằng lan truyền độ tin cậy",
      nodes: ["Nhiều nguồn đánh giá", "Trọng số tin cậy", "Tổng hợp bằng chứng", "Hỗ trợ quyết định"],
    },
  },
};

export function ArchitectureDiagram({ diagram, language, variant = "detail" }: ArchitectureDiagramProps) {
  const { title, nodes } = diagrams[diagram][language];
  const id = useId().replaceAll(":", "");
  if (variant === "cover") {
    const nodeWidth = nodes.length > 4 ? 82 : 102;
    const gap = (500 - 24 - nodes.length * nodeWidth) / (nodes.length - 1);
    const fontSize = nodes.length > 4 ? 11 : 13;

    return (
      <div className="architecture-cover" role="img" aria-label={title}>
        <svg aria-hidden="true" className="architecture-cover-svg" viewBox="0 0 500 280">
          <defs>
            <marker id={`${id}-cover-arrow`} markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="4">
              <path d="M 0 0 L 8 4 L 0 8 z" />
            </marker>
          </defs>
          {nodes.map((node, index) => {
            const x = 12 + index * (nodeWidth + gap);
            const maxLineLength = nodes.length > 4 ? 12 : 16;
            const lines = node.split(/\s+/).reduce<string[]>((result, word) => {
              const last = result.at(-1);
              if (last && `${last} ${word}`.length <= maxLineLength) {
                result[result.length - 1] = `${last} ${word}`;
              } else {
                result.push(word);
              }
              return result;
            }, []);
            const lineHeight = 16;
            const firstLineY = 140 - ((lines.length - 1) * lineHeight) / 2 + fontSize * 0.35;

            return (
              <g key={node}>
                {index < nodes.length - 1 ? (
                  <path
                    className="architecture-connector"
                    d={`M ${x + nodeWidth} 140 L ${x + nodeWidth + gap - 5} 140`}
                    markerEnd={`url(#${id}-cover-arrow)`}
                  />
                ) : null}
                <rect className="architecture-node" height="82" rx="12" width={nodeWidth} x={x} y="99" />
                <text className="architecture-node-label" fontSize={fontSize} textAnchor="middle" x={x + nodeWidth / 2} y={firstLineY}>
                  {lines.map((line, lineIndex) => (
                    <tspan key={`${node}-${lineIndex}`} dy={lineIndex === 0 ? 0 : lineHeight} x={x + nodeWidth / 2}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  const nodeWidth = nodes.length > 4 ? 116 : 136;
  const gap = nodes.length > 4 ? 12 : 20;
  const height = 114;
  const width = nodes.length * nodeWidth + (nodes.length - 1) * gap + 20;
  const centerY = 58;
  const mobileHeight = 24 + nodes.length * 76;
  const mobileNodeWidth = 260;
  const mobileNodeX = 10;

  return (
    <figure className="architecture-diagram">
      <figcaption>{title}</figcaption>
      <svg
        aria-label={title}
        className="architecture-diagram-svg architecture-diagram-desktop"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <marker id={`${id}-desktop-arrow`} markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="4">
            <path d="M 0 0 L 8 4 L 0 8 z" />
          </marker>
        </defs>
        {nodes.map((node, index) => {
          const x = 10 + index * (nodeWidth + gap);
          const lineBreak = node.length > 20 ? node.match(/.{1,18}(?:\s|$)/g) : null;
          const lines = lineBreak?.map((line) => line.trim()) ?? [node];
          return (
            <g key={node}>
              {index < nodes.length - 1 ? (
                <path
                  className="architecture-connector"
                  d={`M ${x + nodeWidth} ${centerY} L ${x + nodeWidth + gap - 4} ${centerY}`}
                  markerEnd={`url(#${id}-desktop-arrow)`}
                />
              ) : null}
              <rect className="architecture-node" height="62" rx="10" width={nodeWidth} x={x} y="27" />
              <text className="architecture-node-label" textAnchor="middle" x={x + nodeWidth / 2} y={centerY - (lines.length > 1 ? 5 : 0)}>
                {lines.map((line, lineIndex) => (
                  <tspan key={`${node}-${lineIndex}`} dy={lineIndex === 0 ? 0 : 14} x={x + nodeWidth / 2}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
      <svg
        aria-label={title}
        className="architecture-diagram-svg architecture-diagram-mobile"
        role="img"
        viewBox={`0 0 280 ${mobileHeight}`}
      >
        <defs>
          <marker id={`${id}-mobile-arrow`} markerHeight="8" markerWidth="8" orient="auto" refX="4" refY="6">
            <path d="M 0 0 L 8 0 L 4 8 z" />
          </marker>
        </defs>
        {nodes.map((node, index) => {
          const y = 12 + index * 76;
          return (
            <g key={node}>
              {index < nodes.length - 1 ? (
                <path
                  className="architecture-connector"
                  d={`M 140 ${y + 52} L 140 ${y + 68}`}
                  markerEnd={`url(#${id}-mobile-arrow)`}
                />
              ) : null}
              <rect
                className="architecture-node"
                height="52"
                rx="10"
                width={mobileNodeWidth}
                x={mobileNodeX}
                y={y}
              />
              <text
                className="architecture-node-label"
                textAnchor="middle"
                x="140"
                y={y + (node.length > 22 ? 22 : 33)}
              >
                {node.split(/\s+/).reduce<string[]>((lines, word) => {
                  const lastLine = lines.at(-1);
                  if (lastLine && `${lastLine} ${word}`.length <= 22) {
                    lines[lines.length - 1] = `${lastLine} ${word}`;
                  } else {
                    lines.push(word);
                  }
                  return lines;
                }, []).map((line, lineIndex) => (
                  <tspan key={`${node}-${lineIndex}`} dy={lineIndex === 0 ? 0 : 14} x="140">
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
