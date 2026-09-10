import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-12">
            <Button variant="ghost" size="sm" href="/" className="mb-6">
              ← Back to Portfolio
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted mb-8">
              {project.valueProp}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-full border border-border bg-surface text-xs font-medium text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <CaseStudySection title="Overview" content={caseStudy.overview} />
            <CaseStudySection title="The Problem" content={caseStudy.problem} />
            <CaseStudySection title="The Solution" content={caseStudy.solution} />
            <CaseStudySection title="Architecture" content={caseStudy.architecture} />
            <CaseStudySection title="Implementation" content={caseStudy.implementation} />
            <CaseStudySection title="Technical Challenges" content={caseStudy.challenges} />
            <CaseStudySection title="Results" content={caseStudy.results} />
            <CaseStudySection title="Lessons Learned" content={caseStudy.lessons} />
          </div>

          <div className="mt-20 p-8 rounded-2xl border border-border bg-surface text-center">
            <h3 className="text-2xl font-bold mb-6">Explore the Source</h3>
            <div className="flex justify-center gap-4">
              <Button size="lg" href={project.github} target="_blank">
                Visit GitHub Repository
              </Button>
              {project.demo && (
                <Button variant="outline" size="lg" href={project.demo} target="_blank">
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

function CaseStudySection({ title, content }: { title: string; content: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-accent">{title}</h2>
      <p className="text-lg text-muted leading-relaxed">
        {content}
      </p>
    </div>
  );
}
