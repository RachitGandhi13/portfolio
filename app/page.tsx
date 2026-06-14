import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ShowreelSkills from "@/components/ShowreelSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ShowreelSkills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
