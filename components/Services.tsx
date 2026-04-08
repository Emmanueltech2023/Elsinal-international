"use client";
import { Cpu, ArrowRight, ShieldAlert } from "lucide-react";

export default function Services() {
  return (
    <section className="py-20 md:py-40 bg-[#0a1e10]/30 border-y border-white/5 relative overflow-hidden">
      {/* Background Decorative Tech Text - Hidden on mobile to prevent overflow bugs */}
      <div className="hidden md:block absolute top-20 right-[-5%] text-[15rem] font-black text-white/[0.02] select-none pointer-events-none">
        SERVICE
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Content & List */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[10px] md:text-sm font-black text-[#A6CE39] tracking-[0.4em] uppercase mb-4">02. Technical Services</h2>
            <h3 className="text-5xl md:text-8xl font-[900] tracking-tighter text-white mb-8 md:mb-10 leading-[0.9] uppercase italic">
              ELITE <br/> EXECUTION.
            </h3>
            <p className="text-[#a8c2a8] text-lg md:text-xl leading-relaxed mb-10 md:12 font-light">
              Technology is only as powerful as the hands that guide it. ELSINAL provides the infrastructure AND the expert talent required to dominate digital markets.
            </p>

            <div className="space-y-6 md:space-y-8">
              {[
                { title: "KOL & Influencer Sourcing", desc: "Direct access to Key Opinion Leaders to drive project visibility." },
                { title: "Community Management", desc: "Professional Moderators and Shillers trained for 24/7 engagement." },
                { title: "Custom Development", desc: "Full-stack Web2/Web3 engineering—from Smart Contracts to Dashboards." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-start group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 border border-[#A6CE39]/30 rounded-lg flex items-center justify-center group-hover:bg-[#A6CE39] transition-all duration-300">
                    <ArrowRight className="text-[#A6CE39] group-hover:text-[#051007]" size={18} />
                  </div>
                  <div>
                    <h5 className="text-white font-black text-base md:text-lg uppercase tracking-tight">{item.title}</h5>
                    <p className="text-[#a8c2a8] text-xs md:text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0">
            <div className="p-8 md:p-10 bg-[#0a1e10] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] lg:translate-y-20 transition-transform duration-500 hover:border-[#A6CE39]/20 shadow-2xl">
              <Cpu className="text-[#A6CE39] mb-6 shadow-[0_0_15px_rgba(166,206,57,0.2)]" size={40} />
              <h4 className="text-xl md:text-2xl font-black text-white mb-4 uppercase italic">System Architecture</h4>
              <p className="text-xs md:text-sm text-[#a8c2a8] leading-relaxed font-light">
                We design backend systems that handle millions of requests, ensuring 99.9% uptime for global digital platforms.
              </p>
            </div>

            <div className="p-8 md:p-10 bg-[#0a1e10] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] hover:border-[#A6CE39]/20 shadow-2xl">
              <ShieldAlert className="text-[#A6CE39] mb-6 shadow-[0_0_15px_rgba(166,206,57,0.2)]" size={40} />
              <h4 className="text-xl md:text-2xl font-black text-white mb-4 uppercase italic">Risk Mitigation</h4>
              <p className="text-xs md:text-sm text-[#a8c2a8] leading-relaxed font-light">
                Comprehensive security audits and fraud-prevention layers for P2P and eCommerce applications.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}