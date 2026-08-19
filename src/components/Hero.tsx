import {
  ArrowRight,
  Receipt,
  ShieldCheck,
  TrendingUp,
  Package,
  AlertTriangle,
  CheckCircle2,
  Download,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -top-24 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-forest-200/40 blur-3xl" />
        <div className="absolute right-[-10%] top-40 h-[360px] w-[360px] rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-forest-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-600" />
            </span>
            Built for Rwanda
          </span>

          <h1 className="reveal mt-6 font-display text-4xl font-800 leading-[1.05] tracking-tight text-ink-950 text-balance sm:text-5xl lg:text-6xl">
            Run your shop.
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-forest-600 to-forest-500 bg-clip-text text-transparent">
              Stay ready for taxes.
            </span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 text-balance">
            Curuza is the point-of-sale built for Rwanda. Sell, track stock,
            issue EBM invoices and know exactly when to register, file and pay
            your taxes — all from the same everyday records.
          </p>

          <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#download" className="btn-primary group">
              <Download className="h-4 w-4" />
              Download free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="btn-ghost">
              See how it works
            </a>
          </div>

          <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-forest-600" /> No internet
              needed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-forest-600" /> Works in
              Kinyarwanda
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-forest-600" /> RRA-ready
              invoices
            </span>
          </div>
        </div>

        {/* Product mockup */}
        <div className="reveal relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-x-8 -top-6 bottom-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-forest-100/60 to-transparent blur-2xl" />
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-4xl border border-ink-100 bg-white shadow-lift">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-ink-100 bg-cream-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-forest-300" />
        <span className="h-3 w-3 rounded-full bg-ink-200" />
        <div className="mx-auto hidden items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-ink-500 shadow-soft sm:flex">
          <ShieldCheck className="h-3.5 w-3.5 text-forest-600" />
          Tax-ready · 3 months to VAT threshold
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0">
        {/* sidebar */}
        <aside className="col-span-3 hidden border-r border-ink-100 bg-cream-50/50 p-4 sm:block">
          <div className="space-y-1">
            {[
              { icon: TrendingUp, label: "Dashboard", active: true },
              { icon: Receipt, label: "Sales" },
              { icon: Package, label: "Inventory" },
              { icon: ShieldCheck, label: "Taxes" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium ${
                  item.active ? "bg-forest-100 text-forest-800" : "text-ink-500"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <AlertTriangle className="h-3.5 w-3.5" />
              VAT reminder
            </div>
            <p className="mt-1 text-xs text-amber-700">
              You're on track to cross RWF 5M. Plan registration soon.
            </p>
          </div>
        </aside>

        {/* main */}
        <div className="col-span-12 p-5 sm:col-span-9 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                Today
              </p>
              <p className="font-display text-lg font-700 text-ink-950">
                Good morning, Aline
              </p>
            </div>
            <div className="hidden items-center gap-2 rounded-full bg-forest-50 px-3 py-1.5 text-xs font-semibold text-forest-700 sm:flex">
              <span className="h-2 w-2 rounded-full bg-forest-500" />
              EBM connected
            </div>
          </div>

          {/* kpis */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              {
                label: "Today",
                value: "RWF 84,300",
                sub: "+12%",
                tone: "forest",
              },
              {
                label: "This week",
                value: "RWF 612,000",
                sub: "+8%",
                tone: "ink",
              },
              {
                label: "Stock value",
                value: "RWF 2.4M",
                sub: "−3%",
                tone: "amber",
              },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-2xl border border-ink-100 bg-cream-50/60 p-3"
              >
                <p className="text-[11px] font-medium text-ink-400">
                  {k.label}
                </p>
                <p className="mt-1 font-display text-base font-700 text-ink-950 sm:text-lg">
                  {k.value}
                </p>
                <p
                  className={`text-[11px] font-semibold ${
                    k.tone === "amber" ? "text-amber-600" : "text-forest-600"
                  }`}
                >
                  {k.sub}
                </p>
              </div>
            ))}
          </div>

          {/* chart + side card */}
          <div className="mt-4 grid grid-cols-12 gap-3">
            <div className="col-span-12 rounded-2xl border border-ink-100 bg-white p-4 sm:col-span-7">
              <p className="text-xs font-semibold text-ink-500">
                Sales this week
              </p>
              <div className="mt-3 flex h-28 items-end gap-2">
                {[40, 55, 35, 70, 60, 90, 75].map((h, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-forest-500 to-forest-300"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 rounded-2xl border border-forest-200 bg-forest-50 p-4 sm:col-span-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-forest-700" />
                <p className="text-xs font-semibold text-forest-800">
                  Tax readiness
                </p>
              </div>
              <p className="mt-2 font-display text-3xl font-800 text-forest-800">
                92%
              </p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-forest-100">
                <div className="h-full w-[92%] rounded-full bg-forest-500" />
              </div>
              <p className="mt-2 text-xs text-forest-700">
                VAT filed · CIT on track · 1 document pending
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
