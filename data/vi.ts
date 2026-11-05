import type { PortfolioContent } from "./portfolioData";

export const vi = {
  ui: {
    language: "Ngôn ngữ",
    theme: "Giao diện",
    switchToLight: "Chuyển sang giao diện sáng",
    switchToDark: "Chuyển sang giao diện tối",
  },
  hero: {
    displayName: "Nguyễn Hoàng Phúc",
    altName: "Paul Nguyen",
    headline: "AI Solution Architect & Technical Consultant",
    tagline: "Đưa AI doanh nghiệp từ PoC đến triển khai thực tế",
    meta: "TP.HCM · Đang mở cơ hội AI Solution Architect / Presales",
    summary:
      "AI Solution Architect giúp doanh nghiệp đưa Microsoft 365 Copilot và Amazon Quick từ PoC vào vận hành thực tế. Đã tư vấn cho 20+ doanh nghiệp và tham gia bảo vệ giải pháp cho 9 deal AI & Cloud, với nền tảng nghiên cứu AI vững chắc.",
    ctas: [
      { label: "Tải CV" },
      { label: "Liên hệ", href: "#contact" },
    ],
  },
  metrics: [
    { value: "20+", label: "Doanh nghiệp đã tư vấn" },
    { value: "9", label: "Deal AI & Cloud" },
    { value: "600+", label: "Người dùng từ PoC đến rollout" },
    { value: "2", label: "Bài báo quốc tế (tác giả chính)" },
  ],
  about: {
    title: "Hành trình & Tầm nhìn",
    pillars: [
      {
        title: "Nền tảng Học thuật & Nghiên cứu",
      },
      {
        title: "Kỹ thuật Thực chiến",
      },
      {
        title: "Tư vấn Giải pháp & Presales",
      },
    ],
    trajectory: {
      title: "Tầm nhìn Nghề nghiệp",
    },
  },
  experience: {
    title: "Kinh nghiệm",
    careerVision:
      "Định hướng: phát triển thành Lead Solution Architect, dẫn dắt giải pháp AI doanh nghiệp từ khảo sát đến ứng dụng.",
    items: [
      {
        title: "AI Solution Architect",
        organization: "Khoi Solutions (Remote / Hybrid)",
        period: "08/2026 – 11/2026",
        bullets: [
          "Định hình kiến trúc giải pháp theo ưu tiên kinh doanh và mức độ sẵn sàng dữ liệu.",
          "Đồng hành cùng doanh nghiệp trong lập kế hoạch và triển khai ứng dụng.",
        ],
      },
      {
        title: "AI Solution Consultant & Presales",
        organization: "FPT Telecom International (FTI)",
        period: "07/2025 – 10/2026",
        bullets: [
          "Tư vấn giải pháp và presales cho hơn 20 doanh nghiệp.",
          "Hỗ trợ cơ hội AI và Cloud từ discovery, PoC đến bảo vệ giải pháp.",
          "Đào tạo kỹ thuật và đồng tổ chức workshop doanh nghiệp.",
        ],
      },
      {
        title: "AI Engineer Intern",
        organization: "FPT Telecom International (FTI)",
        period: "01/2025 – 06/2025",
        bullets: [
          "Xây dựng pipeline AI tiếp nhận và phân loại ticket vận hành.",
          "Giảm 80% thao tác công cụ thủ công.",
          "Giành giải Nhất cuộc thi AI hóa quy trình.",
        ],
      },
      {
        title: "Frontend + AI Developer Intern",
        organization: "Deligent (Remote / Hybrid)",
        period: "08/2024 – 12/2024",
        bullets: [
          "Phát triển trải nghiệm web đáp ứng cho thiết kế trang phục bằng AI.",
          "Kết nối mô tả ngôn ngữ tự nhiên với quy trình tạo ảnh.",
        ],
      },
    ],
  },
  framework: {
    title: "Khung Phương pháp Tư vấn Kiến trúc",
    steps: [
      {
        phase: "01",
        title: "Khảo sát & Phân tích",
        summary: "Hiểu bài toán kinh doanh và mức sẵn sàng dữ liệu",
      },
      {
        phase: "02",
        title: "Thiết kế Kiến trúc",
        summary: "Chọn stack phù hợp và rào chắn an toàn dữ liệu",
      },
      {
        phase: "03",
        title: "PoC / Pilot",
        summary: "Kiểm chứng với người dùng thật trước khi mở rộng",
      },
      {
        phase: "04",
        title: "Chuyển giao & Ứng dụng",
        summary: "Đào tạo theo vai trò và theo dõi mức độ sử dụng",
      },
    ],
  },
  projects: {
    title: "Dự án Tiêu biểu",
    tabs: [
      {
        id: "enterprise-ai",
        label: "Giải pháp & Tư vấn",
        projects: [
          {
            title: "Agent Factory — Nền tảng điều phối Multi-Agent tập trung",
            tag: "Dự án nội bộ · Cuộc thi AI",
            summary: "Một nơi quản trị mọi agent & flow: blueprint tái sử dụng, vòng đời, AI governance — Giải Nhất cuộc thi AI.",
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
              "Agent và flow nằm rải rác ở nhiều phòng ban, khó kiểm soát rủi ro và không tái sử dụng được.",
            outcome: "Hình thành quy trình AI agent có thể tái sử dụng và quản trị tập trung.",
            stack: ["Copilot Studio", "Power Automate", "Dify", "n8n", "REST APIs"],
          },
          {
            title: "Chuỗi Workshop & Training Microsoft 365 Copilot",
            tag: "Ứng dụng AI doanh nghiệp",
            summary: "Đồng hành 600+ người dùng từ PoC đến rollout, đồng tổ chức workshop cùng Microsoft Vietnam.",
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
            visualTitle: "Khung Master Plan triển khai",
            role: "Technical Trainer · Đồng tổ chức workshop",
            customerSegment: "Tổng thầu xây dựng niêm yết (600+ người dùng) và khách hàng enterprise",
            ecosystem: ["Microsoft 365 Copilot", "Copilot Studio", "Change management"],
            context:
              "Doanh nghiệp đầu tư vào Microsoft Copilot và hạ tầng AI nhưng gặp rào cản nhân sự chưa biết cách khai thác vào nghiệp vụ hàng ngày, tỷ lệ sử dụng thấp và e ngại rủi ro rò rỉ dữ liệu.",
            solution:
              "Đồng hành từ PoC đến rollout — xây dựng playbook ứng dụng theo vai trò (Tài chính, Pháp chế, Vận hành, Kỹ sư công trường), đào tạo kỹ thuật cho người dùng, quy chuẩn prompt an toàn và hướng dẫn phân quyền truy cập dữ liệu.",
            outcome: "Giúp người dùng ứng dụng AI theo vai trò với hướng dẫn an toàn và hỗ trợ liên tục.",
            measurement:
              "Theo dõi mức độ sử dụng và hoàn thành đào tạo theo từng nhóm vai trò; hỗ trợ sau đào tạo để đạt KPI adoption đã thống nhất. Đồng tổ chức chuỗi Copilot Workshop / Executive Briefing cho khách hàng enterprise.",
            media: "Ảnh co-hosting Copilot Workshop (chỉ sử dụng khi được cho phép và đã che thông tin nhận diện khách hàng).",
          },
          {
            title: "Giải pháp AI may đo theo bài toán doanh nghiệp",
            tag: "Tư vấn giải pháp AI",
            summary: "Từ pain point đến giải pháp dùng được ngay — ưu tiên SaaS và open source sẵn có, tùy chỉnh theo dữ liệu, AI và bảo mật.",
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
            visualTitle: "Quy trình tư vấn",
            detailSteps: [
              { title: "Tìm hiểu bài toán", summary: "Hiện trạng, vấn đề, pain point" },
              { title: "Thiết kế giải pháp phù hợp", summary: "Chọn hướng giải quyết theo nhu cầu thực tế" },
              { title: "Ưu tiên SaaS & open source có sẵn", summary: "Tùy chỉnh theo dữ liệu · AI · bảo mật" },
              { title: "Dễ dùng, hướng dẫn áp dụng nhanh", summary: "Giúp đội ngũ bắt đầu sử dụng thuận lợi" },
            ],
            switchTab: "engineering",
            context: "Doanh nghiệp cần chuyển các pain point thành giải pháp AI phù hợp, dễ áp dụng và đáp ứng yêu cầu dữ liệu, AI, bảo mật.",
            outcome: "Quy trình tư vấn hướng đến giải pháp thực tế, dễ dùng và tận dụng nền tảng sẵn có.",
            stack: ["Microsoft 365 Copilot", "Amazon Quick", "Open source"],
          },
        ],
      },
      {
        id: "engineering",
        label: "Hệ thống AI đã xây dựng",
        projects: [
          {
            title: "Tự động hoá xử lý ticket vận hành bằng AI",
            tag: "Tự động hóa AI",
            summary: "Tiếp nhận, phân loại và điều phối ticket CSKH, nội bộ và IT helpdesk — giảm 80% thao tác thủ công.",
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
            context: "Ticket CSKH, nội bộ và IT helpdesk cần được tiếp nhận, phân loại và chuyển đến đúng nhóm xử lý.",
            approach: "Xây dựng pipeline AI xử lý ticket với các bước tiếp nhận, phân loại và điều phối.",
            outcome: "Giảm 80% thao tác thủ công.",
            stack: ["C#", ".NET", "Python (Apache Airflow)", "Dify", "Docker"],
          },
          {
            title: "Opportunity Advisor — Trợ lý đánh giá cơ hội kinh doanh",
            tag: "Tự động hóa nghiệp vụ",
            summary: "Agent trên Copilot Studio phân tích doanh thu, lợi nhuận và tính khả thi của từng cơ hội, khuyến nghị Go / Review / No-go.",
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
            title: "Task Assistant — Quản lý công việc trên Microsoft Planner với AI",
            tag: "Tự động hóa nghiệp vụ",
            summary: "Đẩy kế hoạch lên Planner, tự phân việc theo kỹ năng & khối lượng, nhắc hạn qua Teams và tra cứu task bằng ngôn ngữ tự nhiên.",
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
            title: "Trợ lý tra cứu quy trình & hướng dẫn nội bộ",
            tag: "Tri thức nội bộ",
            summary: "Chuẩn hoá tài liệu thành knowledge base, tìm kiếm hybrid + RAG, trả lời kèm ảnh minh hoạ và tự cải thiện từ feedback.",
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
            context: "Người dùng cần tra cứu quy trình và hướng dẫn nội bộ từ kho tài liệu tập trung.",
            stack: ["Python", "FastAPI", "BM25 + fuzzy hybrid search", "Azure OpenAI", "Streamlit", "Docker"],
          },
          {
            title: "Nền tảng E-learning cho Trainer & Presales",
            tag: "Đang phát triển",
            status: "Đang phát triển",
            summary: "Kho tài liệu đào tạo và use-case portfolio theo ngành, tái sử dụng cho khách hàng cùng lĩnh vực.",
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
            outcome: "Đã có thư viện video đào tạo và bộ deck; đang thiết kế nền tảng.",
            stack: ["Next.js", "Tailwind CSS", "Python FastAPI", "PostgreSQL", "Object storage"],
          },
          {
            title: "Luận văn Thạc sĩ: Hệ hỗ trợ ra quyết định bằng cơ chế lan truyền độ tin cậy",
            coverIcon: "GraduationCap",
            tag: "Luận văn Thạc sĩ",
            status: "Đang thực hiện",
            summary: "Tổng hợp nhiều nguồn đánh giá theo độ tin cậy để phân loại và phân công ticket.",
            stack: ["Python", "FastAPI", "LLM", "CrewAI"],
          },
        ],
      },
      {
        id: "research",
        label: "Học thuật",
        projects: [
          {
            title: "FraudTrace: Hệ thống Multi-Agent Phòng chống Tin tức Lừa đảo",
            coverImage: {
              src: "/images/fraudtrace-architecture.png",
              width: 1482,
              height: 751,
              objectPosition: "left top",
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
            tag: "NSS 2025 · Tác giả chính",
            summary: "Hệ multi-agent LLM xác minh tin lừa đảo trực tuyến — NSS 2025, tác giả chính.",
            subtitle: "FraudTrace: Verifying Fraudulent News to Prevent Online Scam Campaigns via a Multi-agent LLM-Based System",
            role: "Tác giả chính (First author)",
            organization: "InSecLab – Trường Đại học Công nghệ Thông tin",
            conference: "International Conference on Network and System Security (NSS 2025)",
            context:
              "Tin lừa đảo trực tuyến thường lan truyền qua nhiều kênh và cần được kiểm chứng bằng chứng cứ từ nhiều nguồn.",
            approach:
              "Thiết kế kiến trúc Multi-Agent phối hợp thu thập chứng cứ, đối soát chéo và đánh giá độ tin cậy; tinh chỉnh mô hình ngôn ngữ lớn bằng Unsloth và Hugging Face.",
            outcome: "Đề xuất cách phối hợp nhiều tác tử để đối chiếu chứng cứ tin tức.",
            stack: ["Multi-Agent Systems", "LLM Fine-tuning", "Unsloth", "Hugging Face", "FastAPI", "Docker", "Next.js"],
            media: "Ảnh chụp thuyết trình trực tiếp tại hội nghị.",
          },
          {
            title: "ArtemisSearch: Công cụ Tìm kiếm Video Đa phương thức",
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
            tag: "SoICT 2024 · Tác giả chính",
            summary: "Tìm kiếm video đa phương thức — SoICT 2024, tác giả chính.",
            subtitle:
              "ArtemisSearch: A Multimodal Search Engine for Efficient Video Log-Life Event Retrieval Using Time-Segmented Queries and Vision Transformer-Based Feature Extraction",
            role: "Tác giả chính (First author)",
            organization: "InSecLab & AI Club – Trường Đại học Công nghệ Thông tin",
            conference: "The 13th International Symposium on Information and Communication Technology (SoICT 2024)",
            context:
              "Việc tìm sự kiện trong kho nhật ký video lớn gặp độ trễ cao khi truy vấn không khai thác ngữ cảnh thời gian.",
            approach:
              "Xây dựng cơ chế trích xuất đặc trưng không-thời gian bằng Vision Transformer (ViT), kết hợp xử lý truy vấn phân đoạn thời gian.",
            outcome: "Kết hợp tìm kiếm đa phương thức với truy vấn video phân đoạn theo thời gian.",
            stack: ["CLIP", "BEiT-3", "Milvus", "Elasticsearch", "OCR"],
            media: "Ảnh chụp thuyết trình tại hội nghị SoICT 2024.",
          },
        ],
        highlights: [
          "Thủ khoa đầu vào Thạc sĩ Khoa học Máy tính, UIT (2025).",
          "Cử nhân Trí tuệ Nhân tạo, tốt nghiệp sớm, loại Giỏi (GPA 3.3/4.0), UIT (2022–2025).",
          "Microsoft Frontier Engineer & Copilot Jumpstart: đại diện kỹ thuật hoàn thành các bài đánh giá capstone chuyên sâu về kiến trúc Copilot Studio, Azure OpenAI và bảo mật dữ liệu doanh nghiệp; đóng góp vào việc nâng hạng Microsoft Partner Tier.",
        ],
      },
    ],
  },
  research: {
    title: "Thành tích nổi bật",
    items: [
      {
        type: "award",
        title: "Giải Nhất · Cuộc thi Tự động hóa Quy trình AI của FTI",
        summary: "Giải thưởng cho giải pháp tự động hóa quy trình bằng AI.",
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
        title: "Thủ khoa đầu vào · Thạc sĩ Khoa học Máy tính, UIT",
        summary: "Thủ khoa đầu vào chương trình thạc sĩ.",
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
        title: "Cử nhân Trí tuệ Nhân tạo · Loại Giỏi, tốt nghiệp sớm",
        summary: "Tốt nghiệp sớm chương trình Cử nhân Trí tuệ Nhân tạo.",
      },
      {
        type: "paper",
        title: "ArtemisSearch · SoICT 2024",
        summary: "Bài báo tác giả chính về tìm kiếm video đa phương thức.",
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
        summary: "Bài báo tác giả chính về hệ multi-agent LLM xác minh tin lừa đảo trực tuyến.",
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
        summary: "Chứng nhận chuyên môn và chương trình đào tạo về AI doanh nghiệp.",
      },
    ],
  },
  footer: {
    title: "Cùng trao đổi về bài toán AI của bạn",
    message: "Số liệu chi tiết các dự án sẵn sàng chia sẻ khi trao đổi trực tiếp.",
    links: ["Email công việc", "LinkedIn profile", "GitHub profile"],
    copyright: "© Nguyễn Hoàng Phúc (Paul Nguyen)",
  },
} satisfies PortfolioContent;
