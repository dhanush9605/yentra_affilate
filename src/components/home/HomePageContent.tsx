'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, BookOpen, Laptop, Gamepad2, Sparkles, LayoutGrid } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import { getLatestReviews } from '@/data/reviews';
import { getFeaturedCategories } from '@/data/categories';
import ProductCard from '@/components/product/ProductCard';
import ReviewCard from '@/components/review/ReviewCard';
import MicroSlats from '@/components/ui/MicroSlats';


// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '560px' }}>
      {/* MicroSlats WebGL background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <MicroSlats
          preset="swell"
          color="#4f46e5"
          glintColor="#818cf8"
          backgroundColor="#080812"
          slatWidth={8}
          slatHeight={22}
          gap={4}
          roundness={0.8}
          interactive
          cursorStrength={1.2}
          cursorSize={55}
          swirl={0.3}
          trail={1.8}
          lean={0.2}
          intro
          introDuration={1.8}
        />
      </div>

      {/* Dark overlay for readability and text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 95% 75% at 50% 45%, rgba(8, 8, 16, 0.65) 0%, rgba(8, 8, 16, 0.85) 60%, var(--bg-base) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container-site relative py-24 sm:py-32 text-center" style={{ zIndex: 2 }}>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-indigo-300 bg-indigo-950/80 border border-indigo-500/40 shadow-sm backdrop-blur-md mb-6">
          <Sparkles size={12} className="text-indigo-400" />
          Independent · Unbiased · Honest
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
          Discover products
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            worth your money.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Expert reviews, buying guides, and comparisons for Indian buyers — tech,
          gaming, beauty, and lifestyle. Honest advice. Amazon India links.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/reviews" className="btn-affiliate btn-primary text-sm px-6 py-3 shadow-lg shadow-indigo-500/25">
            Browse Reviews <ArrowRight size={16} />
          </Link>
          <Link
            href="/buying-guides"
            className="btn-affiliate text-sm px-6 py-3 font-semibold text-slate-100 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/70 hover:border-slate-400 rounded-full backdrop-blur-md transition-all shadow-sm"
          >
            Buying Guides
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap gap-6 justify-center">
          {[
            { icon: Shield, label: 'No paid reviews' },
            { icon: BookOpen, label: 'Editorial independence' },
            { icon: TrendingUp, label: 'India-focused' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
              <Icon size={15} className="text-indigo-400" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── Categories ─────────────────────────────────────────────────────────────

const VERTICAL_META = [
  {
    id: 'technology',
    label: 'Technology',
    icon: Laptop,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    href: '/category/technology',
    desc: 'Phones, laptops, headphones & more',
  },
  {
    id: 'gaming',
    label: 'Gaming',
    icon: Gamepad2,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    href: '/category/gaming',
    desc: 'Consoles, peripherals & accessories',
  },
  {
    id: 'beauty',
    label: 'Beauty',
    icon: Sparkles,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    href: '/category/beauty',
    desc: 'Skincare, haircare & beauty tools',
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    icon: LayoutGrid,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    href: '/category/lifestyle',
    desc: 'Desk setup, travel & everyday carry',
  },
];

function CategoryGrid() {
  return (
    <section className="py-16">
      <div className="container-site">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">
              Explore
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
              Browse by category
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {VERTICAL_META.map((v) => {
            const Icon = v.icon;
            return (
              <Link
                key={v.id}
                href={v.href}
                className="group p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${v.bg} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={22} className={v.color} />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--brand-primary)] transition-colors">
                  {v.label}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Products ───────────────────────────────────────────────────────

function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 bg-[var(--bg-subtle)]">
      <div className="container-site">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">
              Hand-picked
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
              Featured products
            </h2>
          </div>
          <Link
            href="/reviews"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link href="/reviews" className="btn-affiliate btn-ghost text-sm px-5 py-2.5">
            View all reviews <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Latest Reviews ──────────────────────────────────────────────────────────

function LatestReviews() {
  const reviews = getLatestReviews(3);

  return (
    <section className="py-16">
      <div className="container-site">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">
              Latest
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
              Recent reviews
            </h2>
          </div>
          <Link
            href="/reviews"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
          >
            All reviews <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Editorial Promise ───────────────────────────────────────────────────────

function EditorialPromise() {
  const pillars = [
    {
      title: 'No paid placements',
      body: 'We never accept money to feature or positively review a product. Our rankings are purely editorial.',
      color: 'border-indigo-500/30 bg-indigo-500/5',
      badge: 'badge-indigo',
    },
    {
      title: 'Transparent disclosures',
      body: 'We use affiliate links — clearly labelled — which may earn us a commission if you click and buy. This never influences our scores.',
      color: 'border-violet-500/30 bg-violet-500/5',
      badge: 'badge-violet',
    },
    {
      title: 'Regularly updated',
      body: 'We revisit and update reviews when products receive significant firmware changes, price drops, or better alternatives emerge.',
      color: 'border-cyan-500/30 bg-cyan-500/5',
      badge: 'badge-cyan',
    },
  ];

  return (
    <section className="py-16 bg-[var(--bg-subtle)]">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-3">
            Our editorial promise
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            Yentra exists to help you make better buying decisions — not to sell you things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`p-6 rounded-2xl border ${p.color} flex flex-col gap-3`}
            >
              <span className={`badge ${p.badge} self-start`}>Promise</span>
              <h3 className="font-bold text-[var(--text-primary)]">{p.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page Export ─────────────────────────────────────────────────────────────

export default function HomePageContent() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <LatestReviews />
      <EditorialPromise />
    </>
  );
}
