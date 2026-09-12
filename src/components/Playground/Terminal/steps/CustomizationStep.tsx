"use client";

import * as React from "react";
import { usePlayground } from "../../index";
import { Button } from "@/components/ui/Button";
import { COMPONENT_LIBRARY } from "@/data/playground-map";

export function CustomizationStep() {
  const { capabilities, toggleCapability, nextStep, prevStep } = usePlayground();

  // Simplified customization: map components back to capabilities or just add to capabilities
  // For now, we'll let them toggle capabilities which update the architecture.

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground">CUSTOMIZE SYSTEM</h3>
        <p className="text-muted text-xs">Adjust capabilities to evolve the architecture.</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {Object.entries(COMPONENT_LIBRARY).map(([id, comp]) => {
          // Find which capability this component is associated with
          // In a real app, we'd have a cleaner reverse mapping
          return (
            <button
              key={id}
              className="p-2 rounded border border-border bg-surface text-[10px] text-left hover:border-accent transition-colors"
              onClick={() => {
                // This is a placeholder for more complex customization
                // For now, we'll just simulate a change
              }}
            >
              + {comp.label}
            </button>
          );
        })}
      </div>

      <div className="p-3 rounded bg-accent/10 border border-accent/20 text-[10px] text-accent italic">
        Note: Architecture updates in real-time as you toggle capabilities.
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" size="sm" onClick={prevStep} className="flex-1 font-mono text-xs">
          ← BACK
        </Button>
        <Button size="sm" onClick={nextStep} className="flex-1 font-mono text-xs">
          HARDEN FOR PRODUCTION →
        </Button>
      </div>
    </div>
  );
}
