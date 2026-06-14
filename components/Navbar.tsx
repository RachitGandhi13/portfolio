"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="w-6 h-4 inline-block" />;
  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="paren-link hover:text-[var(--fg)]"
      aria-label="Toggle theme"
    >
      ({isDark ? "light" : "dark"})
    </button>
  );
}

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 lg:px-16 h-[56px] flex items-center justify-between"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <a
          href="#"
          className="text-[11px] font-mono tracking-[0.12em]"
          style={{ color: "var(--muted)" }}
        >
          Rachit — folio
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="paren-link">
              ({l.label})
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden paren-link"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "(close)" : "(menu)"}
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: "var(--bg)" }}
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-display text-5xl uppercase"
                style={{ color: "var(--fg)" }}
              >
                ({l.label})
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
