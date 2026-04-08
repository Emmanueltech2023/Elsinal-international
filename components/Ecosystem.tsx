"use client";
import { ShieldCheck, ShoppingCart, TrendingUp } from "lucide-react";

const products = [
  { 
    name: "TradeEl", 
    tagline: "P2P TRUST INFRASTRUCTURE",
    desc: "A high-integrity peer-to-peer trading environment. We've solved the 'Trust Deficit' in digital OTC trading by implementing a multi-layered verification system.",
    features: ["Automated Escrow", "Identity Sovereignty", "Fraud Detection AI"],
    icon: <ShieldCheck size={32} className="text-[#A6CE39]" />
  },
  { 
    name: "Elmart", 
    tagline: "NEXT-GEN COMMERCE",
    desc: "Bridging the gap between traditional retail and the decentralized economy. Elmart provides the rails for global commerce with blockchain-backed settlement.",
    features: ["Cross-Border Logistics", "Smart Contract Invoicing", "Verified Merchants"],
    icon: <ShoppingCart size={32} className="text-[#A6CE39]" />
  },
  { 
    name: "iVest", 
    tagline: "DEMOCRATIZED CAPITAL",
    desc: "Our institutional-grade investment gateway. iVest connects verified users to high-growth tech startups and vetted digital assets.",
    features: ["Asset Tokenization", "Portfolio Analytics", "Early-Stage Access"],
    icon: <TrendingUp size={32} className="text-[#A6CE39]" />
  }
];

export default function Ecosystem() {
  return (
    <section id="product" className="py-20 md:py-40 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
        <div className="max-w-3xl">
          <h2 className="text-[10px] md:text-sm font-black text-[#A6CE39] tracking-[0.4em] uppercase mb-4">01. Product Innovation</h2>
          <h3 className="text-5xl sm:text-6xl md:text-8xl font-[900] tracking-tighter text-white leading-[0.9] uppercase italic">
            ENGINEERING <br/> <span className="opacity-30">THE FUTURE.</span>
          </h3>
        </div>
        <p className="text-[#a8c2a8] text-base md:text-lg max-w-md leading-relaxed border-l-2 md:border-l border-[#A6CE39]/30 pl-6 py-2">
          We don't just build apps; we build protocols for interaction. Each product is a node in a larger network of global utility.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((prod, i) => (
          <div key={i} className="group relative p-8 md:p-10 bg-[#0a1e10]/60 backdrop-blur-sm border border-white/5 rounded-3xl hover:bg-[#0d2815] hover:border-[#A6CE39]/30 transition-all duration-500">
            {/* Icon Container */}
            <div className="mb-8 p-4 bg-[#051007] w-fit rounded-2xl border border-white/10 group-hover:border-[#A6CE39]/50 transition-all">
              {prod.icon}
            </div>
            
            <div className="text-[9px] md:text-[10px] font-black text-[#A6CE39] tracking-[.3em] mb-2 uppercase">
              {prod.tagline}
            </div>
            
            <h4 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white italic">
              {prod.name}
            </h4>
            
            <p className="text-[#a8c2a8] leading-relaxed mb-8 md:mb-10 text-sm font-light">
              {prod.desc}
            </p>
            
            {/* Features List */}
            <ul className="space-y-4 mb-12">
              {prod.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-[11px] font-bold text-white/70 uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 bg-[#A6CE39] rotate-45" /> {f}
                </li>
              ))}
            </ul>

            {/* Hover Bottom Border */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#A6CE39] group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}