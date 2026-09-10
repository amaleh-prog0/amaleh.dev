export interface Project {
  slug: string;
  title: string;
  valueProp: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
  caseStudy?: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    implementation: string;
    challenges: string;
    results: string;
    lessons: string;
  };
}

export const projects: Project[] = [
  {
    slug: "autonomous-pr-reviewer",
    title: "Autonomous PR Reviewer & Self-Healing Agent",
    valueProp: "Automating the pull-request review and debugging lifecycle.",
    description: "An autonomous AI software-engineering agent designed to analyze code changes, identify issues, run tests, and support automated remediation.",
    tech: ["AI Agents", "Groq", "GitHub API", "Python", "FastAPI"],
    github: "https://github.com/amale-herbert/autonomous-pr-reviewer", // Placeholder if not provided
    featured: true,
    caseStudy: {
      overview: "A tool that integrates an AI agent directly into the software development lifecycle to automate code review and debugging.",
      problem: "Code review and debugging can be repetitive and time-consuming, requiring manual inspection of changes and interpretation of test failures.",
      solution: "An AI-powered workflow that retrieves PR changes via GitHub API, analyzes them using an AI critic, runs tests, and performs iterative self-healing.",
      architecture: "Built as an agentic loop: GitHub API $\to$ AI Critic $\to$ Test Runner $\to$ Diagnoser $\to$ Remediation Agent.",
      implementation: "Used Groq for high-speed LLM inference and developed structured prompts for the AI critic to produce machine-readable findings.",
      challenges: "Managing the context window for large PRs and ensuring the agent could interact with GitHub programmatically in a reliable manner.",
      results: "Reduced manual review time by automating the identification of common bugs and providing immediate diagnostic feedback.",
      lessons: "Learned that AI is most effective when given a structured role and feedback loop (test results) rather than as a simple chat interface.",
    },
  },
  // More projects can be added here as placeholders or real data
];
