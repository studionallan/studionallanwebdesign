import { ScrubWords } from "@/components/motion/ScrubWords";
import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function Problem() {
  return (
    <section className="chapter-light">
      <div className="shell py-28 sm:py-40">
        <SectionHeader
          index="02"
          eyebrow="The problem, stated bluntly"
        />

        <ScrubWords
          as="h2"
          className="t-display-sm mt-10 max-w-[28ch] text-ink sm:mt-14"
          text="Most business websites are broken in one of two ways — outdated and amateur-looking, or fine-looking but invisible."
        />

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:mt-24 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-5 lg:col-start-2">
            <div className="border-t-2 border-ink pt-6">
              <p className="t-eyebrow text-muted">The first</p>
              <p className="t-body mt-4 text-ink-2">
                It looks <strong>dated and amateurish</strong>. A customer lands
                on it, decides in about three seconds that the business behind it
                isn&apos;t serious, and leaves before they&apos;ve read a word.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.1} className="lg:col-span-5">
            <div className="border-t-2 border-ink pt-6">
              <p className="t-eyebrow text-muted">The second</p>
              <p className="t-body mt-4 text-ink-2">
                It looks <strong>fine</strong> — but it sits invisible. Nobody
                finds it, so it might as well not exist. The owner paid for
                something pretty and got nothing back.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.05}>
          <div className="mt-16 sm:mt-20">
            <Rule color="var(--rule-strong)" />
            <p className="t-lede mt-8 max-w-3xl text-ink">
              You shouldn&apos;t have to choose between a website that{" "}
              <em className="t-serif-i">looks good</em> and one that{" "}
              <em className="t-serif-i">actually brings in customers</em>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
