"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-[#F5F4F0] dark:bg-[#0a0a0a] py-32 md:py-48 lg:py-56 overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-3 mb-16 md:mb-24">
            <span className="h-px w-10 bg-[#A87D5C]" />
            <span className="font-mono-label text-[#A87D5C] dark:text-[#E8E4D9]">01 — About</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
          {/* Portrait column */}
          <div className="md:col-span-5 lg:col-span-5 order-1">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EAEAE6] dark:bg-[#111]">
                <motion.img
                  src="/profile.jpg"
                  alt="Rachit Gandhi"
                  style={{ y: portraitY, scale: portraitScale, willChange: "transform" }}
                  className="w-full h-full object-cover grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F4F0]/60 dark:from-[#0a0a0a]/40 via-transparent to-transparent" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono-label text-black/40 dark:text-white/40">
                  Rachit G., 2026
                </span>
                <span className="font-mono-label text-[#A87D5C]">N° 001</span>
              </div>
            </Reveal>
          </div>

          {/* Text column */}
          <div className="md:col-span-7 lg:col-span-7 order-2 md:pt-12">
            <Reveal delay={0.15}>
              <h2 className="font-display font-medium tracking-tighter text-[#0a0a0a] dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98]">
                A developer built on{" "}
                <span className="font-serif-italic text-[#A87D5C] dark:text-[#E8E4D9]">craft</span>
                , code, and shipping real systems.
              </h2>
            </Reveal>

            <Reveal
              delay={0.2}
              className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14"
            >
              <p className="text-black/70 dark:text-white/70 leading-relaxed text-[15px] md:text-[16px] font-light">
                I&apos;m a full-stack developer focused on production-grade web
                applications. I work with the MERN stack, TypeScript, WebRTC for
                real-time systems, and Solidity for Web3. Studying B.Tech
                Computer Science at SRM University, Chennai.
              </p>
              <p className="text-black/70 dark:text-white/70 leading-relaxed text-[15px] md:text-[16px] font-light">
                I take projects from idea to deployment, handling architecture,
                APIs, frontend, and DevOps with Docker and CI/CD. Every system I
                build is made to last and scale under real conditions.
              </p>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
