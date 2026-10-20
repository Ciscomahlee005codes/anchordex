"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck, FiLock } from "react-icons/fi";

const trade = [
  { label: "Buyer deposits 0.482 BTC", done: true },
  { label: "Funds locked in escrow", done: true },
  { label: "Seller confirms payment", done: false },
  { label: "Release to buyer", done: false },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#05080a] pt-16">
      {/* Background: fine grid fading out + one soft teal light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
          }}
        />
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-teal-500/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-sm text-white/70">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-teal-400/15 text-teal-300">
              <FiLock size={11} />
            </span>
            Every trade held in escrow until both sides confirm
          </div>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
            Trade crypto without
            <span className="block bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300 bg-clip-text text-transparent">
              trusting a stranger.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/60">
            Paychex holds the funds while you and your counterparty complete the
            deal. Swap or settle OTC trades with no counterparty risk, and
            release only when both sides are satisfied.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/auth"
              className="group inline-flex items-center gap-3 rounded-xl bg-white py-3 pl-6 pr-3 font-medium text-black transition-colors hover:bg-teal-200"
            >
              Start a secure trade
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-black text-white transition-transform group-hover:translate-x-0.5">
                <FiArrowRight />
              </span>
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3 font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/[0.05]"
            >
              See how it works
            </Link>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/[0.08] pt-8">
            {[
              ["$16M+", "24h volume"],
              ["100+", "Countries"],
              ["~10 min", "Avg. trade"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl font-semibold tabular-nums text-white">{v}</dt>
                <dd className="mt-1 text-sm text-white/45">{l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right: phone + live escrow card */}
        <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:justify-end">
          <div
            aria-hidden
            className="absolute inset-x-8 top-1/2 h-72 -translate-y-1/2 rounded-full bg-teal-400/20 blur-[110px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative w-[300px] md:w-[360px]"
          >
            <Image
              src="/Bitcoin_img.png"
              alt="Paychex app showing a trade in escrow"
              width={1000}
              height={1000}
              priority
              className="h-auto w-full drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

          {/* Escrow card — the one moving element */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              x: { duration: 0.6, delay: 0.5 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
            }}
            className="absolute -left-2 bottom-10 hidden w-72 rounded-2xl border border-white/10 bg-[#0b1014]/90 p-5 shadow-2xl backdrop-blur-xl md:block lg:-left-10"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/45">Trade #4821</p>
                <p className="text-sm font-medium text-white">BTC → USDT</p>
              </div>
              <span className="rounded-md bg-teal-400/15 px-2 py-1 text-xs font-medium text-teal-300">
                In escrow
              </span>
            </div>

            <ol className="space-y-3">
              {trade.map((s) => (
                <li key={s.label} className="flex items-center gap-3 text-sm">
                  <span
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                      s.done
                        ? "border-teal-400 bg-teal-400 text-black"
                        : "border-white/20 text-transparent"
                    }`}
                  >
                    <FiCheck size={11} />
                  </span>
                  <span className={s.done ? "text-white/90" : "text-white/45"}>
                    {s.label}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}