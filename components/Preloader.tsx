"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const COMMITS = [
  { hash: "a3f9c21", msg: "feat: add 3D cube interaction" },
  { hash: "b7e2d04", msg: "fix: cursor blend mode on dark bg" },
  { hash: "c1a8f63", msg: "refactor: services section layout" },
  { hash: "d5b3e97", msg: "feat: WebRTC video conferencing" },
  { hash: "e9c4a12", msg: "chore: deploy portfolio '26" },
];

const DURATION     = 380;  // ms: 0→100 count
const HOLD         = 280;  // ms: pause on 100 before exit
const CONTENT_FADE = 220;  // ms: counter/ui fades out
const SLIDE        = 800;  // ms: curtains slide away

export default function Preloader() {
  const [visible,      setVisible]      = useState(true);
  const [contentOut,   setContentOut]   = useState(false);
  const [sliding,      setSliding]      = useState(false);
  const [count,        setCount]        = useState(0);
  const [time,         setTime]         = useState("");
  const [shownCommits, setShownCommits] = useState(0);
  const raf   = useRef<number>(0);
  const start = useRef<number>(0);

  // Live clock
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Commits stagger
  useEffect(() => {
    COMMITS.forEach((_, i) => {
      setTimeout(() => setShownCommits(i + 1), 20 + i * 60);
    });
  }, []);

  // Counter rAF
  useEffect(() => {
    const animate = (ts: number) => {
      if (!start.current) start.current = ts;
      const p = Math.min((ts - start.current) / DURATION, 1);
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setCount(Math.round(e * 100));
      if (p < 1) raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  // Exit sequence
  useEffect(() => {
    const base = DURATION + HOLD;
    const t1 = setTimeout(() => setContentOut(true), base);
    const t2 = setTimeout(() => setSliding(true),    base + CONTENT_FADE);
    const t3 = setTimeout(() => setVisible(false),   base + CONTENT_FADE + SLIDE + 60);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  const slideT = sliding
    ? { duration: SLIDE / 1000, ease: [0.86, 0, 0.07, 1] as const }
    : { duration: 0 };

  return (
    <>
      {/* ── TOP CURTAIN — slides up ──────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9000] overflow-hidden"
        style={{ height: "50vh", backgroundColor: "#080808" }}
        animate={sliding ? { y: "-100%" } : { y: 0 }}
        transition={slideT}
      >
        {/* Thin seam line at the split */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "1px", backgroundColor: "rgba(245,244,240,0.12)" }}
        />
      </motion.div>

      {/* ── BOTTOM CURTAIN — slides down ─────────────────────────────── */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-[9000] overflow-hidden"
        style={{ height: "50vh", backgroundColor: "#080808" }}
        animate={sliding ? { y: "100%" } : { y: 0 }}
        transition={slideT}
      >
        {/* Thin seam line at the split */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "1px", backgroundColor: "rgba(245,244,240,0.12)" }}
        />
      </motion.div>

      {/* ── CONTENT — above curtains, fades first ─────────────────────── */}
      <motion.div
        className="fixed inset-0 z-[9001] flex flex-col"
        animate={{ opacity: contentOut ? 0 : 1 }}
        transition={{ duration: CONTENT_FADE / 1000, ease: "easeOut" }}
        style={{ pointerEvents: "none" }}
      >
        {/* Scanline */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)",
          }}
        />

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 md:px-14 pt-8 relative z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "#2a2a2a" }}>
              branch
            </span>
            <span className="font-mono text-[10px]" style={{ color: "#22c55e" }}>main</span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.15em]" style={{ color: "#2a2a2a" }}>{time}</span>
        </div>

        {/* Counter */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative select-none">
            <span
              className="font-display font-bold leading-none tabular-nums"
              style={{
                fontSize: "clamp(120px, 22vw, 320px)",
                color: "#F5F4F0",
                letterSpacing: "-0.04em",
              }}
            >
              {String(count).padStart(2, "0")}
            </span>
            <span
              className="font-mono absolute"
              style={{
                fontSize: "clamp(14px, 2vw, 24px)",
                color: "#333",
                bottom: "18%",
                right: "-0.6em",
              }}
            >
              %
            </span>
          </div>
        </div>

        {/* Bottom: commits + name */}
        <div className="flex items-end justify-between px-8 md:px-14 pb-8 gap-8 relative z-10">
          <div className="flex flex-col gap-1 min-w-0">
            {COMMITS.slice(0, shownCommits).map((c, i) => (
              <motion.div
                key={c.hash}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-2.5"
              >
                <span className="font-mono text-[10px]" style={{ color: "#22c55e", flexShrink: 0 }}>
                  {c.hash}
                </span>
                <span
                  className="font-mono text-[10px] truncate"
                  style={{ color: i === shownCommits - 1 ? "#555" : "#2a2a2a" }}
                >
                  {c.msg}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "#2a2a2a" }}>
              rachitgandhi
            </p>
            <p className="font-mono text-[10px] tracking-[0.15em]" style={{ color: "#222" }}>
              Portfolio&apos;26
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: "#111" }}>
          <div
            className="h-full"
            style={{ backgroundColor: "#F5F4F0", width: `${count}%`, transition: "none" }}
          />
        </div>
      </motion.div>
    </>
  );
}
