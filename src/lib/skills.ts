export interface SkillCategory {
  name: string;
  skills: string[];
  highlighted?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Go"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    name: "Backend",
    skills: ["FastAPI", "Spring Boot", "Node.js", "Kafka", "Redis", "PostgreSQL"],
  },
  {
    name: "AI/ML",
    skills: ["LangChain", "LangGraph", "RAG", "MTCNN", "Gemini API", "OpenAI API", "Pinecone", "Whisper"],
  },
  {
    name: "AI Tooling",
    skills: ["Claude Code", "Cursor", "MCP", "Claude.md workflows"],
    highlighted: true,
  },
  {
    name: "Infra/DevOps",
    skills: ["Docker", "Vercel", "Cloudflare Workers", "GitHub Actions", "Hadoop", "PySpark"],
  },
];
