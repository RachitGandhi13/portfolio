"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ProfilePhoto from "./ProfilePhoto";
import Marquee from "./Marquee";
import Barcode from "./Barcode";

const SLIDE = {
  hidden: { y: "108%", opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FADE = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.6 },
});

export default function Hero() {
  return (
    <section className="relative bg-cream dark:bg-ink flex flex-col min-h-screen overflow-hidden">
      <div className="flex-1 grid lg:grid-cols-[180px_1fr] relative z-10">

        {/* ── Left sidebar (desktop only) ── */}
        <aside className="hidden lg:flex flex-col justify-between border-r border-ink/10 dark:border-cream/10 px-5 py-24">
          <div className="space-y-6">
            <Barcode className="w-20 text-ink/30 dark:text-cream/30" />
            <div className="space-y-3">
              {[
                ["Product", "Full-Stack Dev"],
                ["Stack", "MERN · Next.js"],
                ["Spec", "WebRTC · Solidity"],
                ["Version", "v2026.1"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[8px] font-mono text-ink/30 dark:text-cream/30 uppercase tracking-[0.35em]">
                    {label}
                  </p>
                  <p className="text-[10px] font-mono text-ink/60 dark:text-cream/60 mt-0.5 leading-tight">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center flex-1 py-8">
            <span
              className="writing-vertical font-display text-ink/8 dark:text-cream/8 uppercase tracking-[0.3em] text-4xl"
              style={{ lineHeight: 1 }}
            >
              RACHIT GANDHI
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-ink/25 dark:text-cream/25">
              <span className="font-mono text-xs font-bold border border-current px-1">CE</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                <ellipse cx="7" cy="7" rx="3" ry="6" stroke="currentColor" strokeWidth="1"/>
                <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="font-mono text-[9px] opacity-60">SRM 2027</span>
            </div>
            <div className="inline-block bg-[#E8300A] text-cream text-[8px] font-mono font-bold px-2.5 py-1.5 uppercase tracking-widest -rotate-3 shadow-sm">
              LIMITED<br/>EDITION
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="flex flex-col px-6 md:px-10 lg:px-12 pt-20 pb-0">

          {/* Editorial masthead line */}
          <motion.div
            {...FADE(0.1)}
            className="flex items-center gap-4 mb-6 text-[9px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-[0.4em]"
          >
            <span>Issue 01</span>
            <span className="flex-1 max-w-[40px] h-px bg-current" />
            <span>2026</span>
            <span className="flex-1 max-w-[40px] h-px bg-current" />
            <span>Portfolio</span>
          </motion.div>

          {/* Status row */}
          <motion.div
            {...FADE(0.2)}
            className="flex justify-between items-center mb-10"
          >
            <div className="inline-flex items-center gap-2.5 border border-ink/20 dark:border-cream/20 px-3 py-1.5 text-[10px] font-mono text-ink/50 dark:text-cream/50 uppercase tracking-[0.22em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8300A] animate-pulse shrink-0" />
              Open to opportunities
            </div>
            <span className="text-[10px] font-mono text-ink/25 dark:text-cream/25 tracking-widest hidden sm:block">
              CLASS&nbsp;OF&nbsp;&apos;27
            </span>
          </motion.div>

          {/* Name + Photo */}
          <div className="flex-1 flex flex-col lg:flex-row items-start gap-8 lg:gap-14">

            {/* Left: name + copy + CTAs */}
            <div className="flex-1 min-w-0">

              {/* Slide-up name reveal */}
              <div className="select-none">
                {/* RACHIT — solid fill */}
                <div className="overflow-hidden leading-none">
                  <motion.div
                    custom={0.3}
                    variants={SLIDE}
                    initial="hidden"
                    animate="show"
                    className="font-display text-ink dark:text-cream uppercase"
                    style={{ fontSize: "clamp(72px, 13vw, 190px)", lineHeight: 0.88 }}
                  >
                    RACHIT
                  </motion.div>
                </div>

                {/* GANDHI — outline / stroke */}
                <div className="overflow-hidden leading-none">
                  <motion.div
                    custom={0.5}
                    variants={SLIDE}
                    initial="hidden"
                    animate="show"
                    className="font-display uppercase"
                    style={{
                      fontSize: "clamp(72px, 13vw, 190px)",
                      lineHeight: 0.88,
                      WebkitTextStroke: "2px currentColor",
                      color: "transparent",
                    }}
                  >
                    GANDHI
                  </motion.div>
                </div>
              </div>

              {/* Handwritten annotation */}
              <motion.p
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: -1.5 }}
                transition={{ delay: 0.9 }}
                className="font-marker text-[#E8300A] text-xl mt-5 inline-block"
              >
                {`// full-stack since day one ✦`}
              </motion.p>

              {/* Role line */}
              <motion.div
                {...FADE(1.05)}
                className="mt-3 flex items-center gap-3"
              >
                <div className="h-px w-8 bg-ink/20 dark:bg-cream/20" />
                <p className="text-[10px] font-mono text-ink/45 dark:text-cream/45 uppercase tracking-[0.25em]">
                  Full-Stack Developer &nbsp;·&nbsp; B.Tech CSE
                </p>
              </motion.div>

              {/* Tagline */}
              <motion.p
                {...FADE(1.15)}
                className="mt-5 text-ink/50 dark:text-cream/50 text-sm max-w-xs leading-relaxed"
              >
                {personalInfo.tagline}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25 }}
                className="mt-8 flex flex-wrap gap-2.5"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker bg-ink dark:bg-cream text-cream dark:text-ink border-ink dark:border-cream hover:bg-[#E8300A] hover:border-[#E8300A] hover:text-cream"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker border-ink/30 dark:border-cream/30 text-ink/70 dark:text-cream/70 hover:border-ink dark:hover:border-cream hover:text-ink dark:hover:text-cream"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-sticker border-ink/20 dark:border-cream/20 text-ink/50 dark:text-cream/50 hover:border-[#E8300A] hover:text-[#E8300A]"
                >
                  <Mail size={14} />
                  Email
                </a>
                <a
                  href={personalInfo.resumePath}
                  download
                  className="btn-sticker border-[#E8300A] text-[#E8300A] hover:bg-[#E8300A] hover:text-cream"
                >
                  <Download size={14} />
                  Resume
                </a>
              </motion.div>
            </div>

            {/* Right: photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 self-center lg:self-start lg:mt-6"
            >
              <div className="relative">
                {/* Offset shadow block */}
                <div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#E8300A]/30" />

                {/* Photo with editorial B&W treatment */}
                <div
                  className="relative w-56 h-72 sm:w-68 sm:h-88 lg:w-[300px] lg:h-[420px] border-[3px] border-ink dark:border-cream overflow-hidden"
                  style={{ filter: "contrast(1.18) brightness(0.87) grayscale(1) sepia(0.06)" }}
                >
                  <ProfilePhoto className="w-full h-full" />
                </div>

                {/* SRM sticker */}
                <div className="absolute -top-3 -right-2 bg-[#C5FF00] border-2 border-ink text-ink text-[8px] font-mono font-bold px-2 py-1 uppercase tracking-widest rotate-6 shadow-sm">
                  SRM<br/>2027
                </div>

                {/* Annotation */}
                <p className="absolute -bottom-7 right-0 font-marker text-ink/40 dark:text-cream/40 text-sm -rotate-2">
                  that&apos;s me →
                </p>

                {/* Editorial side label */}
                <div
                  className="absolute -left-7 top-1/2 -translate-y-1/2 text-[8px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-[0.3em]"
                  style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
                >
                  Developer · 2026
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col items-start gap-2 pt-10 pb-4 ml-1"
          >
            <span className="text-[9px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-[0.35em]">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-ink/20 dark:from-cream/20 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-4">
        <Marquee bg="bg-[#E8300A]" text="text-cream" />
      </div>
    </section>
  );
}
