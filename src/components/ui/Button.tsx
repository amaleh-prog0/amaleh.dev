"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-background hover:opacity-90 font-medium",
      secondary: "bg-surface text-foreground hover:bg-border transition-colors",
      ghost: "bg-transparent text-foreground hover:bg-surface transition-colors",
      outline: "border border-border bg-transparent text-foreground hover:bg-surface transition-colors",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    const content = (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none w-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );

    if (href) {
      return (
        <Link href={href} className="contents">
          {/* Clone the button styling to the link, but we can just wrap it or style the link as a button */}
          <div className={cn(
            "inline-flex items-center justify-center rounded-md transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
            variants[variant],
            sizes[size],
            className
          )}>
            {props.children}
          </div>
        </Link>
      );
    }

    return content;
  }
);

Button.displayName = "Button";
