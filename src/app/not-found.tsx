import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist — but a great website does. Back to Studio Nallan Web Design.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="chapter-dark glow">
      <div className="shell flex min-h-[70svh] flex-col justify-center py-28">
        <p className="t-eyebrow text-accent-bright">404</p>
        <h1 className="t-display mt-8 max-w-[14ch] text-cream">
          This page <em className="t-serif-i">doesn&apos;t exist.</em>
        </h1>
        <p className="t-lede mt-8 max-w-xl text-cream-dim">
          Wrong turn. The good news: the best website your business will ever
          have is one click away.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="group inline-flex items-center justify-between gap-10 bg-cream px-7 py-5 text-ink transition-colors duration-300 hover:bg-accent-bright"
          >
            <span className="t-eyebrow">Back home</span>
          </Link>
          <Link
            href="/contact"
            className="link-plain t-eyebrow text-cream-dim transition-colors hover:text-cream"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
