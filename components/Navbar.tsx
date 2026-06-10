"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.timeline, href: "#timeline" },
    { label: t.nav.github, href: "#github" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250, 250, 249, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-mono font-bold text-base cursor-pointer select-none"
            style={{ color: "var(--text-primary)" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span style={{ color: "var(--accent)" }}>{"<"}</span>
            IS
            <span style={{ color: "var(--accent)" }}>{" />"}</span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium transition-colors duration-150 cursor-pointer"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)"; }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div
              className="flex items-center gap-0.5 p-1 rounded-lg"
              style={{ background: "var(--bg-hover)", border: "1px solid var(--border)" }}
            >
              {(["pt", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2.5 py-1 rounded text-xs font-mono font-medium transition-all duration-150 cursor-pointer"
                  style={{
                    background: lang === l ? "var(--accent)" : "transparent",
                    color: lang === l ? "#fff" : "var(--text-muted)",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-1.5 rounded-lg transition-colors cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 pt-20"
            style={{ background: "rgba(250, 250, 249, 0.97)", backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-center gap-6 pt-12">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-xl font-medium cursor-pointer transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)"; }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
