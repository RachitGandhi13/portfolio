"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_BG =
  "https://images.pexels.com/photos/32624440/pexels-photo-32624440.jpeg";

const headingWords = [
  { text: "Building",          cls: "text-white/60" },
  { text: "Production-Grade",  cls: "font-serif-italic text-[#E8E4D9]" },
  { text: "Web",               cls: "text-white/80" },
  { text: "Applications",      cls: "text-white" },
];

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-end"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale, willChange: "transform" }}
        className="absolute inset-0 -z-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-[120%] object-cover opacity-[0.55]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(168,125,92,0.18),transparent_55%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity, willChange: "transform, opacity" }}
        className="relative max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 lg:pb-32 pt-32 w-full"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="flex items-center gap-3 mb-10 md:mb-14"
        >
          <span className="h-px w-10 bg-[#A87D5C]" />
          <span className="font-mono-label text-white/45">
            Portfolio — 2026
          </span>
        </motion.div>

        {/* Big heading */}
        <h1 className="font-display font-medium tracking-tighter text-[44px] sm:text-[64px] md:text-[88px] lg:text-[120px] xl:text-[140px] leading-[0.92]">
          {headingWords.map((word, i) => (
            <span
              key={i}
              className="overflow-hidden inline-block mr-[0.18em] align-baseline"
            >
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.55 + i * 0.12,
                }}
                className={`inline-block ${word.cls}`}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
          <span className="overflow-hidden inline-block align-baseline">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.55 + headingWords.length * 0.12 }}
              className="inline-block text-[#A87D5C]"
            >
              .
            </motion.span>
          </span>
        </h1>

        {/* Bottom info row */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
            className="md:col-span-5 lg:col-span-4 text-white/50 text-[15px] md:text-[16px] leading-relaxed font-light max-w-md"
          >
            Full-stack developer and DevOps engineer. MERN, Next.js, TypeScript.
            AI-integrated platforms, production infrastructure, Web3. Based in Chennai, IN.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.25 }}
            className="md:col-span-7 lg:col-span-8 flex flex-col sm:flex-row gap-4 sm:gap-5 sm:justify-end items-start sm:items-center"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="lux-button border border-white/25 rounded-full px-7 py-3.5 text-[14px] font-display tracking-tight text-white inline-flex items-center gap-2"
            >
              <span>View Work</span>
              <span className="text-white/40">↓</span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="lux-button lux-button-bronze border border-[#A87D5C]/60 rounded-full px-7 py-3.5 text-[14px] font-display tracking-tight text-[#E8E4D9]"
            >
              Get in touch
            </button>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 md:mt-24 flex items-end justify-between border-t border-white/10 pt-6">
          <div className="flex gap-10 md:gap-16">
            {[
              { label: "Stack", value: "MERN", bronze: false },
              { label: "Based in", value: "Chennai, IN", bronze: false },
              { label: "Availability", value: "Open", bronze: true },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-mono-label text-white/30 mb-2">{s.label}</p>
                <p className={`text-[14px] font-light ${s.bronze ? "text-[#A87D5C]" : "text-white/85"}`}>{s.value}</p>
              </div>
            ))}
          </div>
          <span className="font-mono-label text-white/40 hidden md:block">
            Scroll ↓
          </span>
        </div>
      </motion.div>
    </section>
  );
}
