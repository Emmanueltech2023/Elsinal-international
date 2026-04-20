"use client";

import { 
  Mail, 
  Globe, 
  Shield, 
  Zap, 
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faXTwitter, 
  faDiscord, 
  faTelegramPlane 
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020803] pt-32 pb-12 text-[#eaf5ea] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Brand Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#A6CE39]/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-8">
              <div className="w-8 h-8 bg-[#A6CE39] flex items-center justify-center rounded-sm skew-x-[-12deg]">
                <span className="text-[#051007] font-black skew-x-[12deg]">E</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">LSINAL</span>
            </div>
            
            <p className="text-[#a8c2a8] mb-10 max-w-sm leading-relaxed font-light">
              Building the infrastructure of trust. EL SYSTEM INTERNATIONAL (ELSINAL) is a multi-dimensional tech ecosystem focused on secure digital systems and institutional talent development.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:elsysteminternational2@gmail.com" 
                className="flex items-center gap-4 group text-sm font-bold hover:text-[#A6CE39] transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#A6CE39]/50 group-hover:bg-[#A6CE39]/5 transition-all">
                   <Mail size={16} />
                </div>
                elsysteminternational2@gmail.com
              </a>
              
              <div className="flex flex-col gap-4 pl-14 text-xs text-[#a8c2a8] uppercase tracking-widest font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#A6CE39]">NG:</span> +234 904 529 4958
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#A6CE39]">US:</span> +1 380 205 4528
                </div>
              </div>
            </div>
          </div>

          {/* Ecosystem Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A6CE39] mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              {[
                { name: "TradeEl P2P", href: "#" },
                { name: "Elmart Marketplace", href: "#" },
                { name: "iVest Platform", href: "#" },
                { name: "Digital Assets", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#a8c2a8] hover:text-white flex items-center gap-2 transition-all group">
                    {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A6CE39] mb-8">Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: "Web3 Development", href: "/services" },
                { name: "Talent Sourcing", href: "/services" },
                { name: "System Audits", href: "/services" },
                { name: "ELSINAL Institute", href: "/academy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#a8c2a8] hover:text-white flex items-center gap-2 transition-all group">
                    {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A6CE39] mb-8">Corporate</h4>
            <ul className="space-y-4">
              {[
                { name: "About System", href: "/about" },
                { name: "Founder Profile", href: "/about#founder" },
                { name: "Contact Hub", href: "/contact" },
                { name: "Privacy Policy", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#a8c2a8] hover:text-white flex items-center gap-2 transition-all group">
                    {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#a8c2a8]">
              © {currentYear} EL SYSTEM INTERNATIONAL (ELSINAL)
            </p>
            <div className="hidden md:flex gap-4">
               <div className="flex items-center gap-1 text-[9px] font-black text-[#A6CE39]/50 tracking-tighter">
                 <Shield size={10} /> SECURE
               </div>
               <div className="flex items-center gap-1 text-[9px] font-black text-[#A6CE39]/50 tracking-tighter">
                 <Globe size={10} /> SCALABLE
               </div>
               <div className="flex items-center gap-1 text-[9px] font-black text-[#A6CE39]/50 tracking-tighter">
                 <Zap size={10} /> STRUCTURED
               </div>
            </div>
          </div>
          
          {/* --- FONT AWESOME SOCIAL ICONS --- */}
          <div className="flex items-center gap-4">
            {[
              { icon: faXTwitter, href: "https://X.com/Real_ESI_01", label: "Twitter" },
              { icon: faDiscord, href: "https://discord.gg/FPez4fF8g", label: "Discord" },
              { icon: faTelegramPlane, href: "https://t.me/elsysteminternational2", label: "Telegram" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-[#0a1e10] border border-white/10 flex items-center justify-center text-[#a8c2a8] hover:text-[#A6CE39] hover:border-[#A6CE39]/50 transition-all shadow-lg"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="text-lg" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}