import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BarChart2, Calendar, Clock, ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Trophy } from 'lucide-react';
import { getComparisonBySlug, comparisons } from '@/data/comparisons';
import { getProductById } from '@/data/products';
import { formatDate } from '@/lib/utils';
import { createAmazonLink } from '@/lib/affiliate';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return { title: 'Comparison Not Found — Yentra' };
  return {
    title: comparison.seoTitle || `${comparison.title} — Yentra`,
    description: comparison.seoDescription || comparison.summary,
  };
}

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) notFound();

  return (
    <div className="py-10">
      <div className="container-site max-w-4xl">
        <Link
          href="/compare"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--brand-primary)] mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> All Comparisons
        </Link>

        <Breadcrumbs
          items={[
            { label: 'Comparisons', href: '/compare' },
            { label: comp.title },
          ]}
        />

        {/* Header */}
        <header className="mb-10">
          <span className="badge badge-cyan mb-3 inline-flex">Head-to-Head Comparison</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight mb-4">
            {comp.title}
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-5">
            {comp.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] border-y border-[var(--border-subtle)] py-3">
            <span className="font-semibold text-[var(--text-secondary)]">Yentra Editorial</span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> Updated {formatDate(comp.updatedAt)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {comp.readingTime} min read
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-10">
          {/* Side-by-Side Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comp.items.map((item, idx) => {
              const product = getProductById(item.productId);
              const displayName = product ? product.name : (idx === 0 ? 'Sony PlayStation 5' : 'Microsoft Xbox Series X');
              const asin = product?.affiliateLinks['amazon-in']?.asin;
              const buyUrl = asin ? createAmazonLink(asin) : 'https://www.amazon.in/';

              return (
                <div
                  key={idx}
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="badge badge-indigo text-xs">
                      Option {idx + 1}
                    </span>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">
                      {displayName}
                    </h2>
                    <div className="p-3 bg-[var(--bg-subtle)] rounded-xl border border-[var(--border-subtle)]">
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">
                        Best For
                      </p>
                      <p className="text-xs font-medium text-[var(--text-secondary)]">
                        {item.bestFor}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                        Key Strategic Strengths
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.whyChooseThis}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                    {product && (
                      <Link
                        href={`/product/${product.slug}`}
                        className="btn-affiliate btn-ghost text-xs px-3 py-2"
                      >
                        Product Details <ArrowRight size={12} />
                      </Link>
                    )}
                    <a
                      href={buyUrl}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="btn-affiliate btn-affiliate-amazon text-xs px-3 py-2"
                    >
                      Check on Amazon India <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Verdict Card */}
          <section className="p-8 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent border border-cyan-500/30 rounded-2xl space-y-3">
            <div className="flex items-center gap-2">
              <Trophy size={20} className="text-amber-500" />
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                The Yentra Verdict
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {comp.verdict}
            </p>
          </section>

          {/* Pre-application disclosure */}
          <div className="p-4 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-xl text-xs text-[var(--text-muted)] leading-relaxed">
            <strong>Affiliate Transparency:</strong> Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you. See our{' '}
            <Link href="/disclosure" className="underline hover:text-[var(--text-primary)]">
              affiliate disclosure
            </Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
