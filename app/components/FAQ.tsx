"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QA {
  q: string;
  a: string;
}

const faqs: QA[] = [
  {
    q: "What kinds of AI agents can you build?",
    a: "From industry-specific chatbots to workflow automations and retrieval-augmented assistants, we tailor agents to your exact processes and tools.",
  },
  {
    q: "Do you support no-code stacks like N8N?",
    a: "Yes. We design robust N8N workflows and combine them with code when needed for reliability, scalability, and speed.",
  },
  {
    q: "How long does a typical project take?",
    a: "Small automations take 1–2 weeks. Full AI agents and backends range from 3–8 weeks depending on scope.",
  },
  {
    q: "What is your pricing model?",
    a: "We scope a fixed engagement or milestone-based plan. Most builds are custom—contact us for a tailored quote.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl text-white/90">FAQ</h2>
      <p className="text-white/60 text-sm mt-2">Answers to common AI development questions.</p>

      <div className="mt-6 grid gap-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border border-white/10 rounded-md overflow-hidden bg-white/5">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left px-4 py-3 flex items-center justify-between"
                aria-expanded={isOpen}
              >
                <span className="text-white/90 text-sm">{item.q}</span>
                <span className="text-white/70">{isOpen ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-4 pb-4 text-white/70 text-sm"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
