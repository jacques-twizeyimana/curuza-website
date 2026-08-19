import { Apple, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';

// Lucide doesn't ship a Linux/Windows glyph we can rely on, so we use small inline SVGs.
function LinuxIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2c-2.3 0-3.6 1.7-3.6 4.2 0 1.2.3 2.1.8 2.9-1.2 1.6-2 4-2.2 6.6-.1 1.4.3 2.6 1 3.4.5.6 1.2.9 1.9.9h8.2c.7 0 1.4-.3 1.9-.9.7-.8 1.1-2 1-3.4-.2-2.6-1-5-2.2-6.6.5-.8.8-1.7.8-2.9C15.6 3.7 14.3 2 12 2Zm-1.2 4.3c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9Zm2.4 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9Z" />
    </svg>
  );
}
function WindowsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3 5.6 11 4.4v7.1H3V5.6Zm0 7.5h8v7.1L3 18.4v-5.3Zm9-8.8L21 3v8.5h-9V4.3Zm0 8.8h9V21l-9-1.3v-6.6Z" />
    </svg>
  );
}

const platforms = [
  {
    name: 'macOS',
    icon: Apple,
    detail: 'Universal · Apple Silicon & Intel',
    size: '92 MB',
  },
  {
    name: 'Windows',
    icon: WindowsIcon,
    detail: 'Windows 10 & 11 · 64-bit',
    size: '88 MB',
  },
  {
    name: 'Linux',
    icon: LinuxIcon,
    detail: '.deb & .AppImage',
    size: '95 MB',
  },
];

export function Download() {
  return (
    <section id="download" className="section-pad bg-forest-950 text-cream-50">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-forest-700 bg-forest-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-forest-200">
            <Monitor className="h-3.5 w-3.5" />
            Desktop app
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-700 tracking-tight text-white text-balance sm:text-4xl">
            Download Curuza — free to start
          </h2>
          <p className="reveal mt-4 text-lg text-forest-200 text-balance">
            Works on the computer you already have. No internet required to run it, no
            monthly fee to try it.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {platforms.map((p) => (
            <a
              key={p.name}
              href="#download"
              className="group flex flex-col items-center rounded-3xl border border-forest-800 bg-forest-900/60 p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-forest-600 hover:bg-forest-900 sm:rounded-4xl md:p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800 text-forest-100 transition-colors group-hover:bg-forest-600 group-hover:text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 font-display text-lg font-700 text-white">{p.name}</p>
              <p className="mt-1 text-xs text-forest-300">{p.detail}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-forest-700 px-4 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-forest-500">
                Download
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <p className="mt-2 text-[11px] text-forest-400">{p.size}</p>
            </a>
          ))}
        </div>

        <div className="reveal mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-forest-200">
          {[
            'Free to try',
            'No credit card',
            'Kinyarwanda & English',
            'Offline-first',
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-forest-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
