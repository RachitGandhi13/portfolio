"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// ── Palette (blue body, gold trim) ──────────────────────────────────────
const LK  = "#0a0a14";
const LV1 = "#0e1122";
const LV2 = "#161c3c";
const LV3 = "#1e2558";
const LV4 = "#263076";
const LV5 = "#303c94";
const LV6 = "#3c4aaa";
const LV7 = "#4a58c0";
const LV8 = "#5868d4";
const LV9 = "#6878e8";
const LDA = "#7a4800";
const LMA = "#c47800";
const LLA = "#f09020";


type R = [number, number, number, number, string];

function buildCap(K:string,V1:string,V2:string,V3:string,V4:string,V5:string,V6:string,V7:string,V8:string,V9:string,DA:string,MA:string,LA:string): R[] {
  return [
    // ── TASSEL ──
    [3,  3,  6, 1, K ], [3,  4,  1,10, K ],
    [2, 14,  3, 1, LA], [2, 15,  3, 1, MA], [3, 15,  1, 1, LA], [2, 16,  3, 1, DA],
    // ── FLAT TOP FACE ──
    [17,0,1,1,K],[18,0,12,1,V9],[30,0,1,1,K],
    [14,1,1,1,K],[15,1,4,1,V9],[19,1,11,1,V8],[30,1,4,1,V7],[34,1,1,1,K],
    [11,2,1,1,K],[12,2,5,1,V9],[17,2,5,1,V8],[22,2,5,1,V7],[27,2,9,1,V6],[36,2,1,1,K],
    [9,3,1,1,K],[10,3,3,1,V9],[13,3,4,1,V8],[17,3,5,1,V7],[22,3,5,1,V6],[27,3,5,1,V5],[32,3,5,1,V6],[37,3,1,1,V7],[38,3,1,1,K],
    [9,4,1,1,K],[10,4,3,1,V8],[13,4,4,1,V7],[17,4,4,1,V6],[21,4,4,1,V5],[25,4,5,1,V4],[30,4,4,1,V5],[34,4,3,1,V6],[37,4,1,1,V7],[38,4,1,1,K],
    [8,5,1,1,K],[9,5,3,1,V8],[12,5,3,1,V7],[15,5,4,1,V6],[19,5,3,1,V5],[22,5,5,1,V4],[27,5,4,1,V4],[31,5,3,1,V5],[34,5,4,1,V6],[38,5,1,1,V7],[39,5,1,1,K],
    [8,6,1,1,K],[9,6,3,1,V7],[12,6,3,1,V6],[15,6,4,1,V5],[19,6,3,1,V4],[22,6,6,1,V3],[28,6,3,1,V4],[31,6,4,1,V5],[35,6,3,1,V6],[38,6,1,1,V7],[39,6,1,1,K],
    [9,7,1,1,K],[10,7,2,1,V6],[12,7,3,1,V5],[15,7,4,1,V4],[19,7,3,1,V3],[22,7,6,1,V2],[28,7,3,1,V3],[31,7,4,1,V4],[35,7,3,1,V5],[38,7,1,1,K],
    // ── BRIM ──
    [9,8,30,1,K],
    [9,9,1,1,K],[10,9,2,1,V1],[12,9,1,1,K],[35,9,1,1,K],[36,9,2,1,V1],[38,9,1,1,K],
    [9,10,1,1,K],[10,10,2,1,V2],[12,10,1,1,K],[35,10,1,1,K],[36,10,2,1,V2],[38,10,1,1,K],
    // ── CYLINDER ──
    [12,9,1,12,K],[13,9,1,12,V1],[14,9,1,12,V2],[15,9,2,12,V3],[17,9,2,12,V4],
    [19,9,2,12,V5],[21,9,3,12,V6],[24,9,4,12,V7],[28,9,3,12,V6],[31,9,2,12,V5],
    [33,9,1,12,V4],[34,9,1,12,V3],[35,9,1,12,K],
    [20,9,1,12,V4],[27,9,1,12,V5],[32,9,1,12,V4],
    // ── TRIM ──
    [12,21,1,3,K],[35,21,1,3,K],
    [13,21,22,1,LA],[13,22,22,1,MA],[13,23,22,1,DA],
    [13,24,22,1,K],
  ];
}

function GradCap() {
  const cap = buildCap(LK,LV1,LV2,LV3,LV4,LV5,LV6,LV7,LV8,LV9,LDA,LMA,LLA);

  const P = 3.2;
  return (
    <svg
      width={50 * P}
      height={26 * P}
      viewBox={`0 0 ${50 * P} ${26 * P}`}
      shapeRendering="crispEdges"
      style={{ display: "block", pointerEvents: "none" }}
    >
      {cap.map(([x, y, w, h, c], i) => (
        <rect key={i} x={x * P} y={y * P} width={w * P} height={h * P} fill={c} />
      ))}
    </svg>
  );
}

export default function Header() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: revealed ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[20]"
      style={{
        height: "100vh",
        backgroundColor: "var(--bg)",
        color: "var(--fg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 clamp(24px, 4vw, 64px)",
        paddingTop: "62px",
        paddingBottom: "28px",
      }}
    >
      {/* Name + cap */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", display: "inline-block" }}>

          {/* Cap sits on top of R — tilted slightly left, pivot at bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "79%",
              left: "-3%",
              transform: "rotate(-8deg)",
              transformOrigin: "65% 100%",
              zIndex: 10,
            }}
          >
            <GradCap />
          </div>

          <h1
            className="font-display font-bold leading-none text-center uppercase"
            style={{
              fontSize: "clamp(52px, 10.5vw, 160px)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            RACHIT GANDHI
          </h1>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[11px] uppercase tracking-[0.08em]"
          style={{ color: "var(--fg)", opacity: 0.7 }}
        >
          Developer —
        </span>
        <div className="flex items-center gap-5">
          {[
            { label: "GitHub",   href: "https://github.com/RachitGandhi13" },
            { label: "LinkedIn", href: "https://linkedin.com/in/rachitgandhi13" },
            { label: "LeetCode", href: "https://leetcode.com/u/rachitgandhi/" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.08em] transition-opacity hover:opacity-100"
              style={{ color: "var(--fg)", opacity: 0.7, textDecoration: "none" }}
            >
              {label} ↗
            </a>
          ))}
        </div>
        <span
          className="font-mono text-[11px] uppercase tracking-[0.08em]"
          style={{ color: "var(--fg)", opacity: 0.7 }}
        >
          Chennai, India
        </span>
      </div>
    </motion.header>
  );
}
