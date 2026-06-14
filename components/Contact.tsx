"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ScrambleText from "./ScrambleText";

const socials = [
  { label: "GitHub", href: personalInfo.github, handle: "@RachitGandhi13" },
  { label: "LinkedIn", href: personalInfo.linkedin, handle: "rachitgandhi13" },
  { label: "Email", href: `mailto:${personalInfo.email}`, handle: personalInfo.email },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-20"
      >
        <span className="text-[9px] font-mono text-red uppercase tracking-[0.4em]">05</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.4em]" style={{ color: "var(--muted)" }}>
          Contact
        </span>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: "var(--border)" }} />
      </motion.div>

      {/* CTA headline */}
      <div className="mb-20 select-none">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrambleText
              text="HAVE AN"
              delay={80}
              className="font-display block leading-none"
              style={{ fontSize: "clamp(52px, 12vw, 180px)", color: "var(--fg)" }}
            />
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrambleText
              text="IDEA?"
              delay={250}
              className="font-display block leading-none outline-text"
              style={{ fontSize: "clamp(52px, 12vw, 180px)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-sm leading-[1.8] mb-8 max-w-xs" style={{ color: "var(--muted)" }}>
            Open to full-time roles, internships, and interesting projects.
            Response time: quick.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 text-sm font-mono"
            style={{ color: "var(--fg)" }}
          >
            <span className="underline underline-offset-4 decoration-[var(--border)] group-hover:decoration-red group-hover:text-red transition-all duration-200">
              {personalInfo.email}
            </span>
            <ArrowUpRight
              size={14}
              className="group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
            />
          </a>
        </motion.div>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center justify-between py-5"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div>
                <p
                  className="font-sans font-medium text-base leading-none mb-1 group-hover:text-red transition-colors duration-200"
                  style={{ color: "var(--fg)" }}
                >
                  {s.label}
                </p>
                <p className="text-[10px] font-mono tracking-wider" style={{ color: "var(--muted)" }}>
                  {s.handle}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                style={{ color: "var(--muted)" }}
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-20 pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="font-display text-xl tracking-widest" style={{ color: "var(--muted)" }}>
          RG<span className="text-red">.</span>
        </span>
        <span className="text-[9px] font-mono uppercase tracking-[0.4em]" style={{ color: "var(--muted)" }}>
          © 2026 Rachit Gandhi
        </span>
      </motion.div>
    </section>
  );
}
