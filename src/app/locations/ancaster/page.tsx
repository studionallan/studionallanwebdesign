import type { Metadata } from "next";
import { AreaPage } from "@/components/sections/shared/AreaPage";
import { AREA_COPY } from "@/lib/areas";
import { ogTags } from "@/lib/og";

const area = AREA_COPY.find((a) => a.slug === "ancaster")!;

export const metadata: Metadata = {
  title: "Web Design in Ancaster",
  description: area.meta,
  alternates: { canonical: "/locations/ancaster/" },
  openGraph: ogTags({
    title: "Web Design in Ancaster | Studio Nallan Web Design",
    description: area.meta,
    url: `/locations/ancaster/`,
  }),
};

export default function AreaWebDesignPage() {
  return <AreaPage area={area} />;
}
