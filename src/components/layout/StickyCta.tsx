"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * Fastest path to contact on mobile: one tap to call, one tap to enquire.
 * Slides in after the hero, hides while the footer is on screen so it never
 * covers footer content. Desktop relies on the header phone link instead.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const past = () => window.scrollY > 560;
    const onScroll = () => setShow(past());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.querySelector("footer");
    let observer: IntersectionObserver | null = null;
    if (footer) {
      observer = new IntersectionObserver(
        ([entry]) => setShow(!entry.isIntersecting && past()),
        { threshold: 0.06 }
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const tel = `tel:${site.phone.replace(/[^+\d]/g, "")}`;

  const inner = (
    <div className="grid grid-cols-2">
      <a
        href={tel}
          aria-label={`Call ${site.name} now`}
        className="flex items-center justify-center gap-2.5 bg-accent-bright py-4 text-ink-deep transition-colors duration-300 active:bg-accent"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="t-nav">Call now</span>
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2.5 border-l border-line-dark py-4 text-cream transition-colors duration-300 active:bg-cream/10"
      >
        <span className="t-nav">Book a call</span>
      </Link>
    </div>
  );

  const shell =
    "fixed inset-x-0 bottom-0 z-50 border-t border-line-dark bg-ink-deep/95 backdrop-blur-md md:hidden";

  if (reduce) {
    if (!show) return null;
    return (
      <div className={shell} style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      initial={false}
      animate={{ y: show ? "0%" : "110%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={shell}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {inner}
    </motion.div>
  );
}
