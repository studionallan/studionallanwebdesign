import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

type Work = {
  src: string;
  alt: string;
  caption: string;
  /** exact natural ratio — frames never crop */
  ratio: string;
};

const WORKS: Work[] = [
  {
    src: "/portfolio/trust.jpg",
    alt: "Website designed and built by Studio Nallan Web Design for Trust",
    caption: "Trust",
    ratio: "1600 / 886",
  },
  {
    src: "/portfolio/130-market.jpg",
    alt: "Website designed and built by Studio Nallan Web Design for 130 Market",
    caption: "130 Market",
    ratio: "1600 / 888",
  },
  {
    src: "/portfolio/brethai.jpg",
    alt: "Website designed and built by Studio Nallan Web Design for BreThai",
    caption: "BreThai",
    ratio: "1600 / 893",
  },
  {
    src: "/portfolio/etax.jpg",
    alt: "Website designed and built by Studio Nallan Web Design for eTax",
    caption: "eTax",
    ratio: "1600 / 885",
  },
  {
    src: "/portfolio/exact-detailing.jpg",
    alt: "Website designed and built by Studio Nallan Web Design for Exact Detailing",
    caption: "Exact Detailing",
    ratio: "1600 / 873",
  },
  {
    src: "/portfolio/marks-plumbing.jpg",
    alt: "Website designed and built by Studio Nallan Web Design for Mark's Plumbing",
    caption: "Mark's Plumbing",
    ratio: "1600 / 888",
  },
  {
    src: "/portfolio/pmsc.jpg",
    alt: "Website designed and built by Studio Nallan Web Design for PMSC",
    caption: "PMSC",
    ratio: "1600 / 885",
  },
];

function Frame({ work, sizes }: { work: Work; sizes: string }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: work.ratio }}>
      <Image
        src={work.src}
        alt={work.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

/**
 * Visual proof — selected client work, shown on the homepage.
 */
export function Proof() {
  return (
    <section id="proof" className="bg-paper-2 text-ink">
      <div className="shell py-28 sm:py-40">
        <div className="grid gap-x-12 gap-y-14 lg:grid-cols-12">
          {/* Sticky credibility column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal variant="fade" className="flex items-baseline gap-4">
                <span className="t-eyebrow text-accent">04</span>
                <span className="t-eyebrow text-muted">Proof</span>
              </Reveal>

              <Reveal variant="up" delay={0.06} className="mt-7">
                <h2 className="t-h2 text-ink">
                  Years of making things{" "}
                  <em className="t-serif-i">look right.</em>
                </h2>
              </Reveal>

              <Reveal variant="up" delay={0.12} className="mt-8">
                <div className="space-y-5 t-body text-ink-2">
                  <p>
                    <strong className="font-semibold text-ink">Nallan</strong> has
                    eighteen years in visual communication and brand strategy —
                    deciding how a business should look so that the right people
                    trust it on first glance.
                  </p>
                  <p>
                    <strong className="font-semibold text-ink">Meena</strong>,
                    co-founder, brings a background in{" "}
                    <strong className="font-semibold text-ink">
                      architecture and interior design
                    </strong>
                    , which shows up in the work itself: proportion, light, space
                    between things, and nothing on the page that doesn&apos;t
                    need to be there.
                  </p>
                  <p>
                    The studio is based in{" "}
                    <strong className="font-semibold text-ink">
                      Hamilton, Ontario
                    </strong>
                    , and works with companies across the globe.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Feature frame */}
          <Reveal variant="right" className="lg:col-span-7 lg:col-start-6">
            <Frame work={WORKS[0]} sizes="(max-width: 1024px) 100vw, 57vw" />
          </Reveal>
        </div>

        {/* Editorial strip — offset rhythm, not a uniform grid */}
        <Stagger className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-12">
          <StaggerItem className="lg:col-span-4">
            <Frame work={WORKS[1]} sizes="(max-width: 1024px) 45vw, 30vw" />
          </StaggerItem>
          <StaggerItem className="lg:col-span-4 lg:mt-16">
            <Frame work={WORKS[2]} sizes="(max-width: 1024px) 45vw, 30vw" />
          </StaggerItem>
          <StaggerItem className="lg:col-span-4">
            <Frame work={WORKS[3]} sizes="(max-width: 1024px) 45vw, 30vw" />
          </StaggerItem>
          <StaggerItem className="lg:col-span-4 lg:mt-8">
            <Frame work={WORKS[4]} sizes="(max-width: 1024px) 45vw, 30vw" />
          </StaggerItem>
          <StaggerItem className="lg:col-span-4 lg:mt-24">
            <Frame work={WORKS[5]} sizes="(max-width: 1024px) 45vw, 30vw" />
          </StaggerItem>
          <StaggerItem className="lg:col-span-4 lg:mt-8">
            <Frame work={WORKS[6]} sizes="(max-width: 1024px) 45vw, 30vw" />
          </StaggerItem>
        </Stagger>

        <Reveal variant="fade" delay={0.1}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            Selected client websites — designed, built, and looked after by
            the studio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
