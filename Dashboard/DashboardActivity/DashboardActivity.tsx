"use client";

import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";

interface Activity {
  id: string;
  type: "Login" | "Escrow" | "Exchange" | "Settings";
  description: string;
  timestamp: string;
}

const dummyActivities: Activity[] = [
  { id: "ACT001", type: "Login", description: "User logged in from IP 192.168.1.5", timestamp: "2026-01-26 09:30" },
  { id: "ACT002", type: "Escrow", description: "Created a new escrow for John Doe", timestamp: "2026-01-25 15:45" },
  { id: "ACT003", type: "Exchange", description: "Exchanged 0.5 BTC to USD", timestamp: "2026-01-25 12:20" },
  { id: "ACT004", type: "Settings", description: "Updated profile email", timestamp: "2026-01-24 18:05" },
];

export default function DashboardActivity() {
  const [search, setSearch] = useState("");

  const filteredActivities = dummyActivities.filter(
    (act) =>
      act.type.toLowerCase().includes(search.toLowerCase()) ||
      act.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0d1e] text-white p-6 md:ml-[260px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Activity</h1>
        <input
          type="text"
          placeholder="Search activity..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2 rounded-lg bg-[#1a1c2b] text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {filteredActivities.length === 0 && (
          <p className="text-center text-slate-400 py-10">
            No activities found.
          </p>
        )}

        {filteredActivities.map((act) => (
          <div
            key={act.id}
            className="flex items-center justify-between rounded-lg bg-[#0f1125] p-4 hover:bg-[#1f2135] transition"
          >
            <div className="flex items-center gap-3">
              <div className="bg-teal-400/20 text-teal-400 rounded-full p-2">
                <Clock size={20} />
              </div>
              <div>
                <p className="font-medium text-white">{act.type}</p>
                <p className="text-slate-400 text-sm">{act.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>{act.timestamp}</span>
              <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-xs mt-6">
        Activities are logged in real-time for security and auditing purposes.
      </p>
    </div>
  );
}
