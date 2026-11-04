import type { PortfolioContent } from "./portfolioData";

export const en = {
  ui: {
    language: "Language",
    theme: "Theme",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
  },
  hero: {
    displayName: "Paul Nguyen",
    altName: "Nguyen Hoang Phuc",
    headline: "AI Solution Architect & Technical Consultant",
    tagline: "Taking enterprise AI from PoC to real-world adoption",
    meta: "Ho Chi Minh City · Open to AI Solution Architect / Presales roles",
    summary:
      "AI Solution Architect helping enterprises take Microsoft 365 Copilot and Amazon Quick from PoC to real-world use. Advised 20+ enterprises and supported 9 AI & Cloud deals, backed by a solid AI research foundation.",
    ctas: [
      { label: "Download CV" },
      { label: "Contact", href: "#contact" },
    ],
  },
  metrics: [
    { value: "20+", label: "Enterprises advised" },
    { value: "9", label: "AI & Cloud deals" },
    { value: "600+", label: "Users from PoC to rollout" },
    { value: "2", label: "International papers (first author)" },
  ],
  about: {
    title: "The Evolution & Trajectory",
    pillars: [
      {
        title: "Academic & Research Foundation",
      },
      {
        title: "Hands-on Engineering",
      },
      {
        title: "Solution Consulting & Presales",
      },
    ],
    trajectory: {
      title: "Career Trajectory",
    },
  },
  experience: {
    title: "Experience",
    careerVision:
      "Career vision: grow into a Lead Solution Architect owning enterprise AI from discovery through adoption.",
    items: [
      {
        title: "AI Solution Architect",
        organization: "Khoi Solutions",
        period: "08/2026 – 10/2026",
        location: "Remote / Hybrid",
        bullets: [
          "Shape solution architecture around business priorities and data readiness.",
          "Guide enterprise teams through adoption planning and delivery.",
        ],
      },
      {
        title: "AI Solution Consultant & Presales",
        organization: "FPT Telecom International (FTI)",
        period: "07/2025 – 09/2026",
        bullets: [
          "Advised more than 20 enterprises across solution consulting and presales.",
          "Supported AI and cloud opportunities from discovery through PoC and solution defense.",
          "Delivered technical enablement and co-hosted enterprise workshops.",
        ],
      },
      {
        title: "AI Engineer Intern",
        organization: "FPT Telecom International (FTI)",
        period: "01/2025 – 06/2025",
        bullets: [
          "Built an AI pipeline for operational ticket intake and classification.",
          "Reduced manual tool operations by 80%.",
          "Won first prize in the AI process automation competition.",
        ],
      },
      {
        title: "Frontend + AI Developer Intern",
        organization: "Deligent",
        period: "08/2024 – 12/2024",
        bullets: [
          "Built a responsive web experience for AI-assisted apparel design.",
          "Connected natural-language prompts to generative image workflows.",
        ],
      },
    ],
  },
  framework: {
    title: "The 4-Step Solution Framework",
    steps: [
      {
        phase: "01",
        title: "Discovery",
        summary: "Understand the business problem and data readiness",
      },
      {
        phase: "02",
        title: "Architecture",
        summary: "Choose the right stack and data guardrails",
      },
      {
        phase: "03",
        title: "PoC / Pilot",
        summary: "Validate with real users before scaling",
      },
      {
        phase: "04",
        title: "Enablement & Adoption",
        summary: "Role-based training and usage tracking",
      },
    ],
  },
  skills: {
    title: "Technical expertise",
    groups: [
      {
        title: "Enterprise AI Platforms",
        skills: [
          "Microsoft 365 Copilot",
          "Copilot Studio",
          "Power Platform",
          "Power Automate",
          "Azure OpenAI",
          "Amazon Quick",
          "Amazon Bedrock",
        ],
      },
      {
        title: "AI Agents & Automation",
        skills: [
          "Multi-Agent Systems",
          "CrewAI",
          "LangChain",
          "Dify",
          "n8n",
          "Apache Airflow",
        ],
      },
      {
        title: "AI/ML & Data",
        skills: [
          "Python",
          "PyTorch",
          "Hugging Face",
          "RAG",
          "LLM Fine-tuning (Unsloth)",
          "Vision Transformer",
          "Milvus",
          "Elasticsearch",
        ],
      },
      {
        title: "Engineering & DevOps",
        skills: [
          "C#",
          ".NET",
          "FastAPI",
          "Next.js",
          "React",
          "Tailwind CSS",
          "PostgreSQL",
          "Docker",
          "GitLab CI/CD",
          "Linux",
        ],
      },
    ],
  },
  projects: {
    title: "Selected Projects",
    tabs: [
      {
        id: "enterprise-ai",
        label: "Solutions",
        projects: [
          {
            title: "Agent Factory – Centralized Multi-Agent Orchestration & Enterprise Automation",
            tag: "Internal project · AI competition",
            summary: "Central multi-agent orchestration platform — 1st prize, AI process automation competition.",
            architectureDiagram: "agent-factory",
            coverImage: {
              src: "/images/Top1 - AI solutions for enterprise.JPG",
              width: 1920,
              height: 1077,
              objectPosition: "center 40%",
              alt: {
                en: "Paul and his project team receiving first prize in an enterprise AI competition.",
                vi: "Paul cùng đội dự án nhận giải Nhất tại cuộc thi AI doanh nghiệp.",
              },
            },
            role: "Solution Architect (competition team)",
            organization: "Telecommunications enterprise",
            context:
              "Business units deployed AI agents in silos, with limited coordination, difficult information-security risk management and little resource reuse across projects.",
            solution:
              "Designed a centralized Orchestrator architecture to manage the full agent lifecycle and integrate automated workflows through Microsoft Copilot Studio, Power Platform, n8n, Dify and REST APIs.",
            outcome: "Established reusable, centrally governed agent workflows for enterprise process automation.",
            stack: ["Power Platform", "Dify", "REST APIs", "Multi-Agent"],
            media: "Award photo with the competition judging panel.",
          },
          {
            title: "Microsoft 365 Copilot Workshop & Training Series",
            tag: "Enterprise adoption",
            summary: "Took 600+ users from PoC to rollout of Microsoft 365 Copilot.",
            architectureDiagram: "copilot-adoption",
            coverImage: {
              src: "/images/WorkshopMS.JPG",
              width: 1276,
              height: 956,
              objectPosition: "center top",
              alt: {
                en: "Enterprise employees attending a Microsoft 365 Copilot workshop.",
                vi: "Nhân viên doanh nghiệp tham dự buổi workshop Microsoft 365 Copilot.",
              },
            },
            role: "Technical Trainer · Workshop Co-host",
            customerSegment: "Listed construction general contractor (600+ users) and enterprise workshop clients",
            ecosystem: ["Microsoft 365 Copilot", "Copilot Studio", "Microsoft Power Platform"],
            context:
              "Despite investing in Microsoft Copilot and AI infrastructure, employees faced barriers applying it to daily work, usage remained low and data-leakage risks were a concern.",
            solution:
              "Supported the journey from PoC to rollout — built role-based playbooks for Finance, Legal, Operations and Field Engineering; delivered technical training, safe-prompting standards and data-access guidance.",
            outcome: "Enabled practical, role-based adoption with secure usage guidance and ongoing support.",
            measurement:
              "Tracked usage and training completion by role, with post-training support against agreed adoption KPIs. Co-hosted a Copilot Workshop / Executive Briefing series for enterprise clients.",
            media: "Copilot Workshop co-hosting photo (use only with permission and with customer-identifying information concealed).",
          },
          {
            title: "Tailored AI solutions for enterprise problems",
            tag: "AI solution consulting",
            summary: "From pain points to solutions teams can use right away — existing SaaS and open-source first, customized for data, AI and security.",
            architectureDiagram: "tailored-ai-solutions",
            switchTab: "engineering",
            role: "AI Solution Architect / Presales",
            context: "Enterprises need to turn pain points into AI solutions that are practical, easy to adopt and aligned with data, AI and security requirements.",
            approach: "Understand the current state and pain points; design the right solution; prioritize existing SaaS and open source with Data · AI · Security customization; enable fast, practical adoption.",
            outcome: "A consulting process focused on practical solutions and existing platforms.",
            stack: ["Microsoft 365 Copilot", "Amazon Quick", "Open source"],
          },
        ],
      },
      {
        id: "engineering",
        label: "AI Systems Built",
        projects: [
          {
            title: "AI-powered operations ticket automation",
            architectureDiagram: "ticket-automation",
            tag: "AI automation",
            summary: "Intake, classification and routing for customer service, internal and IT helpdesk tickets.",
            context: "Customer service, internal and IT helpdesk tickets need intake, classification and routing to the right team.",
            approach: "Built an AI pipeline for ticket intake, classification and routing.",
            outcome: "80% fewer manual operations.",
            stack: ["C#", ".NET", "Python (Apache Airflow)", "Dify", "Docker"],
          },
          {
            title: "Decision support for managers",
            architectureDiagram: "manager-decision-support",
            tag: "Business automation",
            summary: "AI recommends the right next action on existing Microsoft licenses — no custom build needed.",
            context: "Managers need recommendations for the right next action without building a new system.",
            approach: "Use Copilot Studio, Power Platform and Power Automate on existing Microsoft licenses.",
            outcome: "Decision support without a custom build.",
            stack: ["Copilot Studio", "Power Platform", "Power Automate", "Microsoft 365 Copilot"],
          },
          {
            title: "Task & schedule management with auto-assignment",
            architectureDiagram: "task-schedule-management",
            tag: "Business automation",
            summary: "Assigns the right owner, sends reminders and warnings, and answers questions via built-in AI assistants.",
            context: "Teams need automated task assignment, schedule management, reminders and information retrieval.",
            approach: "Combine existing AI assistants with automation flows for assignment, reminders and alerts.",
            outcome: "Reduces manual task-management work.",
            stack: ["Copilot Studio", "Power Automate", "Microsoft 365 Copilot"],
          },
          {
            title: "Internal knowledge Q&A system",
            architectureDiagram: "internal-knowledge-qa",
            tag: "Internal knowledge",
            summary: "RAG-based Q&A over internal processes and guides, with illustrated answers and a feedback-driven knowledge base.",
            context: "Users need to retrieve answers from internal processes and guides in a maintained knowledge base.",
            approach: "Collect and analyze user data → clean it into a knowledge base → design RAG queries → return answers with images → gather feedback, self-evaluate and update the knowledge base.",
            outcome: "Illustrated answers improve through a continuous feedback loop.",
            stack: ["RAG", "Knowledge Base", "Feedback loop"],
          },
          {
            title: "E-learning platform for trainers & presales",
            architectureDiagram: "elearning-platform",
            tag: "E-learning",
            status: "In development",
            summary: "Training library and industry use-case portfolio, reusable across clients in the same sector.",
            context: "Goal: standard industry templates, an up-to-date use-case portfolio, faster preparation and professional ready-to-pitch materials. Scope includes AI Enterprise products, data readiness, safe AI usage and access control.",
            approach: "Content design and training videos are in progress; application development is planned.",
            outcome: "Status: content design and training videos in progress; application build planned.",
            stack: ["Next.js", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
          },
          {
            title: "Master's thesis: Decision support via reliability propagation",
            architectureDiagram: "reliability-thesis",
            tag: "Master's thesis",
            status: "In progress",
            summary: "Aggregates multiple assessments weighted by reliability to support decisions.",
            context: "Multiple assessments with different levels of reliability need to be combined for decision support.",
            approach: "Research reliability propagation to combine multiple assessments.",
            outcome: "Thesis work is in progress.",
            stack: ["Python", "FastAPI", "LLM", "CrewAI"],
          },
        ],
      },
      {
        id: "research",
        label: "Academic",
        projects: [
          {
            title: "FraudTrace: Multi-Agent System Against Fraudulent News",
            architectureImage: {
              src: "/images/Multi-Agent System - NSS2025.png",
              width: 1482,
              height: 751,
              fit: "contain",
              alt: {
                en: "FraudTrace multi-agent system architecture for checking online news.",
                vi: "Sơ đồ kiến trúc multi-agent FraudTrace kiểm chứng tin tức trực tuyến.",
              },
            },
            tag: "NSS 2025 · First author",
            summary: "Multi-agent LLM system verifying online scam news — NSS 2025, first author.",
            subtitle: "FraudTrace: Verifying Fraudulent News to Prevent Online Scam Campaigns via a Multi-agent LLM-Based System",
            role: "First author",
            organization: "InSecLab – University of Information Technology",
            conference: "International Conference on Network and System Security (NSS 2025)",
            context:
              "Online scam news can spread across channels and requires evidence from multiple sources to verify.",
            approach:
              "Designed a multi-agent architecture to gather evidence, cross-check sources and assess credibility; fine-tuned language models with Unsloth and Hugging Face.",
            outcome: "Presented a multi-agent approach to cross-checking evidence for online news.",
            stack: ["Multi-Agent Systems", "LLM Fine-tuning", "Unsloth", "Hugging Face", "FastAPI", "Docker", "Next.js"],
            media: "Photo from the in-person conference presentation.",
          },
          {
            title: "ArtemisSearch: A Multimodal Video Search Engine",
            coverImage: {
              src: "/images/SoICT.JPG",
              width: 3480,
              height: 2319,
              objectPosition: "30% center",
              alt: {
                en: "Paul presenting the ArtemisSearch research at SoICT 2024.",
                vi: "Paul trình bày nghiên cứu ArtemisSearch tại SoICT 2024.",
              },
            },
            architectureImage: {
              src: "/images/Flow - AIC2024.png",
              width: 1176,
              height: 696,
              fit: "contain",
              alt: {
                en: "ArtemisSearch architecture showing video preprocessing, embedding, retrieval and ranking.",
                vi: "Sơ đồ ArtemisSearch gồm tiền xử lý video, tạo vector, truy xuất và xếp hạng.",
              },
            },
            tag: "SoICT 2024 · First author",
            summary: "Multimodal video retrieval — SoICT 2024, first author.",
            subtitle:
              "ArtemisSearch: A Multimodal Search Engine for Efficient Video Log-Life Event Retrieval Using Time-Segmented Queries and Vision Transformer-Based Feature Extraction",
            role: "First author",
            organization: "InSecLab & AI Club – University of Information Technology",
            conference: "The 13th International Symposium on Information and Communication Technology (SoICT 2024)",
            context:
              "Searching large video-log collections can be slow when queries do not account for temporal context.",
            approach:
              "Built spatiotemporal feature extraction with a Vision Transformer (ViT) and time-segmented query processing.",
            outcome: "Combined multimodal retrieval and time-segmented queries for video search.",
            stack: ["CLIP", "BEiT-3", "Milvus", "Elasticsearch", "OCR"],
            media: "Photo from the SoICT 2024 presentation.",
          },
        ],
        highlights: [
          "Top Entrance Scorer, M.S. in Computer Science, UIT (2025).",
          "B.S. in Artificial Intelligence, early graduate with Very Good classification (GPA 3.3/4.0), UIT (2022–2025).",
          "Microsoft Frontier Engineer & Copilot Jumpstart: technical representative completing in-depth capstone assessments in Copilot Studio architecture, Azure OpenAI and enterprise data security; contributed to a Microsoft Partner Tier upgrade.",
        ],
      },
    ],
  },
  research: {
    title: "Highlights & Achievements",
    items: [
      {
        type: "award",
        title: "1st Prize · FTI AI Process Automation Competition",
        summary: "Awarded for an AI-powered process automation solution.",
        image: {
          src: "/images/Top1 - AI solutions for enterprise.JPG",
          width: 1920,
          height: 1077,
          objectPosition: "center 40%",
          alt: {
            en: "Paul and his team receiving first prize in an AI process automation competition.",
            vi: "Paul cùng đội nhận giải Nhất cuộc thi tự động hóa quy trình AI.",
          },
        },
      },
      {
        type: "education",
        title: "Top Entrance Scorer · M.S. Computer Science, UIT",
        summary: "Top entrance scorer for the master’s program.",
        image: {
          src: "/images/Top Entrance Scorer MS CS.JPEG",
          width: 2048,
          height: 1536,
          objectPosition: "center 60%",
          alt: {
            en: "Paul receiving a top entrance scorer award for the M.S. in Computer Science.",
            vi: "Paul nhận giấy khen thủ khoa đầu vào chương trình Thạc sĩ Khoa học Máy tính.",
          },
        },
      },
      {
        type: "education",
        title: "B.S. in Artificial Intelligence · Very Good, early graduate",
        summary: "Early graduate with a Very Good classification.",
      },
      {
        type: "paper",
        title: "2 international conference papers · First author (SoICT 2024, NSS 2025)",
        summary: "ArtemisSearch and FraudTrace — open the Academic tab for details.",
        projectTab: "research",
        image: {
          src: "/images/SoICT.JPG",
          width: 3480,
          height: 2319,
          objectPosition: "30% center",
          alt: {
            en: "Paul presenting his first-author research at SoICT 2024.",
            vi: "Paul trình bày nghiên cứu tại SoICT 2024.",
          },
        },
      },
      {
        type: "credential",
        title: "Microsoft Frontier Engineer & Copilot Jumpstart",
        summary: "Professional credential and training program in enterprise AI.",
      },
    ],
  },
  industry: {
    title: "Industries advised",
    items: [
      {
        title: "Banking & Capital Markets",
      },
      {
        title: "Construction, Real Estate & Energy",
      },
      {
        title: "Manufacturing & Supply Chain",
      },
      {
        title: "Retail, Consumer & F&B",
      },
    ],
  },
  footer: {
    title: "Let's talk about your AI challenge",
    message: "Detailed project outcomes are available in a direct conversation.",
    links: ["Professional Email", "LinkedIn Profile", "GitHub Profile"],
    copyright: "© Nguyen Hoang Phuc (Paul Nguyen)",
  },
} satisfies PortfolioContent;
