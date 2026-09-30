'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Laptop,
  Gamepad2,
  Sparkles,
  LayoutGrid,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Nav structure
// ---------------------------------------------------------------------------

const verticals = [
  {
    id: 'technology',
    label: 'Technology',
    icon: Laptop,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    href: '/category/technology',
    categories: [
      { label: 'Smartphones', href: '/category/smartphones' },
      { label: 'Laptops', href: '/category/laptops' },
      { label: 'Headphones', href: '/category/headphones' },
      { label: 'Earbuds', href: '/category/earbuds' },
      { label: 'Monitors', href: '/category/monitors' },
      { label: 'Tablets', href: '/category/tablets' },
      { label: 'Smartwatches', href: '/category/smartwatches' },
      { label: 'Smart Home', href: '/category/smart-home' },
    ],
    featured: { label: 'Best Laptops (2026)', href: '/buying-guide/best-laptops', badge: 'New Guide' },
  },
  {
    id: 'gaming',
    label: 'Gaming',
    icon: Gamepad2,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    href: '/category/gaming',
    categories: [
      { label: 'Gaming Consoles', href: '/category/gaming-consoles' },
      { label: 'Gaming Accessories', href: '/category/gaming-accessories' },
      { label: 'Gaming Keyboards', href: '/category/gaming-keyboards' },
      { label: 'Gaming Monitors', href: '/category/gaming-monitors' },
    ],
    featured: { label: 'PS5 vs Xbox Series X', href: '/compare/ps5-vs-xbox-series-x', badge: 'Editor\'s Pick' },
  },
  {
    id: 'beauty',
    label: 'Beauty',
    icon: Sparkles,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    href: '/category/beauty',
    categories: [
      { label: 'Skincare', href: '/category/skincare' },
      { label: 'Haircare', href: '/category/haircare' },
      { label: 'Beauty Tools', href: '/category/beauty-tools' },
      { label: 'Grooming', href: '/category/grooming' },
      { label: 'Fragrance', href: '/category/fragrance' },
    ],
    featured: { label: 'Best Face Serums Guide', href: '/buying-guide/best-serums', badge: 'Trending' },
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    icon: LayoutGrid,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    href: '/category/lifestyle',
    categories: [
      { label: 'Desk Setup', href: '/category/desk-setup' },
      { label: 'Travel', href: '/category/travel' },
      { label: 'Fitness', href: '/category/fitness' },
      { label: 'Everyday Carry', href: '/category/everyday-carry' },
    ],
    featured: { label: 'Ultimate Desk Setup Guide', href: '/buying-guide/desk-setup', badge: 'Popular' },
  },
];

const quickLinks = [
  { label: 'Reviews', href: '/reviews' },
  { label: 'Buying Guides', href: '/buying-guides' },
  { label: 'Comparisons', href: '/compare' },
  { label: 'Journal', href: '/journal' },
];

// ---------------------------------------------------------------------------
// Theme toggle
// ---------------------------------------------------------------------------

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-muted)]">
        <div className="w-4 h-4 rounded-full shimmer" />
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      id="theme-toggle"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-default)] transition-all duration-200 hover:scale-105 active:scale-95"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Mega Menu Panel
// ---------------------------------------------------------------------------

interface MegaMenuProps {
  vertical: typeof verticals[number];
  onClose: () => void;
}

function MegaMenu({ vertical, onClose }: MegaMenuProps) {
  const Icon = vertical.icon;

  return (
    <div
      className="absolute top-full left-0 right-0 mt-0 animate-slide-down"
      onMouseLeave={onClose}
    >
      {/* Separator line */}
      <div className="h-px bg-[var(--border-subtle)]" />

      <div className="glass-card shadow-xl">
        <div className="container-site py-6">
          <div className="grid grid-cols-[200px_1fr_220px] gap-8">
            {/* Left: vertical hero */}
            <div className="flex flex-col justify-between">
              <div>
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center mb-3', vertical.bg)}>
                  <Icon size={20} className={vertical.color} />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] text-base mb-1">{vertical.label}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  Expert reviews and buying guides for {vertical.label.toLowerCase()} products.
                </p>
              </div>
              <Link
                href={vertical.href}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-primary)] hover:underline mt-4"
              >
                Browse all <ExternalLink size={12} />
              </Link>
            </div>

            {/* Centre: category grid */}
            <div>
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Categories
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                {vertical.categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={onClose}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors py-0.5"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: featured */}
            <div>
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Featured
              </p>
              <Link
                href={vertical.featured.href}
                onClick={onClose}
                className="group block p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] hover:border-[var(--brand-primary)]/30 hover:bg-[var(--bg-muted)] transition-all"
              >
                <span className={cn('badge mb-2', 'badge-indigo')}>{vertical.featured.badge}</span>
                <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors leading-snug">
                  {vertical.featured.label}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Search Bar
// ---------------------------------------------------------------------------

function SearchBar({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'Enter') {
      const q = inputRef.current?.value.trim();
      if (q) { router.push(`/search?q=${encodeURIComponent(q)}`); onClose(); }
    }
  }

  return (
    <div className="absolute inset-x-0 top-0 z-50 h-[var(--navbar-height)] bg-[var(--bg-base)] border-b border-[var(--border-subtle)] animate-slide-down flex items-center">
      <div className="container-site flex items-center gap-3">
        <Search size={18} className="text-[var(--text-muted)] flex-shrink-0" />
        <input
          ref={inputRef}
          id="site-search"
          type="search"
          placeholder="Search reviews, products, buying guides…"
          className="flex-1 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm outline-none py-2"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={onClose}
          aria-label="Close search"
          className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile Drawer
// ---------------------------------------------------------------------------

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-80 bg-[var(--bg-base)] border-l border-[var(--border-subtle)] shadow-xl flex flex-col animate-scale-in overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)]">
          <Link href="/" onClick={onClose} className="font-bold text-lg tracking-tight gradient-text">
            Yentra
          </Link>
          <button onClick={onClose} className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <X size={20} />
          </button>
        </div>

        {/* Quick links */}
        <div className="px-5 py-4 border-b border-[var(--border-subtle)]">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">Explore</p>
          <div className="flex flex-col gap-1">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={onClose}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1.5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Verticals */}
        <div className="flex-1 px-5 py-4 space-y-6">
          {verticals.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.id}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} className={v.color} />
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">{v.label}</p>
                </div>
                <div className="flex flex-col gap-1 pl-1">
                  {v.categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={onClose}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--brand-primary)] py-1 transition-colors"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Main Navbar
// ---------------------------------------------------------------------------

export default function Navbar() {
  const [activeVertical, setActiveVertical] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Close mega menu on route change
  useEffect(() => {
    setActiveVertical(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Scrolled shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveVertical(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Keyboard: ESC closes mega menu / search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVertical(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const activeVerticalData = verticals.find((v) => v.id === activeVertical) ?? null;

  return (
    <>
      <header
        id="site-navbar"
        ref={navRef}
        className={cn(
          'navbar bg-[var(--bg-base)]',
          scrolled && 'navbar-scrolled',
        )}
      >
        <div className="container-site h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            id="navbar-logo"
            className="font-black text-xl tracking-tight gradient-text flex-shrink-0 select-none"
          >
            Yentra
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
            {verticals.map((v) => {
              const isActive = activeVertical === v.id;
              return (
                <button
                  key={v.id}
                  id={`nav-${v.id}`}
                  className={cn(
                    'flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150',
                    isActive
                      ? 'bg-[var(--bg-muted)] text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]',
                  )}
                  onMouseEnter={() => setActiveVertical(v.id)}
                  onClick={() => setActiveVertical(isActive ? null : v.id)}
                  aria-expanded={isActive}
                  aria-haspopup="true"
                >
                  {v.label}
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform duration-200', isActive && 'rotate-180')}
                  />
                </button>
              );
            })}

            <div className="w-px h-4 bg-[var(--border-subtle)] mx-2" />

            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)] transition-all duration-150"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              id="navbar-search-btn"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-default)] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Search size={16} />
            </button>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile menu */}
            <button
              id="navbar-mobile-menu-btn"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {activeVerticalData && (
          <MegaMenu
            vertical={activeVerticalData}
            onClose={() => setActiveVertical(null)}
          />
        )}

        {/* Search overlay */}
        {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
      </header>

      {/* Mobile drawer (outside header for proper z-index stacking) */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
