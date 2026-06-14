"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "hover" | "view";

export default function Cursor() {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const rx = useSpring(mx, { stiffness: 600, damping: 30, mass: 0.4 });
  const ry = useSpring(my, { stiffness: 600, damping: 30, mass: 0.4 });
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  useEffect(() => {
    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl?.dataset.cursor === "View") {
        setMode("view");
      } else if (target.closest("a, button")) {
        setMode("hover");
      }
    };
    const handleLeave = () => setMode("default");

    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);
    return () => {
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  const ringSize = mode === "view" ? 88 : mode === "hover" ? 48 : 36;
  const dotSize = mode !== "default" ? 0 : 5;

  return (
    <>
      {/* Dot — raw mouse, instant */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--fg)",
        }}
        animate={{ width: dotSize, height: dotSize, opacity: dotSize ? 1 : 0 }}
        transition={{ duration: 0.08 }}
      />

      {/* Ring — spring-lagged */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full flex items-center justify-center"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid var(--fg)",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: mode === "default" ? 0.25 : 0.85,
          scale: mode === "hover" ? 1.1 : 1,
          backgroundColor: mode === "view" ? "rgba(245,244,240,0.07)" : "transparent",
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {mode === "view" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            className="font-mono text-[9px] uppercase tracking-[0.15em]"
            style={{ color: "var(--fg)" }}
          >
            View
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
