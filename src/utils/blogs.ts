import { Blog } from "@/interfaces/blog";

export const blogs: Blog[] = [
  {
    title: "Redacting Sensitive Data On The Fly With S3 Object Lambda",
    description:
      "Learn how to automatically redact sensitive information such as PII from S3 objects using AWS S3 Object Lambda, Lambda functions, and Amazon Macie.",
    link: "https://medium.com/aws-in-plain-english/redacting-sensitive-data-on-the-fly-with-s3-object-lambda-76107d6210a7",
    coverImage: "/images/blogs/s3-object-lambda-redaction.png",
  },
  {
    title: "Building a Scalable Fan-Out Architecture on AWS with SNS and SQS",
    description:
      "Explore how to build a highly scalable event-driven architecture using Amazon SNS and SQS for parallel message processing, decoupling, and resilience.",
    link: "https://medium.com/aws-in-plain-english/building-a-scalable-fan-out-architecture-on-aws-with-sns-and-sqs-8e2550a462d3",
    coverImage: "/images/blogs/aws-fanout-architecture.png",
  },
  {
    title: "Stop Copy-Pasting Logging Code - Use a Lambda Layer Instead",
    description:
      "Simplify logging across AWS Lambda functions by abstracting common logic into a reusable Lambda Layer. Improve maintainability and reduce duplication.",
    link: "https://medium.com/aws-in-plain-english/stop-copy-pasting-logging-code-use-a-lambda-layer-instead-319b1049df87",
    coverImage: "/images/blogs/lambda-layer-logging.png",
  },
];
