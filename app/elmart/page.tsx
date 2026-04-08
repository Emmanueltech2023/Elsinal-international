"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { ShoppingBag, Globe, Cpu, Languages, ShieldAlert, BarChart3 } from "lucide-react";

export default function ElmartPage() {
  const pillars = [
    { icon: <Cpu />, title: "AI Verification", desc: "Proprietary AI-powered product verification engines to ensure the authenticity of digital goods[cite: 29]." },
    { icon: <Globe />, title: "Global Marketplace", desc: "Removing geographic limitations, allowing individuals and businesses to buy and sell securely worldwide[cite: 26, 27]." },
    { icon: <Languages />, title: "Multilingual Tech", desc: "Integrated communication tools that bridge language gaps for global commercial interaction[cite: 30]." },
    { icon: <ShieldAlert />, title: "Risk Mitigation", desc: "Designed to remove uncertainty from online commerce through structured payment systems[cite: 31, 94]." },
    { icon: <ShoppingBag />, title: "Digital Inventory", desc: "Optimized for high-value digital assets, services, and software licenses with instant delivery[cite: 26]." },
    { icon: <BarChart3 />, title: "Enterprise Tools", desc: "Advanced merchant analytics and scaling tools for professional organizations[cite: 102]." }
  ];

  return (
    <main className="bg-[#051007] min-h-screen text-white">
      <Navbar />
      <ProductHero 
        title="ELMART" 
        tagline="Removing risk and uncertainty from the global digital marketplace."
        accentColor="#8BC34A"
      />
      <section className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="p-12 bg-[#0d2815]/30 border border-white/5 rounded-3xl hover:bg-[#0d2815]/50 hover:border-[#8BC34A]/40 transition-all duration-500">
              <div className="text-[#8BC34A] mb-8">{p.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-4 italic tracking-tighter">{p.title}</h3>
              <p className="text-[#a8c2a8] text-sm font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}