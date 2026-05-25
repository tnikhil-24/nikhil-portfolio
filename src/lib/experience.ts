export interface TimelineEntry {
  role: string;
  institution: string;
  dateRange: string;
  type: "work" | "education" | "research";
  highlights: string[];
  url?: string;
}

export const timeline: TimelineEntry[] = [
  {
    role: "Teaching Assistant",
    institution: "University of North Texas",
    dateRange: "Jan 2025 — Present",
    type: "work",
    highlights: [
      "200+ students across AI/ML and data structures courses",
      "Held weekly office hours, graded assignments, led lab sessions",
    ],
  },
  {
    role: "Software Engineer Intern",
    institution: "Oriana Financial Technologies",
    dateRange: "June 2023 — July 2024",
    type: "work",
    highlights: [
      "Built real-time transaction pipelines with Spring Boot and Kafka",
      "Delivered React dashboards consumed by 10k+ daily active users",
      "Reduced API p99 latency by 34% through caching layer redesign",
    ],
  },
  {
    role: "MS Computer Science",
    institution: "University of North Texas",
    dateRange: "2024 — 2026 (Expected)",
    type: "education",
    highlights: ["GPA 3.90 / 4.0", "Focus: AI Systems, Distributed Computing"],
  },
  {
    role: "BTech Computer Science & Engineering",
    institution: "VNR VJIET",
    dateRange: "2020 — 2024",
    type: "education",
    highlights: ["GPA 3.44 / 4.0"],
  },
  {
    role: "Research: Multi-Face Detection via MTCNN",
    institution: "Industrial Engineering Journal",
    dateRange: "2024",
    type: "research",
    highlights: [
      "94.2% precision on FDDB benchmark",
      "Landmark localization on WIDER FACE dataset",
    ],
    url: "PLACEHOLDER_RESEARCH_PAPER_URL",
  },
];
