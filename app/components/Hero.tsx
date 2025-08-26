"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import SkillsLogos from "@/app/components/SkillsLogos";

const phrases = [
  "Transforming Ideas into Intelligent Solutions",
  "AI Agent Development",
  "Code & No-Code AI Solutions",
  "Backend Engineering",
  "RAG Knowledge Systems",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const current = phrases[index % phrases.length];

    const typingSpeed = deleting ? 35 : 60;
    const pauseTime = 1100;

    const timeout = setTimeout(() => {
      if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), pauseTime);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setSubIndex((s) => s + (deleting ? -1 : 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [mounted, subIndex, deleting, index]);

  useEffect(() => {
    const t = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

  const onPrimaryCTA = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onSecondaryCTA = () => {
    const el = document.getElementById("portfolio");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const typed = React.useMemo(() => phrases[index % phrases.length].slice(0, subIndex), [index, subIndex]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 md:pt-28">
      <ParticlesBackground className="absolute inset-0 w-full h-full" density={0.16} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(28px,6.2vw,56px)] leading-[1.1] tracking-tight text-white font-bold"
        >
          Automate Your Business. Add AI in Your Field.
          <br className="hidden sm:block" />
          Agentic Systems for the Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-base md:text-lg text-white/80"
        >
          {typed}
          <span className={`inline-block w-[2px] h-5 align-middle ml-1 ${blink ? "bg-white/90" : "bg-transparent"}`} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button onClick={onPrimaryCTA} className="px-5 py-2.5 rounded-md bg-emerald-400 text-black text-sm font-medium hover:bg-emerald-300 transition-colors">
            Start Your AI Project
          </button>
          <button onClick={onSecondaryCTA} className="px-5 py-2.5 rounded-md bg-white/10 text-white text-sm hover:bg-white/15 border border-white/15">
            View Portfolio
          </button>
        </motion.div>

        <SkillsLogos />

        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center text-white/70 text-xs">
            <span>Scroll</span>
            <span className="mt-2 inline-flex animate-bounce">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}