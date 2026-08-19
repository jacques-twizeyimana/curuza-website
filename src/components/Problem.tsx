import { CalendarClock, FileText, Receipt, TrendingUp } from 'lucide-react';

const problems = [
  {
    icon: CalendarClock,
    title: 'Missed filing deadlines',
    body: 'VAT, CIT and PIT each have their own calendar. One missed date means penalties and interest that quietly compound.',
  },
  {
    icon: Receipt,
    title: "EBM invoices that don't match",
    body: 'When sales records and EBM invoices drift apart, you face reconciliation pain and uncomfortable questions during an audit.',
  },
  {
    icon: FileText,
    title: 'Scrambling for documents',
    body: 'Come filing season, receipts are scattered across drawers, phones and notebooks — so you rebuild three months of records by hand.',
  },
  {
    icon: TrendingUp,
    title: 'Surprise VAT registration',
    body: 'You only learn you crossed the RWF 5M turnover threshold after the fact — and RRA expects you registered from day one.',
  },
];

export function Problem() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">The headache</span>
          <h2 className="reveal mt-5 font-display text-3xl font-700 tracking-tight text-ink-950 text-balance sm:text-4xl">
            Taxes shouldn't be the thing that keeps you up at night
          </h2>
          <p className="reveal mt-4 text-lg text-ink-600 text-balance">
            Most shop owners in Rwanda do everything right — they sell, they serve customers,
            they restock. The trouble starts when tax season arrives and the records aren't ready.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="reveal card card-hover group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-700 text-ink-950">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal mx-auto mt-12 max-w-2xl rounded-4xl border border-forest-200 bg-forest-50 p-6 text-center sm:p-8">
          <p className="font-display text-xl font-700 text-forest-900 text-balance">
            Curuza turns tax season from a fire-drill into a few clicks.
          </p>
          <p className="mt-2 text-forest-700">
            Every sale you make already counts toward your records — so when the deadline
            comes, the work is already done.
          </p>
        </div>
      </div>
    </section>
  );
}
