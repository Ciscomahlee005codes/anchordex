"use client";

import { useState } from "react";
import { creditUserByEmail } from "@/lib/storage";

export default function DummyFundModal({
  user,
  onClose,
}: {
  user: any;
  onClose: () => void;
}) {
  const [amount, setAmount] = useState("");

  const handleCredit = () => {
    creditUserByEmail(user.email, Number(amount));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-[#0b1220] border border-white/10 p-6">
        <h2 className="text-lg font-semibold mb-2 text-center">
          Credit Dummy Funds
        </h2>

        <p className="text-xs text-slate-400 text-center mb-4">
          {user.name} — {user.email}
        </p>

        <input
          type="number"
          placeholder="Amount (BTC)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-4 rounded-lg bg-[#020617] border border-white/10 px-4 py-2 text-sm"
        />

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-white/10 rounded-lg py-2 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleCredit}
            className="flex-1 bg-teal-500 hover:bg-teal-600 rounded-lg py-2 text-sm font-medium text-black"
          >
            Credit
          </button>
        </div>
      </div>
    </div>
  );
}
