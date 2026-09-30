import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ExternalLink, CheckCircle2, XCircle } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import { getReviewByProductId } from '@/data/reviews';
import { getCategoryById } from '@/data/categories';
import { formatDate } from '@/lib/utils';
import { createAmazonLink } from '@/lib/affiliate';
import ReviewCard from '@/components/review/ReviewCard';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found — Yentra' };
  return {
    title: `${product.name} — Yentra`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const review = getReviewByProductId(product.id);
  const category = getCategoryById(product.categoryId);
  const related = getRelatedProducts(product.relatedProductIds);

  const asin = product.affiliateLinks['amazon-in']?.asin;
  const amazonUrl = asin ? createAmazonLink(asin) : null;

  return (
    <div className="py-10">
      <div className="container-site max-w-5xl">
        <Breadcrumbs
          items={[
            ...(category?.vertical ? [{ label: category.vertical, href: `/category/${category.vertical}` }] : []),
            ...(category ? [{ label: category.name, href: `/category/${category.id}` }] : []),
            { label: product.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          {/* Main */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">
                {product.brand}
              </p>
              <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] mb-3 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">{product.summary}</p>
              <p className="text-xs text-[var(--text-muted)] mt-3">
                Published {formatDate(product.publishedAt)} · Updated {formatDate(product.updatedAt)}
              </p>
            </div>

            {/* Visual presentation */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[var(--bg-muted)] to-[var(--bg-subtle)] border border-[var(--border-subtle)] flex flex-col items-center justify-center p-6 text-center shadow-inner">
              <span className="text-8xl sm:text-9xl font-black text-[var(--border-default)] select-none">
                {product.brand[0]}
              </span>
              <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mt-2">
                {product.brand} · {product.categoryId}
              </span>
            </div>

            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">Editorial Overview</h2>
              <p className="prose-yentra text-[var(--text-secondary)] leading-relaxed text-base">
                {product.description}
              </p>
            </section>

            {/* Pros & Cons */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Pros & Cons</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">Key Strengths</p>
                  <ul className="space-y-2">
                    {product.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
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
                      <li key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <XCircle size={14} className="text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Who is it for */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">Ideal Target Buyer</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{product.whoIsItFor}</p>
              </div>
              <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2">Who Should Avoid</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{product.whoShouldAvoid}</p>
              </div>
            </section>

            {/* Review */}
            {review && (
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">In-Depth Review</h2>
                <ReviewCard review={review} />
              </section>
            )}

            {/* Related Products */}
            {related.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Related Options</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((rp) => {
                    const rReview = getReviewByProductId(rp.id);
                    return <ProductCard key={rp.id} product={rp} reviewScore={rReview?.rating?.overall} />;
                  })}
                </div>
              </section>
            )}

            {/* Disclosure */}
            <p className="text-xs text-[var(--text-muted)] italic border-t border-[var(--border-subtle)] pt-4">
              Disclosure: Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you. See our{' '}
              <Link href="/disclosure" className="underline hover:text-[var(--brand-primary)]">affiliate disclosure</Link>.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-[calc(var(--navbar-height)+1.5rem)] self-start">
            {/* Buy button */}
            {amazonUrl && (
              <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl space-y-3">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">
                  View on Amazon India
                </p>
                <p className="font-bold text-[var(--text-primary)] text-sm">{product.name}</p>
                <a
                  href={amazonUrl}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="btn-affiliate btn-affiliate-amazon w-full justify-center text-sm"
                >
                  Check Price on Amazon India <ExternalLink size={14} />
                </a>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                  Check the latest price on Amazon India. Yentra may earn an affiliate commission on qualifying purchases.
                </p>
              </div>
            )}

            {/* Specs */}
            <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
                Manufacturer Specifications
              </p>
              <div className="space-y-2.5">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 text-xs sm:text-sm border-b border-[var(--border-subtle)] pb-2 last:border-0 last:pb-0">
                    <span className="text-[var(--text-muted)] flex-shrink-0">{spec.label}</span>
                    <span className="text-[var(--text-secondary)] font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
