"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", value: 1200 },
  { name: "Tue", value: 1320 },
  { name: "Wed", value: 1280 },
  { name: "Thu", value: 1500 },
  { name: "Fri", value: 1620 },
  { name: "Sat", value: 1700 },
  { name: "Sun", value: 1856 },
];

export default function PortfolioChart() {
  return (
    <div className="h-[260px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="tealGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={40}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              color: "#fff",
            }}
            labelStyle={{ color: "#94a3b8" }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#2dd4bf"
            strokeWidth={2}
            fill="url(#tealGlow)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
