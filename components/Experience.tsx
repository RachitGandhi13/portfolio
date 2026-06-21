"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026 — Now",
    role: "Freelance — Full-Stack Developer",
    place: "Remote",
    body: "Architected and deployed a production Next.js + TypeScript website with Razorpay payment integration and automated lead-capture, improving page load speed by 25% and reducing fraudulent transactions by 20%.",
  },
  {
    year: "May — Jul 2025",
    role: "Software Developer Intern — Lions International",
    place: "India",
    body: "Developed and debugged MERN stack applications, resolving API integration and state-management issues. Designed RESTful APIs with optimized MongoDB queries, improving response time by 25%.",
  },
  {
    year: "2023 — 2027",
    role: "B.Tech Computer Science — SRM University",
    place: "Chennai, India",
    body: "Pursuing B.Tech in Computer Science and Engineering with a 9 / 10 GPA. Core coursework: Data Structures, DBMS, Computer Networks, Operating Systems, and Software Engineering.",
  },
  {
    year: "2021 — 2023",
    role: "Class 12 & 10 — Saint Francis School",
    place: "Deoghar, India",
    body: "Completed Class 12 with 80% and Class 10 with 95.4%. Active in external affairs and editorial leadership at school events.",
  },
];

const achievements = [
  "Oracle Certified Foundations Associate",
  "NPTEL — Programming in Java",
  "DBMS Certification (Scaler)",
  "External Affairs & Editorial Lead",
  "GPA 9 / 10 at SRM University",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#F5F4F0] dark:bg-[#0a0a0a] py-32 md:py-48"
    >
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-12 md:mb-20">
            <span className="h-px w-10 bg-[#A87D5C]" />
            <span className="font-mono-label text-[#A87D5C] dark:text-[#E8E4D9]">
              04 — Experience
            </span>
          </div>
          <h2 className="font-display font-medium tracking-tighter text-[#0a0a0a] dark:text-white text-5xl md:text-7xl lg:text-[88px] leading-[0.95] max-w-5xl mb-20 md:mb-28">
            A career shaped by{" "}
            <span className="font-serif-italic text-[#A87D5C] dark:text-[#E8E4D9]">patience</span>{" "}
            and a few good projects.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-black/10 dark:bg-white/10" />
              <ul className="space-y-16 md:space-y-20">
                {timeline.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.05,
                    }}
                    className="relative pl-10 md:pl-16"
                  >
                    <span className="absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-[#A87D5C]" />
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                      <div className="md:col-span-3">
                        <p className="font-display text-black/85 dark:text-white/85 text-lg md:text-xl tracking-tight">
                          {t.year}
                        </p>
                        <p className="font-mono-label text-black/40 dark:text-white/40 mt-2">
                          {t.place}
                        </p>
                      </div>
                      <div className="md:col-span-9">
                        <h3 className="font-display text-2xl md:text-3xl text-[#0a0a0a] dark:text-white tracking-tighter">
                          {t.role}
                        </h3>
                        <p className="text-black/65 dark:text-white/65 leading-relaxed text-[15px] md:text-[16px] font-light max-w-xl mt-4">
                          {t.body}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Achievements sidebar */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-black/10 dark:lg:border-white/10">
            <p className="font-display text-black/85 dark:text-white/85 text-lg md:text-xl tracking-tight border-b border-black/10 dark:border-white/10 pb-4">
              Achievements
            </p>
            <ul className="mt-6">
              {achievements.map((a) => (
                <li
                  key={a}
                  className="group flex items-baseline justify-between border-b border-black/10 dark:border-white/10 py-5 hover:border-[#A87D5C] dark:hover:border-[#E8E4D9] transition-colors"
                >
                  <span className="font-display text-black/90 dark:text-white/90 text-base md:text-lg tracking-tighter group-hover:text-[#A87D5C] dark:group-hover:text-[#E8E4D9] transition-colors">
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
