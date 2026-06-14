"use client";

import { motion, AnimatePresence } from "framer-motion";

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
          style={{ backgroundColor: "#0A0A0A", color: "#F5F4F0" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-8 z-[801] font-mono text-[20px] leading-none"
            style={{ color: "#F5F4F0", background: "none", border: "none", opacity: 0.6 }}
            aria-label="Close about panel"
          >
            ×
          </button>

          <div className="px-6 md:px-10 lg:px-16 pt-24 pb-24 max-w-3xl">
            {/* Bio */}
            <p
              className="font-sans text-[clamp(18px,2.8vw,32px)] leading-[1.5] font-light mb-16"
              style={{ color: "#F5F4F0" }}
            >
              Rachit Gandhi is a developer focused on full-stack
              engineering and production systems — MERN, TypeScript,
              WebRTC, and Web3. Building things that ship.
            </p>

            {/* Experiences */}
            <div className="mb-12">
              <h6
                className="font-mono text-[10px] uppercase tracking-[0.35em] mb-5"
                style={{ color: "#555555" }}
              >
                Experiences
              </h6>
              <ul className="space-y-3">
                <li className="flex items-baseline justify-between">
                  <span className="font-sans text-[15px]" style={{ color: "#F5F4F0" }}>
                    The Language Salon
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: "#555555" }}>
                    Feb — Mar &apos;26
                  </span>
                </li>
                <li className="flex items-baseline justify-between">
                  <span className="font-sans text-[15px]" style={{ color: "#F5F4F0" }}>
                    Lions International
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: "#555555" }}>
                    May — Jul &apos;25
                  </span>
                </li>
              </ul>
            </div>

            {/* Recognitions */}
            <div className="mb-12">
              <h6
                className="font-mono text-[10px] uppercase tracking-[0.35em] mb-5"
                style={{ color: "#555555" }}
              >
                Recognitions
              </h6>
              <ul className="space-y-3">
                {[
                  "Oracle Certified Foundations Associate",
                  "NPTEL — Programming in Java",
                  "DBMS Certification (Scaler)",
                  "GPA 8.97 / 10",
                ].map((item) => (
                  <li key={item} className="font-sans text-[15px]" style={{ color: "#F5F4F0" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Press / Activities */}
            <div className="mb-12">
              <h6
                className="font-mono text-[10px] uppercase tracking-[0.35em] mb-5"
                style={{ color: "#555555" }}
              >
                Press
              </h6>
              <ul className="space-y-3">
                <li className="font-sans text-[15px]" style={{ color: "#F5F4F0" }}>
                  External Affairs Lead — SRM techno-cultural fests
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
