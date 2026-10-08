import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "motion/react";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Basic Thinks — AI, Creativity & Technology",
    template: "%s | Basic Thinks",
  },
  description: siteConfig.description,
  keywords: [
    "AI video generation",
    "web development",
    "AI solutions",
    "AI automation",
    "creative technology",
    "AI content creation",
    "Basic Thinks",
  ],
  authors: [{ name: "Basic Thinks" }],
  creator: "Basic Thinks",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: "Basic Thinks",
    title: "Basic Thinks — AI, Creativity & Technology",
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basic Thinks — AI, Creativity & Technology",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-void text-ink">
        <MotionConfig reducedMotion="user">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          {children}
          <Footer />
          <CursorGlow />
        </MotionConfig>
      </body>
    </html>
  );
}
