"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

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
  const [displayed, setDisplayed] = useState(
    text.split("").map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)])).join("")
  );

  useEffect(() => {
    let frame = 0;
    let settled = 0;
    let timerId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    timerId = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayed(
          text.split("").map((char, i) => {
            if (char === " ") return " ";
            if (i < settled) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
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
