export interface Project {
  title: string;
  stack: string[];
  description: string;
  metrics?: Record<string, string>;
  githubUrl: string;
  liveUrl?: string;
  buildNotes: string;
}

export const featuredProjects: Project[] = [
  {
    title: "ORVEXA",
    stack: ["Python", "LangGraph", "WebSockets", "Redis", "FastAPI"],
    description:
      "Real-time multi-agent collaboration platform where multiple users and autonomous agents share a stateful room. Agents negotiate tasks, delegate sub-goals, and stream results back through a fault-tolerant WebSocket layer.",
    metrics: {
      "LATENCY": "< 120ms p99",
      "CONCURRENCY": "50+ agents/room",
      "UPTIME": "99.8%",
    },
    githubUrl: "https://github.com/tnikhil-24/orvexa",
    buildNotes:
      "Tracer bullet approach — built one full vertical slice (1 user, 1 agent, 1 result card) before scaling to multi-user rooms. Each subsequent agent type was a new vertical slice, never a horizontal layer.",
  },
  {
    title: "AI CREATOR STUDIO",
    stack: ["Next.js", "TypeScript", "LangChain", "Gemini", "PostgreSQL"],
    description:
      "Full-stack AI content generation platform. Users describe a creative brief; the system routes to specialized agents for copywriting, image prompting, and SEO scoring. PRD-driven build with 127 tests written TDD.",
    metrics: {
      "TESTS": "127 passing",
      "TICKETS": "20+ Kanban",
      "AGENTS": "4 specialized",
    },
    githubUrl: "https://github.com/tnikhil-24/ai-creator-studio",
    liveUrl: "PLACEHOLDER_AI_CREATOR_STUDIO_DEMO",
    buildNotes:
      "PRD written with Claude, converted to 20+ Kanban tickets, executed in implementation loop. 127 tests written TDD — red-green-refactor on every agent integration point.",
  },
  {
    title: "FINBOT",
    stack: ["Python", "LangGraph", "OpenAI", "Plaid API", "FastAPI"],
    description:
      "Conversational financial assistant that connects to live bank data via Plaid. Uses a LangGraph StateGraph to route between spending analysis, budget forecasting, and anomaly detection agents.",
    metrics: {
      "ACCURACY": "92% intent routing",
      "NODES": "7 StateGraph",
      "COVERAGE": "Plaid + manual",
    },
    githubUrl: "https://github.com/tnikhil-24/finbot",
    buildNotes:
      "LangGraph StateGraph architecture co-designed with Claude as research partner before any code was written. Spent 3 research sessions mapping state transitions — prevented two major architectural rewrites.",
  },
  {
    title: "DEBTLENS",
    stack: ["TypeScript", "VS Code API", "Cloudflare Workers", "Node.js"],
    description:
      "VS Code extension that scans open files for technical debt patterns and scores them using a proprietary algorithm. Debt scores stream from a Cloudflare Worker edge function for sub-100ms feedback.",
    metrics: {
      "RESPONSE": "< 100ms edge",
      "PATTERNS": "40+ debt rules",
      "RATING": "4.8★ Marketplace",
    },
    githubUrl: "https://github.com/tnikhil-24/debtlens",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=tnikhil-24.debtlens",
    buildNotes:
      "Smart Zone / Dumb Zone split — Nikhil owned the debt scoring algorithm and pattern weights. Claude handled Cloudflare Worker boilerplate and VS Code API wiring, saving ~3 days of API spelunking.",
  },
  {
    title: "CUSTOMER SUPPORT RAG",
    stack: ["Python", "LangChain", "Pinecone", "OpenAI", "FastAPI"],
    description:
      "Hybrid RAG pipeline for enterprise customer support. Combines dense vector retrieval (Pinecone) with BM25 sparse retrieval, reranked by a cross-encoder. Reduces hallucination rate vs naive RAG.",
    metrics: {
      "FAITHFULNESS": "94%",
      "RETRIEVAL": "Hybrid dense+sparse",
      "REDUCTION": "60% escalations",
    },
    githubUrl: "https://github.com/tnikhil-24/customer-support-rag",
    buildNotes:
      "Retrieval architecture explored in a research.md phase before PRD was written. Found that naive RAG failed on long-tail queries — hybrid retrieval was the fix discovered in research, not after a costly rebuild.",
  },
  {
    title: "WELDING PRO",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "Spring Boot"],
    description:
      "Production scheduling and quality tracking system for a welding shop floor. Real-time job queue management, weld quality metrics logging, and operator performance dashboards.",
    metrics: {
      "JOBS/DAY": "300+ tracked",
      "DEFECT RATE": "−22% after deploy",
      "USERS": "15 operators",
    },
    githubUrl: "https://github.com/tnikhil-24/welding-pro",
    buildNotes:
      "Agile sprint planning with Claude generating ticket breakdowns from the PRD. Each sprint kicked off with a Kanban generation session — Claude produced 8–12 scoped tickets per session in under 5 minutes.",
  },
];

export const secondaryProjects: Project[] = [
  {
    title: "COLD EMAIL GENERATOR",
    stack: ["Python", "OpenAI", "FastAPI", "React"],
    description:
      "Generates personalized cold outreach emails from a prospect URL. Scrapes company context, infers pain points, and drafts a targeted email with configurable tone.",
    githubUrl: "https://github.com/tnikhil-24/cold-email-generator",
    buildNotes: "Single-session build using PRD → implementation loop pattern.",
  },
  {
    title: "ELDERCARE VOICE ASSISTANT",
    stack: ["Python", "Whisper", "LangChain", "ElevenLabs", "Raspberry Pi"],
    description:
      "Offline-capable voice assistant designed for elderly users. Wake-word detection triggers Whisper transcription, LangChain reasoning, and ElevenLabs TTS — all on a Raspberry Pi 4.",
    githubUrl: "https://github.com/tnikhil-24/eldercare-voice-assistant",
    buildNotes: "Hardware constraints scoped with Claude research before any code.",
  },
  {
    title: "MARKET REGIME DETECTION",
    stack: ["Python", "scikit-learn", "pandas", "Hidden Markov Models"],
    description:
      "Classifies S&P 500 market regimes (bull, bear, sideways) using Hidden Markov Models trained on price, volume, and VIX features. Backtested against 20 years of data.",
    metrics: {
      "ACCURACY": "81% regime classification",
      "BACKTEST": "20yr S&P 500",
    },
    githubUrl: "https://github.com/tnikhil-24/market-regime-detection",
    buildNotes: "Research-first: modeled HMM theory with Claude before implementation.",
  },
  {
    title: "NYC TRAFFIC ANALYSIS",
    stack: ["Python", "PySpark", "Hadoop", "Tableau"],
    description:
      "Big data pipeline analyzing 10M+ NYC taxi records to surface congestion patterns by borough, time-of-day, and weather. Visualized in Tableau for city planning use cases.",
    metrics: {
      "RECORDS": "10M+ taxi trips",
      "PIPELINE": "PySpark + Hadoop",
    },
    githubUrl: "https://github.com/tnikhil-24/nyc-traffic-analysis",
    buildNotes: "Kanban-driven data engineering sprint.",
  },
  {
    title: "FORM-SANITIZE",
    stack: ["TypeScript", "Node.js"],
    description:
      "Published npm library for sanitizing and validating HTML form data. Zero-dependency, tree-shakeable, fully typed. Used in production by 3rd-party projects.",
    metrics: {
      "SIZE": "< 2kb gzipped",
      "DEPS": "0 dependencies",
    },
    githubUrl: "https://github.com/tnikhil-24/form-sanitize",
    liveUrl: "https://www.npmjs.com/package/form-sanitize",
    buildNotes: "TDD from day one — tests were written before the first sanitizer function.",
  },
  {
    title: "MULTI-FACE DETECTION",
    stack: ["Python", "MTCNN", "OpenCV", "TensorFlow"],
    description:
      "Research implementation of MTCNN-based multi-face detection with landmark localization. Published in the Industrial Engineering Journal. Benchmarked on FDDB and WIDER FACE datasets.",
    metrics: {
      "PRECISION": "94.2% FDDB",
      "PUBLISHED": "Industrial Eng. Journal",
    },
    githubUrl: "https://github.com/tnikhil-24/multi-face-detection",
    buildNotes: "Academic research project — methodology validated with Claude literature review.",
  },
];
