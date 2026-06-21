"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  no: string;
  title: string;
  sub: string;
  description: string;
  tags: string[];
  image: string;
  accentClass: string;
  accent: string;
  link: string;
  linkLabel: string;
}

const projects: Project[] = [
  {
    no: "01",
    title: "D2C Campaign Engine",
    sub: "AI-native CRM for direct-to-consumer brands",
    description:
      "Converts plain English into precision audience segments via Claude AI. Ships campaign batches through an async delivery loop, tracks conversion attribution end-to-end, and runs rule evaluation against PostgreSQL with Drizzle ORM. The kind of infrastructure Klaviyo charges $500/month for.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Claude AI", "React", "Railway"],
    image: "/d2c.png",
    accentClass: "text-[#A87D5C] dark:text-[#E8E4D9]",
    accent: "#E8E4D9",
    link: "https://github.com/RachitGandhi13/xeno-mini-crm",
    linkLabel: "GITHUB",
  },
  {
    no: "02",
    title: "Inkboard",
    sub: "Multiplayer collaborative canvas",
    description:
      "Figma-like multiplayer whiteboard built from scratch — Turborepo monorepo, raw WebSocket layer for sub-50ms stroke broadcast, and a stateless HTTP backend for persistence. Every mark lands on every connected screen before you lift the stylus. No Liveblocks. No Ably. Just WebSockets.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Turborepo", "React"],
    image: "/drawApp.png",
    accentClass: "text-[#A87D5C]",
    accent: "#A87D5C",
    link: "https://github.com/RachitGandhi13/drawApp",
    linkLabel: "GITHUB",
  },
  {
    no: "03",
    title: "The Language Salon",
    sub: "Freelance — coaching & workshop platform",
    description:
      "Production Next.js site for a live coaching brand with 2000+ trained professionals and 300K+ viewers. Built end-to-end with Razorpay payment integration for real transactions, automated lead-capture pipelines, and countdown-gated registration flows. Shipped to real users. Took real money. Cut fraud by 20%.",
    tags: ["Next.js", "TypeScript", "Razorpay", "Node.js", "Lead Automation"],
    image: "",
    accentClass: "text-[#A87D5C] dark:text-[#E8E4D9]",
    accent: "#E8E4D9",
    link: "https://www.thelanguagesalon.com",
    linkLabel: "LIVE",
  },
  {
    no: "04",
    title: "Aurora Connect",
    sub: "P2P real-time communication",
    description:
      "A WebRTC-based video conferencing app built from scratch using native browser APIs for P2P media, Socket.io for signaling, and Node/Express for room management. No SDK shortcuts, full protocol implementation.",
    tags: ["React", "Node.js", "WebRTC", "Socket.io", "Express.js"],
    image: "/videoCall.png",
    accentClass: "text-[#A87D5C]",
    accent: "#A87D5C",
    link: "https://github.com/RachitGandhi13/auroraConnect",
    linkLabel: "GITHUB",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const reversed = index % 2 === 1;
  const hasImage = !!project.image;

  return (
    <div ref={ref} className="relative py-16 md:py-28 lg:py-36 border-b border-black/10 dark:border-white/10 last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image / placeholder */}
        <div
          className={`md:col-span-7 ${reversed ? "md:order-2" : "md:order-1"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/11] overflow-hidden bg-[#EAEAE6] dark:bg-[#111]"
          >
            {hasImage ? (
              <>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  style={{ y: imgY, scale: imgScale, willChange: "transform" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F5F4F0]/30 dark:from-[#0a0a0a]/30 via-transparent to-[#F5F4F0]/20 dark:to-[#0a0a0a]/20" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`font-display font-medium tracking-tighter select-none opacity-10 text-[180px] md:text-[220px] leading-none ${project.accentClass}`}
                >
                  {project.no}
                </span>
              </div>
            )}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <span className="font-mono-label text-black/50 dark:text-white/70">
                Case Study · {project.no}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono-label hover:opacity-70 transition-opacity ${project.accentClass}`}
              >
                {project.linkLabel} ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* Info */}
        <div
          className={`md:col-span-5 ${reversed ? "md:order-1" : "md:order-2"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span
                className={`font-display text-[64px] md:text-[80px] leading-none tracking-tighter ${project.accentClass}`}
              >
                {project.no}
              </span>
              <span className="font-mono-label text-black/55 dark:text-white/40">{project.sub}</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter text-[#0a0a0a] dark:text-white leading-[0.98] mb-6">
              {project.title}
            </h3>
            <p className="text-black/65 dark:text-white/65 leading-relaxed text-[15px] md:text-[16px] font-light max-w-xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label border border-black/10 dark:border-white/10 px-3 py-1.5 text-black/50 dark:text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#F5F4F0] dark:bg-[#0a0a0a] py-12 overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="pb-12 border-b border-black/10 dark:border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#A87D5C]" />
            <span className="font-mono-label text-[#A87D5C] dark:text-[#E8E4D9]">02 — Work</span>
          </div>
          <h2 className="font-display font-medium tracking-tighter text-[#0a0a0a] dark:text-white text-5xl md:text-7xl lg:text-[88px] leading-[0.95] max-w-4xl">
            Selected{" "}
            <span className="font-serif-italic text-[#A87D5C] dark:text-[#E8E4D9]">projects</span>{" "}
            & builds.
          </h2>
        </motion.div>

        {projects.map((project, i) => (
          <ProjectCard key={project.no} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
