"use client";

import * as React from "react";
import { usePlayground } from "../../index";
import { Button } from "@/components/ui/Button";

export function IdeaStep() {
  const { idea, setIdea, nextStep } = usePlayground();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground">BUILD SOMETHING</h3>
        <p className="text-muted text-xs">Start with an idea. We'll turn it into a system.</p>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] uppercase tracking-widest text-muted">What do you want to build?</label>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="e.g. AI research assistant for large codebases..."
          className="w-full h-32 p-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors resize-none font-mono text-sm"
        />
      </div>

      <div className="space-y-4">
        <div className="text-[10px] text-muted uppercase tracking-widest">Examples</div>
        <div className="grid grid-cols-1 gap-2">
          {['AI research assistant', 'Customer support agent', 'Code review system', 'Data analytics platform'].map(ex => (
            <button
              key={ex}
              onClick={() => setIdea(ex)}
              className="text-left text-xs p-2 rounded border border-border hover:border-accent hover:bg-accent/5 transition-all text-muted hover:text-foreground"
            >
              • {ex}
            </button>
          ))}
        </div>
      </div>

      <Button
        disabled={!idea.trim()}
        onClick={nextStep}
        className="w-full font-mono text-xs"
      >
        START BUILDING →
      </Button>
    </div>
  );
}
