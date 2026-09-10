import * as React from "react";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent rounded-full blur-[120px]" />
      </div>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-bold tracking-tight mb-4 bg-gradient-to-br from-foreground to-muted bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A selection of my strongest work, demonstrating engineering depth and a focus on practical utility.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
