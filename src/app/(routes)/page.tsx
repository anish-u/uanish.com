import Image from "next/image";
import Link from "next/link";

import { BsMedium } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Heading from "@/components/common/heading";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center gap-4 px-0 py-4 md:gap-10 md:px-4 md:py-10">
      <Heading type="primary">Hey, I&apos;m Anish Ummenthala.</Heading>
      <div className="flex w-full items-center justify-center gap-6">
        <Image
          src="/images/profile.png"
          alt="Anish Ummenthala"
          width={70}
          height={70}
          objectFit="cover"
          aria-label="Anish Ummenthala"
          className="aspect-auto rounded-full grayscale-40 transition-all duration-150 ease-in-out hover:grayscale-0"
        />
        <Link href="https://linkedin.com/in/uanish">
          <FaLinkedin
            aria-label="LinkedIn"
            className="text-black-light/80 dark:text-white-base/60 h-7 w-7 cursor-pointer rounded transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white"
          />
        </Link>
        <Link href="https://github.com/Anish-U" aria-label="GitHub">
          <FaGithub
            aria-label="GitHub"
            className="text-black-light/80 dark:text-white-base/60 h-7 w-7 cursor-pointer rounded transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white"
          />
        </Link>

        <Link href="https://medium.com/@ummenthala.anish" aria-label="Medium">
          <BsMedium
            aria-label="Medium"
            className="text-black-light/80 dark:text-white-base/60 h-7 w-7 cursor-pointer rounded transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white"
          />
        </Link>
      </div>
    </div>
  );
}
