import type { Metadata } from "next";
import { Archivo, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageFrame } from "@/components/layout/PageFrame";
import { StickyCta } from "@/components/layout/StickyCta";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SitewideJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { ogTags } from "@/lib/og";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — The best website your business will ever have`,
    template: `%s | ${site.name}`,
  },
  description:
    "Websites that look genuinely great and actually work — fast, found on Google and by AI search, and built to bring in customers. Based in Hamilton, Ontario — working worldwide.",
  keywords: [
    "web design Hamilton",
    "Hamilton web design",
    "web design company in Hamilton",
    "Hamilton web designer",
    "SEO Hamilton",
    "Hamilton SEO company",
    "AI automation",
    "Studio Nallan Web Design",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: ogTags({
    title: `${site.name} — The best website your business will ever have`,
    description:
      "Websites that look genuinely great and actually work. Based in Hamilton, Ontario — working worldwide.",
    url: site.domain,
  }),
  twitter: {
    card: "summary_large_image",
    title: "Hamilton Web Design, SEO, AI | Studio Nallan Web Design",
    description:
      "Custom web design, local SEO, and AI automation built in Hamilton, ON. High-converting websites for local businesses and global brands.",
    images: [site.ogImage],
  },
};

export const ROBOTS_CONTENT =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        {/* Exact robots directive (max-* only valid here, not via metadata API) */}
        <meta name="robots" content={ROBOTS_CONTENT} />
        <SitewideJsonLd />
      </head>
      <body
        className={`${archivo.variable} ${instrumentSerif.variable} ${geistMono.variable} grain antialiased`}
      >
        <SmoothScroll />
        <PageFrame />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
