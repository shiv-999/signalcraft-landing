"use client";

import { useState } from "react";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Concept site: validates input only. No data leaves the browser.
    setState(emailOk(email) ? "done" : "error");
  }

  if (state === "done") {
    return (
      <p role="status" className="rounded-xl border border-signal-2/30 bg-signal-2/10 px-5 py-4 text-signal-2">
        Thanks! This is a concept site, so nothing was sent, but this is where a real signup would be confirmed.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">Work email</label>
      <input
        id="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
        aria-invalid={state === "error"}
        aria-describedby={state === "error" ? "email-error" : undefined}
        className="h-12 flex-1 rounded-lg border border-white/15 bg-ink-2 px-4 text-white placeholder:text-mist/70 focus:border-signal focus:outline-none"
      />
      <button type="submit" className="h-12 whitespace-nowrap rounded-lg bg-signal px-6 font-semibold transition hover:bg-signal/80">
        Join the waitlist
      </button>
      {state === "error" && (
        <p id="email-error" className="text-sm text-rose-300 sm:absolute sm:mt-14">Please enter a valid email address.</p>
      )}
    </form>
  );
}
