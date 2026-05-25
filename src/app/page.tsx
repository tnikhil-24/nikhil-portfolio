"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TerminalAnimation from "@/components/TerminalAnimation";
import { Button } from "@/components/ui/button";
import PipelineTeaser from "@/components/PipelineTeaser";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import { RESUME_URL, CONTACT_EMAIL } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-65px)] items-center justify-center px-6 py-16">
        <div className="flex w-full max-w-2xl flex-col items-center gap-10 text-center">

          {/* Terminal — focal element */}
          <motion.div
            className="flex w-full justify-center"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <TerminalAnimation />
          </motion.div>

          {/* Name + tagline */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
            }}
          >
            <motion.h1
              className="font-mono text-5xl font-bold tracking-tight text-[var(--text)] sm:text-6xl"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              NIKHIL T
            </motion.h1>

            <motion.p
              className="max-w-xl text-base leading-relaxed text-[var(--text-dim)] sm:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Full-Stack &amp; AI Engineer. I design AI systems from the ground
              up — multi-agent pipelines, RAG architectures, real-time infra —
              and ship them faster because AI is my build partner, not just my
              toolbox.
            </motion.p>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-mono text-sm text-[var(--accent)] hover:underline"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {CONTACT_EMAIL}
            </motion.a>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.85 }}
          >
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>

            <Button asChild variant="accent" size="lg">
              <Link href="/how-i-build">How I Build with AI</Link>
            </Button>

            <Button asChild size="lg">
              <a href={RESUME_URL} download>
                Download Resume
              </a>
            </Button>
          </motion.div>

        </div>
      </section>

      <PipelineTeaser />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <Footer />
    </>
  );
}
