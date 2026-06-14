"use client";

import { useState, useEffect } from "react";
import { X, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const LEFT = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
];
const RIGHT = [
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="text-ink/40 dark:text-cream/40 hover:text-ink dark:hover:text-cream transition-colors"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkClass =
    "text-[11px] font-mono text-ink/40 dark:text-cream/40 hover:text-ink dark:hover:text-cream uppercase tracking-[0.25em] transition-colors duration-200";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 dark:bg-ink/90 backdrop-blur-md border-b border-ink/8 dark:border-cream/8"
          : "bg-transparent"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-14 py-5">
        <nav className="flex items-center gap-10">
          {LEFT.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>{l.label}</a>
          ))}
        </nav>

        <a href="#" aria-label="Home" className="font-display text-ink dark:text-cream text-3xl tracking-widest leading-none">
          RG<span className="text-[#E8300A]">.</span>
        </a>

        <nav className="flex items-center gap-10">
          {RIGHT.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>{l.label}</a>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-ink dark:text-cream text-2xl tracking-widest leading-none">
          RG<span className="text-[#E8300A]">.</span>
        </a>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-ink/60 dark:text-cream/60 hover:text-ink dark:hover:text-cream transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream dark:bg-ink border-t border-ink/8 dark:border-cream/8">
          <nav className="flex flex-col divide-y divide-ink/8 dark:divide-cream/8 px-6">
            {[...LEFT, ...RIGHT].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-[11px] font-mono text-ink/40 dark:text-cream/40 hover:text-ink dark:hover:text-cream uppercase tracking-[0.3em] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
