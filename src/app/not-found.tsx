import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent rounded-full blur-[120px] animate-pulse" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-accent">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            404 Error! = Even AI can't find this page!
          </h2>
          <p className="text-muted max-w-md mx-auto mb-10">
            The page you're looking for might have been moved, deleted, or perhaps it never existed in this dimension.
          </p>
          <Button size="lg" href="/">
            Return to Safety
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}
