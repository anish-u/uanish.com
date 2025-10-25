"use client";

import { useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

import { headingAnimationVariants } from "@/utils/animation";

export type HeadingProps = {
  type: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Heading({ type, children }: HeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    amount: 0.25,
    margin: "0px 0px -25px 0px",
  });

  useEffect(() => {
    controls.set("hidden");
  }, [controls]);

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <motion.h1
      className={`after:bg-grey-base mt-14 mb-10 h-fit text-center font-serif leading-11 font-bold text-wrap after:mx-auto after:mt-2 after:block after:h-0.5 after:w-16 after:content-[''] ${
        type === "primary" ? "text-4xl" : "text-3xl"
      }`}
      animate={controls}
      variants={headingAnimationVariants}
      ref={ref}
    >
      {children}
    </motion.h1>
  );
}
