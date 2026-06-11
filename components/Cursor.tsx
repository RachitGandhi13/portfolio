"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 120, damping: 16 });
  const ry = useSpring(my, { stiffness: 120, damping: 16 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] w-2.5 h-2.5 rounded-full bg-[#E8300A]"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] w-10 h-10 rounded-full border border-[#E8300A]/50"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
