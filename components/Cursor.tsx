"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 90, damping: 20 });
  const ry = useSpring(my, { stiffness: 90, damping: 20 });
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
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-[#E8300A]"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovered ? 6 : 10, height: hovered ? 6 : 10 }}
        transition={{ duration: 0.12 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovered ? 60 : 40,
          height: hovered ? 60 : 40,
          borderColor: hovered ? "rgba(232,48,10,0.9)" : "rgba(232,48,10,0.45)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
