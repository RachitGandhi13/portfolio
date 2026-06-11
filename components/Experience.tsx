"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#131010] text-cream py-24 md:py-32 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader number="02" title="Experience" onDark />
        </motion.div>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group border border-cream/10 hover:border-[#E8300A]/40 transition-colors duration-200 relative overflow-hidden"
            >
              {/* Red left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E8300A] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-7 md:p-9">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3
                      className="font-display text-cream leading-none uppercase"
                      style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
                    >
                      {exp.company}
                    </h3>
                    <p className="mt-1.5 text-[10px] font-mono text-[#E8300A] uppercase tracking-[0.22em]">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-cream/35 uppercase tracking-wider">
                      <Calendar size={10} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-cream/25 uppercase tracking-wider">
                      <MapPin size={10} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 border-t border-cream/8 pt-5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-4 text-[14px] text-cream/55 leading-relaxed">
                      <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#E8300A] shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
