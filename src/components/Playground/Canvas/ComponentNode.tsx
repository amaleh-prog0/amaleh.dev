"use client";

import * as React from "react";
import { Component } from "@/data/playground-map";
import { cn } from "@/lib/utils";

export function ComponentNode({ component }: { component: Component }) {
  const typeColors: Record<string, string> = {
    frontend: 'border-blue-500 text-blue-500 bg-blue-500/5',
    api: 'border-green-500 text-green-500 bg-green-500/5',
    db: 'border-orange-500 text-orange-500 bg-orange-500/5',
    cache: 'border-yellow-500 text-yellow-500 bg-yellow-500/5',
    ai: 'border-purple-500 text-purple-500 bg-purple-500/5',
    infra: 'border-slate-500 text-slate-500 bg-slate-500/5',
    observability: 'border-red-500 text-red-500 bg-red-500/5',
  };

  return (
    <div className={cn(
      "px-3 py-2 rounded-lg border-2 bg-surface shadow-sm backdrop-blur-sm transition-all hover:scale-110 cursor-default",
      typeColors[component.type] || 'border-border'
    )}>
      <div className="text-[11px] font-bold uppercase tracking-tighter">{component.label}</div>
      <div className="hidden group-hover:block absolute top-full left-0 mt-2 p-2 rounded bg-surface border border-border text-[10px] text-muted w-40 z-50">
        {component.description}
      </div>
    </div>
  );
}
