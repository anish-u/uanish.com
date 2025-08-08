import { Experience } from "@/interfaces/experience";

import Badge from "../badge";

export interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative z-10 font-serif">
      <div className="border-black-base dark:border-white-base bg-white-base dark:bg-black-base relative z-20 flex h-full flex-col gap-6 rounded-md border px-7 py-4 transition-transform duration-200 ease-out group-hover:-translate-x-0.75 group-hover:-translate-y-0.75">
        <div className="text-black-base dark:text-white-base text-base font-semibold md:text-xl">
          {experience.role}{" "}
          <span className="dark:text-white-base/50 text-black-base/70 font-normal">
            at {experience.company}
          </span>
        </div>
        <div className="text-black-base/70 dark:text-white-base/60 text-sm font-semibold md:text-base">
          {experience.start} - {experience.end}
        </div>
        <ul className="list-outside list-disc space-y-1 pl-5 text-xs leading-relaxed text-black/80 md:text-sm dark:text-white/80">
          {experience.description.map((desc, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
        </ul>
        <div className="flex w-full flex-wrap gap-2 px-2">
          {experience.technologies.map((technology: string, index) => (
            <Badge key={index} text={technology} />
          ))}
        </div>
      </div>
      <div className="border-black-base/80 bg-black-base/50 dark:bg-grey-base/50 absolute top-0 left-0 z-10 h-full w-full rounded-md border transition-transform duration-200 ease-out group-hover:translate-x-0.75 group-hover:translate-y-0.75 dark:border-white" />
    </div>
  );
}
