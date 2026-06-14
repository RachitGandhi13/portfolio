"use client";

import { useState } from "react";

export default function Footer() {
  const [easterEgg, setEasterEgg] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#0A0A0A",
        color: "#F5F4F0",
        borderTop: "1px solid #1E1E1E",
      }}
    >
      <div className="px-6 md:px-10 lg:px-16 pt-20 pb-10">
        {/* CTA line */}
        <p
          className="font-sans font-light mb-4"
          style={{ fontSize: "clamp(14px, 1.8vw, 20px)", color: "#555555" }}
        >
          Have a project in mind? Feel free to contact.
        </p>

        {/* Large email */}
        <a
          href="mailto:rachitgandhi7727@gmail.com"
          className="group inline-block"
          style={{ lineHeight: 1 }}
        >
          <span
            className="font-display font-bold block transition-opacity duration-200 hover:opacity-60"
            style={{
              fontSize: "clamp(28px, 5.5vw, 88px)",
              color: "#F5F4F0",
              letterSpacing: "-0.02em",
            }}
          >
            rachitgandhi7727@gmail.com
          </span>
        </a>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #1E1E1E", marginTop: "clamp(40px,6vw,80px)" }} />

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col gap-6">
          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="font-mono text-[11px] tracking-[0.08em] uppercase transition-opacity hover:opacity-60"
              style={{ color: "#F5F4F0", background: "none", border: "none" }}
            >
              Back to Top ↑
            </button>
          </div>

          {/* Links row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Left: social links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/RachitGandhi13"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
                style={{ color: "#F5F4F0" }}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rachitgandhi13"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
                style={{ color: "#F5F4F0" }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:rachitgandhi7727@gmail.com"
                className="font-mono text-[11px] tracking-[0.04em] transition-opacity hover:opacity-60"
                style={{ color: "#555555" }}
              >
                rachitgandhi7727@gmail.com
              </a>
            </div>

            {/* Right: credit */}
            <span className="font-mono text-[10px] tracking-[0.06em]" style={{ color: "#333333" }}>
              Design &amp; Dev by Rachit Gandhi
            </span>
          </div>

          {/* Easter egg row */}
          <div className="flex items-center justify-between">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.08em]"
              style={{ color: "#F5F4F0", opacity: 0.4 }}
            >
              Party!
            </span>

            <button
              onClick={() => setEasterEgg(!easterEgg)}
              className="font-mono text-[9px] transition-opacity"
              style={{
                color: easterEgg ? "#F5F4F0" : "transparent",
                background: "none",
                border: "none",
                letterSpacing: "0.06em",
              }}
              aria-label="Easter egg"
            >
              {easterEgg ? "● shhh ~ You found a hidden link" : "● ·····"}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
              style={{ color: "#F5F4F0", opacity: 0.4 }}
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
