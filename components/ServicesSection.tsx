"use client";

import { motion } from "framer-motion";

const services = [
  { label: "Full-Stack", italic: false },
  { label: "TypeScript", italic: false },
  { label: "Real-Time", italic: true },
  { label: "DevOps", italic: false },
  { label: "Web3", italic: false },
  { label: "Next.js", italic: true },
];

function ServiceItem({ label, italic, index }: { label: string; italic: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <h3
        className="font-display font-bold py-4 leading-none"
        style={{
          fontSize: "clamp(32px, 5vw, 80px)",
          color: "var(--fg)",
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
  return (
    <section
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--fg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="px-6 md:px-10 lg:px-16 py-20">
        {/* Description block */}
        <div className="mb-16 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="font-sans text-[clamp(16px,2vw,24px)] leading-[1.6] font-light mb-3"
              style={{ color: "var(--fg)" }}
            >
              I build &amp; ship web apps with a passion for scale.
            </p>
            <p
              className="font-sans text-[clamp(16px,2vw,24px)] leading-[1.6] font-light"
              style={{ color: "var(--muted)" }}
            >
              And bring ideas to life with clean code.
            </p>
          </motion.div>

          <div className="flex items-start justify-end">
            <span className="font-mono text-[32px]" style={{ color: "var(--border)" }}>+</span>
          </div>
        </div>

        {/* Services list */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {services.map((s, i) => (
            <ServiceItem key={s.label} label={s.label} italic={s.italic} index={i} />
          ))}
        </div>

        {/* projects heading */}
        <motion.div
          className="mt-20 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-display font-bold leading-none"
            style={{ fontSize: "clamp(48px, 8vw, 120px)", color: "var(--fg)" }}
          >
            pr
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
              }}
            >
              o
            </span>
            jects
          </h2>
        </motion.div>

        {/* Sticky sub-header */}
        <div
          className="sticky top-0 z-10 py-3 mb-12"
          style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
        >
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase" style={{ color: "var(--muted)" }}>
            Here&apos;s some of my projects
          </span>
        </div>
      </div>
    </section>
  );
}
