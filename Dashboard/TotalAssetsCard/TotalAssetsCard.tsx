"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const assets = [
  { symbol: "BTC", name: "Bitcoin", balance: "0.0000", icon: "🟠" },
  { symbol: "USDT", name: "USDT (TRC20)", balance: "0.0000", icon: "🟢" },
  { symbol: "eUSDe", name: "eUSDe", balance: "0.0000", icon: "⚪" },
  { symbol: "BNB", name: "BNB", balance: "0.0000", icon: "🟡" },
  { symbol: "USDC", name: "USDC", balance: "0.0000", icon: "🔵" },
  { symbol: "LUIGI", name: "LUIGI", balance: "0.0000", icon: "🟣" },
  { symbol: "BELT", name: "BELT", balance: "0.0000", icon: "🟠" },
  { symbol: "Pump", name: "Pump", balance: "0.0000", icon: "🟩" },
];

export default function TotalAssetsCard() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(assets[0]);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative rounded-2xl bg-[#0b1220] border border-white/10 p-5">
      <p className="text-xs text-slate-400 mb-3">
        Est. Total Assets
      </p>

      {/* SELECTED ASSET */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 rounded-xl bg-black/40 px-4 py-3 flex-1 hover:bg-black/60 transition"
        >
          <span className="text-sm">{selected.icon}</span>
          <span className="text-sm font-medium">
            {selected.balance} {selected.symbol}
          </span>
          <ChevronDown className="ml-auto h-4 w-4 text-slate-400" />
        </button>

        {/* ARROW BUTTON */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/40 hover:bg-black/60 transition">
          <ArrowRight className="h-4 w-4 text-slate-300" />
        </button>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute left-5 right-5 top-[115px] z-30 rounded-xl bg-[#0b1220] border border-white/10 shadow-2xl">
          <div className="max-h-[260px] overflow-y-auto">
            {assets.map((asset) => (
              <button
                key={asset.symbol}
                onClick={() => {
                  setSelected(asset);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-white/5 transition"
              >
                <span className="text-lg">{asset.icon}</span>

                <div className="flex-1 text-left">
                  <p className="font-medium">{asset.symbol}</p>
                  <p className="text-xs text-slate-500">
                    {asset.name}
                  </p>
                </div>

                <span className="text-slate-300">
                  {asset.balance}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
