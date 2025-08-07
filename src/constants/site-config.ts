import {
  NavBarLink,
  Routes,
  SiteConfig,
  SocialLinks,
} from "@/interfaces/site-config";

/**
 * Site config for meta tags
 */
export const siteConfig: SiteConfig = {
  title: "Anish Ummenthala",
  description: "Anish's Portfolio",
  url: "https://uanish.com",
};

/**
 * UI Routes
 */
export const routes: Routes = {
  home: "/",
  projects: "/projects",
  experience: "/experience",
  blog: "/blog",
};

/**
 * Navbar links
 */
export const navBarLinks: NavBarLink[] = [
  {
    name: "Home",
    href: routes.home,
  },
  {
    name: "Projects",
    href: routes.projects,
  },
  {
    name: "Experience",
    href: routes.experience,
  },
  {
    name: "Blog",
    href: routes.blog,
  },
];

/**
 * Social links
 */
export const socialLinks: SocialLinks = {
  linkedIn: "https://linkedin.com/in/uanish",
  github: "https://github.com/Anish-U",
  email: "mailto:ummenthala.anish@gmail",
  medium: "https://medium.com/@ummenthala.anish",
};
