"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { BsMedium } from "react-icons/bs";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { socialLinks } from "@/constants/site-config";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <motion.footer
      className="text-black-light dark:text-white-base border-black-light/20 dark:border-white-base/30 mt-16 flex flex-col items-center justify-center gap-3 border-t px-4 py-4 text-center text-xs md:gap-6"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="flex gap-2 md:gap-4">
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border-black-light/20 dark:border-white-base/20 hover:bg-black-base/80 dark:hover:bg-white-base/80 hover:text-white-base dark:hover:text-black-base flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
        >
          <FaGithub className="text-base" />
        </Link>
        <Link
          href={socialLinks.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="border-black-light/20 dark:border-white-base/20 hover:bg-black-base/80 dark:hover:bg-white-base/80 hover:text-white-base dark:hover:text-black-base flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
        >
          <FaLinkedin className="text-base" />
        </Link>
        <Link
          href={socialLinks.email}
          className="border-black-light/20 dark:border-white-base/20 hover:bg-black-base/80 dark:hover:bg-white-base/80 hover:text-white-base dark:hover:text-black-base flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
        >
          <FaEnvelope className="text-base" />
        </Link>

        <Link
          href={socialLinks.medium}
          className="border-black-light/20 dark:border-white-base/20 hover:bg-black-base/80 dark:hover:bg-white-base/80 hover:text-white-base dark:hover:text-black-base flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
        >
          <BsMedium className="text-base" />
        </Link>
      </div>
      <div className="flex flex-col gap-3 md:gap-4">
        <p className="text-xs tracking-wide">Made with patience and passion.</p>
        {year && (
          <p className="text-xs font-semibold">
            &copy; {year} Anish Ummenthala
          </p>
        )}
      </div>
    </motion.footer>
  );
}
