"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-cream dark:bg-[#0f0b0b] text-ink dark:text-cream">

      {/* ── Section header bar ── */}
      <div className="border-b-2 border-ink dark:border-cream/10 px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-end gap-5">
          <span
            className="font-display leading-none text-ink/6 dark:text-cream/6 select-none"
            style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
          >
            02
          </span>
          <h2
            className="font-display uppercase text-ink dark:text-cream mb-1"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
          >
            Experience
          </h2>
        </div>
        <span className="text-[8px] font-mono text-ink/20 dark:text-cream/20 uppercase tracking-[0.5em]">Pg. 03</span>
      </div>

      <div className="px-6 md:px-10 lg:px-14 divide-y-2 divide-ink/8 dark:divide-cream/8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group py-14 md:py-16 relative overflow-hidden"
          >
            {/* Huge background index number */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-ink/4 dark:text-cream/4 select-none pointer-events-none leading-none"
              style={{ fontSize: "clamp(120px, 20vw, 280px)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Company name — fills width */}
            <div className="overflow-hidden mb-3">
              <motion.h3
                initial={{ y: "105%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-ink dark:text-cream uppercase leading-none relative z-10"
                style={{ fontSize: "clamp(44px, 8vw, 110px)" }}
              >
                {exp.company}
              </motion.h3>
            </div>

            {/* Role — centered with lines */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="h-px flex-1 bg-ink/15 dark:bg-cream/15" />
              <span className="text-[10px] font-mono text-[#E8300A] uppercase tracking-[0.3em] whitespace-nowrap">
                {exp.role}
              </span>
              <div className="h-px flex-1 bg-ink/15 dark:bg-cream/15" />
              <span className="text-[10px] font-mono text-ink/30 dark:text-cream/30 uppercase tracking-wider whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            {/* Bullets — 2 column */}
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 relative z-10">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 text-[13px] text-ink/50 dark:text-cream/50 leading-relaxed">
                  <span className="mt-[7px] w-[4px] h-[4px] rounded-full bg-[#E8300A] shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
