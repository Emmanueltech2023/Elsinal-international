"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Layers, ShieldCheck, Activity, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = ["SECURITY-FIRST SYSTEMS", "STRUCTURED INNOVATION", "GLOBAL VERIFICATION"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [stability, setStability] = useState(98.4);

  // Fake stability fluctuation
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setStability(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

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
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-transparent pt-32 pb-12 px-6 md:px-12">
      
      {/* 1. Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* 2. Brand Glows */}
      <div className="absolute top-[-5%] right-[-5%] w-[40vw] h-[40vw] bg-[#A6CE39]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-[#A6CE39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col flex-grow">
        
        {/* TOP HUD NAV */}
        <div className="flex justify-between items-start border-b border-white/10 pb-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A6CE39]/10 border border-[#A6CE39]/20 text-[#A6CE39] text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
              <ShieldCheck size={12} className="animate-pulse" />
              EL SYSTEM INTERNATIONAL
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
             {/* <div className="flex flex-col items-end">
                <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest">System Stability</span>
                <span className="text-xl font-black text-[#A6CE39] italic font-mono">{stability}%</span>
             </div> */}
             <div className="h-8 w-px bg-white/10" />
             <div className="flex flex-col items-end">
                <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Global Status</span>
                <span className="text-[10px] font-black text-white px-2 py-0.5 rounded bg-green-500/20 border border-green-500/30">ACTIVE</span>
             </div>
          </div>
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-[3.2rem] sm:text-6xl md:text-[8.5rem] lg:text-[7.5rem] font-black leading-[0.82] tracking-tighter text-white uppercase italic">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#A6CE39]/80 to-white/20">
                STABILITY.
              </span>
            </h1>
          </motion.div>

          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] backdrop-blur-xl relative overflow-hidden group hover:border-[#A6CE39]/40 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              </div>
              
              <p className="text-lg md:text-xl text-white/80 leading-snug font-medium italic mb-8 relative z-10">
                ELSINAL architected systems prioritize the protection of users, data, and global transactions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-black text-[#A6CE39] uppercase tracking-[0.2em] mb-2">
                  <span>Our Focus</span>
                  <Activity size={14} />
                </div>
                <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono">
                  <span className="text-white text-sm md:text-base tracking-tight">
                     {currentText}
                    <span className="animate-pulse bg-[#A6CE39] inline-block w-2 h-4 ml-1 align-middle" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM PILLAR GRID */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border-t border-white/10 overflow-hidden rounded-t-[2.5rem]"
        >
          {[
            { icon: Layers, title: "Product Ecosystem", desc: "Secure trading & investment platforms.", sub: "TradeEl / Elmart / iVest" },
            { icon: Cpu, title: "Tech Services", desc: "High-load engineering and AI.", sub: "Web2 / Web3 / Automation" },
            { icon: Globe, title: "Elsinal Institute", desc: "Building the next talent pipeline.", sub: "Technical Academy" },
          ].map((item, idx) => (
            <div key={idx} className="group relative p-8 md:p-10 bg-black/40 backdrop-blur-md hover:bg-[#A6CE39]/5 transition-all duration-700">
              {/* Vertical Accent Line */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#A6CE39]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between mb-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#A6CE39]/40 group-hover:bg-[#A6CE39]/10 transition-all">
                   <item.icon size={22} className="text-white group-hover:text-[#A6CE39] transition-colors" />
                </div>
                <span className="text-[10px] font-black text-white/10 group-hover:text-[#A6CE39]/20 font-mono transition-colors">MOD-0{idx + 1}</span>
              </div>
              
              <h4 className="text-xl font-black text-white mb-3 uppercase italic group-hover:translate-x-1 transition-transform">{item.title}</h4>
              <p className="text-xs text-white/50 font-medium mb-6 leading-relaxed uppercase tracking-wider">{item.desc}</p>
              
              <div className="flex items-center gap-2">
                 <div className="h-1 w-1 rounded-full bg-[#A6CE39] animate-pulse" />
                 <p className="text-[9px] font-black text-[#A6CE39] tracking-[0.2em] uppercase">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER DATA STREAM */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-3 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="inline-block text-[9px] font-black text-white/20 uppercase tracking-[0.4em]"
        >
          STABILITY ACTIVE • VERIFIED ARCHITECTURE • ENCRYPTED PAYLOADS • $ELM ECOSYSTEM • SYSTEM STABILITY {stability}% • NODES ONLINE • 
          STABILITY ACTIVE • VERIFIED ARCHITECTURE • ENCRYPTED PAYLOADS • $ELM ECOSYSTEM • SYSTEM STABILITY {stability}% • NODES ONLINE • 
        </motion.div>
      </div>
    </section>
  );
}