"use client";

import { motion } from "framer-motion";

import ThemeSwitch from "@/components/common/theme-switcher";
import NavBarItem from "@/components/ui/navbar-item";

import { navBarLinks } from "@/constants/site-config";

export default function NavBar() {
  return (
    <motion.nav
      className="bg-white-base dark:bg-black-base border-black-base/15 dark:border-white-base/15 sticky top-0 right-0 left-0 z-50 flex w-full items-center justify-between border-b px-4 py-4 md:px-16 md:py-4"
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <ul className="flex w-full items-center justify-between md:justify-center md:gap-7">
        {navBarLinks.map((link) => (
          <NavBarItem key={link.name} link={link} />
        ))}
        <li className="flex h-full w-fit items-center justify-center">
          <ThemeSwitch />
        </li>
      </ul>
    </motion.nav>
  );
}
