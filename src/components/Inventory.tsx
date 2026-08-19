import { Package, AlertTriangle, ArrowDownUp, Scissors, CheckCircle2 } from 'lucide-react';

const items = [
  { name: 'Primus 72cl', cartons: 8, units: 192, status: 'ok' },
  { name: 'Mutzig 65cl', cartons: 2, units: 48, status: 'low' },
  { name: 'Amahoro Juice', cartons: 14, units: 336, status: 'ok' },
  { name: 'Akabanga', cartons: 1, units: 12, status: 'critical' },
];

export function Inventory() {
  return (
    <section id="inventory" className="section-pad bg-white">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* visual */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-amber-100/60 to-forest-100 blur-2xl" />
            <div className="overflow-hidden rounded-4xl border border-ink-100 bg-cream-50/40 p-6 shadow-lift">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-600 text-white">
                    <Package className="h-4 w-4" />
                  </div>
                  <p className="font-display text-sm font-700 text-ink-950">Inventory</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-ink-500 shadow-soft">
                  <ArrowDownUp className="h-3 w-3" /> Cartons / units
                </span>
              </div>

              {/* carton split visual */}
              <div className="mt-4 rounded-2xl border border-forest-200 bg-forest-50/60 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-forest-800">
                  <Scissors className="h-3.5 w-3.5" />
                  Split a carton into units
                </div>
                <div className="mt-3 flex items-center gap-3">
                  {/* carton */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-20 items-center justify-center rounded-lg border-2 border-forest-300 bg-white">
                      <span className="font-display text-xs font-700 text-forest-700">1 carton</span>
                    </div>
                    <span className="mt-1 text-[10px] text-forest-600">Soda · 24 units</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-forest-500">
                    <span className="text-lg">→</span>
                  </div>
                  {/* units grid */}
                  <div className="grid flex-1 grid-cols-6 gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-5 w-5 rounded-md bg-forest-400/80"
                        title={`Unit ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-[11px] text-forest-700">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  1 carton of Soda becomes 24 sellable units — books stay aligned.
                </p>
              </div>

              <div className="mt-4 space-y-2.5">
                {items.map((it) => {
                  const tone =
                    it.status === 'critical'
                      ? 'border-amber-300 bg-amber-50'
                      : it.status === 'low'
                      ? 'border-amber-200 bg-amber-50/50'
                      : 'border-ink-100 bg-white';
                  return (
                    <div
                      key={it.name}
                      className={`flex items-center justify-between rounded-2xl border ${tone} px-4 py-3`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{it.name}</p>
                        <p className="text-[11px] text-ink-400">
                          {it.cartons} cartons · {it.units} units
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="hidden w-24 sm:block">
                          <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100">
                            <div
                              className={`h-full rounded-full ${
                                it.status === 'critical'
                                  ? 'bg-amber-500'
                                  : it.status === 'low'
                                  ? 'bg-amber-400'
                                  : 'bg-forest-500'
                              }`}
                              style={{
                                width:
                                  it.status === 'critical'
                                    ? '12%'
                                    : it.status === 'low'
                                    ? '35%'
                                    : '78%',
                              }}
                            />
                          </div>
                        </div>
                        {it.status !== 'ok' && (
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-forest-200 bg-forest-50 px-4 py-3">
                <p className="text-xs font-semibold text-forest-800">
                  2 items running low — reorder suggested
                </p>
                <span className="rounded-xl bg-forest-600 px-3 py-1 text-xs font-semibold text-white">
                  Create PO
                </span>
              </div>
            </div>
          </div>

          {/* copy */}
          <div className="reveal order-1 lg:order-2">
            <span className="eyebrow">Inventory that speaks Rwandan</span>
            <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-950 text-balance sm:text-4xl">
              Buy by the carton. Sell by the unit.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Small retailers in Rwanda buy in cartons and sell in units. With Curuza, you
              split a carton of Soda into 24 individual units with one tap — and every sale
              automatically decrements the right amount, so your books stay aligned. No math,
              no mistakes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Carton splitting',
                  body: 'Split a carton into its units once; Curuza tracks both from then on.',
                },
                {
                  title: 'Low-stock alerts',
                  body: 'Get told before you run out, not when a customer asks.',
                },
                {
                  title: 'Supplier records',
                  body: 'Keep purchase orders and costs tied to the right supplier.',
                },
                {
                  title: 'Cost-aware profit',
                  body: 'See real margins because every unit carries its purchase cost.',
                },
              ].map((b) => (
                <div key={b.title} className="rounded-2xl border border-ink-100 bg-cream-50/50 p-4">
                  <p className="font-display text-sm font-700 text-ink-950">{b.title}</p>
                  <p className="mt-1 text-sm text-ink-600">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
