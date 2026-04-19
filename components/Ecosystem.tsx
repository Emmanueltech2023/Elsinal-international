"use client";
import { motion } from "framer-motion";
import { ShieldCheck, ShoppingCart, TrendingUp, Search, Globe, Users } from "lucide-react";

const products = [
  { 
    name: "TradeEl", 
    tagline: "SECURE P2P INFRASTRUCTURE",
    desc: "A secure peer-to-peer trading infrastructure designed to eliminate fraud. TradeEl focuses on creating a trust-driven environment where users can transact with absolute safety.",
    features: ["Fraud Elimination", "Trust-Driven Environment", "Secure P2P Logic"],
    icon: <ShieldCheck size={32} className="text-[#A6CE39]" />
  },
  { 
    name: "Elmart", 
    tagline: "GLOBAL DIGITAL MARKETPLACE",
    desc: "A marketplace enabling secure buying and selling with escrow-protected payments, AI-powered product verification, and multilingual communication to remove risk from commerce.",
    features: ["Escrow Protection", "AI Product Verification", "Multilingual Support"],
    icon: <ShoppingCart size={32} className="text-[#A6CE39]" />
  },
  { 
    name: "iVest", 
    tagline: "STRUCTURED INVESTMENT",
    desc: "A specialized platform connecting verified investors with verified startups. iVest aims to make global investment more accessible, transparent, and structured for growth.",
    features: ["Verified Startups", "Investor Connectivity", "Global Accessibility"],
    icon: <TrendingUp size={32} className="text-[#A6CE39]" />
  }
];

export default function Ecosystem() {
  return (
    <section id="product" className="py-20 md:py-40 px-5 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-5 bg-[#A6CE39] mb-4" />
          <h2 className="text-[10px] md:text-xs font-black text-[#A6CE39] tracking-[0.4em] uppercase mb-4">Product Ecosystem</h2>
          </div>
          
          <h3 className="text-4xl sm:text-6xl md:text-8xl font-[900] tracking-tighter text-white leading-[0.9] uppercase italic">
            INTEGRATED <br/> <span className="text-[#A6CE39]/30 italic">SOLUTIONS.</span>
          </h3>
        </div>
        <p className="text-[#a8c2a8] text-sm md:text-lg max-w-md leading-relaxed border-l-2 border-[#A6CE39] pl-6 py-2 italic font-light">
          We are developing a suite of digital platforms that address critical gaps in the online economy, focusing on trust, access, and system structure.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((prod, i) => (
          <div key={i} className="group relative p-8 md:p-10 bg-[#0a1e10]/40 backdrop-blur-md border border-white/5 rounded-[2rem] hover:bg-[#0d2815] hover:border-[#A6CE39]/30 transition-all duration-500 overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#A6CE39]/5 rounded-full blur-2xl group-hover:bg-[#A6CE39]/10 transition-all" />
            
            {/* Icon Container */}
            <div className="mb-8 p-4 bg-[#051007] w-fit rounded-2xl border border-white/10 group-hover:scale-110 group-hover:border-[#A6CE39]/50 transition-all duration-500">
              {prod.icon}
            </div>
            
            <div className="text-[9px] md:text-[10px] font-black text-[#A6CE39] tracking-[.3em] mb-2 uppercase">
              {prod.tagline}
            </div>
            
            <h4 className="text-3xl md:text-4xl font-black mb-4 text-white italic tracking-tighter uppercase">
              {prod.name}
            </h4>
            
            <p className="text-[#a8c2a8] leading-relaxed mb-8 text-[13px] md:text-sm font-light">
              {prod.desc}
            </p>
            
            {/* Features List */}
            <ul className="space-y-4 mb-6 relative z-10">
              {prod.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-white/80 uppercase tracking-widest">
                  <div className="w-1 h-1 bg-[#A6CE39] rounded-full shadow-[0_0_8px_#A6CE39]" /> {f}
                </li>
              ))}
            </ul>

            {/* Hover Bottom Border */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A6CE39] group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#A6CE39]" />
          </div>
        ))}
      </div>

      {/* Integrated Action Note from PDF */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 p-8 rounded-3xl border border-white/5 bg-white/[0.02] text-center"
      >
        <p className="text-[#A6CE39] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Synergy</p>
        <p className="text-white font-light text-sm md:text-base max-w-2xl mx-auto italic leading-relaxed">
          "ELSINAL is building an integrated ecosystem where users can trade securely, access investment opportunities, build digital products, and acquire valuable tech skills."
        </p>
      </motion.div>
    </section>
  );
}