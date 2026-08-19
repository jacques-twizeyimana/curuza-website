import { BarChart3, Download, TrendingUp, Wallet } from 'lucide-react';

export function Reporting() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <span className="eyebrow">Reports & expenses</span>
            <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-950 text-balance sm:text-4xl">
              Know what you're really making
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Sales aren't profit. Curuza tracks every expense alongside every sale, so you
              see your real margin — not just the top line. And when tax time comes, those
              same numbers become your deductible expenses.
            </p>

            <div className="mt-8 space-y-3">
              {[
                {
                  icon: TrendingUp,
                  title: 'Profit & loss',
                  body: 'Daily, weekly or monthly — see what you actually keep.',
                },
                {
                  icon: Wallet,
                  title: 'Expense tracking',
                  body: 'Log rent, transport, airtime and supplies as they happen.',
                },
                {
                  icon: BarChart3,
                  title: 'Best-sellers & slow-movers',
                  body: 'Know what to restock and what to stop ordering.',
                },
                {
                  icon: Download,
                  title: 'Export anything',
                  body: 'PDF or Excel for your accountant, the bank, or yourself.',
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-cream-50/50 p-4 transition-colors hover:border-forest-200 hover:bg-forest-50/40"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-700 text-ink-950">{f.title}</p>
                    <p className="mt-0.5 text-sm text-ink-600">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* visual */}
          <div className="reveal relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-forest-100 to-cream-200 blur-2xl" />
            <div className="overflow-hidden rounded-4xl border border-ink-100 bg-white p-6 shadow-lift">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-700 text-ink-950">
                  Profit & loss · August
                </p>
                <span className="rounded-full bg-forest-50 px-2.5 py-1 text-[11px] font-semibold text-forest-700">
                  +14% MoM
                </span>
              </div>

              {/* waterfall-ish */}
              <div className="mt-5 space-y-3">
                <Row label="Sales" value="RWF 2,640,000" tone="forest" pct={100} />
                <Row label="Cost of goods" value="− RWF 1,580,000" tone="amber" pct={60} />
                <Row label="Gross profit" value="RWF 1,060,000" tone="forest" pct={40} muted />
                <Row label="Expenses" value="− RWF 420,000" tone="amber" pct={16} />
                <div className="mt-2 flex items-center justify-between rounded-2xl bg-forest-600 px-4 py-3 text-white">
                  <span className="font-display text-sm font-700">Net profit</span>
                  <span className="font-display text-lg font-800">RWF 640,000</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { label: 'Margin', value: '24%' },
                  { label: 'Expenses', value: '16%' },
                  { label: 'Tax est.', value: 'RWF 115k' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-ink-100 bg-cream-50/60 p-3 text-center"
                  >
                    <p className="text-[11px] text-ink-400">{m.label}</p>
                    <p className="mt-0.5 font-display text-sm font-700 text-ink-950">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  tone,
  pct,
  muted = false,
}: {
  label: string;
  value: string;
  tone: 'forest' | 'amber';
  pct: number;
  muted?: boolean;
}) {
  return (
    <div className={muted ? 'opacity-90' : ''}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-ink-600">{label}</span>
        <span
          className={`font-display font-700 ${
            tone === 'forest' ? 'text-forest-700' : 'text-amber-700'
          }`}
        >
          {value}
        </span>
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-ink-100">
        <div
          className={`h-full rounded-full ${
            tone === 'forest' ? 'bg-forest-500' : 'bg-amber-400'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
