"use client";

import { useEffect, useState } from "react";
import DashboardSidebar from "@/Dashboard/Sidebar/DashboardSidebar";
import { ChevronDown, Info } from "lucide-react";
import { getCurrentUser, User } from "@/lib/storage";

const coins = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "USDT", name: "Tether (TRC20)" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "BNB", name: "Binance Coin" },
  { symbol: "USDC", name: "USD Coin" },
];

export default function DepositPage() {
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <DashboardSidebar />

      <main className="ml-0 md:ml-[260px] px-4 sm:px-6 py-6">

        <div className="text-center sm:text-left">
          <h1 className="text-xl font-semibold mb-6">Deposit</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0b1220] border border-white/10 p-6 space-y-8">

            {/* STEP 1 */}
            <div className="flex gap-4">
              <StepNumber number="1" />
              <div className="flex-1">
                <p className="text-sm font-medium mb-2">
                  Select Coin / Token
                </p>

                <div className="relative">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
                  >
                    {selectedCoin ?? "Select crypto"}
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </button>

                  {open && (
                    <div className="absolute z-20 mt-2 w-full rounded-xl bg-[#020617] border border-white/10 overflow-hidden">
                      {coins.map((coin) => (
                        <button
                          key={coin.symbol}
                          onClick={() => {
                            setSelectedCoin(coin.symbol);
                            setOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-sm hover:bg-white/5"
                        >
                          {coin.symbol} —{" "}
                          <span className="text-slate-400">
                            {coin.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-4">
              <StepNumber number="2" />
              <div className="flex-1">
                <p className="text-sm font-medium mb-2">
                  Enter Amount
                </p>

                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-teal-400"
                />
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex gap-4">
              <StepNumber number="3" />
              <div className="flex-1 space-y-4">
                <p className="text-sm font-medium">
                  Generate Deposit Address
                </p>

                <div className="flex items-start gap-2 text-xs text-slate-400">
                  <Info className="h-4 w-4 mt-0.5 text-teal-400" />
                  Only deposit to addresses generated on our server.
                </div>

                <button
                  disabled={!selectedCoin}
                  className="rounded-xl bg-teal-500 px-6 py-3 text-sm font-medium text-black hover:bg-teal-400 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Generate deposit address
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — REAL BALANCE */}
          <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-6 h-fit">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                💰
              </div>
              <div>
                <p className="text-xs text-slate-400">
                  Available Asset
                </p>
                <p className="text-sm text-slate-500">
                  Current balance (Est.)
                </p>
              </div>
            </div>

            <p className="text-xl font-semibold mt-2">
              {user?.balance?.toFixed(4) ?? "0.0000"} {selectedCoin ?? "BTC"}
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}

function StepNumber({ number }: { number: string }) {
  return (
    <div className="h-7 w-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-semibold">
      {number}
    </div>
  );
}
