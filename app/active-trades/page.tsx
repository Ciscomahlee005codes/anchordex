"use client";

import DashboardSidebar from "@/Dashboard/Sidebar/DashboardSidebar";
import { getUserTrades } from "@/lib/trades";
import { getCurrentUser } from "@/lib/storage";

export default function ActiveTradesPage() {
  const user = getCurrentUser();
const trades = user ? getUserTrades(user.email) : [];


  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <DashboardSidebar />

      <main className="ml-0 md:ml-[260px] px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">
          Active Trades
        </h1>

        {trades.length === 0 ? (
          <p className="text-slate-400">No active trades</p>
        ) : (
          <div className="space-y-4">
            {trades.map((t) => (
              <div
                key={t.id}
                className="rounded-xl bg-[#0b1220] border border-white/10 p-5"
              >
                <div className="flex justify-between text-sm">
                  <span>{t.senderAsset} → {t.receiverAsset}</span>
                  <span className="text-teal-400">{t.status}</span>
                </div>

                <p className="text-xs text-slate-400 mt-1">
                  Trade ID: {t.id}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
