"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default Home;
