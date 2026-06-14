"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProfilePhoto from "./ProfilePhoto";

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPanel({ isOpen, onClose }: AboutPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "4%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "4%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[800] overflow-y-auto"
          style={{ backgroundColor: "var(--bg)", color: "var(--fg)", ['--muted' as string]: 'rgba(var(--fg-rgb), 0.62)' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-4 right-5 z-[801] flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ color: "var(--fg)", background: "none", border: "1px solid var(--border)", borderRadius: 4, opacity: 0.7, width: 56, height: 56, fontSize: 36, lineHeight: 1, cursor: "none" }}
            aria-label="Close about panel"
          >
            ×
          </button>

          <div className="px-6 md:px-10 lg:px-16 pt-24 pb-24 max-w-3xl">
            {/* Bio + Photo */}
            <div className="flex items-start gap-8 mb-6">
              <p
                className="font-sans text-[clamp(18px,2.8vw,32px)] leading-[1.5] font-light flex-1"
                style={{ color: "var(--fg)" }}
              >
                Rachit Gandhi is a developer focused on full-stack
                engineering and production systems: MERN, TypeScript,
                Web3, and DevOps. Building things that ship.
              </p>
              <ProfilePhoto className="w-28 h-28 md:w-36 md:h-36 rounded-full flex-shrink-0" />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 mb-16">
              {[
                { label: "GitHub",   href: "https://github.com/RachitGandhi13" },
                { label: "LinkedIn", href: "https://linkedin.com/in/rachitgandhi13" },
                { label: "LeetCode", href: "https://leetcode.com/u/rachitgandhi/" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-100"
                  style={{ color: "var(--fg)", opacity: 0.6, textDecoration: "none" }}
                >
                  {label} ↗
                </a>
              ))}
            </div>

            {/* Experiences */}
            <div className="mb-12">
              <h6
                className="font-mono text-[10px] uppercase tracking-[0.35em] mb-6"
                style={{ color: "var(--muted)" }}
              >
                Experiences
              </h6>

              <ul className="space-y-8">
                {/* Language Salon */}
                <li>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <a
                        href="https://thelanguagesalon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[15px] inline-flex items-center gap-1.5 transition-opacity hover:opacity-60"
                        style={{ color: "var(--fg)" }}
                      >
                        The Language Salon
                        <span style={{ color: "var(--muted)", fontSize: "11px" }}>↗</span>
                      </a>
                      <p className="font-mono text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>
                        Full Stack Developer (Freelance)
                      </p>
                    </div>
                    <span className="font-mono text-[11px] flex-shrink-0 mt-0.5" style={{ color: "var(--muted)" }}>
                      Feb to Mar 2026
                    </span>
                  </div>
                  <p className="font-sans text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    Built and deployed a production Next.js website with Razorpay payment integration,
                    SEO optimization, and an automated lead-capture system. Reduced page load time by 25%
                    and captured 30+ leads per month.
                  </p>
                </li>

                {/* Lions International */}
                <li>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <a
                        href="https://www.lionsclubs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[15px] inline-flex items-center gap-1.5 transition-opacity hover:opacity-60"
                        style={{ color: "var(--fg)" }}
                      >
                        Lions International
                        <span style={{ color: "var(--muted)", fontSize: "11px" }}>↗</span>
                      </a>
                      <p className="font-mono text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>
                        Software Developer Intern
                      </p>
                    </div>
                    <span className="font-mono text-[11px] flex-shrink-0 mt-0.5" style={{ color: "var(--muted)" }}>
                      May to Jul 2025
                    </span>
                  </div>
                  <p className="font-sans text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    Developed and debugged MERN stack applications, designed RESTful APIs with optimized
                    MongoDB queries, and resolved frontend state-management issues. Improved API response
                    time by 25% and cut debugging time by 25%.
                  </p>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h6
                className="font-mono text-[10px] uppercase tracking-[0.35em] mb-6"
                style={{ color: "var(--muted)" }}
              >
                Education
              </h6>
              <ul className="space-y-6">
                <li>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <p className="font-sans text-[15px]" style={{ color: "var(--fg)" }}>SRM University</p>
                      <p className="font-mono text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>
                        B.Tech, Computer Science and Engineering
                      </p>
                    </div>
                    <span className="font-mono text-[11px] flex-shrink-0 mt-0.5" style={{ color: "var(--muted)" }}>
                      2023 to 2027
                    </span>
                  </div>
                  <p className="font-sans text-[13px]" style={{ color: "var(--muted)" }}>
                    Chennai, India · GPA 9.00 / 10
                  </p>
                </li>
                <li>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <p className="font-sans text-[15px]" style={{ color: "var(--fg)" }}>Saint Francis School, Deoghar</p>
                      <p className="font-mono text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>
                        Class 12: 80% · Class 10: 95.4%
                      </p>
                    </div>
                    <span className="font-mono text-[11px] flex-shrink-0 mt-0.5" style={{ color: "var(--muted)" }}>
                      2021 to 2023
                    </span>
                  </div>
                  <p className="font-sans text-[13px]" style={{ color: "var(--muted)" }}>
                    Deoghar, India
                  </p>
                </li>
              </ul>
            </div>

            {/* Recognitions */}
            <div className="mb-12">
              <h6
                className="font-mono text-[10px] uppercase tracking-[0.35em] mb-5"
                style={{ color: "var(--muted)" }}
              >
                Recognitions
              </h6>
              <ul className="space-y-3">
                {[
                  { label: "Oracle Certified Foundations Associate", href: "https://catalog-education.oracle.com" },
                  { label: "NPTEL: Programming in Java",             href: "https://nptel.ac.in" },
                  { label: "DBMS Certification (Scaler)",            href: "https://www.scaler.com" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[15px] inline-flex items-center gap-1.5 transition-opacity hover:opacity-60"
                      style={{ color: "var(--fg)" }}
                    >
                      {label}
                      <span style={{ color: "var(--muted)", fontSize: "11px" }}>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Press / Activities */}
            <div className="mb-12">
              <h6
                className="font-mono text-[10px] uppercase tracking-[0.35em] mb-5"
                style={{ color: "var(--muted)" }}
              >
                Press
              </h6>
              <ul className="space-y-3">
                <li className="font-sans text-[15px]" style={{ color: "var(--fg)" }}>
                  External Affairs Member, SRM techno-cultural fest
                </li>
                <li>Swimmer and Guitarist</li>
              </ul>
            </div>

            {/* Resume download */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
              <a
                href="/RachitRESUME.pdf"
                download="RachitRESUME.pdf"
                className="group inline-flex items-center gap-3 transition-opacity hover:opacity-60"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="font-sans font-light"
                  style={{ fontSize: "clamp(22px, 3.5vw, 44px)", color: "var(--fg)", letterSpacing: "-0.01em" }}
                >
                  Download Resume
                </span>
                <span
                  className="font-mono text-[13px] transition-transform group-hover:translate-y-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  ↓ PDF
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
