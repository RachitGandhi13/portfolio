"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Marquee from "./Marquee";

const links = [
  { label: "GitHub", handle: "@RachitGandhi13", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", handle: "/rachitgandhi13", href: personalInfo.linkedin, icon: Linkedin },
  { label: "Email", handle: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#E8300A] text-cream overflow-hidden">

      {/* Top marquee */}
      <Marquee bg="bg-ink" text="text-cream" reversed />

      {/* ── Section header bar ── */}
      <div className="border-b-2 border-cream/20 px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-end gap-5">
          <span
            className="font-display leading-none text-cream/8 select-none"
            style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
          >
            05
          </span>
          <h2
            className="font-display uppercase text-cream mb-1"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
          >
            Contact
          </h2>
        </div>
        <span className="text-[8px] font-mono text-cream/30 uppercase tracking-[0.5em]">Pg. 06</span>
      </div>

      <div className="px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

          {/* Left: big CTA */}
          <div>
            <div className="overflow-hidden leading-none mb-2">
              <motion.div
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-cream uppercase"
                style={{ fontSize: "clamp(70px, 12vw, 180px)", lineHeight: 0.86 }}
              >
                LET&apos;S
              </motion.div>
            </div>
            <div className="overflow-hidden leading-none mb-2">
              <motion.div
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="font-display uppercase"
                style={{
                  fontSize: "clamp(70px, 12vw, 180px)",
                  lineHeight: 0.86,
                  WebkitTextStroke: "3px #F0E6D6",
                  color: "transparent",
                }}
              >
                WORK.
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 space-y-4"
            >
              <p className="font-marker text-cream text-2xl leading-relaxed">
                let&apos;s make something<br />
                <span className="text-ink">iconic</span> together.
              </p>
              <p className="text-cream/60 text-sm leading-relaxed max-w-sm">
                Actively looking for full-time roles and internships. A project, an opportunity, or just vibes — inbox is open.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2.5 bg-ink border-2 border-ink text-cream px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#C5FF00] hover:border-[#C5FF00] hover:text-ink transition-all duration-200"
              >
                <Mail size={16} />
                Say hello
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Right: social links */}
          <div className="space-y-0 divide-y divide-cream/20">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-5 py-6 group hover:pl-3 transition-all duration-300"
                >
                  <div className="p-2.5 border-2 border-cream/25 group-hover:border-ink group-hover:bg-ink text-cream/60 group-hover:text-cream transition-all">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-cream uppercase text-2xl leading-none group-hover:text-ink transition-colors duration-300">
                      {link.label}
                    </p>
                    <p className="text-[11px] font-mono text-cream/45 mt-1 tracking-wider">
                      {link.handle}
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="text-cream/30 group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-16 pt-8 border-t-2 border-cream/20 flex items-center justify-between">
          <span className="font-display text-cream/30 text-4xl tracking-wider">RG<span className="text-ink">.</span></span>
          <span className="text-[8px] font-mono text-cream/30 uppercase tracking-[0.5em]">
            © 2026 Rachit Gandhi — End of Issue
          </span>
          <span className="text-[8px] font-mono text-cream/30 uppercase tracking-[0.5em] hidden sm:block">Vol. I</span>
        </div>
      </div>

      {/* Bottom marquee */}
      <Marquee bg="bg-ink" text="text-cream" />
    </section>
  );
}
