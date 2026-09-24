import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PriceStrip } from "@/components/sections/shared/PriceStrip";
import { ProseSection } from "@/components/sections/shared/Prose";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { ogTags } from "@/lib/og";

export const metadata: Metadata = {
  title: "AI Automation Consulting", // pipe suffix lands under 60 chars
  description:
    "AI automation for Hamilton small businesses — booking, follow-ups, and repeated questions handled for you. Set up to run on its own.",
  alternates: { canonical: "/services/ai-automation/" },
  openGraph: ogTags({
    title: "AI Automation Consulting | Studio Nallan Web Design",
    description:
      "AI automation that gives small businesses their time back — booking, follow-ups, and the questions you answer five times a day.",
    url: `${site.domain}/services/ai-automation/`,
  }),
};

export default function AiAutomationPage() {
  return (
    <>
      <JsonLd
        data={{
          ...serviceSchema({
            serviceType: "AI Automation Consulting",
            url: `${site.domain}/services/ai-automation/`,
            description:
              "AI automation consulting for local businesses in Hamilton and Southern Ontario.",
          }),
          offers: {
            "@type": "Offer",
            priceCurrency: "CAD",
            price: "850",
            description: "AI Automation Consulting — starting at $850.",
          },
        }}
      />

      <PageHeader
        eyebrow="AI Automation · Hamilton & Southern Ontario"
        title="AI Automation Consulting for Local Businesses"
        intro="First, the outcome: the work that eats your evenings — answering the same questions, chasing bookings, copying details from one place to another — stops being yours. That's what AI automation is."
      />

      <PriceStrip price="From $850" note="Final quote after one conversation." />

      <section className="chapter-light">
        <div className="shell pb-4">
          <Reveal variant="up">
            <figure className="border border-rule-strong bg-paper-2">
              <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
                <Image
                  src="/services/ai-automation-consulting.jpg"
                  alt="AI automation consulting for local businesses"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <ProseSection title="What AI Automation Actually Looks Like for a Small Business">
        <p>
          You answer the same five questions every day. Automation answers them,
          correctly, at 2am, in the same words you'd use. A booking comes in, and
          the confirmation, the reminder, and the follow-up all go out without
          you touching them. A lead lands, and it gets a reply inside a minute —
          sorted, and in your inbox.
        </p>
        <p>
          This isn't a chatbot that frustrates people. It's the boring, reliable
          work that gives you your time back, set up by people who understand
          how your day actually runs.
        </p>
      </ProseSection>

      <ProseSection title="AI Automation in Hamilton & Southern Ontario">
        <p>
          We&apos;re based in Hamilton and work with companies across the
          globe. If you&apos;re searching for AI consulting in Hamilton,
          Ontario, or for AI services in Hamilton, we should tell you plainly
          what we&apos;re not: we don&apos;t sell you a tool and disappear.
        </p>
        <p>
          We look at how your business runs, find the two or three places where
          automation genuinely saves you time, and set them up so they keep
          going without a subscription you have to think about. Done well, it's
          invisible — your customers notice that you're fast and available, and
          you notice that your evenings are yours again.
        </p>
        <p>
          Because we also build your website, the automation is wired in from
          the start rather than bolted on later.
        </p>
        <p>
          As listed: smart automation added where it actually saves time —
          booking, follow-ups, and the questions you answer five times a day —
          scoped to your business, not sold as a generic bundle. It sits inside
          our{" "}
          <Link href="/services/marketing-consultant/" className="link-plain text-ink">
            Marketing Consultant
          </Link>{" "}
          offer, next to plain-language strategy. See{" "}
          <Link href="/services/" className="link-plain text-ink">
            all services
          </Link>
          .
        </p>
      </ProseSection>

      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
