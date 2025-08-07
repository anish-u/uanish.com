import Link from "next/link";

import Badge from "@/components/ui/badge";

import { Project } from "@/interfaces/project";

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative z-10">
      <div className="border-black-base dark:border-white-base bg-white-base dark:bg-black-base relative z-20 flex flex-col gap-4 rounded-md border px-6 py-4 transition-transform duration-200 ease-out group-hover:-translate-x-0.75 group-hover:-translate-y-0.75">
        <h3 className="font-serif text-xl/10 font-bold">{project.name}</h3>
        <p className="font-serif text-base/7">{project.description}</p>
        <div className="flex w-full flex-wrap gap-2">
          {project.technologies.map((technology: string, index) => (
            <Badge key={index} text={technology} />
          ))}
        </div>
        <div className="flex w-full flex-wrap gap-4 py-2">
          <Link
            href={project.github}
            className="hover:shadow-link dark:hover:shadow-link-white transition-all duration-200 ease-in-out"
          >
            <span className="text-sm font-bold">View on GitHub &rarr;</span>
          </Link>
          {project.liveDemo && (
            <Link
              href={project.liveDemo}
              className="hover:shadow-link dark:hover:shadow-link-white transition-all duration-200 ease-in-out"
            >
              <span className="text-sm font-bold">Live Demo &rarr;</span>
            </Link>
          )}
        </div>
      </div>
      <div className="border-black-base/80 bg-black-base/50 dark:bg-grey-base/50 absolute top-0 left-0 z-10 h-full w-full rounded-md border transition-transform duration-200 ease-out group-hover:translate-x-0.75 group-hover:translate-y-0.75 dark:border-white" />
    </div>
  );
}
