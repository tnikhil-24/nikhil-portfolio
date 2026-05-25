"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    label: "IDEA",
    description: "Raw problem → scoped spec with Claude",
  },
  {
    label: "PRD + KANBAN",
    description: "Structured tickets → GitHub Issues via /to-issues",
  },
  {
    label: "AGENT LOOP",
    description: "Claude Code ships each issue, end-to-end",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function PipelineTeaser() {
  return (
    <section className="border-t border-[var(--bg-border)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col items-center gap-10"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]"
          >
            how i build
          </motion.h2>

          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-stretch sm:justify-center sm:gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center sm:flex-row sm:items-center">
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className="flex w-full max-w-[220px] flex-col gap-2 rounded border border-[var(--bg-border)] bg-[var(--bg-card)] p-5 text-center"
                >
                  <span className="font-mono text-xs text-[var(--accent)]">[{step.label}]</span>
                  <p className="text-base leading-snug text-[var(--text-dim)]">{step.description}</p>
                </motion.div>
                {i < steps.length - 1 && (
                  <>
                    <span className="hidden px-4 font-mono text-lg text-[var(--text-dim)] sm:block">→</span>
                    <span className="block py-2 font-mono text-lg text-[var(--text-dim)] sm:hidden">↓</span>
                  </>
                )}
              </div>
            ))}
          </div>

          <motion.div variants={fadeUp} transition={{ duration: 0.45 }}>
            <Link
              href="/how-i-build"
              className="font-mono text-sm text-[var(--accent)] hover:underline"
            >
              See the full system →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
