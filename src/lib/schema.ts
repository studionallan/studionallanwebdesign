import { site } from "./site";
import { REVIEW } from "./review";

/**
 * Structured data.
 * The comprehensive ProfessionalService graph lives in <head> on every page
 * (standard practice; Google expects Organization data sitewide). Per-page
 * Service blocks reference it via provider @id.
 *
 * Placeholders (street, postal code, logo/og-image files, Maps link) are
 * centralized in src/lib/site.ts — swap them before launch.
 */

const ORG_ID = `${site.domain}/#organization`;

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    url: site.domain,
    logo: `${site.domain}${site.logo}`,
    image: `${site.domain}${site.ogImage}`,
    telephone: "+1-416-409-1724",
    priceRange: "$2,500+",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.regionCode,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...site.hours.days],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    areaServed: [
      "Hamilton",
      "Downtown Hamilton",
      "Hamilton Mountain",
      "Ancaster",
      "Dundas",
      "Stoney Creek",
      "Waterdown",
      "Binbrook",
      "Flamborough",
    ].map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design & Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Design & Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local Search Engine Optimization (SEO)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation & Workflow Integration",
          },
        },
      ],
    },
    // Maps link joins sameAs once the verified GBP URL is set in site.ts.
    sameAs: [
      ...(site.mapsUrl ? [site.mapsUrl] : []),
      "https://www.linkedin.com/company/studionallan",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: REVIEW.author,
          image: `${site.domain}${REVIEW.image}`,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: REVIEW.ratingValue,
          bestRating: REVIEW.bestRating,
        },
        reviewBody: REVIEW.text,
        itemReviewed: { "@id": ORG_ID },
      },
    ],
  };
}

export function serviceSchema(args: {
  serviceType: string;
  url: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: args.serviceType,
    provider: {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: site.name,
      url: site.domain,
    },
    areaServed: [...site.areasWide],
    url: args.url,
    ...(args.description ? { description: args.description } : {}),
  };
}
