"use client";

import * as React from "react";
import { usePlayground } from "../index";
import { Button } from "@/components/ui/Button";
import { CAPABILITY_MAP } from "@/data/playground-map";

export function DecisionsStep() {
  const { capabilities, nextStep, prevStep } = usePlayground();

  const decisions = capabilities
    .map(cap => CAPABILITY_MAP[cap as keyof typeof CAPABILITY_MAP]?.decision)
    .filter(Boolean);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground">ARCHITECTURE DECISIONS</h3>
        <p className="text-muted text-xs">Why these components? Engineering trade-offs explained.</p>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {decisions.map((d, idx) => (
          <div key={idx} className="p-3 rounded-lg border border-border bg-surface/50 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-accent font-mono text-[10px]">0{idx + 1}</span>
              <h4 className="text-xs font-bold text-foreground">{d.component}</h4>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {d.reason}
            </p>
            <div className="pt-2 border-t border-border/50">
              <div className="text-[10px] font-bold text-accent uppercase mb-1">Why not {d.alternative}?</div>
              <p className="text-[11px] text-muted italic">
                {d.whyNotAlternative}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" size="sm" onClick={prevStep} className="flex-1 font-mono text-xs">
          ← BACK
        </Button>
        <Button size="sm" onClick={nextStep} className="flex-1 font-mono text-xs">
          CUSTOMIZE SYSTEM →
        </Button>
      </div>
    </div>
  );
}
