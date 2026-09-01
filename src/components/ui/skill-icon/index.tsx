import Image from "next/image";

export interface SkillIconProps {
  link: string;
  altName: string;
}

export default function SkillIcon({ link, altName }: SkillIconProps) {
  return (
    <div
      data-cursor-interactive
      className="group/skill flex shrink-0 items-center gap-2.5"
    >
      <span className="dark:bg-white-base/90 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md dark:p-1">
        <Image
          width={22}
          height={22}
          src={link}
          alt={altName}
          className="h-full w-full object-contain grayscale transition-all duration-200 ease-in-out group-hover/skill:grayscale-0"
        />
      </span>
      <span className="text-sm font-semibold whitespace-nowrap md:text-base">
        {altName}
      </span>
    </div>
  );
}
