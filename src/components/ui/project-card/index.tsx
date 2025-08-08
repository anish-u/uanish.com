import Link from "next/link";

import Badge from "@/components/ui/badge";

import { Project } from "@/interfaces/project";

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative z-10">
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
          <Link
            href={project.github}
            className="hover:shadow-link dark:hover:shadow-link-white transition-all duration-200 ease-in-out"
          >
            <span className="text-xs font-bold md:text-sm">
              View on GitHub &rarr;
            </span>
          </Link>
          {project.liveDemo && (
            <Link
              href={project.liveDemo}
              className="hover:shadow-link dark:hover:shadow-link-white transition-all duration-200 ease-in-out"
            >
              <span className="text-xs font-bold md:text-sm">
                Live Demo &rarr;
              </span>
            </Link>
          )}
        </div>
      </div>
      <div className="border-black-base/80 bg-black-base/50 dark:bg-grey-base/50 absolute top-0 left-0 z-10 h-full w-full rounded-md border transition-transform duration-200 ease-out group-hover:translate-x-0.75 group-hover:translate-y-0.75 dark:border-white" />
    </div>
  );
}
