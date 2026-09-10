import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[30%] h-[30%] bg-accent rounded-full blur-[100px]" />
      </div>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-bold tracking-tight bg-gradient-to-br from-foreground to-muted bg-clip-text text-transparent">About Me</h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              {profile.about.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Engineering Philosophy
              </h3>
              <ul className="space-y-3">
                {profile.philosophy.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted flex gap-3">
                    <span className="text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-center text-center">
              <div className="text-4xl font-bold text-accent mb-2">Full Stack</div>
              <div className="text-sm text-muted">Architecture & Implementation</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
