"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const links = [
  { label: "Work", id: "projects" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-[#F5F4F0]/80 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className={`font-display text-[15px] tracking-tight transition-colors ${
            !scrolled
              ? "text-white hover:text-[#E8E4D9]"
              : "text-[#0a0a0a] dark:text-white hover:text-[#A87D5C] dark:hover:text-[#E8E4D9]"
          }`}
        >
          Rachit Gandhi<span className="text-[#A87D5C]">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-mono-label transition-colors duration-300 ${
                !scrolled
                  ? "text-white/70 hover:text-white"
                  : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/RachitRESUME.pdf"
            download
            className={`font-mono-label transition-colors duration-300 ${
              !scrolled
                ? "text-white/70 hover:text-white"
                : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            }`}
          >
            Resume ↓
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors hover:border-[#A87D5C] ${
                !scrolled
                  ? "text-white border-white/30"
                  : "text-[#0a0a0a] dark:text-white border-black/20 dark:border-white/30"
              }`}
            >
              {isDark ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                  <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}
          <button
            onClick={() => scrollTo("contact")}
            className={`lux-button border rounded-full px-5 py-2 text-[13px] font-display tracking-tight transition-colors ${
              !scrolled
                ? "border-white/20 text-white"
                : "border-black/20 dark:border-white/20 text-[#0a0a0a] dark:text-white"
            }`}
          >
            Get in touch
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors hover:border-[#A87D5C] ${
                !scrolled
                  ? "text-white border-white/30"
                  : "text-[#0a0a0a] dark:text-white border-black/20 dark:border-white/30"
              }`}
            >
              {isDark ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                  <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 ${!scrolled ? "text-white" : "text-[#0a0a0a] dark:text-white"}`}
            aria-label="menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-px block transition-all duration-300 ${
                  !scrolled ? "bg-white" : "bg-[#0a0a0a] dark:bg-white"
                } ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`h-px block transition-opacity duration-300 ${
                  !scrolled ? "bg-white" : "bg-[#0a0a0a] dark:bg-white"
                } ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px block transition-all duration-300 ${
                  !scrolled ? "bg-white" : "bg-[#0a0a0a] dark:bg-white"
                } ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#F5F4F0]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-black/5 dark:border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-display text-2xl text-left text-[#0a0a0a]/90 dark:text-white/90 hover:text-[#A87D5C] dark:hover:text-[#E8E4D9] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/RachitRESUME.pdf"
                download
                className="font-display text-2xl text-left text-[#A87D5C] dark:text-[#E8E4D9] hover:opacity-70 transition-opacity"
              >
                Resume ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
