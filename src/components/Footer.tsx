import { Logo } from './Logo';

const cols = [
  {
    title: 'Product',
    links: ['Features', 'Taxes', 'Threshold', 'Download', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Help center', 'VAT guide', 'CIT guide', 'PIT guide', 'Community'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'RRA compliance'],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-cream-50">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              The Rwanda-first POS that keeps your shop running and your taxes ready —
              all from the same everyday records.
            </p>
            <div className="mt-5 flex gap-2">
              {['Kinyarwanda', 'English', 'Français'].map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-ink-600 transition-colors hover:text-forest-700"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Curuza. Made in Kigali for Rwanda.
          </p>
          <p className="text-xs text-ink-400">
            Not affiliated with the Rwanda Revenue Authority. Always confirm current tax rules.
          </p>
        </div>
      </div>
    </footer>
  );
}
