'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '@/data/products';
import { reviews } from '@/data/reviews';
import ProductCard from '@/components/product/ProductCard';
import ReviewCard from '@/components/review/ReviewCard';
import { getReviewByProductId } from '@/data/reviews';

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get('q') ?? '';
  const [input, setInput] = useState(q);

  const query = q.toLowerCase().trim();

  const matchedProducts = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.summary.toLowerCase().includes(query) ||
          p.categoryId.toLowerCase().includes(query) ||
          p.tags.some((t) => t.includes(query))
      )
    : [];

  const matchedReviews = query
    ? reviews.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.summary.toLowerCase().includes(query)
      )
    : [];

  const total = matchedProducts.length + matchedReviews.length;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) router.push(`/search?q=${encodeURIComponent(input.trim())}`);
  }

  return (
    <div className="py-14">
      <div className="container-site">
        {/* Search bar */}
        <form onSubmit={handleSearch} className="mb-10 max-w-2xl">
          <div className="flex items-center gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-default)] rounded-2xl focus-within:border-[var(--brand-primary)] transition-colors">
            <Search size={18} className="text-[var(--text-muted)] flex-shrink-0 ml-1" />
            <input
              id="search-input"
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search products, reviews…"
              className="flex-1 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none text-base"
              autoFocus
            />
            {input && (
              <button
                type="button"
                onClick={() => { setInput(''); router.push('/search'); }}
                className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </form>

        {/* Results */}
        {query ? (
          <>
            <p className="text-sm text-[var(--text-muted)] mb-8">
              {total} result{total !== 1 ? 's' : ''} for <strong className="text-[var(--text-primary)]">&quot;{q}&quot;</strong>
            </p>

            {matchedProducts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-5">
                  Products <span className="text-[var(--text-muted)] font-normal text-sm ml-1">({matchedProducts.length})</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {matchedProducts.map((p) => {
                    const review = getReviewByProductId(p.id);
                    return <ProductCard key={p.id} product={p} reviewScore={review?.rating?.overall} />;
                  })}
                </div>
              </section>
            )}

            {matchedReviews.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-5">
                  Reviews <span className="text-[var(--text-muted)] font-normal text-sm ml-1">({matchedReviews.length})</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {matchedReviews.map((r) => <ReviewCard key={r.id} review={r} />)}
                </div>
              </section>
            )}

            {total === 0 && (
              <div className="py-16 text-center">
                <p className="text-[var(--text-muted)] mb-2">No results found for &quot;{q}&quot;</p>
                <p className="text-sm text-[var(--text-muted)]">Try a different keyword — e.g. a brand name, category, or product type.</p>
              </div>
            )}
          </>
        ) : (
          <div className="py-16 text-center text-[var(--text-muted)]">
            <Search size={32} className="mx-auto mb-4 opacity-30" />
            <p>Type something to search for products and reviews.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="py-14 container-site">
        <div className="h-12 bg-[var(--bg-muted)] rounded-2xl shimmer max-w-2xl mb-10" />
        <div className="h-6 bg-[var(--bg-muted)] rounded shimmer w-40 mb-8" />
        <div className="grid grid-cols-4 gap-5">
          {[1,2,3,4].map(i => <div key={i} className="h-64 bg-[var(--bg-muted)] rounded-2xl shimmer" />)}
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
