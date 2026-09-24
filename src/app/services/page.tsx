import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";

function HubImage({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="chapter-light">
      <div className="shell pb-4">
          <Reveal variant="up">
            <figure className="border border-rule-strong bg-paper-2">
              <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
                <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" priority />
              </div>
            </figure>
          </Reveal>
      </div>
    </section>
  );
}
import { Rule } from "@/components/motion/Rule";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { CATEGORIES, SERVICES } from "@/lib/services";
import { ogTags } from "@/lib/og";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Every service at Studio Nallan Web Design — web design, internet marketing, and marketing consulting — built in, never bolted on. Book a call.",
  alternates: { canonical: "/services/" },
  openGraph: ogTags({
    title: "Our Services | Studio Nallan Web Design",
    description:
      "Web design, internet marketing, and marketing consulting — one built-in package.",
    url: "/services/",
  }),
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Studio Nallan Web Design services",
          url: `${site.domain}/services/`,
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `${site.domain}${s.href}`,
          })),
        }}
      />

      <PageHeader
        eyebrow="Services"
        title="Everything built in, nothing bolted on."
        intro="Three categories, eleven services, one way of working: strategy, design, visibility, and automation come as a single built-in package — never a menu of add-ons."
      />

      <HubImage src="/services/services-hub.jpg" alt="Studio Nallan Web Design services — web design, internet marketing, and marketing consulting" />

      {CATEGORIES.map((cat, ci) => (
        <section key={cat.id} className="chapter-light">
          <div className="shell py-16 sm:py-20">
            <Reveal variant="fade" className="flex items-baseline gap-4">
              <span className="t-eyebrow text-accent">
                {String(ci + 1).padStart(2, "0")}
              </span>
              <Link
                href={cat.href}
                className="link-plain t-eyebrow text-muted hover:text-ink"
              >
                {cat.name}
              </Link>
            </Reveal>

            <Reveal variant="up" delay={0.06} className="mt-7 max-w-3xl">
              <h2 className="t-h2 text-ink">{cat.name}</h2>
            </Reveal>

            <Reveal variant="up" delay={0.1} className="mt-6 max-w-2xl">
              <p className="t-body text-lg text-ink-2">{cat.blurb}</p>
            </Reveal>

            <div className="mt-12">
              <div className="hair" />
              <Stagger gap={0.07} className="divide-y divide-rule">
                {SERVICES.filter((s) => s.categoryId === cat.id).map((s) => (
                  <StaggerItem key={s.slug} as="div" className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-10">
                    <h3 className="t-h3 text-ink sm:col-span-4">
                      <Link
                        href={s.href}
                        className="link-plain transition-colors hover:text-accent-deep"
                      >
                        {s.name}
                      </Link>
                    </h3>
                    <p className="t-body text-ink-2 sm:col-span-5">{s.gbp}</p>
                    <p className="t-eyebrow text-accent sm:col-span-3 sm:pt-1.5 sm:text-right">
                      {s.price}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
              <div className="hair" />
            </div>
          </div>
        </section>
      ))}

      <section className="chapter-light">
        <div className="shell pb-20">
          <Reveal variant="fade">
            <Rule color="var(--rule-strong)" className="max-w-[7.5rem]" />
          </Reveal>
        </div>
      </section>

      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
