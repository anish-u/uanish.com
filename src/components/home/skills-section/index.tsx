"use client";

import { motion } from "framer-motion";

import SkillIcon from "@/components/ui/skill-icon";

import { skillGroups } from "@/utils/skills";

export default function SkillsSection() {
  return (
    <motion.div
      className="relative flex w-full flex-col gap-8 overflow-hidden py-2"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-[var(--color-white-base)] to-transparent dark:from-[var(--color-black-base)]" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-[var(--color-white-base)] to-transparent dark:from-[var(--color-black-base)]" />

      {skillGroups.map((group, groupIndex) => (
        <div
          key={group.category}
          className={`flex w-max gap-18 ${
            groupIndex % 2 === 0
              ? "animate-scroll-left"
              : "animate-scroll-right"
          }`}
        >
          {group.skills.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
          {group.skills.map((skill) => (
            <div
              key={`${skill.name}-clone`}
              aria-hidden="true"
              className="shrink-0"
            >
              <SkillIcon {...skill} />
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
