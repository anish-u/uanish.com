/**
 * Interface for site config - title, description, url
 */
export type SiteConfig = {
  title: string;
  description: string;
  url: string;
};

/**
 * Interface for navigation links - name, href
 */
export type NavBarLink = {
  name: string;
  href: string;
};

/**
 * Interface for UI routes
 */
export type Routes = {
  home: string;
  projects: string;
  experience: string;
  blog: string;
};

/**
 * Interface for Social Links
 */
export type SocialLinks = {
  linkedIn: string;
  github: string;
  medium: string;
  email: string;
};
