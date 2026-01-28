"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

interface Exchange {
  id: string;
  from: string;
  to: string;
  amount: string;
  status: "Pending" | "Completed" | "Failed";
  createdAt: string;
}

const dummyExchanges: Exchange[] = [
  { id: "EX001", from: "USD", to: "BTC", amount: "$500", status: "Pending", createdAt: "2026-01-20" },
  { id: "EX002", from: "ETH", to: "USD", amount: "2 ETH", status: "Completed", createdAt: "2026-01-19" },
  { id: "EX003", from: "BTC", to: "USD", amount: "0.1 BTC", status: "Failed", createdAt: "2026-01-18" },
];

export default function DashboardExchange() {
  const [search, setSearch] = useState("");

  const filteredExchanges = dummyExchanges.filter(
    (ex) =>
      ex.id.toLowerCase().includes(search.toLowerCase()) ||
      ex.from.toLowerCase().includes(search.toLowerCase()) ||
      ex.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0d1e] text-white p-6 md:ml-[260px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Exchange</h1>
        <div className="relative w-full md:w-80">
          <Search className="absolute top-2.5 left-2.5 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search by ID, From, or To"
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
              <th className="px-4 py-3">Exchange ID</th>
              <th className="px-4 py-3">From</th>
              <th className="px-4 py-3">To</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExchanges.length > 0 ? (
              filteredExchanges.map((ex) => (
                <tr
                  key={ex.id}
                  className="border-b border-white/10 hover:bg-[#1f2135] transition"
                >
                  <td className="px-4 py-3 font-medium">{ex.id}</td>
                  <td className="px-4 py-3">{ex.from}</td>
                  <td className="px-4 py-3">{ex.to}</td>
                  <td className="px-4 py-3">{ex.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        ex.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : ex.status === "Completed"
                          ? "bg-teal-400/20 text-teal-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {ex.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{ex.createdAt}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/dashboard/exchange/${ex.id}`}
                      className="text-teal-400 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-slate-400">
                  No exchanges found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
