import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProseSection } from "@/components/sections/shared/Prose";
import { Testimonials } from "@/components/sections/shared/Testimonials";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { site } from "@/lib/site";
import { ogTags } from "@/lib/og";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hamilton web design studio co-founded by Nallan and Meena — 18 years of visual strategy plus architecture and interior design. Book a call.",
  alternates: { canonical: "/about" },
  openGraph: ogTags({
    title: "About | Studio Nallan Web Design",
    description:
      "Hamilton web design studio co-founded by Nallan and Meena — visual strategy meets architecture and interiors.",
    url: "/about",
  }),
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Two people, one studio, one standard."
        intro="Studio Nallan Web Design is a web design studio in Hamilton, Ontario, co-founded by Nallan and Meena. We build websites that look genuinely great and actually work — and we've yet to find a good reason to do one without the other."
      />

      <ProseSection title="Eighteen years of making things look right">
        <p>
          Nallan has spent eighteen years in visual communication and brand
          strategy — deciding how a business should look so that the right
          people trust it on first glance. That work taught a simple lesson:
          people decide how they feel about a business before they've read a
          single word, and a site that looks cheap costs them that decision.
        </p>
        <p>
          It also taught the boring half of the job. A page that looks beautiful
          and loads slowly, or that nobody can find, is a decoration. So the
          standard has always been both: it has to look right, and it has to
          work.
        </p>
      </ProseSection>

      <ProseSection title="Space, light, and what to leave out">
        <p>
          <strong>Meena</strong>, co-founder, is an architect and
          interior designer, and that training shows up on every page she
          touches. Proportion, light, the space between things, and the
          discipline to leave out what doesn&apos;t need to be there — which is
          most of what other sites are full of.
        </p>
        <p>
          It's why the work reads as calm rather than busy. Restraint is a
          design decision, not an absence of ideas.
        </p>
      </ProseSection>

      <ProseSection title="The standard we hold every site to">
        <p>
          Every site we build is one built-in package: a design that looks
          genuinely great, built fast, set up to rank on Google, set up so your
          business shows up when people ask ChatGPT or Google's AI for a
          recommendation, and wired with smart automation where it actually
          saves you time.
        </p>
        <p>
          Not a bundle. Not a menu of add-ons. Simply how we build.
        </p>
      </ProseSection>

      <ProseSection title="Hamilton roots, worldwide reach">
        <p>
          The studio is based in {site.city}, Ontario, and we work with
          companies across the globe — the same way we work with the business
          down the street. When something needs fixing, you&apos;re talking to
          the people who built the site, wherever you are.
        </p>
      </ProseSection>

      <Testimonials />
      <FinalCta index="—" eyebrow="Start" />
    </>
  );
}
