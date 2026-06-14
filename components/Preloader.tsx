"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMITS = [
  { hash: "a3f9c21", msg: "feat: add 3D cube interaction" },
  { hash: "b7e2d04", msg: "fix: cursor blend mode on dark bg" },
  { hash: "c1a8f63", msg: "refactor: services section layout" },
  { hash: "d5b3e97", msg: "feat: WebRTC video conferencing" },
  { hash: "e9c4a12", msg: "chore: deploy portfolio '26" },
];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");
  const [shownCommits, setShownCommits] = useState(0);
  const raf = useRef<number>(0);
  const start = useRef<number>(0);
  const DURATION = 1800;

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    COMMITS.forEach((_, i) => {
      setTimeout(() => setShownCommits(i + 1), 120 + i * 260);
    });
  }, []);

  useEffect(() => {
    const animate = (ts: number) => {
      if (!start.current) start.current = ts;
      const p = Math.min((ts - start.current) / DURATION, 1);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf.current = requestAnimationFrame(animate);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 2000);
    const t2 = setTimeout(() => setVisible(false), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9000] flex flex-col"
          style={{ backgroundColor: "#080808" }}
        >
          {/* Scanline overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
            }}
          />

          {/* Top bar */}
          <motion.div
            animate={{ opacity: exit ? 0 : 1, y: exit ? -16 : 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="flex items-center justify-between px-8 md:px-14 pt-8"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "#2a2a2a" }}>
                branch
              </span>
              <span className="font-mono text-[10px]" style={{ color: "#22c55e" }}>main</span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.15em]" style={{ color: "#2a2a2a" }}>
              {time}
            </span>
          </motion.div>

          {/* Center: huge counter */}
          <div className="flex-1 flex items-center justify-center relative">
            <motion.div
              animate={{ opacity: exit ? 0 : 1, scale: exit ? 0.92 : 1 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="relative select-none"
            >
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
            </motion.div>
          </div>

          {/* Bottom: commits + name */}
          <motion.div
            animate={{ opacity: exit ? 0 : 1, y: exit ? 16 : 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="flex items-end justify-between px-8 md:px-14 pb-8 gap-8"
          >
            {/* Commit log */}
            <div className="flex flex-col gap-1 min-w-0">
              {COMMITS.slice(0, shownCommits).map((c, i) => (
                <motion.div
                  key={c.hash}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
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

            {/* Name */}
            <div className="text-right flex-shrink-0">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "#2a2a2a" }}>
                rachitgandhi
              </p>
              <p className="font-mono text-[10px] tracking-[0.15em]" style={{ color: "#222" }}>
                Portfolio&apos;26
              </p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: "#111" }}>
            <div
              className="h-full"
              style={{ backgroundColor: "#F5F4F0", width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
