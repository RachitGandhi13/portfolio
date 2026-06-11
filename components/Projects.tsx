"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-ink text-cream">

      {/* ── Section header bar ── */}
      <div className="border-b-2 border-cream/10 px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-end gap-5">
          <span
            className="font-display leading-none text-cream/6 select-none"
            style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
          >
            03
          </span>
          <div className="mb-1">
            <h2
              className="font-display uppercase text-cream leading-none"
              style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
            >
              Projects
            </h2>
            <p className="font-marker text-[#E8300A] text-base mt-1 -rotate-1 inline-block">
              currently cooking 👨‍🍳
            </p>
          </div>
        </div>
        <span className="text-[8px] font-mono text-cream/20 uppercase tracking-[0.5em]">Pg. 04</span>
      </div>

      <div className="divide-y-2 divide-cream/8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden px-6 md:px-10 lg:px-14 py-14 md:py-16"
          >
            {/* Full red wipe on hover */}
            <div className="absolute inset-0 bg-[#E8300A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />

            {/* Giant project number — background */}
            <span
              className="absolute right-6 lg:right-14 top-1/2 -translate-y-1/2 font-display text-cream/4 group-hover:text-cream/15 select-none pointer-events-none leading-none transition-colors duration-500 z-10"
              style={{ fontSize: "clamp(120px, 20vw, 280px)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="relative z-20 grid md:grid-cols-[1fr_auto] gap-8 items-start">
              {/* Left content */}
              <div>
                {/* Project title */}
                <div className="overflow-hidden mb-3">
                  <h3
                    className="font-display text-cream uppercase leading-none group-hover:text-ink transition-colors duration-300"
                    style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[13px] text-cream/48 group-hover:text-ink/70 leading-relaxed max-w-2xl mb-6 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider
                        bg-[#E8300A]/15 text-[#E8300A] border border-[#E8300A]/30
                        group-hover:bg-ink/20 group-hover:text-ink group-hover:border-ink/30
                        transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-cream/8 group-hover:border-ink/15 transition-colors duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[11px] font-mono text-cream/40 group-hover:text-ink/60 uppercase tracking-wider transition-colors duration-300 hover:text-cream"
                  >
                    <Github size={13} /> Source
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] font-mono text-[#C5FF00] group-hover:text-ink uppercase tracking-wider transition-colors duration-300"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-[11px] font-mono text-cream/20 group-hover:text-ink/30 uppercase tracking-wider transition-colors duration-300">
                      <ExternalLink size={13} /> Demo Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Arrow button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-3 border-2 border-cream/15 text-cream/40 hover:border-cream hover:text-cream group-hover:border-ink/40 group-hover:text-ink transition-all duration-300"
                aria-label="View project"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
