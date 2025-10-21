"use client";

import React from "react";
import Link from "next/link";

export default function PricingPlans() {
  const [annual, setAnnual] = React.useState(true);
  const price = (m: number) => (annual ? Math.round(m * 0.8) : m);
  const suffix = annual ? "/mo (billed yearly)" : "/mo";

  const tiers = [
    { name: "Starter", price: price(29), features: ["Up to 2 staff","Basic scheduling","Email support"] },
    { name: "Pro",     price: price(79), features: ["Up to 10 staff","Drag-drop schedule","Route checks","Priority support"] },
    { name: "Scale",   price: price(149), features: ["Unlimited staff","Advanced constraints","Payroll export","Slack support"] },
  ];

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-xl font-semibold">Simple pricing that grows with you</h3>
          <p className="text-slate-600">Switch between monthly and annual to save ~20% on yearly plans.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-600">Monthly</span>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(v => !v)}
            className="relative inline-flex h-6 w-11 items-center rounded-full border"
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-brand-600 transition ${annual ? "translate-x-5" : "translate-x-0"}`} />
          </button>
          <span className="text-sm text-slate-600">Annual</span>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="card p-6">
            <div className="text-xl font-semibold">{t.name}</div>
            <div className="text-4xl font-bold mt-2">
              £{t.price}
              <span className="text-base font-normal text-slate-600">{suffix}</span>
            </div>
            <ul className="mt-4 text-slate-600 space-y-2 list-disc pl-5">
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <Link href="/signup" className="btn-primary mt-6">Choose {t.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}