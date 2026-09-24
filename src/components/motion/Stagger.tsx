"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { VIEWPORT } from "@/lib/animations";

const EASE = [0.16, 1, 0.3, 1] as const;

export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.085, delayChildren: 0.04 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Parent. Reveals children in sequence as the block enters the viewport. */
export function Stagger({
  children,
  className,
  gap = 0.085,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap, delayChildren: 0.04 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

/** Child of <Stagger>. */
export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "p" | "span";
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
