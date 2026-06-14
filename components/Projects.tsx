"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
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
            <p className="font-marker text-[#E8300A] text-base mt-0.5 -rotate-1 inline-block">
              currently cooking 👨‍🍳
            </p>
          </div>
        </div>
        <span className="text-[8px] font-mono text-cream/20 uppercase tracking-[0.5em]">Pg. 04</span>
      </div>

      <div className="divide-y-2 divide-cream/8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden"
          >
            {/* ── Project header — full width ── */}
            <div className="relative px-6 md:px-10 lg:px-14 pt-14 pb-0 overflow-hidden">
              {/* Ghost number */}
              <span
                className="absolute right-6 lg:right-14 top-6 font-display text-cream/4 select-none pointer-events-none leading-none"
                style={{ fontSize: "clamp(100px, 18vw, 240px)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Project title */}
              <div className="overflow-hidden mb-3 relative z-10">
                <h3
                  className="font-display text-cream uppercase leading-none"
                  style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Role + tech row */}
              <div className="flex flex-wrap items-center gap-4 mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-mono text-[#E8300A] uppercase tracking-[0.35em]">Role</span>
                  <div className="h-px w-4 bg-cream/20" />
                  <span className="text-[10px] font-mono text-cream/45 uppercase tracking-wider">Solo — Full Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider bg-cream/6 text-cream/40 border border-cream/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-mono text-cream/35 hover:text-[#E8300A] uppercase tracking-wider transition-colors"
                  >
                    <Github size={12} /> Source
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-mono text-[#C5FF00] hover:text-cream uppercase tracking-wider transition-colors"
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Red divider */}
              <div className="h-[2px] bg-[#E8300A]/30 relative z-10" />
            </div>

            {/* ── Article body — 3 column layout ── */}
            <div className="px-6 md:px-10 lg:px-14 pt-10 pb-14 grid md:grid-cols-3 gap-8 md:gap-12">

              {/* Column 1: Problem + Solution */}
              <div className="md:col-span-1 space-y-7">
                <div>
                  <span className="text-[8px] font-mono text-[#E8300A] uppercase tracking-[0.4em] block mb-3">
                    The Problem
                  </span>
                  <p className="text-[13px] text-cream/55 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="text-[8px] font-mono text-[#E8300A] uppercase tracking-[0.4em] block mb-3">
                    The Solution
                  </span>
                  <p className="text-[13px] text-cream/55 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Column 2: Role + Constraint + Trade-off */}
              <div className="md:col-span-1 space-y-7">
                <div>
                  <span className="text-[8px] font-mono text-cream/25 uppercase tracking-[0.4em] block mb-3">
                    My Role
                  </span>
                  <p className="text-[13px] text-cream/55 leading-relaxed">
                    {project.role}
                  </p>
                </div>
                <div>
                  <span className="text-[8px] font-mono text-cream/25 uppercase tracking-[0.4em] block mb-3">
                    Constraints
                  </span>
                  <p className="text-[13px] text-cream/55 leading-relaxed">
                    {project.constraint}
                  </p>
                </div>
                <div className="border-l-[3px] border-[#E8300A] pl-4">
                  <span className="text-[8px] font-mono text-[#E8300A] uppercase tracking-[0.4em] block mb-2">
                    Key Trade-off
                  </span>
                  <p className="text-[13px] text-cream/55 leading-relaxed italic">
                    {project.tradeoff}
                  </p>
                </div>
              </div>

              {/* Column 3: Impact */}
              <div className="md:col-span-1">
                <span className="text-[8px] font-mono text-cream/25 uppercase tracking-[0.4em] block mb-5">
                  Impact
                </span>
                <ul className="space-y-4">
                  {project.impact.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: j * 0.1 + 0.2 }}
                      className="flex gap-3 text-[13px] text-cream/60 leading-relaxed"
                    >
                      <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full bg-[#E8300A]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Handwritten aside */}
                {i === 0 && (
                  <p className="font-marker text-cream/20 text-base mt-8 -rotate-1 inline-block">
                    built to understand, not to show off.
                  </p>
                )}
                {i === 1 && (
                  <p className="font-marker text-cream/20 text-base mt-8 -rotate-1 inline-block">
                    no SDK. just raw WebRTC.
                  </p>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
