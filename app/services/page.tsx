"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Code, ShieldCheck, Cloud, Network, Users, Cpu, Rocket } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);

  return (
    <motion.div style={{ perspective: 1000 }} className={className}>
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={(e) => {
          // Disable tilt logic on touch devices for performance
          if (window.innerWidth < 768) return;
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width / 2);
          y.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className="w-full h-full relative overflow-hidden transition-colors duration-500 rounded-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#051007] text-[#eaf5ea] selection:bg-[#A6CE39]/30 overflow-x-hidden">
      <Navbar />

      <div className="pt-24 md:pt-32">
        {/* 1. SERVICES HERO */}
        <section className="relative px-6 md:px-12 py-16 md:py-24 max-w-screen-2xl mx-auto">
          <div className="absolute top-1/2 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#A6CE39]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
          <div className="max-w-5xl relative z-10 text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0a1e10] border border-[#A6CE39]/30 text-[#A6CE39] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8">
              Technical Excellence
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-[900] tracking-tighter text-white mb-8 md:mb-10 leading-[0.9] uppercase">
              PRECISION <br />
              <span className="opacity-30 italic">ENGINEERING.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#a8c2a8] max-w-3xl leading-relaxed font-light px-1">
              We provide the elite infrastructure and human capital required to sustain global digital operations. We build systems that don't just work—they <span className="text-white italic font-medium">dominate.</span>
            </p>
          </div>
        </section>

        {/* 2. CORE SOLUTIONS BENTO GRID */}
        {/* 2. CORE SOLUTIONS BENTO GRID */}
<section className="px-6 md:px-12 py-20 bg-[#08170c] border-y border-white/5">
  <div className="max-w-screen-2xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
      
      {/* 1. System Architecture (Large Card) */}
      <TiltCard className="md:col-span-8 h-full">
        <div className="relative bg-[#051007] rounded-3xl overflow-hidden border border-white/5 hover:border-[#A6CE39]/40 h-full group transition-all duration-700">
          {/* Background Image - Full Color */}
          <Image 
            src="/architecture.png" 
            alt="Server Infrastructure"
            fill
            className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051007] via-[#051007]/80 to-transparent" />

          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#A6CE39] text-[#051007] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(166,206,57,0.3)]">
                <Code size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter italic text-white">System Architecture</h3>
              <p className="text-[#eaf5ea] max-w-xl leading-relaxed text-base md:text-lg font-medium drop-shadow-md">
                High-load backend environments utilizing <span className="text-[#A6CE39] italic">Distributed Systems</span> to ensure your platform scales autonomously.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-2 md:gap-4">
              {["Microservices", "API", "ERP Design"].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-[#A6CE39] border border-[#A6CE39] rounded-full text-[9px] font-black uppercase tracking-widest text-[#051007]">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>

      {/* 2. Talent Sourcing (Small Card) */}
      <TiltCard className="md:col-span-4 h-full">
        <div className="relative bg-[#051007] rounded-3xl overflow-hidden border border-white/5 hover:border-[#A6CE39]/40 h-full group transition-all duration-700">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" 
            alt="Talent Team"
            fill
            className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051007] via-[#051007]/70 to-transparent" />

          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-[#A6CE39] text-[#051007] flex items-center justify-center mb-8">
              <Users size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter italic text-white">Talent Sourcing</h3>
            <p className="text-[#eaf5ea] leading-relaxed font-medium mb-8 text-sm md:text-base drop-shadow-md">
              Verified tech experts. Moderators and developers trained within our Institute.
            </p>
            <ul className="space-y-4 mt-auto">
              {["Community Management", "KOL Networks"].map(item => (
                <li key={item} className="flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-widest drop-shadow-lg">
                  <div className="w-2 h-2 bg-[#A6CE39] shadow-[0_0_10px_#A6CE39]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TiltCard>

      {/* 3. Verification Tech (Small Card) */}
      <TiltCard className="md:col-span-4 h-full">
        <div className="relative bg-[#051007] rounded-3xl overflow-hidden border border-white/5 hover:border-[#A6CE39]/40 h-full group transition-all duration-700">
          <Image 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" 
            alt="Cybersecurity"
            fill
            className="object-cover opacity-40 group-hover:opacity-70 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051007] via-[#051007]/80 to-transparent" />

          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
            <div className="w-14 h-14 rounded-2xl bg-[#A6CE39] text-[#051007] flex items-center justify-center mb-8">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter italic text-white">Verification</h3>
            <p className="text-[#eaf5ea] leading-relaxed font-medium text-sm md:text-base drop-shadow-md">
              Multi-layered verification systems designed for secure digital transactions.
            </p>
          </div>
        </div>
      </TiltCard>

      {/* 4. Blockchain (Large Card) */}
      <TiltCard className="md:col-span-8 h-full">
        <div className="relative bg-[#051007] rounded-3xl overflow-hidden border border-white/5 hover:border-[#A6CE39]/40 h-full group transition-all duration-700">
          <Image 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200" 
            alt="Blockchain Tech"
            fill
            className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051007] via-[#051007]/90 to-transparent" />

          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
            <div className="max-w-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#A6CE39] text-[#051007] flex items-center justify-center mb-8">
                <Network size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter italic text-white">Web3 / Blockchain</h3>
              <p className="text-[#eaf5ea] leading-relaxed font-medium text-base md:text-lg drop-shadow-md">
                Smart Contract auditing and DeFi infrastructure. Trustless systems built with absolute finality.
              </p>
            </div>
            <div className="mt-8 flex gap-6 text-[11px] font-black uppercase text-[#A6CE39] tracking-[0.2em]">
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#A6CE39]" /> DECENTRALIZED</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#A6CE39]" /> SECURE</span>
            </div>
          </div>
        </div>
      </TiltCard>

    </div>
  </div>
</section>

        {/* 3. STRUCTURED DELIVERY TIERS */}
        <section className="px-6 md:px-12 py-24 md:py-40 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 md:mb-32 gap-10 md:gap-12">
            <div className="max-w-3xl">
              <h2 className="text-[10px] md:text-sm font-black text-[#A6CE39] tracking-[0.4em] uppercase mb-4 md:mb-6">Execution Framework</h2>
              <h3 className="text-5xl md:text-8xl font-[900] tracking-tighter text-white leading-none uppercase">
                STRUCTURED <br /> <span className="opacity-20 italic">GROWTH.</span>
              </h3>
            </div>
            <p className="text-[#a8c2a8] text-lg md:text-xl font-light max-w-md border-l-2 border-[#A6CE39] pl-6 md:pl-8 py-2">
              Every project enters the ELSINAL system through a structured pathway, ensuring technical integrity at every scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                name: "Starter Tech Pack",
                desc: "The essential foundation. High-performance landing pages, domain security, and professional infrastructure.",
                features: ["Landing Page Dev", "SEO Engine", "Corporate Email"],
                icon: <Rocket size={24} />
              },
              {
                step: "02",
                name: "Growth Engineering",
                desc: "Scaling vision into a product. Custom web/mobile applications backed by resilient server architectures.",
                features: ["Custom App MVP", "Backend API", "24/7 Monitoring"],
                icon: <Cpu size={24} />
              },
              {
                step: "03",
                name: "Enterprise Scale",
                desc: "The pinnacle. Full-scale blockchain integration, security audits, and dedicated engineering teams.",
                features: ["Smart Contract Audit", "P2P Verification", "Global Balancing"],
                icon: <Cloud size={24} />
              }
            ].map((pack, i) => (
              <div key={i} className="group p-8 md:p-10 bg-[#0a1e10] border border-white/5 rounded-[2rem] hover:bg-[#0d2815] hover:border-[#A6CE39]/30 transition-all duration-500">
                <div className="flex justify-between items-start mb-10 md:mb-12">
                  <div className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-[#A6CE39]/20 transition-colors tracking-tighter">{pack.step}</div>
                  <div className="p-3 md:p-4 bg-[#051007] rounded-xl text-[#A6CE39] border border-white/10 shadow-lg">{pack.icon}</div>
                </div>
                <h4 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6 uppercase italic tracking-tight">{pack.name}</h4>
                <p className="text-[#a8c2a8] text-sm leading-relaxed mb-8 md:mb-10 font-light">{pack.desc}</p>
                <div className="space-y-4">
                  {pack.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[10px] font-black text-white/40 group-hover:text-white/70 uppercase tracking-widest transition-colors">
                      <ArrowRight size={12} className="text-[#A6CE39]" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}