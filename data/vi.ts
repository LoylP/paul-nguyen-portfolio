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
        organization: "Khoi Solutions",
        period: "08/2026 – 10/2026",
        location: "Remote / Hybrid",
        bullets: [
          "Định hình kiến trúc giải pháp theo ưu tiên kinh doanh và mức độ sẵn sàng dữ liệu.",
          "Đồng hành cùng doanh nghiệp trong lập kế hoạch và triển khai ứng dụng.",
        ],
      },
      {
        title: "AI Solution Consultant & Presales",
        organization: "FPT Telecom International (FTI)",
        period: "07/2025 – 09/2026",
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
        organization: "Deligent",
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
  skills: {
    title: "Năng lực kỹ thuật",
    groups: [
      {
        title: "Nền tảng AI doanh nghiệp",
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
        title: "Tác tử AI & Tự động hoá",
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
        title: "AI/ML & Dữ liệu",
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
        title: "Phát triển & Hạ tầng",
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
    title: "Dự án Tiêu biểu",
    tabs: [
      {
        id: "enterprise-ai",
        label: "Giải pháp",
        projects: [
          {
            title: "Agent Factory – Nền tảng Trung tâm Điều phối Multi-Agent & Tự động hóa Doanh nghiệp",
            tag: "Dự án nội bộ · Cuộc thi AI",
            summary: "Nền tảng điều phối multi-agent tập trung — Giải Nhất cuộc thi AI hóa quy trình.",
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
            role: "Solution Architect (đội dự thi)",
            organization: "Doanh nghiệp viễn thông",
            context:
              "Các đơn vị triển khai AI agent phân tán, thiếu đồng bộ, khó kiểm soát rủi ro an toàn thông tin và không thể tái sử dụng tài nguyên giữa các dự án.",
            solution:
              "Thiết kế kiến trúc Orchestrator tập trung quản lý toàn bộ vòng đời Agent, tích hợp các luồng workflow tự động qua Microsoft Copilot Studio, Power Platform, n8n, Dify và REST APIs.",
            outcome: "Hình thành quy trình AI agent có thể tái sử dụng và quản trị tập trung.",
            stack: ["Power Platform", "Dify", "REST APIs", "Multi-Agent"],
            media: "Ảnh nhận giải Quán quân Top 1 cùng ban giám khảo.",
          },
          {
            title: "Chuỗi Workshop & Training Microsoft 365 Copilot",
            tag: "Ứng dụng AI doanh nghiệp",
            summary: "Đồng hành 600+ người dùng từ PoC đến rollout Microsoft 365 Copilot.",
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
            role: "Technical Trainer · Đồng tổ chức workshop",
            customerSegment: "Tổng thầu xây dựng niêm yết (600+ người dùng) và khách hàng enterprise",
            ecosystem: ["Microsoft 365 Copilot", "Copilot Studio", "Microsoft Power Platform"],
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
            architectureDiagram: "tailored-ai-solutions",
            switchTab: "engineering",
            role: "AI Solution Architect / Presales",
            context: "Doanh nghiệp cần chuyển các pain point thành giải pháp AI phù hợp, dễ áp dụng và đáp ứng yêu cầu dữ liệu, AI, bảo mật.",
            approach: "Tìm hiểu hiện trạng và vấn đề; thiết kế giải pháp phù hợp; ưu tiên SaaS và mã nguồn mở có sẵn, tùy chỉnh theo dữ liệu · AI · bảo mật; hướng dẫn để người dùng áp dụng nhanh.",
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
            architectureDiagram: "ticket-automation",
            tag: "Tự động hóa AI",
            summary: "Tiếp nhận, phân loại và điều phối ticket CSKH, nội bộ và IT helpdesk.",
            context: "Ticket CSKH, nội bộ và IT helpdesk cần được tiếp nhận, phân loại và chuyển đến đúng nhóm xử lý.",
            approach: "Xây dựng pipeline AI xử lý ticket với các bước tiếp nhận, phân loại và điều phối.",
            outcome: "Giảm 80% thao tác thủ công.",
            stack: ["C#", ".NET", "Python (Apache Airflow)", "Dify", "Docker"],
          },
          {
            title: "Hỗ trợ ra quyết định cho quản lý",
            architectureDiagram: "manager-decision-support",
            tag: "Tự động hóa nghiệp vụ",
            summary: "AI đề xuất hướng xử lý phù hợp, chạy trên license Microsoft sẵn có — không cần build mới.",
            context: "Quản lý cần đề xuất hướng xử lý phù hợp mà không phát triển hệ thống mới.",
            approach: "Dùng Copilot Studio, Power Platform và Power Automate trên license Microsoft hiện có.",
            outcome: "Hỗ trợ ra quyết định mà không cần build mới.",
            stack: ["Copilot Studio", "Power Platform", "Power Automate", "Microsoft 365 Copilot"],
          },
          {
            title: "Quản lý công việc & lịch, tự động phân công",
            architectureDiagram: "task-schedule-management",
            tag: "Tự động hóa nghiệp vụ",
            summary: "Giao việc đúng người, nhắc lịch, cảnh báo và hỏi đáp qua trợ lý AI có sẵn.",
            context: "Đội ngũ cần tự động giao việc, quản lý lịch, nhận nhắc nhở và tra cứu thông tin.",
            approach: "Kết hợp trợ lý AI sẵn có với luồng tự động hóa để phân công, nhắc lịch và cảnh báo.",
            outcome: "Giảm thao tác quản lý công việc thủ công.",
            stack: ["Copilot Studio", "Power Automate", "Microsoft 365 Copilot"],
          },
          {
            title: "Hệ thống tra cứu & hỏi đáp tài liệu nội bộ",
            architectureDiagram: "internal-knowledge-qa",
            tag: "Tri thức nội bộ",
            summary: "Hỏi đáp quy trình và hướng dẫn nội bộ bằng RAG, trả lời kèm ảnh minh hoạ, tự cải thiện từ feedback.",
            context: "Người dùng cần tra cứu quy trình và hướng dẫn nội bộ từ kho tài liệu tập trung.",
            approach: "Thu thập và phân tích dữ liệu người dùng → làm sạch thành kho tri thức → thiết kế truy vấn RAG → trả lời kèm hình ảnh → tiếp nhận feedback, tự đánh giá và cập nhật kho tri thức.",
            outcome: "Câu trả lời minh họa được cải thiện liên tục từ feedback.",
            stack: ["RAG", "Kho tri thức", "Vòng lặp phản hồi"],
          },
          {
            title: "Nền tảng E-learning cho Trainer & Presales",
            architectureDiagram: "elearning-platform",
            tag: "Đang phát triển",
            status: "Đang phát triển",
            summary: "Kho tài liệu đào tạo và use-case portfolio theo ngành, tái sử dụng cho khách hàng cùng lĩnh vực.",
            context: "Mục tiêu là xây dựng template chuẩn cho ngành, portfolio use case luôn cập nhật, chuẩn bị nhanh hơn và có tài liệu chuyên nghiệp sẵn sàng trình bày. Phạm vi gồm sản phẩm AI Enterprise, mức độ sẵn sàng dữ liệu, sử dụng AI an toàn và kiểm soát truy cập.",
            approach: "Thiết kế nội dung và video đào tạo đang thực hiện; dự kiến xây dựng ứng dụng sau đó.",
            outcome: "Trạng thái: thiết kế nội dung và video đào tạo đang tiến hành; ứng dụng đang được lên kế hoạch.",
            stack: ["Next.js", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
          },
          {
            title: "Luận văn Thạc sĩ: Hệ hỗ trợ ra quyết định bằng cơ chế lan truyền độ tin cậy",
            architectureDiagram: "reliability-thesis",
            tag: "Luận văn Thạc sĩ",
            status: "Đang thực hiện",
            summary: "Tổng hợp nhiều nguồn đánh giá theo độ tin cậy để hỗ trợ ra quyết định.",
            context: "Nhiều nguồn đánh giá có độ tin cậy khác nhau cần được tổng hợp để hỗ trợ quyết định.",
            approach: "Nghiên cứu cơ chế lan truyền độ tin cậy để kết hợp các nguồn đánh giá.",
            outcome: "Luận văn đang được thực hiện.",
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
        title: "Thủ khoa đầu vào · Thạc sĩ Khoa học Máy tính, UIT",
        summary: "Thủ khoa đầu vào chương trình thạc sĩ.",
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
        title: "Cử nhân Trí tuệ Nhân tạo · Loại Giỏi, tốt nghiệp sớm",
        summary: "Tốt nghiệp sớm chương trình Cử nhân Trí tuệ Nhân tạo.",
      },
      {
        type: "paper",
        title: "2 bài báo hội nghị quốc tế · Tác giả chính (SoICT 2024, NSS 2025)",
        summary: "ArtemisSearch và FraudTrace — mở tab Học thuật để xem chi tiết.",
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
        summary: "Chứng nhận chuyên môn và chương trình đào tạo về AI doanh nghiệp.",
      },
    ],
  },
  industry: {
    title: "Nhóm ngành đã tư vấn",
    items: [
      {
        title: "Tài chính – Ngân hàng & Chứng khoán",
      },
      {
        title: "Xây dựng, Bất động sản & Năng lượng",
      },
      {
        title: "Sản xuất & Chuỗi cung ứng",
      },
      {
        title: "Bán lẻ, Tiêu dùng & F&B",
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
