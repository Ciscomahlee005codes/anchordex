"use client";
import AdminLayout from "../../AdminLayout";
import {
  Users,
  ArrowLeftRight,
  Wallet,
} from "lucide-react";
import {useEffect, useState,  } from "react";
import { getAdmin } from "@/lib/adminAuth";

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState("Admin");
  
  useEffect(() => {
    const admin = getAdmin();
    if (admin?.name) {
      setAdminName(admin.name);
    }
  }, []);

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-2xl font-semibold">
          Hello, {adminName} 👋
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Overview of platform activity and system stats
        </p>
      </div>

      {/* STATS */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Users"
          value="24"
          icon={Users}
        />

        <StatCard
          title="Total Transactions"
          value="118"
          icon={ArrowLeftRight}
        />

        <StatCard
          title="Total Dummy Balance"
          value="₿ 12.45"
          icon={Wallet}
        />
      </section>

      {/* LOWER GRID (future-ready) */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-6 min-h-[220px]">
          <h3 className="text-sm font-medium mb-4">
            Recent Admin Actions
          </h3>

          <div className="flex items-center justify-center text-sm text-slate-500 h-full">
            No activity yet
          </div>
        </div>

        <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-6 min-h-[220px]">
          <h3 className="text-sm font-medium mb-4">
            System Status
          </h3>

          <div className="flex items-center justify-center text-sm text-slate-500 h-full">
            All systems operational
          </div>
        </div>

      </section>
    </AdminLayout>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0b1220] p-5 transition hover:border-teal-400/40 hover:bg-[#0e1628]">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-slate-400">
          {title}
        </p>

        <div className="rounded-lg bg-teal-400/10 p-2 text-teal-400">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <h3 className="text-2xl font-semibold">
        {value}
      </h3>
    </div>
  );
}
