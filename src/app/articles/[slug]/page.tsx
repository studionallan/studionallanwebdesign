import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Rule } from "@/components/motion/Rule";
import { CTA } from "@/components/sections/shared/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { ARTICLES, articleHref } from "@/lib/articles";
import { ogTags } from "@/lib/og";
import { site } from "@/lib/site";
import { telHref } from "@/components/sections/shared/ContactIcons";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: { absolute: article.metaTitle },
    description: `${article.paragraphs[0].slice(0, 150)}…`,
    alternates: { canonical: articleHref(article.slug) },
    openGraph: ogTags({
      title: `${article.metaTitle}`,
      description: `${article.paragraphs[0].slice(0, 150)}…`,
      url: articleHref(article.slug),
    }),
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  // Preserve the author's original block order (paragraphs + bullet runs).
  const body = article.paragraphs.slice(1);
  const at = article.bulletsAfterBody ?? Number.POSITIVE_INFINITY;
  const ordered: ({ kind: "p"; text: string } | { kind: "b" })[] = [];
  if (article.bullets && at === -1) ordered.push({ kind: "b" });
  body.forEach((p, i) => {
    ordered.push({ kind: "p", text: p });
    if (article.bullets && at === i) ordered.push({ kind: "b" });
  });
  const bulletItems = (article.bullets ?? []).map((b) =>
    b.replace(/^[✅•]\s*/, "")
  );
  const articleBodyText = [
    article.paragraphs[0],
    ...ordered.flatMap((block) =>
      block.kind === "b" ? bulletItems : [block.text]
    ),
  ].join("\n\n");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          url: `${site.domain}${articleHref(article.slug)}`,
          datePublished: article.dateISO,
          image: `${site.domain}${article.image}`,
          author: {
            "@type": "Organization",
            name: site.name,
            url: site.domain,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.domain,
          },
          articleBody: articleBodyText,
        }}
      />

      <PageHeader
        eyebrow={`Articles · ${article.date}`}
        title={article.title}
        intro={article.paragraphs[0]}
      />

      <article className="chapter-light">
        <div className="shell pb-24">
          <Reveal variant="up" className="max-w-4xl">
            <figure className="border border-rule-strong bg-paper-2">
              <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="border-t border-rule px-4 py-3">
                <span className="t-eyebrow text-muted">
                  Placeholder image — to be replaced
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-12 grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <Reveal variant="up" className="lg:col-span-7">
              <div className="space-y-6 t-body text-lg text-ink-2">
                {ordered.map((block, i) =>
                  block.kind === "b" ? (
                    <ul key={i} className="space-y-4 border-y border-rule py-6">
                      {bulletItems.map((b, j) => (
                        <li key={j} className="flex items-baseline gap-4">
                          <span aria-hidden className="size-1.5 shrink-0 translate-y-[-2px] bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{block.text}</p>
                  )
                )}
              </div>

              <div className="mt-10">
                {article.cta === "call" ? (
                  <CTA label="Call now" href={telHref()} />
                ) : (
                  <CTA label="Learn more" href="/contact" />
                )}
              </div>

              <div className="mt-12">
                <Rule color="var(--rule-strong)" />
                <Link
                  href="/articles/"
                  className="link-plain t-eyebrow mt-6 inline-block text-muted hover:text-ink"
                >
                  ← All articles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </>
  );
}
