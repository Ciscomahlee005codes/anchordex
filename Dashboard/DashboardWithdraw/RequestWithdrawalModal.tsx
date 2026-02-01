"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

export default function RequestWithdrawalModal({ onClose }: Props) {
  const [method, setMethod] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    if (!amount || !address) {
      alert("Please fill all fields");
      return;
    }

    console.log({
      method,
      amount,
      address,
    });

    alert("Withdrawal request submitted");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#0f1125] rounded-xl border border-white/10 p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Request Withdrawal</h2>
          <button onClick={onClose}>
            <X className="text-slate-400 hover:text-white" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Method */}
          <div>
            <label className="text-sm text-slate-400 mb-1 block">
              Select withdrawal method
            </label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full bg-[#1a1c2b] border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option>BTC</option>
              <option>ETH</option>
              <option>USDT</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="text-sm text-slate-400 mb-1 block">
              Enter Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-[#1a1c2b] border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-sm text-slate-400 mb-1 block">
              Destination Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Wallet address"
              className="w-full bg-[#1a1c2b] border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Note */}
          <p className="text-xs text-slate-400 leading-relaxed">
            Note: Ensure the address is correct and on the same network.
            Contact <span className="text-teal-400">support@crestnetx.com</span>{" "}
            for guidance.
          </p>

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-500 hover:bg-teal-600 transition py-3 rounded-lg text-sm font-medium"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
