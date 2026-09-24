import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProseSection } from "@/components/sections/shared/Prose";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { SERVICES } from "@/lib/services";
import { ogTags } from "@/lib/og";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const ITEMS = SERVICES.filter((s) => s.categoryId === "internet-marketing");

export const metadata: Metadata = {
  title: "Internet Marketing Services",
  description:
    "Internet marketing in Hamilton, Ontario — local SEO, AI search, Google Business Profile, and copywriting. Built in, never bolted on.",
  alternates: { canonical: "/services/internet-marketing/" },
  openGraph: ogTags({
    title: "Internet Marketing Hamilton | Studio Nallan Web Design",
    description:
      "Local SEO, AI search optimization, Google Business Profile, and copywriting that ranks and converts.",
    url: "/services/internet-marketing/",
  }),
};

export default function InternetMarketingPage() {
  return (
    <>
      <JsonLd
        data={{
          ...serviceSchema({
            serviceType: "Internet Marketing Service",
            url: `${site.domain}/services/internet-marketing/`,
            description:
              "Internet marketing services: local SEO, AI search optimization, Google Business Profile management, and copywriting.",
          }),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Internet marketing services",
            itemListElement: [
              { name: "Local SEO", price: "650" },
              { name: "AI Search Optimization (GEO)", price: "500" },
              { name: "Google Business Profile Optimization", price: "400" },
              { name: "Content Strategy & Copywriting", price: "200" },
            ].map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o.name },
              priceCurrency: "CAD",
              price: o.price,
            })),
          },
        }}
      />

      <PageHeader
        eyebrow="Internet Marketing Service"
        title="Get found everywhere your customers look."
        intro="Google, the map pack, AI answers, and the words on the page — four channels, one job: putting your business in front of people at the exact moment they need you."
      />

      <section className="chapter-light">
        <div className="shell pb-4">
          <Reveal variant="up">
            <figure className="border border-rule-strong bg-paper-2">
              <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
                <Image
                  src="/services/internet-marketing.svg"
                  alt="Placeholder illustration of internet marketing services"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="border-t border-rule px-4 py-3">
                <span className="t-eyebrow text-muted">Placeholder image — to be replaced</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <ProseSection title="Visibility is built, not bought">
        <p>
          Most marketing sells you motion: posts, ads, reports full of charts
          nobody explains. Internet marketing done right is quieter than that.
          It&apos;s a website Google can read, a listing customers trust, words
          that answer real questions, and pages the AI tools quote by name.
        </p>
        <p>
          We build all four into the same thing — because a site that ranks but
          reads badly, or reads well but can&apos;t be found, is only half a
          job. Four services, one standard:
        </p>
      </ProseSection>

      <section className="chapter-light">
        <div className="shell pb-24">
          <div className="hair" />
          <Stagger gap={0.07} className="divide-y divide-rule">
            {ITEMS.map((s) => (
              <StaggerItem key={s.slug} as="div" className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-10">
                <h2 className="t-h3 text-ink sm:col-span-4">
                  <Link
                    href={s.href}
                    className="link-plain transition-colors hover:text-accent-deep"
                  >
                    {s.name}
                  </Link>
                </h2>
                <p className="t-body text-ink-2 sm:col-span-5">{s.gbp}</p>
                <p className="t-eyebrow text-accent sm:col-span-3 sm:pt-1.5 sm:text-right">
                  {s.price}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="hair" />
          <Reveal variant="fade" delay={0.1}>
            <p className="mt-8 max-w-2xl t-body text-ink-2">
              Local SEO goes deeper on its own page —{" "}
              <Link href="/services/seo-hamilton/" className="link-plain text-ink">
                SEO services in Hamilton
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
