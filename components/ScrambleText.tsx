"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function rand() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function ScrambleText({
  text,
  delay = 0,
  className,
  style,
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  // Server renders the real text — no hydration mismatch
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let frame = 0;
    let settled = 0;

    timerId = setTimeout(() => {
      // Jump to fully-scrambled immediately on client
      setDisplayed(text.split("").map((c) => (c === " " ? " " : rand())).join(""));

      intervalId = setInterval(() => {
        setDisplayed(
          text.split("").map((char, i) => {
            if (char === " ") return " ";
            if (i < settled) return char;
            return rand();
          }).join("")
        );
        frame++;
        if (frame % 2 === 0) settled++;
        if (settled > text.length) clearInterval(intervalId);
      }, 35);
    }, delay);

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <span className={className} style={style}>
      {displayed}
    </span>
  );
}
