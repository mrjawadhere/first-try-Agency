"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

type SkillItem = {
  name: string;
  icon: string;
};

const skills: SkillItem[] = [
  { name: "Python", icon: "akar-icons:python-fill" },
  { name: "FastAPI", icon: "logos:fastapi" },
  { name: "N8N", icon: "simple-icons:n8n" },
  { name: "OpenAI Agent SDK", icon: "ri:openai-line" },
  { name: "MCP", icon: "gravity-ui:logo-mcp" },
  { name: "LangChain", icon: "simple-icons:langchain" },
  { name: "LangGraph", icon: "simple-icons:langgraph" },
  { name: "TensorFlow", icon: "logos:tensorflow" },
  { name: "OpenCV", icon: "devicon:opencv" },
  { name: "MongoDB", icon: "devicon:mongodb" },
  { name: "Git", icon: "mdi:git" },
  { name: "GitHub", icon: "mdi:github" },
];

export default function SkillsLogos() {
  return (
    <div className="mt-10">
      <div className="text-white/60 text-[11px] mb-3">Our core stack</div>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {skills.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-emerald-400/50 hover:bg-white/10"
          >
            <Icon icon={s.icon} className="text-white/80 group-hover:text-emerald-300 text-[18px] md:text-[22px]" />
            <span className="text-[10px] md:text-xs text-white/70">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
