"use client";

import { useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { REVIEW, REVIEW_LAYLA, REVIEW_MG } from "@/lib/review";

const REVIEWS = [REVIEW, REVIEW_LAYLA, REVIEW_MG];

type Review = (typeof REVIEWS)[number];

function Stars({ rating, best }: { rating: string; best: string }) {
  return (
    <span
      aria-label={`Rated ${rating} out of ${best}`}
      role="img"
      className="text-accent"
      style={{ letterSpacing: "0.3em" }}
    >
      ★★★★★
    </span>
  );
}

function Avatar({ r }: { r: Review }) {
  if ("image" in r && r.image) {
    return (
      <span className="relative block size-12 shrink-0 overflow-hidden rounded-full border border-rule-strong">
        <Image
          src={r.image}
          alt={`Portrait of ${r.author}`}
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className="grid size-12 shrink-0 place-items-center rounded-full bg-accent font-mono text-sm text-cream"
    >
      {r.author
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")}
    </span>
  );
}

/**
 * Scroll-snap testimonial rail. Native horizontal scroll (touch-friendly),
 * arrow buttons, edge fades. Themeable for dark homepage band / light pages.
 */
export function Testimonials({
  dark = false,
  eyebrow = "Reviews",
  title,
}: {
  dark?: boolean;
  eyebrow?: string;
  title?: React.ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  const ink = dark ? "text-cream" : "text-ink";
  const faint = dark ? "text-cream-faint" : "text-muted";
  const card = dark
    ? "border-line-dark bg-cream/[0.03]"
    : "border-rule bg-paper";
  const btn = dark
    ? "border-line-dark text-cream hover:bg-cream hover:text-ink"
    : "border-rule-strong text-ink hover:bg-ink hover:text-cream";

  return (
    <section className={dark ? "chapter-dark glow" : "chapter-light"}>
      <div className="shell py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal variant="fade" className="flex items-baseline gap-4">
              <span aria-hidden className="size-2 self-center bg-accent" />
              <span className={`t-eyebrow ${faint}`}>{eyebrow}</span>
            </Reveal>
            <Reveal variant="up" delay={0.06} className="mt-7">
              <h2 className={`t-h2 ${ink}`}>
                {title ?? (
                  <>
                    What it&apos;s like to <em className="t-serif-i">work with us.</em>
                  </>
                )}
              </h2>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={0.1} className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll reviews backward"
              className={`grid size-12 place-items-center border transition-colors duration-300 ${btn}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll reviews forward"
              className={`grid size-12 place-items-center border transition-colors duration-300 ${btn}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.12} className="relative mt-12">
          <div
            ref={track}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((r) => (
              <article
                key={r.author}
                className={`flex w-[86%] shrink-0 snap-start flex-col border p-7 sm:w-[62%] sm:p-9 lg:w-[31.8%] ${card}`}
              >
                <Stars rating={r.ratingValue} best={r.bestRating} />
                <blockquote className="mt-6 flex-1">
                  <p className={`text-[1.05rem] leading-[1.7] ${ink}`}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                </blockquote>
                <div className={`mt-8 flex items-center gap-4 border-t pt-6 ${dark ? "border-line-dark" : "border-rule"}`}>
                  <Avatar r={r} />
                  <p className={`t-eyebrow ${faint}`}>
                    {r.author}
                    <br />
                    {r.source}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
