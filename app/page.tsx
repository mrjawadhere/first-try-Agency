'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/app/components/Hero';
import Testimonials from '@/app/components/Testimonials';
import FAQ from '@/app/components/FAQ';
import StatsCounter from '@/app/components/StatsCounter';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 550);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="size-full">
      {/* Loading overlay */}
      {!loaded && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="size-2 rounded-full bg-indigo-400 animate-pulse [animation-delay:120ms]" />
            <span className="size-2 rounded-full bg-purple-400 animate-pulse [animation-delay:240ms]" />
            <span className="ml-2">Loading...</span>
          </div>
        </div>
      )}

      <Hero />

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}} className="text-2xl md:text-3xl text-white/90">About Us</motion.h2>
        <p className="text-white/70 text-sm mt-3 max-w-3xl">
          JR AI Agency partners with startups and small businesses to design, build, and ship intelligent software. We specialize in AI agent development, code & no-code automations, and high-performance backends.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: 'End-to-end delivery', desc: 'From scoping to deployment, we manage the full lifecycle with clarity and speed.' },
            { title: 'Code & No-Code', desc: 'Pragmatic stacks that blend Python, FastAPI, and N8N to ship faster.' },
            { title: 'Results-oriented', desc: 'We focus on measurable outcomes—efficiency, reliability, and ROI.' },
          ].map((c, i) => (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="rounded-md border border-white/10 bg-white/5 p-4">
              <div className="text-white/90 text-sm">{c.title}</div>
              <p className="text-white/70 text-xs mt-1">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl text-white/90">Services</h2>
        <p className="text-white/60 text-sm mt-2">AI Agent Development, Code & No-Code solutions, and Backend Engineering.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* AI Agent Development */}
          <ServiceCard title="AI Agent Development" bullets={[
            'End-to-end AI agent solutions',
            'Custom chatbots for industries',
            'Intelligent automation systems',
          ]} stack={["OpenAI Agent SDK","LangGraph/LangChain","RAG"]} color="from-indigo-400/20 to-purple-400/20"/>
          {/* Code & No-Code */}
          <ServiceCard title="Code & No-Code AI Solutions" bullets={[
            'Python-based AI apps',
            'FastAPI backends',
            'N8N workflow automation',
            'No-code AI implementations',
          ]} stack={["Python","FastAPI","N8N"]} color="from-emerald-400/20 to-teal-400/20"/>
          {/* Backend */}
          <ServiceCard title="Backend Development" bullets={[
            'RESTful API development',
            'Database architecture (MongoDB, NoSQL)',
            'System integration',
            'Performance optimization',
          ]} stack={["APIs","MongoDB","Integration"]} color="from-sky-400/20 to-indigo-400/20"/>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl text-white/90">Skills & Technologies</h2>
        <p className="text-white/60 text-sm mt-2">Expertise across code, no-code, and AI frameworks.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="grid gap-3">
            {[
              { name: 'Python', val: 95 },
              { name: 'FastAPI', val: 92 },
              { name: 'LangGraph/LangChain', val: 90 },
              { name: 'N8N Automation', val: 92 },
              { name: 'OpenAI Agent SDK', val: 90 },
              { name: 'MCP (Model Context Protocol)', val: 85 },
              { name: 'RAG Systems', val: 90 },
              { name: 'TensorFlow', val: 82 },
              { name: 'OpenCV', val: 80 },
              { name: 'MongoDB', val: 88 },
              { name: 'Git/GitHub', val: 94 },
            ].map((s, i) => (
              <SkillBar key={i} label={s.name} value={s.val} />
            ))}
          </div>
          <div className="grid gap-4 content-start">
            <div className="text-white/80 text-sm">Technologies we love</div>
            <div className="flex flex-wrap gap-2">
              {["Python","FastAPI","LangChain","LangGraph","N8N","OpenAI Agent SDK","MCP","RAG","TensorFlow","OpenCV","MongoDB","Git","GitHub"].map((t,i)=> (
                <span key={i} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs text-white/80">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl text-white/90">Selected Projects</h2>
        <p className="text-white/60 text-sm mt-2">A snapshot of recent work and outcomes.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4, delay:(i%2)*0.05}} className="group relative overflow-hidden rounded-md border border-white/10 bg-white/5 p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-white/90 text-sm">{p.title}</div>
              <p className="text-white/70 text-xs mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, j) => (
                  <span key={j} className="px-2 py-1 rounded bg-black/40 border border-white/10 text-[10px] text-white/70">{t}</span>
                ))}
              </div>
              {p.impact && <div className="mt-3 text-[11px] text-emerald-300/90">{p.impact}</div>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us + Stats */}
      <section id="why" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl text-white/90">Why choose us</h2>
            <ul className="mt-3 grid gap-2 text-sm text-white/70 list-disc pl-5">
              <li>Startup-friendly process and timelines</li>
              <li>Clear communication, fast iterations</li>
              <li>Proven results with measurable impact</li>
              <li>Maintainable code and reliable automations</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6 rounded-md border border-white/10 bg-white/5 p-4">
            <StatsCounter value={10} suffix="+" label="Projects Delivered" />
            <StatsCounter value={80} suffix="%" label="Manual time reduced" />
            <StatsCounter value={24} suffix="/7" label="Automation uptime" />
            <StatsCounter value={100} suffix="%" label="Client-focused" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl text-white/90">Leadership Team</h2>
        <p className="text-white/60 text-sm mt-2">Hands-on founders leading builds from strategy to delivery.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[{name:'Jawad Ahmad',role:'Co-Founder & CEO',avatar:'https://i.pravatar.cc/240?u=jawad-ceo',git:'#'}, {name:'Hafiz Rehan',role:'Co-Founder & CEO',avatar:'https://i.pravatar.cc/240?u=hafiz-ceo',git:'#'}].map((m,i)=> (
            <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="relative overflow-hidden rounded-md border border-white/10 bg-white/5">
              <div className="p-4 flex items-center gap-4">
                <img src={m.avatar} alt={m.name} className="size-16 rounded-full" />
                <div>
                  <div className="text-white/90 text-sm">{m.name}</div>
                  <div className="text-white/60 text-xs">{m.role}</div>
                  <div className="mt-2">
                    <a href={m.git} className="text-emerald-300 text-xs hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />

      <FAQ />

      {/* Blog/News */}
      <section id="blog" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl text-white/90">Insights & News</h2>
        <p className="text-white/60 text-sm mt-2">Thoughts on agents, automation, and AI product builds. (Coming soon)</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1,2,3].map((i)=> (
            <div key={i} className="rounded-md border border-white/10 bg-white/5 p-4">
              <div className="text-white/80 text-sm">Placeholder article</div>
              <p className="text-white/60 text-xs mt-1">We&apos;re curating case studies and technical deep-dives—stay tuned.</p>
              <div className="mt-3 text-[11px] text-white/50">Coming soon</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Footer spacing handled by footer */}
    </div>
  );
}

function ServiceCard({ title, bullets, stack, color }: { title: string; bullets: string[]; stack: string[]; color: string }) {
  return (
    <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}} className={`rounded-md border border-white/10 bg-gradient-to-br ${color} p-4`}> 
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-300">
            <path d="M12 3L20 7V17L12 21L4 17V7L12 3Z" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M12 12L20 8" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M12 12V21" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M12 12L4 8" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </div>
        <div>
          <div className="text-white/90 text-sm">{title}</div>
          <ul className="mt-2 text-white/70 text-xs grid gap-1 list-disc pl-5">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((s, i) => (
              <span key={i} className="px-2 py-1 rounded bg-black/30 border border-white/10 text-[10px] text-white/70">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!visible) return;
    const to = setTimeout(() => setW(value), 150);
    return () => clearTimeout(to);
  }, [visible, value]);
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-xs text-white/70">
        <span>{label}</span>
        <span>{w}%</span>
      </div>
      <div className="mt-1 h-2 rounded bg-white/10 overflow-hidden">
        <div className="h-full rounded bg-emerald-400/90 transition-[width] duration-700" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'AI Agent for University Portal System',
    desc: 'Automated admissions and streamlined operations across the portal.',
    tech: ['Agent', 'RAG', 'LangChain', 'FastAPI'],
    impact: 'Reduced manual processing time by 80%+',
  },
  {
    title: 'Jarvis AI Assistant',
    desc: 'Multi-modal assistant with advanced NLP and voice recognition.',
    tech: ['NLP', 'Voice', 'Python'],
  },
  {
    title: 'Cat & Dog Classification (ML)',
    desc: 'Real-time image classification with 95%+ accuracy.',
    tech: ['TensorFlow', 'Computer Vision'],
  },
  {
    title: 'WhatsApp AI Agent & Bot (N8N)',
    desc: '24/7 automated customer support with no-code workflows.',
    tech: ['N8N', 'Automation', 'WhatsApp'],
  },
  {
    title: 'Virtual Mouse Control System',
    desc: 'Hand gesture recognition with OpenCV for real-time mouse control.',
    tech: ['OpenCV', 'Python'],
  },
  {
    title: 'RAG-Based Knowledge Systems',
    desc: 'Document processing and intelligent retrieval for custom knowledge bases.',
    tech: ['RAG', 'Embeddings', 'Vector DB'],
  },
];

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const validate = () => {
    setError(null);
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!name || !emailOk || !message) {
      setError("Please fill all fields with a valid email.");
      return false;
    }
    return true;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setOk(true);
    const subject = encodeURIComponent(`New AI Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:jraiagency@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl text-white/90">Contact</h2>
      <p className="text-white/60 text-sm mt-2">Email us at <a className="underline hover:text-white" href="mailto:jraiagency@gmail.com">jraiagency@gmail.com</a> or use the form.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <form onSubmit={submit} className="rounded-md border border-white/10 bg-white/5 p-4 grid gap-3">
          <div>
            <label htmlFor="name" className="text-xs text-white/70">Name</label>
            <input id="name" value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full rounded bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400/70" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="text-xs text-white/70">Email</label>
            <input id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400/70" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="text-xs text-white/70">Message</label>
            <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)} className="mt-1 min-h-32 w-full rounded bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400/70" placeholder="Tell us about your project" />
          </div>
          {error && <div className="text-xs text-red-300">{error}</div>}
          {ok && !error && <div className="text-xs text-emerald-300">Thanks! Opening your email client…</div>}
          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-2.5 rounded-md bg-emerald-400 text-black text-sm font-medium hover:bg-emerald-300">Send</button>
            <a href="#portfolio" className="px-5 py-2.5 rounded-md bg-white/10 text-white text-sm hover:bg-white/15 border border-white/15">View Portfolio</a>
          </div>
          <div className="text-xs text-white/60">Faisalabad, Pakistan</div>
        </form>
        <div className="rounded-md border border-white/10 bg-white/5 p-4">
          <div className="text-white/80 text-sm">Get a consultation</div>
          <p className="text-white/70 text-xs mt-2">We&apos;ll review your goals and recommend a pragmatic roadmap—code, no-code, or a hybrid approach.</p>
          <ul className="mt-4 grid gap-2 text-xs text-white/70 list-disc pl-5">
            <li>Discovery call (30–45 min)</li>
            <li>Architecture & timeline proposal</li>
            <li>Fixed or milestone pricing</li>
          </ul>
          <div className="mt-4 text-[11px] text-white/50">Pricing: tailored quotes based on scope.</div>
        </div>
      </div>
    </section>
  );
}