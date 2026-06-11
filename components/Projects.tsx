"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-ink text-cream py-24 md:py-32 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader number="03" title="Projects" onDark />
        </motion.div>

        {/* Handwritten label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-marker text-[#E8300A] text-xl -mb-4 -rotate-1 inline-block"
        >
          currently cooking 👨‍🍳
        </motion.p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group border-2 border-cream/10 hover:border-[#E8300A]/60 transition-all duration-200 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-7 flex flex-col flex-1">
                {/* Index + title + link */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-[9px] font-mono text-cream/25 uppercase tracking-[0.35em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="font-display text-cream uppercase leading-none mt-0.5"
                      style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 border border-cream/15 text-cream/35 hover:text-cream hover:border-cream/60 hover:bg-[#E8300A] hover:border-[#E8300A] transition-all"
                    aria-label="Source code"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <p className="text-[13px] text-cream/48 leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider bg-[#E8300A]/12 text-[#E8300A] border border-[#E8300A]/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 pt-4 border-t border-cream/8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[11px] font-mono text-cream/35 hover:text-cream uppercase tracking-wider transition-colors"
                  >
                    <Github size={13} />
                    Source
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] font-mono text-[#C5FF00] hover:text-cream uppercase tracking-wider transition-colors"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-[11px] font-mono text-cream/20 uppercase tracking-wider cursor-default">
                      <ExternalLink size={13} />
                      Demo Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
