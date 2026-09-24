import type { Variants } from "framer-motion";

/** Subtle only. Expo-out easing, slow settle, once-per-element. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -26 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 26 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const growX: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.05, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Per-word stagger — used on the hero headline only. */
export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.12 },
  },
};

export const wordItem: Variants = {
  hidden: { opacity: 0, y: "0.55em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.8, ease: EASE },
  },
};

export const VIEWPORT = { once: true, margin: "-12% 0px -12% 0px" } as const;
