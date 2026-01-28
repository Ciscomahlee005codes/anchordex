"use client";

import { useRouter } from "next/navigation";
import { getUser, logout } from "@/lib/auth";
import DashboardSidebar from "@/Dashboard/Sidebar/DashboardSidebar";
import PortfolioChart from "@/Dashboard/Charts/PortfolioChart";

export default function DashboardPage() {
  const router = useRouter();
  const user = getUser();

  const handleLogout = () => {
    logout();
    router.push("/auth");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* SIDEBAR */}
      <DashboardSidebar />

      {/* MAIN CONTENT */}
      <main className="relative ml-0 md:ml-[260px] px-4 sm:px-6 py-6 transition-all">

        {/* TOP BAR */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Welcome back, {user?.name} 👋
            </h1>
            <p className="text-sm text-slate-400">
              Here’s an overview of your AnchorDex activity
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="self-start sm:self-auto rounded-full border border-white/10 px-5 py-2 text-sm text-white/80 hover:bg-white/5 transition"
          >
            Logout
          </button>
        </div>

        {/* STATS GRID */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { label: "Portfolio Value", value: "$1,856.84" },
            { label: "Active Escrows", value: "3" },
            { label: "Completed Trades", value: "18" },
            { label: "Wallet Balance", value: "$642.30" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">
                {item.label}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                {item.value}
              </h3>
            </div>
          ))}
        </section>

        {/* MAIN GRID */}
        <section className="grid gap-6 lg:grid-cols-3">

          {/* LEFT (ACTIVITY / CHART PLACEHOLDER) */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Portfolio Performance
            </h3>

            <div className="rounded-xl bg-black/40 p-4">
        <PortfolioChart />
   </div>

          </div>

          {/* RIGHT (QUICK ACTIONS) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Quick Actions
            </h3>

            <div className="flex flex-col gap-3">
              {[
                "Start New Escrow",
                "Deposit Funds",
                "Withdraw Funds",
                "View Transactions",
              ].map((action) => (
                <button
                  key={action}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
