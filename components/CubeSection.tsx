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

// ─── Cube faces ───────────────────────────────────────────────────────────────

/** Front — green terminal */
function FaceTerminal() {
  const lines = [
    { dim: true,  text: "rachit@portfolio ~ $" },
    { dim: false, text: "npm run build" },
    { dim: true,  text: "▶  Compiled in 2.1s" },
    { dim: true,  text: "✓  Linting passed" },
    { dim: false, text: "git push origin main" },
    { dim: true,  text: "→  Deploying to Vercel" },
    { dim: true,  text: "✓  Production ready" },
    { dim: false, text: "█" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "#050e05", padding: "20px 18px", position: "relative", overflow: "hidden" }}>
      {/* subtle grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      <div style={{ position: "relative", fontFamily: "monospace", fontSize: "8.5px", lineHeight: "1.95", color: "#22c55e" }}>
        {lines.map((l, i) => (
          <div key={i} style={{ color: l.dim ? "rgba(34,197,94,0.45)" : "#86efac" }}>{l.text}</div>
        ))}
      </div>
      <span style={{ position: "absolute", bottom: 10, right: 12, fontFamily: "monospace", fontSize: "7px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(34,197,94,0.25)" }}>
        full-stack
      </span>
    </div>
  );
}

/** Back — purple blockchain network */
function FaceBlockchain() {
  const nodes = [
    { x: 55,  y: 75  },
    { x: 150, y: 55  },
    { x: 245, y: 75  },
    { x: 90,  y: 155 },
    { x: 210, y: 155 },
    { x: 55,  y: 235 },
    { x: 150, y: 225 },
    { x: 245, y: 235 },
  ];
  const edges = [[0,1],[1,2],[0,3],[1,3],[1,4],[2,4],[3,5],[3,6],[4,6],[4,7],[5,6],[6,7]];

  return (
    <div style={{ width: "100%", height: "100%", background: "#06060f", position: "relative", overflow: "hidden" }}>
      {/* purple glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", width: 200, height: 200, transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
      <svg viewBox="0 0 300 300" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="rgba(139,92,246,0.22)" strokeWidth="1" />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="9"  fill="rgba(139,92,246,0.1)"  stroke="rgba(139,92,246,0.45)" strokeWidth="1" />
            <circle cx={n.x} cy={n.y} r="3.5" fill="#8b5cf6" />
          </g>
        ))}
      </svg>
      <span style={{ position: "absolute", bottom: 10, left: 12, fontFamily: "monospace", fontSize: "7px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(139,92,246,0.4)" }}>
        blockchain
      </span>
    </div>
  );
}

/** Right — TypeScript blue */
function FaceTypeScript() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#08132a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(49,120,198,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(49,120,198,0.07) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <span style={{ fontFamily: "monospace", fontSize: "96px", fontWeight: 900, color: "#3178c6", lineHeight: 1, letterSpacing: "-0.05em", position: "relative", zIndex: 1 }}>
        TS
      </span>
      <span style={{ fontFamily: "monospace", fontSize: "7.5px", letterSpacing: "0.35em", color: "rgba(49,120,198,0.45)", textTransform: "uppercase", marginTop: "10px", position: "relative", zIndex: 1 }}>
        TypeScript
      </span>
    </div>
  );
}

/** Left — React cyan atom */
function FaceReact() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#03101b", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 300 300" style={{ width: "76%", height: "76%" }}>
        <ellipse cx="150" cy="150" rx="115" ry="40" fill="none" stroke="rgba(97,218,251,0.38)" strokeWidth="1.5" />
        <ellipse cx="150" cy="150" rx="115" ry="40" fill="none" stroke="rgba(97,218,251,0.38)" strokeWidth="1.5" transform="rotate(60 150 150)" />
        <ellipse cx="150" cy="150" rx="115" ry="40" fill="none" stroke="rgba(97,218,251,0.38)" strokeWidth="1.5" transform="rotate(120 150 150)" />
        <circle cx="150" cy="150" r="13" fill="#61dafb" />
      </svg>
      <span style={{ position: "absolute", bottom: 10, right: 12, fontFamily: "monospace", fontSize: "7px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(97,218,251,0.3)" }}>
        React
      </span>
    </div>
  );
}

/** Top — DevOps orange pipeline */
function FaceDevOps() {
  const steps = [
    { label: "BUILD",  done: true  },
    { label: "TEST",   done: true  },
    { label: "PUSH",   done: true  },
    { label: "DEPLOY", done: false },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "#100a02", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "22px 22px", position: "relative", overflow: "hidden" }}>
      <span style={{ fontFamily: "monospace", fontSize: "7px", letterSpacing: "0.3em", color: "rgba(251,146,60,0.35)", textTransform: "uppercase", marginBottom: "18px" }}>
        CI / CD Pipeline
      </span>
      {steps.map((s, i) => (
        <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", marginBottom: "14px" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: s.done ? "#fb923c" : "rgba(251,146,60,0.15)", flexShrink: 0 }} />
          {i < steps.length - 1 && (
            <div style={{ position: "absolute", left: 25, top: `calc(${38 + i * 42}px)`, width: 1, height: 28, background: s.done ? "rgba(251,146,60,0.3)" : "rgba(251,146,60,0.08)" }} />
          )}
          <span style={{ fontFamily: "monospace", fontSize: "9px", color: s.done ? "rgba(251,146,60,0.85)" : "rgba(251,146,60,0.22)", letterSpacing: "0.2em" }}>
            {s.done ? "✓ " : "○ "}{s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Bottom — RG monogram */
function FaceMonogram() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#070707", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #141414" }}>
      <span style={{ fontFamily: "sans-serif", fontSize: "110px", fontWeight: 900, color: "transparent", WebkitTextStroke: "1.5px rgba(245,244,240,0.1)", letterSpacing: "-0.1em", lineHeight: 1 }}>
        RG
      </span>
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
            {/* Scroll drives only scale + depth — rotation is decoupled */}
            <motion.div style={{ width: 300, height: 300, scale, translateZ, transformStyle: "preserve-3d" }}>
              {/* CSS animation spins forever regardless of scroll */}
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
