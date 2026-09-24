"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.13, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

/**
 * Statement that illuminates word-by-word as you scroll through it.
 * Used once — the Problem chapter. Renders plain text under reduced motion
 * and on the server (progress defaults to full).
 */
export function ScrubWords({
  text,
  className,
  as = "p",
}: {
  text: string;
  className?: string;
  as?: "p" | "h2" | "h3";
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = text.split(" ");
  const Tag = as as "p";

  if (reduce) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
      {words.map((w, i) => (
        <Word
          key={`${w}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]}
        >
          {w}
        </Word>
      ))}
    </Tag>
  );
}
