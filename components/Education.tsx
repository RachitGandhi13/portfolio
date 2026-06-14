"use client";

import { motion } from "framer-motion";
import { education, achievements } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="bg-cream dark:bg-[#0A0A0A] text-ink dark:text-cream">

      <div className="px-6 md:px-10 lg:px-14 pt-20 pb-0 flex items-center gap-4">
        <span className="text-[9px] font-mono text-[#E8300A] uppercase tracking-[0.45em]">04</span>
        <div className="flex-1 h-px bg-ink/10 dark:bg-cream/10" />
        <span className="text-[9px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-[0.45em]">Education</span>
      </div>

      <div className="px-6 md:px-10 lg:px-14 mt-16 pb-20 grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0">

        {/* Left: education */}
        <div className="lg:pr-14 divide-y divide-ink/8 dark:divide-cream/8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-8 first:pt-0 group"
            >
              <div className="overflow-hidden mb-2">
                <h3
                  className="font-display text-ink dark:text-cream uppercase leading-none group-hover:text-[#E8300A] transition-colors duration-200"
                  style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
                >
                  {edu.institution}
                </h3>
              </div>
              <p className="text-[12px] text-ink/40 dark:text-cream/40 mb-3">{edu.degree}</p>
              <div className="flex flex-wrap gap-x-5 text-[9px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-wider mb-4">
                <span>{edu.location}</span>
                <span>·</span>
                <span>{edu.period}</span>
              </div>
              {edu.gpa && (
                <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-[#C5FF00] border border-[#C5FF00]/25 px-3 py-1">
                  GPA {edu.gpa}
                </span>
              )}
              {edu.coursework.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {edu.coursework.map((c) => (
                    <span key={c} className="text-[9px] font-mono text-ink/25 dark:text-cream/25 border border-ink/8 dark:border-cream/8 px-2 py-0.5 uppercase tracking-wider">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden lg:block bg-ink/8 dark:bg-cream/8" />

        {/* Right: achievements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:pl-14"
        >
          <p className="text-[9px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-[0.45em] mb-8">Also</p>
          <ul className="space-y-5">
            {achievements.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 text-[13px] text-ink/40 dark:text-cream/40 leading-relaxed"
              >
                <span className="mt-[8px] shrink-0 w-[3px] h-[3px] rounded-full bg-[#E8300A]" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
