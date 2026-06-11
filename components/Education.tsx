"use client";

import { motion } from "framer-motion";
import { education, achievements } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="bg-cream dark:bg-[#0f0b0b] text-ink dark:text-cream">

      {/* ── Section header bar ── */}
      <div className="border-b-2 border-ink dark:border-cream/10 px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-end gap-5">
          <span
            className="font-display leading-none text-ink/6 dark:text-cream/6 select-none"
            style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
          >
            04
          </span>
          <h2
            className="font-display uppercase text-ink dark:text-cream mb-1"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
          >
            Education
          </h2>
        </div>
        <span className="text-[8px] font-mono text-ink/20 dark:text-cream/20 uppercase tracking-[0.5em]">Pg. 05</span>
      </div>

      <div className="px-6 md:px-10 lg:px-14 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0 items-start">

          {/* Left: Education cards */}
          <div className="lg:pr-14 space-y-0 divide-y divide-ink/10 dark:divide-cream/10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="py-8 first:pt-0 last:pb-0 group"
              >
                <div className="overflow-hidden mb-2">
                  <h3
                    className="font-display text-ink dark:text-cream uppercase leading-none group-hover:text-[#E8300A] transition-colors duration-300"
                    style={{ fontSize: "clamp(26px, 4vw, 48px)" }}
                  >
                    {edu.institution}
                  </h3>
                </div>

                <p className="text-[13px] text-ink/50 dark:text-cream/50 mb-3">{edu.degree}</p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] font-mono text-ink/30 dark:text-cream/30 uppercase tracking-wider mb-4">
                  <span>{edu.location}</span>
                  <span>·</span>
                  <span>{edu.period}</span>
                </div>

                {edu.gpa && (
                  <div className="inline-flex items-center gap-2 border border-[#C5FF00]/40 px-3 py-1.5 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF00]" />
                    <span className="text-sm font-mono font-bold text-[#C5FF00] tracking-wider">GPA {edu.gpa}</span>
                  </div>
                )}

                {edu.coursework.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((c) => (
                      <span key={c} className="px-2 py-1 text-[9px] font-mono border border-ink/12 dark:border-cream/12 text-ink/35 dark:text-cream/35 uppercase tracking-wider">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block self-stretch bg-ink/8 dark:bg-cream/8" />

          {/* Right: Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[3px] w-8 bg-[#E8300A]" />
              <h3 className="font-display text-ink dark:text-cream uppercase text-3xl leading-none">Achievements</h3>
            </div>

            <ul className="space-y-5">
              {achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4 text-[14px] text-ink/50 dark:text-cream/50 group"
                >
                  <span className="mt-[8px] shrink-0 w-[5px] h-[5px] rounded-full bg-[#E8300A] group-hover:scale-150 transition-transform" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <p className="font-marker text-ink/20 dark:text-cream/20 text-base mt-10 -rotate-1 inline-block">
              and still going...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
