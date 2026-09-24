import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";

/**
 * Section header: mono index + eyebrow, animated hairline, headline.
 * Title is optional — some chapters let a scrub statement carry the heading.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  align = "left",
  dark = false,
}: {
  index: string;
  eyebrow: string;
  title?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : ""}>
      <Reveal variant="fade" className="flex items-baseline gap-4">
        <span className={`t-eyebrow ${dark ? "text-accent-bright" : "text-accent"}`}>{index}</span>
        <span className={`t-eyebrow ${dark ? "text-cream-faint" : "text-muted"}`}>
          {eyebrow}
        </span>
      </Reveal>

      {title ? (
        <>
          <div className="mt-5">
            <Rule
              color={dark ? "var(--line-dark-strong)" : "var(--rule-strong)"}
              className="max-w-[7.5rem]"
            />
          </div>

          <Reveal variant="up" delay={0.06} className="mt-7">
            <h2 className={`t-h2 ${dark ? "text-cream" : "text-ink"}`}>{title}</h2>
          </Reveal>
        </>
      ) : null}
    </div>
  );
}
