"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "secondary";
}

function getLiveUrlLabel(url: string): string {
  if (url.includes("marketplace.visualstudio.com")) return "Marketplace";
  if (url.includes("npmjs.com")) return "npm";
  return "Live Demo";
}

export default function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isFeatured = variant === "featured";

  return (
    <div className="group relative border-l-2 border-[var(--bg-border)] bg-[var(--bg)] px-5 py-5 transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[var(--bg-card)] min-w-0">
      {/* Header */}
      <h2 className="font-mono text-lg font-normal tracking-tight text-[var(--text)] break-words">
        ▸ {project.title}
      </h2>

      {/* Stack */}
      <p className="mt-1.5 font-mono text-xs text-[#4a5568] break-words">
        {"// "}{project.stack.map((s) => s.toLowerCase()).join(", ")}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-[var(--text-dim)]">
        {project.description}
      </p>

      {/* Metrics — featured only */}
      {isFeatured && project.metrics && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {Object.entries(project.metrics).map(([key, value]) => (
            <span key={key} className="font-mono text-xs">
              <span className="text-[var(--text)]">{key}:</span>{" "}
              <span className="text-[var(--text-dim)]">{value}</span>
            </span>
          ))}
        </div>
      )}

      {/* Build notes — featured only */}
      {isFeatured && (
        <div className="mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-mono text-xs text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
            aria-expanded={expanded}
          >
            {expanded ? "▾" : "▸"} build notes
          </button>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="build-notes"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 border-l border-[var(--bg-border)] pl-3 font-mono text-xs leading-relaxed text-[var(--text-dim)]">
                  {project.buildNotes}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Links */}
      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-[var(--bg-border)] px-3 py-1.5 font-mono text-xs text-[var(--text-dim)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-[var(--accent)] px-3 py-1.5 font-mono text-xs text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--bg)]"
          >
            {getLiveUrlLabel(project.liveUrl)}
          </a>
        )}
      </div>
    </div>
  );
}
