"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  visible: { opacity: 1, y: "0em", transition: { duration: 0.85, ease: EASE } },
};

/**
 * Headline that rises into place one word at a time.
 * Overflow is clipped so each word travels from a real mask edge.
 */
export function RevealHeadline({
  text,
  className,
  as = "h1",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.06em" }}
        >
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
