import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import PageReveal from "@/components/PageReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <PageReveal><About /></PageReveal>
      <PageReveal><Experience /></PageReveal>
      <PageReveal><Projects /></PageReveal>
      <PageReveal><Education /></PageReveal>
      <PageReveal><Contact /></PageReveal>
    </main>
  );
}
