"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ProfilePhoto from "./ProfilePhoto";
import Marquee from "./Marquee";
import Barcode from "./Barcode";

export default function Hero() {
  return (
    <section className="relative bg-cream dark:bg-ink flex flex-col min-h-screen overflow-hidden">
      <div className="flex-1 grid lg:grid-cols-[180px_1fr] relative z-10">

        {/* ── Left sidebar (desktop only) ── */}
        <aside className="hidden lg:flex flex-col justify-between border-r border-ink/10 dark:border-cream/10 px-5 py-24">
          {/* Top block */}
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

          {/* Vertical name watermark */}
          <div className="flex items-center justify-center flex-1 py-8">
            <span
              className="writing-vertical font-display text-ink/8 dark:text-cream/8 uppercase tracking-[0.3em] text-4xl"
              style={{ lineHeight: 1 }}
            >
              RACHIT GANDHI
            </span>
          </div>

          {/* Bottom block */}
          <div className="space-y-4">
            {/* CE + globe decorative */}
            <div className="flex items-center gap-2.5 text-ink/25 dark:text-cream/25">
              <span className="font-mono text-xs font-bold border border-current px-1">CE</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                <ellipse cx="7" cy="7" rx="3" ry="6" stroke="currentColor" strokeWidth="1"/>
                <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="font-mono text-[9px] opacity-60">SRM 2027</span>
            </div>

            {/* LIMITED EDITION sticker */}
            <div className="inline-block bg-[#E8300A] text-cream text-[8px] font-mono font-bold px-2.5 py-1.5 uppercase tracking-widest -rotate-3 shadow-sm">
              LIMITED<br/>EDITION
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="flex flex-col px-6 md:px-10 lg:px-12 pt-20 pb-0">

          {/* Status row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                className="font-display text-ink dark:text-cream leading-[0.88] uppercase"
                style={{ fontSize: "clamp(72px, 13vw, 190px)" }}
              >
                RACHIT
                <br />
                GANDHI
              </motion.h1>

              {/* Handwritten annotation */}
              <motion.p
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: -1.5 }}
                transition={{ delay: 0.85 }}
                className="font-marker text-[#E8300A] text-xl mt-4 inline-block"
              >
                {`// full-stack since day one ✦`}
              </motion.p>

              {/* Role line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-3 flex items-center gap-3"
              >
                <div className="h-px w-8 bg-ink/20 dark:bg-cream/20" />
                <p className="text-[10px] font-mono text-ink/45 dark:text-cream/45 uppercase tracking-[0.25em]">
                  Full-Stack Developer &nbsp;·&nbsp; B.Tech CSE
                </p>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-5 text-ink/50 dark:text-cream/50 text-sm max-w-xs leading-relaxed"
              >
                {personalInfo.tagline}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
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
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ delay: 0.5, duration: 0.75, ease: "easeOut" }}
              className="shrink-0 self-center lg:self-start lg:mt-8"
            >
              <div className="relative">
                {/* Offset shadow block */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#E8300A]/25" />

                {/* Grain filter on photo via CSS */}
                <div
                  className="relative w-52 h-64 sm:w-60 sm:h-72 lg:w-[260px] lg:h-[340px] border-[3px] border-ink dark:border-cream overflow-hidden"
                  style={{ filter: "contrast(1.08) brightness(0.93) saturate(0.75)" }}
                >
                  <ProfilePhoto className="w-full h-full" />
                </div>

                {/* SRM sticker on photo */}
                <div className="absolute -top-3 -right-2 bg-[#C5FF00] border-2 border-ink text-ink text-[8px] font-mono font-bold px-2 py-1 uppercase tracking-widest rotate-6 shadow-sm">
                  SRM<br/>2027
                </div>

                {/* Annotation near photo */}
                <p className="absolute -bottom-7 right-0 font-marker text-ink/40 dark:text-cream/40 text-sm -rotate-2">
                  that&apos;s me →
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12">
        <Marquee bg="bg-[#E8300A]" text="text-cream" />
      </div>
    </section>
  );
}
