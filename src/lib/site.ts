/**
 * Single source of truth for editable site facts.
 * Update these values and every page + schema block follows.
 */
export const site = {
  name: "Studio Nallan Web Design",
  domain: "https://www.studionallan.com", // canonical — apex redirects here
  city: "Hamilton",
  region: "Ontario",
  regionCode: "ON",
  country: "CA",

  /* Contact — confirmed */
  phone: "+14164091724",
  phoneDisplay: "+1 (416) 409-1724",
  email: "info@studionallan.com",
  /** Enquiry form destination (via FormSubmit AJAX) */
  enquiryTo: "nallan.flow@gmail.com",

  /* Address — confirmed */
  streetAddress: "413 Barton St E",
  postalCode: "L8L 2Y5",
  mapsUrl: "", // TODO: verified Google Business Profile link (enables Maps sameAs)
  logo: "/assets/logo.png", // TODO: final logo file
  ogImage: "/assets/og-image.jpg", // TODO: final share image

  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },

  geo: { latitude: 43.2557, longitude: -79.8711 },

  areas: ["Hamilton", "Burlington", "Oakville", "Dundas", "Ancaster", "Stoney Creek"],
  areasServedPhrase: "Based in Hamilton, Ontario — working worldwide",
  areasWide: ["Hamilton", "Burlington", "Oakville", "Golden Horseshoe"],

  social: [
    // LinkedIn per client spec; add Instagram etc. only with confirmed URLs.
    { label: "LinkedIn", href: "https://www.linkedin.com/company/studionallan" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

/** Footer service menu: the three GBP categories. URLs keep their SEO structure. */
export const serviceLinks = [
  { label: "Website Designer", href: "/locations/hamilton-web-design/" },
  { label: "Internet Marketing Service", href: "/services/internet-marketing/" },
  { label: "Marketing Consultant", href: "/services/marketing-consultant/" },
] as const;

import { AREAS, areaHref } from "@/lib/areas";
import { ARTICLES, articleHref } from "@/lib/articles";
import { SERVICES } from "@/lib/services";

export const allRoutes = [
  { href: "/", priority: 1, changeFrequency: "monthly" as const },
  { href: "/about/", priority: 0.6, changeFrequency: "yearly" as const },
  { href: "/contact/", priority: 0.6, changeFrequency: "yearly" as const },
  { href: "/locations/hamilton-web-design/", priority: 0.9, changeFrequency: "monthly" as const },
  { href: "/services/seo-hamilton/", priority: 0.9, changeFrequency: "monthly" as const },
  { href: "/services/ai-automation/", priority: 0.8, changeFrequency: "monthly" as const },
  ...AREAS.map((a) => ({
    href: areaHref(a.slug),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { href: "/articles/", priority: 0.7, changeFrequency: "weekly" as const },
  ...ARTICLES.map((a) => ({
    href: articleHref(a.slug),
    priority: 0.6,
    changeFrequency: "yearly" as const,
  })),
  { href: "/services/", priority: 0.9, changeFrequency: "monthly" as const },
  { href: "/services/internet-marketing/", priority: 0.8, changeFrequency: "monthly" as const },
  { href: "/services/marketing-consultant/", priority: 0.8, changeFrequency: "monthly" as const },
  ...SERVICES.filter((s) => s.h1).map((s) => ({
    href: s.href,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
];
