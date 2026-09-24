"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";
import { VIEWPORT } from "@/lib/animations";

const EASE = [0.16, 1, 0.3, 1] as const;

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
  },
  left: {
    hidden: { opacity: 0, x: -26 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
  },
  right: {
    hidden: { opacity: 0, x: 26 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
  },
};

type RevealProps = Omit<HTMLMotionProps<"div">, "ref" | "children"> & {
  children?: ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
};

/**
 * Scroll-triggered fade / slide. Subtle by design — opacity plus a small
 * translate, expo-out easing, plays once. Reduced motion renders in place.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div {...(rest as Record<string, unknown>)}>{children}</div>
    );
  }

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
