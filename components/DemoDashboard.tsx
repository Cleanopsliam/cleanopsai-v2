"use client";

import { useState } from "react";
import clsx from "clsx";

type TabKey = "kpi" | "schedule" | "clients" | "payroll";

const tabs: { key: TabKey; label: string }[] = [
  { key: "kpi", label: "KPI Overview" },
  { key: "schedule", label: "Schedule" },
  { key: "clients", label: "Clients" },
  { key: "payroll", label: "Payroll" },
];

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("rounded-2xl border bg-white shadow-smooth", className)}>{children}</div>;
}

function Kpi({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border p-4 bg-white">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}

export default function DemoDashboard() {
  const [tab, setTab] = useState<TabKey>("kpi");

  return (
    <Card className="p-0">
      {/* Header / Tabs */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b bg-white/70 backdrop-blur rounded-t-2xl">
        <div className="text-sm font-medium text-slate-700">CleanOpsAI — Demo</div>
        <div className="flex gap-1">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={clsx(
                "px-3 py-1.5 rounded-lg text-sm transition",
                tab === t.key ? "bg-brand-600 text-white" : "hover:bg-slate-100 text-slate-700"
              )}
              aria-pressed={tab === t.key}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 md:p-6">
        {tab === "kpi" && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Kpi label="Jobs today" value={6} />
              <Kpi label="Earnings today" value={"£420"} />
              <Kpi label="Week to date" value={"£1,640"} />
              <Kpi label="Month to date" value={"£6,820"} />
            </div>
            <Card className="p-6">
              <div className="text-lg font-medium">Today at a glance</div>
              <p className="text-slate-600 mt-2">
                See jobs, earnings, and route feasibility warnings in one place. Switch filters to weekly, monthly, quarterly, or yearly.
              </p>
            </Card>
          </div>
        )}

        {tab === "schedule" && (
          <div className="space-y-4">
            <div className="text-lg font-medium">Smart schedule (demo)</div>
            <p className="text-slate-600">
              Drag & drop jobs, confirm one-off vs new default day, and see travel-aware start times. If a route would overrun staff finish time,
              you’ll get a warning with the exact reason.
            </p>
            <div className="grid lg:grid-cols-[1fr_320px] gap-4">
              {/* Calendar mock */}
              <Card className="p-4">
                <div className="grid grid-cols-5 gap-2 text-xs text-slate-500 mb-2">
                  {["Mon","Tue","Wed","Thu","Fri"].map(d => <div key={d} className="text-center">{d}</div>)}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-40 rounded-lg border bg-slate-50 p-2">
                      <div className="text-[11px] text-slate-500">Team {i+1}</div>
                      <div className="mt-1 space-y-1">
                        <div className="text-[11px] rounded-md bg-white border px-2 py-1">09:00 • Smith (LS6)</div>
                        <div className="text-[11px] rounded-md bg-white border px-2 py-1">11:00 • Patel (LS2)</div>
                        <div className="text-[11px] rounded-md bg-white border px-2 py-1">13:30 • Davis (LS18)</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Feasibility / Route panel */}
              <Card className="p-4">
                <div className="text-sm font-medium">Route feasibility</div>
                <ul className="mt-2 text-sm text-slate-700 space-y-2">
                  <li>✅ Travel time accounted between jobs</li>
                  <li>✅ 11:00 client fixed time respected</li>
                  <li>⚠️ Team 2 projected finish 14:50 (target 14:30) — adjust or reassign</li>
                </ul>
                <button className="mt-4 px-3 py-2 rounded-lg bg-brand-600 text-white text-sm">Auto-rebalance day</button>
              </Card>
            </div>
          </div>
        )}

        {tab === "clients" && (
          <div className="space-y-4">
            <div className="text-lg font-medium">Clients</div>
            <Card className="p-0 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="text-left p-3">Name</th>
                    <th className="text-left p-3">Address</th>
                    <th className="text-left p-3">Notes</th>
                    <th className="text-left p-3">Next clean</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sarah Smith","LS6 3AB","Cat; key in lockbox","Mon 09:00"],
                    ["A. Patel","LS2 4CD","Parking on side street","Mon 11:00"],
                    ["J. Davis","LS18 2EF","Bring eco products","Mon 13:30"],
                  ].map((r,i)=>(
                    <tr key={i} className="border-t">
                      {r.map((c,j)=><td key={j} className="p-3">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        )}

        {tab === "payroll" && (
          <div className="space-y-4">
            <div className="text-lg font-medium">Payroll summary</div>
            <p className="text-slate-600">
              Cleaning minutes + travel miles × £0.70. Export CSV for accounting, with job-level breakdowns.
            </p>
            <Card className="p-0 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="text-left p-3">Staff</th>
                    <th className="text-left p-3">Cleaning time</th>
                    <th className="text-left p-3">Miles</th>
                    <th className="text-left p-3">Travel pay</th>
                    <th className="text-left p-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Team 1","5h 30m","18.2","£12.74","£82.74"],
                    ["Team 2","4h 45m","22.1","£15.47","£79.47"],
                  ].map((r,i)=>(
                    <tr key={i} className="border-t">
                      {r.map((c,j)=><td key={j} className="p-3">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <div className="flex justify-end">
              <button className="px-3 py-2 rounded-lg border text-sm hover:bg-slate-50">Export CSV</button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}