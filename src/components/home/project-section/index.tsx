"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import ProjectCard from "@/components/ui/project-card";

import { recentProjects } from "@/utils/projects";

export default function ProjectSection() {
  return (
    <div className="flex w-full flex-col gap-5 pb-4">
      {recentProjects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
      <motion.div
        className="flex w-full items-center justify-center pt-6"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <Link
          href="/projects"
          className="bg-black-base/90 hover:bg-black-base dark:text-black-base dark:bg-white-base/90 dark:hover:bg-white-base w-full rounded-lg px-6 py-2 text-center text-xs font-bold text-white transition-all duration-250 ease-in-out md:w-[60%] md:text-sm"
        >
          View All Projects
        </Link>
      </motion.div>
    </div>
  );
}
