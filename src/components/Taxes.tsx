import {
  ShieldCheck,
  CalendarClock,
  FileText,
  Bell,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const timeline = [
  {
    icon: TrendingUp,
    tone: 'amber',
    title: 'VAT threshold watch',
    body: "Curuza watches your rolling 12-month turnover and tells you when you're approaching the RWF 5M threshold — so you register on time, not late.",
    cta: 'See the threshold tool',
    href: '#threshold',
  },
  {
    icon: CalendarClock,
    tone: 'forest',
    title: 'Filing calendar',
    body: 'VAT, CIT and PIT each have their own deadlines. Curuza keeps one calendar and nudges you weeks before each date, with the documents already prepared.',
    cta: 'See the calendar',
    href: '#taxes',
  },
  {
    icon: FileText,
    tone: 'forest',
    title: 'Ready-to-submit files',
    body: "When it's time to file, Curuza assembles the figures into a clean, ready-to-submit return — no spreadsheet gymnastics, no last-minute panic.",
    cta: 'See a sample return',
    href: '#taxes',
  },
];

export function Taxes() {
  return (
    <section id="taxes" className="section-pad bg-forest-950 text-cream-50">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-forest-700 bg-forest-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-forest-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            The reason Curuza exists
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-700 tracking-tight text-white text-balance sm:text-4xl">
            Taxes, handled before they become a problem
          </h2>
          <p className="reveal mt-4 text-lg text-forest-200 text-balance">
            Most POS software stops at sales. Curuza keeps watching — so you know when to
            register, when to file, and what to submit.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {timeline.map((t, i) => (
            <div
              key={t.title}
              className="reveal group rounded-4xl border border-forest-800 bg-forest-900/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-forest-600 hover:bg-forest-900"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  t.tone === 'amber'
                    ? 'bg-amber-500/15 text-amber-300'
                    : 'bg-forest-500/15 text-forest-300'
                }`}
              >
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-700 text-white">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-200">{t.body}</p>
              <a
                href={t.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-300 transition-colors hover:text-white"
              >
                {t.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        {/* advisory banner */}
        <div className="reveal mt-10 overflow-hidden rounded-4xl border border-forest-800 bg-gradient-to-r from-forest-900 to-forest-800 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-300">
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-700 text-white">
                  Continuous compliance advice
                </p>
                <p className="mt-1 max-w-xl text-sm text-forest-200">
                  Curuza doesn't wait for tax season. It tells you the moment your situation
                  changes — a new threshold, a missed invoice, a filing coming due.
                </p>
              </div>
            </div>
            <a
              href="#download"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-amber-300"
            >
              Try it free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
