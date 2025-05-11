"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) {
    return (
      <span
        className="inline-flex items-center justify-center"
        style={{ width: 18, height: 18 }}
        aria-hidden="true"
      >
        <FiSun className="opacity-0" size={18} />
      </span>
    );
  }

  return resolvedTheme === "dark" ? (
    <FiSun
      onClick={() => setTheme("light")}
      className="cursor-pointer transition-opacity duration-200"
      size={18}
      aria-label="Switch to light mode"
    />
  ) : (
    <FiMoon
      onClick={() => setTheme("dark")}
      className="cursor-pointer transition-opacity duration-200"
      size={18}
      aria-label="Switch to dark mode"
    />
  );
}
