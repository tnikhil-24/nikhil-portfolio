"use client";

import { motion } from "framer-motion";
import { timeline, type TimelineEntry } from "@/lib/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const typeLabel: Record<TimelineEntry["type"], string> = {
  work: "WORK",
  education: "EDU",
  research: "RESEARCH",
};

const typeColor: Record<TimelineEntry["type"], string> = {
  work: "text-[var(--accent)]",
  education: "text-[#60a5fa]",
  research: "text-[#f472b6]",
};

const dotBorder: Record<TimelineEntry["type"], string> = {
  work: "border-[var(--accent)]",
  education: "border-[#60a5fa]",
  research: "border-[#f472b6]",
};

export default function TimelineSection() {
  return (
    <section className="border-t border-[var(--bg-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col gap-10"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]"
          >
            experience &amp; education
          </motion.h2>

          <div className="relative flex flex-col gap-0">
            {/* Vertical connecting line */}
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-[var(--bg-border)]" />

            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Dot */}
                <div className="relative mt-1.5 flex-shrink-0">
                  <div
                    className={`h-[15px] w-[15px] rounded-full border-2 bg-[var(--bg)] ${dotBorder[entry.type]}`}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`font-mono text-xs ${typeColor[entry.type]}`}>
                      [{typeLabel[entry.type]}]
                    </span>
                    <span className="font-mono text-xs text-[var(--text-dim)]">
                      {entry.dateRange}
                    </span>
                  </div>

                  <div>
                    {entry.url && entry.url !== "PLACEHOLDER_RESEARCH_PAPER_URL" ? (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[var(--text)] hover:text-[var(--accent)]"
                      >
                        {entry.role}
                      </a>
                    ) : (
                      <span className="font-semibold text-[var(--text)]">{entry.role}</span>
                    )}
                    <p className="text-base text-[var(--text-dim)]">{entry.institution}</p>
                  </div>

                  <ul className="flex flex-col gap-1">
                    {entry.highlights.map((h, j) => (
                      <li key={j} className="text-base text-[var(--text-dim)]">
                        — {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
