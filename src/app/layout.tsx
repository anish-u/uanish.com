import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/utils/cn";

import { siteConfig } from "@/constants/site-config";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
        className={cn("bg-black text-white antialiased", fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
