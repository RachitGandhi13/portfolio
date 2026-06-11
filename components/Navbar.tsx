"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About", page: "02" },
  { href: "#experience", label: "Experience", page: "03" },
  { href: "#projects", label: "Projects", page: "04" },
  { href: "#education", label: "Education", page: "05" },
  { href: "#contact", label: "Contact", page: "06" },
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
          ? "bg-cream/92 dark:bg-ink/92 backdrop-blur-md border-b-2 border-ink/15 dark:border-cream/10"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-14">
          <a href="#" aria-label="Home" className="font-display text-2xl text-ink dark:text-cream tracking-wider leading-none">
            RG<span className="text-[#E8300A]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-[9px] font-mono text-ink/40 dark:text-cream/40 hover:text-ink dark:hover:text-cream uppercase tracking-[0.25em] transition-colors"
              >
                <span className="absolute top-1 left-2 text-[7px] text-[#E8300A]/0 group-hover:text-[#E8300A]/60 transition-colors font-mono">
                  {link.page}
                </span>
                {link.label}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-ink/15 dark:border-cream/15">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-ink dark:text-cream"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream/98 dark:bg-ink/98 border-t-2 border-ink/10 dark:border-cream/10 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 divide-y divide-ink/8 dark:divide-cream/8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 text-[10px] font-mono text-ink/50 dark:text-cream/50 hover:text-ink dark:hover:text-cream uppercase tracking-[0.25em] transition-colors"
              >
                {link.label}
                <span className="text-[8px] text-[#E8300A]/50">{link.page}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
