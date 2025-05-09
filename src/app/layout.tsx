import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

import { cn } from "@/utils/cn";

import { siteConfig } from "@/constants/site-config";

import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/192x192.png",
    apple: "/favicon/apple-icon.png",
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Anish" />
      </head>
      <body
        className={cn(
          "text-white-base bg-black-base antialiased",
          merriweather.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
