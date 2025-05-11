import { NavBarLink, SiteConfig } from "@/interfaces/site-config";

/**
 * Site config for meta tags
 */
export const siteConfig: SiteConfig = {
  title: "Anish Ummenthala",
  description: "Anish's Portfolio",
  url: "https://uanish.com",
};

/**
 * Navbar links
 */
export const navBarLinks: NavBarLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];
