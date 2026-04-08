"use client";
import { motion } from "framer-motion";

export default function ProductHero({ title, subtitle, tagline, accentColor }: any) {
  return (
    <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 blur-[120px] rounded-full`} style={{ backgroundColor: accentColor }}></div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-6 block"
        >
          ELSINAL Ecosystem Pillar
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.8] mb-10"
        >
          {title}<span style={{ color: accentColor }}>.</span>
        </motion.h1>
        <p className="text-xl md:text-2xl text-[#a8c2a8] max-w-3xl font-light leading-relaxed italic">
          "{tagline}"
        </p>
      </div>
    </section>
  );
}