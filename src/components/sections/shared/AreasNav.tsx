import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { AREAS, areaHref } from "@/lib/areas";

/**
 * Regional navigation block. Lives on the homepage above the FAQ and at the
 * foot of every area page so the cluster interlinks.
 */
export function AreasNav() {
  return (
    <section className="chapter-light" aria-label="Areas served">
      <div className="shell py-24 sm:py-32">
        <Reveal variant="fade" className="flex items-baseline gap-4">
          <span aria-hidden className="size-2 self-center bg-accent" />
          <span className="t-eyebrow text-muted">Where we work</span>
        </Reveal>

        <Reveal variant="up" delay={0.06} className="mt-7 max-w-3xl">
          <h2 className="t-h2 text-ink">
            Areas We Serve <em className="t-serif-i">Across Hamilton</em>
          </h2>
        </Reveal>

        <div className="mt-14">
          <div className="hair" />
          <Stagger gap={0.06} className="grid sm:grid-cols-2 sm:gap-x-12">
            {AREAS.map((a, i) => (
              <StaggerItem key={a.slug} as="div" className="border-b border-rule">
                <Link
                  href={areaHref(a.slug)}
                  className="group flex items-baseline gap-5 py-5"
                >
                  <span
                    className="t-eyebrow text-accent"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="t-h3 font-semibold text-ink transition-transform duration-500 group-hover:translate-x-2">
                    {a.name}
                  </span>
                  <span
                    aria-hidden
                    className="ml-auto size-1.5 shrink-0 self-center bg-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
