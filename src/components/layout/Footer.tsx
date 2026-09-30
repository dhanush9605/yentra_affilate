import Link from 'next/link';
import {
  Laptop,
  Gamepad2,
  Sparkles,
  LayoutGrid,
  ShieldCheck,
} from 'lucide-react';

const verticalLinks = [
  {
    label: 'Technology',
    icon: Laptop,
    href: '/category/technology',
    links: [
      { label: 'Smartphones', href: '/category/smartphones' },
      { label: 'Laptops', href: '/category/laptops' },
      { label: 'Headphones', href: '/category/headphones' },
      { label: 'Earbuds', href: '/category/earbuds' },
    ],
  },
  {
    label: 'Gaming',
    icon: Gamepad2,
    href: '/category/gaming',
    links: [
      { label: 'Consoles', href: '/category/gaming-consoles' },
      { label: 'Accessories', href: '/category/gaming-accessories' },
      { label: 'Keyboards', href: '/category/gaming-keyboards' },
      { label: 'Monitors', href: '/category/gaming-monitors' },
    ],
  },
  {
    label: 'Beauty',
    icon: Sparkles,
    href: '/category/beauty',
    links: [
      { label: 'Skincare', href: '/category/skincare' },
      { label: 'Haircare', href: '/category/haircare' },
      { label: 'Beauty Tools', href: '/category/beauty-tools' },
      { label: 'Grooming', href: '/category/grooming' },
    ],
  },
  {
    label: 'Lifestyle',
    icon: LayoutGrid,
    href: '/category/lifestyle',
    links: [
      { label: 'Desk Setup', href: '/category/desk-setup' },
      { label: 'Travel', href: '/category/travel' },
      { label: 'Fitness', href: '/category/fitness' },
      { label: 'Everyday Carry', href: '/category/everyday-carry' },
    ],
  },
];

const editorialLinks = [
  { label: 'Reviews', href: '/reviews' },
  { label: 'Buying Guides', href: '/buying-guides' },
  { label: 'Comparisons', href: '/compare' },
  { label: 'Journal', href: '/journal' },
];

const companyLinks = [
  { label: 'About Yentra', href: '/about' },
  { label: 'Affiliate Disclosure', href: '/disclosure' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="mt-auto border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]"
    >
      {/* Main footer grid */}
      <div className="container-site py-14">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-black text-2xl tracking-tight gradient-text w-fit">
              Yentra
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Independent consumer product reviews, comparisons, and buying guides focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.
            </p>
          </div>

          {/* Vertical columns */}
          {verticalLinks.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.label}>
                <Link
                  href={v.href}
                  className="flex items-center gap-1.5 font-semibold text-sm text-[var(--text-primary)] mb-3 hover:text-[var(--brand-primary)] transition-colors"
                >
                  <Icon size={14} />
                  {v.label}
                </Link>
                <ul className="flex flex-col gap-2">
                  {v.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Editorial + Company */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-semibold text-sm text-[var(--text-primary)] mb-3">Editorial</p>
              <ul className="flex flex-col gap-2">
                {editorialLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm text-[var(--text-primary)] mb-3">Trust & Legal</p>
              <ul className="flex flex-col gap-2">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="divider" />

      {/* Bottom bar */}
      <div className="container-site py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-[var(--text-muted)]">
          © {year} Yentra. All rights reserved.
        </p>

        {/* Affiliate notice */}
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] max-w-xl">
          <ShieldCheck size={14} className="flex-shrink-0 text-emerald-500" />
          <span>
            Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you.{' '}
            <Link href="/disclosure" className="underline hover:text-[var(--text-secondary)] transition-colors">
              Affiliate Disclosure
            </Link>.
          </span>
        </div>
      </div>
    </footer>
  );
}
