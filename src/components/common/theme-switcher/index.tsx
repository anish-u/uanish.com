"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        onClick={() => setTheme("light")}
        className="cursor-pointer"
        aria-label="Switch to light mode"
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        onClick={() => setTheme("dark")}
        className="cursor-pointer"
        aria-label="Switch to dark mode"
      />
    );
  }
}
