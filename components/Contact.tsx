"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* CTA — exact ning-h phrase */}
      <div className="px-6 md:px-10 lg:px-16 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sans font-medium leading-tight mb-8"
          style={{ fontSize: "clamp(22px, 3.5vw, 48px)", color: "var(--fg)" }}
        >
          Have a project in mind?
          <br />
          Feel free to{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="underline underline-offset-4 transition-opacity duration-200 hover:opacity-50"
            style={{ textDecorationColor: "var(--border)" }}
          >
            contact
          </a>
          .
        </motion.p>
      </div>

      {/* Footer */}
      <div
        className="px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {/* Left */}
        <div className="flex flex-col gap-1">
          <a
            href="#"
            className="section-label hover:text-[var(--fg)] transition-colors"
          >
            Back to Top ↑
          </a>
          <p className="section-label mt-2">Design & Dev by Rachit Gandhi</p>
        </div>

        {/* Right: socials */}
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="section-label hover:text-[var(--fg)] transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* "Party!" + easter egg — exact ning-h footer detail */}
      <div
        className="px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="section-label">Party!</span>
        {/* Hidden easter egg — exact ning-h style */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="section-label opacity-0 hover:opacity-100 transition-opacity duration-500 select-none"
          title="shhh"
        >
          ● shhh ~ You found a hidden link
        </a>
        <a
          href={personalInfo.resumePath}
          download
          className="section-label hover:text-[var(--fg)] transition-colors"
        >
          CV
        </a>
      </div>
    </section>
  );
}
