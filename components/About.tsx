"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="bg-ink text-cream py-24 md:py-32 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader number="01" title="About Me" onDark />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <p className="text-cream/60 leading-relaxed text-[15px]">
              Final-year B.Tech CSE student at{" "}
              <span className="text-cream font-semibold">SRM University</span>,
              Chennai. GPA{" "}
              <span className="font-mono text-[#C5FF00] font-bold">8.97/10</span>.
              I build production-grade apps using the{" "}
              <span className="text-cream font-semibold">MERN stack</span>,
              Next.js, and TypeScript.
            </p>
            <p className="text-cream/60 leading-relaxed text-[15px]">
              Deep niche in{" "}
              <span className="text-cream font-semibold">real-time systems</span>{" "}
              (WebRTC, Socket.io) and{" "}
              <span className="text-cream font-semibold">Web3</span> (Solidity).
              Shipped for real clients; contributed to production MERN systems at
              Lions International.
            </p>
            <p className="text-cream/60 leading-relaxed text-[15px]">
              Off-keyboard: guitarist, competitive swimmer, External Affairs &amp;
              Editorial Lead for techno-cultural fests — and the guy everyone
              asks about fits.
            </p>

            {/* Handwritten aside */}
            <p className="font-marker text-[#E8300A] text-lg -rotate-1 inline-block pt-2">
              {`fashion icon + coder. yes, both.`}
            </p>
          </motion.div>

          {/* Skill spec sheet */}
          <div className="lg:col-span-3 border border-cream/10 p-6 md:p-8 space-y-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-cream/10">
              <span className="text-[9px] font-mono text-cream/30 uppercase tracking-[0.35em]">
                Technical Spec Sheet
              </span>
              <Barcode className="w-16 text-cream/20 h-4" />
            </div>

            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-5 items-start py-3.5 border-b border-cream/8 last:border-0"
              >
                <span className="text-[9px] font-mono text-[#E8300A] uppercase tracking-[0.25em] whitespace-nowrap pt-[4px] min-w-[76px]">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[11px] font-mono border border-cream/15 text-cream/60 hover:border-[#E8300A]/60 hover:text-cream transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Barcode({ className }: { className?: string }) {
  const bars = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2];
  const rects: { x: number; w: number }[] = [];
  let x = 0;
  bars.forEach((w) => { rects.push({ x, w }); x += w + 1; });
  return (
    <svg viewBox={`0 0 ${x} 16`} className={className} aria-hidden>
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={0} width={r.w} height={16} fill="currentColor" />
      ))}
    </svg>
  );
}
