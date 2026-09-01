"use client";

import { motion } from "framer-motion";

import SkillIcon from "@/components/ui/skill-icon";

import { Skill, skills } from "@/utils/skills";

// Number of scrolling marquee rows to spread the skills across.
const ROW_COUNT = 3;

// Split the flat skills list into `ROW_COUNT` roughly even rows.
function splitIntoRows(items: Skill[], rows: number): Skill[][] {
  const result: Skill[][] = Array.from({ length: rows }, () => []);
  items.forEach((item, index) => {
    result[index % rows].push(item);
  });
  return result;
}

export default function SkillsSection() {
  const rows = splitIntoRows(skills, ROW_COUNT);

  return (
    <motion.div
      className="group relative flex w-full flex-col gap-6 overflow-hidden py-2"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Edge fades so the marquee dissolves into the background. */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-[var(--color-white-base)] to-transparent dark:from-[var(--color-black-base)]" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-[var(--color-white-base)] to-transparent dark:from-[var(--color-black-base)]" />

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex w-max gap-10 ${
            rowIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"
          }`}
        >
          {row.map((skill) => (
            <SkillIcon
              key={skill.altName}
              link={skill.link}
              altName={skill.altName}
            />
          ))}
          {/* Duplicate for a seamless loop; hidden from assistive tech. */}
          {row.map((skill) => (
            <div
              key={`${skill.altName}-clone`}
              aria-hidden="true"
              className="shrink-0"
            >
              <SkillIcon link={skill.link} altName={skill.altName} />
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
