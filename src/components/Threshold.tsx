import { useMemo, useState } from 'react';
import { AlertTriangle, ShieldCheck, TrendingUp, Info } from 'lucide-react';

const THRESHOLD = 5_000_000; // RWF, 12-month rolling turnover for VAT registration
const fmt = (n: number) =>
  'RWF ' + Math.round(n).toLocaleString('en-US');

export function Threshold() {
  const [monthly, setMonthly] = useState(350_000);

  const annual = monthly * 12;
  const pct = Math.min(100, (annual / THRESHOLD) * 100);
  const remaining = THRESHOLD - annual;
  const monthsToThreshold = remaining > 0 && monthly > 0 ? Math.ceil(remaining / monthly) : 0;

  const status = useMemo(() => {
    if (annual >= THRESHOLD)
      return {
        tone: 'amber',
        icon: AlertTriangle,
        title: 'You should register for VAT now',
        body: 'Your projected turnover meets or exceeds the RWF 5M threshold. RRA expects you registered from the point you cross it — Curuza walks you through the steps.',
      };
    if (pct >= 75)
      return {
        tone: 'amber',
        icon: TrendingUp,
        title: `${monthsToThreshold} months to the threshold`,
        body: "You're approaching the VAT registration threshold. Curuza will start nudging you to prepare so you're not caught off guard.",
      };
    if (pct >= 40)
      return {
        tone: 'forest',
        icon: TrendingUp,
        title: 'On track — keep an eye on growth',
        body: "You're below the threshold but growing. Curuza watches your rolling turnover and tells you the moment that changes.",
      };
    return {
      tone: 'forest',
      icon: ShieldCheck,
      title: 'Comfortably below the threshold',
      body: "No registration needed yet. Curuza still keeps clean records so you're ready the day you do cross it.",
    };
  }, [annual, pct, monthsToThreshold]);

  return (
    <section id="threshold" className="section-pad bg-white">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">Try it yourself</span>
          <h2 className="reveal mt-5 font-display text-3xl font-700 tracking-tight text-ink-950 text-balance sm:text-4xl">
            When will you need to register for VAT?
          </h2>
          <p className="reveal mt-4 text-lg text-ink-600 text-balance">
            Drag the slider to your average monthly sales. Curuza does this automatically —
            every day, using your real numbers.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 max-w-4xl overflow-hidden rounded-4xl border border-ink-100 bg-cream-50/40 shadow-lift">
          <div className="grid lg:grid-cols-5">
            {/* control */}
            <div className="border-b border-ink-100 p-7 sm:p-9 lg:col-span-3 lg:border-b-0 lg:border-r">
              <label htmlFor="monthly" className="block text-sm font-semibold text-ink-700">
                Average monthly turnover
              </label>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl font-800 text-ink-950 sm:text-5xl">
                  {fmt(monthly)}
                </span>
                <span className="text-sm text-ink-400">/ month</span>
              </div>

              <input
                id="monthly"
                type="range"
                min={0}
                max={1_000_000}
                step={10_000}
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                className="mt-5 w-full cursor-pointer accent-forest-600"
              />
              <div className="mt-1 flex justify-between text-xs text-ink-400">
                <span>RWF 0</span>
                <span>RWF 1,000,000</span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-ink-100 bg-white p-4">
                  <p className="text-xs text-ink-400">Projected annual turnover</p>
                  <p className="mt-1 font-display text-xl font-800 text-ink-950">
                    {fmt(annual)}
                  </p>
                </div>
                <div className="rounded-2xl border border-ink-100 bg-white p-4">
                  <p className="text-xs text-ink-400">VAT threshold</p>
                  <p className="mt-1 font-display text-xl font-800 text-ink-950">
                    {fmt(THRESHOLD)}
                  </p>
                </div>
              </div>

              {/* progress bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-medium text-ink-500">
                  <span>Progress to threshold</span>
                  <span>{Math.round(pct)}%</span>
                </div>
                <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-ink-100">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      pct >= 100
                        ? 'bg-amber-500'
                        : pct >= 75
                        ? 'bg-amber-400'
                        : 'bg-forest-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* status */}
            <div className="p-7 sm:p-9 lg:col-span-2">
              <div
                className={`flex h-full flex-col rounded-3xl p-6 ${
                  status.tone === 'amber'
                    ? 'bg-amber-50 border border-amber-200'
                    : 'bg-forest-50 border border-forest-200'
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    status.tone === 'amber'
                      ? 'bg-amber-500/15 text-amber-600'
                      : 'bg-forest-500/15 text-forest-700'
                  }`}
                >
                  <status.icon className="h-6 w-6" />
                </div>
                <h3
                  className={`mt-4 font-display text-xl font-700 ${
                    status.tone === 'amber' ? 'text-amber-900' : 'text-forest-900'
                  }`}
                >
                  {status.title}
                </h3>
                <p
                  className={`mt-2 flex-1 text-sm leading-relaxed ${
                    status.tone === 'amber' ? 'text-amber-800' : 'text-forest-800'
                  }`}
                >
                  {status.body}
                </p>

                <a
                  href="#download"
                  className={`mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                    status.tone === 'amber'
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
                      : 'bg-forest-600 text-white hover:bg-forest-700'
                  }`}
                >
                  Let Curuza track this for you
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 border-t border-ink-100 bg-cream-50/60 px-7 py-4 text-xs text-ink-500">
            <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
            <p>
              Illustrative only. The VAT registration threshold in Rwanda is RWF 5 million of
              turnover over any 12-month period. Always confirm current rules with the Rwanda
              Revenue Authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
