"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export function Reveal({ children, className, direction = "up", delay = 0 }: RevealProps) {
  const variants = {
    up: { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      initial={variants[direction].initial}
      whileInView={variants[direction].whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn("transition-all", className)}
    >
      {children}
    </motion.div>
  );
}
