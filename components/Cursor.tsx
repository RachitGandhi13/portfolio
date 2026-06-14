"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 180, damping: 22 });
  const ry = useSpring(my, { stiffness: 180, damping: 22 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mx, my]);

  useEffect(() => {
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    const attach = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
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
        className="pointer-events-none fixed z-[9999] rounded-full bg-dark dark:bg-cream"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovered ? 0 : clicked ? 3 : 5, height: hovered ? 0 : clicked ? 3 : 5 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border border-dark dark:border-cream"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovered ? 48 : clicked ? 28 : 36,
          height: hovered ? 48 : clicked ? 28 : 36,
          opacity: hovered ? 0.6 : 0.35,
          backgroundColor: hovered ? "rgba(232,48,10,0.08)" : "transparent",
          borderColor: hovered ? "rgba(232,48,10,0.8)" : undefined,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
