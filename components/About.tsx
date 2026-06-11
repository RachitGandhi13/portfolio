"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import Barcode from "@/components/Barcode";

export default function About() {
  return (
    <section id="about" className="bg-ink text-cream">

      {/* ── Section header bar ── */}
      <div className="border-b-2 border-cream/10 px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-end gap-5">
          <span
            className="font-display leading-none text-cream/6 select-none"
            style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
          >
            01
          </span>
          <h2
            className="font-display uppercase text-cream mb-1"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
          >
            About Me
          </h2>
        </div>
        <span className="text-[8px] font-mono text-cream/20 uppercase tracking-[0.5em]">Pg. 02</span>
      </div>

      <div className="px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0 items-start">

          {/* Left: bio + pull quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-14 space-y-8"
          >
            {/* Pull quote */}
            <div className="border-l-[5px] border-[#E8300A] pl-6">
              <p className="font-display text-cream uppercase leading-tight" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
                "I build things<br />that scale."
              </p>
            </div>

            <div className="space-y-4 text-[15px] text-cream/55 leading-relaxed">
              <p>
                Final-year B.Tech CSE at{" "}
                <span className="text-cream font-semibold">SRM University</span>, Chennai.
                GPA <span className="font-mono text-[#C5FF00] font-bold">8.97/10</span>.
                I build production-grade apps with the{" "}
                <span className="text-cream font-semibold">MERN stack</span>, Next.js, and TypeScript.
              </p>
              <p>
                Deep niche in <span className="text-cream font-semibold">real-time systems</span>{" "}
                (WebRTC, Socket.io) and <span className="text-cream font-semibold">Web3</span>{" "}
                (Solidity). Shipped for real clients; contributed to production systems at Lions International.
              </p>
              <p>
                Off-keyboard: guitarist, competitive swimmer, External Affairs &amp; Editorial Lead for
                techno-cultural fests — and the guy everyone asks about fits.
              </p>
            </div>

            <p className="font-marker text-[#E8300A] text-xl -rotate-1 inline-block pt-2">
              fashion icon + coder. yes, both.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block self-stretch bg-cream/8" />

          {/* Right: tech spec sheet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-14"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream/10">
              <span className="text-[9px] font-mono text-cream/30 uppercase tracking-[0.4em]">
                Technical Spec Sheet
              </span>
              <Barcode className="w-20 text-cream/20 h-5" />
            </div>

            <div className="space-y-0">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-6 items-start py-4 border-b border-cream/8 last:border-0"
                >
                  <span className="text-[9px] font-mono text-[#E8300A] uppercase tracking-[0.25em] whitespace-nowrap pt-[3px] min-w-[80px]">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-[11px] font-mono border border-cream/12 text-cream/55 hover:border-[#E8300A]/50 hover:text-cream transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
