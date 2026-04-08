"use client";
import { GraduationCap, Award, BookOpen, Users2, Code, Zap, BarChart } from "lucide-react";

export default function Academy() {
  const pillars = [
    { 
      title: "Talent Pipeline", 
      desc: "We don't just teach; we hire. The top 5% of our graduates are directly funneled into ELSINAL's professional service pool or partnered global tech firms.",
      icon: <Users2 className="text-[#A6CE39]" size={28} /> 
    },
    { 
      title: "Structured Paths", 
      desc: "From basic blockchain literacy to advanced smart contract security auditing, our curriculum is designed for long-term professional scalability.",
      icon: <BookOpen className="text-[#A6CE39]" size={28} /> 
    },
    { 
      title: "Certification", 
      desc: "Every graduate receives an ELSINAL-verified digital credential, proving their technical competence within our secure global network.",
      icon: <Award className="text-[#A6CE39]" size={28} /> 
    }
  ];

  const curriculum = [
    { title: "Smart Contract Dev", icon: <Code size={16} /> },
    { title: "Risk Management", icon: <Zap size={16} /> },
    { title: "Market Analysis", icon: <BarChart size={16} /> },
  ];

  return (
    <section id="academy" className="py-20 md:py-40 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
        <div className="inline-block p-4 bg-[#0a1e10] rounded-full mb-6 md:mb-8 border border-[#A6CE39]/20 shadow-[0_0_20px_rgba(166,206,57,0.1)]">
          <GraduationCap size={32} className="text-[#A6CE39] md:w-10 md:h-10" />
        </div>
        
        {/* Responsive Large Heading */}
        <h2 className="text-3xl sm:text-7xl md:text-[4rem] lg:text-[5rem] font-[900] tracking-tighter text-white leading-none mb-8 md:mb-10 uppercase italic">
          INSTITUTE<span className="text-[#A6CE39]">.</span>
        </h2>
        
        <p className="text-[#a8c2a8] text-lg md:text-2xl font-light leading-relaxed px-2">
          The ELSINAL Institute is the educational engine of our ecosystem. We bridge the <span className="text-white font-medium italic">"Global Skills Gap"</span> by providing rigorous, institutional-grade training in Web3 and software engineering.
        </p>

        {/* New: Quick Curriculum Tags for Mobile Detail */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {curriculum.map((tag) => (
            <div key={tag.title} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-[#A6CE39]">
              {tag.icon} {tag.title}
            </div>
          ))}
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((item, i) => (
          <div key={i} className="group p-8 md:p-12 bg-gradient-to-b from-[#0a1e10] to-transparent border border-white/5 rounded-[2rem] text-center hover:border-[#A6CE39]/30 transition-all duration-500">
            <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-[#051007] rounded-full flex items-center justify-center mb-6 md:mb-8 border border-white/10 group-hover:scale-110 group-hover:border-[#A6CE39] transition-all">
              {item.icon}
            </div>
            <h4 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight italic">
              {item.title}
            </h4>
            <p className="text-[#a8c2a8] text-xs md:text-sm leading-relaxed font-light">
              {item.desc}
            </p>
            
            {/* Visual Progress Element */}
            <div className="mt-8 flex justify-center gap-1 opacity-30 group-hover:opacity-100 transition-opacity">
               <div className="w-8 h-1 bg-[#A6CE39]" />
               <div className="w-2 h-1 bg-[#A6CE39]" />
               <div className="w-1 h-1 bg-[#A6CE39]" />
            </div>
          </div>
        ))}
      </div>

      {/* Research-Based Detail: Footer Stat */}
      <div className="mt-20 p-8 border border-[#A6CE39]/10 rounded-3xl bg-[#051007] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="text-[10px] font-black text-[#A6CE39] tracking-[0.3em] uppercase mb-1">Status: Open Enrollment</div>
          <div className="text-white text-xl font-bold italic">Q2 2026 COHORT: BLOCKCHAIN ARCHITECTURE</div>
        </div>
        <button className="w-full md:w-auto px-10 py-4 bg-[#A6CE39] text-[#051007] font-[900] text-xs uppercase tracking-widest rounded-sm hover:scale-105 transition-transform skew-x-[-12deg]">
          <span className="inline-block skew-x-[12deg]">Apply to Institute</span>
        </button>
      </div>
    </section>
  );
}