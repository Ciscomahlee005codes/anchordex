"use client";

import { useState } from "react";
import { ChevronDown, Search, Plus } from "lucide-react";
import Link from "next/link";

interface Escrow {
  id: string;
  buyer: string;
  seller: string;
  amount: string;
  status: "Pending" | "Completed" | "Disputed";
  createdAt: string;
}

const dummyEscrows: Escrow[] = [
  { id: "ESC001", buyer: "John Doe", seller: "Alice Smith", amount: "$500", status: "Pending", createdAt: "2026-01-20" },
  { id: "ESC002", buyer: "Michael Lee", seller: "Jane Doe", amount: "$1200", status: "Completed", createdAt: "2026-01-18" },
  { id: "ESC003", buyer: "Chris Brown", seller: "Eva Green", amount: "$800", status: "Disputed", createdAt: "2026-01-19" },
];

export default function EscrowsPage() {
  const [search, setSearch] = useState("");

  // Filter escrows by search
  const filteredEscrows = dummyEscrows.filter(
    (escrow) =>
      escrow.id.toLowerCase().includes(search.toLowerCase()) ||
      escrow.buyer.toLowerCase().includes(search.toLowerCase()) ||
      escrow.seller.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0d1e] text-white p-6 md:ml-[260px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Escrows</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search by ID, Buyer, or Seller"
              className="pl-8 pr-4 py-2 rounded-lg bg-[#1a1c2b] text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Link
            href="/dashboard/escrows/new"
            className="flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 text-black font-medium hover:bg-teal-300 transition"
          >
            <Plus size={16} />
            Create Escrow
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-white/10 bg-[#0f1125]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1a1c2b] text-slate-400 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Escrow ID</th>
              <th className="px-4 py-3">Buyer</th>
              <th className="px-4 py-3">Seller</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEscrows.length > 0 ? (
              filteredEscrows.map((escrow) => (
                <tr
                  key={escrow.id}
                  className="border-b border-white/10 hover:bg-[#1f2135] transition"
                >
                  <td className="px-4 py-3 font-medium">{escrow.id}</td>
                  <td className="px-4 py-3">{escrow.buyer}</td>
                  <td className="px-4 py-3">{escrow.seller}</td>
                  <td className="px-4 py-3">{escrow.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        escrow.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : escrow.status === "Completed"
                          ? "bg-teal-400/20 text-teal-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {escrow.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{escrow.createdAt}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/dashboard/escrows/${escrow.id}`}
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
                  No escrows found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
