import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext", "vietnamese"],
});

const publicSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;
const metadataBase = publicSiteUrl
  ? new URL(publicSiteUrl.startsWith("http") ? publicSiteUrl : `https://${publicSiteUrl}`)
  : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: "Paul Nguyen | AI Solution Architect · Kiến trúc sư Giải pháp AI",
    template: "%s | Paul Nguyen",
  },
  description:
    "AI Solution Architect helping enterprises take AI from PoC to real-world adoption. Kiến trúc sư giải pháp AI đồng hành cùng doanh nghiệp từ PoC đến triển khai thực tế.",
  applicationName: "Paul Nguyen Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["vi_VN"],
    siteName: "Paul Nguyen",
    title: "Paul Nguyen | AI Solution Architect · Kiến trúc sư Giải pháp AI",
    description:
      "Enterprise AI architecture from PoC to adoption. Kiến trúc AI doanh nghiệp từ PoC đến triển khai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Nguyen | AI Solution Architect · Kiến trúc sư Giải pháp AI",
    description:
      "Enterprise AI architecture from PoC to adoption. Kiến trúc AI doanh nghiệp từ PoC đến triển khai.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
