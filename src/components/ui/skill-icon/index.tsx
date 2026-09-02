import { Skill } from "@/utils/skills";

export type SkillIconProps = Skill;

export default function SkillIcon({ name, Icon }: SkillIconProps) {
  return (
    <div className="group/skill flex shrink-0 items-center gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        <Icon size={30} alt={name} />
      </span>
      <span className="text-sm font-semibold whitespace-nowrap md:text-base">
        {name}
      </span>
    </div>
  );
}
