"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Inner image drifts slower than the frame — quiet depth on scroll.
 * The image is oversized 12% so edges never show.
 */
export function Parallax({
  children,
  className,
  amount = 0.09,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-amount * 100}%`, `${amount * 100}%`]
  );

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y, height: "100%", width: "100%" }}>
        <div style={{ transform: `scale(${1 + amount * 2})`, height: "100%", width: "100%" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
