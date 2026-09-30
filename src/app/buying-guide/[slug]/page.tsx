import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, CheckCircle2, HelpCircle, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { getBuyingGuideBySlug, buyingGuides } from '@/data/buyingGuides';
import { getProductById } from '@/data/products';
import { formatDate } from '@/lib/utils';
import { createAmazonLink } from '@/lib/affiliate';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return buyingGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBuyingGuideBySlug(slug);
  if (!guide) return { title: 'Guide Not Found — Yentra' };
  return {
    title: guide.seoTitle || `${guide.title} — Yentra`,
    description: guide.seoDescription || guide.summary,
  };
}

export default async function BuyingGuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getBuyingGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <div className="py-10">
      <div className="container-site max-w-4xl">
        {/* Back Link */}
        <Link
          href="/buying-guides"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--brand-primary)] mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> All Buying Guides
        </Link>

        <Breadcrumbs
          items={[
            { label: 'Buying Guides', href: '/buying-guides' },
            { label: guide.title },
          ]}
        />

        {/* Header */}
        <header className="mb-10">
          <span className="badge badge-indigo mb-3 inline-flex">Buying Guide</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-5">
            {guide.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] border-y border-[var(--border-subtle)] py-3">
            <span className="flex items-center gap-1.5 font-medium text-[var(--text-secondary)]">
              Yentra Editorial
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> Updated {formatDate(guide.updatedAt)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {guide.readingTime} min read
            </span>
          </div>
        </header>

        {/* Content Body */}
        <article className="prose-yentra space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Introduction</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              {guide.introduction}
            </p>
          </section>

          {/* Key Selection Criteria */}
          <section className="p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-500" />
              What to Look For: Essential Criteria
            </h2>
            <ul className="space-y-3">
              {guide.selectionCriteria.map((criterion, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Recommended Products */}
          {guide.products.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Featured Recommendations</h2>
              <div className="grid grid-cols-1 gap-6">
                {guide.products.map((item) => {
                  const product = getProductById(item.productId);
                  if (!product) return null;
                  const asin = product.affiliateLinks['amazon-in']?.asin;
                  const buyUrl = asin ? createAmazonLink(asin) : null;

                  return (
                    <div
                      key={item.productId}
                      className="p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <span className="badge badge-emerald text-xs mb-1.5 inline-block">
                            {item.bestFor}
                          </span>
                          <h3 className="text-xl font-bold text-[var(--text-primary)]">
                            <Link href={`/product/${product.slug}`} className="hover:text-[var(--brand-primary)] transition-colors">
                              {product.name}
                            </Link>
                          </h3>
                          <p className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mt-0.5">
                            {product.brand} · {product.categoryId}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.whySelected}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                          href={`/product/${product.slug}`}
                          className="btn-affiliate btn-ghost text-xs px-4 py-2"
                        >
                          View Full Details <ArrowRight size={12} />
                        </Link>
                        {buyUrl && (
                          <a
                            href={buyUrl}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="btn-affiliate btn-affiliate-amazon text-xs px-4 py-2"
                          >
                            Check Price on Amazon India <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* FAQs */}
          {guide.faqs.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle size={20} className="text-violet-500" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {guide.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-xl"
                  >
                    <h3 className="font-bold text-sm text-[var(--text-primary)] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Final Editorial Recommendation */}
          <section className="p-6 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-indigo-500/20 rounded-2xl">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              Yentra Editorial Verdict
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {guide.finalRecommendation}
            </p>
          </section>

          {/* Pre-application disclosure */}
          <div className="p-4 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-xl text-xs text-[var(--text-muted)] leading-relaxed">
            <strong>Affiliate Transparency:</strong> Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you. Read our{' '}
            <Link href="/disclosure" className="underline hover:text-[var(--text-primary)]">
              full disclosure
            </Link>.
          </div>
        </article>
      </div>
    </div>
  );
}
