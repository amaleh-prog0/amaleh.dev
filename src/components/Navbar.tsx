"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function NavLink({ link }: { link: typeof navLinks[0] }) {
  return (
    <Link
      href={link.href}
      className="relative text-sm font-medium text-muted hover:text-accent transition-colors group py-1"
    >
      {link.name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-accent text-background flex items-center justify-center rounded-sm font-mono text-sm">
            AH
          </div>
          <span className="hidden sm:inline-block">Amale Herbert</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.name} link={link} />
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={cn("w-5 h-0.5 bg-foreground mb-1 transition-all", isOpen && "rotate-45 translate-y-1.5")}></div>
            <div className={cn("w-5 h-0.5 bg-foreground mb-1", isOpen && "opacity-0")}></div>
            <div className={cn("w-5 h-0.5 bg-foreground transition-all", isOpen && "-rotate-45 -translate-y-1.5")}></div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-muted hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
