"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

// Exact arrow SVG from ning-h
function ArrowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M7.39667 19.005L17.0683 9.33333L10.5583 9.33333C10.2489 9.33333 9.95217 9.21042 9.73338 8.99162C9.51458 8.77283 9.39167 8.47609 9.39167 8.16667C9.39167 7.85725 9.51458 7.5605 9.73338 7.34171C9.95217 7.12292 10.2489 7 10.5583 7L19.8333 7C20.1428 7 20.4395 7.12292 20.6583 7.34171C20.8771 7.5605 21 7.85725 21 8.16667L21 17.5C21 17.8094 20.8771 18.1062 20.6583 18.325C20.4395 18.5438 20.1428 18.6667 19.8333 18.6667H19.8917C19.5822 18.6667 19.2855 18.5438 19.0667 18.325C18.8479 18.1062 18.725 17.8094 18.725 17.5L18.725 11.025L9.08833 20.6617C8.97988 20.771 8.85084 20.8578 8.70867 20.917C8.5665 20.9763 8.41401 21.0068 8.26 21.0068C8.10599 21.0068 7.9535 20.9763 7.81133 20.917C7.66916 20.8578 7.54012 20.771 7.43167 20.6617C7.31999 20.5555 7.23045 20.4283 7.16819 20.2874C7.10594 20.1465 7.07221 19.9946 7.06896 19.8406C7.0657 19.6866 7.09299 19.5335 7.14923 19.39C7.20548 19.2466 7.28958 19.1158 7.39667 19.005Z"
        fill="currentColor"
      />
    </svg>
  );
}

const thumbnails: Record<string, React.ReactNode> = {
  "Trading Platform": (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: "#080f08" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(34,197,94,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,197,94,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1-card" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points="0,180 55,148 110,160 175,105 225,122 275,72 325,88 375,50 400,40 400,220 0,220"
          fill="url(#g1-card)"
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
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: "50%",
            left: "50%",
            width: 50 + i * 60,
            height: 50 + i * 60,
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(99,102,241,0.25)",
            animation: `pulse-ring ${3.5 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.9}s`,
          }}
        />
      ))}
      <div className="absolute inset-5 grid grid-cols-3 gap-2 opacity-20">
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
      className="px-6 md:px-10 lg:px-16 pb-24"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            data-cursor="View"
            className="card group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "clamp(16px, 2vw, 32px)",
              border: "1px solid #1E1E1E",
              cursor: "none",
            }}
          >
            {/* Card image */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden mb-5"
              style={{ aspectRatio: "16/10" }}
            >
              <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] grayscale group-hover:grayscale-0">
                {thumbnails[project.title] ?? (
                  <div className="w-full h-full" style={{ backgroundColor: "#141414" }} />
                )}
              </div>
            </a>

            {/* Card content */}
            <div className="card-content">
              <div className="card-title mb-3">
                <h2
                  className="font-display font-bold leading-tight"
                  style={{ fontSize: "clamp(20px, 2.5vw, 36px)", color: "#F5F4F0" }}
                >
                  {project.title}
                </h2>
              </div>
              <div className="card-description flex items-end justify-between gap-4">
                <p
                  className="font-sans text-[13px] leading-relaxed"
                  style={{ color: "#555555" }}
                >
                  {project.problem.split(".")[0]}.
                </p>
                <div className="card-svg flex-shrink-0">
                  <div className="card-svg-inner" style={{ color: "#F5F4F0" }}>
                    <ArrowIcon />
                    <ArrowIcon />
                  </div>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5"
                    style={{ color: "#555555", border: "1px solid #1E1E1E" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
