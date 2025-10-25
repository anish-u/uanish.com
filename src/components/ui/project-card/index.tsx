"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

import Badge from "@/components/ui/badge";
import FancyLink from "@/components/ui/fancy-link";

import { cardAnimationVariants } from "@/utils/animation";

import { Project } from "@/interfaces/project";

export interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    amount: 0.25,
    margin: "0px 0px -10% 0px",
  });

  useLayoutEffect(() => {
    controls.set("hidden");
  }, [controls]);

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <motion.div
      className="group relative z-10"
      animate={controls}
      variants={cardAnimationVariants}
      custom={index}
      ref={ref}
    >
      <div className="border-black-base dark:border-white-base bg-white-base dark:bg-black-base relative z-20 flex h-full flex-col gap-4 rounded-md border px-7 py-4 transition-transform duration-200 ease-out group-hover:-translate-x-0.75 group-hover:-translate-y-0.75">
        <h3 className="font-serif text-lg/9 font-bold md:text-xl/10">
          {project.name}
        </h3>
        <p className="text-left font-serif text-sm/6 md:text-base/7">
          {project.description}
        </p>
        <div className="flex w-full flex-wrap gap-2">
          {project.technologies.map((technology: string, index) => (
            <Badge key={index} text={technology} />
          ))}
        </div>
        <div className="mt-auto flex w-full flex-wrap gap-4 py-2">
          <FancyLink link={project.github} text="View on GitHub &rarr;" />
          {project.liveDemo && (
            <FancyLink link={project.liveDemo} text="Live Demo &rarr;" />
          )}
        </div>
      </div>
      <div className="border-black-base/80 bg-black-base/50 dark:bg-grey-base/50 absolute top-0 left-0 z-10 h-full w-full rounded-md border transition-transform duration-200 ease-out group-hover:translate-x-0.75 group-hover:translate-y-0.75 dark:border-white" />
    </motion.div>
  );
}
