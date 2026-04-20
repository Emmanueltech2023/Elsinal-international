"use client";
import { Cpu, ArrowRight, CheckCircle2, Globe, Star, Box, Rocket, Crown } from "lucide-react";

export default function Services() {
  const techOfferings = [
    "Web development", "Mobile App development (Android/iOS)", "Product design (UI/UX)",
    "Graphic design", "Blockchain Development", "Smart contract devs",
    "Data analyst", "Motion Graphics", "Video editors", "Ai automation"
  ];

  const professionalTeam = [
    "Community moderators", "Social media managers", "Space Hosts",
    "Shillers", "Content Creators", "KOL", "Content Writers", "Marketers"
  ];

  // Logic for the redesigned text lists
  const plans = [
    {
      name: "Base Plan",
      tag: "Foundation",
      icon: <Box size={24} />,
      color: "text-[#A6CE39]",
      hoverBg: "group-hover:bg-[#A6CE39]/10",
      features: [
        "Custom Engineering",
        "Full Stack Development",
        "Clean Code Architecture",
        "Final Deployment"
      ],
      footerLabel: "Scope",
      footerValue: "Dev Only"
    },
    {
      name: "Golden Plan",
      tag: "Rapid Build",
      icon: <Star size={24} />,
      color: "text-yellow-500",
      hoverBg: "group-hover:bg-yellow-500/10",
      features: [
        "Full Development",
        "Graphic Design",
        "Social Media Management",
        "Video Editing",
        "Space Hosting"
      ],
      footerLabel: "Duration",
      footerValue: "1 Week"
    },
    {
      name: "Silver Plan",
      tag: "Extended Support",
      icon: <Rocket size={24} />,
      color: "text-blue-400",
      hoverBg: "group-hover:bg-blue-400/10",
      features: [
        "All Golden Plan Features",
        "Content Creation",
        "Community Moderation",
        "Ecosystem Growth"
      ],
      footerLabel: "Duration",
      footerValue: "2 Weeks"
    },
    {
      name: "Platinum Plan",
      tag: "Scale to Infinity",
      icon: <Crown size={24} />,
      color: "text-[#A6CE39]",
      isPopular: true,
      features: [
        "Full Marketing Suite",
        "Product Testing & QA",
        "Digital Data Analysis",
        "Investor Pitching",
        "Professional Shilling"
      ],
      footerLabel: "Duration",
      footerValue: "1 Month"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-40 background-transparent relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A6CE39]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A6CE39]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-5xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-5 bg-[#A6CE39]" />
            <span className="text-[#A6CE39] font-black uppercase tracking-[0.2em] text-xs"> Tech Services</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-[900] text-white leading-[0.85] uppercase italic tracking-tighter mb-8">
            END-TO-END <br />
            <span className="text-[#A6CE39]">SOLUTIONS.</span>
          </h2>
          <p className="text-[#a8c2a8] text-lg md:text-2xl font-light max-w-3xl leading-relaxed">
            ELSINAL provides end-to-end technology solutions to clients across different industries.
          </p>
        </div>

        {/* SERVICE OFFERINGS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {/* Tech List */}
          <div className="p-8 md:p-12 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-[#A6CE39]/10 rounded-xl border border-[#A6CE39]/20">
                <Cpu className="text-[#A6CE39]" size={28} />
              </div>
              <h4 className="text-2xl font-black text-white uppercase italic tracking-tight">Service Offerings</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {techOfferings.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-[#A6CE39] rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-bold text-white/70 uppercase tracking-wide group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-[#A6CE39] font-black text-[10px] uppercase tracking-[0.2em]">
              + And other cutting edge tech services!
            </div>
          </div>

          {/* Marketing List */}
          <div className="p-8 md:p-12 bg-[#A6CE39] rounded-3xl relative overflow-hidden group">
            <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <Globe size={200} className="text-[#051007]" />
            </div>
            <h4 className="text-2xl font-black text-[#051007] uppercase italic mb-2">Web2 / Web3 Professionals</h4>
            <p className="text-[#051007]/70 text-xs font-bold uppercase mb-10 tracking-widest">Visibility & Growth Specialists</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {professionalTeam.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#051007]" />
                  <span className="text-sm font-black text-[#051007] uppercase tracking-tighter">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-5 bg-[#051007]/5 rounded-2xl border border-[#051007]/10">
              <p className="text-[#051007] text-xs font-bold leading-relaxed italic">
                <strong>NOTE:</strong> Elsinal doesn&apos;t just help you build, we can give your project all the visibility needed as a start up. From development to shilling, hosting spaces and promoting your page can be done by us. We have an active community of influencial guys on the space.
              </p>
            </div>
          </div>
        </div>

        {/* DEVELOPMENT PACKAGES */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h4 className="text-[#A6CE39] font-black uppercase tracking-[0.4em] text-xs mb-4">Pricing Architecture</h4>
              <h3 className="text-4xl md:text-6xl font-[900] text-white uppercase italic leading-none">Development <span className="text-[#A6CE39]">Packages</span></h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`group relative p-8 rounded-[2.5rem] flex flex-col transition-all duration-500 overflow-hidden ${
                  plan.isPopular 
                  ? "border-2 border-[#A6CE39] bg-[#A6CE39]/5 shadow-[0_0_50px_rgba(166,206,57,0.15)]" 
                  : "border border-white/10 bg-white/[0.01] hover:border-[#A6CE39]/30"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#A6CE39] text-[#051007] text-[9px] font-black px-4 py-1.5 uppercase tracking-tighter rounded-bl-xl">Most Popular</div>
                )}
                
                <div className={`mb-8 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  plan.isPopular ? "bg-[#A6CE39] text-[#051007]" : "bg-white/5 border border-white/10 text-white/50 group-hover:text-[#A6CE39]"
                }`}>
                  {plan.icon}
                </div>

                <span className={`text-[10px] font-black mb-2 uppercase tracking-widest ${plan.isPopular ? "text-[#A6CE39]" : plan.color}`}>
                  {plan.tag}
                </span>
                <h5 className="text-2xl font-black text-white uppercase italic mb-6">{plan.name}</h5>
                
                {/* LIST STYLING FOR FEATURES */}
                <div className="space-y-3 mb-auto">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${plan.isPopular ? "bg-[#A6CE39]" : "bg-white/30"}`} />
                      <p className={`text-[10px] uppercase tracking-wider leading-tight ${plan.isPopular ? "text-white/90 font-bold" : "text-white/50 font-medium"}`}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`mt-8 pt-6 border-t ${plan.isPopular ? "border-[#A6CE39]/30" : "border-white/5"}`}>
                  <div className={`flex items-center justify-between text-[10px] font-bold uppercase ${plan.isPopular ? "text-[#A6CE39]" : "text-white/40"}`}>
                    <span>{plan.footerLabel}</span>
                    <span className="text-white">{plan.footerValue}</span>
                  </div>
                  {plan.isPopular && (
                    <div className="mt-4 p-3 bg-[#A6CE39]/10 rounded-xl border border-[#A6CE39]/20">
                      <p className="text-[#A6CE39] text-[8px] font-black leading-tight uppercase italic">
                        BONUS: The main company account will host two dedicated spaces to shill your product.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GENERAL & APPROACH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-20 border-t border-white/5">
          <div>
            <h4 className="text-white font-black uppercase italic mb-4">General Service Packages</h4>
            <p className="text-[#a8c2a8] text-sm leading-relaxed mb-8">
              Aside the development packages, we&apos;re always available for you to contact for any of our above listed services. Graphics design, video editing, space hosting, data analysis and more.
            </p>
            <div className="flex flex-wrap gap-4">
                {["Client-focused development", "Scalable system design", "Clean and maintainable code", "Security-first implementation"].map(t => (
                  <div key={t} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#A6CE39]">{t}</div>
                ))}
            </div>
          </div>

          <div className="bg-[#0a1e10] p-8 md:p-12 rounded-3xl border border-white/5">
            <h4 className="text-white font-black uppercase italic mb-8">Strategic Impact</h4>
            <div className="space-y-6">
              {[
                { label: "Generate Revenue", sub: "Optimized monetization strategies" },
                { label: "Build Industry Relationships", sub: "Long-term partnership focus" },
                { label: "Apply Real-World Expertise", sub: "Execution based on data" }
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <ArrowRight className="text-[#A6CE39]" size={20} />
                  <div>
                    <h5 className="text-white font-black uppercase text-sm">{item.label}</h5>
                    <p className="text-white/40 text-xs uppercase tracking-tighter">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}