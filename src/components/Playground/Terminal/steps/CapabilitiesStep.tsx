"use client";

import * as React from "react";
import { usePlayground } from "../index";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CAPABILITY_MAP } from "@/data/playground-map";

const CAPABILITY_GROUPS = {
  Knowledge: ['rag', 'vector-search'],
  AI: ['llm', 'structured-outputs', 'multi-agent'],
  Actions: ['tool-calling', 'github', 'apis'],
  State: ['short-term-memory', 'long-term-memory'],
  Reliability: ['evaluation', 'retry-logic', 'human-approval'],
};

const CAPABILITY_LABELS: Record<string, string> = {
  'rag': 'RAG',
  'vector-search': 'Vector Search',
  'llm': 'LLM',
  'structured-outputs': 'Structured Outputs',
  'multi-agent': 'Multi-agent reasoning',
  'tool-calling': 'Tool Calling',
  'github': 'GitHub',
  'apis': 'External APIs',
  'short-term-memory': 'Short-term Memory',
  'long-term-memory': 'Long-term Memory',
  'evaluation': 'Evaluation',
  'retry-logic': 'Retry Logic',
  'human-approval': 'Human Approval',
};

export function CapabilitiesStep() {
  const { capabilities, toggleCapability, nextStep, prevStep } = usePlayground();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground">CAPABILITIES</h3>
        <p className="text-muted text-xs">Select the building blocks your system requires.</p>
      </div>

      <div className="space-y-6">
        {Object.entries(CAPABILITY_GROUPS).map(([group, caps]) => (
          <div key={group} className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-widest text-accent font-bold">{group}</h4>
            <div className="flex flex-wrap gap-2">
              {caps.map(cap => (
                <button
                  key={cap}
                  onClick={() => toggleCapability(cap)}
                  className={cn(
                    "px-2 py-1 rounded border text-[10px] transition-all",
                    capabilities.includes(cap)
                      ? "bg-accent text-white border-accent"
                      : "bg-transparent border-border text-muted hover:border-accent"
                  )}
                >
                  {CAPABILITY_LABELS[cap]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" size="sm" onClick={prevStep} className="flex-1 font-mono text-xs">
          ← BACK
        </Button>
        <Button size="sm" onClick={nextStep} className="flex-1 font-mono text-xs">
          GENERATE ARCHITECTURE →
        </Button>
      </div>
    </div>
  );
}
