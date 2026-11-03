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
    tagline: "Đưa AI doanh nghiệp từ PoC đến triển khai thực tế — trên Microsoft & AWS",
    meta: "TP.HCM · Remote/Hybrid · Đang mở cơ hội AI Solution Architect / Presales",
    summary:
      "AI Solution Architect giúp doanh nghiệp đưa Microsoft 365 Copilot và Amazon Quick từ PoC vào vận hành thực tế. Đã tư vấn cho 20+ doanh nghiệp và tham gia bảo vệ giải pháp cho 9 deal AI & Cloud, với nền tảng nghiên cứu AI vững chắc.",
    ctas: [
      { label: "Xem Dự án Tiêu biểu", href: "#work" },
      { label: "Tải CV" },
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
        description:
          "Thủ khoa đầu vào Thạc sĩ Khoa học Máy tính UIT, tốt nghiệp sớm Cử nhân Trí tuệ Nhân tạo loại Giỏi. Tác giả chính của hai bài báo tại hội nghị quốc tế (SoICT 2024, NSS 2025) thực hiện tại InSecLab, về tìm kiếm video đa phương thức với Vision Transformer và hệ thống Multi-Agent phòng chống lừa đảo trực tuyến. Nền tảng này giúp tôi đánh giá mô hình có cơ sở và luôn đặt an toàn dữ liệu lên trước khi đưa AI vào doanh nghiệp.",
      },
      {
        title: "Kỹ thuật Thực chiến",
        description:
          "Từ startup Deligent với tính năng sinh mẫu trang phục bằng GenAI đến AI Engineer Intern tại FTI, nơi pipeline tự động hóa xử lý ticket giảm 80% thao tác thủ công và giành Quán quân cuộc thi FTI AI Process Automation. Hands-on với Python/FastAPI, Next.js, RAG, Docker, GitLab CI/CD và triển khai mô hình trên GPU.",
      },
      {
        title: "Tư vấn Giải pháp & Presales",
        description:
          "AI Solution Consultant & Presales tại FTI và AI Solution Architect tại Khoi Solutions. Làm việc trực tiếp với ban điều hành để tư vấn giải pháp cho 20+ doanh nghiệp thuộc khối Tài chính – Ngân hàng, Xây dựng, Sản xuất và Bán lẻ; tham gia bảo vệ giải pháp kỹ thuật cho 9 deal AI & Cloud. Chuyên sâu Microsoft 365 Copilot / Copilot Studio và Amazon Quick; đồng tổ chức chuỗi Copilot workshop cùng Microsoft Vietnam; dẫn dắt nhóm intern và đào tạo kỹ thuật cho khách hàng.",
      },
    ],
    trajectory: {
      title: "Tầm nhìn Nghề nghiệp",
      description:
        "Trở thành Lead Solution Architect dẫn dắt toàn trình các giải pháp AI doanh nghiệp — từ discovery, PoC đến adoption — kết hợp nền tảng nghiên cứu với bài toán tăng trưởng và tối ưu chi phí của doanh nghiệp.",
    },
  },
  experience: {
    title: "Kinh nghiệm",
    intro:
      "Tôi kết nối nghiên cứu AI học thuật với kinh nghiệm kỹ thuật thực tế và tư vấn giải pháp doanh nghiệp. Tôi giúp đội ngũ chuyển từ bài toán kinh doanh rõ ràng đến giải pháp AI an toàn, có thể ứng dụng.",
    careerVision:
      "Định hướng: phát triển thành Lead Solution Architect, dẫn dắt giải pháp AI doanh nghiệp từ khảo sát đến ứng dụng.",
    items: [
      {
        title: "AI Solution Architect",
        organization: "Khoi Solutions",
        period: "08/2026 – Hiện tại",
        location: "Remote / Hybrid",
        description: "Tư vấn kiến trúc giải pháp và adoption AI cho khách hàng doanh nghiệp; dẫn dắt nhóm intern.",
        bullets: [
          "Định hình kiến trúc giải pháp theo ưu tiên kinh doanh và mức độ sẵn sàng dữ liệu.",
          "Đồng hành cùng doanh nghiệp trong lập kế hoạch và triển khai ứng dụng.",
        ],
      },
      {
        title: "AI Solution Consultant & Presales",
        organization: "FPT Telecom International (FTI)",
        period: "07/2025 – 09/2026",
        description:
          "Tư vấn giải pháp, presales, PoC và đào tạo kỹ thuật cho hơn 20 doanh nghiệp; đồng tổ chức workshop cùng Microsoft Vietnam.",
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
        description: "Xây dựng pipeline tự động hóa xử lý ticket bằng AI; Quán quân cuộc thi FTI AI Process Automation.",
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
        description: "Phát triển tính năng sinh mẫu trang phục bằng GenAI.",
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
        description:
          "Làm việc trực tiếp cùng ban điều hành để thấu hiểu bài toán cốt lõi, xác định điểm nghẽn vận hành và đánh giá mức độ sẵn sàng, quản trị dữ liệu.",
      },
      {
        phase: "02",
        title: "Thiết kế Kiến trúc",
        summary: "Chọn stack phù hợp và rào chắn an toàn dữ liệu",
        description:
          "Lựa chọn nền tảng phù hợp như Microsoft 365 Copilot, Amazon Quick hoặc Private RAG; thiết lập nguyên tắc an toàn dữ liệu và phân quyền truy cập.",
      },
      {
        phase: "03",
        title: "PoC / Pilot",
        summary: "Kiểm chứng với người dùng thật trước khi mở rộng",
        description:
          "Xây dựng PoC hoặc pilot với nhóm người dùng thật; đánh giá độ chính xác, độ trễ và chi phí trước khi mở rộng.",
      },
      {
        phase: "04",
        title: "Chuyển giao & Ứng dụng",
        summary: "Đào tạo theo vai trò và theo dõi mức độ sử dụng",
        description:
          "Xây dựng tài liệu đào tạo theo vai trò, tổ chức workshop chuyển giao, theo dõi mức độ sử dụng và hỗ trợ sau đào tạo để đạt mục tiêu ứng dụng.",
      },
    ],
  },
  skills: {
    title: "Năng lực & Công cụ Kỹ thuật",
    groups: [
      {
        title: "Nền tảng AI doanh nghiệp",
        skills: [
          "Microsoft 365 Copilot",
          "Microsoft Copilot Studio",
          "Power Platform",
          "Azure OpenAI",
          "Amazon Quick",
          "Amazon Bedrock",
        ],
      },
      {
        title: "Tác tử AI & Tự động hóa quy trình",
        skills: [
          "Hệ đa tác tử",
          "Điều phối Agent Factory",
          "n8n",
          "Dify",
          "LangChain",
          "CrewAI",
          "Tự động hóa quy trình",
          "Tái thiết kế quy trình",
        ],
      },
      {
        title: "AI / ML & Kỹ thuật",
        skills: [
          "Python",
          "FastAPI",
          "PyTorch",
          "Hugging Face",
          "Unsloth (tinh chỉnh LLM)",
          "Kiến trúc RAG doanh nghiệp",
          "Vision Transformer (ViT)",
          "Lượng tử hóa & triển khai mô hình",
        ],
      },
      {
        title: "Phát triển toàn diện, DevOps & Bảo mật dữ liệu",
        skills: [
          "Docker",
          "GitLab CI/CD",
          "Linux",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Tích hợp REST API",
          "Quản trị dữ liệu & phân quyền cho AI",
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
            stack: ["Microsoft Copilot Studio", "Power Platform", "n8n", "Dify", "REST APIs", "Multi-Agent"],
            media: "Ảnh nhận giải Quán quân Top 1 cùng ban giám khảo.",
          },
          {
            title: "Microsoft 365 Copilot cho Tổng thầu Xây dựng & Chuỗi Workshop",
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
            ecosystem: ["Microsoft 365 Copilot", "Copilot Studio", "Azure OpenAI", "Microsoft Power Platform"],
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
            title: "Trợ lý Tri thức Doanh nghiệp cho Sản xuất & Chuỗi Cung ứng (Amazon Quick & Enterprise RAG)",
            tag: "Sản xuất · Trợ lý tri thức",
            summary: "Trợ lý tra cứu tài liệu kỹ thuật trên Amazon Quick cho doanh nghiệp sản xuất.",
            architectureDiagram: "knowledge-assistant",
            role: "AI Solution Consultant / Presales",
            customerSegment:
              "Doanh nghiệp sản xuất – chuỗi cung ứng (giày dép – dệt may xuất khẩu, vật liệu xây dựng, sản xuất công nghiệp)",
            ecosystem: ["Amazon Quick", "Amazon Bedrock", "Enterprise RAG"],
            context:
              "Thông số kỹ thuật, hồ sơ chuỗi cung ứng, spec vật liệu và tài liệu vận hành nằm rải rác trên nhiều hệ thống (S3, Salesforce, Jira, SharePoint), khiến việc tra cứu thủ công tốn nhiều thời gian.",
            solution:
              "Tư vấn và thiết kế kiến trúc Enterprise Knowledge Assistant trên Amazon Quick với các connector dữ liệu có phân quyền; bóc tách tự động bảng thông số kỹ thuật và báo cáo sản xuất phức tạp.",
            outcome: "Thiết kế trợ lý có phân quyền, giúp tra cứu tri thức kỹ thuật thuận tiện hơn.",
            measurement:
              "Đánh giá độ chính xác câu trả lời và thời gian tra cứu trên các tình huống nghiệp vụ thực tế trong PoC; bảo vệ giải pháp kỹ thuật trước ban điều hành nhà máy.",
          },
        ],
      },
      {
        id: "engineering",
        label: "Kỹ thuật",
        projects: [
          {
            title: "Hệ thống Tự động hóa Xử lý Ticket Vận hành bằng AI",
            architectureDiagram: "ticket-automation",
            tag: "Tự động hóa AI",
            summary: "Pipeline AI tiếp nhận và phân loại ticket — giảm 80% thao tác thủ công.",
            subtitle: "AI-Powered Ticket Processing",
            role: "AI Engineer Intern",
            organization: "Doanh nghiệp viễn thông",
            period: "01/2025 – 06/2025",
            context:
              "Phân tích bài toán trực tiếp cùng ban điều hành; tự động hóa tiếp nhận, phân loại và điều phối ticket kỹ thuật.",
            solution: "Xây dựng pipeline xử lý ticket vận hành bằng AI Agents.",
            outcome: "Tinh gọn quy trình tiếp nhận ticket vận hành và rút ngắn thời gian xử lý.",
            stack: ["Python", "FastAPI", "Docker", "GitLab CI/CD", "Large Language Models", "AI Agents"],
          },
          {
            title: "Nền tảng Thiết kế Thời trang Tự động bằng Generative AI",
            architectureDiagram: "genai-fashion",
            tag: "AI tạo sinh",
            summary: "Sinh mẫu trang phục từ mô tả bằng GenAI.",
            subtitle: "GenAI Fashion Platform",
            role: "Frontend + AI Developer Intern",
            organization: "Startup công nghệ",
            period: "08/2024 – 12/2024",
            context:
              "Phát triển giao diện web tương tác và kết nối API mô hình khuếch tán để sinh mẫu áo thun, phụ kiện tự động từ câu lệnh người dùng.",
            solution: "Tích hợp trải nghiệm web với các API tạo ảnh để đưa thiết kế từ prompt vào quy trình sản phẩm.",
            outcome:
              "Hoàn thiện quy trình thiết kế bằng AI từ mô tả đến ý tưởng hình ảnh.",
            stack: ["Next.js", "React", "Tailwind CSS", "Image Generation APIs", "FastAPI", "Diffusion Models"],
          },
          {
            title: "Hệ thống Hỗ trợ Ra quyết định cho Quản lý Ticket",
            architectureDiagram: "ticket-decision-support",
            tag: "Luận văn Thạc sĩ",
            summary: "Hệ hỗ trợ ra quyết định phân loại và phân công ticket.",
            subtitle: "Luận văn Thạc sĩ",
            role: "Học viên thực hiện luận văn",
            organization: "UIT – Thạc sĩ Khoa học Máy tính",
            period: "2025 – nay",
            context:
              "Thiết kế lại hệ thống ticket hỗ trợ sau mỗi đợt triển khai/đào tạo AI: tiếp nhận từ nhiều kênh (form, Teams), phân loại ticket và phân công đúng người xử lý.",
            approach:
              "Phân loại vượt ngưỡng keyword/TF-IDF/BM25; đề xuất phân công theo khối lượng công việc và hiệu suất người xử lý (gợi ý cho admin, tự động gán khi chờ quá lâu); gợi ý cách xử lý theo loại ticket từ playbook và tài liệu nội bộ; dựa trên nghiên cứu về tổng hợp quyết định (decision aggregation).",
            outcome: "Nghiên cứu quy trình xử lý ticket dựa trên ngữ cảnh và tải công việc.",
            stack: ["Python", "LLM", "CrewAI (Multi-Agent)"],
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
    title: "Nghiên cứu & Chứng chỉ",
    items: [
      {
        type: "paper",
        title: "ArtemisSearch · SoICT 2024",
        summary: "Bài báo tác giả chính về tìm kiếm video đa phương thức.",
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
        summary: "Bài báo tác giả chính về hệ thống multi-agent xác minh tin lừa đảo.",
        paperUrl: "fraudtrace",
      },
      {
        type: "credential",
        title: "Microsoft Frontier Engineer",
        summary: "Chứng nhận kỹ thuật về AI doanh nghiệp và phát triển giải pháp.",
      },
      {
        type: "credential",
        title: "Copilot Jumpstart",
        summary: "Đào tạo chuyên sâu về giải pháp và kiến trúc.",
      },
      {
        type: "award",
        title: "Giải Nhất · Cuộc thi Tự động hóa Quy trình AI của FTI",
        summary: "Giải thưởng cho giải pháp tự động hóa vận hành bằng AI.",
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
        title: "Cử nhân Trí tuệ Nhân tạo · Loại Giỏi",
        summary: "Tốt nghiệp sớm tại Trường Đại học Công nghệ Thông tin.",
      },
    ],
  },
  industry: {
    title: "Ngành Doanh nghiệp Đã Tư vấn",
    intro:
      "Mạng lưới kinh nghiệm theo khối ngành doanh nghiệp, thay cho việc sử dụng logo hoặc tên thương hiệu khách hàng.",
    items: [
      {
        title: "Tài chính, Ngân hàng & Chứng khoán",
        description: "Ngân hàng thương mại quy mô lớn, quỹ quản lý tài sản, công ty chứng khoán và tổ chức tài chính tiêu dùng.",
      },
      {
        title: "Xây dựng, Bất động sản & Năng lượng",
        description: "Tổng thầu xây dựng quy mô lớn, doanh nghiệp phát triển bất động sản và doanh nghiệp năng lượng – hạ tầng.",
      },
      {
        title: "Sản xuất Công nghiệp & Chuỗi Cung ứng",
        description: "Nhà máy giày dép – dệt may xuất khẩu và các doanh nghiệp sản xuất công nghiệp.",
      },
      {
        title: "Bán lẻ, Tiêu dùng & F&B",
        description: "Doanh nghiệp bán lẻ đa quốc gia, chuỗi F&B, doanh nghiệp dược phẩm – tiêu dùng và nông nghiệp.",
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
