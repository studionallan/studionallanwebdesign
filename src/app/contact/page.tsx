import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ContactForm } from "@/components/sections/shared/ContactForm";
import { IconButton, PhoneIcon, SmsIcon, WhatsappIcon, smsHref, telHref, waHref } from "@/components/sections/shared/ContactIcons";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { site } from "@/lib/site";
import { ogTags } from "@/lib/og";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Studio Nallan Web Design about your website. Tell us what you do, and we'll tell you what we'd build. Based in Hamilton — working worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: ogTags({
    title: "Contact | Studio Nallan Web Design",
    description: "Talk to Studio Nallan Web Design about your website. Tell us what you do, and we'll tell you what we'd build.",
    url: "/contact",
  }),
};

const NEXT_STEPS = [
  "You tell us what you do, in your own words.",
  "We look at your current site and your competitors, and tell you plainly what we'd build.",
  "You decide. No quiz, no scorecard, no proposal full of words you'd never use.",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us."
        intro="Tell us what you do. We'll tell you what we'd build. That's the whole first conversation — no quiz, no scorecard, and no pressure to decide anything on the call."
      />

      <section className="chapter-light">
        <div className="shell pb-24 sm:pb-32">
          <div className="grid gap-x-12 gap-y-16 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal variant="up">
                <h2 className="t-h3 text-ink">Send an enquiry</h2>
                <div className="mt-5">
                  <Rule color="var(--accent)" className="max-w-[3.5rem]" />
                </div>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            {/* Direct details */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal variant="up" delay={0.08}>
                <h2 className="t-eyebrow text-muted">Or reach us directly</h2>
                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href={telHref()}
                      aria-label={`Call ${site.name}`}
                      className="group flex items-center gap-5 border border-rule-strong p-5 transition-colors duration-300 hover:border-ink"
                    >
                      <IconButton className="pointer-events-none">
                        <PhoneIcon size={16} />
                      </IconButton>
                      <span>
                        <span className="t-eyebrow block text-muted">Phone</span>
                        <span className="t-h3 mt-1 block text-ink">Give us a call</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={smsHref()}
                      aria-label={`Text ${site.name}`}
                      className="group flex items-center gap-5 border border-rule-strong p-5 transition-colors duration-300 hover:border-ink"
                    >
                      <IconButton className="pointer-events-none">
                        <SmsIcon size={16} />
                      </IconButton>
                      <span>
                        <span className="t-eyebrow block text-muted">Text</span>
                        <span className="t-h3 mt-1 block text-ink">Send us a text</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={waHref()}
                      aria-label={`WhatsApp ${site.name}`}
                      className="group flex items-center gap-5 border border-rule-strong p-5 transition-colors duration-300 hover:border-ink"
                    >
                      <IconButton className="pointer-events-none">
                        <WhatsappIcon size={16} />
                      </IconButton>
                      <span>
                        <span className="t-eyebrow block text-muted">WhatsApp</span>
                        <span className="t-h3 mt-1 block text-ink">Message us</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-5 border border-rule p-5">
                    <span className="t-eyebrow block pl-1 text-muted">Studio</span>
                    <span className="t-h3 text-ink">
                      {site.city}, {site.regionCode}
                    </span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>

          {/* What happens next */}
          <div className="mt-20 sm:mt-28">
            <Reveal variant="up">
              <h2 className="t-eyebrow text-muted">What happens next</h2>
              <div className="mt-5">
                <Rule color="var(--rule-strong)" className="max-w-[3.5rem]" />
              </div>
            </Reveal>
            <div className="mt-8">
              <div className="hair" />
              <Stagger gap={0.12} className="divide-y divide-rule">
                {NEXT_STEPS.map((step, i) => (
                  <StaggerItem key={i} as="div" className="flex items-baseline gap-5 py-6">
                    <span
                      className="t-eyebrow text-accent"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="t-body max-w-3xl text-lg text-ink-2">{step}</span>
                  </StaggerItem>
                ))}
              </Stagger>
              <div className="hair" />
            </div>

            <Reveal variant="fade">
              <p className="mt-8 t-body text-ink-2">
                {site.areasServedPhrase}.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
