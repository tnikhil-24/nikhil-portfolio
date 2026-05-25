"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section className="border-t border-[var(--bg-border)] px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col gap-8"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]"
          >
            about
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="text-base leading-relaxed text-[var(--text)]"
          >
            I&apos;m pursuing my{" "}
            <span className="text-[var(--accent)]">MS in Computer Science at UNT</span>{" "}
            (GPA&nbsp;3.90), where I also TA AI/ML and data structures courses for{" "}
            <span className="text-[var(--accent)]">200+ students</span>. Previously, I interned at{" "}
            <span className="text-[var(--accent)]">Oriana Financial Technologies</span>, building
            real-time transaction pipelines with Spring Boot and Kafka, and shipping React dashboards
            used by 10k+ daily active users.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="text-base leading-relaxed text-[var(--text-dim)]"
          >
            I&apos;ve published{" "}
            <a
              href="https://www.npmjs.com/package/form-sanitize"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              form-sanitize
            </a>{" "}
            on npm, built{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=tnikhil-24.debtlens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              DebtLens
            </a>{" "}
            — a VS Code extension that visualizes tech debt as a file heatmap — and co-authored a
            research paper on multi-face detection via MTCNN achieving 94.2% precision on the FDDB
            benchmark.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
