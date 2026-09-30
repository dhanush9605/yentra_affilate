import Link from 'next/link';
import { Clock, Star, ArrowRight } from 'lucide-react';
import type { Review } from '@/types';
import { formatDateShort } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  review: Review;
  productName?: string;
  className?: string;
}

const VERDICT_STYLES: Record<string, string> = {
  Outstanding: 'badge-indigo',
  Excellent: 'badge-emerald',
  'Very Good': 'badge-cyan',
  Good: 'badge-amber',
  Average: 'badge-rose',
};

export default function ReviewCard({ review, productName, className }: ReviewCardProps) {
  const verdictClass = review.rating?.verdict
    ? VERDICT_STYLES[review.rating.verdict] ?? 'badge-indigo'
    : 'badge-indigo';

  return (
    <article
      className={cn(
        'bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl overflow-hidden flex flex-col',
        'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-[var(--brand-primary)]/20',
        className,
      )}
    >
      {/* Gradient banner */}
      <div className="h-2 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]" />

      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Verdict + Score */}
        {review.rating && (
          <div className="flex items-center gap-2">
            <span className={cn('badge', verdictClass)}>{review.rating.verdict}</span>
            <div className="flex items-center gap-1 ml-auto">
              <Star size={13} fill="#f59e0b" stroke="none" />
              <span className="text-sm font-bold text-[var(--text-primary)]">
                {review.rating.overall.toFixed(1)}
              </span>
              <span className="text-xs text-[var(--text-muted)]">/10</span>
            </div>
          </div>
        )}

        {/* Title */}
        <Link href={`/reviews/${review.slug}`}>
          <h3 className="font-bold text-[var(--text-primary)] leading-snug hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
            {review.title}
          </h3>
        </Link>

        {/* Summary */}
        <p className="text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed flex-1">
          {review.summary}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)]">
          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
            <span>{formatDateShort(review.publishedAt)}</span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {review.readingTime} min
            </span>
          </div>
          <Link
            href={`/reviews/${review.slug}`}
            className="flex items-center gap-1 text-xs font-semibold text-[var(--brand-primary)] hover:underline"
          >
            Read <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
}
