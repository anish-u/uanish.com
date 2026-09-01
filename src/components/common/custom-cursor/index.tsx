"use client";

import { useEffect, useState } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

// Base dot diameter in pixels.
const DOT_SIZE = 16;

// Fixed scale the dot grows to when hovering an interactive element.
const HOVER_SCALE = 2.8;

// Selector for elements that should trigger the enlarged "hover" state.
const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, summary, label, [role=\"button\"], [data-cursor-interactive]";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw pointer position.
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring-smoothed position that the dot actually renders at.
  const springConfig = { damping: 30, stiffness: 350, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on precise pointers and when motion is allowed.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return;

    setEnabled(true);

    const moveCursor = (event: MouseEvent) => {
      // Offset by half the dot size so it centers on the pointer.
      mouseX.set(event.clientX - DOT_SIZE / 2);
      mouseY.set(event.clientY - DOT_SIZE / 2);

      // Detect whether the pointer is over an interactive element.
      const target = event.target as Element | null;
      setIsHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, width: DOT_SIZE, height: DOT_SIZE }}
      className="border-black-base bg-black-base dark:border-white-base dark:bg-white-base pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border"
      animate={{
        scale: isHovering ? HOVER_SCALE : 1,
        opacity: isHovering ? 0.4 : 1,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
    />
  );
}
