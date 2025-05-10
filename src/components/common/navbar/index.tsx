"use client";

import ThemeSwitch from "@/components/common/theme-switcher";
import NavBarItem from "@/components/ui/navbar-item";

import { navBarLinks } from "@/constants/site-config";

export default function NavBar() {
  return (
    <nav className="p-2">
      <ul className="flex w-full items-center justify-between md:justify-center md:gap-7">
        {navBarLinks.map((link) => (
          <NavBarItem key={link.name} link={link} />
        ))}
        <li className="flex h-full w-fit items-center justify-center">
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
}
