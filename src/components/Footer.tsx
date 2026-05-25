"use client";

import { motion } from "framer-motion";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, CONTACT_EMAIL } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const achievements = [
  "Winner — CFG Hackathon Competition",
  "Runner-Up — Hackathon",
];

const certifications = [
  "NPTEL Big Data Silver Medal — IIT Kanpur",
  "Google IT Automation Professional Certificate",
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bg-border)] px-6 py-16">
      <motion.div
        className="mx-auto max-w-4xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="grid gap-12 sm:grid-cols-2"
        >
          {/* Achievements + Certifications */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                achievements
              </h3>
              <ul className="flex flex-col gap-2">
                {achievements.map((a) => (
                  <li key={a} className="text-base text-[var(--text)]">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                certifications
              </h3>
              <ul className="flex flex-col gap-2">
                {certifications.map((c) => (
                  <li key={c} className="text-base text-[var(--text-dim)]">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect + Resume */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-dim)]">
                connect
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit font-mono text-base text-[var(--text-dim)] transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  github →
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit font-mono text-base text-[var(--text-dim)] transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  linkedin →
                </a>
              </div>
            </div>

            <a
              href={RESUME_URL}
              download
              className="inline-block w-fit rounded border border-[var(--accent)] px-5 py-2.5 font-mono text-base text-[var(--accent)] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            >
              download resume
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="mt-12 flex flex-col items-center gap-3 border-t border-[var(--bg-border)] pt-8"
        >
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-base text-[var(--accent)] transition-opacity duration-200 hover:opacity-80"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="font-mono text-xs text-[var(--text-dim)]">
            © {new Date().getFullYear()} Nikhil T — Built with Next.js + AI
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
