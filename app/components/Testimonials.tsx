import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Founder, EduStart",
    quote:
      "They automated our admissions with an AI agent—turnaround times dropped dramatically without sacrificing the human touch.",
    avatar: "https://i.pravatar.cc/120?u=jraiagency1",
  },
  {
    name: "Michael Chen",
    role: "CTO, RetailOps",
    quote:
      "Our N8N workflows are now rock-solid, and the FastAPI backend scales cleanly. Excellent communication and delivery.",
    avatar: "https://i.pravatar.cc/120?u=jraiagency2",
  },
  {
    name: "Sara Ibrahim",
    role: "Product Lead, HealthAI",
    quote:
      "Their RAG system made our knowledge base instantly searchable and reliable. Huge productivity boost for our team.",
    avatar: "https://i.pravatar.cc/120?u=jraiagency3",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl text-white/90">What clients say</h2>
      <p className="text-white/60 text-sm mt-2">A few words from recent engagements.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-md border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="size-10 rounded-full" />
              <div>
                <div className="text-white/90 text-sm">{t.name}</div>
                <div className="text-white/60 text-xs">{t.role}</div>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-3">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
