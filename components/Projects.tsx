"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-cream dark:bg-ink text-ink dark:text-cream">

      <div className="px-6 md:px-10 lg:px-14 pt-20 pb-0 flex items-center gap-4">
        <span className="text-[9px] font-mono text-[#E8300A] uppercase tracking-[0.45em]">03</span>
        <div className="flex-1 h-px bg-ink/10 dark:bg-cream/10" />
        <span className="text-[9px] font-mono text-ink/25 dark:text-cream/25 uppercase tracking-[0.45em]">Projects</span>
      </div>

      <div className="mt-16 divide-y divide-ink/8 dark:divide-cream/8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden px-6 md:px-10 lg:px-14"
          >
            {/* Red wipe */}
            <div className="absolute inset-0 bg-[#E8300A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />

            <div className="relative z-10 py-14">
              <div className="flex items-start justify-between gap-6 mb-8">
                <div className="overflow-hidden flex-1">
                  <motion.h3
                    initial={{ y: "104%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: i * 0.06 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-ink dark:text-cream group-hover:text-cream uppercase leading-none transition-colors duration-300"
                    style={{ fontSize: "clamp(32px, 5.5vw, 76px)" }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 mt-2 p-2.5 border border-ink/15 dark:border-cream/15 text-ink/35 dark:text-cream/35 group-hover:border-cream/50 group-hover:text-cream transition-all duration-200"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono uppercase tracking-wider px-2.5 py-1
                      border border-ink/12 dark:border-cream/12
                      text-ink/35 dark:text-cream/35
                      group-hover:border-cream/30 group-hover:text-cream/70
                      transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="space-y-6">
                  <div>
                    <p className="text-[8px] font-mono text-[#E8300A] group-hover:text-cream/60 uppercase tracking-[0.4em] mb-2.5 transition-colors duration-300">The Problem</p>
                    <p className="text-[13px] text-ink/45 dark:text-cream/45 group-hover:text-cream/80 leading-relaxed transition-colors duration-300">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-mono text-[#E8300A] group-hover:text-cream/60 uppercase tracking-[0.4em] mb-2.5 transition-colors duration-300">What I Built</p>
                    <p className="text-[13px] text-ink/45 dark:text-cream/45 group-hover:text-cream/80 leading-relaxed transition-colors duration-300">{project.solution}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[8px] font-mono text-ink/25 dark:text-cream/25 group-hover:text-cream/50 uppercase tracking-[0.4em] mb-2.5 transition-colors duration-300">My Role</p>
                    <p className="text-[13px] text-ink/45 dark:text-cream/45 group-hover:text-cream/80 leading-relaxed transition-colors duration-300">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-mono text-ink/25 dark:text-cream/25 group-hover:text-cream/50 uppercase tracking-[0.4em] mb-2.5 transition-colors duration-300">Constraints</p>
                    <p className="text-[13px] text-ink/45 dark:text-cream/45 group-hover:text-cream/80 leading-relaxed transition-colors duration-300">{project.constraint}</p>
                  </div>
                  <div className="border-l-[2px] border-ink/15 dark:border-cream/15 group-hover:border-cream/25 pl-4 transition-colors duration-300">
                    <p className="text-[8px] font-mono text-ink/25 dark:text-cream/25 group-hover:text-cream/50 uppercase tracking-[0.4em] mb-2 transition-colors duration-300">Trade-off</p>
                    <p className="text-[13px] text-ink/40 dark:text-cream/40 group-hover:text-cream/70 leading-relaxed italic transition-colors duration-300">{project.tradeoff}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[8px] font-mono text-ink/25 dark:text-cream/25 group-hover:text-cream/50 uppercase tracking-[0.4em] mb-5 transition-colors duration-300">Impact</p>
                  <ul className="space-y-4">
                    {project.impact.map((item, j) => (
                      <li key={j} className="flex gap-3 text-[13px] text-ink/45 dark:text-cream/45 group-hover:text-cream/80 leading-relaxed transition-colors duration-300">
                        <span className="mt-[8px] shrink-0 w-[3px] h-[3px] rounded-full bg-[#E8300A] group-hover:bg-cream/60 transition-colors duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
