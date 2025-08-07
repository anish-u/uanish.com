import Link from "next/link";

import ProjectCard from "@/components/ui/project-card";

import { recentProjects } from "@/utils/projects";

export default function ProjectSection() {
  return (
    <div className="flex w-full flex-col gap-5 pb-4">
      {recentProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <div className="flex w-full items-center justify-center pt-6">
        <Link
          href="/projects"
          className="bg-black-base/90 hover:bg-black-base dark:text-black-base dark:bg-white-base/90 dark:hover:bg-white-base w-full rounded-lg px-6 py-2 text-center text-sm font-bold text-white transition-all duration-250 ease-in-out md:w-[60%]"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}
