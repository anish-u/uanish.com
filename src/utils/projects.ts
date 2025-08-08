import { Project } from "@/interfaces/project";

export const projects: Project[] = [
  {
    name: "Luna Fund - Blockchain Crowdfunding Platform",
    description:
      "A decentralized crowdfunding platform that allows users to create, fund, and track campaigns transparently using Ethereum smart contracts. Built with Next.js and Tailwind CSS, leveraging Hardhat for testing and deployment.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Solidity",
      "Ethereum",
      "Hardhat",
    ],
    github: "https://github.com/anish-u/luna-fund",
  },
  {
    name: "AWS Fan-Out Notification System",
    description:
      "An event-driven fan-out architecture using AWS CDK (TypeScript), comprising an SNS topic broadcasting to multiple SQS queues processed by Lambda functions. Includes filter-based routing and CI/CD-friendly deployment setup.",
    technologies: ["TypeScript", "AWS CDK", "SNS", "SQS", "Lambda"],
    github: "https://github.com/anish-u/aws-fanout-notification-system",
    liveDemo: "",
  },
  {
    name: "PII Redaction with S3 Object Lambda",
    description:
      "Implements dynamic redaction of PII (like email addresses) during S3 object retrieval using S3 Object Lambda and AWS Lambda, without modifying source objects. Deployed via AWS CDK with Python handler scripts.",
    technologies: ["TypeScript", "AWS CDK", "Python", "S3 Object Lambda"],
    github: "https://github.com/anish-u/pii-redaction-with-object-lambda",
    liveDemo: "",
  },
  {
    name: "Flight Delay Analysis with Spark",
    description:
      "A data pipeline and analytical dashboard for flight delay prediction using PySpark. Processed and analyzed large flight datasets to identify delay patterns across airports and airlines using Jupyter + Spark SQL.",
    technologies: ["PySpark", "Python", "Jupyter Notebook", "Spark SQL"],
    github: "https://github.com/anish-u/flight-delay-analysis",
  },
  {
    name: "NewsGrid - Full-Stack News Portal",
    description:
      "A role-based news portal built with PHP and MySQL, supporting article creation, bookmarking, admin panel, and PDF export using mPDF. Features secure login for admins, authors, and general users.",
    technologies: ["PHP", "MySQL", "mPDF", "HTML", "JavaScript"],
    github: "https://github.com/anish-u/NewsGrid",
  },
  {
    name: "BlockVote - Blockchain Voting System",
    description:
      "A blockchain-powered voting system built with Solidity and Node.js that ensures secure, transparent, and tamper-proof elections. Simulates voter registration, candidate listing, and secure vote casting via smart contracts.",
    technologies: ["Solidity", "Node.js", "JavaScript", "Ethereum"],
    github: "https://github.com/anish-u/BlockVote",
  },
];

export const recentProjects: Project[] = [
  {
    name: "Luna Fund - Blockchain Crowdfunding Platform",
    description:
      "A decentralized crowdfunding platform that allows users to create, fund, and track campaigns transparently using Ethereum smart contracts. Built with Next.js and Tailwind CSS, leveraging Hardhat for testing and deployment.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Solidity",
      "Ethereum",
      "Hardhat",
    ],
    github: "https://github.com/anish-u/luna-fund",
  },
  {
    name: "AWS Fan-Out Notification System",
    description:
      "An event-driven fan-out architecture using AWS CDK (TypeScript), comprising an SNS topic broadcasting to multiple SQS queues processed by Lambda functions. Includes filter-based routing and CI/CD-friendly deployment setup.",
    technologies: ["TypeScript", "AWS CDK", "SNS", "SQS", "Lambda"],
    github: "https://github.com/anish-u/aws-fanout-notification-system",
    liveDemo: "",
  },
  {
    name: "Flight Delay Analysis with Spark",
    description:
      "A data pipeline and analytical dashboard for flight delay prediction using PySpark. Processed and analyzed large flight datasets to identify delay patterns across airports and airlines using Jupyter + Spark SQL.",
    technologies: ["PySpark", "Python", "Jupyter Notebook", "Spark SQL"],
    github: "https://github.com/anish-u/flight-delay-analysis",
  },
];
