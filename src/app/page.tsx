import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";
import Icon from "@/components/Icon";
import { features, steps, faqs } from "@/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal-2">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg text-mist">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="grid-bg absolute inset-0" aria-hidden="true" />
          <div className="absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-signal/25 blur-[120px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-mist">
              <span className="h-2 w-2 rounded-full bg-signal-2" /> Now in private beta
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              <span className="text-gradient">AI marketing agents</span> that sound like your team
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-mist">
              Signalcraft watches your market, drafts on-brand content and schedules it across channels, so a small team can ship like a big one.
            </p>
            <div id="waitlist" className="relative mx-auto mt-10 flex scroll-mt-28 justify-center">
              <Waitlist />
            </div>
            <p className="mt-4 text-sm text-mist">Free 14-day trial at launch. No credit card needed.</p>

            {/* Product preview */}
            <div className="relative mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-ink-2/80 p-4 text-left shadow-glow sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-white/15" /><span className="h-3 w-3 rounded-full bg-white/15" /><span className="h-3 w-3 rounded-full bg-white/15" />
                <span className="ml-3 text-xs text-mist">Weekly brief · Market radar</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Competitor launch", "A rival announced a free tier. Expect more price questions in sales calls."],
                  ["Trending topic", "“AI search” mentions up sharply in your industry this week."],
                  ["Draft ready", "LinkedIn post: 3 lessons from onboarding 50 new customers."],
                ].map(([t, b]) => (
                  <div key={t} className="rounded-xl border border-white/5 bg-ink-3/60 p-4">
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="mt-1 text-sm text-mist">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Section id="features" eyebrow="Features" title="Everything a lean marketing team needs" intro="Research, writing and scheduling in one workspace, with a human in charge.">
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <article key={f.title} className="group rounded-2xl border border-white/10 bg-ink-2/60 p-7 transition hover:-translate-y-1 hover:border-signal/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-signal/15 text-signal-2 transition group-hover:bg-signal/25">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-mist">{f.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="how" eyebrow="How it works" title="Up and running in an afternoon">
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-white/10 p-7">
                <span className="font-display text-sm text-signal-2">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-mist">{s.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="pricing" eyebrow="Pricing" title="Simple plans that grow with you">
          <Pricing />
        </Section>

        <Section id="faq" eyebrow="FAQ" title="Questions, answered">
          <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {f.q}
                  <span className="text-xl text-mist transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-mist">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="px-4 pb-24 sm:px-6">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-signal/30 bg-gradient-to-br from-signal/30 via-ink-2 to-signal-2/20 px-6 py-16 text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Give your team its time back</h2>
            <p className="mx-auto mt-4 max-w-xl text-mist">Join the beta and help shape how Signalcraft works for small marketing teams.</p>
            <a href="#waitlist" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-ink transition hover:bg-signal-2">
              Join the waitlist <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 text-sm text-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Signalcraft. Concept site — fictional brand.</p>
          <p>
            Designed and built by{" "}
            <a className="text-white underline-offset-4 hover:underline" href="https://shiv-999.github.io/">Shivam Shukla</a>
            {" "}· Next.js, TypeScript, Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
}
