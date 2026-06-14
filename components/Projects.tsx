"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const thumbnails: Record<string, React.ReactNode> = {
  "Trading Platform": (
    <div className="w-full h-full bg-gradient-to-br from-[#061a0e] via-[#0a2814] to-[#040d08] relative overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Chart */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          points="0,160 50,140 100,150 160,100 210,115 260,70 310,82 360,48 400,38"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="0,160 50,140 100,150 160,100 210,115 260,70 310,82 360,48 400,38 400,200 0,200"
          fill="url(#chartGrad)"
        />
      </svg>
      {/* Ticker */}
      <div className="absolute top-4 left-4 flex gap-4">
        {["AAPL +2.4%", "TSLA -1.2%", "MSFT +0.8%"].map((t) => (
          <span key={t} className="text-[8px] font-mono text-[#22c55e] opacity-60">{t}</span>
        ))}
      </div>
    </div>
  ),
  "Video Conferencing": (
    <div className="w-full h-full bg-gradient-to-br from-[#050814] via-[#080d24] to-[#030611] relative overflow-hidden">
      {/* Pulse circles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full border border-blue-400/20"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{ width: [40 + i * 50, 80 + i * 60, 40 + i * 50], height: [40 + i * 50, 80 + i * 60, 40 + i * 50], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}
      {/* User grid */}
      <div className="absolute inset-6 grid grid-cols-3 gap-2 opacity-40">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-sm bg-blue-900/60 flex items-center justify-center aspect-video">
            <div className="w-4 h-4 rounded-full bg-blue-400/40" />
          </div>
        ))}
      </div>
      {/* Signal label */}
      <div className="absolute bottom-4 right-4 text-[8px] font-mono text-blue-300/50 uppercase tracking-widest">
        WebRTC · P2P
      </div>
    </div>
  ),
};

function ProjectCard({ project, i }: { project: (typeof projects)[0]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-sm aspect-[16/9] mb-5"
        style={{ backgroundColor: "var(--surface)" }}>
        <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
          {thumbnails[project.title] ?? (
            <div className="w-full h-full" style={{ backgroundColor: "var(--surface)" }} />
          )}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--fg)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
          style={{ backgroundColor: "var(--bg)" }}
        >
          <ArrowUpRight size={14} style={{ color: "var(--fg)" }} />
        </a>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-sans font-semibold text-lg leading-tight" style={{ color: "var(--fg)" }}>
          {project.title}
        </h3>
        <span className="text-[10px] font-mono mt-1 shrink-0" style={{ color: "var(--muted)" }}>
          2025
        </span>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
        {project.problem.split(".")[0]}.
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
            style={{ color: "var(--muted)", borderColor: "var(--border)" }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-1 items-center text-[11px] font-mono uppercase tracking-[0.15em] transition-colors duration-200"
        style={{ color: "var(--muted)" }}>
        <span className="group-hover:text-red transition-colors duration-200">View on GitHub</span>
        <ArrowUpRight size={10} className="group-hover:text-red transition-colors duration-200" />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-14"
      >
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-mono text-red uppercase tracking-[0.4em]">03</span>
          <span className="text-[9px] font-mono uppercase tracking-[0.4em]" style={{ color: "var(--muted)" }}>
            Selected Work
          </span>
        </div>
        <div className="flex-1 h-px mx-8" style={{ backgroundColor: "var(--border)" }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
