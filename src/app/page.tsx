import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { Problem } from "@/components/sections/home/Problem";
import { Claim } from "@/components/sections/home/Claim";
import { Proof } from "@/components/sections/shared/Proof";
import { Testimonials } from "@/components/sections/shared/Testimonials";
import { HowItsBuilt } from "@/components/sections/home/HowItsBuilt";
import { LocalProof } from "@/components/sections/home/LocalProof";
import { Faq } from "@/components/sections/shared/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { ogTags } from "@/lib/og";

const HOME_TITLE = "Hamilton Web Design, SEO, AI | Studio Nallan Web Design";
const HOME_DESC =
  "Custom web design, local SEO, and AI automation built in Hamilton, ON. High-converting websites for local businesses and global brands.";

export const metadata: Metadata = {
  // absolute: emits the title byte-for-byte, no template suffix
  title: { absolute: HOME_TITLE },
  description: HOME_DESC,
  alternates: { canonical: "/" },
  openGraph: ogTags({
    title: HOME_TITLE,
    description: HOME_DESC,
    url: "/",
  }),
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Claim />
      <Proof />
      <Testimonials
        dark
        eyebrow="Reviews"
        title={
          <>
            What clients <em className="t-serif-i">say.</em>
          </>
        }
      />
      <HowItsBuilt />
      <LocalProof />
      <Faq />
      <FinalCta />
    </>
  );
}
