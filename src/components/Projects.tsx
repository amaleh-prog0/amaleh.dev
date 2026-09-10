import * as React from "react";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 border-t border-border">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
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
