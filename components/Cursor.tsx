"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 200, damping: 24 });
  const ry = useSpring(my, { stiffness: 200, damping: 24 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  useEffect(() => {
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    const attach = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: mx, y: my,
          translateX: "-50%", translateY: "-50%",
          backgroundColor: "var(--fg)",
        }}
        animate={{ width: hovered ? 0 : 5, height: hovered ? 0 : 5 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          x: rx, y: ry,
          translateX: "-50%", translateY: "-50%",
          border: "1px solid var(--fg)",
        }}
        animate={{ width: hovered ? 44 : 32, height: hovered ? 44 : 32, opacity: hovered ? 0.5 : 0.3 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
