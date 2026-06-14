"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Reveal after preloader fades (2.2s fade + small buffer)
    const t = setTimeout(() => setRevealed(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: revealed ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-[20]"
      style={{
        height: "100vh",
        backgroundColor: "var(--bg)",
        color: "var(--fg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 clamp(24px, 4vw, 64px)",
        paddingTop: "62px",   /* clear the Navbar */
        paddingBottom: "28px",
      }}
    >
      {/* Center: huge name — vertically centered in remaining space */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1
          className="font-display font-bold leading-none text-center uppercase"
          style={{
            fontSize: "clamp(52px, 10.5vw, 160px)",
            color: "var(--fg)",
            letterSpacing: "-0.02em",
          }}
        >
          RACHIT GANDHI
        </h1>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[11px] uppercase tracking-[0.08em]"
          style={{ color: "var(--fg)", opacity: 0.7 }}
        >
          Developer —
        </span>
        <div className="flex items-center gap-5">
          {[
            { label: "GitHub",   href: "https://github.com/RachitGandhi13" },
            { label: "LinkedIn", href: "https://linkedin.com/in/rachitgandhi13" },
            { label: "LeetCode", href: "https://leetcode.com/rachitgandhi13" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.08em] transition-opacity hover:opacity-100"
              style={{ color: "var(--fg)", opacity: 0.7, textDecoration: "none" }}
            >
              {label} ↗
            </a>
          ))}
        </div>
        <span
          className="font-mono text-[11px] uppercase tracking-[0.08em]"
          style={{ color: "var(--fg)", opacity: 0.7 }}
        >
          Chennai, India
        </span>
      </div>
    </motion.header>
  );
}
