"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

interface NavbarProps {
  onAboutOpen: () => void;
}

export default function Navbar({ onAboutOpen }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isLight = resolvedTheme === "light";

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Main bar — always fixed at top, always above content */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          height: "62px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 4vw, 64px)",
          backgroundColor: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "var(--fg)",
            background: "none",
            border: "none",
            cursor: "none",
            padding: 0,
          }}
        >
          RG
        </button>

        {/* Desktop links */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: "clamp(20px, 3vw, 36px)" }}
        >
          {[
            { label: "Home",     action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
            { label: "About",    action: onAboutOpen },
            { label: "Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
            { label: "Contact",  action: scrollToContact },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "13px",
                letterSpacing: "0.07em",
                color: "var(--fg)",
                background: "none",
                border: "none",
                cursor: "none",
                padding: 0,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
              onFocus={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onBlur={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
            >
              {label}
            </button>
          ))}

          {/* Resume download */}
          <a
            href="/RachitRESUME.pdf"
            download="RachitRESUME.pdf"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "12px",
              letterSpacing: "0.07em",
              color: "var(--bg)",
              backgroundColor: "var(--fg)",
              border: "1px solid var(--fg)",
              borderRadius: "2px",
              padding: "5px 12px",
              textDecoration: "none",
              transition: "opacity 0.15s",
              cursor: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Resume ↓
          </a>

          {/* Divider */}
          <span
            style={{
              width: 1,
              height: 16,
              backgroundColor: "var(--border)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isLight ? "dark" : "light")}
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "var(--fg)",
                opacity: 0.6,
                background: "none",
                border: "none",
                cursor: "none",
                padding: 0,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.6"; }}
            >
              {isLight ? "Dark ○" : "Light ○"}
            </button>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "13px",
            letterSpacing: "0.06em",
            color: "var(--fg)",
            background: "none",
            border: "none",
            cursor: "none",
          }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 499,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(24px, 5vh, 48px)",
              backgroundColor: "var(--bg)",
            }}
          >
            {[
              { label: "Home",     action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); } },
              { label: "About",    action: () => { onAboutOpen(); setMenuOpen(false); } },
              { label: "Projects", action: () => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); } },
              { label: "Contact",  action: () => { scrollToContact(); setMenuOpen(false); } },
            ].map(({ label, action }, i) => (
              <motion.button
                key={label}
                onClick={action}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "clamp(42px, 10vw, 72px)",
                  fontWeight: 700,
                  color: "var(--fg)",
                  background: "none",
                  border: "none",
                  cursor: "none",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                {label}
              </motion.button>
            ))}

            <motion.a
              href="/RachitRESUME.pdf"
              download="RachitRESUME.pdf"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(42px, 10vw, 72px)",
                fontWeight: 700,
                color: "var(--fg)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                opacity: 0.35,
                cursor: "none",
              }}
            >
              Resume ↓
            </motion.a>

            {mounted && (
              <motion.button
                onClick={() => setTheme(isLight ? "dark" : "light")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "13px",
                  color: "var(--fg)",
                  opacity: 0.5,
                  background: "none",
                  border: "none",
                  cursor: "none",
                  marginTop: "16px",
                }}
              >
                Switch to {isLight ? "Dark" : "Light"}
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
