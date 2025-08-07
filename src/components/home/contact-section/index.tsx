import Image from "next/image";
import Link from "next/link";

import { BsMedium } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { socialLinks } from "@/constants/site-config";

export default function ContactSection() {
  return (
    <div className="flex w-full items-center justify-center gap-6 pb-4">
      <Image
        src="/images/profile.png"
        alt="Anish Ummenthala"
        width={70}
        height={70}
        aria-label="Anish Ummenthala"
        className="aspect-auto rounded-full object-cover grayscale-40 transition-all duration-150 ease-in-out hover:grayscale-0"
      />

      <Link href={socialLinks.linkedIn} aria-label="LinkedIn" target="_blank">
        <FaLinkedin
          aria-label="LinkedIn"
          className="text-black-light/80 dark:text-white-base/60 h-7 w-7 cursor-pointer rounded transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white"
        />
      </Link>

      <Link href={socialLinks.github} aria-label="GitHub" target="_blank">
        <FaGithub
          aria-label="GitHub"
          className="text-black-light/80 dark:text-white-base/60 h-7 w-7 cursor-pointer rounded transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white"
        />
      </Link>
      <Link href={socialLinks.email} aria-label="Email">
        <MdEmail
          aria-label="Email"
          className="text-black-light/80 dark:text-white-base/60 h-7 w-7 cursor-pointer rounded transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white"
        />
      </Link>
      <Link href={socialLinks.medium} aria-label="Medium" target="_blank">
        <BsMedium
          aria-label="Medium"
          className="text-black-light/80 dark:text-white-base/60 h-7 w-7 cursor-pointer rounded transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white"
        />
      </Link>
    </div>
  );
}
