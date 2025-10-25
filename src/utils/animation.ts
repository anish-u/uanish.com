import { Variants } from "framer-motion";

export const cardAnimationVariants: Variants = {
  hidden: { opacity: 0, x: -25 },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeInOut", delay: i * 0.075 },
  }),
};

export const headingAnimationVariants: Variants = {
  hidden: { opacity: 0, x: -25 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

export const textAnimationVariants: Variants = {
  hidden: { opacity: 0, x: -25 },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeInOut", delay: i * 0.075 },
  }),
};
