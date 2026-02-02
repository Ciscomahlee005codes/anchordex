"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getAdmin } from "@/lib/adminAuth";

import {
  LayoutDashboard,
  Users,
  ArrowLeftRight,
  Settings,
  Bell,
  Menu,
  X,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Transactions", href: "/admin/transactions", icon: ArrowLeftRight },
   { name: "Notifications", href: "/admin/notifications", icon: Bell },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);


useEffect(() => {
  const admin = getAdmin();
  if (!admin) {
    router.push("/admin/auth");
  }
}, [router]);


  const handleLogout = () => {
    setConfirmLogout(false);
    // 🔒 Later: clear auth / token here
    router.push("/adminauth"); // redirect to login
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">

      {/* MOBILE TOGGLE */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-black/80 p-2 text-white backdrop-blur md:hidden"
      >
        <Menu size={22} />
      </button>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[260px] border-r border-white/10 bg-[#020617] p-6 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400 text-black font-bold">
              A
            </div>
            <span className="text-lg font-semibold text-white">AnchorDex</span>
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-white/70"
          >
            <X size={20} />
          </button>
        </div>

        {/* NAV */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = router.pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition
                  ${active
                    ? "bg-teal-500/15 text-teal-400"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT BUTTON */}
        <button
          onClick={() => setConfirmLogout(true)}
          className="mt-6 flex w-full items-center gap-3 rounded-xl bg-red-600/20 px-4 py-3 text-sm text-red-400 hover:bg-red-600/30 hover:text-white transition"
        >
          <LogOut size={18} />
          Logout
        </button>

        {/* FOOTER */}
        <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-slate-400">
          <p className="mb-1 font-medium text-white">Secured by AnchorDex</p>
          <p>All escrows are protected</p>
        </div>
      </aside>

      {/* DESKTOP SPACER */}
      <div className="hidden md:block md:w-[260px]" />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:pt-6">{children}</main>

      {/* LOGOUT CONFIRMATION MODAL */}
      {confirmLogout && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-80 rounded-xl bg-[#0b0d1e] p-6 text-center text-white shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setConfirmLogout(false)}
                className="flex-1 rounded-lg border border-white/20 bg-white/10 py-2 hover:bg-white/20 transition"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 rounded-lg bg-red-600 py-2 hover:bg-red-700 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
