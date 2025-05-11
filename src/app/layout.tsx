import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

import NavBar from "@/components/common/navbar";

import { Providers } from "@/contexts/providers";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Anish" />
      </head>
      <body
        className={cn(
          "dark:text-white-base dark:bg-black-base text-black-base bg-white-base h-screen w-screen antialiased",
          merriweather.variable
        )}
      >
        <Providers>
          <div className="mx-auto flex h-full max-w-xl flex-col px-6 py-10 font-normal md:max-w-2xl lg:max-w-3xl">
            <NavBar />
            <div className="flex-grow">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
