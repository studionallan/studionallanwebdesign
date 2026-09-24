import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Plain-English answers, no pricing figures, no hype.
 * Mirrored 1:1 in the FAQPage schema below.
 */
const FAQS = [
  {
    q: "How much does a website cost?",
    a: "Builds start at $2,500. The exact number depends on what your business actually needs, so you'll get a straight quote after one conversation — no guessing games, no hidden add-ons.",
  },
  {
    q: "How long does it take?",
    a: "Solo sites can go live in days. Bigger builds take longer. The real timeline depends on how complex the project is, and we'll give you the honest number for yours on the call.",
  },
  {
    q: "Will my site show up on Google?",
    a: "That's part of the build, not an extra. Every site comes set up to rank from day one — clean pages that load fast, the right words in the right places, and nothing a search engine has to guess at.",
  },
  {
    q: "What about AI search — ChatGPT and Google's AI?",
    a: "Also part of the build. Your site is set up so your business shows up when people ask ChatGPT or Google's AI for a recommendation, because that's how a growing number of your customers search now.",
  },
  {
    q: "Do you only work with Hamilton businesses?",
    a: "The studio is based in Hamilton, Ontario. That's where most of our work happens, but we're open to working with businesses anywhere — just tell us on the call.",
  },
  {
    q: "What do you need from me to get started?",
    a: "One conversation. Tell us what you do in your own words and we'll take it from there — the looking, the writing, the building, all of it.",
  },
];

export function Faq() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <section className="chapter-light">
        <div className="shell py-24 sm:py-32">
          <Reveal variant="fade" className="flex items-baseline gap-4">
            <span aria-hidden className="size-2 self-center bg-accent" />
            <span className="t-eyebrow text-muted">Questions</span>
          </Reveal>

          <Reveal variant="up" delay={0.06} className="mt-7 max-w-3xl">
            <h2 className="t-h2 text-ink">
              Asked <em className="t-serif-i">often.</em>
            </h2>
          </Reveal>

          <div className="mt-14">
            <div className="hair" />
            <Stagger gap={0.08} className="divide-y divide-rule">
              {FAQS.map((f) => (
                <StaggerItem
                  key={f.q}
                  as="div"
                  className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-10"
                >
                  <h3 className="t-h3 text-ink sm:col-span-5">{f.q}</h3>
                  <p className="t-body text-lg text-ink-2 sm:col-span-7">{f.a}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="hair" />
          </div>

          <Reveal variant="fade" delay={0.1}>
            <div className="mt-10">
              <Rule color="var(--rule-strong)" className="max-w-[7.5rem]" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
