import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wallet, Search, TrendingUp, Cpu } from 'lucide-react';
import elmTokenCoin from '@/public/elm-token.png'; // Update path

const featureItems = [
  { icon: Wallet, title: 'Utility', text: 'Powering secure ecosystem transactions.' },
  { icon: Search, title: 'Access', text: 'Unlock advanced platform features.' },
  { icon: Cpu, title: 'Integration', text: 'Deeply embedded within core systems.' },
  { icon: TrendingUp, title: 'Growth', text: 'Long-term asset for future strategy.' },
];

export default function ElmTokenComponent() {
  return (
    <section id="elm-token" className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Component Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            Powering the Future: <br />
            <span className="text-[#A6CE39]">$ELM Token</span>
          </motion.h2>
          <p className="text-[#a8c2a8] text-lg mt-6 max-w-2xl mx-auto">
            A native asset designed for the long-term utility and integration
            of the EL System International ecosystem.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Token Features List */}
          <div className="space-y-6">
            {featureItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-[#0a1e10]/40 rounded-2xl border border-white/5"
              >
                <div className="p-3 bg-[#A6CE39]/10 rounded-xl">
                  <item.icon className="text-[#A6CE39]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-[#a8c2a8]">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Commemorative Coin Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative p-2 bg-gradient-to-b from-[#A6CE39]/20 to-transparent rounded-full shadow-2xl">
              <Image
                src={elmTokenCoin}
                alt="$ELM Token Commemorative Coin"
                width={500}
                height={500}
                className="rounded-full drop-shadow-[0_10px_30px_rgba(166,206,57,0.3)]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}