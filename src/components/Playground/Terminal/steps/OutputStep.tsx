"use client";

import * as React from "react";
import { usePlayground } from "../index";
import { Button } from "@/components/ui/Button";

export function OutputStep() {
  const { idea, capabilities, isProductionReady, prevStep } = usePlayground();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground">YOUR SYSTEM</h3>
        <p className="text-sm text-accent italic">"{idea}"</p>
      </div>

      <div className="p-4 rounded-lg border border-border bg-surface font-mono text-[11px] space-y-4">
        <div className="space-y-2">
          <div className="text-muted uppercase text-[10px] font-bold">Architecture Summary</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="text-muted">Frontend:</div><div className="text-foreground">Next.js</div>
            <div className="text-muted">API:</div><div className="text-foreground">FastAPI</div>
            <div className="text-muted">Intelligence:</div><div className="text-foreground">{capabilities.length > 0 ? capabilities.join(', ') : 'LLM'}</div>
            <div className="text-muted">Infrastructure:</div><div className="text-foreground">{isProductionReady ? 'Enterprise Grade' : 'Prototype'}</div>
          </div>
        </div>

        <div className="pt-4 border-t border-border space-y-2">
          <div className="text-muted uppercase text-[10px] font-bold">Design Characteristics</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="text-muted">Complexity:</div><div className="text-foreground">Moderate</div>
            <div className="text-muted">Scalability:</div><div className="text-foreground">{isProductionReady ? 'High' : 'Moderate'}</div>
            <div className="text-muted">AI Dependency:</div><div className="text-foreground">High</div>
            <div className="text-muted">Operational Cost:</div><div className="text-foreground">{isProductionReady ? 'Moderate' : 'Low'}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button size="sm" className="w-full font-mono text-xs">
          EXPORT ARCHITECTURE
        </Button>
        <Button variant="ghost" size="sm" onClick={() => window.location.reload()} className="w-full font-mono text-xs">
          BUILD ANOTHER
        </Button>
      </div>

      <Button variant="ghost" size="sm" onClick={prevStep} className="w-full font-mono text-xs opacity-50">
        ← BACK
      </Button>
    </div>
  );
}
