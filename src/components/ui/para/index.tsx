"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

import { textAnimationVariants } from "@/utils/animation";

export type ParaProps = {
  children: React.ReactNode;
  index?: number;
};

export default function Para({ children, index = 0 }: ParaProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    amount: 0.25,
    margin: "0px 0px -10% 0px",
  });

  useLayoutEffect(() => {
    controls.set("hidden");
  }, [controls]);

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <motion.p
      animate={controls}
      variants={textAnimationVariants}
      ref={ref}
      custom={index}
    >
      {children}
    </motion.p>
  );
}
