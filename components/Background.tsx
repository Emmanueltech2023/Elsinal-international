"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function InteractiveBackground() {
  const containerRef = useRef(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Subtle parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#051007] overflow-hidden">
      
      {/* LAYER 1: The Base Schematic (Your Generated Image) */}
      <motion.div 
        style={{ y: yRange }}
        className="absolute inset-0 opacity-40 grayscale-[0.5] contrast-125 scale-110"
      >
        <img 
          src="/bg-schematic.png" 
          alt="System Schematic" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* LAYER 2: The "Energy Scan" Overlay */}
      <motion.div 
        animate={{ 
          top: ["-100%", "200%"],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute left-0 right-0 h-[20vh] bg-gradient-to-b from-transparent via-[#A6CE39]/10 to-transparent pointer-events-none"
      />

      {/* LAYER 3: The Pulsing Central Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ 
            filter: [
              "drop-shadow(0 0 20px rgba(166, 206, 57, 0.3))",
              "drop-shadow(0 0 50px rgba(166, 206, 57, 0.6))",
              "drop-shadow(0 0 20px rgba(166, 206, 57, 0.3))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-48 h-48 md:w-64 md:h-64 opacity-80"
        >
          {/* <img src="/logo3.png" alt="Logo" className="w-full h-full object-contain" /> */}
        </motion.div>
      </div>

      {/* LAYER 4: Floating Data Particles */}
    <div className="absolute inset-0 pointer-events-none">
        {/* 2. ONLY render particles if isClient is true */}
        {isClient && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`, 
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [0, 0.4, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-[#A6CE39] rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* LAYER 5: Vignette (Focuses the eye on the center) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#051007_85%)]" />
    </div>
  );
}