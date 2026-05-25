import { describe, it, expect } from "vitest";
import { featuredProjects, secondaryProjects } from "@/lib/projects";
import { workflowStages } from "@/lib/workflow";
import { skillCategories } from "@/lib/skills";
import { timeline } from "@/lib/experience";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, EMAIL } from "@/lib/config";

describe("projects data", () => {
  const allProjects = [...featuredProjects, ...secondaryProjects];

  it("has exactly 6 featured projects", () => {
    expect(featuredProjects).toHaveLength(6);
  });

  it("has exactly 6 secondary projects", () => {
    expect(secondaryProjects).toHaveLength(6);
  });

  it("every featured project has required fields", () => {
    for (const p of featuredProjects) {
      expect(p.title, `${p.title} missing title`).toBeTruthy();
      expect(p.stack.length, `${p.title} stack empty`).toBeGreaterThan(0);
      expect(p.description, `${p.title} missing description`).toBeTruthy();
      expect(p.githubUrl, `${p.title} missing githubUrl`).toBeTruthy();
      expect(p.buildNotes, `${p.title} missing buildNotes`).toBeTruthy();
    }
  });

  it("every secondary project has required fields", () => {
    for (const p of secondaryProjects) {
      expect(p.title).toBeTruthy();
      expect(p.stack.length).toBeGreaterThan(0);
      expect(p.description).toBeTruthy();
      expect(p.githubUrl).toBeTruthy();
      expect(p.buildNotes).toBeTruthy();
    }
  });

  it("exactly 3 projects across all have liveUrl", () => {
    const withLive = allProjects.filter((p) => p.liveUrl !== undefined);
    expect(withLive).toHaveLength(3);
  });

  it("AI Creator Studio, DebtLens, form-sanitize have liveUrl", () => {
    const titles = ["AI CREATOR STUDIO", "DEBTLENS", "FORM-SANITIZE"];
    for (const title of titles) {
      const project = allProjects.find((p) => p.title === title);
      expect(project, `${title} not found`).toBeDefined();
      expect(project!.liveUrl, `${title} missing liveUrl`).toBeTruthy();
    }
  });

  it("featured projects are in correct order", () => {
    const expectedOrder = [
      "ORVEXA",
      "AI CREATOR STUDIO",
      "FINBOT",
      "DEBTLENS",
      "CUSTOMER SUPPORT RAG",
      "WELDING PRO",
    ];
    expect(featuredProjects.map((p) => p.title)).toEqual(expectedOrder);
  });
});

describe("workflow stages", () => {
  it("has exactly 6 stages", () => {
    expect(workflowStages).toHaveLength(6);
  });

  it("every stage has id, label, humanRole, aiRole, and status", () => {
    for (const stage of workflowStages) {
      expect(stage.id, `stage missing id`).toBeDefined();
      expect(stage.label, `stage ${stage.id} missing label`).toBeTruthy();
      expect(stage.status, `stage ${stage.id} missing status`).toBeTruthy();
      expect(stage.humanRole, `stage ${stage.id} missing humanRole`).toBeTruthy();
      expect(stage.aiRole, `stage ${stage.id} missing aiRole`).toBeTruthy();
    }
  });

  it("stage ids are sequential 1–6", () => {
    expect(workflowStages.map((s) => s.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("skills data", () => {
  it("has exactly 6 categories", () => {
    expect(skillCategories).toHaveLength(6);
  });

  it("AI Tooling category exists and is highlighted", () => {
    const aiTooling = skillCategories.find((c) => c.name === "AI Tooling");
    expect(aiTooling).toBeDefined();
    expect(aiTooling!.highlighted).toBe(true);
  });

  it("AI Tooling includes Claude Code, Cursor, MCP, Claude.md workflows", () => {
    const aiTooling = skillCategories.find((c) => c.name === "AI Tooling")!;
    expect(aiTooling.skills).toContain("Claude Code");
    expect(aiTooling.skills).toContain("Cursor");
    expect(aiTooling.skills).toContain("MCP");
    expect(aiTooling.skills).toContain("Claude.md workflows");
  });

  it("every category has a name and at least one skill", () => {
    for (const cat of skillCategories) {
      expect(cat.name).toBeTruthy();
      expect(cat.skills.length).toBeGreaterThan(0);
    }
  });
});

describe("experience timeline", () => {
  it("has exactly 5 entries", () => {
    expect(timeline).toHaveLength(5);
  });

  it("every entry has role, institution, dateRange, type, and highlights", () => {
    for (const entry of timeline) {
      expect(entry.role).toBeTruthy();
      expect(entry.institution).toBeTruthy();
      expect(entry.dateRange).toBeTruthy();
      expect(entry.type).toMatch(/^(work|education|research)$/);
      expect(entry.highlights.length).toBeGreaterThan(0);
    }
  });

  it("includes UNT TA, Oriana, MS CS, BTech, and research paper", () => {
    const institutions = timeline.map((e) => e.institution);
    expect(institutions).toContain("University of North Texas");
    expect(institutions).toContain("Oriana Financial Technologies");
    expect(institutions).toContain("VNR VJIET");
    expect(institutions).toContain("Industrial Engineering Journal");
  });
});

describe("config constants", () => {
  it("all config exports are non-empty strings", () => {
    expect(GITHUB_URL).toBeTruthy();
    expect(LINKEDIN_URL).toBeTruthy();
    expect(RESUME_URL).toBeTruthy();
    expect(EMAIL).toBeTruthy();
  });
});
