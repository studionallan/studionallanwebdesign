import type { Metadata } from "next";
import { AreaPage } from "@/components/sections/shared/AreaPage";
import { AREA_COPY } from "@/lib/areas";
import { ogTags } from "@/lib/og";

const area = AREA_COPY.find((a) => a.slug === "hamilton-mountain")!;

export const metadata: Metadata = {
  title: "Web Design in Hamilton Mountain",
  description: area.meta,
  alternates: { canonical: "/locations/hamilton-mountain/" },
  openGraph: ogTags({
    title: "Web Design in Hamilton Mountain | Studio Nallan Web Design",
    description: area.meta,
    url: `/locations/hamilton-mountain/`,
  }),
};

export default function AreaWebDesignPage() {
  return <AreaPage area={area} />;
}
