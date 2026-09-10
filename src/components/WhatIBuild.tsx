import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { skills } from "@/data/skills";

const categories = [
  {
    title: "Web Applications",
    description: "Building responsive, scalable web applications and digital products using modern frameworks.",
    items: skills.frontend,
  },
  {
    title: "Backend Systems",
    description: "Designing APIs, services, databases, and application infrastructure for high-performance systems.",
    items: skills.backend,
  },
  {
    title: "AI & Intelligent Systems",
    description: "Integrating LLMs, AI agents, and machine learning solutions into production-ready software.",
    items: skills.aiML,
  },
  {
    title: "Infrastructure & Tooling",
    description: "Developing tools that improve workflows and automate repetitive technical processes.",
    items: skills.devops,
  },
];

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-[-10%] w-[30%] h-[30%] bg-accent rounded-full blur-[100px]" />
      </div>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-br from-foreground to-muted bg-clip-text text-transparent">What I Build</h2>
          <p className="text-muted max-w-2xl mx-auto">
            I focus on the intersection of robust software engineering and intelligent automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-surface hover:border-accent transition-colors group"
            >
              <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-muted mb-6 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-md bg-background border border-border text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
