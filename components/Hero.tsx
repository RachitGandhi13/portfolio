"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ScrambleText from "./ScrambleText";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section className="relative bg-ink min-h-screen flex flex-col overflow-hidden">

      {/* ── Name block — fills the screen ── */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-14 pt-24 pb-10">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2.5 mb-10 w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8300A] animate-pulse" />
          <span className="text-[10px] font-mono text-cream/35 uppercase tracking-[0.3em]">
            Available for work
          </span>
        </motion.div>

        {/* RACHIT — solid, scramble */}
        <div className="overflow-hidden leading-none select-none">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrambleText
              text="RACHIT"
              delay={200}
              className="font-display text-cream uppercase block"
              style={{ fontSize: "clamp(72px, 23vw, 340px)", lineHeight: 0.85 }}
            />
          </motion.div>
        </div>

        {/* GANDHI — outline, scramble with delay */}
        <div className="overflow-hidden leading-none select-none">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrambleText
              text="GANDHI"
              delay={400}
              className="font-display uppercase block"
              style={{
                fontSize: "clamp(72px, 23vw, 340px)",
                lineHeight: 0.85,
                WebkitTextStroke: "2.5px #F0E6D6",
                color: "transparent",
              }}
            />
          </motion.div>
        </div>

        {/* Horizontal rule — draws in */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-cream/15 mt-8 origin-left"
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mt-8"
        >
          {/* Role + bio */}
          <div className="space-y-3 max-w-md">
            <p className="text-[11px] font-mono text-[#E8300A] uppercase tracking-[0.35em]">
              Full-Stack Developer
            </p>
            <p className="text-sm text-cream/45 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4">
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
                className="group flex items-center gap-1.5 text-[11px] font-mono text-cream/35 hover:text-cream uppercase tracking-[0.25em] transition-colors duration-200"
              >
                {label}
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <Marquee bg="bg-[#E8300A]" text="text-cream" />
    </section>
  );
}
