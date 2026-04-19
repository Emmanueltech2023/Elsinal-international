"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Shield, Activity, Lock, Zap, Cpu, Globe, 
  BookOpen, BarChart3, Rocket, Coins, Users, 
  CheckCircle2, ArrowRight, Target
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#051007] text-[#eaf5ea] selection:bg-[#A6CE39]/30 overflow-x-hidden">
      <Navbar />

      <div className="pt-20 md:pt-32">
        {/* 1. COMPANY OVERVIEW & VISION */}
        <section className="px-5 md:px-12 py-12 md:py-24 max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <span className="text-[#A6CE39] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">01. Company Overview</span>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-[900] tracking-tighter text-white leading-[0.9] mb-6 md:mb-8 uppercase italic">
                EL SYSTEM <br /> <span className="text-[#A6CE39]">INTERNATIONAL</span>
              </h1>
              <div className="space-y-5 text-base md:text-xl text-[#a8c2a8] font-light leading-relaxed">
                <p>
                  EL SYSTEM INTERNATIONAL (ELSINAL) is a technology company focused on building secure digital systems, delivering professional tech services, and developing tech talent at scale.
                </p>
                <p className="border-l-2 border-[#A6CE39] pl-4 md:pl-6 italic">
                  "To build a globally recognized digital ecosystem that empowers individuals and businesses to operate, innovate, and grow without limitations."
                </p>
                <p className="text-[10px] md:text-sm uppercase tracking-widest font-bold text-white/50">
                  Mission: Designing and delivering secure, scalable, and efficient technology systems through structured platforms, services, and education.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-10 lg:mt-50">
              {[
                { label: "Trade Securely", icon: Shield },
                { label: "Access Investment", icon: BarChart3 },
                { label: "Build Products", icon: Cpu },
                { label: "Acquire Skills", icon: BookOpen },
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 bg-[#0a1e10] border border-white/5 rounded-2xl flex flex-col items-center text-center group hover:border-[#A6CE39]/40 transition-all">
                  <item.icon className="text-[#A6CE39] mb-3 md:mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. THE THREE PILLARS */}
        <section className="px-5 md:px-12 py-20 bg-[#08170c] border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-center text-[#A6CE39] font-black uppercase tracking-[0.4em] text-[10px] mb-12">02. Core Business Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Product Ecosystem */}
              <div className="p-8 md:p-10 bg-[#051007] border border-white/5 rounded-3xl">
                <Zap className="text-[#A6CE39] mb-6 md:mb-8" size={32} />
                <h4 className="text-xl md:text-2xl font-black text-white uppercase italic mb-6">Product Ecosystem</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-[#A6CE39] text-[10px] font-black uppercase mb-1">TradeEl</h5>
                    <p className="text-[11px] text-[#a8c2a8] leading-relaxed">Secure P2P trading infrastructure designed to eliminate fraud.</p>
                  </div>
                  <div>
                    <h5 className="text-[#A6CE39] text-[10px] font-black uppercase mb-1">Elmart</h5>
                    <p className="text-[11px] text-[#a8c2a8] leading-relaxed">Global marketplace with escrow payments and AI verification.</p>
                  </div>
                  <div>
                    <h5 className="text-[#A6CE39] text-[10px] font-black uppercase mb-1">iVest</h5>
                    <p className="text-[11px] text-[#a8c2a8] leading-relaxed">Investment platform connecting verified investors and startups.</p>
                  </div>
                </div>
              </div>

              {/* Tech Services */}
              <div className="p-8 md:p-10 bg-[#A6CE39] rounded-3xl text-[#051007]">
                <Cpu className="mb-6 md:mb-8" size={32} />
                <h4 className="text-xl md:text-2xl font-black uppercase italic mb-4">Tech Services</h4>
                <p className="text-xs md:text-sm font-bold mb-6 italic">End-to-end solutions across Web2/Web3 including Dev, AI Automation, and Marketing.</p>
                <ul className="space-y-2">
                  {["Client-focused dev", "Scalable design", "Clean code", "Security-first"].map(s => (
                    <li key={s} className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-tight">
                      <CheckCircle2 size={12} /> {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academy */}
              <div className="p-8 md:p-10 bg-[#051007] border border-white/5 rounded-3xl md:col-span-2 lg:col-span-1">
                <BookOpen className="text-[#A6CE39] mb-6 md:mb-8" size={32} />
                <h4 className="text-xl md:text-2xl font-black text-white uppercase italic mb-6">ELSINAL Academy</h4>
                <p className="text-xs text-[#a8c2a8] leading-relaxed mb-6">Developing tech talent at scale for internal and global ecosystems.</p>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {["Practical learning", "Beginner-to-advanced", "Industry skills", "Talent pipeline"].map(f => (
                    <div key={f} className="text-[9px] font-bold text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">{f}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STRATEGY & MODEL */}
        <section className="px-5 md:px-12 py-20 max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
            {/* Core Principles */}
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic mb-8 flex items-center gap-3">
                <Shield className="text-[#A6CE39]" size={24} /> Core Principles
              </h3>
              <div className="space-y-6">
                {[
                  { t: "Security", d: "Prioritizing protection of users, data, and transactions." },
                  { t: "Structure", d: "Clear processes to reduce errors and inefficiencies." },
                  { t: "Verification", d: "Integrated mechanisms to build absolute trust." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-[#A6CE39] font-black text-base italic">0{i+1}</span>
                    <div>
                      <h5 className="text-white font-black uppercase text-xs mb-1">{item.t}</h5>
                      <p className="text-[11px] text-[#a8c2a8] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth & Revenue */}
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-10 rounded-3xl">
              <h3 className="text-lg md:text-xl font-black text-white uppercase mb-6">Business & Growth</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
                <div className="space-y-2">
                  <h6 className="text-[9px] font-black text-[#A6CE39] uppercase tracking-widest mb-2">Revenue</h6>
                  {["Service Fees", "Platform Fees", "Subscriptions"].map(r => (
                    <p key={r} className="text-[9px] text-white/60 font-bold uppercase">• {r}</p>
                  ))}
                </div>
                <div className="space-y-2">
                  <h6 className="text-[9px] font-black text-[#A6CE39] uppercase tracking-widest mb-2">Phases</h6>
                  {["Core Launch", "Global Access", "Partnerships"].map(p => (
                    <p key={p} className="text-[9px] text-white/60 font-bold uppercase">• {p}</p>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-[#A6CE39]/5 border border-[#A6CE39]/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-[#A6CE39]">
                  <Coins size={14} />
                  <span className="text-[10px] font-black uppercase italic">Vision: $ELM Token</span>
                </div>
                <p className="text-[9px] text-[#a8c2a8] leading-relaxed uppercase">
                  Native token for ecosystem transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE FOUNDER */}
        <section id="founder" className="px-5 md:px-12 py-20 bg-[#08170c]">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
             <div className="w-full max-w-sm lg:w-1/3 relative">
                <div className="aspect-[4/5] bg-[#0a1e10] rounded-[2rem] border border-[#A6CE39]/20 relative overflow-hidden">
                  <Image src="/logo3.png" alt="Harrison David" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 p-5 md:p-8 bg-[#A6CE39] text-[#051007] rounded-xl shadow-2xl">
                   <h4 className="text-lg md:text-xl font-black uppercase italic leading-none">Harrison David</h4>
                   <p className="text-[9px] font-black uppercase tracking-widest mt-1">Founder & CEO</p>
                </div>
             </div>
             <div className="w-full lg:w-2/3 mt-6 md:mt-0">
                <h3 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6 md:mb-8">
                  THE DRIVING <br /> <span className="text-[#A6CE39]">FORCE.</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-[#a8c2a8] font-light leading-relaxed">
                  <p>
                    Harrison Okon David leads the company’s vision, strategy, and overall ecosystem development with a focus on building real solutions, not just ideas.
                  </p>
                  <p>
                    Actively involved in architecture planning and strategic growth, positioning ELSINAL as a globally recognized technology leader.
                  </p>
                </div>
                <div className="mt-8 md:mt-12 flex flex-wrap gap-2 md:gap-4">
                  {["Product Direction", "Architecture", "Expansion"].map(skill => (
                    <span key={skill} className="px-3 py-1.5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white/40 italic">
                      {skill}
                    </span>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* 5. ORGANIZATIONAL & CONTACT */}
        <section className="px-5 md:px-12 py-20 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h5 className="text-[#A6CE39] font-black uppercase text-[14px] mb-6">Departments</h5>
              <ul className="space-y-3 text-[12px] font-bold text-white/70 uppercase">
                {["Engineering", "Product", "Operations", "Marketing", "Academy"].map(dept => (
                  <li key={dept} className="flex justify-between border-b border-white/5 pb-2">
                    <span>{dept}</span> <ArrowRight size={10}/>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h5 className="text-[#A6CE39] font-black uppercase text-[14px] mb-6">The ELSINAL Edge</h5>
              <div className="space-y-4">
                {["Integrated Ecosystem", "Security Focus", "Global Scalability"].map(text => (
                  <div key={text} className="flex gap-2 items-start">
                    <Target className="text-[#A6CE39] shrink-0" size={12} />
                    <p className="text-[12px] font-bold text-white uppercase">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 bg-[#A6CE39] rounded-2xl text-[#051007] md:col-span-2 lg:col-span-1">
              <h5 className="font-black uppercase text-[10px] mb-6">Global Contact</h5>
              <div className="space-y-4">
                <p className="text-sm font-black italic break-words">elsysteminternational2@gmail.com</p>
                <div className="flex gap-6">
                  <div>
                    <p className="text-[8px] font-black uppercase opacity-60 mb-1">NG Branch</p>
                    <p className="text-[10px] font-black">+234 904 529 4958</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase opacity-60 mb-1">USA Branch</p>
                    <p className="text-[10px] font-black">+1 380 205 4528</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}