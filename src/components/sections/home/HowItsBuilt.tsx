import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    n: "01",
    head: "We look at your business and your competitors online.",
    body: "What your competitors are doing well, what they're doing badly, and where the customers you're missing are going instead. We tell you what we find in plain language.",
  },
  {
    n: "02",
    head: "We design and build a site that looks great and is set up to be found.",
    body: "Found by Google, and found by the AI search tools. Automation goes in where it saves you time — booking, follow-ups, and the questions you answer five times a day.",
  },
  {
    n: "03",
    head: "It goes live, and you keep looking sharp as things change.",
    body: "The site stays fast, stays found, and stays current as your business grows and as the search tools change what they recommend.",
  },
];

export function HowItsBuilt() {
  return (
    <section className="chapter-light">
      <div className="shell py-28 sm:py-40">
        <SectionHeader
          index="05"
          eyebrow="How it's built"
          title="Three steps, and none of them are vague."
        />

        <div className="mt-16 sm:mt-20">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className="sticky"
              style={{ top: `calc(6rem + ${i * 1.5}rem)` }}
            >
              <Reveal variant="up" className="pb-6">
                <article className="grid gap-6 bg-accent-bright p-8 shadow-[0_2rem_4rem_-2rem_rgba(156,42,19,0.5)] sm:grid-cols-12 sm:gap-10 sm:p-12">
                  <span
                    className="t-display text-cream sm:col-span-2"
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <h3 className="t-h3 max-w-md text-ink-deep sm:col-span-4">
                    {step.head}
                  </h3>
                  <p className="t-body text-ink-deep sm:col-span-6">{step.body}</p>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
