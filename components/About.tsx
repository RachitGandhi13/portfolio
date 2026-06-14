"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import ProfilePhoto from "./ProfilePhoto";

const enter = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function About() {
  return (
    <section id="about" className="bg-ink text-cream">

      {/* Section label */}
      <div className="px-6 md:px-10 lg:px-14 pt-20 pb-0 flex items-center gap-4">
        <span className="text-[9px] font-mono text-[#E8300A] uppercase tracking-[0.45em]">01</span>
        <div className="flex-1 h-px bg-cream/10" />
        <span className="text-[9px] font-mono text-cream/25 uppercase tracking-[0.45em]">About</span>
      </div>

      {/* Photo + bio */}
      <div className="grid lg:grid-cols-[1fr_1fr] gap-0 mt-12">

        {/* Left: photo */}
        <motion.div
          {...enter(0)}
          className="relative overflow-hidden"
          style={{ minHeight: "400px" }}
        >
          <div
            className="absolute inset-0"
            style={{ filter: "grayscale(1) contrast(1.18) brightness(0.82)" }}
          >
            <ProfilePhoto className="w-full h-full" />
          </div>
          {/* Overlay label */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 to-transparent">
            <p className="text-[8px] font-mono text-cream/40 uppercase tracking-[0.45em]">
              Rachit Gandhi · SRM University · 2026
            </p>
          </div>
        </motion.div>

        {/* Right: bio */}
        <motion.div
          {...enter(0.1)}
          className="px-6 md:px-10 lg:px-14 py-14 flex flex-col justify-center space-y-6"
        >
          <p
            className="font-display text-cream uppercase leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Final-year CS at SRM Chennai.
          </p>

          <div className="space-y-4 text-[14px] text-cream/50 leading-[1.75] max-w-lg" style={{ textAlign: "justify" }}>
            <p>
              I build production software — MERN stack, Next.js, TypeScript.
              Real-time systems with WebRTC and Socket.io. Smart contracts
              with Solidity. Not side projects that collect dust, but things
              deployed for real clients.
            </p>
            <p>
              Interned at Lions International working on production MERN
              systems. Built and shipped a full payment-integrated platform
              for The Language Salon. GPA 8.97 if that tells you anything.
            </p>
            <p>
              Off the screen: guitarist, competitive swimmer, External Affairs
              lead at SRM&apos;s techno-cultural fest. Oracle certified.
              Occasionally the guy everyone asks about fits.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills strip */}
      <motion.div
        {...enter(0.15)}
        className="px-6 md:px-10 lg:px-14 py-14 border-t border-cream/8"
      >
        <div className="space-y-0 divide-y divide-cream/6">
          {skills.map((group) => (
            <div key={group.category} className="flex gap-8 items-baseline py-4">
              <span className="text-[9px] font-mono text-[#E8300A] uppercase tracking-[0.35em] w-24 shrink-0">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {group.items.map((item) => (
                  <span key={item} className="text-[12px] font-mono text-cream/40 hover:text-cream transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
