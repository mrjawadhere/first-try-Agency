import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-4 text-white/80 text-sm">
        <div className="md:col-span-2">
          <div className="inline-block px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white">JR AI Agency</div>
          <p className="mt-3 text-white/70 max-w-md">Transforming Ideas into Intelligent Solutions. We build AI agents, code & no-code automations, and robust backends for startups and small businesses.</p>
        </div>
        <div>
          <h4 className="text-white/90 mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white/90 mb-3">Contact</h4>
          <ul className="space-y-2">
            <li><a href="mailto:jraiagency@gmail.com" className="hover:text-white">jraiagency@gmail.com</a></li>
            <li>Faisalabad, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-white/60 text-xs">© {year} JR AI Agency. All rights reserved.</div>
    </footer>
  );
}
