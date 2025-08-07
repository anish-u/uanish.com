import Link from "next/link";

import { socialLinks } from "@/constants/site-config";

export default function IntroSection() {
  return (
    <div className="flex w-full flex-col justify-center gap-6 pt-4 text-justify font-serif text-base/8">
      <p>
        I&apos;m a software engineer who enjoys building secure and scalable
        systems.
      </p>
      <p>
        Currently pursuing my Master&apos;s in Computer Science at{" "}
        <span className="font-extrabold">
          California State University, Fullerton
        </span>
        . I&apos;ve had the opportunity to work across the stack from building
        robust, scalable Java backend systems at{" "}
        <span className="font-extrabold">Amazon</span> to developing
        full-featured web interfaces using React, Next.js, TypeScript, and
        Tailwind at various startups and with the CSUF IT team.
      </p>
      <p>
        I have a deep interest in cloud architecture, especially within the{" "}
        <span className="font-extrabold">AWS</span> ecosystem, and I regularly
        write about it on{" "}
        <Link
          href={socialLinks.medium}
          className="shadow-link dark:shadow-link-white"
        >
          Medium
        </Link>
        , where I share hands-on guides, best practices, and lessons learned
        from real-world projects
      </p>
      <p>
        Outside of work and school, I love diving into side projects, ranging
        from blockchain apps to full-stack tools, which you can find on my{" "}
        <Link
          href={socialLinks.github}
          className="shadow-link dark:shadow-link-white"
        >
          GitHub
        </Link>
        . When I&apos;m not coding, you&apos;ll find me playing badminton,
        learning something new in tech, or writing blogs.
      </p>
    </div>
  );
}
