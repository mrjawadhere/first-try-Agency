"use client";

import React, { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "team", label: "Team" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-black/40 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => handleNav("hero")}
          className="text-white/90 hover:text-white transition-colors text-sm tracking-wide"
          aria-label="JR AI Agency Home"
        >
          <span className="inline-block px-2 py-1 rounded-md bg-white/10 border border-white/10">JR AI Agency</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="text-xs px-3 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium"
          >
            Start Your AI Project
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/90 p-2 rounded-md hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-white/80 hover:text-white py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("contact")}
              className="mt-2 text-left px-3 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black text-sm"
            >
              Start Your AI Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
