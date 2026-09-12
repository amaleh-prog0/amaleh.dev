"use client";

import * as React from "react";
import { usePlayground } from "../index";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ProductionStep() {
  const { isProductionReady, setProductionReady, nextStep, prevStep } = usePlayground();

  const metrics = [
    { label: 'Reliability', value: isProductionReady ? 5 : 2 },
    { label: 'Scalability', value: isProductionReady ? 5 : 3 },
    { label: 'Observability', value: isProductionReady ? 5 : 1 },
    { label: 'Security', value: isProductionReady ? 5 : 2 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground">PRODUCTION HARDENING</h3>
        <p className="text-muted text-xs">Transition from prototype to enterprise-grade system.</p>
      </div>

      <div className="p-4 rounded-xl border border-border bg-surface space-y-6">
        <div className="text-center text-xs font-bold uppercase tracking-widest text-muted mb-4">
          System Maturity
        </div>
        <div className="space-y-4">
          {metrics.map(m => (
            <div key={m.label} className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono uppercase">
                <span>{m.label}</span>
                <span>{m.value}/5</span>
              </div>
              <div className="h-1 w-full bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-1000"
                  style={{ width: `${(m.value / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={() => setProductionReady(!isProductionReady)}
        className={cn(
          "w-full font-mono text-xs py-6 transition-all",
          isProductionReady ? "bg-green-500 text-white" : "bg-accent text-white"
        )}
      >
        {isProductionReady ? "✓ PRODUCTION READY" : "MAKE PRODUCTION-READY →"}
      </Button>

      <div className="flex gap-3">
        <Button variant="ghost" size="sm" onClick={prevStep} className="flex-1 font-mono text-xs">
          ← BACK
        </Button>
        <Button size="sm" onClick={nextStep} className="flex-1 font-mono text-xs">
          VIEW FINAL SYSTEM →
        </Button>
      </div>
    </div>
  );
}
