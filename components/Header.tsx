"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  onAboutOpen: () => void;
}

function HoverStagger({ text }: { text: string }) {
  return (
    <span className="group inline-block" style={{ cursor: "none" }}>
      <span className="hover-stagger">
        <span className="hover-stagger-inner">
          <span className="block">{text}</span>
          <span className="block">{text}</span>
        </span>
      </span>
    </span>
  );
}

export default function Header({ onAboutOpen }: HeaderProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Reveal header content after preloader fades (2.4s)
    const t = setTimeout(() => setRevealed(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: revealed ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-[500] flex flex-col justify-between px-6 md:px-10 lg:px-16"
      style={{
        height: "100vh",
        backgroundColor: "#0A0A0A",
        color: "#F5F4F0",
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between pt-6">
        <a
          href="#"
          className="font-mono text-[11px] tracking-[0.12em] uppercase"
          style={{ color: "#F5F4F0", opacity: 0.6 }}
        >
          Rachit - folio
        </a>
        <div className="flex items-center gap-6">
          <a
            href="mailto:rachitgandhi7727@gmail.com"
            className="paren-link group"
            style={{ color: "#F5F4F0", opacity: 0.6 }}
          >
            <HoverStagger text="(Contact)" />
          </a>
          <button
            onClick={onAboutOpen}
            className="paren-link group"
            style={{ color: "#F5F4F0", opacity: 0.6, background: "none", border: "none" }}
          >
            <HoverStagger text="(About)" />
          </button>
        </div>
      </div>

      {/* Center: huge name */}
      <div className="flex items-center justify-center">
        <h1
          className="font-display font-bold leading-none text-center uppercase tracking-tight"
          style={{
            fontSize: "clamp(52px, 10.5vw, 160px)",
            color: "#F5F4F0",
            letterSpacing: "-0.02em",
          }}
        >
          RACHIT GANDHI
        </h1>
      </div>

      {/* Bottom two rows */}
      <div className="pb-6">
        {/* Row 1: header-info */}
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={onAboutOpen}
            className="paren-link group"
            style={{ color: "#F5F4F0", opacity: 0.4, background: "none", border: "none" }}
          >
            <HoverStagger text="(About)" />
          </button>
          <span
            className="font-mono text-[11px] tracking-[0.06em] text-center"
            style={{ color: "#F5F4F0", opacity: 0.4 }}
          >
            Building production, code &amp; real impact
          </span>
          <a
            href="mailto:rachitgandhi7727@gmail.com"
            className="paren-link group"
            style={{ color: "#F5F4F0", opacity: 0.4 }}
          >
            <HoverStagger text="(Contact)" />
          </a>
        </div>
        {/* Row 2: role */}
        <div className="flex items-center justify-start">
          <h3
            className="font-mono text-[11px] tracking-[0.06em] uppercase"
            style={{ color: "#F5F4F0", opacity: 0.35 }}
          >
            Developer —
          </h3>
        </div>
      </div>
    </motion.header>
  );
}
