"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Services from "@/components/Services";
import Academy from "@/components/Academy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#051007] text-[#eaf5ea] selection:bg-[#A6CE39]/30 overflow-x-hidden">
      <Navbar />
      
      {/* 1. Optimized Video Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#051007]">
        <video
  autoPlay
  loop
  muted
  playsInline
  suppressHydrationWarning
  preload="auto" // Forces the browser to start downloading the video immediately
  className="w-full h-full object-cover opacity-20 md:opacity-30 mix-blend-screen scale-105 pointer-events-none"
>
  <source src="/video/background.mp4" type="video/mp4" />
</video>
        
        {/* Ambient Overlays */}
        <div className="absolute inset-0 bg-[#A6CE39]/5 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#051007_100%)] pointer-events-none opacity-90"></div>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10"> 
        <Hero />

        {/* Stats Bar - Optimized Grid for Mobile */}
      {/* Glassmorphism Marquee Stats Bar */}
<section className="relative z-10 py-10 md:py-14 border-y border-[#A6CE39]/20 overflow-hidden">
  
  {/* The Glass Layer */}
  <div className="absolute inset-0 bg-[#051007]/60 backdrop-blur-xl shadow-[inset_0_0_50px_rgba(166,206,57,0.05)]" />

  <div className="relative flex">
    {/* The animation container */}
    <div className="animate-marquee">
      {[...Array(2)].map((_, listIdx) => (
        <div key={listIdx} className="flex items-center">
          {[
            { val: "24/7", label: "System Monitoring" },
            { val: "100%", label: "Secure Execution" },
            { val: "GLOBAL", label: "Service Delivery" },
            { val: "SCALABLE", label: "Architecture" },
            { val: "VERIFIED", label: "P2P Infrastructure" },
            { val: "AI-POWERED", label: "Fraud Detection" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center px-10 md:px-20">
              {/* Glowing Diamond Separator */}
              <div className="w-1.5 h-1.5 bg-[#A6CE39] rotate-45 mx-10 md:mx-20 shadow-[0_0_12px_#A6CE39] opacity-60" />
              
              <div className="flex flex-col items-start">
                <div className="text-3xl md:text-2xl font-[900] text-[#A6CE39] italic tracking-tighter leading-none drop-shadow-md">
                  {stat.val}
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/60 font-black mt-2">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Spacing adjustments for mobile sections */}
        <div className="space-y-0 md:space-y-10">
          <Ecosystem />
          <Services />
          <Academy />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}