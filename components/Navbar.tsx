"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 dark:bg-ink/90 backdrop-blur-md border-b border-ink/10 dark:border-cream/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            aria-label="Home"
            className="font-display text-2xl text-ink dark:text-cream tracking-wider leading-none"
          >
            RG
            <span className="text-[#E8300A]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[10px] font-mono text-ink/50 dark:text-cream/50 hover:text-ink dark:hover:text-cream uppercase tracking-[0.2em] hover:bg-ink/5 dark:hover:bg-cream/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 pl-3 border-l border-ink/15 dark:border-cream/15">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-ink dark:text-cream hover:bg-ink/5 dark:hover:bg-cream/5 transition-all"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream/98 dark:bg-ink/98 border-t border-ink/10 dark:border-cream/10 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-[10px] font-mono text-ink/50 dark:text-cream/50 hover:text-ink dark:hover:text-cream uppercase tracking-[0.2em] hover:bg-ink/5 dark:hover:bg-cream/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
