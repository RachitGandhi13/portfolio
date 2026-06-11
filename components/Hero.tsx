"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ProfilePhoto from "./ProfilePhoto";
import Marquee from "./Marquee";

const up = (delay: number) => ({
  initial: { y: "110%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
});

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.6 },
});

export default function Hero() {
  return (
    <section className="relative bg-cream dark:bg-ink min-h-screen flex flex-col overflow-hidden">

      {/* ── Magazine masthead ── */}
      <motion.div
        {...fade(0)}
        className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-4 border-b-2 border-ink dark:border-cream shrink-0 z-10"
      >
        <div className="flex items-center gap-5">
          <span className="text-[8px] font-mono text-ink/35 dark:text-cream/35 uppercase tracking-[0.45em]">Issue 01</span>
          <span className="hidden sm:block text-[8px] font-mono text-ink/20 dark:text-cream/20">·</span>
          <span className="hidden sm:block text-[8px] font-mono text-ink/35 dark:text-cream/35 uppercase tracking-[0.45em]">Vol. I</span>
        </div>
        <div className="font-display text-ink dark:text-cream text-3xl md:text-4xl tracking-wider leading-none">
          RG<span className="text-[#E8300A]">.</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden sm:block text-[8px] font-mono text-ink/35 dark:text-cream/35 uppercase tracking-[0.45em]">Jun 2026</span>
          <span className="hidden sm:block text-[8px] font-mono text-ink/20 dark:text-cream/20">·</span>
          <span className="text-[8px] font-mono text-ink/35 dark:text-cream/35 uppercase tracking-[0.45em]">Portfolio</span>
        </div>
      </motion.div>

      {/* ── Cover layout ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_42%] min-h-0">

        {/* Left: typography + info */}
        <div className="flex flex-col justify-between px-6 md:px-10 lg:px-14 pt-10 pb-8 relative">

          {/* Giant name */}
          <div className="select-none">
            <div className="overflow-hidden leading-none">
              <motion.div
                {...up(0.2)}
                className="font-display text-ink dark:text-cream uppercase"
                style={{ fontSize: "clamp(88px, 18vw, 260px)", lineHeight: 0.84 }}
              >
                RACHIT
              </motion.div>
            </div>
            <div className="overflow-hidden leading-none">
              <motion.div
                {...up(0.42)}
                className="font-display uppercase"
                style={{
                  fontSize: "clamp(88px, 18vw, 260px)",
                  lineHeight: 0.84,
                  WebkitTextStroke: "3px currentColor",
                  color: "transparent",
                }}
              >
                GANDHI
              </motion.div>
            </div>

            {/* Red sweep line */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-[3px] bg-[#E8300A] mt-5"
            />
          </div>

          {/* Bottom editorial content */}
          <motion.div {...fade(1.0)} className="space-y-5 mt-8">
            <p className="font-marker text-[#E8300A] text-xl -rotate-1 inline-block">
              {`// full-stack since day one ✦`}
            </p>

            <div className="space-y-2">
              {[
                { text: "Full-Stack Developer · B.Tech CSE", accent: false },
                { text: "MERN · WebRTC · Solidity · Next.js", accent: false },
                { text: "Open to Opportunities", accent: true },
              ].map(({ text, accent }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${accent ? "bg-[#E8300A] animate-pulse" : "bg-ink/30 dark:bg-cream/30"}`} />
                  <p className={`text-[11px] font-mono uppercase tracking-[0.22em] ${accent ? "text-[#E8300A]" : "text-ink/45 dark:text-cream/45"}`}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="btn-sticker bg-ink dark:bg-cream text-cream dark:text-ink border-ink dark:border-cream hover:bg-[#E8300A] hover:border-[#E8300A] hover:text-cream">
                <Github size={14} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn-sticker border-ink/30 dark:border-cream/30 text-ink/60 dark:text-cream/60 hover:border-ink dark:hover:border-cream hover:text-ink dark:hover:text-cream">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="btn-sticker border-ink/20 dark:border-cream/20 text-ink/50 dark:text-cream/50 hover:border-[#E8300A] hover:text-[#E8300A]">
                <Mail size={14} /> Email
              </a>
              <a href={personalInfo.resumePath} download
                className="btn-sticker border-[#E8300A] text-[#E8300A] hover:bg-[#E8300A] hover:text-cream">
                <Download size={14} /> Resume
              </a>
            </div>
          </motion.div>

          {/* Page number */}
          <span className="absolute bottom-4 left-6 md:left-10 lg:left-14 text-[8px] font-mono text-ink/18 dark:text-cream/18 uppercase tracking-[0.5em]">
            Pg. 01
          </span>
        </div>

        {/* Right: full-height editorial photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative border-l-2 border-ink dark:border-cream overflow-hidden"
          style={{ minHeight: "60vh" }}
        >
          {/* B&W photo fills the column */}
          <div
            className="absolute inset-0"
            style={{ filter: "grayscale(1) contrast(1.2) brightness(0.82) sepia(0.04)" }}
          >
            <ProfilePhoto className="w-full h-full" />
          </div>

          {/* Photo top overlay */}
          <div className="absolute top-0 left-0 right-0 px-5 pt-4 pb-10 bg-gradient-to-b from-ink/60 to-transparent flex items-center justify-between">
            <span className="text-[8px] font-mono text-cream/50 uppercase tracking-[0.4em]">Cover Shot</span>
            <span className="text-[8px] font-mono text-cream/50 uppercase tracking-[0.4em]">SRM · 2026</span>
          </div>

          {/* Vertical name label */}
          <div
            className="absolute right-3 top-1/2 text-[8px] font-mono text-cream/18 uppercase tracking-[0.35em]"
            style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
          >
            Rachit Gandhi — Full Stack Developer
          </div>

          {/* Badges */}
          <div className="absolute bottom-5 left-5 bg-[#E8300A] text-cream text-[8px] font-mono font-bold px-2.5 py-1.5 uppercase tracking-widest -rotate-3 shadow-md">
            LIMITED<br />EDITION
          </div>
          <div className="absolute top-5 right-5 bg-[#C5FF00] border-2 border-ink text-ink text-[8px] font-mono font-bold px-2 py-1.5 uppercase tracking-widest rotate-6">
            SRM<br />2027
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <Marquee bg="bg-[#E8300A]" text="text-cream" />
    </section>
  );
}
