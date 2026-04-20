"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, ShieldCheck, MessageSquare, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#051007] text-[#eaf5ea] selection:bg-[#A6CE39]/30 overflow-x-hidden">
      <Navbar />

      <div className="pt-28 md:pt-48 pb-20">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#A6CE39]/5 blur-[80px] md:blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <section className="px-5 md:px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
            
            {/* LEFT SIDE: GREETING & CONTACT INFO */}
            <div className="space-y-10 md:space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#0a1e10] border border-[#A6CE39]/30 text-[#A6CE39] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8">
                  Get In Touch
                </span>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 leading-[0.9] uppercase italic">
                  LET&apos;S BUILD <br />
                  <span className="opacity-40">TOGETHER.</span>
                </h1>
                <p className="text-base md:text-xl text-[#a8c2a8] max-w-lg leading-relaxed font-light italic">
                  Have a big idea or a technical challenge? Our team is here to help you build secure, scalable digital solutions.
                </p>
              </motion.div>

              <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-1">
                {/* Email Card */}
                <div className="group flex gap-5 md:gap-6 items-center p-5 md:p-6 bg-[#0a1e10]/40 rounded-2xl border border-white/5 hover:border-[#A6CE39]/40 transition-all">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#051007] border border-white/10 rounded-xl flex items-center justify-center text-[#A6CE39] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[9px] font-black tracking-widest uppercase text-white/40 mb-1">Email Us</h4>
                    <p className="text-[13px] md:text-base font-bold text-[#eaf5ea] truncate">elsysteminternational2@gmail.com</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group flex gap-5 md:gap-6 items-center p-5 md:p-6 bg-[#0a1e10]/40 rounded-2xl border border-white/5 hover:border-[#A6CE39]/40 transition-all">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#051007] border border-white/10 rounded-xl flex items-center justify-center text-[#A6CE39] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black tracking-widest uppercase text-white/40 mb-1">Call or WhatsApp</h4>
                    <p className="text-sm md:text-base font-bold text-[#eaf5ea]">+234 904 529 4958</p>
                    <p className="text-sm md:text-base font-bold text-[#eaf5ea] opacity-60">+1 380 205 4528</p>
                  </div>
                </div>

                {/* Response Time Indicator */}
                <div className="p-5 md:p-6 bg-[#0a1e10]/20 rounded-2xl border border-dashed border-white/10">
                   <div className="flex items-center gap-3 mb-3">
                     <Clock size={14} className="text-[#A6CE39]" />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#A6CE39]">Fast Response</span>
                   </div>
                   <p className="text-[11px] text-[#a8c2a8] leading-relaxed italic">
                     We usually get back to you within <span className="text-white font-bold">2 hours</span>. We operate globally to support your needs 24/7.
                   </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE CONTACT FORM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#A6CE39]/5 blur-3xl rounded-full -z-10" />
              <div className="bg-[#0a1e10] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tighter">Send a Message</h3>
                  <p className="text-xs md:text-sm text-[#a8c2a8] mb-8 md:mb-10 font-light">Fill out the form below and our team will contact you shortly.</p>
                  
                  <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">Your Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] transition-all" 
                          placeholder="What should we call you?" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">I&apos;m interested in</label>
                        <select className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] transition-all appearance-none">
                           <option>General Inquiry</option>
                           <option>Building an App/System</option>
                           <option>Blockchain & Web3</option>
                           <option>Finding Tech Talent</option>
                           <option>Security Audit</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">How can we help?</label>
                      <textarea 
                        rows={4} 
                        className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] transition-all resize-none" 
                        placeholder="Tell us about your project or question..."
                      ></textarea>
                    </div>

                    <motion.button 
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#A6CE39] text-[#051007] font-black uppercase tracking-widest py-4 md:py-5 rounded-xl shadow-[0_10px_30px_rgba(166,206,57,0.2)] active:bg-[#8BC34A] transition-all flex items-center justify-center gap-3 text-xs md:text-sm"
                    >
                      <Send size={16} />
                      Send Message
                    </motion.button>
                  </form>

                  <div className="mt-8 pt-6 md:pt-8 border-t border-white/5 flex items-center gap-4 text-white/30">
                    <ShieldCheck size={14} className="flex-shrink-0" />
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest leading-tight">Your data is safe.</span>
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