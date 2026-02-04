"use client";

import { useRouter } from "next/navigation";
import DashboardSidebar from "@/Dashboard/Sidebar/DashboardSidebar";

const dummyWallets = [
  { symbol: "BTC", name: "Bitcoin", balance: 0 },
  { symbol: "USDT", name: "Tether (TRC20)", balance: 0 },
  { symbol: "USDC", name: "USD Coin", balance: 0 },
  { symbol: "BNB", name: "BNB Smart Chain", balance: 0 },
  { symbol: "BELT", name: "Belt Token", balance: 0 },
];

export default function WalletPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <DashboardSidebar />

      <main className="ml-0 md:ml-[260px] px-4 sm:px-6 py-8">
        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl font-semibold">Wallet Balances</h1>

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/create-trade")}
              className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-black hover:bg-teal-400"
            >
              New Trade
            </button>

            <button
              onClick={() => router.push("/active-trades")}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm"
            >
              Active Trades
            </button>
          </div>
        </div>

        {/* TOTAL ASSETS CARD */}
        <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-6 mb-8">
          <p className="text-sm text-slate-400 mb-1">
            Total Assets Available
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            {dummyWallets.length} Coin(s) / Token(s)
          </h2>

          <div className="flex gap-3 flex-wrap">
            <ActionButton
              label="Deposit"
              onClick={() => router.push("/deposit")}
            />
            <ActionButton
              label="Withdraw"
              onClick={() => router.push("/dashboardwithdraw")}
            />
            <ActionButton
              label="Escrow"
              onClick={() => router.push("/create-trade")}
            />
          </div>
        </div>

        {/* BALANCES */}
        <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-6">
          <h3 className="text-lg font-medium mb-4">Balances</h3>

          <div className="space-y-4">
            {dummyWallets.map((w) => (
              <div
                key={w.symbol}
                className="flex justify-between items-center border-b border-white/5 pb-3"
              >
                <div>
                  <p className="text-sm font-medium">{w.symbol}</p>
                  <p className="text-xs text-slate-400">{w.name}</p>
                </div>

                <p className="text-sm font-semibold">
                  {w.balance.toFixed(6)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* -------- SMALL COMPONENT -------- */

function ActionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg px-5 py-2 text-sm font-medium bg-black/40 border border-white/10 hover:bg-white/5"
    >
      {label}
    </button>
  );
}
