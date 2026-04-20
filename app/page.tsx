"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Services from "@/components/Services";
import Academy from "@/components/Academy";
import Footer from "@/components/Footer";
import ElmToken from '@/components/ElmToken';

export default function Home() {
  return (
    /* Removed the local background video div from here 
       because it is now handled by layout.tsx */
    <main className="min-h-screen text-[#eaf5ea] selection:bg-[#A6CE39]/30 overflow-x-hidden">
      <Navbar />
      
      {/* Content Layer */}
      <div className="relative z-10"> 
        <Hero />

        {/* Stats Bar - Optimized Grid for Mobile */}
        <section className="relative z-10 py-8 md:py-14 border-y border-[#A6CE39]/20 overflow-hidden">
          {/* Glassmorphism Background for the Stats Bar */}
          <div className="absolute inset-0 bg-[#051007]/60 backdrop-blur-xl shadow-[inset_0_0_50px_rgba(166,206,57,0.05)]" />

          <div className="relative flex">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, listIdx) => (
                <div key={listIdx} className="flex items-center">
                  {[
                    { val: "24/7", label: "Monitoring" },
                    { val: "100%", label: "Secure" },
                    { val: "GLOBAL", label: "Delivery" },
                    { val: "SCALABLE", label: "Architecture" },
                    { val: "VERIFIED", label: "P2P Infrastructure" },
                    { val: "AI-POWERED", label: "Fraud Detection" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center px-6 md:px-20">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#A6CE39] rotate-45 mx-6 md:mx-20 shadow-[0_0_12px_#A6CE39] opacity-60" />
                      
                      <div className="flex flex-col items-start">
                        <div className="text-xl md:text-3xl font-[900] text-[#A6CE39] italic tracking-tighter leading-none">
                          {stat.val}
                        </div>
                        <div className="text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/60 font-black mt-1 md:mt-2">
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
        <div className="flex flex-col gap-10 md:gap-20">
          <Ecosystem />
          <Services />
          <ElmToken />
          <Academy />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}