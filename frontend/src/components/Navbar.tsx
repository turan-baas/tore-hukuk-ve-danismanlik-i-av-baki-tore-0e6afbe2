"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Yorumlar", href: "#reviews" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-[12px] shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight"
          style={{ color: scrolled ? "var(--color-primary)" : "#fff" }}
        >
          Töre{" "}
          <span style={{ color: "var(--color-accent)" }}>Hukuk</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-hover-underline text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300"
              style={{
                color: scrolled
                  ? "var(--color-text-muted)"
                  : "rgba(255,255,255,0.8)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[var(--color-accent)] text-white text-[0.8rem] uppercase tracking-[0.15em] font-medium rounded-full px-7 py-2.5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            İletişim
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
          aria-label="Menü"
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-0 bg-white"
                : scrolled
                ? "bg-[var(--color-primary)] -translate-y-1.5"
                : "bg-white -translate-y-1.5"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                ? "bg-[var(--color-primary)]"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 translate-y-0 bg-white"
                : scrolled
                ? "bg-[var(--color-primary)] translate-y-1.5"
                : "bg-white translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-[var(--color-primary)] transition-all duration-500 lg:hidden flex flex-col items-center justify-center ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-white text-2xl font-[family-name:var(--font-heading)] font-semibold mb-8 ${
              mobileOpen ? "stagger-item" : "opacity-0"
            }`}
            style={{
              animationDelay: mobileOpen ? `${i * 100 + 200}ms` : "0ms",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
