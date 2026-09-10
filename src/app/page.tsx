import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatIBuild } from "@/components/WhatIBuild";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><WhatIBuild /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
  );
}
