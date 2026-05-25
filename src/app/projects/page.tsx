import type { Metadata } from "next";
import { featuredProjects, secondaryProjects } from "@/lib/projects";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects — Nikhil T",
  description: "AI systems, full-stack apps, and open-source tools built with multi-agent pipelines, RAG architectures, and real-time infra.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Page heading */}
      <div className="mb-16 flex flex-col gap-3">
        <h1 className="font-mono text-3xl text-[var(--text)] sm:text-4xl">
          projects
        </h1>
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
          {featuredProjects.length + secondaryProjects.length} shipped — ai systems, full-stack apps, open-source
        </p>
      </div>

      {/* Featured */}
      <section className="mb-20 flex flex-col gap-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
          featured
        </h2>
        <ProjectsGrid projects={featuredProjects} variant="featured" columns="two" />
      </section>

      {/* Secondary */}
      <section className="flex flex-col gap-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
          more projects
        </h2>
        <ProjectsGrid projects={secondaryProjects} variant="secondary" columns="three" />
      </section>
    </div>
  );
}
