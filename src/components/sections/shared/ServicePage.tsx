import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProseSection, PlainList } from "@/components/sections/shared/Prose";
import { PriceStrip } from "@/components/sections/shared/PriceStrip";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { CATEGORIES, SERVICES, serviceHref, type ServiceDetail } from "@/lib/services";

/** Shared shell for the nine service detail pages. */
export function ServicePage({ service }: { service: ServiceDetail }) {
  const url = `${site.domain}${serviceHref(service.slug)}`;
  const category = CATEGORIES.find((c) => c.id === service.categoryId)!;
  const siblings = SERVICES.filter(
    (s) => s.categoryId === service.categoryId && s.slug !== service.slug
  );

  return (
    <>
      <JsonLd
        data={{
          ...serviceSchema({
            serviceType: service.name,
            url,
            description: service.gbp,
          }),
          offers: {
            "@type": "Offer",
            priceCurrency: "CAD",
            price: service.priceAmount,
            description: `${service.name} — starting at ${service.price}. ${service.priceNote ?? ""}`.trim(),
          },
        }}
      />

      <PageHeader
        eyebrow={`${category.name} · Hamilton, Ontario`}
        title={service.h1}
        intro={service.gbp}
      />

      <section className="chapter-light">
        <div className="shell pb-4">
          <Reveal variant="up">
            <figure className="border border-rule-strong bg-paper-2">
              <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <PriceStrip price={service.price} note={service.priceNote} />

      <ProseSection title="What this is">
        {service.sections[0].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </ProseSection>

      <ProseSection title="How we do it">
        {service.sections[1].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <PlainList items={service.bullets} />
      </ProseSection>

      {siblings.length > 0 && (
        <section className="chapter-light">
          <div className="shell pb-20">
            <Reveal variant="fade">
              <p className="t-eyebrow text-muted">
                More {category.name.toLowerCase()} services
              </p>
              <div className="mt-5">
                <Rule color="var(--rule-strong)" className="max-w-[3.5rem]" />
              </div>
            </Reveal>
            <div className="mt-2 divide-y divide-rule border-b border-rule">
              {siblings.map((s) => (
                <Reveal key={s.slug} variant="fade">
                  <Link
                    href={s.href}
                    className="group flex items-baseline gap-5 py-5"
                  >
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span className="t-h3 text-ink transition-transform duration-300 group-hover:translate-x-1">
                      {s.name}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
