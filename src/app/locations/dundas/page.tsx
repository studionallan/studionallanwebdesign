import type { Metadata } from "next";
import { AreaPage } from "@/components/sections/shared/AreaPage";
import { AREA_COPY } from "@/lib/areas";
import { ogTags } from "@/lib/og";

const area = AREA_COPY.find((a) => a.slug === "dundas")!;

export const metadata: Metadata = {
  title: "Web Design in Dundas",
  description: area.meta,
  alternates: { canonical: "/locations/dundas/" },
  openGraph: ogTags({
    title: "Web Design in Dundas | Studio Nallan Web Design",
    description: area.meta,
    url: `/locations/dundas/`,
  }),
};

export default function AreaWebDesignPage() {
  return <AreaPage area={area} />;
}
