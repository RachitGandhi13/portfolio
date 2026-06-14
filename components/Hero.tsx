"use client";

import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-10 lg:px-16 pt-[56px]">

      {/* Top bar */}
      <div className="flex items-center justify-between py-6 border-b" style={{ borderColor: "var(--border)" }}>
        <motion.p {...up(0.2)} className="section-label">
          Building production, code & real impact
        </motion.p>
        <motion.p {...up(0.2)} className="section-label">
          Portfolio &#39;26
        </motion.p>
      </div>

      {/* Name block */}
      <div className="flex-1 flex flex-col justify-center py-10 relative">

        {/* "00" top right */}
        <motion.span
          {...up(0.5)}
          className="absolute top-6 right-0 section-label"
        >
          00
        </motion.span>

        {/* Big name */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrambleText
              text="RACHIT"
              delay={200}
              className="font-display block leading-[0.9] select-none"
              style={{ fontSize: "clamp(72px, 20vw, 300px)", color: "var(--fg)" }}
            />
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrambleText
              text="GANDHI"
              delay={400}
              className="font-display block leading-[0.9] select-none outline-text"
              style={{ fontSize: "clamp(72px, 20vw, 300px)" }}
            />
          </motion.div>
        </div>

        {/* Developer — label */}
        <motion.p {...up(0.55)} className="mt-5 section-label">
          Developer —
        </motion.p>
      </div>

      {/* Bottom info block */}
      <div
        className="py-8 grid md:grid-cols-2 gap-6 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <motion.div {...up(0.7)}>
          <p className="text-sm leading-[1.75] max-w-sm" style={{ color: "var(--muted)" }}>
            Rachit Gandhi is a developer focused on full-stack
            engineering and production systems — MERN, TypeScript,
            WebRTC, and Web3 (Solidity).
          </p>
        </motion.div>
        <motion.div {...up(0.8)} className="flex flex-col justify-end gap-1">
          <p className="section-label">
            I&#39;m a developer based in Chennai, IN
          </p>
          <p className="section-label">
            Focused on MERN, real-time systems & Web3
          </p>
        </motion.div>
      </div>
    </section>
  );
}
