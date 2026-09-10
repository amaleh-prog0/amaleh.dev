import * as React from "react";
import { Container } from "@/components/ui/Container";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-[-10%] w-[30%] h-[30%] bg-accent rounded-full blur-[100px]" />
      </div>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-bold tracking-tight mb-4 bg-gradient-to-br from-foreground to-muted bg-clip-text text-transparent">Experience</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Professional history and technical contributions.
          </p>
        </div>

        {experience.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-border rounded-xl">
            <p className="text-muted italic">Experience data coming soon.</p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-border">
                <div className="absolute left-[-5px] top-0 w-2 h-2 bg-accent rounded-full" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted">{exp.period}</span>
                </div>
                <p className="text-muted mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="text-sm text-muted flex gap-2">
                      <span className="text-accent">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
