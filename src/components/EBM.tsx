import { CheckCircle2, Receipt, Printer, Wifi, WifiOff } from 'lucide-react';

export function EBM() {
  return (
    <section id="ebm-invoicing" className="section-pad">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <div className="reveal">
            <span className="eyebrow">EBM invoices</span>
            <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-950 text-balance sm:text-4xl">
              Compliant invoices, without the extra step
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Every sale you ring up can produce an RRA-compliant EBM invoice on the spot.
              No separate device, no end-of-day reconciliation — your sales records and your
              tax records are the same thing.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Issue EBM invoices directly from the POS in one tap',
                'Works offline and syncs to RRA when you reconnect',
                'Automatic invoice numbering and secure storage',
                'Reprint or reprint and refund without breaking the chain',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-600" />
                  <span className="text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* visual */}
          <div className="reveal relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-forest-100 to-amber-100/50 blur-2xl" />
            <div className="overflow-hidden rounded-4xl border border-ink-100 bg-white p-6 shadow-lift">
              {/* invoice header */}
              <div className="flex items-center justify-between border-b border-ink-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-600 text-white">
                    <Receipt className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-700 text-ink-950">Curuza Shop</p>
                    <p className="text-[11px] text-ink-400">TIN 400123456</p>
                  </div>
                </div>
                <span className="rounded-full bg-forest-50 px-2.5 py-1 text-[11px] font-semibold text-forest-700">
                  EBM · Valid
                </span>
              </div>

              {/* line items */}
              <div className="mt-4 space-y-2.5">
                {[
                  { name: 'Primus 72cl', qty: 2, price: '1,400' },
                  { name: 'Mutzig 65cl', qty: 1, price: '1,800' },
                  { name: 'Amahoro Juice', qty: 3, price: '2,100' },
                ].map((it) => (
                  <div
                    key={it.name}
                    className="flex items-center justify-between rounded-xl bg-cream-50/70 px-3 py-2.5"
                  >
                    <div>
                      <p className="text-sm font-medium text-ink-900">{it.name}</p>
                      <p className="text-[11px] text-ink-400">Qty {it.qty}</p>
                    </div>
                    <p className="font-display text-sm font-700 text-ink-900">
                      {it.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* totals */}
              <div className="mt-4 space-y-1.5 border-t border-ink-100 pt-4 text-sm">
                <div className="flex justify-between text-ink-500">
                  <span>Subtotal</span>
                  <span>RWF 5,300</span>
                </div>
                <div className="flex justify-between text-ink-500">
                  <span>VAT (18%)</span>
                  <span>RWF 954</span>
                </div>
                <div className="flex justify-between pt-1 font-display text-base font-800 text-ink-950">
                  <span>Total</span>
                  <span>RWF 6,254</span>
                </div>
              </div>

              {/* footer chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1.5 text-xs font-medium text-ink-600">
                  <Printer className="h-3.5 w-3.5" /> Print receipt
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1.5 text-xs font-medium text-forest-700">
                  <Wifi className="h-3.5 w-3.5" /> Synced to RRA
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
                  <WifiOff className="h-3.5 w-3.5" /> Offline-ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
