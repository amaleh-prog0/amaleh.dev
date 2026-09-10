import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { social } from "@/data/social";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
      </div>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-muted bg-clip-text text-transparent">Let's Build Something</h2>
          <p className="text-lg text-muted mb-10">
            Whether you have a project in mind, a technical challenge to solve, or just want to talk about AI systems—I'm always open to interesting conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" href={`mailto:${social.email}`}>
              Start a Conversation
            </Button>
            <Button variant="outline" size="lg" href={social.github} target="_blank">
              Visit GitHub
            </Button>
          </div>

          <div className="mt-16 pt-16 border-t border-border grid sm:grid-cols-3 gap-8">
            <a href={social.github} target="_blank" className="flex flex-col items-center gap-2 group">
              <span className="text-sm font-medium group-hover:text-accent transition-colors">GitHub</span>
              <span className="text-xs text-muted">Open Source</span>
            </a>
            <a href={social.linkedin} target="_blank" className="flex flex-col items-center gap-2 group">
              <span className="text-sm font-medium group-hover:text-accent transition-colors">LinkedIn</span>
              <span className="text-xs text-muted">Professional</span>
            </a>
            <a href={`mailto:${social.email}`} className="flex flex-col items-center gap-2 group">
              <span className="text-sm font-medium group-hover:text-accent transition-colors">Email</span>
              <span className="text-xs text-muted">Direct Contact</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
