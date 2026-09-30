// =============================================================================
// YENTRA — Journal Articles Data
// =============================================================================
// Original, helpful consumer buying advice and technology explainers.
// =============================================================================

import type { Article } from '@/types';

export const articles: Article[] = [
  {
    id: 'article-how-to-spot-genuine-deals',
    slug: 'how-to-spot-genuine-deals-amazon-india',
    title: 'How to Spot Genuine Deals on Amazon India (and Avoid Artificial Discounts)',
    summary:
      'Retailers often inflate list prices right before festival sales to advertise dramatic 60% discounts. Here is our practical methodology for identifying authentic price drops.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-02-14',
    updatedAt: '2026-03-01',
    readingTime: 6,
    category: 'buying-advice',
    content: `Online shopping during major festival events like the Amazon Great Indian Festival or Prime Day offers genuine savings, but it also features marketing tricks designed to generate urgency. One of the most prevalent tactics is the artificial elevation of the "Maximum Retail Price" (MRP) days before a sale event, allowing sellers to claim 50% to 70% off what is essentially an ordinary market price.

### 1. Track Price History Rather Than Discount Percentages
Never evaluate a product based on the percentage discount badge shown on an e-commerce page. Instead, examine the historical price trajectory using independent price tracking extensions. If a pair of wireless earbuds has consistently retailed for ₹4,999 throughout the year, a festival banner claiming "was ₹9,999, now ₹4,899 (51% OFF!)" represents a modest ₹100 saving, not an unprecedented bargain.

### 2. Verify Seller Ratings and Fulfillment Badges
On Amazon India, look for items marked as "Fulfilled by Amazon" or sold by recognized primary national distributors (such as Appario Retail or official brand flagship storefronts). Check the seller's lifetime rating and review counts. Be cautious of brand-new third-party storefronts offering high-value electronics at prices drastically below standard retail.

### 3. Factor in Bank Card Offers and Exchange Bonuses
In India, the most significant authentic discounts often come from instant bank card discounts (typically 10% instant discount up to a capped threshold like ₹1,500 or ₹5,000 on major credit cards) and corporate GST invoices. Calculating your net effective outflow after these card offers gives you the true transaction cost.

### 4. Scrutinize Return and Replacement Policies
Different product categories carry different return protections on Amazon India. Smartphones and laptops frequently follow a strict 7-day "replacement only for technical defects" policy rather than an unconditional refund window. Always review the exact return terms under the buy box before completing payment.`,
    relatedProductIds: ['sony-wh1000xm6', 'logitech-mx-master-3s'],
    relatedArticleIds: ['why-gan-chargers-are-the-best-travel-upgrade'],
    seoTitle: 'How to Spot Genuine Deals on Amazon India — Yentra Buying Advice',
    seoDescription:
      'Learn how to identify artificial discounts, verify sellers, utilize price trackers, and secure genuine savings on Amazon India with Yentra.',
  },
  {
    id: 'article-why-gan-chargers-are-best',
    slug: 'why-gan-chargers-are-the-best-travel-upgrade',
    title: 'Why GaN (Gallium Nitride) Chargers Are the Single Best Tech Upgrade for Travel',
    summary:
      'Bulky manufacturer power bricks are becoming obsolete. Here is how Gallium Nitride semiconductors allow a single palm-sized adapter to charge your laptop, phone, and watch simultaneously.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-01-30',
    updatedAt: '2026-02-25',
    readingTime: 5,
    category: 'technology',
    content: `For decades, electronic power adapters relied on silicon semiconductors to convert alternating current (AC) from wall sockets into direct current (DC) for devices. While dependable, silicon generates substantial heat at high power transfers, requiring physically thick components, thermal dissipation gaps, and heavy plastic housings.

### The Physics of Gallium Nitride (GaN)
Gallium Nitride is a wide-bandgap semiconductor material capable of conducting electrons up to a thousand times more efficiently than silicon. Because GaN handles higher electrical voltages and operating frequencies with significantly less resistance, electrical components can be positioned in much tighter physical configurations without overheating.

### Real-World Travel Benefits
1. **Dramatic Weight Reduction:** A standard 100W multi-port GaN charger weighs roughly 200 to 250 grams — less than half the bulk of traditional proprietary OEM laptop chargers.
2. **Single-Outlet Consolidation:** Instead of carrying three separate charging adapters (laptop brick, phone brick, and tablet brick), a 3-port or 4-port GaN charger powers everything from a single Indian wall socket.
3. **Dynamic Smart Power Distribution:** Modern USB Power Delivery (USB-PD 3.0 / 3.1) controllers in GaN adapters communicate digitally with connected devices, intelligently assigning 65W to your laptop and 20W to your phone simultaneously.

For anyone who travels for work or commutes between a home office and shared workspace, replacing multiple single-device power bricks with one reliable GaN wall charger is one of the highest-yield upgrades you can make to your daily carry.`,
    relatedProductIds: ['anker-737-power-bank'],
    relatedArticleIds: ['how-to-spot-genuine-deals-amazon-india'],
    seoTitle: 'Why GaN Chargers Are the Best Travel Upgrade — Yentra Tech Explainer',
    seoDescription:
      'Discover how Gallium Nitride (GaN) chargers replace bulky laptop bricks with multi-port high-wattage travel adapters. Practical guide by Yentra.',
  },
  {
    id: 'article-mechanical-keyboards-for-coders',
    slug: 'mechanical-keyboards-guide-for-programmers',
    title: 'Switch Types, Layouts, and Profiles: A Practical Keyboard Guide for Coders',
    summary:
      'Tired of mushy laptop keys? We break down the differences between Linear and Tactile switches, 75% versus Tenkeyless form factors, and why QMK/VIA software matters.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-02-08',
    updatedAt: '2026-03-04',
    readingTime: 7,
    category: 'productivity',
    content: `Software developers and technical writers spend several hours every day in contact with a keyboard. While chiclet membrane laptop keyboards are functional, mechanical keyboards provide tactile feedback, acoustic satisfaction, and long-term joint comfort that reduces typing fatigue.

### Choosing Your Switch Type: Red vs Brown vs Blue
- **Tactile (e.g., Brown switches):** Features a subtle physical tactile bump midway through key travel that signals actuation before the key bottoms out. This tactile confirmation is widely favored for programming and typing without producing jarring loud noise.
- **Linear (e.g., Red or Yellow switches):** Smooth, uninterrupted key travel with no bump. Very quiet, making them well-suited for shared corporate offices or late-night family settings.
- **Clicky (e.g., Blue switches):** Produces a sharp tactile bump paired with an audible metallic click. While satisfying for some individual typists, clicky switches are generally disruptive on conference calls and in shared offices.

### Form Factors: Why 75% is the Modern Sweet Spot
Full-sized keyboards with number pads force your right mouse hand far out to the side, creating asymmetrical shoulder strain over 8-hour sessions. A 75% compact layout (such as on the Keychron K2 Pro) preserves the dedicated arrow keys, Home/End navigation row, and F1-F12 function row while bringing your mouse significantly closer to your natural center of posture.

### The Value of Hot-Swappable PCBs
Always look for keyboards with hot-swappable switch sockets. If a specific key switch fails after two years of heavy use, you can pop it out and replace it in 30 seconds with a ₹30 spare switch instead of discarding the entire keyboard.`,
    relatedProductIds: ['keychron-k2-pro', 'logitech-mx-master-3s'],
    relatedArticleIds: ['how-to-spot-genuine-deals-amazon-india'],
    seoTitle: 'Mechanical Keyboards Guide for Coders (2026) — Yentra',
    seoDescription:
      'Yentra guide to choosing the best mechanical keyboard for programming. Switches, 75% layouts, hot-swappability, and ergonomics explained.',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles;
}
