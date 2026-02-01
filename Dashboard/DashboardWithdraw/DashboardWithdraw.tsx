"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import RequestWithdrawalModal from "./RequestWithdrawalModal";

export default function DashboardWithdraw() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0d1e] text-white px-4 sm:px-6 py-6 md:ml-[260px]">

      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* TITLE */}
        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-semibold">
            Withdraw
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Request a crypto withdrawal from your wallet
          </p>
        </div>

        {/* ACTION BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="mx-auto sm:mx-0 flex items-center justify-center gap-2 rounded-xl
                     bg-teal-500 px-5 py-2.5 text-sm font-medium text-black
                     hover:bg-teal-400 transition w-full sm:w-auto"
        >
          <Plus size={16} />
          Request Withdrawal
        </button>
      </div>

      {/* INFO CARD */}
      <div className="rounded-2xl bg-[#0f1125] border border-white/10 p-5 sm:p-6 text-slate-300 max-w-xl mx-auto sm:mx-0">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm">Available Asset</span>
          <span className="font-medium text-white">BTC</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Current Balance (Est.)</span>
          <span className="font-medium text-white">0 BTC</span>
        </div>
      </div>

      {/* MODAL */}
      {open && <RequestWithdrawalModal onClose={() => setOpen(false)} />}
    </div>
  );
}
