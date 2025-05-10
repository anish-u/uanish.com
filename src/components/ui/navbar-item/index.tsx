import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavBarLink } from "@/interfaces/site-config";

export interface NavBarItemProps {
  link: NavBarLink;
}

export default function NavBarItem({ link }: NavBarItemProps) {
  const pathname = usePathname();

  return (
    <li className="relative cursor-pointer font-serif text-sm font-bold md:text-base">
      <Link
        href={link.href}
        className={`before:bg-black-base dark:before:bg-white-base pb-1 transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:transition-all before:duration-500 hover:before:w-full ${pathname === link.href ? "before:w-full" : "before:w-0"}`}
      >
        {link.name}
      </Link>
    </li>
  );
}
