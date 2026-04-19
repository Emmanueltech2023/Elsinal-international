"use client";

import { motion } from "framer-motion";
import { 
  Globe, Home, Cpu, Info, Briefcase 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the hook

export default function Navbar() {
  const pathname = usePathname(); // Get the current route

  const navItems = [
    { label: "Tech Services", href: "/services", icon: <Cpu size={20} /> },
    { label: "About", href: "/about", icon: <Info size={20} /> },
  ];

  // Helper function to check if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* --- TOP NAVBAR --- */}
      <nav className="fixed top-0 w-full z-[100]">
        <div className="absolute inset-0 bg-[#051007]/80 backdrop-blur-xl border-b border-[#A6CE39]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"></div>
        
        <div className="relative flex justify-between items-center px-4 md:px-12 py-4 md:py-5 max-w-screen-2xl mx-auto">
          {/* Logo Section */}
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
              >
                ELSINAL
              </span>
              <span className="text-[8px] md:text-[9px] text-white/70 font-black tracking-[0.05em] md:tracking-[0.12em] uppercase mt-1 whitespace-nowrap">
                Build • Develop • Solve • Educate
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-black text-[13px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive(item.href) 
                    ? "text-[#A6CE39] drop-shadow-[0_0_8px_rgba(166,206,57,0.5)]" 
                    : "text-white/70 hover:text-[#A6CE39]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              className={`group relative flex items-center gap-3 px-6 py-2.5 rounded-sm overflow-hidden border transition-all ${
                isActive("/contact") 
                ? "bg-white text-[#051007] border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                : "bg-[#A6CE39] text-[#051007] border-[#A6CE39]"
              }`}
            >
              <span className="relative z-10 font-[900] text-[11px] uppercase tracking-widest">Get Started</span>
              <div className="relative z-10 bg-[#051007] text-[#A6CE39] p-1 rounded-sm">
                <Globe size={14} />
              </div>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* --- MOBILE APP-STYLE BOTTOM DOCK --- */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-[100]">
        <div className="bg-[#051007]/90 backdrop-blur-2xl border border-[#A6CE39]/30 rounded-2xl px-6 py-3 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          
          {/* Mobile Home Active State */}
          <Link href="/" className="flex flex-col items-center gap-1 group">
            <div className={`transition-all duration-300 ${isActive("/") ? "text-[#A6CE39] scale-110" : "text-white/40 group-active:scale-90"}`}>
              <Home size={22} className={isActive("/") ? "drop-shadow-[0_0_8px_rgba(166,206,57,0.8)]" : ""} />
            </div>
            <span className={`text-[9px] font-black uppercase tracking-tighter transition-colors ${isActive("/") ? "text-[#A6CE39]" : "text-white/40"}`}>
              Home
            </span>
          </Link>

          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1 group">
              <div className={`transition-all duration-300 ${isActive(item.href) ? "text-[#A6CE39] scale-110" : "text-[#A6CE39]/40 group-active:scale-90"}`}>
                {item.icon}
              </div>
              <span className={`text-[9px] font-black uppercase tracking-tighter transition-colors ${isActive(item.href) ? "text-[#A6CE39]" : "text-white/40"}`}>
                {item.label === "Tech Services" ? "Tech" : item.label}
              </span>
            </Link>
          ))}

          {/* Mobile Contact Active State */}
          <Link href="/contact" className="flex flex-col items-center gap-1 group">
            <div className={`p-2 rounded-lg transition-all ${isActive("/contact") ? "bg-white text-[#051007] scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "bg-[#A6CE39] text-[#051007] group-active:scale-90"}`}>
              <Globe size={19} />
            </div>
            <span className={`text-[9px] font-black uppercase tracking-tighter transition-colors ${isActive("/contact") ? "text-white" : "text-[#A6CE39]"}`}>
              Contact
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}