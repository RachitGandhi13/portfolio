"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Marquee ──────────────────────────────────────────────────────────────────

const WORDS = [
  { text: "FULLSTACK",  italic: false },
  { text: "BLOCKCHAIN", italic: true  },
  { text: "DEVOPS",     italic: false },
];

/** Cycles through the three words; offset staggers the starting word per row */
function MarqueeRow({ reverse = false, offset = 0 }: { reverse?: boolean; offset?: number }) {
  const items = [...Array(12)].map((_, i) => WORDS[(i + offset) % WORDS.length]);

  return (
    <div style={{ overflow: "hidden", width: "100%", flexShrink: 0, padding: "4px 0" }}>
      <div className={reverse ? "marquee-track-rev" : "marquee-track"}>
        {[0, 1].map((copy) => (
          <span key={copy} style={{ display: "flex", alignItems: "center" }}>
            {items.map((w, j) => (
              <span
                key={j}
                className="font-display font-bold select-none whitespace-nowrap"
                style={{
                  fontSize: "clamp(34px, 7.5vw, 112px)",
                  lineHeight: 1,
                  paddingRight: "clamp(18px, 3vw, 48px)",
                  color: j % 2 === 0 ? "var(--fg)" : "transparent",
                  WebkitTextStroke: j % 2 !== 0 ? "1px rgba(var(--fg-rgb), 0.13)" : undefined,
                  fontStyle: w.italic ? "italic" : "normal",
                  fontFamily: w.italic ? "var(--font-cormorant), serif" : undefined,
                }}
              >
                {w.text}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function CubeSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const translateZ = useTransform(scrollYProgress, [0, 1], [-2000, 0]);
  const scale     = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <div ref={wrapperRef} style={{ height: "220vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", backgroundColor: "var(--bg)" }}>

        {/* Background marquee rows — four rows, each starting at a different word */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <MarqueeRow offset={0} />
          <MarqueeRow offset={1} reverse />
          <MarqueeRow offset={2} />
          <MarqueeRow offset={1} reverse />
        </div>

        {/* Cube — absolutely centred in the full 100vh sticky viewport */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10, pointerEvents: "none" }}>
          <div className="cube-scene" style={{ width: 300, height: 300 }}>
            <motion.div style={{ width: 300, height: 300, scale, translateZ, transformStyle: "preserve-3d" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  animation: "cube-rotate 10s linear infinite",
                }}
              >
                {[
                  { cls: "cube-face-front",  src: "/image.png"        },
                  { cls: "cube-face-back",   src: "/image copy.png"   },
                  { cls: "cube-face-right",  src: "/image copy 2.png" },
                  { cls: "cube-face-left",   src: "/image copy 3.png" },
                  { cls: "cube-face-top",    src: "/image copy 4.png" },
                  { cls: "cube-face-bottom", src: "/image copy 5.png" },
                ].map(({ cls, src }) => (
                  <div key={cls} className={`cube-face ${cls}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <span className="font-mono" style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(var(--fg-rgb), 0.18)" }}>
            Scroll
          </span>
        </div>
      </div>
    </div>
  );
}
