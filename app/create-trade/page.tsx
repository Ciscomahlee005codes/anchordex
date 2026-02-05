"use client";

import { useState } from "react";
import DashboardSidebar from "@/Dashboard/Sidebar/DashboardSidebar";
import { ChevronDown, ArrowUpDown, X } from "lucide-react";
import { saveTrade } from "@/lib/trades";
import type { Trade } from "@/lib/trades";
import { nanoid } from "nanoid";

const assets = [
  { symbol: "BTC", icon: "🟠" },
  { symbol: "USDT", icon: "🟢" },
  { symbol: "USDC", icon: "🔵" },
  { symbol: "BNB", icon: "🟡" },
  { symbol: "BELT", icon: "🟣" },
];

export default function CreateTradePage() {
  const [sendAsset, setSendAsset] = useState(assets[0]);
  const [receiveAsset, setReceiveAsset] = useState(assets[1]);
  const [sendAmount, setSendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [role, setRole] = useState<"seller" | "buyer">("seller");
  const [feePayer, setFeePayer] = useState("split");
  const [sellerEmail, setSellerEmail] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false);

  function startTrade() {
  if (
    !sendAmount ||
    !receiveAmount ||
    Number(sendAmount) <= 0 ||
    Number(receiveAmount) <= 0 ||
    !sellerEmail ||
    !buyerEmail
  ) return;

  setConfirmOpen(true);
}


function confirmTrade() {
  const trade: Trade = {
    id: `trade_${nanoid(8)}`,
    createdAt: new Date().toISOString(),

    senderAsset: sendAsset.symbol,
    receiverAsset: receiveAsset.symbol,

    senderAmount: Number(sendAmount),
    receiverAmount: Number(receiveAmount),

    role,
    sellerEmail,
    buyerEmail,
    feePayer,
    status: "active",
  };

  saveTrade(trade);

  setConfirmOpen(false);
  setReceiptOpen(true);
}


  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <DashboardSidebar />

      <main className="ml-0 md:ml-[260px] px-4 sm:px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold">Start Trade</h1>
          <p className="text-sm text-slate-400 mt-1">
            Exchange crypto securely with escrow
          </p>
        </div>

        <div className="mx-auto max-w-xl rounded-2xl bg-[#0b1220] border border-white/10 p-6 space-y-6">

          <AssetBox
            label="You Send"
            asset={sendAsset}
            amount={sendAmount}
            onAmount={setSendAmount}
            onChange={setSendAsset}
          />

          <div className="flex justify-center">
            <ArrowUpDown className="h-5 w-5 text-yellow-400" />
          </div>

          <AssetBox
            label="You Receive"
            asset={receiveAsset}
            amount={receiveAmount}
            onAmount={setReceiveAmount}
            onChange={setReceiveAsset}
          />

          <div>
            <p className="text-sm mb-2">Select role type</p>
            <div className="flex rounded-xl overflow-hidden border border-white/10">
              <button
                onClick={() => setRole("seller")}
                className={`flex-1 py-2 ${
                  role === "seller"
                    ? "bg-red-500 text-white"
                    : "bg-black/40 text-slate-400"
                }`}
              >
                Seller
              </button>

              <button
                onClick={() => setRole("buyer")}
                className={`flex-1 py-2 ${
                  role === "buyer"
                    ? "bg-green-500 text-black"
                    : "bg-black/40 text-slate-400"
                }`}
              >
                Buyer
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
              placeholder="Seller's Email"
              className="input"
            />
            <input
              value={buyerEmail}
              onChange={(e) => setBuyerEmail(e.target.value)}
              placeholder="Buyer's Email"
              className="input"
            />
          </div>

          <div className="rounded-xl bg-black/40 border border-white/10 p-4">
            <p className="text-sm">Who pays trade fee?</p>
            <select
              value={feePayer}
              onChange={(e) => setFeePayer(e.target.value)}
              className="input mt-2"
            >
              <option value="split">Split</option>
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>

            <p className="text-sm text-slate-400 mt-2">
              Exchange fee: <span className="text-white">5%</span>
            </p>
          </div>

          <button
            onClick={startTrade}
            className="w-full rounded-xl bg-teal-500 py-3 text-black font-medium"
          >
            Start Trade
          </button>
        </div>
      </main>

      {confirmOpen && (
        <Modal onClose={() => setConfirmOpen(false)}>
          <h2 className="text-lg font-semibold mb-4">Confirm Trade</h2>
          <button
            onClick={confirmTrade}
            className="w-full rounded-lg bg-teal-500 py-2 text-black font-medium"
          >
            Continue
          </button>
        </Modal>
      )}

      {receiptOpen && (
        <Modal onClose={() => setReceiptOpen(false)}>
          <h2 className="text-lg font-semibold mb-4">Trade Created 🎉</h2>
          <p className="text-sm text-slate-400">
            Your trade has been successfully created and is now active.
          </p>
        </Modal>
      )}
    </div>
  );
}

/* ---------- HELPERS ---------- */

function AssetBox({ label, asset, amount, onAmount, onChange }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className="text-sm mb-2">{label}</p>
      <div className="flex items-center gap-3 rounded-xl bg-black/40 border border-white/10 px-4 py-3">
        <button onClick={() => setOpen(!open)} className="flex items-center gap-2">
          {asset.icon} {asset.symbol}
          <ChevronDown size={14} />
        </button>

        <input
          value={amount}
          onChange={(e) => onAmount(e.target.value)}
          placeholder="0.00"
          className="ml-auto w-24 bg-transparent text-right outline-none"
        />
      </div>

      {open && (
        <div className="mt-2 rounded-xl bg-[#020617] border border-white/10">
          {assets.map((a) => (
            <button
              key={a.symbol}
              onClick={() => {
                onChange(a);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-white/5"
            >
              {a.icon} {a.symbol}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Modal({ children, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#0b1220] p-6 rounded-xl relative w-full max-w-md">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
