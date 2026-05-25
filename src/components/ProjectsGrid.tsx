"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

interface ProjectsGridProps {
  projects: Project[];
  variant: "featured" | "secondary";
  columns: "two" | "three";
}

export default function ProjectsGrid({ projects, variant, columns }: ProjectsGridProps) {
  const gridClass =
    columns === "two"
      ? "grid grid-cols-1 gap-5 md:grid-cols-2"
      : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <motion.div
      className={gridClass}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <ProjectCard project={project} variant={variant} />
        </motion.div>
      ))}
    </motion.div>
  );
}
