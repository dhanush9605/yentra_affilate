// =============================================================================
// YENTRA — Buying Guides Data
// =============================================================================
// Objective, research-driven buying guides helping Indian consumers make
// informed purchasing decisions on Amazon India.
// =============================================================================

import type { BuyingGuide } from '@/types';

export const buyingGuides: BuyingGuide[] = [
  {
    id: 'guide-best-laptops',
    slug: 'best-laptops',
    title: 'Best Laptops for Indian Students, Professionals, and Creators (2026)',
    summary:
      'A practical buying framework to help you choose the right laptop for college, remote software work, or creative workflows without overpaying.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-01-15',
    updatedAt: '2026-03-01',
    readingTime: 12,
    categoryId: 'laptops',
    introduction:
      'Purchasing a laptop in India involves balancing thermal performance in warm ambient temperatures, after-sales service network coverage, screen quality, and battery endurance during commutes. Rather than chasing raw benchmark numbers that do not reflect everyday use, our guide categorizes the key requirements for students, corporate professionals, software engineers, and creators.',
    selectionCriteria: [
      'Minimum 16GB RAM for future-proof multitasking and modern operating systems',
      'High-efficiency processors (Intel Core Ultra, AMD Ryzen 8000/9000, Apple Apple Silicon) that prioritize cool operation and battery life',
      'Display quality: Minimum 300 nits brightness and 100% sRGB color gamut for eye comfort during long working sessions',
      'Reliable warranty service coverage and authorized service centers across Tier-1 and Tier-2 Indian cities',
      'Ergonomic keyboard travel and durable chassis construction',
    ],
    products: [
      {
        productId: 'logitech-mx-master-3s',
        whySelected:
          'Essential ergonomic companion for any desk laptop setup, providing multi-computer control and strain relief.',
        bestFor: 'Productivity and dual-screen laptop setups',
      },
      {
        productId: 'anker-737-power-bank',
        whySelected:
          'Delivers up to 140W USB-C PD power to keep modern USB-C laptops fully charged during long power cuts or travel.',
        bestFor: 'Remote workers, travel, and mobile professionals',
      },
    ],
    faqs: [
      {
        question: 'How much RAM is necessary for a laptop in 2026?',
        answer:
          'We strongly recommend 16GB of RAM as the baseline. While 8GB models remain available at lower prices, modern browsers with multiple tabs, background productivity suites, and OS updates quickly exhaust 8GB, leading to sluggish memory swapping.',
      },
      {
        question: 'Is OLED better than IPS for office and programming work?',
        answer:
          'OLED provides superior contrast and deep blacks for multimedia, but quality IPS panels with matte anti-glare coatings are often gentler on the eyes for 8-hour text rendering and code editing, while eliminating any concern of static UI burn-in.',
      },
      {
        question: 'How important is international warranty when buying on Amazon India?',
        answer:
          'Always verify that the seller provides an official Indian manufacturer warranty rather than an imported grey-market unit. Brands like Apple, Dell, Lenovo, HP, and ASUS require valid tax invoices from authorized retail sellers for full warranty coverage.',
      },
    ],
    finalRecommendation:
      'For general office productivity, prioritize a lightweight 14-inch chassis with a 16:10 aspect ratio display and 16GB RAM. If your workflow involves video editing, 3D modeling, or local AI inference, invest in models equipped with dedicated GPUs and robust dual-fan cooling pipelines.',
    seoTitle: 'Best Laptops in India (2026) — Yentra Buying Guide',
    seoDescription:
      'Yentra buying guide to selecting the best laptop in India for coding, college, office, and creative work. Specifications, display criteria, and essential considerations.',
  },
  {
    id: 'guide-best-serums',
    slug: 'best-serums',
    title: 'Best Face Serums Guide: Vitamin C, Niacinamide, and Hyaluronic Acid',
    summary:
      'A dermatologist-aligned breakdown of active skincare ingredients, formulation stabilities, and how to safely incorporate serums into your routine in tropical climates.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-02-01',
    updatedAt: '2026-02-28',
    readingTime: 10,
    categoryId: 'skincare',
    introduction:
      'Face serums deliver concentrated active ingredients directly to the skin to address hyperpigmentation, uneven texture, dehydration, and barrier repair. In India, where high humidity, pollution, and strong UV indices prevail, choosing the right formulation and active concentration is vital to prevent irritation and breakouts.',
    selectionCriteria: [
      'Ingredient stability: Airless, opaque or amber packaging that prevents active oxidation (especially crucial for L-Ascorbic Acid)',
      'Optimal active percentages: 10% to 15% for Vitamin C, 5% to 10% for Niacinamide, and multi-molecular weight Hyaluronic Acid',
      'Texture compatibility: Lightweight, water-based serums that absorb without leaving a sticky or heavy residue in warm weather',
      'Fragrance-free and alcohol-free options for sensitive or acne-prone skin profiles',
    ],
    products: [
      {
        productId: 'dyson-airwrap-complete',
        whySelected:
          'Protects hair health with smart heat regulation while you complete your daily skincare and grooming rituals.',
        bestFor: 'Gentle, low-heat hair styling without thermal damage',
      },
    ],
    faqs: [
      {
        question: 'Can you use Vitamin C and Niacinamide together?',
        answer:
          'Yes. Modern formulations are stable and can be safely layered or used alternately (e.g., Vitamin C in your morning routine under sunscreen, and Niacinamide in your evening routine to support barrier recovery).',
      },
      {
        question: 'How do I prevent Vitamin C serum from oxidizing?',
        answer:
          'Store your Vitamin C in a cool, dark drawer away from direct bathroom humidity and sunlight. If the serum turns dark orange or brown, it has oxidized and lost its antioxidant efficacy.',
      },
      {
        question: 'Why does Hyaluronic Acid sometimes make skin feel dry?',
        answer:
          'Hyaluronic acid is a humectant that pulls moisture from its surroundings. In dry indoor air-conditioned environments, always apply it on damp skin and seal it immediately with a light moisturizer.',
      },
    ],
    finalRecommendation:
      'Begin by introducing one active ingredient at a time and patch test on the jawline for 48 hours. Consistent sunscreen application (SPF 50, PA++++) every morning is non-negotiable when using active skincare serums.',
    seoTitle: 'Best Face Serums Guide — Active Skincare Ingredients | Yentra',
    seoDescription:
      'Yentra comprehensive guide to Vitamin C, Niacinamide, and Hyaluronic Acid serums for Indian skin types. Formulation stability, usage rules, and buying advice.',
  },
  {
    id: 'guide-desk-setup',
    slug: 'desk-setup',
    title: 'The Ultimate Productivity Desk Setup Guide: Ergonomics & Gear',
    summary:
      'How to design an ergonomic, clean, and distraction-free desk setup for long working days. Monitors, seating posture, mechanical keyboards, and cable management.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-01-20',
    updatedAt: '2026-03-02',
    readingTime: 11,
    categoryId: 'desk-setup',
    introduction:
      'A thoughtful workspace is not about decorative minimalism; it is about optimizing biomechanics, visual ergonomics, and workflow efficiency. Spending 40 to 60 hours weekly at a desk takes a cumulative toll on your spine, shoulders, and wrists unless your desk height, monitor angle, and input peripherals are intentionally aligned.',
    selectionCriteria: [
      'Visual alignment: Top of the monitor screen at or slightly below eye level, at an arm-length distance (50-70cm)',
      'Wrist neutrality: Low-angle keyboard typing and sculpted mice that maintain natural forearm pronation',
      'Acoustic management: Noise-dampened keyboard switches and active noise cancellation for high-focus deep work',
      'Cable routing: Under-desk wire raceways and single-cable USB-C Power Delivery docking',
    ],
    products: [
      {
        productId: 'logitech-mx-master-3s',
        whySelected:
          'Ergonomic thumb support, 8000 DPI tracking on glass, and near-silent switches ideal for long computer work.',
        bestFor: 'Ergonomic mouse control and multi-screen navigation',
      },
      {
        productId: 'keychron-k2-pro',
        whySelected:
          'Compact 75% mechanical keyboard with custom VIA key mapping and Mac/Windows hardware compatibility.',
        bestFor: 'Tactile, satisfying, and programmable desktop typing',
      },
      {
        productId: 'sony-wh1000xm6',
        whySelected:
          'Premium active noise cancellation that isolates your acoustic environment for deep concentration.',
        bestFor: 'Focused work sessions in busy household or office environments',
      },
    ],
    faqs: [
      {
        question: 'Are standing desks worth the investment?',
        answer:
          'Yes, motorized sit-stand desks encourage postural variety throughout the day. Alternating between 45 minutes of sitting and 15 minutes of standing helps reduce lower back compression and maintains circulation.',
      },
      {
        question: 'Single ultra-wide monitor vs dual monitors: which is better?',
        answer:
          'A single 34-inch curved ultra-wide (1440p) eliminates the central bezel interruption and reduces neck-turning fatigue compared to side-by-side dual monitors, offering seamless window tiling for coding and multitasking.',
      },
      {
        question: 'How should I position my desk regarding window light?',
        answer:
          'Position your monitor perpendicular to windows rather than facing directly into or directly away from them to minimize eye-straining glare and washed-out contrast.',
      },
    ],
    finalRecommendation:
      'Invest first in ergonomic fundamentals: an adjustable ergonomic chair with lumbar support and monitor arms that raise displays to true eye level. Pair these with silent, tactile input devices like the MX Master 3S and Keychron K2 Pro for maximum daily comfort.',
    seoTitle: 'Ultimate Productivity Desk Setup Guide (2026) — Yentra',
    seoDescription:
      'Complete Yentra guide to building an ergonomic, efficient desk setup. Monitors, seating posture, mechanical keyboards, audio isolation, and organization.',
  },
];

export function getBuyingGuideBySlug(slug: string): BuyingGuide | undefined {
  return buyingGuides.find((g) => g.slug === slug);
}

export function getAllBuyingGuides(): BuyingGuide[] {
  return buyingGuides;
}
