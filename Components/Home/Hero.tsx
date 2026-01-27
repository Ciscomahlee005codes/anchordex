"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden">

      {/* BACKGROUND GLOW ORBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-teal-400 text-sm font-medium">
                Secure trust-based escrow marketplace
              </span>
              <span className="text-teal-400">→</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
              Secure Trust-Based <br />
              <span className="text-white">Escrow Marketplace</span>
            </h1>

            {/* Description */}
            <p className="text-white/70 max-w-xl mb-10">
              AnchorDex provides a trusted, neutral escrow platform for your
              cryptocurrency trades. Execute high-velocity swaps and OTC
              transactions with unparalleled safety and simplicity,
              mitigating counterparty risk.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                Initiate a Secure Trade
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-400 text-black">
                  →
                </span>
              </button>

              <button className="flex items-center gap-2 bg-teal-500/20 text-teal-400 px-6 py-3 rounded-full font-medium hover:bg-teal-500/30 transition">
                Our Process →
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">

            {/* FLOATING ESCROW CARD */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0b0f14] border border-white/10 rounded-2xl p-6 w-80 shadow-xl hidden md:block"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-6 mb-6">
                <span className="text-teal-400 text-sm">Initiator</span>
                <span className="text-white/40 text-sm">Counterparty</span>
              </div>

              <div className="mb-4">
                <p className="text-white/60 text-sm mb-2">You Deposit</p>
                <div className="flex items-center justify-between bg-black rounded-xl px-4 py-3 border border-white/10">
                  <span className="text-white font-medium">BTC</span>
                  <span className="text-white/50">▼</span>
                </div>
              </div>

              <div>
                <p className="text-white/60 text-sm mb-2">You Receive</p>
                <div className="flex items-center justify-between bg-black rounded-xl px-4 py-3 border border-white/10">
                  <span className="text-white font-medium">TRX</span>
                  <span className="text-white/50">▼</span>
                </div>
              </div>
            </motion.div>

            {/* FLOATING PHONE IMAGE */}
            <motion.div
              className="relative z-10 scale-110 md:scale-125 xl:scale-140"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-[360px] md:w-[420px] xl:w-[480px]">
                <Image
                  src="/Bitcoin_img.png"
                  alt="AnchorDex App"
                  width={1000}
                  height={1000}
                  className="w-full h-auto drop-shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
