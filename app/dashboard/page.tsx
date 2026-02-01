"use client";

import { useRouter } from "next/navigation";
import { getUser, logout } from "@/lib/auth";
import DashboardSidebar from "@/Dashboard/Sidebar/DashboardSidebar";
import PortfolioChart from "@/Dashboard/Charts/PortfolioChart";
import TotalAssetsCard from "@/Dashboard/TotalAssetsCard/TotalAssetsCard";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const user = getUser();

  const handleLogout = () => {
    logout();
    router.push("/auth");
  };

  function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}


  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <DashboardSidebar />

      <main className="ml-0 md:ml-[260px] px-4 sm:px-6 py-6">

        {/* TOP BAR */}
<div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

  {/* LEFT — TITLE + GREETING */}
  <div className="text-center sm:text-left">
    <h1 className="text-xl font-semibold text-white/90">
      Dashboard
    </h1>

    <p className="text-m text-slate-400 mt-1">
      {getGreeting()}, {user?.name} 👋
    </p>
  </div>

  {/* RIGHT — ACTIONS */}
  <div className="flex items-center gap-3 flex-wrap">
    <button className="rounded-xl bg-teal-500 px-4 py-2 text-sm font-medium text-black hover:bg-teal-400 transition flex items-center gap-2">
      <Plus className="h-4 w-4" />
      New trade
    </button>

    <button className="text-sm text-slate-300 hover:text-white">
      Active Trades
    </button>

    <button className="text-sm text-slate-300 hover:text-white">
      Wallets
    </button>

    <button
      onClick={handleLogout}
      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 hover:bg-white/5"
    >
      Logout
    </button>
  </div>
</div>


        {/* STATS */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">

          <TotalAssetsCard />

          <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-5">
            <p className="text-xs text-slate-400 mb-1">
              Active trades
            </p>
            <h3 className="text-xl font-semibold">0</h3>
            <p className="text-xs text-slate-500 mt-1">Trades</p>
          </div>

          <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-5">
            <p className="text-xs text-slate-400 mb-1">
              Completed
            </p>
            <h3 className="text-xl font-semibold">0</h3>
            <p className="text-xs text-slate-500 mt-1">Trades</p>
          </div>

        </section>

        {/* LOWER GRID */}
        <section className="grid gap-6 lg:grid-cols-2">

          {/* YOUR TRADES */}
          <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-6 min-h-[260px] flex flex-col">
            <h3 className="text-sm font-medium mb-6">
              Your Trades
            </h3>

            <div className="flex-1 flex items-center justify-center text-slate-500 text-sm">
              No available data
            </div>
          </div>

          {/* RECENT TRANSACTIONS */}
          <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-6 min-h-[260px] flex flex-col">
            <h3 className="text-sm font-medium mb-6">
              Recent Transactions
            </h3>

            <div className="flex-1 flex items-center justify-center text-slate-500 text-sm">
              No available data
            </div>
          </div>

        </section>

        {/* PORTFOLIO CHART */}
        <section className="mt-10 rounded-2xl bg-[#0b1220] border border-white/10 p-6">
          <h3 className="mb-4 text-sm font-medium">
            Portfolio performance
          </h3>

          <div className="rounded-xl bg-black/40 p-4">
            <PortfolioChart />
          </div>
        </section>

      </main>
    </div>
  );
}
