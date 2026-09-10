"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-surface overflow-hidden transition-all hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]",
        className
      )}
    >
      <div className="aspect-video w-full bg-background relative overflow-hidden">
        {/* Animated Project visual placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-muted opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110">
          <span className="text-6xl font-mono font-bold bg-gradient-to-br from-foreground to-muted bg-clip-text text-transparent">
            {project.title[0]}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/5 pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        </div>
        <p className="text-sm text-muted mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-background border border-border text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            href={`/projects/${project.slug}`}
          >
            View Case Study
          </Button>
          <Button
            variant="outline"
            size="sm"
            href={project.github}
            target="_blank"
          >
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
