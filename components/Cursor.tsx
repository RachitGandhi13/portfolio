"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

type CursorMode = "default" | "hover" | "view";

// 0=transparent 1=dark-outline 2=fill 3=highlight
const MAP = [
  [1],
  [1,3,1],
  [1,3,2,1],
  [1,3,2,2,1],
  [1,3,2,2,2,1],
  [1,3,2,2,2,2,1],
  [1,3,2,2,2,2,2,1],
  [1,3,2,2,2,2,2,2,1],
  [1,3,3,2,2,2,2,2,2,1],
  [1,2,2,2,2,2,1,1,1,1],
  [1,2,2,2,1],
  [1,2,2,1],
  [1,2,1],
  [1,1],
];

const P = 3; // px per pixel block
const W = 10 * P;
const H = MAP.length * P;

function PixelArrow({ fill, hi, outline }: { fill: string; hi: string; outline: string }) {
  const rects: React.ReactNode[] = [];
  MAP.forEach((row, r) => {
    row.forEach((v, c) => {
      if (v === 0) return;
      const color = v === 1 ? outline : v === 3 ? hi : fill;
      rects.push(
        <rect key={`${r}-${c}`} x={c * P} y={r * P} width={P} height={P} fill={color} />
      );
    });
  });
  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      shapeRendering="crispEdges"
      style={{ display: "block" }}
    >
      {rects}
    </svg>
  );
}

export default function Cursor() {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const [mode, setMode] = useState<CursorMode>("default");
  const [isPointerFine, setIsPointerFine] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsPointerFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const isDark = resolvedTheme === "dark";
  const fill    = isDark ? "#e8ff00" : "#80973f";
  const hi      = isDark ? "#f5ff80" : "#a8c255";
  const outline = isDark ? "#1a1a00" : "#1a2a0a";

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  useEffect(() => {
    const enter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if ((t.closest("[data-cursor]") as HTMLElement | null)?.dataset.cursor === "View") setMode("view");
      else if (t.closest("a, button")) setMode("hover");
    };
    const leave = () => setMode("default");
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    return () => { document.removeEventListener("mouseover", enter); document.removeEventListener("mouseout", leave); };
  }, []);

  if (!isPointerFine) return null;

  return (
    <motion.div
      data-cursor-root
      className="pointer-events-none fixed z-[9999]"
      style={{ x: mx, y: my }}
      animate={{ scale: mode !== "default" ? 1.2 : 1 }}
      transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <PixelArrow fill={fill} hi={hi} outline={outline} />
      {mode === "view" && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute",
            top: H + 2,
            left: 4,
            fontFamily: "monospace",
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: fill,
            whiteSpace: "nowrap",
          }}
        >
          view
        </motion.span>
      )}
    </motion.div>
  );
}
