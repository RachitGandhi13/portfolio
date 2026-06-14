"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const thumbnails: Record<string, React.ReactNode> = {
  "Trading Platform": (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: "#080f08" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(34,197,94,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,197,94,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 220"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points="0,180 55,148 110,160 175,105 225,122 275,72 325,88 375,50 400,40 400,220 0,220"
          fill="url(#g1)"
        />
        <polyline
          points="0,180 55,148 110,160 175,105 225,122 275,72 325,88 375,50 400,40"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute top-5 left-5 flex gap-4">
        {["AAPL +2.4%", "TSLA −1.2%", "MSFT +0.8%"].map((t) => (
          <span key={t} className="text-[8px] font-mono" style={{ color: "rgba(34,197,94,0.5)" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  ),
  "Video Conferencing": (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: "#06060f" }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            translateX: "-50%",
            translateY: "-50%",
            border: "1px solid rgba(99,102,241,0.25)",
          }}
          animate={{
            width: [50 + i * 60, 90 + i * 70, 50 + i * 60],
            height: [50 + i * 60, 90 + i * 70, 50 + i * 60],
            opacity: [0.5, 0.12, 0.5],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.9, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-5 grid grid-cols-3 gap-2 opacity-35">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-sm flex items-center justify-center aspect-video"
            style={{ backgroundColor: "rgba(99,102,241,0.2)" }}
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "rgba(99,102,241,0.4)" }} />
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-4 right-5 text-[8px] font-mono"
        style={{ color: "rgba(99,102,241,0.4)", letterSpacing: "0.3em" }}
      >
        WebRTC · P2P
      </div>
    </div>
  ),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-10 lg:px-16 py-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* "/Here's some of my projects +" header — exact ning-h style */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-14"
      >
        <div className="flex items-center gap-2">
          <span className="section-label">/Here&#39;s some of my projects</span>
        </div>
        <span className="text-xl font-mono" style={{ color: "var(--muted)" }}>+</span>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            {/* Thumbnail */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden aspect-[16/10] mb-5"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
                {thumbnails[project.title] ?? (
                  <div className="w-full h-full" style={{ backgroundColor: "var(--surface)" }} />
                )}
              </div>
              {/* Visit overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
              >
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white flex items-center gap-1.5">
                  Visit <ArrowUpRight size={10} />
                </span>
              </div>
            </a>

            {/* Info */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3
                className="text-[15px] font-medium leading-snug"
                style={{ color: "var(--fg)" }}
              >
                {project.title}
              </h3>
              <span className="text-[10px] font-mono mt-0.5 shrink-0 italic" style={{ color: "var(--muted)" }}>
                2025
              </span>
            </div>

            <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              {project.problem.split(".")[0]}.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5"
                  style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
