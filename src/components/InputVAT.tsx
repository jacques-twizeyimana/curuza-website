import { Receipt, ArrowRight, CheckCircle2, ShieldCheck, QrCode } from 'lucide-react';

const steps = [
  {
    n: 1,
    title: 'Generate a purchase code',
    body: 'Before you buy from a VAT-registered wholesaler, Curuza generates an RRA purchase code tied to your TIN.',
  },
  {
    n: 2,
    title: 'Buy with the code',
    body: 'Present the code at purchase. The wholesaler records the sale against it, and the VAT you paid is captured.',
  },
  {
    n: 3,
    title: 'Claim input VAT',
    body: 'When you file, Curuza totals the VAT already included in your purchases — that becomes your input VAT claim.',
  },
];

export function InputVAT() {
  return (
    <section id="input-vat" className="section-pad bg-cream-100/60">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <div className="reveal">
            <span className="eyebrow">Input VAT, finally simple</span>
            <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-950 text-balance sm:text-4xl">
              VAT shouldn't be a cost of doing business
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              When you sell shoes for RWF 10,000, you owe RRA RWF 1,800 in VAT. But the VAT
              you already paid when buying stock from a VAT-registered wholesaler is yours to
              claim back. Curuza generates the RRA purchase code you need at purchase time —
              so your input VAT is captured automatically, not lost.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-colors hover:border-forest-200"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-forest-600 font-display text-sm font-800 text-white">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-display text-sm font-700 text-ink-950">{s.title}</p>
                    <p className="mt-1 text-sm text-ink-600">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* visual */}
          <div className="reveal relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-forest-100 to-cream-200 blur-2xl sm:-inset-6" />
            <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white p-4 shadow-lift sm:rounded-4xl sm:p-6">
              {/* purchase code card */}
              <div className="rounded-2xl border border-forest-200 bg-forest-50/60 p-4 sm:rounded-3xl sm:p-5">
                <div className="flex flex-col items-start gap-3 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-600 text-white">
                      <QrCode className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-700 text-ink-950">RRA purchase code</p>
                      <p className="text-[11px] text-ink-400">TIN 400123456 · valid 30 days</p>
                    </div>
                  </div>
                  <span className="rounded-lg bg-forest-600 px-3 py-1 text-xs font-semibold text-white">
                    Generate
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl bg-white px-3 py-3 sm:px-4">
                  <span className="break-all font-mono text-sm font-700 tracking-wider text-forest-800 sm:text-lg">
                    RW-4001-2345-6789
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-forest-100 px-2.5 py-1 text-[11px] font-semibold text-forest-700">
                    <CheckCircle2 className="h-3 w-3" /> Active
                  </span>
                </div>
              </div>

              {/* the math */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                  How the VAT flows
                </p>

                {/* sale */}
                <div className="mt-3 rounded-2xl border border-ink-100 bg-cream-50/60 p-4">
                  <div className="flex flex-col items-start gap-1 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between">
                    <div className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-ink-500" />
                      <span className="text-sm font-semibold text-ink-900">Sale · pair of shoes</span>
                    </div>
                    <span className="font-display text-sm font-700 text-ink-950">RWF 10,000</span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-1 text-sm text-ink-500">
                    <span>Output VAT (18%)</span>
                    <span className="font-display font-700 text-ink-800">RWF 1,800</span>
                  </div>
                </div>

                <div className="my-2 flex justify-center">
                  <ArrowRight className="h-5 w-5 rotate-90 text-ink-300" />
                </div>

                {/* purchase */}
                <div className="rounded-2xl border border-forest-200 bg-forest-50/40 p-4">
                  <div className="flex flex-col items-start gap-1 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-forest-600" />
                      <span className="text-sm font-semibold text-ink-900">
                        Purchase from wholesaler
                      </span>
                    </div>
                    <span className="font-display text-sm font-700 text-ink-950">RWF 6,000</span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-1 text-sm text-forest-700">
                    <span>Input VAT already paid (18%)</span>
                    <span className="font-display font-700 text-forest-800">RWF 1,080</span>
                  </div>
                </div>

                {/* net */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-forest-600 px-4 py-3 text-white">
                  <span className="font-display text-sm font-700">Net VAT owed to RRA</span>
                  <span className="font-display text-lg font-800">RWF 720</span>
                </div>
                <p className="mt-2 text-center text-[11px] text-ink-400">
                  RWF 1,800 output − RWF 1,080 input = RWF 720 owed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
