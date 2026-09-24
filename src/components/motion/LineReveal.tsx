"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Display lines that rise out of a mask edge, staggered.
 * `mode="load"` plays on mount (hero); `mode="scroll"` plays on in-view.
 */
export function LineReveal({
  lines,
  mode = "scroll",
  className,
  delay = 0,
  gap = 0.1,
  as = "div",
}: {
  lines: ReactNode[];
  mode?: "load" | "scroll";
  className?: string;
  delay?: number;
  gap?: number;
  as?: "div" | "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  if (reduce) {
    const Plain = as as "div";
    return (
      <Plain className={className}>
        {lines.map((line, i) => (
          <span key={i} className="mask-line">
            {line}
          </span>
        ))}
      </Plain>
    );
  }

  const trigger =
    mode === "load"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-10% 0px -10% 0px" },
        };

  return (
    <Tag
      className={className}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      {...trigger}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          className="mask-line"
          /* Roomy mask so descenders (g, y) are never clipped;
             negative margins keep the static layout identical. */
          style={{ padding: "0.12em 0 0.28em", margin: "-0.12em 0 -0.28em" }}
        >  <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "112%" },
              visible: { y: "0%", transition: { duration: 1.05, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
