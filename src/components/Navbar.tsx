import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Taxes', href: '#taxes' },
  { label: 'Threshold', href: '#threshold' },
  { label: 'Download', href: '#download' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-100 bg-cream-50/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-18">
        <a href="#top" className="flex items-center" aria-label="Curuza home">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-forest-50 hover:text-forest-700"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#download" className="btn-ghost">
            Sign in
          </a>
          <a href="#download" className="btn-primary">
            Download
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-cream-50/95 backdrop-blur-md md:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-ink-800 hover:bg-forest-50 hover:text-forest-700"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a href="#download" onClick={() => setOpen(false)} className="btn-ghost flex-1">
                Sign in
              </a>
              <a href="#download" onClick={() => setOpen(false)} className="btn-primary flex-1">
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
