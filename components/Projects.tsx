"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

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

/* Project thumbnails */
const thumbnails: Record<string, React.ReactNode> = {
  "Trading Platform": (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/trading.png" alt="Trading Platform" className="w-full h-full object-cover" />
  ),
  "Video Conferencing": (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/videoCall.png" alt="Video Conferencing" className="w-full h-full object-cover" />
  ),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-10 lg:px-16 pb-24"
      style={{ backgroundColor: "var(--bg)" }}
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
              border: "1px solid var(--border)",
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
                  <div className="w-full h-full" style={{ backgroundColor: "var(--surface)" }} />
                )}
              </div>
            </a>

            {/* Card content */}
            <div className="card-content">
              <div className="card-title mb-3">
                <h2
                  className="font-display font-bold leading-tight"
                  style={{ fontSize: "clamp(20px, 2.5vw, 36px)", color: "var(--fg)" }}
                >
                  {project.title}
                </h2>
              </div>
              <div className="card-description flex items-end justify-between gap-4">
                <p
                  className="font-sans text-[13px] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {project.problem.split(".")[0]}.
                </p>
                <div className="card-svg flex-shrink-0">
                  <div className="card-svg-inner" style={{ color: "var(--fg)" }}>
                    <ArrowIcon />
                    <ArrowIcon />
                  </div>
                </div>
              </div>

              {/* Tech tags + GitHub link */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5"
                      style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[9px] uppercase tracking-wider transition-opacity hover:opacity-60 flex-shrink-0"
                  style={{ color: "var(--fg)", opacity: 0.4 }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
