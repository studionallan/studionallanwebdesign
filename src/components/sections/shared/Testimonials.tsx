import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { REVIEW } from "@/lib/review";

/**
 * Client reviews — currently the single verified Google review, verbatim.
 * Append future verified reviews to the array below.
 */
const REVIEWS = [REVIEW];

export function Testimonials() {
  return (
    <section className="chapter-light">
      <div className="shell py-28 sm:py-40">
        <Reveal variant="fade" className="flex items-baseline gap-4">
          <span aria-hidden className="size-2 self-center bg-accent" />
          <span className="t-eyebrow text-muted">Reviews</span>
        </Reveal>

        <Reveal variant="up" delay={0.06} className="mt-7 max-w-3xl">
          <h2 className="t-h2 text-ink">
            What it&apos;s like to <em className="t-serif-i">work with us.</em>
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          <div className="hair" />
          {REVIEWS.map((r) => (
            <Reveal key={r.author} variant="up" className="grid gap-4 py-10 sm:grid-cols-12 sm:gap-10 sm:py-12">
              <span
                aria-label={`Rated ${r.ratingValue} out of ${r.bestRating}`}
                role="img"
                className="text-accent sm:col-span-2"
                style={{ letterSpacing: "0.3em" }}
              >
                ★★★★★
              </span>
              <blockquote className="sm:col-span-7">
                <p className="t-lede text-ink">&ldquo;{r.text}&rdquo;</p>
              </blockquote>
              <div className="flex items-center gap-4 sm:col-span-3 sm:justify-end sm:pt-1">
                <span className="relative block size-12 shrink-0 overflow-hidden rounded-full border border-rule-strong">
                  <Image
                    src={r.image}
                    alt={`Portrait of ${r.author}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <p className="t-eyebrow text-muted">
                  {r.author}
                  <br />
                  {r.source}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="hair" />
        </div>

        <Reveal variant="fade" delay={0.1}>
          <div className="mt-10">
            <Rule color="var(--rule-strong)" className="max-w-[7.5rem]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
