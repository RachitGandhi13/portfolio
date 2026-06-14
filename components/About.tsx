"use client";

import { motion } from "framer-motion";
import { skills, personalInfo } from "@/data/portfolio";
import ProfilePhoto from "./ProfilePhoto";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto">

      <motion.div {...fade(0)} className="flex items-center gap-3 mb-14">
        <span className="text-[9px] font-mono text-red uppercase tracking-[0.4em]">01</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.4em]" style={{ color: "var(--muted)" }}>
          About
        </span>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: "var(--border)" }} />
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">

        {/* Photo */}
        <motion.div {...fade(0.1)} className="relative">
          <div
            className="aspect-[3/4] overflow-hidden rounded-sm"
            style={{ backgroundColor: "var(--surface)" }}
          >
            <div
              className="w-full h-full"
              style={{ filter: "grayscale(1) contrast(1.1) brightness(0.88)" }}
            >
              <ProfilePhoto className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Stats floating card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="absolute -bottom-5 -right-5 md:right-auto md:-left-5 px-5 py-4 rounded-sm"
            style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[
                { val: "2+", label: "Years building" },
                { val: "8.97", label: "GPA / 10" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <p className="text-xl font-semibold leading-none mb-1" style={{ color: "var(--fg)" }}>{val}</p>
                  <p className="text-[9px] font-mono uppercase tracking-wider" style={{ color: "var(--muted)" }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bio + Skills */}
        <div className="pt-2">
          <motion.h2
            {...fade(0.15)}
            className="font-sans font-semibold leading-snug mb-7"
            style={{ fontSize: "clamp(26px, 3vw, 40px)", color: "var(--fg)" }}
          >
            Final-year CS at SRM Chennai.
            <br />
            I build things that ship.
          </motion.h2>

          <div className="space-y-4 text-sm leading-[1.8] mb-10" style={{ color: "var(--muted)" }}>
            <motion.p {...fade(0.2)}>
              I build production software — MERN stack, Next.js, TypeScript.
              Real-time systems with WebRTC and Socket.io. Smart contracts
              with Solidity. Not side projects that collect dust, but things
              deployed for real clients.
            </motion.p>
            <motion.p {...fade(0.25)}>
              Interned at Lions International on production MERN systems.
              Built and shipped a full payment-integrated platform for The
              Language Salon. Oracle certified. Occasionally the guy everyone
              asks about fits.
            </motion.p>
          </div>

          {/* Skills */}
          <motion.div {...fade(0.3)}>
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] mb-5" style={{ color: "var(--muted)" }}>
              Skills
            </p>
            <div className="space-y-3">
              {skills.map((group) => (
                <div key={group.category} className="flex gap-4 items-baseline flex-wrap">
                  <span
                    className="text-[9px] font-mono uppercase tracking-wider w-20 shrink-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono transition-colors duration-150"
                        style={{ color: "var(--muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-sm font-mono group"
              style={{ color: "var(--fg)" }}
            >
              <span className="underline underline-offset-4 group-hover:text-red transition-colors duration-200">
                {personalInfo.email}
              </span>
              <span className="text-[var(--muted)] group-hover:text-red transition-colors">↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
