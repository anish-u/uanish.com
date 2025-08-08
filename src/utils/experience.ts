import { Experience } from "@/interfaces/experience";

export const experience: Experience[] = [
  {
    role: "IT Student Developer",
    company: "Information Security Office, CSUF",
    start: "May 2024",
    end: "Present",
    description: [
      "Automated monthly <strong>AWS Security Hub</strong> reporting using <strong>EventBridge</strong> and <strong>Lambda</strong>, saving 4–5 hours of manual work and boosting critical issue visibility by 70%.",
      "Redesigned and developed the <strong>CSUF ISO website</strong> in <strong>Omni CMS V5</strong>, modernizing its architecture and improving usability and maintainability.",
      "Analyzed <strong>CISA vulnerability reports</strong> for 20+ applications, identifying 50+ critical issues and driving a 40% reduction in vulnerabilities within 3 months.",
      "Built <strong>Python automation scripts</strong> to audit DUO authentication on 500+ servers, improving access control audit readiness.",
    ],
    technologies: ["Python", "TypeScript", "AWS", "Omni CMS"],
  },
  {
    role: "Full Stack Engineer",
    company: "BoltAbacus",
    start: "Jul 2023",
    end: "Nov 2023",
    description: [
      "Built an <strong>e-learning platform</strong> for 700+ global users using <strong>ReactJS</strong>, <strong>Tailwind</strong>, <strong>Django</strong>, and <strong>PostgreSQL</strong>.",
      "Improved system response time by 50% by offloading email processing to <strong>AWS SNS</strong>, <strong>SQS</strong>, and <strong>Lambda</strong>.",
      "Implemented <strong>REST APIs</strong> with <strong>JWT authentication</strong> and role-based access, ensuring privacy and secure sessions.",
      "Deployed frontend using <strong>AWS Amplify</strong> with multi-env CI/CD pipelines for faster QA cycles.",
    ],
    technologies: ["ReactJS", "Tailwind", "Django", "PostgreSQL", "AWS"],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Amazon",
    start: "Jan 2023",
    end: "Jun 2023",
    description: [
      "Developed a <strong>cancellation reason tracking</strong> feature using <strong>Java Guice</strong>, storing data in <strong>DynamoDB</strong> & <strong>Elasticsearch</strong>, publishing metrics to <strong>CloudWatch</strong>.",
      "Built CI/CD pipelines using <strong>TypeScript AWS CDK</strong> with reusable modules for backend services.",
      "Developed accessible frontend components using <strong>ReactJS</strong>, <strong>Redux</strong>, and <strong>RxJS</strong> for ARIA-compliant interfaces.",
      "Provisioned cloud infrastructure with <strong>Dagger</strong>, <strong>Lambda</strong>, <strong>SNS</strong>, <strong>SQS</strong>, <strong>Step Functions</strong>, <strong>API Gateway</strong>, and <strong>DynamoDB</strong>.",
      "Improved service quality through <strong>Jest</strong> and <strong>JUnit</strong> test coverage and gained deep debugging skills via on-call shadowing.",
    ],
    technologies: [
      "Java",
      "Google Guice",
      "Dagger",
      "ReactJS",
      "TypeScript",
      "AWS",
      "RxJS",
      "Redux",
    ],
  },
];
