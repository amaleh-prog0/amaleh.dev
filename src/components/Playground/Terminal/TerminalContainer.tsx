"use client";

import * as React from "react";
import { StepRenderer } from "./StepRenderer";
import { cn } from "@/lib/utils";

export function TerminalContainer() {
  return (
    <div className="flex flex-col h-full bg-surface border border-border rounded-xl overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] font-mono text-muted uppercase tracking-tighter">
          system-design-studio v1.0.0
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-grow overflow-y-auto p-6 font-mono text-sm leading-relaxed">
        <div className="space-y-4">
          <div className="flex gap-2 text-accent">
            <span>$</span>
            <span className="text-foreground">init playground --mode interactive</span>
          </div>
          <div className="text-muted italic">
            Initializing design environment...
            <br />
            Loading architecture modules...
            <br />
            Ready.
          </div>
          <div className="pt-4">
            <StepRenderer />
          </div>
        </div>
      </div>
    </div>
  );
}
