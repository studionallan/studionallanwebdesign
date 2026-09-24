import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/shared/ServicePage";
import { SERVICES } from "@/lib/services";
import { ogTags } from "@/lib/og";

const service = SERVICES.find((s) => s.slug === "website-redesign")!;

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.meta,
  alternates: { canonical: service.href },
  openGraph: ogTags({
    title: service.metaTitle,
    description: service.meta,
    url: service.href,
  }),
};

export default function ServiceDetailPage() {
  return <ServicePage service={service} />;
}
