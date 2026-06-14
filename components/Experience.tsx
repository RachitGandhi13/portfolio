"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-14"
      >
        <span className="text-[9px] font-mono text-red uppercase tracking-[0.4em]">02</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.4em]" style={{ color: "var(--muted)" }}>
          Experience
        </span>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: "var(--border)" }} />
      </motion.div>

      <div className="space-y-0" style={{ borderTop: "1px solid var(--border)" }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group py-8"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-6 mb-6">
              <div>
                <h3
                  className="font-sans font-semibold leading-tight mb-1.5 group-hover:text-red transition-colors duration-200"
                  style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "var(--fg)" }}
                >
                  {exp.company}
                </h3>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
                  {exp.role}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-mono uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  {exp.period}
                </p>
                <p className="text-[10px] font-mono mt-1" style={{ color: "var(--muted)" }}>
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-2.5">
              {exp.bullets.map((b, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  <span
                    className="mt-[9px] shrink-0 w-[3px] h-[3px] rounded-full bg-red"
                    style={{ opacity: 0.7 }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
