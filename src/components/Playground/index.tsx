"use client";

import * as React from "react";
import { createContext, useContext, useState } from "react";
import { PlaygroundLayout } from "./PlaygroundLayout";
import { Step } from "@/data/playground-map"; // I'll need to export Step from map.ts or define here

type PlaygroundStep = 'idea' | 'requirements' | 'capabilities' | 'architecture' | 'decisions' | 'customization' | 'production' | 'output';

interface PlaygroundState {
  currentStep: PlaygroundStep;
  idea: string;
  requirements: string[];
  capabilities: string[];
  isProductionReady: boolean;
}

interface PlaygroundContextType extends PlaygroundState {
  setStep: (step: PlaygroundStep) => void;
  setIdea: (idea: string) => void;
  toggleRequirement: (req: string) => void;
  toggleCapability: (cap: string) => void;
  setProductionReady: (ready: boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const PlaygroundContext = createContext<PlaygroundContextType | undefined>(undefined);

export function PlaygroundProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PlaygroundState>({
    currentStep: 'idea',
    idea: '',
    requirements: [],
    capabilities: [],
    isProductionReady: false,
  });

  const setStep = (step: PlaygroundStep) => setState(prev => ({ ...prev, currentStep: step }));
  const setIdea = (idea: string) => setState(prev => ({ ...prev, idea }));
  const toggleRequirement = (req: string) => setState(prev => ({
    ...prev,
    requirements: prev.requirements.includes(req)
      ? prev.requirements.filter(r => r !== req)
      : [...prev.requirements, req]
  }));
  const toggleCapability = (cap: string) => setState(prev => ({
    ...prev,
    capabilities: prev.capabilities.includes(cap)
      ? prev.capabilities.filter(c => c !== cap)
      : [...prev.capabilities, cap]
  }));
  const setProductionReady = (ready: boolean) => setState(prev => ({ ...prev, isProductionReady: ready }));

  const nextStep = () => {
    const steps: PlaygroundStep[] = ['idea', 'requirements', 'capabilities', 'architecture', 'decisions', 'customization', 'production', 'output'];
    const currentIndex = steps.indexOf(state.currentStep);
    if (currentIndex < steps.length - 1) {
      const next = steps[currentIndex + 1];
      setStep(next);

      // Auto-advance from architecture step to decisions after a delay
      if (next === 'architecture') {
        setTimeout(() => {
          setStep('decisions');
        }, 3000);
      }
    }
  };

  const prevStep = () => {
    const steps: PlaygroundStep[] = ['idea', 'requirements', 'capabilities', 'architecture', 'decisions', 'customization', 'production', 'output'];
    const currentIndex = steps.indexOf(state.currentStep);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  return (
    <PlaygroundContext.Provider value={{ ...state, setStep, setIdea, toggleRequirement, toggleCapability, setProductionReady, nextStep, prevStep }}>
      {children}
    </PlaygroundContext.Provider>
  );
}

export function usePlayground() {
  const context = useContext(PlaygroundContext);
  if (!context) throw new Error("usePlayground must be used within a PlaygroundProvider");
  return context;
}

export function Playground() {
  return (
    <PlaygroundProvider>
      <PlaygroundLayout />
    </PlaygroundProvider>
  );
}
