"use client";

import * as React from "react";
import { TerminalContainer } from "./Terminal/TerminalContainer";
import { ArchitectureCanvas } from "./Canvas/ArchitectureCanvas";
import { usePlayground } from "./index";

export function PlaygroundLayout() {
  const { currentStep } = usePlayground();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 h-[700px] w-full max-w-6xl mx-auto">
      {/* Terminal Side */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <TerminalContainer />
      </div>

      {/* Canvas Side */}
      <div className="lg:col-span-6 relative">
        <ArchitectureCanvas />

        {/* Step Indicator */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full border border-border bg-surface text-xs font-mono text-muted uppercase tracking-widest">
          Phase: {currentStep}
        </div>
      </div>
    </div>
  );
}
