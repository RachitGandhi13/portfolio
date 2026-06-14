"use client";

import { motion } from "framer-motion";

const MARQUEE_WORD = "Full-Stack ·";
const REPEAT = 12;

const skillTags = [
  "MERN Stack",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "WebRTC",
  "Socket.io",
  "MongoDB",
  "Solidity",
  "Web3",
  "Python",
  "REST APIs",
];

export default function ShowreelSkills() {
  return (
    <section style={{ borderTop: "1px solid var(--border)" }}>

      {/* Scrolling marquee — exactly like ning-h "Showreel" repeating */}
      <div className="overflow-hidden py-5" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-0">
              {[...Array(REPEAT)].map((_, j) => (
                <span
                  key={j}
                  className="font-display text-[clamp(28px,5vw,64px)] leading-none pr-6 whitespace-nowrap"
                  style={{ color: j % 2 === 0 ? "var(--fg)" : "transparent", WebkitTextStroke: j % 2 !== 0 ? "1px var(--stroke-color)" : undefined }}
                >
                  {MARQUEE_WORD}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Description + skills */}
      <div className="px-6 md:px-10 lg:px-16 py-16 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-base leading-[1.8] max-w-md" style={{ color: "var(--muted)" }}>
            I build & ship web apps with a passion for scale and
            reliability — from payment-integrated platforms to
            peer-to-peer video systems from scratch.
          </p>
          <p className="mt-4 text-base leading-[1.8] max-w-md" style={{ color: "var(--muted)" }}>
            And bring ideas to life with clean, production-ready code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <p className="section-label mb-6">
            A glimpse into the tools that shape my work
          </p>
          <div className="flex flex-wrap gap-2">
            {skillTags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.04 }}
                className="text-[11px] font-mono px-3 py-1.5 rounded-full border transition-colors duration-200"
                style={{ color: "var(--muted)", borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--fg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
