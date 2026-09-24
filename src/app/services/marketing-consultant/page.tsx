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

const ITEMS = SERVICES.filter((s) => s.categoryId === "marketing-consultant");

export const metadata: Metadata = {
  title: "Marketing Consulting Services",
  description:
    "Marketing consulting in Hamilton, Ontario — plain-language audits with concrete plans, and AI automation scoped to your business.",
  alternates: { canonical: "/services/marketing-consultant/" },
  openGraph: ogTags({
    title: "Marketing Consultant Hamilton | Studio Nallan Web Design",
    description:
      "Digital marketing strategy audits and AI automation consulting — clarity before spending.",
    url: "/services/marketing-consultant/",
  }),
};

export default function MarketingConsultantPage() {
  return (
    <>
      <JsonLd
        data={{
          ...serviceSchema({
            serviceType: "Marketing Consultant",
            url: `${site.domain}/services/marketing-consultant/`,
            description:
              "Marketing consulting: plain-language strategy audits and AI automation scoped to your business.",
          }),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Marketing consulting services",
            itemListElement: [
              { name: "Digital Marketing Strategy", price: "1200" },
              { name: "AI Automation Consulting", price: "850" },
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
        eyebrow="Marketing Consultant"
        title="Clarity before spending."
        intro="Two ways we help before you commit to anything big: a plain-language audit that tells you exactly what to fix first — and automation scoped to where your day actually leaks time."
      />

      <section className="chapter-light">
        <div className="shell pb-4">
          <Reveal variant="up">
            <figure className="border border-rule-strong bg-paper-2">
              <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
                <Image
                  src="/services/marketing-consultant.svg"
                  alt="Placeholder illustration of marketing consulting services"
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

      <ProseSection title="An outside eye, plainly spoken">
        <p>
          The hardest marketing question has the simplest shape: what should we
          do first? Most businesses answer it by buying something — ads, a
          package, a retainer — and hoping. Consulting reverses that: look
          first, understand second, spend last, and only where it counts.
        </p>
        <p>
          That&apos;s the whole offer, in two services:
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
              Automation goes deeper on its own page —{" "}
              <Link href="/services/ai-automation/" className="link-plain text-ink">
                AI automation consulting
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
