// =============================================================================
// YENTRA — Category Data
// =============================================================================

import type { Category } from '@/types';

export const categories: Category[] = [
  // Technology
  { id: 'smartphones', name: 'Smartphones', slug: 'smartphones', vertical: 'technology', description: 'In-depth reviews and comparisons of the latest smartphones.', featured: true },
  { id: 'laptops', name: 'Laptops', slug: 'laptops', vertical: 'technology', description: 'Comprehensive laptop reviews for every budget and use case.', featured: true },
  { id: 'headphones', name: 'Headphones', slug: 'headphones', vertical: 'technology', description: 'Wired and wireless headphones reviewed honestly.', featured: true },
  { id: 'earbuds', name: 'Earbuds', slug: 'earbuds', vertical: 'technology', description: 'True wireless and wired earbuds tested for real-world use.', featured: true },
  { id: 'monitors', name: 'Monitors', slug: 'monitors', vertical: 'technology', description: 'Displays for productivity, gaming, and creative work.' },
  { id: 'tablets', name: 'Tablets', slug: 'tablets', vertical: 'technology', description: 'iPad, Android tablet, and e-reader reviews.' },
  { id: 'keyboards', name: 'Keyboards', slug: 'keyboards', vertical: 'technology', description: 'Mechanical, membrane, and wireless keyboards reviewed.' },
  { id: 'mice', name: 'Mice', slug: 'mice', vertical: 'technology', description: 'Gaming and productivity mouse reviews.' },
  { id: 'speakers', name: 'Speakers', slug: 'speakers', vertical: 'technology', description: 'Portable and desktop speakers for every space.' },
  { id: 'smartwatches', name: 'Smartwatches', slug: 'smartwatches', vertical: 'technology', description: 'Apple Watch, Garmin, Samsung, and Fitbit reviews.' },
  { id: 'power-banks', name: 'Power Banks', slug: 'power-banks', vertical: 'technology', description: 'Portable chargers for travel and everyday use.' },
  { id: 'smart-home', name: 'Smart Home', slug: 'smart-home', vertical: 'technology', description: 'Smart speakers, displays, and home automation.' },
  { id: 'cameras', name: 'Cameras', slug: 'cameras', vertical: 'technology', description: 'Mirrorless, compact, and action cameras reviewed.' },
  { id: 'webcams', name: 'Webcams', slug: 'webcams', vertical: 'technology', description: 'HD and 4K webcams for remote work and streaming.' },
  { id: 'storage', name: 'Storage', slug: 'storage', vertical: 'technology', description: 'SSDs, HDDs, and portable storage drives.' },
  { id: 'chargers', name: 'Chargers', slug: 'chargers', vertical: 'technology', description: 'Fast chargers, USB-C hubs, and charging accessories.' },
  // Gaming
  { id: 'gaming-consoles', name: 'Gaming Consoles', slug: 'gaming-consoles', vertical: 'gaming', description: 'PlayStation, Xbox, and Nintendo console reviews.', featured: true },
  { id: 'gaming-accessories', name: 'Gaming Accessories', slug: 'gaming-accessories', vertical: 'gaming', description: 'Controllers, headsets, and gaming peripherals.' },
  { id: 'gaming-keyboards', name: 'Gaming Keyboards', slug: 'gaming-keyboards', vertical: 'gaming', description: 'Mechanical and optical keyboards for gaming.' },
  { id: 'gaming-monitors', name: 'Gaming Monitors', slug: 'gaming-monitors', vertical: 'gaming', description: 'High-refresh-rate monitors for competitive gaming.' },
  // Beauty
  { id: 'skincare', name: 'Skincare', slug: 'skincare', vertical: 'beauty', description: 'Serums, moisturisers, and skincare routines reviewed.', featured: true },
  { id: 'haircare', name: 'Haircare', slug: 'haircare', vertical: 'beauty', description: 'Shampoos, conditioners, and styling tools.' },
  { id: 'beauty-tools', name: 'Beauty Tools', slug: 'beauty-tools', vertical: 'beauty', description: 'Electric face brushes, massagers, and skincare devices.', featured: true },
  { id: 'grooming', name: 'Grooming', slug: 'grooming', vertical: 'beauty', description: 'Electric shavers, trimmers, and grooming kits.' },
  { id: 'fragrance', name: 'Fragrance', slug: 'fragrance', vertical: 'beauty', description: 'Perfumes and colognes worth your attention.' },
  // Lifestyle
  { id: 'desk-setup', name: 'Desk Setup', slug: 'desk-setup', vertical: 'lifestyle', description: 'Everything for a productive and beautiful desk.', featured: true },
  { id: 'travel', name: 'Travel', slug: 'travel', vertical: 'lifestyle', description: 'Luggage, travel accessories, and on-the-go gear.' },
  { id: 'fitness', name: 'Fitness', slug: 'fitness', vertical: 'lifestyle', description: 'Home gym equipment, fitness trackers, and accessories.' },
  { id: 'everyday-carry', name: 'Everyday Carry', slug: 'everyday-carry', vertical: 'lifestyle', description: 'Wallets, bags, and daily essentials.' },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoriesByVertical(vertical: string): Category[] {
  return categories.filter((c) => c.vertical === vertical);
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured);
}
