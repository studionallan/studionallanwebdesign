"use client";

import { CTA } from "@/components/sections/shared/CTA";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="chapter-dark glow relative overflow-clip">
      <div className="shell relative flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-10 pt-24 sm:pt-32">
        <Reveal variant="fade" className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="inline-flex items-center gap-2.5">
            <span aria-hidden className="size-2 bg-accent-bright" />
            <span className="t-eyebrow text-cream">Studio Nallan Web Design</span>
          </span>
          <span className="t-eyebrow text-cream-faint">Hamilton, Ontario</span>
          <span className="t-eyebrow text-cream-faint hidden sm:inline">
            Web design studio
          </span>
        </Reveal>

        <LineReveal
          mode="load"
          as="h1"
          delay={0.15}
          className="mt-10 sm:mt-14"
          lines={[
            <span key="l1" className="t-display-sans text-cream">
              The best website
            </span>,
            <span key="l2" className="t-display text-cream">
              your <em className="t-serif-i text-accent-bright">business</em>
            </span>,
            <span key="l3" className="t-display-sans text-cream">
              will ever have<span className="text-accent-bright">.</span>
            </span>,
          ]}
        />

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:mt-16 lg:grid-cols-12">
          <Reveal variant="up" delay={0.35} className="lg:col-span-6">
            <p className="t-lede max-w-xl text-cream-dim">
              It looks genuinely great, loads fast, gets found on Google, shows
              up when people ask ChatGPT or Google&apos;s AI for a
              recommendation, and makes it simple for customers to reach you.
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.48} className="lg:col-span-4 lg:col-start-9">
            <CTA label="Book a call" variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-faint">
              One conversation. Tell us what you do, and we&apos;ll tell you
              what we&apos;d build.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={0.6}>
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-line-dark pt-6 sm:mt-20 md:grid-cols-4">
            <span className="t-eyebrow text-cream-faint">
              18 yrs visual strategy
            </span>
            <span className="t-eyebrow text-cream-faint">
              Architecture + interiors
            </span>
            <span className="t-eyebrow text-cream-faint hidden md:inline">
              Hamilton — Worldwide
            </span>
            <span className="t-eyebrow text-cream-faint hidden text-right md:inline">
              Scroll
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
