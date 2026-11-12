"use client";

import { useState } from "react";
import Icon from "./Icon";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-signal text-sm">S</span>
          Signalcraft
        </a>
        <ul className="hidden items-center gap-8 text-sm text-mist md:flex">
          {links.map((l) => (
            <li key={l.href}><a className="transition hover:text-white" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#waitlist" className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-signal-2 md:inline-block">
          Join the waitlist
        </a>
        <button
          type="button"
          className="rounded-lg p-2 text-mist hover:text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/5 px-4 py-4 md:hidden">
          {[...links, { href: "#waitlist", label: "Join the waitlist" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-mist hover:bg-white/5 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
