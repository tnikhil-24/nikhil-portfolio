import type { Metadata } from "next";
import ProcessLog from "@/components/ProcessLog";
import HandwrittenNotesCallout from "@/components/HandwrittenNotesCallout";
import TracerBulletsDiagram from "@/components/TracerBulletsDiagram";
import SmartZoneDiagram from "@/components/SmartZoneDiagram";
import HitlDiagram from "@/components/HitlDiagram";
import RalphCallout from "@/components/RalphCallout";
import ClaudeMdCallout from "@/components/ClaudeMdCallout";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "How I Build with AI — Nikhil T",
  description:
    "The 6-stage process I use to build AI systems: tracer bullets, Smart Zone / Dumb Zone, HITL multi-phase execution, and Claude.md grounding.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
      {children}
    </h2>
  );
}

export default function HowIBuildPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Page heading */}
      <div className="mb-16 flex flex-col gap-3">
        <h1 className="font-mono text-3xl text-[var(--text)] sm:text-4xl">
          how i build with ai
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--text-dim)]">
          Not vibes-based prompting. A repeatable 6-stage system where Claude Code is my
          build partner — scoped by PRD, grounded by CLAUDE.md, and kept honest by
          human-in-the-loop gates between every phase.
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {/* Process Log */}
        <section className="flex flex-col gap-6">
          <SectionLabel>the 6-stage process</SectionLabel>
          <ProcessLog />
        </section>

        {/* Handwritten Notes */}
        <FadeInSection>
          <section className="flex flex-col gap-6">
            <SectionLabel>planning in the real world</SectionLabel>
            <HandwrittenNotesCallout />
          </section>
        </FadeInSection>

        {/* Tracer Bullets */}
        <FadeInSection>
          <section className="flex flex-col gap-6">
            <SectionLabel>tracer bullets vs horizontal coding</SectionLabel>
            <TracerBulletsDiagram />
          </section>
        </FadeInSection>

        {/* Smart Zone / Dumb Zone */}
        <FadeInSection>
          <section className="flex flex-col gap-6">
            <SectionLabel>smart zone / dumb zone</SectionLabel>
            <SmartZoneDiagram />
          </section>
        </FadeInSection>

        {/* HITL */}
        <FadeInSection>
          <section className="flex flex-col gap-6">
            <SectionLabel>hitl multi-phase execution</SectionLabel>
            <HitlDiagram />
          </section>
        </FadeInSection>

        {/* Ralph Callout */}
        <FadeInSection>
          <section className="flex flex-col gap-6">
            <SectionLabel>what happens without hitl</SectionLabel>
            <RalphCallout />
          </section>
        </FadeInSection>

        {/* Claude.md */}
        <FadeInSection>
          <section className="flex flex-col gap-6">
            <SectionLabel>grounding with claude.md</SectionLabel>
            <ClaudeMdCallout />
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
