import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { reviews } from '@/data/reviews';
import { buyingGuides } from '@/data/buyingGuides';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { SITE_CONFIG } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/buying-guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/disclosure`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/product/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const reviewPages: MetadataRoute.Sitemap = reviews.map((r) => ({
    url: `${base}/reviews/${r.slug}`,
    lastModified: new Date(r.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const guidePages: MetadataRoute.Sitemap = buyingGuides.map((g) => ({
    url: `${base}/buying-guide/${g.slug}`,
    lastModified: new Date(g.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${base}/compare/${c.slug}`,
    lastModified: new Date(c.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/journal/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...reviewPages,
    ...guidePages,
    ...comparisonPages,
    ...articlePages,
  ];
}
