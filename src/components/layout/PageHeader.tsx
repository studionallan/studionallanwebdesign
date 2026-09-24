import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { LineReveal } from "@/components/motion/LineReveal";

/**
 * Inner-page header. Editorial serif H1, single intro paragraph.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="chapter-light">
      <div className="shell pb-20 pt-16 sm:pt-24 lg:pt-28">
        <Reveal variant="fade" className="flex items-baseline gap-4">
          <span aria-hidden className="size-2 bg-accent" />
          <span className="t-eyebrow text-muted">{eyebrow}</span>
        </Reveal>

        <LineReveal
          mode="load"
          as="h1"
          delay={0.1}
          className="mt-8 sm:mt-10"
          lines={[
            <span key="t" className="t-display max-w-[16ch] text-ink">
              {title}
            </span>,
          ]}
        />

        <Reveal variant="up" delay={0.25} className="mt-10 max-w-2xl sm:mt-12">
          <div className="border-l-2 border-accent pl-6">
            <p className="t-lede text-ink-2">{intro}</p>
          </div>
        </Reveal>

        <div className="mt-14 sm:mt-16">
          <Rule color="var(--rule-strong)" />
        </div>
      </div>
    </section>
  );
}
