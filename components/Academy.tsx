"use client";
import { GraduationCap, Zap, TrendingUp, Cpu, Users } from "lucide-react";

export default function Academy() {
  const focusPoints = [
    { title: "Practical, hands-on learning", icon: <Zap size={20} /> },
    { title: "Beginner-to-advanced progression", icon: <TrendingUp size={20} /> },
    { title: "Industry-relevant skills", icon: <Cpu size={20} /> },
    { title: "Talent pipeline development", icon: <Users size={20} /> },
  ];

  return (
    <section id="academy" className="py-20 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="max-w-4xl mb-16">
        <div className="flex items-center gap-4 mb-6">
          <GraduationCap size={32} className="text-[#A6CE39]" />
          <span className="text-[#A6CE39] font-black uppercase tracking-[0.3em] text-xs">Educational Arm</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-[900] text-white uppercase italic tracking-tighter mb-6">
          ELSINAL <span className="text-[#A6CE39]">INSTITUTE</span>
        </h2>
        
        <p className="text-[#a8c2a8] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#A6CE39]/30 pl-6">
          Focused on training individuals in modern technology skills to produce professionals who contribute to both internal projects and the global tech ecosystem.
        </p>
      </div>

      {/* Key Focus Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {focusPoints.map((item, i) => (
          <div key={i} className="p-8 bg-[#0a1e10]/40 border border-white/5 rounded-sm hover:border-[#A6CE39]/40 transition-all">
            <div className="text-[#A6CE39] mb-4">{item.icon}</div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest leading-tight">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      {/* Vision Footer */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-white/10">
        <p className="text-[#a8c2a8] text-xs uppercase tracking-widest font-bold">
          Building the next generation of tech talent
        </p>
      </div>
    </section>
  );
}