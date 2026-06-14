"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Marquee from "./Marquee";
import ScrambleText from "./ScrambleText";

const links = [
  { label: "GitHub", href: personalInfo.github, handle: "RachitGandhi13" },
  { label: "LinkedIn", href: personalInfo.linkedin, handle: "rachitgandhi13" },
  { label: "Email", href: `mailto:${personalInfo.email}`, handle: personalInfo.email },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-cream overflow-hidden">

      <Marquee bg="bg-[#E8300A]" text="text-cream" reversed />

      {/* Section label */}
      <div className="px-6 md:px-10 lg:px-14 pt-20 pb-0 flex items-center gap-4">
        <span className="text-[9px] font-mono text-[#E8300A] uppercase tracking-[0.45em]">05</span>
        <div className="flex-1 h-px bg-cream/10" />
        <span className="text-[9px] font-mono text-cream/25 uppercase tracking-[0.45em]">Contact</span>
      </div>

      <div className="px-6 md:px-10 lg:px-14 pt-14 pb-20">

        {/* Big CTA */}
        <div className="mb-16">
          <div className="overflow-hidden leading-none">
            <motion.div
              initial={{ y: "105%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <ScrambleText
                text="LET'S"
                delay={100}
                className="font-display text-cream uppercase block"
                style={{ fontSize: "clamp(60px, 15vw, 220px)", lineHeight: 0.86 }}
              />
            </motion.div>
          </div>
          <div className="overflow-hidden leading-none">
            <motion.div
              initial={{ y: "105%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <ScrambleText
                text="WORK."
                delay={300}
                className="font-display uppercase block"
                style={{
                  fontSize: "clamp(60px, 15vw, 220px)",
                  lineHeight: 0.86,
                  WebkitTextStroke: "2.5px #F0E6D6",
                  color: "transparent",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-[13px] text-cream/40 leading-relaxed max-w-xs">
              Looking for full-time roles and internships. Open to interesting projects too.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 text-[11px] font-mono text-cream/60 hover:text-[#E8300A] uppercase tracking-[0.3em] transition-colors duration-200 group"
            >
              {personalInfo.email}
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right: social links */}
          <div className="divide-y divide-cream/8">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center justify-between py-5 group"
              >
                <div>
                  <p className="font-display text-cream uppercase text-2xl leading-none group-hover:text-[#E8300A] transition-colors duration-200">
                    {link.label}
                  </p>
                  <p className="text-[10px] font-mono text-cream/25 mt-1 tracking-wider">
                    {link.handle}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-cream/20 group-hover:text-[#E8300A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-cream/8 px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <span className="font-display text-cream/20 text-xl tracking-widest">RG<span className="text-[#E8300A]">.</span></span>
        <span className="text-[8px] font-mono text-cream/15 uppercase tracking-[0.5em]">© 2026 Rachit Gandhi</span>
      </div>

      <Marquee bg="bg-[#E8300A]" text="text-cream" />
    </section>
  );
}
