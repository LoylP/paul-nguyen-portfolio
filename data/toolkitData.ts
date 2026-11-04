import type { Language } from "./portfolioData";

export interface SkillItem {
  name: string;
  icon: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface IndustryItem {
  title: string;
  description: string;
}

const skillCategories: Record<Language, SkillCategory[]> = {
  en: [
    {
      id: "enterprise-ai-platforms",
      title: "Enterprise AI Platforms",
      skills: [
        { name: "Microsoft 365 Copilot", icon: "/microsoft-copilot.svg", featured: true },
        { name: "Copilot Studio", icon: "/Copilot Studio.svg", featured: true },
        { name: "Azure OpenAI", icon: "/Azure OpenAI.svg", featured: true },
        { name: "Power Platform", icon: "/Microsoft_Power_Platform_logo.svg", featured: true },
        { name: "Power Automate", icon: "/microsoft-power-automate.svg", featured: true },
        { name: "Amazon Q Business", icon: "/amazon-quick-suite.svg", featured: false },
        { name: "Amazon Bedrock", icon: "", featured: false },
      ],
    },
    {
      id: "ai-agents-automation",
      title: "AI Agents & Automation",
      skills: [
        { name: "Multi-Agent Systems", icon: "", featured: true },
        { name: "Model Context Protocol (MCP)", icon: "/Model_Context_Protocol.svg", featured: true },
        { name: "Dify", icon: "/dify.svg", featured: true },
        { name: "n8n", icon: "/n8n.svg", featured: true },
        { name: "Apache Airflow", icon: "/apache-airflow.svg", featured: true },
        { name: "CrewAI", icon: "", featured: false },
        { name: "LangChain", icon: "", featured: false },
      ],
    },
    {
      id: "ai-ml-data-search",
      title: "AI/ML, Data & Search",
      skills: [
        { name: "Python", icon: "/Python-logo.svg", featured: true },
        { name: "PyTorch", icon: "/PyTorch_logo_icon.svg", featured: true },
        { name: "Hugging Face", icon: "/Huggingface-logo.svg", featured: true },
        { name: "Milvus", icon: "/Milvus-Logos.svg", featured: true },
        { name: "Elasticsearch", icon: "/elasticsearch.svg", featured: true },
        { name: "LLM Fine-tuning / Unsloth", icon: "/unsloth-color.svg", featured: true },
        { name: "Enterprise RAG", icon: "", featured: true },
        { name: "Vision Transformer", icon: "", featured: false },
        { name: "Kaggle", icon: "/Kaggle.svg", featured: false },
        { name: "Google Colab", icon: "/Google_Colaboratory_SVG_Logo.svg", featured: false },
      ],
    },
    {
      id: "engineering-devops",
      title: "Engineering & DevOps",
      skills: [
        { name: "C#", icon: "/csharp.svg", featured: true },
        { name: ".NET", icon: "", featured: true },
        { name: "C++", icon: "/C++_Logo.svg", featured: false },
        { name: "FastAPI", icon: "/FastAPI.svg", featured: true },
        { name: "Docker", icon: "/docker-logo.svg", featured: true },
        { name: "Next.js", icon: "/Next.js.svg", featured: true },
        { name: "React", icon: "/react.svg", featured: true },
        { name: "Tailwind CSS", icon: "/Tailwind CSS.svg", featured: false },
        { name: "PostgreSQL", icon: "/PostgresSQL.svg", featured: true },
        { name: "GitLab CI/CD", icon: "/gitlab-svgrepo.svg", featured: false },
        { name: "Linux", icon: "", featured: false },
        { name: "Git", icon: "/Git-Icon.svg", featured: false },
      ],
    },
  ],
  vi: [
    {
      id: "enterprise-ai-platforms",
      title: "Nền tảng AI doanh nghiệp",
      skills: [
        { name: "Microsoft 365 Copilot", icon: "/microsoft-copilot.svg", featured: true },
        { name: "Copilot Studio", icon: "/Copilot Studio.svg", featured: true },
        { name: "Azure OpenAI", icon: "/Azure OpenAI.svg", featured: true },
        { name: "Power Platform", icon: "/Microsoft_Power_Platform_logo.svg", featured: true },
        { name: "Power Automate", icon: "/microsoft-power-automate.svg", featured: true },
        { name: "Amazon Q Business", icon: "/amazon-quick-suite.svg", featured: false },
        { name: "Amazon Bedrock", icon: "", featured: false },
      ],
    },
    {
      id: "ai-agents-automation",
      title: "Tác tử AI & Tự động hoá",
      skills: [
        { name: "Multi-Agent Systems", icon: "", featured: true },
        { name: "Model Context Protocol (MCP)", icon: "/Model_Context_Protocol.svg", featured: true },
        { name: "Dify", icon: "/dify.svg", featured: true },
        { name: "n8n", icon: "/n8n.svg", featured: true },
        { name: "Apache Airflow", icon: "/apache-airflow.svg", featured: true },
        { name: "CrewAI", icon: "", featured: false },
        { name: "LangChain", icon: "", featured: false },
      ],
    },
    {
      id: "ai-ml-data-search",
      title: "AI/ML, Dữ liệu & Tìm kiếm",
      skills: [
        { name: "Python", icon: "/Python-logo.svg", featured: true },
        { name: "PyTorch", icon: "/PyTorch_logo_icon.svg", featured: true },
        { name: "Hugging Face", icon: "/Huggingface-logo.svg", featured: true },
        { name: "Milvus", icon: "/Milvus-Logos.svg", featured: true },
        { name: "Elasticsearch", icon: "/elasticsearch.svg", featured: true },
        { name: "LLM Fine-tuning / Unsloth", icon: "/unsloth-color.svg", featured: true },
        { name: "Enterprise RAG", icon: "", featured: true },
        { name: "Vision Transformer", icon: "", featured: false },
        { name: "Kaggle", icon: "/Kaggle.svg", featured: false },
        { name: "Google Colab", icon: "/Google_Colaboratory_SVG_Logo.svg", featured: false },
      ],
    },
    {
      id: "engineering-devops",
      title: "Phát triển & DevOps",
      skills: [
        { name: "C#", icon: "/csharp.svg", featured: true },
        { name: ".NET", icon: "", featured: true },
        { name: "C++", icon: "/C++_Logo.svg", featured: false },
        { name: "FastAPI", icon: "/FastAPI.svg", featured: true },
        { name: "Docker", icon: "/docker-logo.svg", featured: true },
        { name: "Next.js", icon: "/Next.js.svg", featured: true },
        { name: "React", icon: "/react.svg", featured: true },
        { name: "Tailwind CSS", icon: "/Tailwind CSS.svg", featured: false },
        { name: "PostgreSQL", icon: "/PostgresSQL.svg", featured: true },
        { name: "GitLab CI/CD", icon: "/gitlab-svgrepo.svg", featured: false },
        { name: "Linux", icon: "", featured: false },
        { name: "Git", icon: "/Git-Icon.svg", featured: false },
      ],
    },
  ],
};

const industries: Record<Language, IndustryItem[]> = {
  en: [
    {
      title: "Banking & Capital Markets",
      description: "Top-tier commercial banks, asset management, and premier brokerages.",
    },
    {
      title: "Construction, Real Estate & Energy",
      description: "Leading general contractors, real estate developers, and national energy grids.",
    },
    {
      title: "Manufacturing & Supply Chain",
      description: "Global apparel & footwear OEMs, and heavy industrial manufacturing.",
    },
    {
      title: "Retail, Consumer & F&B",
      description: "Multi-national hypermarkets, premium confectionery, and consumer goods.",
    },
  ],
  vi: [
    {
      title: "Tài chính – Ngân hàng & Chứng khoán",
      description: "Ngân hàng thương mại hàng đầu, công ty quản lý tài sản và công ty chứng khoán lớn.",
    },
    {
      title: "Xây dựng, Bất động sản & Năng lượng",
      description: "Tổng thầu xây dựng, nhà phát triển bất động sản và hệ thống năng lượng quy mô quốc gia.",
    },
    {
      title: "Sản xuất & Chuỗi cung ứng",
      description: "Nhà sản xuất OEM toàn cầu trong ngành may mặc, giày dép và công nghiệp nặng.",
    },
    {
      title: "Bán lẻ, Tiêu dùng & F&B",
      description: "Hệ thống đại siêu thị đa quốc gia, bánh kẹo cao cấp và hàng tiêu dùng.",
    },
  ],
};

export function getSkillCategories(language: Language): SkillCategory[] {
  return skillCategories[language];
}

export function getIndustryItems(language: Language): IndustryItem[] {
  return industries[language];
}
