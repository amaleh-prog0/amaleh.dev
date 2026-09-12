"use client";

import * as React from "react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { usePlayground } from "../index";

export function ArchitectureCanvas() {
  const { capabilities, isProductionReady } = usePlayground();

  return (
    <div className="w-full h-full bg-background rounded-xl border border-border overflow-hidden relative group">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20"
             style={{ backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="relative w-full h-full flex items-center justify-center p-8">
        <ArchitectureDiagram capabilities={capabilities} isProductionReady={isProductionReady} />
      </div>
    </div>
  );
}
