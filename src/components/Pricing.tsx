"use client";

import { useState } from "react";
import { plans } from "@/content";
import Icon from "./Icon";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-3 text-sm">
        <span className={yearly ? "text-mist" : "text-white"}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          aria-label="Bill yearly"
          onClick={() => setYearly((v) => !v)}
          className={`relative h-7 w-12 rounded-full transition ${yearly ? "bg-signal" : "bg-ink-3"}`}
        >
          <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${yearly ? "left-6" : "left-1"}`} />
        </button>
        <span className={yearly ? "text-white" : "text-mist"}>
          Yearly <span className="ml-1 rounded-full bg-signal-2/15 px-2 py-0.5 text-xs text-signal-2">2 months free</span>
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => {
          const price = yearly ? Math.round((p.monthly * 10) / 12) : p.monthly;
          const featured = "featured" in p && p.featured;
          return (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${featured ? "border-signal/60 bg-ink-2 shadow-glow" : "border-white/10 bg-ink-2/60"}`}
            >
              {featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-signal px-3 py-1 text-xs font-semibold">Most popular</span>
              )}
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-mist">{p.tagline}</p>
              <p className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-semibold">${price}</span>
                <span className="pb-1 text-sm text-mist">/ month{yearly ? ", billed yearly" : ""}</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-white/90">
                    <Icon name="check" className="h-4 w-4 text-signal-2" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-8 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${featured ? "bg-signal hover:bg-signal/80" : "border border-white/15 hover:border-white/40"}`}
              >
                Get early access
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
