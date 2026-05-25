"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workflowStages } from "@/lib/workflow";
import { toggleActive } from "@/lib/processLog";

export default function ProcessLog() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <motion.div
      className="flex flex-col divide-y divide-[var(--bg-border)]"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
    >
      {workflowStages.map((stage) => {
        const isActive = activeId === stage.id;

        return (
          <motion.div
            key={stage.id}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button
              onClick={() => setActiveId((prev) => toggleActive(prev, stage.id))}
              className="w-full py-4 text-left"
              aria-expanded={isActive}
            >
              <div className="flex min-w-0 items-baseline gap-2 font-mono text-sm">
                <span
                  className={`shrink-0 ${isActive ? "animate-pulse-green text-[var(--accent)]" : "text-[var(--text-dim)]"}`}
                >
                  [{String(stage.id).padStart(2, "0")}]
                </span>
                <span
                  className={`shrink-0 ${isActive ? "animate-pulse-green text-[var(--accent)]" : "text-[var(--text)]"}`}
                >
                  {stage.label}
                </span>
                <span
                  aria-hidden
                  className={`min-w-0 flex-1 overflow-hidden ${isActive ? "animate-pulse-green text-[var(--accent)]" : "text-[var(--bg-border)]"}`}
                >
                  {"·".repeat(120)}
                </span>
                <span
                  className={`shrink-0 whitespace-nowrap ${isActive ? "text-[var(--accent)]" : "text-[var(--text-dim)]"}`}
                >
                  ✓ {stage.status}
                </span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mb-6 ml-1 grid grid-cols-1 gap-6 border-l-2 border-[var(--accent)] pl-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                        Human Role
                      </span>
                      <p className="text-sm leading-relaxed text-[var(--text)]">
                        {stage.humanRole}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                        AI Role
                      </span>
                      <p className="text-sm leading-relaxed text-[var(--text-dim)]">
                        {stage.aiRole}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
