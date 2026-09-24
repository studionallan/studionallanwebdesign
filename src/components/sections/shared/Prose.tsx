import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/**
 * Body prose block for inner pages: real subheading, flowing paragraphs.
 * Deliberately not a card grid and not a deliverables checklist.
 */
export function ProseSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="chapter-light">
      <div className="shell py-14 sm:py-20">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal variant="left">
                <div className="border-t-2 border-ink pt-5">
                  <h2 className="t-h3 max-w-xs text-ink">{title}</h2>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal variant="up" delay={0.08} className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 t-body text-lg text-ink-2">{children}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Hairline-separated list of outcomes. No icons, no card grid. */
export function PlainList({ items }: { items: string[] }) {
  return (
    <div className="mt-8 border-y border-rule">
      <Stagger className="divide-y divide-rule">
        {items.map((item, i) => (
          <StaggerItem
            key={i}
            as="div"
            className="group flex items-baseline gap-4 py-5"
          >
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 bg-accent transition-transform duration-300 group-hover:rotate-45"
            />
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {item}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export { Rule };
