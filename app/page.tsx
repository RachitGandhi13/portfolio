"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ServicesSection from "@/components/ServicesSection";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain-overlay">
      <Navbar />
      <main>
        <Header />
        <About />
        <Projects />
        <ServicesSection />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
