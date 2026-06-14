"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORD = "Full-Stack";
const REPEAT = 10;

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full">
      <div className={reverse ? "marquee-track-rev" : "marquee-track"}>
        {[...Array(2)].map((_, i) => (
          <span key={i} className="flex items-center">
            {[...Array(REPEAT)].map((_, j) => (
              <span
                key={j}
                className="font-display font-bold leading-none pr-6 md:pr-10 whitespace-nowrap select-none"
                style={{
                  fontSize: "clamp(36px, 8vw, 120px)",
                  color: j % 2 === 0 ? "#F5F4F0" : "transparent",
                  WebkitTextStroke: j % 2 !== 0 ? "1px #F5F4F0" : undefined,
                  opacity: j % 2 !== 0 ? 0.2 : 1,
                }}
              >
                {WORD}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function CubeFaceFront() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: "#080f08" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(34,197,94,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,197,94,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points="0,220 60,180 110,195 160,130 200,150 240,90 280,110 300,80 300,300 0,300"
          fill="url(#g-front)"
        />
        <polyline
          points="0,220 60,180 110,195 160,130 200,150 240,90 280,110 300,80"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute bottom-4 left-4 font-mono text-[7px] uppercase tracking-widest" style={{ color: "rgba(34,197,94,0.5)" }}>
        Trading Platform
      </div>
    </div>
  );
}

function CubeFaceBack() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: "#06060f" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: "50%",
            left: "50%",
            width: 60 + i * 55,
            height: 60 + i * 55,
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(99,102,241,0.25)",
            animation: `pulse-ring ${3 + i * 0.8}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
      <div className="absolute bottom-4 left-4 font-mono text-[7px] uppercase tracking-widest" style={{ color: "rgba(99,102,241,0.5)" }}>
        Video Conf.
      </div>
    </div>
  );
}

function CubeFaceSide({ label }: { label: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #111 0%, #0A0A0A 100%)", border: "1px solid #1E1E1E" }}
    >
      <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "#333" }}>
        {label}
      </span>
    </div>
  );
}

export default function CubeSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Interpolate rotation from "flying in" to "settled"
  const rotateX = useTransform(scrollYProgress, [0, 1], [-360, -5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-360, 5]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-180, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [-2000, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <div ref={wrapperRef} style={{ height: "250vh", position: "relative" }}>
      {/* Sticky container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#0A0A0A",
        }}
      >
        {/* Row 1: Static "Full-Stack" */}
        <div className="py-2 overflow-hidden">
          <span
            className="font-display font-bold leading-none whitespace-nowrap block"
            style={{ fontSize: "clamp(36px, 8vw, 120px)", color: "#F5F4F0" }}
          >
            {WORD}
          </span>
        </div>

        {/* Row 2: Marquee left + Cube overlay */}
        <div className="relative py-2">
          <MarqueeRow />
          {/* Cube sits on top of rows 2-3 */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "50%",
              right: "10%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <div className="cube-scene" style={{ width: 300, height: 300 }}>
              <motion.div
                className="cube"
                style={{
                  width: 300,
                  height: 300,
                  rotateX,
                  rotateY,
                  rotateZ,
                  translateZ,
                  scale,
                }}
              >
                <div className="cube-face cube-face-front">
                  <CubeFaceFront />
                </div>
                <div className="cube-face cube-face-back">
                  <CubeFaceBack />
                </div>
                <div className="cube-face cube-face-right">
                  <CubeFaceSide label="TypeScript" />
                </div>
                <div className="cube-face cube-face-left">
                  <CubeFaceSide label="WebRTC" />
                </div>
                <div className="cube-face cube-face-top">
                  <CubeFaceSide label="Next.js" />
                </div>
                <div className="cube-face cube-face-bottom">
                  <CubeFaceSide label="Web3" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Row 3: Marquee right */}
        <div className="py-2">
          <MarqueeRow reverse />
        </div>

        {/* Row 4: Marquee left */}
        <div className="py-2">
          <MarqueeRow />
        </div>
      </div>
    </div>
  );
}
