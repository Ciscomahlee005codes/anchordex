"use client";

import { useState } from "react";
import AdminLayout from "../../AdminLayout";
import DummyFundModal from "@/Components/DummyFundModal/DummyFundModal";

const users = [
  { id: "U001", name: "Anthony", email: "anthony@mail.com", balance: 0.5 },
  { id: "U002", name: "Samuel", email: "sam@mail.com", balance: 1.2 },
];

export default function AdminUsers() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <AdminLayout>
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
        Users
      </h1>

      <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0b1220]">
        <table className="w-full text-sm">
          <thead className="bg-[#111827] text-slate-400">
            <tr>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Balance (BTC)</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-white/10">
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3">{u.balance}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setSelectedUser(u.id)}
                    className="text-teal-400 hover:underline"
                  >
                    Credit Funds
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <DummyFundModal onClose={() => setSelectedUser(null)} />
      )}
    </AdminLayout>
  );
}
