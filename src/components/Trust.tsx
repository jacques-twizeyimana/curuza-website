import { ShieldCheck, WifiOff, Globe, Lock, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: WifiOff,
    title: 'Works offline',
    body: 'Power cuts happen. Curuza keeps selling and issues invoices even without internet — then syncs when you reconnect.',
  },
  {
    icon: Globe,
    title: 'Kinyarwanda first',
    body: 'Built and tested with Rwandan shopkeepers. The interface speaks your language, not just English.',
  },
  {
    icon: Lock,
    title: 'Your data stays yours',
    body: 'Records live on your machine, encrypted and backed up. No cloud lock-in, no monthly data fees.',
  },
  {
    icon: ShieldCheck,
    title: 'RRA-aligned',
    body: 'EBM invoicing and tax formats follow current Rwanda Revenue Authority requirements.',
  },
];

export function Trust() {
  return (
    <section id="why-curuza" className="section-pad">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">Why Curuza fits Rwanda</span>
          <h2 className="reveal mt-5 font-display text-3xl font-700 tracking-tight text-ink-950 text-balance sm:text-4xl">
            Built for the way Rwanda actually works
          </h2>
          <p className="reveal mt-4 text-lg text-ink-600 text-balance">
            Imported software assumes always-on internet, stable power and English-only users.
            Curuza assumes none of that.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal card card-hover group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 transition-all duration-300 group-hover:bg-forest-600 group-hover:text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-700 text-ink-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.body}</p>
            </div>
          ))}
        </div>

        {/* testimonial-ish quote band */}
        <div className="reveal mx-auto mt-14 max-w-3xl rounded-4xl border border-ink-100 bg-gradient-to-br from-cream-100 to-white p-8 text-center shadow-soft sm:p-12">
          <HeartHandshake className="mx-auto h-8 w-8 text-forest-600" />
          <p className="mt-4 font-display text-xl font-600 text-ink-900 text-balance sm:text-2xl">
            "Before Curuza, tax season meant three days of paper and panic. Now I just open
            the app and the return is already there."
          </p>
          <p className="mt-4 text-sm font-medium text-ink-500">
            — Aline M., boutique owner, Kigali
          </p>
        </div>
      </div>
    </section>
  );
}
