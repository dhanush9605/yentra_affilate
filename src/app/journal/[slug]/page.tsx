import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { getArticleBySlug, articles } from '@/data/articles';
import { getProductById } from '@/data/products';
import { formatDate } from '@/lib/utils';
import { createAmazonLink } from '@/lib/affiliate';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found — Yentra' };
  return {
    title: article.seoTitle || `${article.title} — Yentra`,
    description: article.seoDescription || article.summary,
  };
}

export default async function JournalArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Simple paragraph-based renderer for markdown-style headers & text
  const paragraphs = article.content.split('\n\n');

  return (
    <div className="py-10">
      <div className="container-site max-w-3xl">
        <Link
          href="/journal"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--brand-primary)] mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> All Journal Articles
        </Link>

        <Breadcrumbs
          items={[
            { label: 'Journal', href: '/journal' },
            { label: article.title },
          ]}
        />

        {/* Header */}
        <header className="mb-10">
          <span className="badge badge-emerald mb-3 inline-flex capitalize">
            {article.category.replace('-', ' ')}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-5">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] border-y border-[var(--border-subtle)] py-3">
            <span className="font-semibold text-[var(--text-secondary)]">Yentra Editorial</span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {formatDate(article.publishedAt)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {article.readingTime} min read
            </span>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose-yentra space-y-6">
          {paragraphs.map((p, idx) => {
            if (p.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-2">
                  {p.replace('### ', '')}
                </h3>
              );
            }
            if (p.startsWith('1. ') || p.startsWith('2. ') || p.startsWith('3. ') || p.startsWith('4. ')) {
              return (
                <p key={idx} className="text-[var(--text-secondary)] leading-relaxed text-base">
                  {p}
                </p>
              );
            }
            if (p.startsWith('- ')) {
              return (
                <p key={idx} className="text-[var(--text-secondary)] leading-relaxed text-base pl-4 border-l-2 border-indigo-500/30">
                  {p.replace('- ', '')}
                </p>
              );
            }
            return (
              <p key={idx} className="text-[var(--text-secondary)] leading-relaxed text-base">
                {p}
              </p>
            );
          })}

          {/* Related Gear */}
          {article.relatedProductIds.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                Mentioned Products
              </h2>
              <div className="space-y-4">
                {article.relatedProductIds.map((pId) => {
                  const product = getProductById(pId);
                  if (!product) return null;
                  const asin = product.affiliateLinks['amazon-in']?.asin;
                  const buyUrl = asin ? createAmazonLink(asin) : null;

                  return (
                    <div
                      key={pId}
                      className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div>
                        <p className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-0.5">
                          {product.brand}
                        </p>
                        <h3 className="font-bold text-[var(--text-primary)] text-sm sm:text-base">
                          {product.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/product/${product.slug}`}
                          className="btn-affiliate btn-ghost text-xs px-3 py-2"
                        >
                          Review <ArrowRight size={12} />
                        </Link>
                        {buyUrl && (
                          <a
                            href={buyUrl}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="btn-affiliate btn-affiliate-amazon text-xs px-3 py-2"
                          >
                            Check on Amazon India <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Pre-application disclosure */}
          <div className="mt-10 p-4 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-xl text-xs text-[var(--text-muted)] leading-relaxed">
            <strong>Transparency Notice:</strong> Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you. Read our{' '}
            <Link href="/disclosure" className="underline hover:text-[var(--text-primary)]">
              affiliate disclosure
            </Link>.
          </div>
        </article>
      </div>
    </div>
  );
}
