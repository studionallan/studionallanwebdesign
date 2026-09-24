"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import {
  PhoneIcon,
  SmsIcon,
  WhatsappIcon,
  smsHref,
  telHref,
  waHref,
} from "@/components/sections/shared/ContactIcons";

/**
 * Contact actions on mobile: call, text, and WhatsApp — one tap each.
 * Slides in after the hero, hides while the footer is on screen so it never
 * covers footer content. Desktop relies on the header icons instead.
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

  const inner = (
    <div className="grid grid-cols-3">
      <a
        href={telHref()}
        aria-label={`Call ${site.name} now`}
        className="flex items-center justify-center gap-2 bg-accent-bright py-4 text-ink-deep transition-colors duration-300 active:bg-accent"
      >
        <PhoneIcon size={15} />
        <span className="t-nav">Call</span>
      </a>
      <a
        href={smsHref()}
        aria-label={`Text ${site.name}`}
        className="flex items-center justify-center gap-2 border-l border-line-dark py-4 text-cream transition-colors duration-300 active:bg-cream/10"
      >
        <SmsIcon size={15} />
        <span className="t-nav">Text</span>
      </a>
      <a
        href={waHref()}
        aria-label={`WhatsApp ${site.name}`}
        className="flex items-center justify-center gap-2 border-l border-line-dark py-4 text-cream transition-colors duration-300 active:bg-cream/10"
      >
        <WhatsappIcon size={15} />
        <span className="t-nav">WhatsApp</span>
      </a>
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
