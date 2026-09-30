import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { reviews } from '@/data/reviews';
import { getProductById } from '@/data/products';
import ReviewCard from '@/components/review/ReviewCard';

export const metadata: Metadata = {
  title: 'Reviews — Yentra',
  description:
    'Independent, in-depth product reviews across technology, beauty, gaming, and lifestyle for Indian consumers.',
};

export default function ReviewsPage() {
  const sorted = [...reviews].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="py-14">
      <div className="container-site">
        {/* Header */}
        <div className="mb-10">
          <span className="badge badge-indigo mb-4 inline-flex">Editorial Reviews</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
            All Reviews
          </h1>
          <p className="text-[var(--text-muted)] max-w-xl">
            Independent product reviews based on thorough research and analysis. No paid placements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((review) => {
            const product = getProductById(review.productId);
            return (
              <ReviewCard
                key={review.id}
                review={review}
                productName={product?.name}
              />
            );
          })}
        </div>

        {sorted.length === 0 && (
          <div className="py-20 text-center text-[var(--text-muted)]">
            No reviews yet. Check back soon.
          </div>
        )}
      </div>
    </div>
  );
}
