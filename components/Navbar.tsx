"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ShieldCheck, ShoppingCart, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { 
      label: "Ecosystem", 
      href: "#",
      children: [
        { label: "TradeEl (P2P)", sub: "Fraud-free trading", icon: <ShieldCheck size={18}/>, href: "/trade-el" },
        { label: "Elmart", sub: "Global marketplace", icon: <ShoppingCart size={18}/>, href: "/elmart" },
        { label: "iVest", sub: "Startup investments", icon: <TrendingUp size={18}/>, href: "/ivest" }
      ]
    },
    { label: "Tech Services", href: "/services" },
    { label: "Academy", href: "/#academy" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100]">
      {/* Optimized Glassmorphism Background */}
      <div className="absolute inset-0 bg-[#051007]/80 backdrop-blur-xl border-b border-[#A6CE39]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"></div>
      
      <div className="relative flex justify-between items-center px-4 md:px-12 py-4 md:py-5 max-w-screen-2xl mx-auto">
        
        {/* Logo Section - Scale & Slogan Fix */}
        <motion.a
          href="/"
          className="flex items-center gap-3 md:gap-5 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative flex-shrink-0">
            <Image
              src="/logo3.png" 
              alt="ELSINAL Logo"
              width={38}
              height={38}
              className="z-10 relative brightness-110 md:w-[48px] md:h-[48px]"
            />
            <div className="absolute inset-0 bg-[#A6CE39]/20 blur-xl rounded-full scale-150"></div>
          </div>
          
          <div className="flex flex-col">
            <span 
              className="text-xl md:text-4xl font-[900] text-[#A6CE39] leading-[0.8] tracking-[-0.02em] md:tracking-[-0.05em] uppercase italic inline-block origin-left transform scale-x-[1.1] md:scale-x-[1.3]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              ELSINAL
            </span>
            <span className="text-[8px] md:text-[9px] text-white/70 font-black tracking-[0.05em] md:tracking-[0.12em] uppercase mt-1 whitespace-nowrap">
              Build • Develop • Solve • Educate
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 font-black text-[13px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeDropdown === item.label ? 'text-[#A6CE39]' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </a>
              
              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-[-20px] mt-4 w-72 bg-[#08170c]/95 backdrop-blur-2xl border border-[#A6CE39]/40 rounded-sm p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                  >
                    <div className="grid gap-2">
                      {item.children.map((child) => (
                        <a key={child.label} href={child.href} className="flex items-center gap-4 p-3 rounded-sm hover:bg-[#A6CE39] hover:text-[#051007] transition-all group/item">
                          <div className="text-[#A6CE39] group-hover/item:text-[#051007]">{child.icon}</div>
                          <div>
                            <div className="text-xs font-black uppercase tracking-tight">{child.label}</div>
                            <div className="text-[9px] opacity-70 group-hover/item:opacity-100">{child.sub}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            className="group relative flex items-center gap-3 bg-[#A6CE39] text-[#051007] px-6 py-2.5 rounded-sm overflow-hidden border border-[#A6CE39]"
          >
            <span className="relative z-10 font-[900] text-[11px] uppercase tracking-widest">Get Started</span>
            <div className="relative z-10 bg-[#051007] text-[#A6CE39] p-1 rounded-sm">
              <Globe size={14} />
            </div>
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"></div>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#A6CE39] p-2 hover:bg-white/5 rounded-sm transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Terminal Style (Optimized for Small Screens) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[68px] bg-[#051007]/98 backdrop-blur-2xl z-40 p-6 lg:hidden flex flex-col border-t border-[#A6CE39]/20"
          >
            <div className="flex flex-col gap-4 overflow-y-auto">
              {navItems.map((item, idx) => (
                <div key={item.label} className="group">
                  <a 
                    href={item.href} 
                    className="text-2xl font-black text-white/90 active:text-[#A6CE39] flex items-center justify-between"
                    onClick={!item.children ? () => setIsOpen(false) : undefined}
                  >
                    <span className="uppercase italic tracking-tighter">{item.label}</span>
                    <span className="text-[10px] text-[#A6CE39]/40 font-mono">0{idx + 1}</span>
                  </a>
                  
                  {item.children && (
                    <div className="mt-4 grid grid-cols-1 gap-2 pl-4 border-l border-[#A6CE39]/30">
                      {item.children.map((child) => (
                        <a 
                          key={child.label} 
                          href={child.href} 
                          className="flex items-center gap-3 p-3 rounded-sm bg-white/5 active:bg-[#A6CE39] active:text-[#051007] transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="text-[#A6CE39]">{child.icon}</div>
                          <div className="flex flex-col">
                            <span className="text-xs font-black uppercase tracking-tight">{child.label}</span>
                            <span className="text-[9px] opacity-60 leading-none mt-1">{child.sub}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Footer CTA */}
            <div className="mt-auto pt-6">
              <a href="/contact" className="flex items-center justify-center gap-3 bg-[#A6CE39] text-[#051007] w-full font-black py-4 uppercase tracking-[0.2em] text-sm skew-x-[-10deg]">
                <span className="skew-x-[10deg]">Connect With Us</span>
                <Globe size={18} className="skew-x-[10deg]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}