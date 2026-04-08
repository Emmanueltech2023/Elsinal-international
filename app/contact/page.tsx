"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#051007] text-[#eaf5ea] selection:bg-[#A6CE39]/30 overflow-x-hidden">
      <Navbar />

      <div className="pt-32 md:pt-48 pb-20">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A6CE39]/5 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1B5E20]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            
            {/* LEFT SIDE: INFO & STATUS */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#0a1e10] border border-[#A6CE39]/30 text-[#A6CE39] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  Encrypted Channel
                </span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85] uppercase">
                  REACH THE <br />
                  <span className="opacity-40 italic">ARCHITECTS.</span>
                </h1>
                <p className="text-xl text-[#a8c2a8] max-w-lg leading-relaxed font-light">
                  Our systems engineers are ready to transform your technical challenges into robust digital environments. Reach out to start your next evolution.
                </p>
              </motion.div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                {/* Contact Card 1 */}
                <div className="group flex gap-6 items-center p-6 bg-[#0a1e10]/40 rounded-2xl border border-white/5 hover:border-[#A6CE39]/40 transition-all">
                  <div className="w-14 h-14 bg-[#051007] border border-white/10 rounded-xl flex items-center justify-center text-[#A6CE39] group-hover:shadow-[0_0_15px_rgba(166,206,57,0.2)] transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Direct Terminal</h4>
                    <p className="text-sm md:text-base font-bold text-[#eaf5ea] break-all">elsysteminternational2@gmail.com</p>
                  </div>
                </div>

                {/* Contact Card 2 */}
                <div className="group flex gap-6 items-center p-6 bg-[#0a1e10]/40 rounded-2xl border border-white/5 hover:border-[#A6CE39]/40 transition-all">
                  <div className="w-14 h-14 bg-[#051007] border border-white/10 rounded-xl flex items-center justify-center text-[#A6CE39] group-hover:shadow-[0_0_15px_rgba(166,206,57,0.2)] transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Inquiry Line</h4>
                    <p className="text-sm md:text-base font-bold text-[#eaf5ea]">+234 904 529 4958</p>
                    <p className="text-sm md:text-base font-bold text-[#eaf5ea] opacity-60">+1 380 205 4528</p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="p-6 bg-[#0a1e10]/20 rounded-2xl border border-dashed border-white/10">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-2 h-2 bg-[#A6CE39] rounded-full animate-pulse shadow-[0_0_8px_#A6CE39]" />
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A6CE39]">Systems Online</span>
                   </div>
                   <p className="text-xs text-[#a8c2a8] leading-relaxed italic">
                     "Our distributed network operates across major time zones. Current average response latency: <span className="text-white font-bold">&lt;120 minutes</span>."
                   </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE COMMAND FORM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#A6CE39]/5 blur-3xl rounded-full -z-10" />
              <div className="bg-[#0a1e10] rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                {/* Visual accent */}
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Globe size={120} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Initiate Transmission</h3>
                  <p className="text-[#a8c2a8] mb-10 font-light">Deploy your project specs to our lead engineering team.</p>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">Identity</label>
                        <input 
                          type="text" 
                          className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] focus:ring-1 focus:ring-[#A6CE39]/30 transition-all placeholder:text-white/10" 
                          placeholder="Full Name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">Subject</label>
                        <select className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] transition-all appearance-none">
                           <option>System Architecture</option>
                           <option>Blockchain Dev</option>
                           <option>Talent Sourcing</option>
                           <option>Cyber Audit</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">Specifications</label>
                      <textarea 
                        rows={5} 
                        className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] focus:ring-1 focus:ring-[#A6CE39]/30 transition-all resize-none placeholder:text-white/10" 
                        placeholder="How can we architect your solution?"
                      ></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#A6CE39] text-[#051007] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(166,206,57,0.2)] hover:bg-[#8BC34A] transition-all flex items-center justify-center gap-3"
                    >
                      <Send size={18} />
                      Transmit Message
                    </motion.button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-white/30">
                    <ShieldCheck size={16} />
                    <span className="text-[9px] font-black uppercase tracking-widest">End-to-end encrypted communication node</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}