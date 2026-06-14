"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AboutPanel from "@/components/AboutPanel";
import CubeSection from "@/components/CubeSection";
import ServicesSection from "@/components/ServicesSection";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      {/* Preloader — highest z */}
      <Preloader />

      {/* Persistent navbar — z:500, always above content */}
      <Navbar onAboutOpen={() => setAboutOpen(true)} />

      {/* Hero header — z:20, the big centered name, slides under scrolling content */}
      <Header />

      {/* About panel overlay */}
      <AboutPanel isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />

      {/* Spacer: push main content below the full-viewport hero */}
      <div style={{ height: "100vh" }} />

      {/* Main content: z:200 — scrolls over the fixed hero name */}
      <main style={{ position: "relative", zIndex: 200, backgroundColor: "var(--bg)" }}>
        <CubeSection />
        <ServicesSection />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
