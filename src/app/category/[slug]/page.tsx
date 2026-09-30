import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { getCategoryById, getCategoriesByVertical, categories } from '@/data/categories';
import { getReviewByProductId } from '@/data/reviews';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface Props {
  params: Promise<{ slug: string }>;
}

const VERTICALS = ['technology', 'gaming', 'beauty', 'lifestyle'] as const;
type Vertical = typeof VERTICALS[number];

export async function generateStaticParams() {
  const verticalParams = VERTICALS.map((v) => ({ slug: v }));
  const catParams = categories.map((c) => ({ slug: c.id }));
  return [...verticalParams, ...catParams];
}

const VERTICAL_META: Record<Vertical, { name: string; description: string }> = {
  technology: { name: 'Technology', description: 'In-depth reviews of smartphones, laptops, headphones, and more.' },
  gaming: { name: 'Gaming', description: 'Consoles, peripherals, monitors, and gaming accessories reviewed.' },
  beauty: { name: 'Beauty', description: 'Skincare, haircare, beauty tools, and grooming products.' },
  lifestyle: { name: 'Lifestyle', description: 'Desk setups, travel gear, fitness, and everyday carry.' },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryById(slug);
  if (cat) return { title: `${cat.name} Reviews`, description: cat.description };
  if (VERTICALS.includes(slug as Vertical)) {
    const v = VERTICAL_META[slug as Vertical];
    return { title: `${v.name} Reviews & Buying Guides`, description: v.description };
  }
  return { title: 'Category' };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  // Check if it's a vertical (technology, gaming, beauty, lifestyle)
  const isVertical = VERTICALS.includes(slug as Vertical);

  if (isVertical) {
    const vertical = slug as Vertical;
    const meta = VERTICAL_META[vertical];
    const verticalCategories = getCategoriesByVertical(vertical);
    const verticalProductIds = new Set(
      verticalCategories.map((c) => c.id)
    );
    const verticalProducts = products.filter((p) => verticalProductIds.has(p.categoryId));

    return (
      <div className="py-14">
        <div className="container-site">
          <Breadcrumbs items={[{ label: meta.name }]} />
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
              {meta.name}
            </h1>
            <p className="text-[var(--text-muted)] max-w-xl">{meta.description}</p>
          </div>

          {/* Sub-categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {verticalCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="badge badge-indigo hover:bg-indigo-500/20 transition-colors cursor-pointer"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {verticalProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {verticalProducts.map((product) => {
                const review = getReviewByProductId(product.id);
                return (
                  <ProductCard key={product.id} product={product} reviewScore={review?.rating?.overall} />
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-[var(--text-muted)] mb-4">No products in this vertical yet.</p>
              <Link href="/reviews" className="btn-affiliate btn-primary text-sm px-5 py-2.5">
                Browse all reviews <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Regular category page
  const category = getCategoryById(slug);
  const categoryProducts = products.filter((p) => p.categoryId === slug);

  return (
    <div className="py-14">
      <div className="container-site">
        <Breadcrumbs
          items={[
            ...(category?.vertical ? [{ label: category.vertical, href: `/category/${category.vertical}` }] : []),
            { label: category?.name ?? slug },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
            {category?.name ?? slug}
          </h1>
          {category?.description && (
            <p className="text-[var(--text-muted)] max-w-xl">{category.description}</p>
          )}
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => {
              const review = getReviewByProductId(product.id);
              return (
                <ProductCard key={product.id} product={product} reviewScore={review?.rating?.overall} />
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-[var(--text-muted)] mb-4">No products in this category yet.</p>
            <Link href="/reviews" className="btn-affiliate btn-primary text-sm px-5 py-2.5">
              Browse all reviews <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
