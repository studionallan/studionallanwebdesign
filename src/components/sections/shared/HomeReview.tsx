import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { REVIEW } from "@/lib/review";

function Stars() {
  return (
    <span
      aria-label={`Rated ${REVIEW.ratingValue} out of ${REVIEW.bestRating}`}
      role="img"
      className="text-accent-bright"
      style={{ letterSpacing: "0.35em", fontSize: "1rem" }}
    >
      ★★★★★
    </span>
  );
}

/**
 * Single verified client review, verbatim. Sits between Proof and How.
 */
export function HomeReview() {
  return (
    <section className="chapter-dark">
      <div className="shell py-24 sm:py-32">
        <Reveal variant="fade" className="flex items-center justify-center gap-4">
          <Stars />
        </Reveal>

        <Reveal variant="up" delay={0.08} className="mx-auto mt-8 max-w-4xl">
          <blockquote>
            <p className="t-lede text-center text-cream">
              &ldquo;{REVIEW.text}&rdquo;
            </p>
          </blockquote>
        </Reveal>

        <Reveal variant="fade" delay={0.15}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="relative block size-12 shrink-0 overflow-hidden rounded-full border border-line-dark-strong">
              <Image
                src={REVIEW.image}
                alt={`Portrait of ${REVIEW.author}`}
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <p className="t-eyebrow text-left text-cream-faint">
              {REVIEW.author}
              <br />
              {REVIEW.source}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
