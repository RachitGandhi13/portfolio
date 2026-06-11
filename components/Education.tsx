"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Star, Award } from "lucide-react";
import { education, achievements } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#131010] text-cream py-24 md:py-32 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader number="04" title="Education" onDark />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education cards */}
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-cream/10 hover:border-[#E8300A]/30 transition-colors p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 p-2 border border-[#E8300A]/30 text-[#E8300A] shrink-0">
                    <GraduationCap size={17} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-cream uppercase text-2xl leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-[13px] text-cream/48">{edu.degree}</p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-cream/30 uppercase tracking-wider">
                        <MapPin size={9} />
                        {edu.location}
                      </span>
                      <span className="text-[10px] font-mono text-cream/30 uppercase tracking-wider">
                        {edu.period}
                      </span>
                    </div>

                    {edu.gpa && (
                      <div className="flex items-center gap-2 mt-4 border border-[#C5FF00]/30 px-3 py-1.5 inline-flex w-fit">
                        <Star size={10} className="text-[#C5FF00]" />
                        <span className="text-sm font-mono font-bold text-[#C5FF00] tracking-wider">
                          GPA {edu.gpa}
                        </span>
                      </div>
                    )}

                    {edu.coursework.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-1 text-[9px] font-mono border border-cream/10 text-cream/35 uppercase tracking-wider"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-cream/10 p-6 h-fit"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cream/10">
              <div className="p-2 border border-[#C5FF00]/30 text-[#C5FF00]">
                <Award size={15} />
              </div>
              <h3 className="font-display text-cream uppercase text-2xl leading-none">
                Achievements
              </h3>
            </div>

            <ul className="space-y-4">
              {achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-start gap-3 text-[14px] text-cream/50"
                >
                  <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#E8300A] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Handwritten sign-off */}
            <p className="font-marker text-cream/25 text-base mt-8 -rotate-1 inline-block">
              and still going...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
