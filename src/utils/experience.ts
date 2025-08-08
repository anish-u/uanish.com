import { Experience } from "@/interfaces/experience";

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Amazon Web Services",
    start: "Jan 2023",
    end: "Present",
    description: [
      "Built a full-stack application using <strong>React</strong>, Next.js, TypeScript, and Tailwind CSS.",
      "Working on distributed systems to enhance cloud infrastructure resiliency. Built internal tooling using TypeScript and Terraform.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Backend Developer Intern",
    company: "FinTech Co.",
    start: "May 2022",
    end: "Aug 2022",
    description: [
      "Built a full-stack application using React, Next.js, TypeScript, and Tailwind CSS.",
      "Developed REST APIs with Java and Spring Boot, optimized database queries for PostgreSQL, and integrated CI/CD pipelines using GitHub Actions.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "GitHub Actions"],
  },
  {
    role: "Open Source Contributor",
    company: "Apache Kafka",
    start: "2021",
    end: "2022",
    description: [
      "Built a full-stack application using React, Next.js, TypeScript, and Tailwind CSS.",
      "Contributed to Kafka Streams by improving documentation, adding tests, and patching issues related to stream repartitioning.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];
