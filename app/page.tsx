import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { BackgroundOrbs } from "@/components/ui/background-orbs";
import { CursorGlow } from "@/components/ui/cursor-glow";

const Page = () => {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-[#fafafa] z-10">
      <BackgroundOrbs />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Page;
