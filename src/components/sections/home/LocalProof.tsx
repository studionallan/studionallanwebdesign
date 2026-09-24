import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { LineReveal } from "@/components/motion/LineReveal";
import { HamiltonMap } from "@/components/sections/home/HamiltonMap";
import { AREAS, areaHref } from "@/lib/areas";
import { site } from "@/lib/site";

export function LocalProof() {
  return (
    <section className="chapter-light relative overflow-clip">
      {/* Map backdrop + paper wash — the text column always sits on clean paper */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none"
      >
        <HamiltonMap className="h-full w-full opacity-70" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-paper via-paper/90 via-45% to-paper/25"
        />
      </div>

      <div className="shell relative py-28 sm:py-40">
        <Reveal variant="fade" className="flex items-baseline gap-4">
          <span className="t-eyebrow text-accent">06</span>
          <span className="t-eyebrow text-muted">Home base</span>
        </Reveal>

        <LineReveal
          as="h2"
          className="mt-10 sm:mt-14"
          lines={[
            <span key="l1" className="t-display-sans text-ink">
              Established in <em className="t-serif-i font-normal">Hamilton,</em>
            </span>,
            <span key="l2" className="t-display-sans text-ink">
              working worldwide<span className="text-accent">.</span>
            </span>,
          ]}
        />

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:mt-20 lg:grid-cols-12">
          <Reveal variant="up" className="lg:col-span-6">
            <div className="space-y-6 t-body text-lg text-ink-2">
              <p>
                Studio Nallan Web Design was established in{" "}
                <strong className="font-semibold text-ink">
                  Hamilton, Ontario
                </strong>{" "}
                — the escarpment, the harbour, the streets we walk every day.
                This is home, and it shows in the work.
              </p>
              <p>
                But a website doesn&apos;t care where it&apos;s built. We work
                with companies <strong className="font-semibold text-ink">across the globe</strong> the
                same way we work with the business down the street: one
                conversation, plain language, and a site that looks great and
                brings in customers.
              </p>
              <p>
                If you&apos;re nearby, even better — you can come and see where
                your website gets built.
              </p>
            </div>

            <div className="mt-8 border-t border-rule pt-6">
              <p className="t-eyebrow text-muted">Areas we serve</p>
              <p className="mt-4 text-[1.05rem] leading-loose text-ink-2">
                {AREAS.map((a, i) => (
                  <span key={a.slug}>
                    {i > 0 && (
                      <span aria-hidden className="mx-2.5 text-rule-strong">·</span>
                    )}
                    <Link
                      href={areaHref(a.slug)}
                      className="link-plain whitespace-nowrap text-ink hover:text-accent-deep"
                    >
                      {a.name}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="border border-rule-strong bg-paper p-8">
              <p className="t-eyebrow text-muted">The studio</p>
              <div className="mt-5">
                <Rule color="var(--accent)" className="max-w-[3.5rem]" />
              </div>
              <p className="t-h3 mt-6 text-ink">
                {site.name}
                <br />
                {site.city}, {site.regionCode}
              </p>
              <p
                className="t-eyebrow mt-6 text-muted"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {site.geo.latitude.toFixed(4)}° N,{" "}
                {Math.abs(site.geo.longitude).toFixed(4)}° W
              </p>
              <div className="mt-6 border-t border-rule pt-6">
                <p className="flex items-center gap-3 text-ink">
                  <span aria-hidden className="size-1.5 animate-pulse bg-accent" />
                  Taking on projects worldwide
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
