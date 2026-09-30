import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { getAllBuyingGuides } from '@/data/buyingGuides';

export const metadata: Metadata = {
  title: 'Buying Guides — Yentra',
  description:
    'Comprehensive, research-backed buying guides to help Indian consumers select the right laptops, desk gear, beauty formulations, and tech.',
};

export default function BuyingGuidesPage() {
  const guides = getAllBuyingGuides();

  return (
    <div className="py-14">
      <div className="container-site max-w-5xl">
        <div className="mb-12">
          <span className="badge badge-violet mb-4 inline-flex">Buying Advice</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
            Product Buying Guides
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl">
            In-depth guides that break down specifications, trade-offs, and critical buying criteria for Indian shoppers.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--brand-primary)]/50 rounded-2xl flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-indigo text-xs">
                    {guide.categoryId}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                    <Clock size={12} /> {guide.readingTime} min read
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors mb-3 leading-snug">
                  <Link href={`/buying-guide/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-6">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--text-secondary)]">
                  Yentra Editorial
                </span>
                <Link
                  href={`/buying-guide/${guide.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-primary)] group-hover:gap-2 transition-all"
                >
                  Read Guide <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="p-6 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles size={20} className="text-indigo-500 flex-shrink-0" />
            <p className="text-sm text-[var(--text-secondary)]">
              Looking for individual product teardowns and scores? Browse our standalone reviews.
            </p>
          </div>
          <Link href="/reviews" className="btn-affiliate btn-ghost text-xs whitespace-nowrap">
            Browse Reviews <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
