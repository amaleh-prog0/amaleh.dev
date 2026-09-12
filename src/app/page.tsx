import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatIBuild } from "@/components/WhatIBuild";
import { Projects } from "@/components/Projects";
import { Playground } from "@/components/Playground";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { PageWrapper } from "@/components/PageWrapper";

export default function Page() {
  return (
    <PageWrapper>
      <main className="flex flex-col">
        <Hero />
        <Reveal direction="up"><About /></Reveal>
        <Reveal direction="left"><WhatIBuild /></Reveal>
        <Reveal direction="up"><Projects /></Reveal>
        <Reveal direction="right"><Playground /></Reveal>
        <Reveal direction="up"><Skills /></Reveal>
        <Reveal direction="up"><Experience /></Reveal>
        <Reveal direction="down"><Contact /></Reveal>
      </main>
    </PageWrapper>
  );
}
