"use client";

import { CTA } from "@/components/sections/shared/CTA";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta({
  index = "07",
  eyebrow = "Start",
}: {
  index?: string;
  eyebrow?: string;
}) {
  return (
    <section className="chapter-dark glow relative overflow-clip">
      <div className="shell py-32 sm:py-48">
        <Reveal variant="fade" className="flex items-baseline gap-4">
          <span className="t-eyebrow text-accent-bright">{index}</span>
          <span className="t-eyebrow text-cream-faint">{eyebrow}</span>
        </Reveal>

        <LineReveal
          as="h2"
          className="mt-10 sm:mt-14"
          lines={[
            <span key="l1" className="t-display text-cream">
              The <em className="t-serif-i text-accent-bright">best</em> website
            </span>,
            <span key="l2" className="t-display-sans text-cream">
              your business
            </span>,
            <span key="l3" className="t-display text-cream">
              will <em className="t-serif-i">ever</em> have.
            </span>,
          ]}
        />

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:mt-20 lg:grid-cols-12">
          <Reveal variant="up" delay={0.1} className="lg:col-span-6">
            <p className="t-lede max-w-xl text-cream-dim">
              One conversation. No quiz, no scorecard, no proposal full of words
              you&apos;d never use. Tell us what you do, we&apos;ll tell you what
              we&apos;d build, and you decide.
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <CTA label="Book a call" variant="light" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
