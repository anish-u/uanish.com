"use client";

import { motion } from "framer-motion";

type TagBadgeProps = {
  label: string;
  index: number;
  active?: boolean;
  count?: number;
  onClick?: () => void;
};

export default function TagBadge({
  label,
  active = false,
  count,
  onClick,
  index,
}: TagBadgeProps) {
  return (
    <motion.button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={[
        // layout
        "inset-ring-grey-base/10 inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium inset-ring transition",
        // base (inactive)
        !active &&
          "text-black-base dark:text-black-base bg-grey-base/40 dark:bg-white-base/90 hover:bg-grey-base/50 dark:hover:bg-white-base",
        // active state (inverted)
        active &&
          "bg-black-base text-white-base dark:bg-white-base/25 dark:text-white-base",
        // focus
        "focus-visible:ring-black-base/30 dark:focus-visible:ring-white-base/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
      ]
        .filter(Boolean)
        .join(" ")}
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
        delay: 0.05 * (index - 1),
      }}
    >
      <span className="font-serif leading-none">{label}</span>
      {typeof count === "number" && (
        <span
          className={[
            "rounded-md px-2 py-0.5 text-[10px] leading-none",
            active
              ? "bg-white-base/20 text-white-base"
              : "bg-black-base/10 text-black-base dark:bg-black-base/10 dark:text-black-base",
          ].join(" ")}
        >
          {count}
        </span>
      )}
    </motion.button>
  );
}
