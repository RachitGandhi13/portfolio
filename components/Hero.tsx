"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ScrambleText from "./ScrambleText";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto"
    >
      {/* Top area */}
      <div className="flex items-start justify-between">
        <motion.div {...fade(0.15)} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-[0.25em]">
            Available for work
          </span>
        </motion.div>
        <motion.p {...fade(0.15)} className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-[0.2em]">
          Portfolio &#39;26
        </motion.p>
      </div>

      {/* Name — massive, center of gravity */}
      <div className="mt-16 md:mt-0 select-none">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrambleText
              text="RACHIT"
              delay={150}
              className="font-display block leading-none"
              style={{
                fontSize: "clamp(68px, 18vw, 280px)",
                color: "var(--fg)",
                letterSpacing: "-0.01em",
              }}
            />
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.08, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrambleText
              text="GANDHI"
              delay={350}
              className="font-display block leading-none outline-text"
              style={{
                fontSize: "clamp(68px, 18vw, 280px)",
                letterSpacing: "-0.01em",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <motion.div {...fade(0.55)} className="space-y-3 max-w-sm">
          <p className="text-[11px] font-mono text-red uppercase tracking-[0.3em]">
            Full-Stack Developer
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            MERN · Next.js · TypeScript · WebRTC · Solidity.
            <br />
            Building things that actually ship.
          </p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
            SRM University · Chennai, India
          </p>
        </motion.div>

        <motion.div {...fade(0.65)} className="flex flex-wrap gap-6 sm:gap-8">
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: "Email", href: `mailto:${personalInfo.email}` },
            { label: "Resume", href: personalInfo.resumePath, download: true },
          ].map(({ label, href, download }) => (
            <a
              key={label}
              href={href}
              download={download}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.2em] transition-colors duration-200"
              style={{ color: "var(--muted)" }}
            >
              <span className="group-hover:text-[var(--fg)] transition-colors">{label}</span>
              <ArrowUpRight
                size={10}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--fg)" }}
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        {...fade(0.9)}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-transparent"
          style={{ backgroundColor: "var(--border)" }}
          animate={{ scaleY: [0, 1, 0], originY: "top" }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
