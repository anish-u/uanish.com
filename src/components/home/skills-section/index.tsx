"use client";

import { motion } from "framer-motion";

import SkillIcon from "@/components/ui/skill-icon";

import { skillsRow1, skillsRow2 } from "@/utils/skills";

export default function SkillsSection() {
  return (
    <motion.div
      className="group relative flex w-full flex-col gap-10 overflow-hidden pb-4"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-[var(--color-white-base)] to-transparent dark:from-[var(--color-black-base)]" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-[var(--color-white-base)] to-transparent dark:from-[var(--color-black-base)]" />

      <div className="animate-scroll-right flex w-max gap-10">
        {skillsRow1.map((skill, index) => (
          <SkillIcon key={index} link={skill.link} altName={skill.altName} />
        ))}
        {skillsRow1.map((skill, index) => (
          <SkillIcon
            aria-hidden="true"
            key={`${index}-clone`}
            link={skill.link}
            altName={skill.altName}
          />
        ))}
      </div>
      <div className="animate-scroll-left flex w-max gap-10">
        {skillsRow2.map((skill, index) => (
          <SkillIcon key={index} link={skill.link} altName={skill.altName} />
        ))}
        {skillsRow2.map((skill, index) => (
          <SkillIcon
            aria-hidden="true"
            key={`${index}-clone`}
            link={skill.link}
            altName={skill.altName}
          />
        ))}
      </div>
    </motion.div>
  );
}
