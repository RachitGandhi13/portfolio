"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    label: "Email",
    value: "rachitgandhi7727@gmail.com",
    href: "mailto:rachitgandhi7727@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "in/rachitgandhi13",
    href: "https://linkedin.com/in/rachitgandhi13",
  },
  {
    label: "GitHub",
    value: "@RachitGandhi13",
    href: "https://github.com/RachitGandhi13",
  },
  {
    label: "Phone",
    value: "+91 7004363366",
    href: "tel:+917004363366",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Project enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:rachitgandhi7727@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F5F4F0] dark:bg-[#0a0a0a] py-32 md:py-48 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(168,125,92,0.08),transparent_60%)] pointer-events-none" />
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-12 md:mb-20">
            <span className="h-px w-10 bg-[#A87D5C]" />
            <span className="font-mono-label text-[#A87D5C] dark:text-[#E8E4D9]">05 — Contact</span>
          </div>
          <h2 className="font-display font-medium tracking-tighter text-[#0a0a0a] dark:text-white text-5xl md:text-7xl lg:text-[112px] leading-[0.92] max-w-6xl mb-20 md:mb-28">
            Let&apos;s build something{" "}
            <span className="font-serif-italic text-[#A87D5C] dark:text-[#E8E4D9]">
              production-ready
            </span>
            .
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Form */}
          <div className="lg:col-span-7">
            {sent ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-display text-2xl text-[#A87D5C] dark:text-[#E8E4D9] tracking-tighter"
              >
                Message sent. I&apos;ll be in touch soon.
              </motion.p>
            ) : (
              <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                className="space-y-10"
              >
                <div>
                  <label className="font-mono-label text-black/40 dark:text-white/40 block mb-2">
                    01 — Your name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={onChange("name")}
                    className="lux-input"
                    placeholder="First name's fine"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono-label text-black/40 dark:text-white/40 block mb-2">
                    02 — Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    className="lux-input"
                    placeholder="your@email.here"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono-label text-black/40 dark:text-white/40 block mb-2">
                    03 — Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={onChange("message")}
                    className="lux-input resize-none"
                    placeholder="What are we building? Drop the idea, the stack, the timeline - or just say hi."
                    rows={4}
                    required
                  />
                </div>
                <div className="flex items-center justify-between pt-6">
                  <button
                    type="submit"
                    className="lux-button lux-button-bronze border border-[#A87D5C]/60 rounded-full px-8 py-3.5 text-[14px] font-display tracking-tight text-[#A87D5C] dark:text-[#E8E4D9] inline-flex items-center gap-2"
                  >
                    Send message <span>↗</span>
                  </button>
                </div>
              </motion.form>
            )}
          </div>

          {/* Socials */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-black/10 dark:lg:border-white/10">
            <p className="font-mono-label text-[#A87D5C] mb-8">Direct links</p>
            <ul>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-baseline justify-between border-b border-black/10 dark:border-white/10 py-5 hover:border-[#A87D5C] dark:hover:border-[#E8E4D9] transition-colors"
                  >
                    <span className="font-mono-label text-black/40 dark:text-white/40 w-24 shrink-0">
                      {s.label}
                    </span>
                    <span className="font-display text-black/90 dark:text-white/90 text-xl md:text-2xl tracking-tighter group-hover:text-[#A87D5C] dark:group-hover:text-[#E8E4D9] transition-colors flex-1 text-right pr-3">
                      {s.value}
                    </span>
                    <span className="text-black/40 dark:text-white/40 group-hover:text-[#A87D5C] dark:group-hover:text-[#E8E4D9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
