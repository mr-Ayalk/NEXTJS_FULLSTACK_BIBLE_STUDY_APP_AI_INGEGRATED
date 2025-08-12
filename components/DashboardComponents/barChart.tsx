"use client";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Beautiful, reusable BarChart component for Next.js + Tailwind
// - Install: npm install recharts
// - Usage: import BeautifulBarChart from './BeautifulBarChart' and include <BeautifulBarChart data={yourData} />

type DataPoint = {
  name: string;
  value: number;
};

type Props = {
  data?: DataPoint[];
  height?: number | string; // height of the chart area (px or %) - default 300
  barColorFrom?: string; // gradient start color
  barColorTo?: string; // gradient end color
  title?: string;
};

const defaultData: DataPoint[] = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 200 },
  { name: "Wed", value: 150 },
  { name: "Thu", value: 80 },
  { name: "Fri", value: 170 },
  { name: "Sat", value: 90 },
  { name: "Sun", value: 230 },
];

export default function StatusBarChart({
  data = defaultData,
  height = 200,
  barColorFrom = "#7c3aed", // violet-600
  barColorTo = "#06b6d4", // cyan-500
  title = "Weekly Activity",
}: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-4 ">
      <div className="flex items-start justify-between ">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-500">Overview of the last 7 days</p>
        </div>
      </div>

      <div className="w-full " style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} aria-label={`${title} bar chart`} role="img">
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={barColorFrom} stopOpacity={0.95} />
                <stop offset="100%" stopColor={barColorTo} stopOpacity={0.9} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#eef2ff" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#475569" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#475569" }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "none",
                boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
              }}
              itemStyle={{ color: "#0f172a" }}
              formatter={(value: number) => [value, "Count"]}
            />

            <Legend wrapperStyle={{ paddingTop: 10, fontSize: 13 }} />

            <Bar
              dataKey="value"
              name="Count"
              barSize={28}
              radius={[8, 8, 4, 4]}
              fill="url(#barGradient)"
              isAnimationActive={true}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className=" flex gap-3 flex-wrap items-center text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 inline-block" />
          <span>Primary metric</span>
        </div>
        <div className="ml-auto text-xs text-slate-400">Updated just now</div>
      </div>
    </div>
  );
}
