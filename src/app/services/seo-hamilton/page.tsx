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
  title: { absolute: "SEO Services in Hamilton | Studio Nallan Web Design" },
  description:
    "SEO is how your business shows up when someone searches for what you do. Built into every Hamilton website — Google rankings and AI search visibility.",
  alternates: { canonical: "/services/seo-hamilton/" },
  openGraph: ogTags({
    title: "SEO Services in Hamilton | Studio Nallan Web Design",
    description:
      "Local SEO that actually gets Hamilton businesses found — on Google and by AI search.",
    url: `${site.domain}/services/seo-hamilton/`,
  }),
};

export default function SeoHamiltonPage() {
  return (
    <>
      <JsonLd
        data={{
          ...serviceSchema({
            serviceType: "SEO",
            url: `${site.domain}/services/seo-hamilton/`,
            description:
              "Local SEO services for Hamilton businesses — showing up on Google and in AI search results.",
          }),
          offers: {
            "@type": "Offer",
            priceCurrency: "CAD",
            price: "650",
            description: "Local SEO — starting at $650/mo (range $650–$1,500/mo).",
          },
        }}
      />

      <PageHeader
        eyebrow="SEO · Hamilton, Ontario"
        title="SEO Services in Hamilton, Ontario"
        intro="SEO is how your business shows up when someone searches for what you do. Without it, competitors with weaker work show up first — and you get whatever's left."
      />

      <PriceStrip price="From $650/mo" note="Range $650–$1,500/mo depending on scope." />

      <section className="chapter-light">
        <div className="shell pb-4">
          <Reveal variant="up">
            <figure className="border border-rule-strong bg-paper-2">
              <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
                <Image
                  src="/services/local-seo.jpg"
                  alt="Local SEO for Hamilton businesses"
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

      <ProseSection title="Hamilton SEO Company">
        <p>
          Studio Nallan Web Design is a Hamilton SEO company, but we should be plain about
          something first. We don't sell SEO as a separate service. We build it
          into every website we make, because a website that can't be found
          isn't finished yet.
        </p>
        <p>
          If you've looked for Hamilton SEO services, you've heard the same
          thing a hundred ways — more keywords, more content, more monthly
          invoices. Most of it is noise. What actually moves a local business:
          clean pages that load fast, the right words in the right places, and a
          site that Google and the AI search tools can read without guessing.
        </p>
      </ProseSection>

      <ProseSection title="Local SEO That Actually Gets You Found">
        <p>
          Local SEO means showing up in the moment that matters: someone in
          Hamilton, Burlington, or Oakville pulls out their phone and searches
          for what you do. That's the whole job. We put your business in front
          of them on Google, and we set the site up so your business shows up
          when people ask ChatGPT or Google's AI for a recommendation — because
          that's how a lot of people search now.
        </p>
        <p>
          The businesses winning those searches aren't luckier than you. They
          just have pages that say clearly what they do and where they do it, in
          a form the search tools can read.
        </p>
        <p>
          On this site, Local SEO means exactly that: on-page and technical SEO
          built into the site itself — the right structure, content, and local
          signals so you show up when nearby customers search for what you do.
          It sits inside our{" "}
          <Link href="/services/internet-marketing/" className="link-plain text-ink">
            Internet Marketing Service
          </Link>
          , alongside AI search, your Google listing, and the words on the page.
          See{" "}
          <Link href="/services/" className="link-plain text-ink">
            all services
          </Link>
          .
        </p>
      </ProseSection>

      <ProseSection title="What a Hamilton SEO Expert Actually Does">
        <p>
          Someone doing this well looks at your business, looks at your
          competitors, and tells you plainly where your customers are going
          instead of you. Then they fix it. We look at the search results
          you're actually competing in, build or rebuild the pages that should
          be winning them, and keep watch as Google and the AI tools change
          what they recommend.
        </p>
        <p>
          Because we build your website too, the work isn't bolted on
          afterwards. It's part of the same thing.
        </p>
        <p>
          If you searched “SEO Hamilton” or “SEO in Hamilton” to get here, you
          shouldn't need ten pages of jargon to know what you'd be buying. So,
          plainly: we make sure your business shows up when people nearby look
          for what you do, and we'll show you what that looks like before you
          commit.
        </p>
      </ProseSection>

      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
