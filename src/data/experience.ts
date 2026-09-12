export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "NeuralCore AI",
    role: "Senior AI/ML Engineer",
    period: "2022 — Present",
    description: "Leading the development of production-ready intelligent agent frameworks and scalable RAG (Retrieval-Augmented Generation) pipelines to solve complex enterprise automation challenges.",
    achievements: [
      "Architected a multi-agent orchestration system that reduced operational overhead by 35% for enterprise clients.",
      "Implemented advanced semantic caching strategies, reducing LLM API costs by 40% and improving response latency by 200ms.",
      "Developed a high-precision RAG pipeline using hybrid search (BM25 + Dense Vector) that increased retrieval accuracy by 22%.",
      "Scaled AI-driven features to support 100k+ monthly active users with 99.9% uptime."
    ],
    tech: ["Python", "PyTorch", "LangChain", "OpenAI", "Pinecone", "Kubernetes", "FastAPI"]
  },
  {
    company: "OmniStack Systems",
    role: "Full-stack Software Engineer",
    period: "2019 — 2022",
    description: "Designed and implemented high-performance web applications and scalable backend architectures, focusing on developer experience and end-user performance.",
    achievements: [
      "Led the migration of a legacy monolithic architecture to a distributed microservices system, improving deployment frequency by 4x.",
      "Optimized Core Web Vitals, reducing Largest Contentful Paint (LCP) from 3.2s to 1.1s through aggressive caching and Next.js optimization.",
      "Developed a real-time collaborative workspace using WebSockets and CRDTs, enabling seamless multi-user editing.",
      "Built a comprehensive internal UI library that reduced frontend development time by 30% across three different product teams."
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Redis", "Tailwind CSS"]
  },
  {
    company: "Apex Labs",
    role: "Software Engineering Intern",
    period: "2018 — 2019",
    description: "Contributed to the development of core backend APIs and internal automation tooling to streamline the software development lifecycle.",
    achievements: [
      "Automated 30% of manual regression testing by developing a suite of Python-based E2E test scripts.",
      "Optimized database queries for the primary API endpoint, reducing response times by 15% for high-traffic routes.",
      "Implemented a custom CI/CD pipeline using GitHub Actions that reduced build-to-deploy time by 10 minutes."
    ],
    tech: ["Python", "Django", "Git", "Docker", "PostgreSQL"]
  }
];
