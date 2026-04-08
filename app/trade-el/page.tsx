"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { ShieldCheck, Zap, Lock, RefreshCw, Eye, UserCheck } from "lucide-react";

export default function TradeElPage() {
  const specs = [
    { icon: <ShieldCheck />, title: "Fraud Elimination", desc: "A peer-to-peer infrastructure engineered specifically to remove the 'trust deficit' in digital trading[cite: 23, 24]." },
    { icon: <Lock />, title: "Escrow-Protected", desc: "Automated smart-contract custody ensuring funds are only released upon verified protocol satisfaction[cite: 28]." },
    { icon: <UserCheck />, title: "Multi-Layer Verification", desc: "Identity and system verification mechanisms integrated at the core of every transaction[cite: 95, 96]." },
    { icon: <RefreshCw />, title: "Real-Time Capability", desc: "Built for high-concurrency environments with real-time trade matching and status updates[cite: 108]." },
    { icon: <Eye />, title: "Transparent Audit", desc: "A structured process that reduces errors and inefficiencies through clear, auditable trading logs[cite: 94]." },
    { icon: <Zap />, title: "Cross-Platform", desc: "Seamless trading across mobile and web interfaces with unified security protocols[cite: 109]." }
  ];

  return (
    <main className="bg-[#051007] min-h-screen text-white">
      <Navbar />
      <ProductHero 
        title="TRADE-EL" 
        tagline="The foundational P2P infrastructure for the trust-driven economy."
        accentColor="#A6CE39"
      />
      
      <section className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((s, i) => (
            <div key={i} className="p-12 bg-[#0a1e10] border border-white/5 rounded-3xl group hover:border-[#A6CE39]/40 transition-all duration-500">
              <div className="text-[#A6CE39] mb-8 bg-[#051007] w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 italic tracking-tighter text-white/90">{s.title}</h3>
              <p className="text-[#a8c2a8] text-sm font-light leading-loose">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}