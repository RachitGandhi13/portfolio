"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
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
      <Preloader />
      <Header onAboutOpen={() => setAboutOpen(true)} />
      <AboutPanel isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />

      {/* Spacer to push main below full-viewport header */}
      <div style={{ height: "100vh" }} />

      <main style={{ backgroundColor: "#0A0A0A" }}>
        <CubeSection />
        <ServicesSection />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
