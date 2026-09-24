import { professionalServiceSchema } from "@/lib/schema";

/** Renders a JSON-LD block. Used in the document head and per-page. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Sitewide NAP schema — present in <head> on every page. */
export function SitewideJsonLd() {
  return <JsonLd data={professionalServiceSchema()} />;
}
