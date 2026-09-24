import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProseSection, PlainList } from "@/components/sections/shared/Prose";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { ogTags } from "@/lib/og";
import { SERVICES } from "@/lib/services";

function ServiceIndex({ items }: { items: [string, string, string][] }) {
  return (
    <div className="mt-8 border-y border-rule">
      <div className="divide-y divide-rule">
        {items.map(([name, href, line]) => {
          const price = SERVICES.find((s) => s.href === href)?.price;
          return (
            <div key={href} className="flex items-baseline justify-between gap-4 py-5">
              <span className="flex items-baseline gap-4">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-accent" />
                <span>
                  <Link href={href} className="link-plain font-semibold text-ink">
                    {name}
                  </Link>
                  <span className="text-ink-2"> — {line}</span>
                </span>
              </span>
              {price && (
                <span className="t-eyebrow shrink-0 text-accent">{price}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Web Design in Hamilton, Ontario", // 47 chars incl. pipe suffix
  description:
    "A Hamilton web design studio building sites that look great and bring in customers — fast, found on Google and by AI search. Book a call.",
  alternates: { canonical: "/locations/hamilton-web-design/" },
  openGraph: ogTags({
    title: "Web Design in Hamilton, Ontario | Studio Nallan Web Design",
    description:
      "Hamilton web design that looks great and actually works — found on Google and by AI search.",
    url: `${site.domain}/locations/hamilton-web-design/`,
  }),
};

const INCLUDED = [
  "A design that looks genuinely great, so customers trust you the moment the page loads.",
  "Pages set up to rank on Google, so you show up when someone nearby searches for what you do.",
  "Pages set up so your business shows up when people ask ChatGPT or Google's AI for a recommendation.",
  "Smart automation where it actually saves you time — booking, follow-ups, and the questions you answer five times a day.",
  "A site built in weeks, not months, that stays fast and stays found.",
];

export default function HamiltonWebDesignPage() {
  return (
    <>
      <JsonLd
        data={{
          ...serviceSchema({
            serviceType: "Web Design",
            url: `${site.domain}/locations/hamilton-web-design/`,
            description:
              "Web design for Hamilton businesses — websites that look genuinely great and are set up to be found on Google and by AI search.",
          }),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web design services",
            itemListElement: [
              { name: "Custom Website Design", price: "2500" },
              { name: "Website Redesign", price: "1000" },
              { name: "Landing Page Design", price: "750" },
              { name: "Website Maintenance & Hosting", price: "175" },
              { name: "E-Commerce Website Design", price: "5000" },
            ].map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o.name },
              priceCurrency: "CAD",
              price: o.price,
            })),
          },
        }}
      />

      <PageHeader
        eyebrow="Web Design · Hamilton, Ontario"
        title="Web Design in Hamilton, Ontario"
        intro="Looking for a web design company in Hamilton? Here's what we'd want you to know before you call anyone — including us: a website should look great and actually bring in customers. You shouldn't have to pick one."
      />

      <ProseSection title="Hamilton Web Design Company">
        <p>
          Studio Nallan Web Design is a Hamilton web design studio built on one idea: your
          website should be the best one your business ever has. Not the most
          complicated, and not the most expensive — the best. It looks right,
          loads fast, and brings in customers instead of just sitting there.
        </p>
        <p>
          Most people who call us have the same problem: a website that looks
          dated and amateurish, or one that looks fine but nobody can find. Web
          design in Hamilton shouldn't force you to choose between looking good
          and being found — we do both in the same build, because that's what
          “best” means.
        </p>
      </ProseSection>

      <ProseSection title="Website Design Built for Hamilton Businesses">
        <p>
          Every site we build comes with what makes a website work — built in,
          not sold on:
        </p>
        <PlainList items={INCLUDED} />
        <p>None of it is a separate package. It's simply how we build.</p>
      </ProseSection>

      <ProseSection title="Five Services, One Standard">
        <p>
          Web design here isn&apos;t one thing. These are the five services
          every build draws on — each with its own page going into detail.
          Start with the{" "}
          <Link href="/services/" className="link-plain text-ink">
            full services list
          </Link>
          , or jump straight in:
        </p>
        <ServiceIndex
          items={[
            ["Custom Website Design", "/services/custom-website-design/", "Ground-up builds, never templates."],
            ["Website Redesign", "/services/website-redesign/", "Keep what works, fix what's costing you."],
            ["Landing Page Design", "/services/landing-page-design/", "Focused pages, live in days."],
            ["Website Maintenance & Hosting", "/services/website-maintenance-hosting/", "Cared for after launch."],
            ["E-Commerce Website Design", "/services/ecommerce-website-design/", "Stores built to sell."],
          ]}
        />
      </ProseSection>

      <ProseSection title="Your Hamilton Web Designer, From First Call to Launch">
        <p>
          When you hire a Hamilton web designer, you should know exactly what
          you're getting. First, we look at your business and your competitors
          online, and we tell you what we find in plain language. Then we design
          and build a site that looks great and is set up to be found — by
          Google, and by the AI search tools people use now. Then it goes live,
          and you keep looking sharp as things change.
        </p>
        <p>
          Nallan has eighteen years in visual communication and brand strategy,
          and Meena, co-founder, brings an architecture and interior design
          background. The studio is based in Hamilton — you&apos;re welcome to
          see the work before you talk to us.
        </p>
      </ProseSection>

      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
