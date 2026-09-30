import type { Metadata } from 'next';
import Link from 'next/link';
import { PenLine, ArrowRight, Clock, Calendar } from 'lucide-react';
import { getAllArticles } from '@/data/articles';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Journal — Yentra',
  description:
    'Buying advice, technology explainers, and consumer tips from the Yentra editorial team.',
};

export default function JournalPage() {
  const articleList = getAllArticles();

  return (
    <div className="py-14">
      <div className="container-site max-w-5xl">
        <div className="mb-12">
          <span className="badge badge-emerald mb-4 inline-flex">Editorial Journal</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
            Yentra Journal
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl">
            Thoughtful consumer buying advice, shopping tips for Amazon India, and practical technology explainers.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articleList.map((article) => (
            <article
              key={article.id}
              className="p-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--brand-primary)]/50 rounded-2xl flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-emerald text-xs capitalize">
                    {article.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                    <Clock size={12} /> {article.readingTime} min
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors mb-2.5 leading-snug">
                  <Link href={`/journal/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                  <Calendar size={11} /> {formatDate(article.publishedAt)}
                </span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-primary)] group-hover:gap-2 transition-all"
                >
                  Read <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
