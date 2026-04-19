"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Layers, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = ["SECURITY-FIRST SYSTEMS", "STRUCTURED INNOVATION", "GLOBAL VERIFICATION"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setSpeed(80);
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setSpeed(30);
      }

      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };
    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  return (
    /* Changed bg-[#051007] to bg-transparent */
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-transparent pt-32 pb-12 px-6 md:px-12">
      
      {/* 1. Subtle Dark Overlay (Ensures text stays readable over video) */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* 2. Brand Glows (Adjusted opacity to blend with video) */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#A6CE39]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#1B5E20]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col flex-grow">
        {/* TOP NAV-STRIP */}
        <div className="flex flex-wrap justify-between items-center border-b border-white/10 pb-6 mb-12">
                  {/* Top Badge */}

          <motion.div

            initial={{ opacity: 0, scale: 0.9 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ delay: 0.2 }}

            className="inline-flex items-center gap-2 px-3 py-2 mb-6 md:mb-8 rounded-full bg-[#0a1e10]/60 border border-[#A6CE39]/30 text-[#A6CE39] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md"

          >

            <ShieldCheck size={12} className="animate-pulse" />

            EL SYSTEM INTERNATIONAL

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-[#A6CE39]/80"
          >
           
          </motion.div>
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end flex-grow pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="text-[3.5rem] sm:text-5xl md:text-[8rem] lg:text-[7rem] font-black leading-[0.85] tracking-tighter text-white uppercase italic">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/60 to-white/10">
                STABILITY.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-4 lg:pb-6"
          >
            <p className="text-lg md:text-xl text-[#eaf5ea] leading-tight font-light italic mb-6 drop-shadow-lg">
              ELSINAL architected systems prioritize the protection of users, data, and global transactions.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-[#A6CE39] to-transparent mb-6" />
            <div className="min-h-[1.5em]">
              <span className="text-white font-black uppercase tracking-widest text-xs md:text-sm drop-shadow-md">
                Focus: {currentText}
              </span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM PILLAR GRID */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-1 border-t border-white/10"
        >
          {[
            { icon: Layers, title: "Product Ecosystem", desc: "Secure trading & investment platforms.", sub: "TradeEl / Elmart / iVest" },
            { icon: Cpu, title: "Tech Services", desc: "High-load engineering and AI.", sub: "Web2 / Web3 / Automation" },
            { icon: Globe, title: "Elsinal Institute", desc: "Building the next talent pipeline.", sub: "Technical Academy" },
          ].map((item, idx) => (
            <div key={idx} className="group relative p-8 bg-black/10 backdrop-blur-[2px] hover:bg-white/[0.05] transition-colors border-r border-white/5 last:border-r-0">
              <div className="flex items-start justify-between mb-8">
                <item.icon size={20} className="text-[#A6CE39] opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-[10px] font-black text-white/20">0{idx + 1}</span>
              </div>
              <h4 className="text-xl font-black text-white mb-2 uppercase italic drop-shadow-md">{item.title}</h4>
              <p className="text-xs text-[#eaf5ea] font-light mb-4 drop-shadow-sm">{item.desc}</p>
              <p className="text-[9px] font-black text-[#A6CE39] tracking-[0.2em] uppercase">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER DATA STREAM */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-2 border-t border-white/5 bg-black/20 backdrop-blur-md">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="inline-block text-[8px] font-black text-white/30 uppercase tracking-[0.5em]"
        >
          SECURITY • STRUCTURE • VERIFICATION • SCALABILITY • DECENTRALIZED • $ELM TOKEN • GLOBAL INFRASTRUCTURE • 
          SECURITY • STRUCTURE • VERIFICATION • SCALABILITY • DECENTRALIZED • $ELM TOKEN • GLOBAL INFRASTRUCTURE • 
        </motion.div>
      </div>
    </section>
  );
}