import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

import Footer from "@/components/common/footer";
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
    template: `%s | ${siteConfig.title}`,
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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Anish" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body
        className={cn(
          "dark:text-white-base dark:bg-black-base text-black-base bg-white-base min-h-screen w-screen overflow-x-hidden antialiased",
          merriweather.variable
        )}
      >
        <Providers>
          <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 pt-10 pb-6 font-normal md:max-w-2xl lg:max-w-3xl">
            <NavBar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
