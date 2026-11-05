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
        organization: "Khoi Solutions (Remote / Hybrid)",
        period: "08/2026 – 11/2026",
        bullets: [
          "Shape solution architecture around business priorities and data readiness.",
          "Guide enterprise teams through adoption planning and delivery.",
        ],
      },
      {
        title: "AI Solution Consultant & Presales",
        organization: "FPT Telecom International (FTI)",
        period: "07/2025 – 10/2026",
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
        organization: "Deligent (Remote / Hybrid)",
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
  projects: {
    title: "Selected Projects",
    tabs: [
      {
        id: "enterprise-ai",
        label: "Solutions & Consulting",
        projects: [
          {
            title: "Agent Factory — Centralized Multi-Agent Orchestration",
            tag: "Internal project · AI competition",
            summary: "One place to govern every agent and flow — reusable blueprints, lifecycle and AI governance. 1st prize, AI competition.",
            coverImage: {
              src: "/images/agent-factory-award.jpg",
              width: 1920,
              height: 1077,
              objectPosition: "center 35%",
              alt: {
                en: "Paul and his project team receiving first prize in an enterprise AI competition.",
                vi: "Paul cùng đội dự án nhận giải Nhất tại cuộc thi AI doanh nghiệp.",
              },
            },
            architectureImage: {
              src: "/images/agent-factory-architecture.png",
              width: 2120,
              height: 1070,
              fit: "contain",
              label: { vi: "Kiến trúc giải pháp", en: "Solution architecture" },
              caption: {
                vi: "Blueprint tái sử dụng · control plane quản lý vòng đời · AI governance · nhiều runtime (Copilot Studio, Power Automate, Dify, n8n, Amazon Quick)",
                en: "Reusable blueprints · lifecycle control plane · AI governance · multiple runtimes (Copilot Studio, Power Automate, Dify, n8n, Amazon Quick)",
              },
              alt: {
                en: "Agent Factory reusable blueprint, lifecycle control plane and AI governance architecture.",
                vi: "Kiến trúc Agent Factory với blueprint tái sử dụng, control plane quản lý vòng đời và AI governance.",
              },
            },
            role: "AI Engineer",
            context:
              "Agents and flows were scattered across teams — hard to control and impossible to reuse.",
            outcome: "Established reusable, centrally governed agent workflows for enterprise process automation.",
            stack: ["Copilot Studio", "Power Automate", "Dify", "n8n", "REST APIs"],
          },
          {
            title: "Microsoft 365 Copilot Workshop & Training Series",
            tag: "Enterprise adoption",
            summary: "Took 600+ users from PoC to rollout and co-hosted workshops with Microsoft Vietnam.",
            coverImage: {
              src: "/images/copilot-workshop.jpg",
              width: 1276,
              height: 956,
              objectPosition: "center top",
              alt: {
                en: "Enterprise employees attending a Microsoft 365 Copilot workshop.",
                vi: "Nhân viên doanh nghiệp tham dự buổi workshop Microsoft 365 Copilot.",
              },
            },
            architectureImage: {
              src: "/images/adoption-master-plan.png",
              width: 2120,
              height: 1060,
              fit: "contain",
              caption: {
                vi: "Khung tổng thể 5 phase · 20 tuần; thực tế chạy PoC (P0 → P3) với nhóm pilot, đạt KPI ở cổng Go / No-go mới mở rộng",
                en: "Reference plan: 5 phases · 20 weeks; in practice a PoC runs P0 → P3 with a pilot group and scales after the Go / No-go gate",
              },
              alt: {
                en: "Five-phase, 20-week adoption master plan for Microsoft 365 Copilot.",
                vi: "Khung master plan triển khai Microsoft 365 Copilot gồm 5 phase trong 20 tuần.",
              },
            },
            visualTitle: "Adoption master plan",
            role: "Technical Trainer · Workshop Co-host",
            customerSegment: "Listed construction general contractor (600+ users) and enterprise workshop clients",
            ecosystem: ["Microsoft 365 Copilot", "Copilot Studio", "Change management"],
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
            coverImage: {
              src: "/images/Microsoft Enterprise AI Ecosystem.png",
              width: 2752,
              height: 1536,
              objectPosition: "center",
              label: { vi: "Hệ sinh thái AI doanh nghiệp", en: "Enterprise AI ecosystem" },
              alt: {
                en: "Microsoft enterprise AI ecosystem spanning Microsoft 365, Copilot Studio, Power Platform, business applications and governance.",
                vi: "Hệ sinh thái AI doanh nghiệp Microsoft gồm Microsoft 365, Copilot Studio, Power Platform, ứng dụng doanh nghiệp và quản trị.",
              },
            },
            architectureImage: {
              src: "/images/Microsoft Enterprise AI Ecosystem.png",
              width: 2752,
              height: 1536,
              fit: "contain",
              caption: {
                vi: "Tổng quan hệ sinh thái AI doanh nghiệp Microsoft và các lớp ứng dụng, nền tảng, bảo mật, quản trị.",
                en: "Overview of the Microsoft enterprise AI ecosystem across applications, platforms, security and governance.",
              },
              alt: {
                en: "Microsoft enterprise AI ecosystem spanning Microsoft 365, Copilot Studio, Power Platform, business applications and governance.",
                vi: "Hệ sinh thái AI doanh nghiệp Microsoft gồm Microsoft 365, Copilot Studio, Power Platform, ứng dụng doanh nghiệp và quản trị.",
              },
            },
            visualTitle: "Consulting process",
            detailSteps: [
              { title: "Understand the problem", summary: "Current state, issues, pain points" },
              { title: "Design the right solution", summary: "Choose an approach for the real need" },
              { title: "Existing SaaS & open source first", summary: "Customized for Data · AI · Security" },
              { title: "Easy to use, fast enablement", summary: "Help teams get started quickly" },
            ],
            switchTab: "engineering",
            context: "Enterprises need to turn pain points into AI solutions that are practical, easy to adopt and aligned with data, AI and security requirements.",
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
            tag: "AI automation",
            summary: "Intake, classification and routing for customer service, internal and IT helpdesk tickets — 80% fewer manual operations.",
            coverImage: {
              src: "/images/ticket-automation-dify.png",
              width: 1914,
              height: 1113,
              objectPosition: "left top",
              label: { vi: "Minh hoạ giao diện · dữ liệu mẫu", en: "Illustrative UI · sample data" },
              alt: {
                en: "Sample Dify workflow for AI-powered operations ticket automation.",
                vi: "Minh hoạ workflow Dify mẫu cho hệ thống tự động hoá ticket vận hành bằng AI.",
              },
            },
            architectureImage: {
              src: "/images/ticket-automation-dify.png",
              width: 1914,
              height: 1113,
              fit: "contain",
              caption: {
                vi: "Workflow trên Dify: tiếp nhận → phân loại → tra cứu playbook → điều phối qua .NET API",
                en: "Dify workflow: intake → classification → playbook retrieval → routing via .NET API",
              },
              alt: {
                en: "Dify workflow for ticket intake, classification, playbook retrieval and routing.",
                vi: "Workflow Dify tiếp nhận, phân loại ticket, tra cứu playbook và điều phối.",
              },
            },
            context: "Customer service, internal and IT helpdesk tickets need intake, classification and routing to the right team.",
            approach: "Built an AI pipeline for ticket intake, classification and routing.",
            outcome: "80% fewer manual operations.",
            stack: ["C#", ".NET", "Python (Apache Airflow)", "Dify", "Docker"],
          },
          {
            title: "Opportunity Advisor — AI decision support for PMO managers",
            tag: "Business automation",
            summary: "Copilot Studio agent that estimates revenue, margin and feasibility per opportunity and recommends Go / Review / No-go.",
            coverImage: {
              src: "/images/opportunity-advisor.png",
              width: 1920,
              height: 1080,
              objectPosition: "left top",
              label: { vi: "Minh hoạ giao diện · dữ liệu mẫu", en: "Illustrative UI · sample data" },
              alt: {
                en: "Sample Opportunity Advisor interface for assessing a business opportunity.",
                vi: "Minh hoạ giao diện mẫu Opportunity Advisor đánh giá cơ hội kinh doanh.",
              },
            },
            architectureImage: {
              src: "/images/opportunity-advisor.png",
              width: 1920,
              height: 1080,
              fit: "contain",
              caption: {
                vi: "Một nửa là Agent trò chuyện với quản lý; một nửa là Agent flow mà agent gọi như một tool (API .NET, AI Builder, SharePoint, Teams)",
                en: "Half agent, half flow: the agent talks to managers and calls an agent flow as a tool (.NET API, AI Builder, SharePoint, Teams)",
              },
              alt: {
                en: "Opportunity Advisor agent and agent flow architecture shown in a sample interface.",
                vi: "Minh hoạ agent Opportunity Advisor và agent flow trong giao diện mẫu.",
              },
            },
            stack: ["Copilot Studio", "Agent flows", "AI Builder", "SharePoint", "Excel Online", "HTTP (.NET API)", "Microsoft Teams"],
          },
          {
            title: "Task Assistant — AI-powered task management on Microsoft Planner",
            tag: "Business automation",
            summary: "Pushes plans to Planner, assigns work by skills and workload, sends Teams reminders and answers task questions in natural language.",
            coverImage: {
              src: "/images/task-assistant-planner.png",
              width: 1920,
              height: 1080,
              objectPosition: "left top",
              label: { vi: "Minh hoạ giao diện · dữ liệu mẫu", en: "Illustrative UI · sample data" },
              alt: {
                en: "Sample Task Assistant interface for AI-powered planning and task assignment.",
                vi: "Minh hoạ giao diện mẫu Task Assistant lập kế hoạch và phân công bằng AI.",
              },
            },
            architectureImage: {
              src: "/images/task-assistant-planner.png",
              width: 1920,
              height: 1080,
              fit: "contain",
              alt: {
                en: "Task Assistant sample interface for Microsoft Planner task management.",
                vi: "Giao diện mẫu Task Assistant quản lý công việc trên Microsoft Planner.",
              },
            },
            stack: ["Copilot Studio", "Microsoft Planner", "Power Automate", "Office 365 Outlook", "Microsoft Teams"],
          },
          {
            title: "Internal knowledge Q&A assistant",
            tag: "Internal knowledge",
            summary: "Turns documents into a clean knowledge base; hybrid search + RAG answers with step images and a feedback loop.",
            coverImage: {
              src: "/images/knowledge-qa-architecture.png",
              width: 2420,
              height: 1230,
              objectPosition: "left top",
              label: { vi: "Kiến trúc giải pháp", en: "Solution architecture" },
              alt: {
                en: "Architecture of an internal knowledge assistant using hybrid search and RAG.",
                vi: "Kiến trúc trợ lý tri thức nội bộ sử dụng hybrid search và RAG.",
              },
            },
            architectureImage: {
              src: "/images/knowledge-qa-architecture.png",
              width: 2420,
              height: 1230,
              fit: "contain",
              caption: {
                vi: "Pipeline dữ liệu → knowledge store → hybrid RAG → AI core → tools/MCP → feedback (nhãn MVP: đã có trong bản hiện tại)",
                en: "Data pipeline → knowledge store → hybrid RAG → AI core → tools/MCP → feedback loop (MVP tags = in the current build)",
              },
              alt: {
                en: "Internal knowledge Q&A data pipeline, hybrid RAG, AI core, tools and feedback architecture.",
                vi: "Kiến trúc pipeline dữ liệu, hybrid RAG, AI core, tools và feedback cho hỏi đáp tri thức nội bộ.",
              },
            },
            context: "Users need to retrieve answers from internal processes and guides in a maintained knowledge base.",
            stack: ["Python", "FastAPI", "BM25 + fuzzy hybrid search", "Azure OpenAI", "Streamlit", "Docker"],
          },
          {
            title: "E-learning platform for trainers & presales",
            tag: "E-learning",
            status: "In development",
            summary: "A platform for trainers and presales to reuse standard templates, industry use cases and training videos to prepare every client faster.",
            coverImage: {
              src: "/images/elearning-architecture.png",
              width: 2130,
              height: 1100,
              objectPosition: "left top",
              label: { vi: "Thiết kế giải pháp · đang phát triển", en: "Solution design · in development" },
              alt: {
                en: "In-development architecture design for a trainer and presales learning platform.",
                vi: "Thiết kế kiến trúc đang phát triển cho nền tảng học tập Trainer và Presales.",
              },
            },
            architectureImage: {
              src: "/images/elearning-architecture.png",
              width: 2130,
              height: 1100,
              fit: "contain",
              alt: {
                en: "E-learning platform architecture design.",
                vi: "Sơ đồ thiết kế kiến trúc nền tảng E-learning.",
              },
            },
            outcome: "Training videos and decks exist; platform in design.",
            stack: ["Next.js", "Tailwind CSS", "Python FastAPI", "PostgreSQL", "Object storage"],
          },
          {
            title: "Master's thesis: Decision support via reliability propagation",
            coverIcon: "GraduationCap",
            tag: "Master's thesis",
            status: "In progress",
            summary: "Aggregates multiple assessments weighted by reliability to classify and assign tickets.",
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
            coverImage: {
              src: "/images/fraudtrace-architecture.png",
              width: 1482,
              height: 751,
              objectPosition: "left top",
              label: { vi: "Kiến trúc giải pháp", en: "Solution architecture" },
              alt: {
                en: "FraudTrace architecture for verifying online scam news.",
                vi: "Kiến trúc FraudTrace xác minh tin lừa đảo trực tuyến.",
              },
            },
            architectureImage: {
              src: "/images/fraudtrace-architecture.png",
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
              src: "/images/soict2024-talk.jpg",
              width: 3480,
              height: 2319,
              objectPosition: "30% center",
              alt: {
                en: "Paul presenting the ArtemisSearch research at SoICT 2024.",
                vi: "Paul trình bày nghiên cứu ArtemisSearch tại SoICT 2024.",
              },
            },
            architectureImage: {
              src: "/images/artemissearch-architecture.png",
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
          src: "/images/agent-factory-award.jpg",
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
          src: "/images/uit-masters-award.jpg",
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
        title: "ArtemisSearch · SoICT 2024",
        summary: "First-author paper on multimodal video retrieval.",
        paperUrl: "artemissearch",
        image: {
          src: "/images/soict2024-talk.jpg",
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
        type: "paper",
        title: "FraudTrace · NSS 2025",
        summary: "First-author paper on multi-agent LLM verification of online scam news.",
        paperUrl: "fraudtrace",
        image: {
          src: "/images/fraudtrace-architecture.png",
          width: 1482,
          height: 751,
          fit: "contain",
          alt: {
            en: "FraudTrace multi-agent system architecture for checking online news.",
            vi: "Sơ đồ kiến trúc multi-agent FraudTrace kiểm chứng tin tức trực tuyến.",
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
  footer: {
    title: "Let's talk about your AI challenge",
    message: "Detailed project outcomes are available in a direct conversation.",
    links: ["Professional Email", "LinkedIn Profile", "GitHub Profile"],
    copyright: "© Nguyen Hoang Phuc (Paul Nguyen)",
  },
} satisfies PortfolioContent;
