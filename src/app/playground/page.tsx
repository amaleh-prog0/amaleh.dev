"use client";

import { Playground } from "@/components/Playground";
import { Container } from "@/components/ui/Container";
import { PageWrapper } from "@/components/PageWrapper";
import { motion } from "framer-motion";

export default function PlaygroundPage() {
  return (
    <PageWrapper>
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-foreground to-muted bg-clip-text text-transparent">
              System Design Playground
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Turn your ideas into production-ready architectures.
              An interactive experiment in engineering trade-offs and system design.
            </p>
          </motion.div>

          <Playground />
        </Container>
      </div>
    </PageWrapper>
  );
}
