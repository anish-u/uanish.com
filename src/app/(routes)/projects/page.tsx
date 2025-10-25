import { Metadata } from "next";

import Heading from "@/components/common/heading";
import ProjectCard from "@/components/ui/project-card";

import { projects } from "@/utils/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="flex h-full flex-col items-center gap-6 px-0 py-4 md:px-4 md:py-10">
      <Heading type="secondary">Projects</Heading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            project={project}
            key={`${project.name}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
