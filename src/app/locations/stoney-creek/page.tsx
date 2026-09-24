import type { Metadata } from "next";
import { AreaPage } from "@/components/sections/shared/AreaPage";
import { AREA_COPY } from "@/lib/areas";
import { ogTags } from "@/lib/og";

const area = AREA_COPY.find((a) => a.slug === "stoney-creek")!;

export const metadata: Metadata = {
  title: "Web Design in Stoney Creek",
  description: area.meta,
  alternates: { canonical: "/locations/stoney-creek/" },
  openGraph: ogTags({
    title: "Web Design in Stoney Creek | Studio Nallan Web Design",
    description: area.meta,
    url: `/locations/stoney-creek/`,
  }),
};

export default function AreaWebDesignPage() {
  return <AreaPage area={area} />;
}
