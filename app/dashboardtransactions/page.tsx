"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import DashboardSidebar from "@/Dashboard/Sidebar/DashboardSidebar";

type TransactionStatus = "Pending" | "Completed" | "Failed";
type TransactionType = "Deposit" | "Withdrawal" | "Exchange";

interface Transaction {
  id: string;
  type: TransactionType;
  asset: string;
  amount: string;
  status: TransactionStatus;
  createdAt: string;
}

const dummyTransactions: Transaction[] = [
  {
    id: "TXN001",
    type: "Deposit",
    asset: "BTC",
    amount: "0.05 BTC",
    status: "Completed",
    createdAt: "2026-01-25",
  },
  {
    id: "TXN002",
    type: "Withdrawal",
    asset: "ETH",
    amount: "1.2 ETH",
    status: "Pending",
    createdAt: "2026-01-24",
  },
  {
    id: "TXN003",
    type: "Exchange",
    asset: "USDT → BTC",
    amount: "$500",
    status: "Failed",
    createdAt: "2026-01-22",
  },
];

export default function DashboardTransactions() {
  const [search, setSearch] = useState("");

  const filteredTransactions = dummyTransactions.filter(
    (tx) =>
      tx.id.toLowerCase().includes(search.toLowerCase()) ||
      tx.asset.toLowerCase().includes(search.toLowerCase()) ||
      tx.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0d1e] text-white p-6 md:ml-[260px]">
      <DashboardSidebar />
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-semibold mb-6">Transactions</h1>
        </div>

        <div className="relative w-full md:w-80">
          <Search
            className="absolute top-2.5 left-2.5 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by ID, type or asset"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-4 py-2 rounded-lg bg-[#1a1c2b] text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-white/10 bg-[#0f1125]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1a1c2b] text-slate-400 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Asset</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b border-white/10 hover:bg-[#1f2135] transition"
                >
                  <td className="px-4 py-3 font-medium">{tx.id}</td>
                  <td className="px-4 py-3">{tx.type}</td>
                  <td className="px-4 py-3">{tx.asset}</td>
                  <td className="px-4 py-3">{tx.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        tx.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : tx.status === "Completed"
                          ? "bg-teal-400/20 text-teal-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{tx.createdAt}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/dashboard/transactions/${tx.id}`}
                      className="text-teal-400 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-slate-400"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
