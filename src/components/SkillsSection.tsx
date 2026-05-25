"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section className="border-t border-[var(--bg-border)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col gap-10"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]"
          >
            skills
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="flex flex-col gap-3 border-l-2 border-[var(--bg-border)] pl-4"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
                  {category.name}
                </span>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-[var(--bg-card)] px-2.5 py-1 font-mono text-sm text-[var(--text)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
