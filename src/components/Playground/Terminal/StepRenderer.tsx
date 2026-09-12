"use client";

import * as React from "react";
import { usePlayground } from "../index";
import { IdeaStep } from "./steps/IdeaStep";
import { RequirementsStep } from "./steps/RequirementsStep";
import { CapabilitiesStep } from "./steps/CapabilitiesStep";
import { DecisionsStep } from "./steps/DecisionsStep";
import { CustomizationStep } from "./steps/CustomizationStep";
import { ProductionStep } from "./steps/ProductionStep";
import { OutputStep } from "./steps/OutputStep";

export function StepRenderer() {
  const { currentStep } = usePlayground();

  switch (currentStep) {
    case 'idea':
      return <IdeaStep />;
    case 'requirements':
      return <RequirementsStep />;
    case 'capabilities':
      return <CapabilitiesStep />;
    case 'architecture':
      return <div className="text-muted italic">Generating architecture... please wait.</div>; // Logic handled in index.tsx or via auto-advance
    case 'decisions':
      return <DecisionsStep />;
    case 'customization':
      return <CustomizationStep />;
    case 'production':
      return <ProductionStep />;
    case 'output':
      return <OutputStep />;
    default:
      return <IdeaStep />;
  }
}
