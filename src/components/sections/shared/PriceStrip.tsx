import { CTA } from "@/components/sections/shared/CTA";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Starting-price strip: mono label, big serif figure, qualifier, CTA.
 * Pricing is stated plainly — no asterisks, no fine print shaped like fog.
 */
export function PriceStrip({
  price,
  note,
  cta = true,
}: {
  price: string;
  note?: string;
  cta?: boolean;
}) {
  return (
    <section className="chapter-light">
      <div className="shell py-10 sm:py-12">
        <Reveal variant="up">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-y-2 border-ink py-8">
            <div>
              <p className="t-eyebrow text-muted">Starting at</p>
              <p
                className="mt-3 text-ink"
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                {price}
              </p>
              {note && (
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">
                  {note}
                </p>
              )}
            </div>
            {cta && <CTA label="Book a call" />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
