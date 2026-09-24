import type { Metadata } from "next";
import { AreaPage } from "@/components/sections/shared/AreaPage";
import { AREA_COPY } from "@/lib/areas";
import { ogTags } from "@/lib/og";

const area = AREA_COPY.find((a) => a.slug === "binbrook")!;

export const metadata: Metadata = {
  title: "Web Design in Binbrook",
  description: area.meta,
  alternates: { canonical: "/locations/binbrook/" },
  openGraph: ogTags({
    title: "Web Design in Binbrook | Studio Nallan Web Design",
    description: area.meta,
    url: `/locations/binbrook/`,
  }),
};

export default function AreaWebDesignPage() {
  return <AreaPage area={area} />;
}
