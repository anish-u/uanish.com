import { Project } from "@/interfaces/project";

export const recentProjects: Project[] = [
  {
    name: "Cloud-Native Inventory Management",
    description:
      "Designed a scalable inventory management system deployed on AWS EKS using Spring Boot microservices. Automated infrastructure provisioning using Terraform and CI/CD via GitHub Actions.",
    technologies: ["Java", "Spring Boot", "Kubernetes", "AWS", "Terraform"],
    github: "https://github.com/anish-u/",
    liveDemo: "https://github.com/anish-u/",
  },
  {
    name: "DevOps Monitoring Dashboard",
    description:
      "Developed a full-stack dashboard for monitoring microservices with real-time metrics from Prometheus and Grafana, backend powered by Node.js and Express, frontend in React + Tailwind CSS.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Prometheus", "Grafana"],
    github: "https://github.com/anish-u/",
  },
  {
    name: "Infrastructure as Code for Enterprise App",
    description:
      "Provisioned multi-tier architecture with Terraform, deploying app containers using ECS Fargate. Implemented CI/CD with GitHub Actions and secured deployments with IAM and secrets manager.",
    technologies: ["Terraform", "AWS", "GitHub Actions", "ECS Fargate", "IAM"],
    github: "https://github.com/anish-u/",
  },
];
