"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { label: "Full-Stack", italic: false },
  { label: "TypeScript", italic: false },
  { label: "Real-Time", italic: true },
  { label: "Web3", italic: false },
  { label: "Next.js", italic: true },
];

function ServiceItem({ label, italic, index }: { label: string; italic: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
      animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      style={{ borderBottom: "1px solid #1E1E1E" }}
    >
      <h3
        className={`font-display font-bold py-4 leading-none ${italic ? "font-italic" : ""}`}
        style={{
          fontSize: "clamp(32px, 5vw, 80px)",
          color: "#F5F4F0",
          fontStyle: italic ? "italic" : "normal",
          fontFamily: italic ? "var(--font-cormorant), serif" : undefined,
        }}
      >
        {label}
      </h3>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section
      style={{
        backgroundColor: "#0A0A0A",
        color: "#F5F4F0",
        borderTop: "1px solid #1E1E1E",
      }}
    >
      <div className="px-6 md:px-10 lg:px-16 py-20">
        {/* Description block */}
        <div className="mb-16 grid md:grid-cols-2 gap-12">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-sans text-[clamp(16px,2vw,24px)] leading-[1.6] font-light mb-3"
              style={{ color: "#F5F4F0" }}
            >
              I build &amp; ship web apps with a passion for scale.
            </p>
            <p
              className="font-sans text-[clamp(16px,2vw,24px)] leading-[1.6] font-light"
              style={{ color: "#555555" }}
            >
              And bring ideas to life with clean code.
            </p>
            <p className="font-mono text-[11px] mt-6 tracking-[0.06em]" style={{ color: "#555555" }}>
              /Here&apos;s some of my projects
            </p>
          </motion.div>

          <div className="flex items-start justify-end">
            <span className="font-mono text-[32px]" style={{ color: "#1E1E1E" }}>+</span>
          </div>
        </div>

        {/* Services list */}
        <div style={{ borderTop: "1px solid #1E1E1E" }}>
          {services.map((s, i) => (
            <ServiceItem key={s.label} label={s.label} italic={s.italic} index={i} />
          ))}
        </div>

        {/* projects heading */}
        <div className="mt-20 mb-6">
          <h1
            className="font-display font-bold leading-none"
            style={{ fontSize: "clamp(48px, 8vw, 120px)", color: "#F5F4F0" }}
          >
            pr
            <span
              className="font-italic"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
              }}
            >
              o
            </span>
            jects
          </h1>
        </div>

        {/* Sticky sub-header */}
        <div
          className="sticky top-0 z-10 py-3 mb-12"
          style={{ backgroundColor: "#0A0A0A", borderBottom: "1px solid #1E1E1E" }}
        >
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase" style={{ color: "#555555" }}>
            Here&apos;s some of my projects
          </span>
        </div>
      </div>
    </section>
  );
}
