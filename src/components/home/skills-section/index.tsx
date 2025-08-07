import SkillIcon from "@/components/ui/skill-icon";

import { skillsRow1, skillsRow2 } from "@/utils/skills";

export default function SkillsSection() {
  return (
    <div className="group flex w-full flex-col gap-10 overflow-hidden bg-transparent">
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
    </div>
  );
}
