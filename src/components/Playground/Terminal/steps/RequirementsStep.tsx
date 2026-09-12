"use client";

import * as React from "react";
import { usePlayground } from "../index";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const REQUIREMENTS = [
  { id: 'docs', label: 'Understand documents' },
  { id: 'code', label: 'Search code' },
  { id: 'qna', label: 'Answer questions' },
  { id: 'actions', label: 'Execute actions' },
  { id: 'memory', label: 'Remember users' },
  { id: 'external', label: 'Connect to external services' },
];

export function RequirementsStep() {
  const { idea, requirements, toggleRequirement, nextStep, prevStep } = usePlayground();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground">YOUR IDEA</h3>
        <p className="text-sm text-accent italic">"{idea}"</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted">What does it need to do?</h3>
        <div className="space-y-2">
          {REQUIREMENTS.map(req => (
            <label
              key={req.id}
              className={cn(
                "flex items-center gap-3 p-2 rounded border cursor-pointer transition-all text-xs",
                requirements.includes(req.id)
                  ? "bg-accent/10 border-accent text-foreground"
                  : "bg-transparent border-border text-muted hover:border-accent/50"
              )}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={requirements.includes(req.id)}
                onChange={() => toggleRequirement(req.id)}
              />
              <div className={cn(
                "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                requirements.includes(req.id) ? "bg-accent border-accent" : "border-border"
              )}>
                {requirements.includes(req.id) && <span className="text-white text-[10px]">✓</span>}
              </div>
              {req.label}
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" size="sm" onClick={prevStep} className="flex-1 font-mono text-xs">
          ← BACK
        </Button>
        <Button size="sm" onClick={nextStep} className="flex-1 font-mono text-xs">
          CONTINUE →
        </Button>
      </div>
    </div>
  );
}
