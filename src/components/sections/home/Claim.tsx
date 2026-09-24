import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const ITEMS = [
  {
    n: "i",
    head: "It looks genuinely great",
    body: "So customers trust you the moment the page loads — and it gets built in weeks, not months.",
  },
  {
    n: "ii",
    head: "It's set up to rank on Google",
    body: "So you show up when someone nearby searches for what you do.",
  },
  {
    n: "iii",
    head: "It's set up for AI search",
    body: "So your business shows up when people ask ChatGPT or Google's AI for a recommendation.",
  },
  {
    n: "iv",
    head: "It's wired with smart automation",
    body: "Only where it actually helps — booking, follow-ups, and the questions you answer five times a day.",
  },
];

export function Claim() {
  return (
    <section className="chapter-dark glow">
      <div className="shell py-28 sm:py-40">
        <SectionHeader
          index="03"
          eyebrow="The claim, made concrete"
          title="Both. In the same build."
          dark
        />

        <Reveal variant="up" delay={0.1} className="mt-10 max-w-3xl sm:mt-12">
          <p className="t-lede text-cream-dim">
            We build the best website your business will have. Every site is one
            built-in package —{" "}
            <em className="t-serif-i text-cream">not a bundle</em>, not a
            checklist of add-ons, and never a menu where you pick what you can
            afford. It&apos;s simply how we build.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          <div className="hair-dark" />
          <Stagger className="divide-y divide-line-dark">
            {ITEMS.map((item) => (
              <StaggerItem
                key={item.n}
                as="div"
                className="group grid gap-4 py-9 transition-colors duration-500 hover:bg-cream/[0.04] sm:grid-cols-12 sm:gap-10 sm:py-11 lg:px-6 lg:-mx-6"
              >
                <span className="t-eyebrow text-accent-bright sm:col-span-1 sm:pt-2">
                  {item.n}
                </span>
                <h3 className="t-h3 text-cream transition-transform duration-500 group-hover:translate-x-2 sm:col-span-5">
                  {item.head}
                </h3>
                <p className="t-body text-cream-dim transition-transform duration-500 group-hover:translate-x-2 sm:col-span-6">
                  {item.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="hair-dark" />
        </div>
      </div>
    </section>
  );
}
