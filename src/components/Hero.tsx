"use client";

import * as React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/Magnetic";
import { profile } from "@/data/profile";

const SPECIALIZATIONS = ["intelligent", "scalable", "modern", "robust"];

export function Hero() {
  const [index, setIndex] = React.useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SPECIALIZATIONS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Subtle technical background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
          <motion.div
            style={{ x: springX, y: springY }}
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px] animate-pulse"
          />
          <motion.div
            style={{ x: springX, y: springY, animationDelay: "2s" }}
            className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px] animate-pulse"
          />
        </div>
      </div>
      </div>

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-border bg-surface text-xs font-medium text-muted mb-6">
              Available for collaboration
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.25rem,8vw,4.5rem)] font-bold tracking-tight mb-6 leading-[1.1]"
          >
            I engineer{" "}
            <span className="relative inline-block text-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={SPECIALIZATIONS[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0"
                >
                  {SPECIALIZATIONS[index]}
                </motion.span>
              </AnimatePresence>
              {/* Invisible placeholder to maintain layout width based on longest word */}
              <span className="opacity-0 pointer-events-none select-none">
                {SPECIALIZATIONS.reduce((a, b) => a.length > b.length ? a : b)}
              </span>
            </span>{" "}
            software systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[clamp(1rem,2vw+0.5rem,1.25rem)] text-muted max-w-2xl mb-10"
          >
            {profile.specialization} I combine solid software engineering with emerging AI technologies to build systems that are robust, efficient, and solve meaningful real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Magnetic>
              <Button size="lg" href="#projects" className="w-full sm:w-auto">
                View My Projects
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" size="lg" href="#contact" className="w-full sm:w-auto">
                Let's Work Together
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
