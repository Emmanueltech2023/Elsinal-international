"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { TrendingUp, Users, Search, Layers, Coins, Building2 } from "lucide-react";

export default function IVestPage() {
  const strategy = [
    { icon: <Users />, title: "Verified Investors", desc: "Access to a structured network of vetted global investors looking for high-growth opportunities[cite: 34]." },
    { icon: <Building2 />, title: "Verified Startups", desc: "A rigorous pipeline of startups that have passed ELSINAL's system architecture and scalability audits[cite: 35]." },
    { icon: <Search />, title: "Transparent Access", desc: "Making global investment more accessible by removing opaque barriers through digital transparency[cite: 36]." },
    { icon: <Coins />, title: "$ELM Integration", desc: "Long-term integration with the $ELM token for advanced features and ecosystem transactions[cite: 121, 123]." },
    { icon: <Layers />, title: "Modular Growth", desc: "A system designed to evolve from stable core products into complex investment instruments[cite: 106, 126]." },
    { icon: <TrendingUp />, title: "Enterprise Scaling", desc: "Connecting innovative products with the real-world tech solutions required to scale globally[cite: 147, 165]." }
  ];

  return (
    <main className="bg-[#051007] min-h-screen text-white">
      <Navbar />
      <ProductHero 
        title="IVEST" 
        tagline="Bridging the gap between institutional-grade verification and global investment."
        accentColor="#2E7D32"
      />
      <section className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategy.map((s, i) => (
            <div key={i} className="p-12 bg-[#051007] border border-[#2E7D32]/20 rounded-3xl hover:border-[#2E7D32] transition-all duration-700">
              <div className="text-[#2E7D32] mb-8 p-4 bg-[#2E7D32]/5 w-fit rounded-xl">{s.icon}</div>
              <h4 className="text-2xl font-black uppercase mb-4 italic tracking-tighter text-white/90">{s.title}</h4>
              <p className="text-[#a8c2a8] text-sm font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}