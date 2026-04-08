"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ShieldCheck, Zap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#051007] text-[#eaf5ea] selection:bg-[#A6CE39]/30 overflow-x-hidden">
      <Navbar />

      <div className="pt-24 md:pt-32">
        {/* 1. HERO / VISION SECTION */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0a1e10] border border-[#A6CE39]/30 text-[#A6CE39] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8">
                The Ecosystem Vision
              </span>
              <h1 className="text-5xl md:text-8xl font-[900] tracking-tighter text-white leading-[0.9] mb-8 md:mb-10 uppercase italic">
                GLOBAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6CE39] to-[#8BC34A]">LIMITLESS</span> <br />
                GROWTH.
              </h1>
              <p className="text-lg md:text-xl text-[#a8c2a8] leading-relaxed font-light mb-8 italic border-l-2 border-[#A6CE39] pl-6 py-1">
                "To build a globally recognized digital ecosystem that empowers individuals and businesses to operate, innovate, and grow without limitations."
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[#A6CE39]/10 blur-[100px] rounded-full animate-pulse" />
              <div className="p-8 md:p-12 bg-[#0a1e10] border border-white/5 rounded-[2rem] md:rounded-[3rem] relative z-10 shadow-2xl">
                <h3 className="text-[#A6CE39] font-black text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6">Our Mission</h3>
                <p className="text-xl md:text-2xl font-bold text-white leading-tight uppercase italic tracking-tight">
                  Designing secure, scalable, and efficient technology systems while enabling access to digital opportunities through structured platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CORE PILLARS */}
        <section className="px-6 md:px-12 py-24 md:py-32 bg-[#08170c] border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-[10px] md:text-sm font-black text-[#A6CE39] tracking-[0.4em] uppercase mb-4">The ELSINAL Edge</h2>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase italic">Integrated <br className="md:hidden" /> Infrastructure.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: Zap,
                  title: "Service Delivery",
                  desc: "Providing elite human capital and tech talent needed to manage global communities and high-load architectures."
                },
                {
                  icon: ShieldCheck,
                  title: "Product Innovation",
                  desc: "Addressing critical gaps in the online economy with secure P2P trading, marketplaces, and investment gateways."
                },
                {
                  icon: Globe,
                  title: "Institutional Training",
                  desc: "Developing the next generation of tech experts through structured, professional education paths."
                }
              ].map((pillar, i) => (
                <div key={i} className="text-center p-6 md:p-8 bg-[#051007]/40 rounded-3xl border border-white/5 hover:border-[#A6CE39]/20 transition-all">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#A6CE39] text-[#051007] rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 rotate-3 transition-transform">
                    <pillar.icon size={28} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white mb-4 uppercase italic">{pillar.title}</h4>
                  <p className="text-[#a8c2a8] leading-relaxed text-sm font-light">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FOUNDER & LEADERSHIP */}
        <section id="founder" className="px-6 md:px-12 py-24 md:py-40 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-[#A6CE39]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#A6CE39]/30 shadow-2xl">
                <Image 
                  src="/logo3.png" 
                  alt="Harrison David" 
                  fill 
                  className="object-cover  hover:grayscale-1 transition-all duration-1000"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-6 md:p-8 bg-[#051007]/90 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-[#A6CE39] font-black text-[10px] md:text-xs uppercase tracking-widest mb-1">Founder & CEO</p>
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase italic">Harrison David</h4>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-[10px] md:text-sm font-black text-[#A6CE39] tracking-[0.4em] uppercase mb-4">The Architect</h2>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase italic">
                BUILDING <br /> SOLUTIONS.
              </h3>
              <div className="space-y-6 text-[#a8c2a8] text-base md:text-lg font-light leading-relaxed">
                <p>
                  Harrison David is a visionary pioneer focused on solving the fundamental challenges of trust, access, and system structure in the digital economy.
                </p>
                <p>
                  With a background centered on <span className="text-white font-bold underline decoration-[#A6CE39]">system architecture planning</span>, he ensures every service under ELSINAL is practical and scalable.
                </p>
                <p className="p-5 md:p-6 bg-[#0a1e10] border-l-4 border-[#A6CE39] rounded-r-xl italic text-sm md:text-base">
                  "ELSINAL is not just about ideas; it is about the surgical execution of digital infrastructure that people can rely on for their livelihoods."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMPETITIVE POSITIONING */}
        <section className="px-6 md:px-12 py-20 md:py-32 bg-gradient-to-b from-[#08170c] to-[#051007]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-3xl md:text-4xl font-black text-white mb-12 md:16 uppercase tracking-tighter italic">Why ELSINAL Stands Out</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                "Combining products, services, and education in one ecosystem.",
                "Strong focus on institutional security and trust systems.",
                "Building both infrastructure and talent simultaneously.",
                "Positioning for global scalability from the start."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-5 md:p-6 bg-[#051007] border border-white/5 rounded-2xl items-center hover:border-[#A6CE39]/20 transition-all">
                  <CheckCircle className="text-[#A6CE39] shrink-0" size={20} />
                  <p className="text-[11px] md:text-sm font-bold text-[#eaf5ea] leading-tight uppercase tracking-tight">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}