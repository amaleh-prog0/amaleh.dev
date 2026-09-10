import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { social } from "@/data/social";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Let's Build Something</h2>
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
