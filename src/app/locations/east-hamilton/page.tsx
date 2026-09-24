import type { Metadata } from "next";
import { AreaPage } from "@/components/sections/shared/AreaPage";
import { AREA_COPY } from "@/lib/areas";
import { ogTags } from "@/lib/og";

const area = AREA_COPY.find((a) => a.slug === "east-hamilton")!;

export const metadata: Metadata = {
  title: "Web Design in East Hamilton",
  description: area.meta,
  alternates: { canonical: "/locations/east-hamilton/" },
  openGraph: ogTags({
    title: "Web Design in East Hamilton | Studio Nallan Web Design",
    description: area.meta,
    url: `/locations/east-hamilton/`,
  }),
};

export default function AreaWebDesignPage() {
  return <AreaPage area={area} />;
}
