import { PageHeader } from "@/components/layout/PageHeader";
import { ProseSection, PlainList } from "@/components/sections/shared/Prose";
import { AreasNav } from "@/components/sections/shared/AreasNav";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import type { AreaCopy } from "@/lib/areas";

const INCLUDED = [
  "A design that looks genuinely great, so customers trust you the moment the page loads.",
  "Pages set up to rank on Google, so you show up when someone nearby searches for what you do.",
  "Pages set up so your business shows up when people ask ChatGPT or Google's AI for a recommendation.",
  "Smart automation where it actually saves you time — booking, follow-ups, and the questions you answer five times a day.",
];

/** Shared shell for the seven Hamilton sub-region pages. Copy stays per-area. */
export function AreaPage({ area }: { area: AreaCopy }) {
  const url = `${site.domain}/locations/${area.slug}/`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          serviceType: "Web Design",
          url,
          description: `Web design for ${area.name} businesses — websites that look genuinely great and are set up to be found on Google and by AI search.`,
        })}
      />

      <PageHeader
        eyebrow={`Web Design · ${area.name}, Ontario`}
        title={`Web Design in ${area.name}, Ontario`}
        intro={area.intro}
      />

      <ProseSection title={`A Web Design Company in ${area.name}`}>
        <p>{area.section1[0]}</p>
        <p>{area.section1[1]}</p>
      </ProseSection>

      <ProseSection title={`Built to Be Found in ${area.name}`}>
        <p>{area.section2[0]}</p>
        <p>{area.section2[1]}</p>
        <PlainList items={INCLUDED} />
      </ProseSection>

      <AreasNav />
      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
