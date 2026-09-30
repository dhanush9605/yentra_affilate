import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Calendar, ArrowLeft, CheckCircle2, XCircle, ExternalLink, Star, ShieldCheck } from 'lucide-react';
import { getReviewBySlug, reviews } from '@/data/reviews';
import { getProductById } from '@/data/products';
import { formatDate } from '@/lib/utils';
import { createAmazonLink } from '@/lib/affiliate';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return reviews.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) return { title: 'Review Not Found — Yentra' };
  return {
    title: review.seoTitle || `${review.title} — Yentra`,
    description: review.seoDescription || review.summary,
  };
}

export default async function ReviewDetailPage({ params }: Props) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) notFound();

  const product = review.productId ? getProductById(review.productId) : null;
  const asin = product?.affiliateLinks['amazon-in']?.asin;
  const amazonUrl = asin ? createAmazonLink(asin) : null;

  const ratingColor = (score: number) => {
    if (score >= 8.5) return '#10b981';
    if (score >= 7) return '#6366f1';
    if (score >= 5) return '#f59e0b';
    return '#f43f5e';
  };

  return (
    <div className="py-10">
      <div className="container-site max-w-4xl">
        {/* Back */}
        <Link
          href="/reviews"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--brand-primary)] mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> All Reviews
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="badge badge-indigo inline-flex">Yentra Editorial Review</span>
            {review.rating && (
              <span className="badge badge-emerald inline-flex">{review.rating.verdict}</span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight mb-4">
            {review.title}
          </h1>
          <p className="text-lg text-[var(--text-muted)] mb-5 leading-relaxed">{review.summary}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] py-3 border-y border-[var(--border-subtle)]">
            <span className="font-semibold text-[var(--text-secondary)]">Yentra Editorial</span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> Updated {formatDate(review.updatedAt)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {review.readingTime} min read
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Main content */}
          <div className="space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Product Context & Architecture</h2>
              <p className="prose-yentra text-[var(--text-secondary)] leading-relaxed text-base">{review.overview}</p>
            </section>

            {/* Rating dimensions */}
            {review.rating && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">
                    Yentra Editorial Evaluation Scores
                  </h2>
                  <span className="text-[11px] text-[var(--text-muted)] font-medium">
                    (Scale: 1 – 10)
                  </span>
                </div>
                <div className="space-y-3 p-5 bg-[var(--bg-subtle)] rounded-2xl border border-[var(--border-subtle)]">
                  {review.rating.dimensions.map((dim) => (
                    <div key={dim.label}>
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span className="text-[var(--text-secondary)] font-medium">{dim.label}</span>
                        <span className="font-bold" style={{ color: ratingColor(dim.score) }}>
                          {dim.score.toFixed(1)}
                        </span>
                      </div>
                      <div className="h-1.5 bg-[var(--bg-muted)] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${(dim.score / 10) * 100}%`,
                            background: ratingColor(dim.score),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  <p className="text-[11px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
                    Note: These ratings represent Yentra&apos;s internal editorial assessment based on specification research and feature analysis, not customer review aggregations.
                  </p>
                </div>
              </section>
            )}

            {/* Pros & Cons */}
            {product && (
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Key Strengths & Limitations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">Key Strengths</p>
                    <ul className="space-y-2">
                      {product.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl">
                    <p className="text-xs font-semibold text-rose-500 uppercase tracking-widest mb-3">Limitations</p>
                    <ul className="space-y-2">
                      {product.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <XCircle size={14} className="text-rose-400 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* Our Take */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Editorial Assessment</h2>
              <p className="prose-yentra text-[var(--text-secondary)] leading-relaxed text-base">{review.ourTake}</p>
            </section>

            {/* Real World Analysis */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Practical Considerations in India</h2>
              <p className="prose-yentra text-[var(--text-secondary)] leading-relaxed text-base">{review.realWorldAnalysis}</p>
            </section>

            {/* Verdict */}
            <section className="p-6 bg-[var(--bg-subtle)] border border-[var(--brand-primary)]/30 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Star size={18} fill="#f59e0b" stroke="none" />
                <h2 className="text-lg font-bold text-[var(--text-primary)]">Editorial Verdict</h2>
                {review.rating && (
                  <span className="ml-auto text-2xl font-black" style={{ color: ratingColor(review.rating.overall) }}>
                    {review.rating.overall.toFixed(1)}<span className="text-xs text-[var(--text-muted)] font-normal">/10</span>
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{review.verdict}</p>
            </section>

            {/* Affiliate disclosure */}
            <p className="text-xs text-[var(--text-muted)] italic border-t border-[var(--border-subtle)] pt-4">
              Disclosure: Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you. See our{' '}
              <Link href="/disclosure" className="underline hover:text-[var(--brand-primary)]">affiliate disclosure</Link>.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-[calc(var(--navbar-height)+1.5rem)] self-start">
            {/* Overall score */}
            {review.rating && (
              <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl text-center">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-2">
                  Editorial Score
                </p>
                <div
                  className="text-5xl sm:text-6xl font-black mb-1"
                  style={{ color: ratingColor(review.rating.overall) }}
                >
                  {review.rating.overall.toFixed(1)}
                </div>
                <p className="text-xs text-[var(--text-muted)]">out of 10 · Yentra Evaluation</p>
                <p className="text-xs font-semibold text-[var(--brand-primary)] mt-1">
                  {review.rating.verdict}
                </p>
              </div>
            )}

            {/* Buy CTA */}
            {amazonUrl && (
              <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl space-y-3">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">
                  View on Amazon India
                </p>
                {product && (
                  <p className="font-bold text-[var(--text-primary)] text-sm">{product.name}</p>
                )}
                <a
                  href={amazonUrl}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="btn-affiliate btn-affiliate-amazon w-full justify-center text-sm"
                >
                  Check Price on Amazon India <ExternalLink size={13} />
                </a>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                  Check the latest price on Amazon India. Yentra may earn an affiliate commission on qualifying purchases.
                </p>
              </div>
            )}

            {/* Who is it for */}
            {product && (
              <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl space-y-3">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">
                  Target Buyer
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{product.whoIsItFor}</p>
                <hr className="border-[var(--border-subtle)]" />
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">
                  Who Should Avoid
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{product.whoShouldAvoid}</p>
              </div>
            )}

            {/* Quick specs */}
            {product && product.specs.length > 0 && (
              <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                  Manufacturer Specs
                </p>
                <div className="space-y-2">
                  {product.specs.slice(0, 6).map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-2 text-xs">
                      <span className="text-[var(--text-muted)]">{spec.label}</span>
                      <span className="text-[var(--text-secondary)] font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
