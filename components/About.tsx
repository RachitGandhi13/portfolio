"use client";

import { motion } from "framer-motion";
import ProfilePhoto from "./ProfilePhoto";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

const experiences = [
  { company: "The Language Salon", role: "Full-Stack Developer", period: "Feb — Mar '26", location: "Remote" },
  { company: "Lions International", role: "Software Developer Intern", period: "May — Jul '25", location: "India" },
];

const recognitions = [
  "Oracle Certified Foundations Associate",
  "NPTEL — Programming in Java",
  "DBMS Certification (Scaler)",
  "GPA 8.97 / 10",
];

const extras = [
  "External Affairs & Editorial Lead at SRM techno-cultural fests",
  "Competitive swimmer & guitarist",
  "Final-year Computer Science at SRM University, Chennai",
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 lg:px-16 py-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-14 md:gap-24">

        {/* Left: photo */}
        <motion.div {...up(0.1)}>
          <div
            className="aspect-[3/4] overflow-hidden"
            style={{ backgroundColor: "var(--surface)" }}
          >
            <div style={{ filter: "grayscale(1) contrast(1.05) brightness(0.9)" }} className="w-full h-full">
              <ProfilePhoto className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Right: bio + experiences + recognitions */}
        <div className="space-y-10">

          {/* Bio */}
          <motion.div {...up(0.15)}>
            <p className="text-sm leading-[1.85]" style={{ color: "var(--muted)" }}>
              I design & build web applications with a passion for
              production-quality engineering. MERN stack, real-time
              systems with WebRTC, smart contracts with Solidity — and
              whatever else the problem actually needs.
            </p>
          </motion.div>

          {/* Experiences */}
          <motion.div {...up(0.2)}>
            <p className="section-label mb-5">###### Experiences</p>
            <div className="space-y-0" style={{ borderTop: "1px solid var(--border)" }}>
              {experiences.map((e) => (
                <div
                  key={e.company}
                  className="flex items-start justify-between gap-4 py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div>
                    <p className="text-[13px] font-medium" style={{ color: "var(--fg)" }}>
                      {e.company}
                    </p>
                    <p className="text-[11px] font-mono mt-0.5" style={{ color: "var(--muted)" }}>
                      {e.role}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[11px] font-mono italic" style={{ color: "var(--muted)" }}>
                      {e.period}
                    </p>
                    <p className="text-[10px] font-mono mt-0.5" style={{ color: "var(--muted)" }}>
                      {e.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recognitions */}
          <motion.div {...up(0.25)}>
            <p className="section-label mb-5">###### Recognitions</p>
            <ul className="space-y-2">
              {recognitions.map((r) => (
                <li key={r} className="flex items-center gap-3 text-[13px]" style={{ color: "var(--muted)" }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--muted)" }} />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Beyond code */}
          <motion.div {...up(0.3)}>
            <p className="section-label mb-5">###### Beyond code</p>
            <ul className="space-y-2">
              {extras.map((x) => (
                <li key={x} className="flex items-center gap-3 text-[13px]" style={{ color: "var(--muted)" }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--muted)" }} />
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
