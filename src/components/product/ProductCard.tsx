import Link from 'next/link';
import { ExternalLink, CheckCircle2, XCircle, Star } from 'lucide-react';
import type { Product } from '@/types';
import { cn } from '@/lib/utils';
import { createAmazonLink } from '@/lib/affiliate';

interface ProductCardProps {
  product: Product;
  reviewScore?: number;
  showBadge?: boolean;
  className?: string;
}

const TAG_STYLES: Record<string, string> = {
  'editors-pick': 'badge-indigo',
  'trending': 'badge-violet',
  'best-value': 'badge-emerald',
  'premium': 'badge-amber',
  'new': 'badge-cyan',
  'budget': 'badge-rose',
};

const TAG_LABELS: Record<string, string> = {
  'editors-pick': "Editor's Pick",
  'trending': 'Trending',
  'best-value': 'Best Value',
  'premium': 'Premium',
  'new': 'New',
  'budget': 'Budget',
};

export default function ProductCard({
  product,
  reviewScore,
  showBadge = true,
  className,
}: ProductCardProps) {
  const primaryTag = product.tags[0];
  const asin = product.affiliateLinks['amazon-in']?.asin;
  const amazonUrl = asin ? createAmazonLink(asin) : null;

  return (
    <article className={cn('product-card group flex flex-col', className)}>
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--bg-muted)] to-[var(--bg-subtle)] flex items-center justify-center overflow-hidden">
        {/* Decorative brand initial */}
        <span className="text-6xl font-black text-[var(--border-default)] select-none group-hover:scale-110 transition-transform duration-300">
          {product.brand[0]}
        </span>

        {/* Tag badge */}
        {showBadge && primaryTag && (
          <div className="absolute top-3 left-3">
            <span className={cn('badge', TAG_STYLES[primaryTag] ?? 'badge-indigo')}>
              {TAG_LABELS[primaryTag] ?? primaryTag}
            </span>
          </div>
        )}

        {/* Score pill */}
        {reviewScore !== undefined && (
          <div className="absolute top-3 right-3 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm">
            <Star size={11} fill="#f59e0b" stroke="none" />
            <span className="text-xs font-bold text-[var(--text-primary)]">
              {reviewScore.toFixed(1)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Brand + name */}
        <div>
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
            {product.brand}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-bold text-[var(--text-primary)] text-sm leading-snug group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Summary */}
        <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed flex-1">
          {product.summary}
        </p>

        {/* Pros / Cons snapshot */}
        <div className="space-y-1">
          {product.pros.slice(0, 1).map((pro) => (
            <div key={pro} className="flex items-start gap-1.5">
              <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-[var(--text-secondary)] line-clamp-1">{pro}</span>
            </div>
          ))}
          {product.cons.slice(0, 1).map((con) => (
            <div key={con} className="flex items-start gap-1.5">
              <XCircle size={12} className="text-rose-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-[var(--text-secondary)] line-clamp-1">{con}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <Link
            href={`/product/${product.slug}`}
            className="btn-affiliate btn-ghost text-xs flex-1 justify-center"
          >
            Full Review
          </Link>
          {amazonUrl && (
            <a
              href={amazonUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              title="Check latest price on Amazon India"
              className="btn-affiliate btn-affiliate-amazon text-xs flex-1 justify-center"
            >
              Amazon India <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
