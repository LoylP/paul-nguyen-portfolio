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
    tagline: "Taking enterprise AI from PoC to real-world adoption — on Microsoft & AWS",
    meta: "Ho Chi Minh City · Remote/Hybrid · Open to AI Solution Architect / Presales roles",
    summary:
      "AI Solution Architect helping enterprises take Microsoft 365 Copilot and Amazon Quick from PoC to real-world use. Advised 20+ enterprises and supported 9 AI & Cloud deals, backed by a solid AI research foundation.",
    ctas: [
      { label: "Explore Selected Work", href: "#work" },
      { label: "Download CV" },
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
        description:
          "Top Entrance Scorer, M.S. in Computer Science at UIT; early graduate, B.S. in Artificial Intelligence (Very Good classification). First author of two international conference papers (SoICT 2024, NSS 2025) from InSecLab, on Vision Transformer-based multimodal video retrieval and multi-agent LLM systems against online scams. This foundation lets me evaluate models rigorously and put data security first when bringing AI into the enterprise.",
      },
      {
        title: "Hands-on Engineering",
        description:
          "From Deligent’s GenAI apparel-design feature to an AI Engineer Internship at FTI, where an automated ticket-processing pipeline cut manual tool operations by 80% and won the FTI AI Process Automation Competition. Hands-on with Python/FastAPI, Next.js, RAG, Docker, GitLab CI/CD and GPU model serving.",
      },
      {
        title: "Solution Consulting & Presales",
        description:
          "AI Solution Consultant & Presales at FTI and AI Solution Architect at Khoi Solutions. Work directly with executive stakeholders, advising 20+ enterprises across banking, construction, manufacturing and retail; defended technical solutions for 9 AI & Cloud deals. Specialized in Microsoft 365 Copilot / Copilot Studio and Amazon Quick; co-hosted a Copilot workshop series with Microsoft Vietnam; lead an intern team and deliver technical training for clients.",
      },
    ],
    trajectory: {
      title: "Career Trajectory",
      description:
        "Growing into a Lead Solution Architect who owns enterprise AI solutions end to end — from discovery and PoC to adoption — connecting research depth with business growth and cost efficiency.",
    },
  },
  experience: {
    title: "Experience",
    intro:
      "I connect academic AI research with hands-on engineering and enterprise solution consulting. I help teams move from a clear business problem to a secure, adoptable AI solution.",
    careerVision:
      "Career vision: grow into a Lead Solution Architect owning enterprise AI from discovery through adoption.",
    items: [
      {
        title: "AI Solution Architect",
        organization: "Khoi Solutions",
        period: "08/2026 – 10/2026",
        location: "Remote / Hybrid",
        description: "Shape AI architecture and adoption plans for enterprise clients.",
        bullets: [
          "Shape solution architecture around business priorities and data readiness.",
          "Guide enterprise teams through adoption planning and delivery.",
        ],
      },
      {
        title: "AI Solution Consultant & Presales",
        organization: "FPT Telecom International (FTI)",
        period: "07/2025 – 09/2026",
        description: "Led AI solution consulting, presales, PoCs and technical enablement.",
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
        description: "Built an AI pipeline for operational ticket intake and classification.",
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
        description: "Built a generative design workflow for apparel concepts.",
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
        description:
          "Work directly with C-level stakeholders to understand core business problems, identify operational bottlenecks and assess data readiness and governance.",
      },
      {
        phase: "02",
        title: "Architecture",
        summary: "Choose the right stack and data guardrails",
        description:
          "Select and tailor the right technology stack (Microsoft 365 Copilot / Copilot Studio, Amazon Quick / Amazon Bedrock or Private RAG); establish data-safety guardrails and access controls.",
      },
      {
        phase: "03",
        title: "PoC / Pilot",
        summary: "Validate with real users before scaling",
        description:
          "Build a PoC or pilot with real users; evaluate accuracy, latency and cost (license / token ROI) before scaling.",
      },
      {
        phase: "04",
        title: "Enablement & Adoption",
        summary: "Role-based training and usage tracking",
        description:
          "Build role-based training playbooks (Finance, Operations, Engineering), run handover workshops, track usage through dashboards and provide post-training support against agreed adoption KPIs.",
      },
    ],
  },
  skills: {
    title: "Skills & Technical Toolkit",
    groups: [
      {
        title: "Enterprise AI & Cloud Ecosystems",
        skills: [
          "Microsoft 365 Copilot",
          "Microsoft Copilot Studio",
          "Power Platform",
          "Azure OpenAI",
          "Amazon Quick (formerly Amazon Q Business)",
          "Amazon Bedrock",
        ],
      },
      {
        title: "Agentic Frameworks & Process Automation",
        skills: [
          "Multi-Agent Systems",
          "Agent Factory Orchestration",
          "n8n",
          "Dify",
          "LangChain",
          "CrewAI",
          "Workflow Automation",
          "Process Re-engineering",
        ],
      },
      {
        title: "Core AI / ML & Engineering Depth",
        skills: [
          "Python",
          "FastAPI",
          "PyTorch",
          "Hugging Face",
          "Unsloth (LLM Fine-tuning)",
          "Enterprise RAG Architecture",
          "Vision Transformer (ViT)",
          "Model Quantization & Serving",
        ],
      },
      {
        title: "Full-stack, DevOps & Data Security",
        skills: [
          "Docker",
          "GitLab CI/CD",
          "Linux",
          "Next.js",
          "React",
          "Tailwind CSS",
          "RESTful API Integration",
          "Data Governance & Access Control for AI deployments",
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
            title: "Microsoft 365 Copilot for a Construction General Contractor & Workshop Series",
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
            ecosystem: ["Microsoft 365 Copilot", "Copilot Studio", "Azure OpenAI", "Microsoft Power Platform"],
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
            title: "Enterprise Knowledge Assistants for Manufacturing & Supply Chain (Amazon Quick & Enterprise RAG)",
            tag: "Manufacturing · Knowledge assistant",
            summary: "Amazon Quick knowledge assistant for manufacturing technical documents.",
            architectureDiagram: "knowledge-assistant",
            role: "AI Solution Consultant / Presales",
            customerSegment:
              "Manufacturing and supply-chain enterprises (export footwear and apparel, building materials and industrial manufacturing)",
            ecosystem: ["Amazon Quick", "Amazon Bedrock", "Enterprise RAG"],
            context:
              "Technical specifications, supply-chain records, material specs and operating documents were distributed across S3, Salesforce, Jira and SharePoint, making manual retrieval time-consuming.",
            solution:
              "Advised on and designed Amazon Quick enterprise knowledge assistant architecture with permission-aware data connectors, including automated extraction from complex technical specification tables and production reports.",
            outcome: "Designed a permission-aware assistant to make technical knowledge easier to retrieve.",
            measurement:
              "Evaluated answer accuracy and information-retrieval time on real business scenarios in PoCs; defended the technical solution to plant leadership.",
          },
        ],
      },
      {
        id: "engineering",
        label: "Engineering",
        projects: [
          {
            title: "AI-Powered Operational Ticket Processing Automation",
            architectureDiagram: "ticket-automation",
            tag: "AI automation",
            summary: "AI pipeline for ticket intake and routing — 80% fewer manual operations.",
            role: "AI Engineer Intern",
            organization: "Telecommunications enterprise",
            period: "01/2025 – 06/2025",
            context:
              "Worked directly with executive stakeholders to analyze the problem and automate technical-ticket intake, classification and routing.",
            solution: "Built an AI Agent-powered pipeline for operational ticket processing.",
            outcome: "Streamlined operational ticket handling and shortened the path to resolution.",
            stack: ["Python", "FastAPI", "Docker", "GitLab CI/CD", "Large Language Models", "AI Agents"],
          },
          {
            title: "Generative AI Fashion Design Platform",
            architectureDiagram: "genai-fashion",
            tag: "Generative AI",
            summary: "GenAI apparel design from text prompts.",
            role: "Frontend + AI Developer Intern",
            organization: "Technology startup",
            period: "08/2024 – 12/2024",
            context:
              "Developed an interactive web experience and connected diffusion-model APIs to generate apparel and accessory designs from user prompts.",
            solution:
              "Integrated a responsive web interface with image-generation APIs to take designs from natural-language prompts into a product workflow.",
            outcome:
              "Delivered an end-to-end generative design workflow from prompt to visual concept.",
            stack: ["Next.js", "React", "Tailwind CSS", "Image Generation APIs", "FastAPI", "Diffusion Models"],
          },
          {
            title: "Decision Support System for Ticket Management",
            architectureDiagram: "ticket-decision-support",
            tag: "Master’s thesis",
            summary: "Decision support for ticket classification and assignment.",
            subtitle: "Master’s thesis",
            role: "Master’s thesis researcher",
            organization: "UIT – M.S. in Computer Science",
            period: "2025 – 2027",
            context:
              "Redesigning post-rollout AI support: intake from multiple channels (forms, Teams), classify ticket types and route them to the right resolver.",
            approach:
              "Move classification beyond keyword / TF-IDF / BM25 scoring; recommend assignments using resolver workload and performance (admin suggestions, with automatic assignment after excessive wait); suggest playbook and internal-document resolutions by ticket type; informed by decision-aggregation research.",
            outcome: "Researching a more context-aware, workload-sensitive workflow for ticket resolution.",
            stack: ["Python", "LLM", "CrewAI (Multi-Agent)"],
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
    title: "Research & Credentials",
    items: [
      {
        type: "paper",
        title: "ArtemisSearch · SoICT 2024",
        summary: "First-author paper on multimodal video retrieval.",
        paperUrl: "artemissearch",
        image: {
          src: "/images/SoICT.JPG",
          width: 3480,
          height: 2319,
          objectPosition: "30% center",
          alt: {
            en: "Paul presenting ArtemisSearch at the SoICT 2024 conference.",
            vi: "Paul trình bày ArtemisSearch tại hội nghị SoICT 2024.",
          },
        },
      },
      {
        type: "paper",
        title: "FraudTrace · NSS 2025",
        summary: "First-author paper on multi-agent verification of online scam news.",
        paperUrl: "fraudtrace",
      },
      {
        type: "credential",
        title: "Microsoft Frontier Engineer",
        summary: "Technical credential in enterprise AI and solution engineering.",
      },
      {
        type: "credential",
        title: "Copilot Jumpstart",
        summary: "Advanced solution and architecture training.",
      },
      {
        type: "award",
        title: "1st Prize · FTI AI Process Automation",
        summary: "Awarded for an AI-powered operational automation solution.",
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
        title: "B.S. Artificial Intelligence · Very Good",
        summary: "Early graduate, University of Information Technology.",
      },
    ],
  },
  industry: {
    title: "Enterprise Industry Footprint",
    intro:
      "A view of enterprise experience by industry, rather than customer logos or brand names.",
    items: [
      {
        title: "Banking & Capital Markets",
        description:
          "Leading commercial banks, asset-management funds, securities firms and consumer-finance institutions.",
      },
      {
        title: "Infrastructure, Real Estate & Energy",
        description:
          "Large general contractors, real-estate developers, and energy and infrastructure enterprises.",
      },
      {
        title: "Manufacturing & Supply Chain",
        description:
          "Export footwear and textile factories, alongside industrial manufacturing enterprises.",
      },
      {
        title: "Retail & Consumer Goods",
        description:
          "Multinational retailers, F&B chains, pharmaceutical and consumer-goods businesses, and agriculture.",
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
