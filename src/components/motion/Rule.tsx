"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VIEWPORT } from "@/lib/animations";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Hairline that draws itself as it enters the viewport.
 * scaleX keeps the stroke mathematically 1px tall.
 */
export function Rule({
  className,
  color = "var(--rule-strong)",
  duration = 1.05,
  origin = "left",
}: {
  className?: string;
  color?: string;
  duration?: number;
  origin?: "left" | "right";
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        aria-hidden
        className={className}
        style={{ height: 1, width: "100%", background: color }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      className={className}
      style={{ height: 1, width: "100%", background: color, originX: origin }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE }}
    />
  );
}
