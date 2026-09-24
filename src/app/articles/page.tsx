import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { JsonLd } from "@/components/seo/JsonLd";
import { ARTICLES, articleHref } from "@/lib/articles";
import { ogTags } from "@/lib/og";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Notes from Studio Nallan Web Design — web design, local SEO, and AI automation for ambitious local businesses. Read the latest.",
  alternates: { canonical: "/articles/" },
  openGraph: ogTags({
    title: "Articles | Studio Nallan Web Design",
    description:
      "Notes from the studio — web design, local SEO, and AI automation. Read the latest.",
    url: "/articles/",
  }),
};

export default function ArticlesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Studio Nallan Web Design Articles",
          url: `${site.domain}/articles/`,
          blogPost: ARTICLES.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            url: `${site.domain}${articleHref(a.slug)}`,
            datePublished: a.dateISO,
          })),
        }}
      />

      <PageHeader
        eyebrow="Articles"
        title="Notes from the studio."
        intro="What we're building, seeing, and thinking — written the same way we talk on a call."
      />

      <section className="chapter-light">
        <div className="shell pb-24 sm:pb-32">
          <div className="hair" />
          <Stagger gap={0.1} className="divide-y divide-rule">
            {ARTICLES.map((a, i) => (
              <StaggerItem key={a.slug} as="div">
                <Link
                  href={articleHref(a.slug)}
                  className="group grid gap-6 py-10 sm:grid-cols-12 sm:gap-10"
                >
                  <span
                    className="t-eyebrow text-accent sm:col-span-1 sm:pt-2"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(ARTICLES.length - i).padStart(2, "0")}
                  </span>
                  <span className="relative block overflow-hidden border border-rule-strong bg-paper-2 sm:col-span-4" style={{ aspectRatio: "4 / 3" }}>
                    <Image
                      src={a.image}
                      alt={a.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 35vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </span>
                  <span className="sm:col-span-7">
                    <span className="t-eyebrow text-muted">{a.date}</span>
                    <span className="t-h3 mt-3 block text-ink transition-transform duration-500 group-hover:translate-x-2">
                      {a.title}
                    </span>
                    <span className="t-body mt-3 block text-ink-2">
                      {a.paragraphs[0].split(". ")[0]}.
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="hair" />
        </div>
      </section>
    </>
  );
}
