// =============================================================================
// YENTRA — Head-to-Head Comparisons Data
// =============================================================================
// Objective, balanced comparisons evaluating real-world strengths, trade-offs,
// and practical value in the Indian market.
// =============================================================================

import type { Comparison } from '@/types';

export const comparisons: Comparison[] = [
  {
    id: 'compare-ps5-vs-xbox-series-x',
    slug: 'ps5-vs-xbox-series-x',
    title: 'PlayStation 5 vs Xbox Series X: Which Console Should You Buy in India?',
    summary:
      'A thorough comparison of Sony and Microsoft’s flagship gaming consoles. We analyze game subscriptions, exclusive titles, local Indian disc retail, and controller features.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-01-18',
    updatedAt: '2026-03-01',
    readingTime: 11,
    productIds: [],
    items: [
      {
        productId: 'ps5',
        whyChooseThis:
          'Unrivalled narrative first-party exclusives, innovative DualSense haptic triggers, and stronger Indian physical pre-owned game disc liquidity.',
        bestFor: 'Gamers who want acclaimed story-driven single-player blockbusters and immersive controller haptics.',
      },
      {
        productId: 'xbox-series-x',
        whyChooseThis:
          'Xbox Game Pass Ultimate subscription value, backwards compatibility across 4 generations of Xbox games, and Quick Resume across multiple titles.',
        bestFor: 'Gamers wanting maximum gaming variety at a fixed monthly subscription cost without buying individual ₹4,999 game discs.',
      },
    ],
    verdict:
      'Both consoles deliver exceptional 4K gaming hardware, but your choice in India hinges on two clear factors: Game Library vs Monthly Value. If you are captivated by premier cinematic exclusives (such as God of War, Spider-Man, The Last of Us, and Final Fantasy) and value the DualSense haptic triggers, the PlayStation 5 remains the stronger platform in India with broader retail presence and disc resale liquidity. If your priority is playing hundreds of diverse titles spanning PC, cloud, and console on day one via Xbox Game Pass Ultimate without purchasing individual full-price games, the Xbox Series X is the undisputed champion of sheer economic value.',
    seoTitle: 'PS5 vs Xbox Series X in India (2026 Comparison) — Yentra',
    seoDescription:
      'Detailed Yentra comparison between PlayStation 5 and Xbox Series X for Indian gamers. Exclusive games, Game Pass vs PS Plus, controller mechanics, and local pricing.',
  },
  {
    id: 'compare-sony-wh1000xm6-vs-bose-qc45',
    slug: 'sony-wh1000xm6-vs-bose-qc45',
    title: 'Sony WH-1000XM6 vs Bose QuietComfort 45: Comfort vs ANC Supremacy',
    summary:
      'Two titans of wireless noise cancellation go head-to-head. We compare active isolation, long-duration wearing comfort, audio codecs, and daily usability.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-02-10',
    updatedAt: '2026-03-02',
    readingTime: 9,
    productIds: ['sony-wh1000xm6', 'bose-qc45'],
    items: [
      {
        productId: 'sony-wh1000xm6',
        whyChooseThis:
          'Deeper active noise suppression, LDAC high-resolution wireless streaming, and intelligent ambient sound adaptation.',
        bestFor: 'Frequent travelers and listeners prioritizing acoustic depth and modern high-res Bluetooth audio.',
      },
      {
        productId: 'bose-qc45',
        whyChooseThis:
          'Lighter clamping force, plush physical ear cushions, and foolproof tactile physical buttons.',
        bestFor: 'Office workers who wear headphones continuously for 8 hours and prefer real click buttons.',
      },
    ],
    verdict:
      'If ultimate noise-cancellation depth and high-resolution LDAC audio fidelity are your top requirements, the Sony WH-1000XM6 is the superior acoustic performer. However, if your sensitive head shape makes high clamping force uncomfortable, or you dislike capacitive touch controls, the Bose QuietComfort 45 offers a more forgiving, lightweight fit with physical click buttons that never fail.',
    seoTitle: 'Sony WH-1000XM6 vs Bose QC45 Comparison — Yentra Editorial',
    seoDescription:
      'Sony WH-1000XM6 vs Bose QuietComfort 45: In-depth comparison of ANC, comfort, sound profile, and battery endurance for Indian shoppers.',
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisons(): Comparison[] {
  return comparisons;
}
