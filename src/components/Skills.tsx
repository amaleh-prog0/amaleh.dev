import * as React from "react";
import { Container } from "@/components/ui/Container";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-border">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Stack</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A curated set of technologies I use to architect and build professional software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted hover:text-foreground transition-colors"
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
