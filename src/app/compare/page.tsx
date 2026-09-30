import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart2, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { getAllComparisons } from '@/data/comparisons';

export const metadata: Metadata = {
  title: 'Product Comparisons — Yentra',
  description:
    'Side-by-side product comparisons to help Indian shoppers decide between top alternatives across technology and gaming.',
};

export default function ComparePage() {
  const compList = getAllComparisons();

  return (
    <div className="py-14">
      <div className="container-site max-w-5xl">
        <div className="mb-12">
          <span className="badge badge-cyan mb-4 inline-flex">Comparisons</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
            Product Comparisons
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl">
            Struggling to choose between two leading options? Our head-to-head comparisons cut through the marketing noise to clarify practical trade-offs.
          </p>
        </div>

        {/* Comparisons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {compList.map((comp) => (
            <article
              key={comp.id}
              className="p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--brand-primary)]/50 rounded-2xl flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-cyan text-xs">
                    Head-to-Head
                  </span>
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                    <Clock size={12} /> {comp.readingTime} min read
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors mb-3 leading-snug">
                  <Link href={`/compare/${comp.slug}`}>
                    {comp.title}
                  </Link>
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-6">
                  {comp.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--text-secondary)]">
                  Yentra Editorial
                </span>
                <Link
                  href={`/compare/${comp.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-primary)] group-hover:gap-2 transition-all"
                >
                  View Comparison <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Cross-link to reviews */}
        <div className="p-6 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles size={20} className="text-cyan-500 flex-shrink-0" />
            <p className="text-sm text-[var(--text-secondary)]">
              Prefer deep-dive analyses on individual products? Explore our full library of editorial reviews.
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
