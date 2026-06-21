"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "Solidity", "C/C++"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "WebRTC", "Socket.io", "Flask"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    label: "DevOps",
    items: ["Docker", "GitHub Actions", "CI/CD", "Linux", "Nginx", "Vercel"],
  },
];

const marqueeSkills = [
  "Production Systems",
  "Real-Time",
  "Web3",
  "Full-Stack",
  "DevOps",
  "WebRTC",
  "MERN",
  "TypeScript",
  "API Design",
  "Performance",
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="relative bg-[#F5F4F0] dark:bg-[#0a0a0a] py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-12 md:mb-20">
            <span className="h-px w-10 bg-[#A87D5C]" />
            <span className="font-mono-label text-[#A87D5C] dark:text-[#E8E4D9]">03 — Toolkit</span>
          </div>
          <h2 className="font-display font-medium tracking-tighter text-[#0a0a0a] dark:text-white text-5xl md:text-7xl lg:text-[88px] leading-[0.95] max-w-5xl mb-20 md:mb-28">
            Quietly opinionated about the{" "}
            <span className="font-serif-italic text-[#A87D5C] dark:text-[#E8E4D9]">tools</span> that
            shape the work.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-10 border-t border-black/10 dark:border-white/10 pt-14"
        >
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <div className="font-mono-label text-[#A87D5C] mb-6">{g.label}</div>
              <ul className="space-y-3">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="font-display text-black/85 dark:text-white/85 text-2xl md:text-[26px] tracking-tighter hover:text-[#A87D5C] dark:hover:text-[#E8E4D9] transition-colors cursor-default"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-28 md:mt-40 border-y border-black/10 dark:border-white/10 py-10 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-12 px-6 font-display text-black/30 dark:text-white/30 text-3xl md:text-5xl lg:text-6xl tracking-tighter whitespace-nowrap"
            >
              {s}
              <span className="text-[#A87D5C] text-2xl md:text-3xl">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
