"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#f5f0e8] dark:bg-[#0A0A0A] text-ink dark:text-cream">

      <div className="px-6 md:px-10 lg:px-14 pt-20 pb-0 flex items-center gap-4">
        <span className="text-[9px] font-mono text-[#E8300A] uppercase tracking-[0.45em]">02</span>
        <div className="flex-1 h-px bg-ink/10 dark:bg-cream/10" />
        <span className="text-[9px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-[0.45em]">Work</span>
      </div>

      <div className="px-6 md:px-10 lg:px-14 mt-16 divide-y divide-ink/8 dark:divide-cream/8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group py-14 relative overflow-hidden"
          >
            <span
              className="absolute right-0 top-10 font-display text-ink/[0.035] dark:text-cream/[0.035] select-none pointer-events-none leading-none"
              style={{ fontSize: "clamp(100px, 16vw, 220px)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="overflow-hidden mb-4">
              <motion.h3
                initial={{ y: "104%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-ink dark:text-cream uppercase leading-none relative z-10"
                style={{ fontSize: "clamp(36px, 7vw, 100px)" }}
              >
                {exp.company}
              </motion.h3>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-8 relative z-10">
              <span className="text-[10px] font-mono text-[#E8300A] uppercase tracking-[0.3em]">{exp.role}</span>
              <span className="text-ink/20 dark:text-cream/20 text-xs">·</span>
              <span className="text-[10px] font-mono text-ink/30 dark:text-cream/30 uppercase tracking-wider">{exp.period}</span>
              <span className="text-ink/20 dark:text-cream/20 text-xs">·</span>
              <span className="text-[10px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-wider">{exp.location}</span>
            </div>

            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3 relative z-10 max-w-4xl">
              {exp.bullets.map((b, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: j * 0.07 + 0.2 }}
                  className="flex gap-3 text-[13px] text-ink/40 dark:text-cream/40 leading-relaxed"
                >
                  <span className="mt-[8px] shrink-0 w-[3px] h-[3px] rounded-full bg-[#E8300A]" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="h-px bg-ink/8 dark:bg-cream/8 mx-6 md:mx-10 lg:mx-14" />
    </section>
  );
}
