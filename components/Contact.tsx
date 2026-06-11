"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import Marquee from "./Marquee";

const links = [
  { label: "GitHub", handle: "RachitGandhi13", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", handle: "rachitgandhi13", href: personalInfo.linkedin, icon: Linkedin },
  { label: "Email", handle: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#E8300A] text-cream overflow-hidden">
      {/* Top marquee */}
      <Marquee bg="bg-ink" text="text-cream" reversed />

      <div className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader number="05" title="Contact" onRed />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              {/* Handwritten big message */}
              <p className="font-marker text-cream text-3xl mb-6 -rotate-1 inline-block leading-relaxed">
                let&apos;s make something<br />
                <span className="text-ink">iconic</span> together.
              </p>

              <p className="text-cream/60 text-sm leading-relaxed max-w-sm mb-8">
                I&apos;m actively looking for full-time roles and internships. A
                project, an opportunity, or just vibes — inbox is open.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-sticker bg-ink border-ink text-cream hover:bg-[#C5FF00] hover:border-[#C5FF00] hover:text-ink text-base"
              >
                <Mail size={16} />
                Say hello
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Right: social cards */}
            <div className="space-y-3">
              {links.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.09 }}
                    className="flex items-center gap-5 p-5 border border-cream/20 hover:border-ink hover:bg-ink/10 transition-all group"
                  >
                    <div className="p-2.5 border border-cream/20 group-hover:border-ink group-hover:bg-ink group-hover:text-cream text-cream/60 transition-all">
                      <Icon size={17} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-cream uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="text-xs font-mono text-cream/45 mt-0.5">
                        {link.handle}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className="text-cream/30 group-hover:text-cream transition-colors"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <Marquee bg="bg-ink" text="text-cream" />
    </section>
  );
}
