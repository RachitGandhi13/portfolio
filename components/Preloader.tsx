"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    // Slide out content after 1.5s
    const t1 = setTimeout(() => setSlideOut(true), 1500);
    // Fade out preloader after 2.2s
    const t2 = setTimeout(() => setVisible(false), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9000] flex items-center justify-between px-8 md:px-16"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          {/* Left: name */}
          <motion.div
            animate={{ y: slideOut ? "-120%" : 0, opacity: slideOut ? 0 : 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <span
              className="font-mono text-[clamp(14px,2vw,22px)] tracking-[0.15em] uppercase"
              style={{ color: "#F5F4F0" }}
            >
              RACHIT GANDHI
            </span>
          </motion.div>

          {/* Center: large number */}
          <motion.div
            animate={{ y: slideOut ? "-120%" : 0, opacity: slideOut ? 0 : 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="absolute left-1/2 top-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <span
              className="font-display font-bold leading-none select-none"
              style={{
                fontSize: "clamp(80px, 14vw, 200px)",
                color: "#F5F4F0",
              }}
            >
              00
            </span>
          </motion.div>

          {/* Right: portfolio label */}
          <motion.div
            animate={{ y: slideOut ? "-120%" : 0, opacity: slideOut ? 0 : 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            <span
              className="font-mono text-[clamp(14px,2vw,22px)] tracking-[0.15em]"
              style={{ color: "#F5F4F0" }}
            >
              Portfolio&apos;26
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
