"use client";

import { motion } from "framer-motion";
import { education, achievements } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
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
        <span className="text-[9px] font-mono text-red uppercase tracking-[0.4em]">04</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.4em]" style={{ color: "var(--muted)" }}>
          Education
        </span>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: "var(--border)" }} />
      </motion.div>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-14 md:gap-20">

        <div className="space-y-0" style={{ borderTop: "1px solid var(--border)" }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group py-7"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <h3
                className="font-sans font-semibold mb-2 group-hover:text-red transition-colors duration-200"
                style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "var(--fg)" }}
              >
                {edu.institution}
              </h3>
              <p className="text-sm mb-2" style={{ color: "var(--muted)" }}>{edu.degree}</p>
              <div className="flex flex-wrap gap-3 text-[10px] font-mono uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
                <span>{edu.location}</span>
                <span>·</span>
                <span>{edu.period}</span>
              </div>
              {edu.gpa && (
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-3 py-1 rounded-full"
                  style={{ color: "#C5FF00", border: "1px solid rgba(197,255,0,0.25)", backgroundColor: "rgba(197,255,0,0.06)" }}
                >
                  GPA {edu.gpa}
                </span>
              )}
              {edu.coursework.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5"
                      style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] mb-6" style={{ color: "var(--muted)" }}>
            Beyond code
          </p>
          <ul className="space-y-4">
            {achievements.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                <span className="mt-[9px] shrink-0 w-[3px] h-[3px] rounded-full bg-red" style={{ opacity: 0.7 }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
