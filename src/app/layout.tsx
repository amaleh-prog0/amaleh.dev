import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amale Herbert | Full-stack & AI/ML Developer",
    template: "%s | Amale Herbert",
  },
  description: "Engineering scalable, intelligent software systems across the full stack. Specialist in AI, automation, and production-ready intelligent agents.",
  keywords: ["Full-stack Developer", "AI/ML Engineer", "AI Agents", "Next.js", "Python", "Systems Engineering", "Amale Herbert"],
  authors: [{ name: "Amale Herbert" }],
  openGraph: {
    title: "Amale Herbert | Full-stack & AI/ML Developer",
    description: "Engineering scalable, intelligent software systems across the full stack.",
    type: "website",
    url: "https://amaleh-dev.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amale Herbert Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amale Herbert | Full-stack & AI/ML Developer",
    description: "Engineering scalable, intelligent software systems across the full stack.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <PageTransition>
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </PageTransition>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
