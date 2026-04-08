"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Cpu, Layers } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  // --- CHARACTER TYPEWRITER LOGIC ---
  const words = ["GLOBAL SCALABILITY", "TRUST & INFRASTRUCTURE", "DIGITAL EVOLUTION"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setSpeed(80); // Speed of typing
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setSpeed(20); // Speed of deleting
      }

      // If word is complete, wait then start deleting
      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      // If word is fully deleted, move to next word
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-20">
      {/* Background Brand Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#A6CE39]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 mb-6 md:mb-8 rounded-full bg-[#0a1e10]/60 border border-[#A6CE39]/30 text-[#A6CE39] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A6CE39] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A6CE39]"></span>
            </span>
            EL SYSTEM INTERNATIONAL
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-[900] font-['Manrope'] mb-6 md:mb-8 leading-[0.85] md:leading-[0.9] tracking-[-0.05em] md:tracking-tighter text-white uppercase italic">
            SECURE <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6CE39] via-[#f0fdf4] to-[#A6CE39]/50 inline-block transform scale-x-[1.1] md:scale-x-100 origin-left">
              DIGITAL SYSTEMS.
            </span>
          </h1>

          {/* --- CHARACTER TYPEWRITER DESCRIPTION --- */}
          <div className="text-lg md:text-2xl text-[#a8c2a8] mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0 min-h-[5rem]">
            Solving fundamental challenges in the digital space through 
            <div className="block mt-2 h-8">
              <span className="text-white font-black uppercase tracking-widest text-sm md:text-xl border-b-2 border-[#A6CE39]">
                {currentText}
              </span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                className="inline-block w-[3px] h-[1.2em] bg-[#A6CE39] ml-1 align-middle"
              />
            </div>
          </div>

          {/* Skewed Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#A6CE39] text-[#051007] font-black px-8 md:px-12 py-5 md:py-6 text-base md:text-lg rounded-sm skew-x-[-12deg] hover:shadow-[0_0_30px_rgba(166,206,57,0.4)] transition-all group"
            >
              <span className="skew-x-[12deg] flex items-center justify-center gap-3">
                EXPLORE ECOSYSTEM <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-transparent border-2 border-[#A6CE39]/20 text-white font-black px-8 md:px-12 py-5 md:py-6 text-base md:text-lg rounded-sm skew-x-[-12deg] hover:bg-[#A6CE39]/5 transition-all"
            >
              <span className="skew-x-[12deg]">OUR SERVICES</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Pillar Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: Layers, label: "01", text: "Product Innovation", desc: "TradeEl, Elmart, iVest" },
            { icon: Cpu, label: "02", text: "Tech Services", desc: "Web2/Web3 Development" },
            { icon: Globe, label: "03", text: "Global Education", desc: "ELSINAL Institute" },
          ].map((item, idx) => (
            <div key={idx} className="group text-left p-6 md:p-8 rounded-2xl bg-[#0a1e10]/40 border border-white/5 backdrop-blur-sm hover:border-[#A6CE39]/40 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 md:p-3 bg-[#051007] rounded-lg border border-[#A6CE39]/20 group-hover:bg-[#A6CE39] group-hover:text-[#051007] transition-all">
                  <item.icon size={20} />
                </div>
                <span className="text-[10px] font-black text-[#A6CE39] tracking-[0.3em]">{item.label}</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{item.text}</h4>
              <p className="text-[10px] md:text-xs text-[#a8c2a8] uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#051007] to-transparent" />
    </section>
  );
}