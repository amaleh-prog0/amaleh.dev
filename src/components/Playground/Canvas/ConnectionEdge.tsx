"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface EdgeProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  isAccent?: boolean;
}

export function ConnectionEdge({ from, to, isAccent }: EdgeProps) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: -1 }}>
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
        stroke={isAccent ? "var(--accent)" : "var(--border)"}
        strokeWidth="2"
        fill="none"
        markerEnd={isAccent ? "url(#arrowhead-accent)" : "url(#arrowhead)"}
        className="transition-colors duration-500"
      />
      {/* Data flow animation */}
      <motion.path
        d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
        stroke="var(--accent)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 12"
        animate={{
          strokeDashoffset: [0, -16],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        style={{ opacity: 0.6 }}
      />
    </svg>
  );
}
