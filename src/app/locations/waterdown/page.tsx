import type { Metadata } from "next";
import { AreaPage } from "@/components/sections/shared/AreaPage";
import { AREA_COPY } from "@/lib/areas";
import { ogTags } from "@/lib/og";

const area = AREA_COPY.find((a) => a.slug === "waterdown")!;

export const metadata: Metadata = {
  title: "Web Design in Waterdown",
  description: area.meta,
  alternates: { canonical: "/locations/waterdown/" },
  openGraph: ogTags({
    title: "Web Design in Waterdown | Studio Nallan Web Design",
    description: area.meta,
    url: `/locations/waterdown/`,
  }),
};

export default function AreaWebDesignPage() {
  return <AreaPage area={area} />;
}
