// =============================================================================
// YENTRA — Core TypeScript Types
// =============================================================================

export type MarketplaceId = 'amazon-uk' | 'amazon-in';

export interface Marketplace {
  id: MarketplaceId;
  name: string;
  country: string;
  domain: string;
  currency: string;
  currencySymbol: string;
  locale: string;
  associateTagEnvKey: string;
}

export interface AffiliateLink {
  marketplace: MarketplaceId;
  asin: string;
  url: string | null;
  isConfigured: boolean;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  avatar?: string;
  role: string;
  social?: { twitter?: string; instagram?: string };
}

export type CategoryVertical = 'technology' | 'beauty' | 'lifestyle' | 'gaming';

export interface Category {
  id: string;
  name: string;
  slug: string;
  vertical: CategoryVertical;
  description: string;
  icon?: string;
  parentId?: string;
  featured?: boolean;
}

export interface ProductSpec { label: string; value: string; }

export interface ProductPricing {
  current?: number;
  previous?: number;
  currency: string;
  currencySymbol: string;
  updatedAt?: string;
  availability?: 'in-stock' | 'out-of-stock' | 'unknown';
}

export type ProductTag = 'editors-pick' | 'trending' | 'new' | 'budget' | 'premium' | 'best-value';

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  categoryId: string;
  summary: string;
  description: string;
  images: string[];
  specs: ProductSpec[];
  pricing?: ProductPricing;
  affiliateLinks: Partial<Record<MarketplaceId, { asin: string }>>;
  tags: ProductTag[];
  pros: string[];
  cons: string[];
  whoIsItFor: string;
  whoShouldAvoid: string;
  relatedProductIds: string[];
  publishedAt: string;
  updatedAt: string;
  featured?: boolean;
  isDemoContent?: boolean;
}

export interface RatingDimension { label: string; score: number; }

export interface EditorialRating {
  overall: number;
  dimensions: RatingDimension[];
  verdict: string;
}

export interface Review {
  id: string;
  productId: string;
  slug: string;
  title: string;
  summary: string;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  readingTime: number;
  rating?: EditorialRating;
  overview: string;
  ourTake: string;
  realWorldAnalysis: string;
  verdict: string;
  alternativeProductIds: string[];
  seoTitle?: string;
  seoDescription?: string;
  isDemoContent?: boolean;
}

export interface BuyingGuideProduct { productId: string; whySelected: string; bestFor: string; }
export interface BuyingGuideFAQ { question: string; answer: string; }

export interface BuyingGuide {
  id: string;
  slug: string;
  title: string;
  summary: string;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  readingTime: number;
  categoryId: string;
  introduction: string;
  selectionCriteria: string[];
  products: BuyingGuideProduct[];
  faqs: BuyingGuideFAQ[];
  finalRecommendation: string;
  seoTitle?: string;
  seoDescription?: string;
  isDemoContent?: boolean;
}

export interface ComparisonItem { productId: string; whyChooseThis: string; bestFor: string; }

export interface Comparison {
  id: string;
  slug: string;
  title: string;
  summary: string;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  readingTime: number;
  productIds: string[];
  items: ComparisonItem[];
  verdict: string;
  seoTitle?: string;
  seoDescription?: string;
  isDemoContent?: boolean;
}

export type JournalCategory = 'technology' | 'gadgets' | 'beauty' | 'gaming' | 'buying-advice' | 'productivity' | 'lifestyle';

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  readingTime: number;
  category: JournalCategory;
  content: string;
  relatedProductIds: string[];
  relatedArticleIds: string[];
  seoTitle?: string;
  seoDescription?: string;
  isDemoContent?: boolean;
}

export type SearchResultType = 'product' | 'review' | 'buying-guide' | 'comparison' | 'article';

export interface SearchResult {
  type: SearchResultType;
  id: string;
  slug: string;
  title: string;
  summary: string;
  href: string;
  image?: string;
}

export interface NavItem { label: string; href: string; children?: NavItem[]; }
