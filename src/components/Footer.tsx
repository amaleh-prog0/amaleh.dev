import Link from "next/link";
import { social } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Amale Herbert. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href={social.github} target="_blank" className="text-sm text-muted hover:text-accent transition-colors">
            GitHub
          </Link>
          <Link href={social.linkedin} target="_blank" className="text-sm text-muted hover:text-accent transition-colors">
            LinkedIn
          </Link>
          <Link href={`mailto:${social.email}`} className="text-sm text-muted hover:text-accent transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
