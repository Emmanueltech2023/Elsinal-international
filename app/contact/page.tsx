"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, ShieldCheck, Clock, CheckCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    
    // 1. ADD YOUR ACCESS KEY HERE
    formData.append("access_key", "2faf7801-e290-43e8-8280-45c5a19b3994");

    // 2. Add these for better email formatting
    formData.append("from_name", "ELSINAL Website");
    formData.append("subject", "New Project Inquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Web3Forms Error:", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-[#051007] text-[#eaf5ea] selection:bg-[#A6CE39]/30 overflow-x-hidden relative">
      <Navbar />

      <div className="pt-28 md:pt-48 pb-20">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#A6CE39]/5 blur-[80px] md:blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <section className="px-5 md:px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
            
            {/* LEFT SIDE: INFO */}
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
              </motion.div>

              <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-1">
                <div className="group flex gap-5 items-center p-5 bg-[#0a1e10]/40 rounded-2xl border border-white/5 hover:border-[#A6CE39]/40 transition-all">
                  <div className="w-12 h-12 bg-[#051007] border border-white/10 rounded-xl flex items-center justify-center text-[#A6CE39]">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[9px] font-black tracking-widest uppercase text-white/40 mb-1">Email Us</h4>
                    <p className="text-[13px] md:text-base font-bold text-[#eaf5ea] truncate">elsysteminternational2@gmail.com</p>
                  </div>
                </div>

                <div className="group flex gap-5 items-center p-5 bg-[#0a1e10]/40 rounded-2xl border border-white/5 hover:border-[#A6CE39]/40 transition-all">
                  <div className="w-12 h-12 bg-[#051007] border border-white/10 rounded-xl flex items-center justify-center text-[#A6CE39]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black tracking-widest uppercase text-white/40 mb-1">WhatsApp</h4>
                    <p className="text-sm md:text-base font-bold text-[#eaf5ea]">+234 904 529 4958</p>
                  </div>
                </div>

                <div className="p-5 bg-[#0a1e10]/20 rounded-2xl border border-dashed border-white/10">
                   <div className="flex items-center gap-3 mb-3">
                     <Clock size={14} className="text-[#A6CE39]" />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#A6CE39]">Fast Response</span>
                   </div>
                   <p className="text-[11px] text-[#a8c2a8] leading-relaxed italic">
                     Usually back within <span className="text-white font-bold">2 hours</span>.
                   </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#A6CE39]/5 blur-3xl rounded-full -z-10" />
              <div className="bg-[#0a1e10] rounded-[2rem] border border-white/10 p-6 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tighter">Send a Message</h3>
                  <p className="text-xs md:text-sm text-[#a8c2a8] mb-8 font-light">Transmission secure. Auto-reply enabled.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">Your Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          required
                          className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] transition-all" 
                          placeholder="Full Name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">Your Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          required
                          className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] transition-all" 
                          placeholder="email@example.com" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">I&apos;m interested in</label>
                      <select name="service" className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] transition-all appearance-none">
                         <option>General Inquiry</option>
                         <option>Building an App/System</option>
                         <option>Blockchain & Web3</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-[#A6CE39] ml-1">Message</label>
                      <textarea 
                        name="message" 
                        rows={4} 
                        required
                        className="w-full bg-[#051007] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#eaf5ea] focus:outline-none focus:border-[#A6CE39] transition-all resize-none" 
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <motion.button 
                      type="submit"
                      disabled={status === "sending"}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#A6CE39] text-[#051007] font-black uppercase tracking-widest py-4 md:py-5 rounded-xl shadow-[0_10px_30px_rgba(166,206,57,0.2)] disabled:opacity-50 transition-all flex items-center justify-center gap-3 text-xs md:text-sm"
                    >
                      {status === "sending" ? (
                        <Loader2 className="animate-spin" size={18} />
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    {status === "success" && (
                      <div className="flex items-center gap-2 text-[#A6CE39] font-black text-[10px] uppercase tracking-widest justify-center mt-4 animate-bounce">
                        <CheckCircle size={14} /> Transmission Complete
                      </div>
                    )}
                    {status === "error" && (
                      <div className="text-red-500 font-black text-[10px] uppercase text-center mt-4">
                        Transmission Failed. Check Connection.
                      </div>
                    )}
                  </form>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4 text-white/30">
                    <ShieldCheck size={14} />
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">Build • Develop • Solve • Educate</span>
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