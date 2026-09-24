import { site } from "./site";

/**
 * Complete Open Graph block. Next.js replaces (not merges) nested metadata
 * objects, so every page must emit the full set — locale, type, site name,
 * and share image — or those tags silently vanish.
 */
export function ogTags({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    title,
    description,
    url,
    siteName: site.name,
    locale: "en_CA",
    type: "website" as const,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };
}
