"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const toggleTheme = () => {
    const themes = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme || "system");
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <motion.div whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <Button
        variant="ghost"
        size="sm"
        className="w-9 h-9 p-0 overflow-hidden relative"
        onClick={toggleTheme}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={theme}
            initial={{ y: 10, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center text-lg"
          >
            {theme === "dark" ? "☀️" : theme === "light" ? "🌙" : "🌓"}
          </motion.span>
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}
