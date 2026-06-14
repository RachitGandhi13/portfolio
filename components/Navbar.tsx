"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const LEFT = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
];
const RIGHT = [
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkClass =
    "text-[11px] font-mono text-cream/40 hover:text-cream uppercase tracking-[0.25em] transition-colors duration-200";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Desktop — spread nav */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-14 py-5">
        <nav className="flex items-center gap-10">
          {LEFT.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>{l.label}</a>
          ))}
        </nav>

        <a href="#" aria-label="Home" className="font-display text-cream text-3xl tracking-widest leading-none">
          RG<span className="text-[#E8300A]">.</span>
        </a>

        <nav className="flex items-center gap-10">
          {RIGHT.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>{l.label}</a>
          ))}
        </nav>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-cream text-2xl tracking-widest leading-none">
          RG<span className="text-[#E8300A]">.</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="text-cream/60 hover:text-cream transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-cream/8">
          <nav className="flex flex-col divide-y divide-cream/8 px-6">
            {[...LEFT, ...RIGHT].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-[11px] font-mono text-cream/40 hover:text-cream uppercase tracking-[0.3em] transition-colors"
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
