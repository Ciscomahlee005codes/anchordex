"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../../AdminLayout";
import {
  getUsers,
  initUsers,
  User,
} from "@/lib/storage";
import DummyFundModal from "@/Components/DummyFundModal/DummyFundModal";

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
    initUsers();
    setUsers(getUsers());
  }, []);

  if (!mounted) return null;

  return (
    <AdminLayout>
      <h1 className="text-xl font-semibold mb-6">Users</h1>

      <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0b1220]">
        <table className="w-full text-sm">
          <thead className="bg-[#111827] text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Balance (BTC)</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-6 text-slate-400"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-white/10"
                >
                  <td className="px-4 py-3 font-medium">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    {user.email}
                  </td>
                  <td className="px-4 py-3">
                    {user.balance.toFixed(4)} BTC
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="text-teal-400 hover:underline"
                    >
                      Credit Funds
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <DummyFundModal
          user={selectedUser}
          onClose={() => {
            setSelectedUser(null);
            setUsers(getUsers()); // refresh table after credit
          }}
        />
      )}
    </AdminLayout>
  );
}
