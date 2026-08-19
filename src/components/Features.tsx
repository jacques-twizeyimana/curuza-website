import {
  Receipt,
  Package,
  ShieldCheck,
  BarChart3,
  Wallet,
  RotateCcw,
} from 'lucide-react';

const features = [
  {
    icon: Receipt,
    title: 'EBM-ready sales',
    body: 'Ring up sales and issue RRA-compliant EBM invoices in the same breath.',
  },
  {
    icon: Package,
    title: 'Inventory by carton',
    body: 'Track stock in cartons and units. Sell a single bottle, the math is done.',
  },
  {
    icon: ShieldCheck,
    title: 'Tax autopilot',
    body: 'Continuous advice on VAT registration, filing dates and ready documents.',
  },
  {
    icon: BarChart3,
    title: 'Clear reports',
    body: 'See profit, best-sellers and cash flow without spreadsheets.',
  },
  {
    icon: Wallet,
    title: 'Expenses & cash',
    body: 'Log every expense and keep a clean picture of what you actually keep.',
  },
  {
    icon: RotateCcw,
    title: 'Returns & refunds',
    body: 'Handle returns cleanly, with proper records that reconcile with sales.',
  },
];

export function Features() {
  return (
    <section id="features" className="section-pad bg-white">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">Everything in one place</span>
          <h2 className="reveal mt-5 font-display text-3xl font-700 tracking-tight text-ink-950 text-balance sm:text-4xl">
            One app for the whole day-to-day
          </h2>
          <p className="reveal mt-4 text-lg text-ink-600 text-balance">
            Curuza replaces the notebook, the calculator and the spreadsheet — so the
            records you need for taxes are the ones you already keep every day.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal card card-hover group"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 transition-all duration-300 group-hover:bg-forest-600 group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-700 text-ink-950">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
