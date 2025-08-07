import Link from "next/link";

import { socialLinks } from "@/constants/site-config";

export default function IntroSection() {
  return (
    <div className="flex w-full flex-col justify-center gap-6 py-4 text-left font-serif text-base/8">
      <p>
        I&apos;m a software engineer who enjoys building secure and scalable
        systems.
      </p>
      <p>
        Currently pursuing my Master&apos;s in Computer Science at California
        State University, Fullerton. I&apos;ve had the opportunity to work
        across the stack from building robust, scalable Java backend systems at{" "}
        <strong>Amazon</strong> to developing full-featured web interfaces using
        React, Next.js, TypeScript, and Tailwind at various startups and with
        the CSUF IT team.
      </p>
      <p>
        I have a deep interest in cloud architecture, especially within the AWS
        ecosystem, and I regularly write about it on{" "}
        <Link href={socialLinks.medium} className="shadow-link">
          Medium
        </Link>
        , where I share hands-on guides, best practices, and lessons learned
        from real-world projects
      </p>
      <p>
        Outside of work and school, I love diving into side projects, ranging
        from blockchain apps to full-stack tools, which you can find on my{" "}
        <Link href={socialLinks.github} className="shadow-link">
          GitHub
        </Link>
        . When I&apos;m not coding, you&apos;ll find me playing badminton,
        learning something new in tech, or writing blogs.
      </p>
    </div>
  );
}
