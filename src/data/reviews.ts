// =============================================================================
// YENTRA — Editorial Reviews
// =============================================================================
// Independent, specification-grounded evaluations for Indian shoppers.
// All scores represent Yentra's internal editorial evaluations, NOT Amazon ratings.
// =============================================================================

import type { Review } from '@/types';

export const reviews: Review[] = [
  {
    id: 'review-sony-wh1000xm6',
    productId: 'sony-wh1000xm6',
    slug: 'sony-wh-1000xm6-review',
    title: 'Sony WH-1000XM6 Review: The Benchmark in Wireless Noise Cancellation',
    summary:
      'With upgraded dual-chip audio processing, refined LDAC support, and plush ergonomics, Sony reaffirms its position at the front of premium noise-cancelling headphones.',
    authorId: 'yentra-editorial',
    publishedAt: '2025-11-15',
    updatedAt: '2026-02-15',
    featuredImage: '/images/reviews/sony-wh1000xm6-review.svg',
    readingTime: 9,
    rating: {
      overall: 9.1,
      dimensions: [
        { label: 'Active Noise Cancellation', score: 9.6 },
        { label: 'Acoustic Sound Profile', score: 8.9 },
        { label: 'Long-Session Comfort', score: 8.8 },
        { label: 'Microphone & Call Clarity', score: 8.4 },
        { label: 'Battery Life & Charging', score: 9.2 },
        { label: 'Price-to-Feature Value', score: 7.9 },
      ],
      verdict: 'Outstanding',
    },
    overview:
      "The Sony WH-1000XM6 continues Sony's tradition of leading the premium wireless noise-cancelling headphone segment. Featuring dual-processor audio computation (Integrated Processor V2 working in tandem with the HD Noise Cancelling Processor QN1), precision 30mm carbon composite drivers, and multi-microphone beamforming arrays, these over-ear headphones target listeners who demand undisturbed focus in high-noise environments.",
    ourTake:
      'In our editorial assessment, Sony has focused on refining the practical aspects that define daily satisfaction: active cancellation depth, Bluetooth 5.3 connection stability, and dual-device multipoint handoff. The default sound profile leans moderately warm with satisfying sub-bass extension, yet retains clarity in vocal and acoustic ranges. If you are upgrading from older headsets like the WH-1000XM3 or XM4, the improvements in ambient noise suppression and microphone noise isolation are immediately tangible.',
    realWorldAnalysis:
      'For Indian users navigating metro commutes, open-plan workspaces, or domestic flights, the WH-1000XM6 excels at neutralizing steady low-frequency rumble such as jet engines and air-conditioning units. Irregular midrange frequencies, such as cafeteria conversations, are significantly attenuated. The inclusion of high-bitrate LDAC Bluetooth streaming allows Android users to stream uncompressed or high-bitrate audio from Apple Music and TIDAL. Note that iOS devices default to AAC, which remains well-tuned and latency-free.',
    verdict:
      'The Sony WH-1000XM6 delivers an uncompromising balance of cutting-edge active noise suppression, all-day wearing comfort, and 30-hour battery life. While priced firmly in the luxury bracket, its comprehensive feature set and proven audio fidelity justify the investment for serious listeners and remote professionals.',
    alternativeProductIds: ['bose-qc45'],
    seoTitle: 'Sony WH-1000XM6 Review — Yentra Editorial',
    seoDescription:
      'Comprehensive Yentra editorial analysis of the Sony WH-1000XM6 wireless noise-cancelling headphones. Specifications, pros, cons, and buyer recommendations.',
  },
  {
    id: 'review-apple-airpods-pro-2',
    productId: 'apple-airpods-pro-2',
    slug: 'apple-airpods-pro-2-review',
    title: 'Apple AirPods Pro (2nd Gen, USB-C) Review: The Gold Standard for iOS',
    summary:
      'Driven by the Apple H2 processor, the second-generation AirPods Pro delivers standout computational noise cancellation and seamless iOS ecosystem synergy.',
    authorId: 'yentra-editorial',
    publishedAt: '2025-10-01',
    updatedAt: '2026-02-10',
    featuredImage: '/images/reviews/airpods-pro-2-review.svg',
    readingTime: 8,
    rating: {
      overall: 9.2,
      dimensions: [
        { label: 'Active Noise Cancellation', score: 9.4 },
        { label: 'Transparency & Natural Sound', score: 9.8 },
        { label: 'Ergonomic In-Ear Fit', score: 8.7 },
        { label: 'Ecosystem & Device Switching', score: 9.9 },
        { label: 'Battery Longevity', score: 8.3 },
        { label: 'Value for Money', score: 7.8 },
      ],
      verdict: 'Outstanding',
    },
    overview:
      "Apple's second-generation AirPods Pro with USB-C represents the pinnacle of compact true wireless acoustic engineering for iPhone, iPad, and Mac users. Powered by the proprietary H2 chip, it combines custom low-distortion drivers with computational audio to deliver Adaptive Audio, Personalized Spatial Audio with dynamic head tracking, and deep active noise cancellation.",
    ourTake:
      'For anyone invested in the Apple ecosystem, the AirPods Pro 2 remains virtually peerless. What makes these earbuds stand out in practical use is not merely raw noise isolation, but the natural quality of the Transparency mode and Adaptive Audio, which dynamically lowers volume when someone speaks to you and dials down harsh unexpected noises like traffic horns or sirens without muting your audio.',
    realWorldAnalysis:
      'The inclusion of four sizes of silicone ear tips (XS to L) ensures a broad range of acoustic seals. The MagSafe charging case with USB-C brings welcome cross-platform cable parity, and the integrated speaker and U1/U2 chip allow accurate directional Find My tracking. While Android users can connect via standard Bluetooth, they lose out on firmware updates, Spatial Audio, and device switching, making this product primarily compelling for iOS users.',
    verdict:
      'The AirPods Pro 2 offers the best combination of noise cancellation, transparency, pocketability, and software fluidity for Apple owners. It remains our definitive top recommendation in the premium in-ear wireless category.',
    alternativeProductIds: ['sony-wf1000xm5'],
    seoTitle: 'Apple AirPods Pro (2nd Gen) Review — Yentra Editorial',
    seoDescription:
      'Independent Yentra editorial review of the Apple AirPods Pro 2 (USB-C). Evaluation of H2 audio processing, active noise cancellation, and ecosystem value.',
  },
  {
    id: 'review-dyson-airwrap',
    productId: 'dyson-airwrap-complete',
    slug: 'dyson-airwrap-complete-review',
    title: 'Dyson Airwrap Multi-Styler Complete Review: Aerodynamics Over Extreme Heat',
    summary:
      'By utilizing the aerodynamic Coanda effect rather than extreme conduction temperatures, the Dyson Airwrap rethinks home styling for fine and medium hair.',
    authorId: 'yentra-editorial',
    publishedAt: '2025-11-20',
    updatedAt: '2026-02-05',
    featuredImage: '/images/reviews/dyson-airwrap-review.svg',
    readingTime: 10,
    rating: {
      overall: 8.3,
      dimensions: [
        { label: 'Heat Protection & Hair Health', score: 9.6 },
        { label: 'Versatility of Attachments', score: 9.2 },
        { label: 'Styling Results Quality', score: 8.4 },
        { label: 'Build Engineering', score: 9.3 },
        { label: 'Learning Curve Ease', score: 6.8 },
        { label: 'Overall Price-to-Value', score: 6.2 },
      ],
      verdict: 'Very Good',
    },
    overview:
      'The Dyson Airwrap Multi-Styler Complete is an all-in-one personal hair styling tool designed to curl, wave, smooth, and dry hair simultaneously. Instead of relying on metal hot plates that exceed 200°C, the Airwrap uses the aerodynamic Coanda effect, directing high-velocity air produced by the 110,000 RPM Dyson digital motor V9 to wrap hair naturally around barrels while maintaining temperatures below 150°C.',
    ourTake:
      'The engineering behind the Airwrap is genuinely impressive. For users concerned with cumulative heat degradation, split ends, or color fade, switching from conventional curling tongs or flat irons to the Airwrap can visibly preserve hair moisture and luster over months of use. However, buyers should recognize that this tool operates on airflow rather than searing heat, meaning styling techniques must be adapted.',
    realWorldAnalysis:
      'The Airwrap performs most reliably on damp hair (roughly 80% dry) with fine to medium texture. Users with very thick, coarse, or highly resistant hair will find that creating long-lasting curls requires structured prep with mousse, setting sprays, and smaller hair sections. The bidirectional curling barrels eliminate the awkward attachment swapping of earlier models, saving significant time during a morning routine.',
    verdict:
      'If your hair is fine, medium, or color-treated, and you style multiple times a week, the Dyson Airwrap justifies its steep investment by protecting hair health over years of daily usage. Those with very short haircuts or seeking instant pin-straight results may prefer dedicated tools.',
    alternativeProductIds: [],
    seoTitle: 'Dyson Airwrap Complete Review — Yentra Editorial',
    seoDescription:
      'Yentra editorial analysis of the Dyson Airwrap Multi-Styler Complete. Examining heat safety, Coanda technology, attachment versatility, and real-world value.',
  },
  {
    id: 'review-logitech-mx-master-3s',
    productId: 'logitech-mx-master-3s',
    slug: 'logitech-mx-master-3s-review',
    title: 'Logitech MX Master 3S Review: The Definitive Desk Ergonomics Mouse',
    summary:
      'Near-silent mechanical switches, an 8000 DPI Darkfield sensor that tracks on glass, and the MagSpeed scroll wheel make the MX Master 3S the undisputed king of office mice.',
    authorId: 'yentra-editorial',
    publishedAt: '2025-07-25',
    updatedAt: '2026-01-10',
    featuredImage: '/images/reviews/mx-master-3s-review.svg',
    readingTime: 7,
    rating: {
      overall: 8.9,
      dimensions: [
        { label: 'Ergonomic Comfort', score: 9.4 },
        { label: 'Scrolling Mechanism', score: 9.7 },
        { label: 'Acoustic Noise Reduction', score: 9.5 },
        { label: 'Multi-Device Productivity', score: 9.0 },
        { label: 'Battery Endurance', score: 9.2 },
        { label: 'Value for Money', score: 8.3 },
      ],
      verdict: 'Excellent',
    },
    overview:
      "The Logitech MX Master 3S is Logitech's flagship productivity peripheral, crafted specifically for power users, developers, and creatives. It builds upon its predecessor by introducing Quiet Click acoustic dampening switches (reducing click noise by 90%) and doubling the optical tracking sensitivity to 8000 DPI to accommodate modern high-resolution 4K and ultra-wide monitor setups.",
    ourTake:
      'Few productivity peripherals offer as tangible a quality-of-life upgrade as the MX Master 3S. The electromagnetic MagSpeed scroll wheel seamlessly switches between click-to-click precision and frictionless 1,000-lines-per-second spinning, transforming navigation through lengthy source code files, large spreadsheets, and project timelines. The Quiet Click switches make it a pleasure to use in shared quiet office spaces or late-night home workrooms.',
    realWorldAnalysis:
      'Logitech Options+ software enables custom button mappings per application (e.g., zoom in Photoshop, tab switching in Chrome, or timeline scrub in Premiere Pro). Bluetooth connectivity pairs with up to three distinct devices with quick toggle buttons on the base. Battery life is rated at up to 70 days on a full charge, and a one-minute quick charge via USB-C provides roughly three hours of practical usage.',
    verdict:
      'For right-handed desktop professionals seeking optimal wrist posture, silent operation, and unmatched navigation mechanics, the Logitech MX Master 3S is the undisputed benchmark productivity mouse.',
    alternativeProductIds: [],
    seoTitle: 'Logitech MX Master 3S Review — Yentra Editorial',
    seoDescription:
      'Yentra independent editorial evaluation of the Logitech MX Master 3S wireless mouse. Ergonomics, MagSpeed scrolling, silent switches, and software utility.',
  },
  {
    id: 'review-samsung-galaxy-s25-ultra',
    productId: 'samsung-galaxy-s25-ultra',
    slug: 'samsung-galaxy-s25-ultra-review',
    title: 'Samsung Galaxy S25 Ultra Review: The Apex of Android Flagships',
    summary:
      'Armed with the 3nm Snapdragon 8 Elite, an anti-reflective Gorilla Armor flat panel, and seven years of OS updates, the S25 Ultra represents Android engineering at its peak.',
    authorId: 'yentra-editorial',
    publishedAt: '2026-01-28',
    updatedAt: '2026-03-05',
    featuredImage: '/images/reviews/galaxy-s25-ultra-review.svg',
    readingTime: 11,
    rating: {
      overall: 9.0,
      dimensions: [
        { label: 'Raw Performance & Thermals', score: 9.6 },
        { label: 'Display & Anti-Reflective Coating', score: 9.7 },
        { label: 'Camera Versatility & Zoom', score: 9.3 },
        { label: 'Productivity & S Pen', score: 9.5 },
        { label: 'Battery Endurance & Charging', score: 8.2 },
        { label: 'Long-Term Update Value', score: 9.2 },
      ],
      verdict: 'Outstanding',
    },
    overview:
      "The Samsung Galaxy S25 Ultra is Samsung's marquee flagship device, built with a refined titanium frame, flat 6.9-inch Dynamic AMOLED 2X screen, and Qualcomm's cutting-edge Snapdragon 8 Elite Mobile Platform for Galaxy. It features an integrated S Pen stylus, a comprehensive quad-camera system with a 200MP main sensor and 5x periscope telephoto, and a manufacturer commitment to seven generations of Android OS updates.",
    ourTake:
      'The S25 Ultra is engineered for users who want zero compromises on hardware capability. The Snapdragon 8 Elite delivers generational jumps in CPU and GPU throughput, effortlessly sustaining heavy multitasking, gaming, and 4K60 video rendering. Crucially, the Corning Gorilla Armor glass significantly cuts down ambient reflections, making outdoor readability in bright Indian sunlight the best in its class.',
    realWorldAnalysis:
      'The camera system shines in versatile shooting scenarios: the 200MP sensor captures rich textural detail in daylight, while the 50MP 5x periscope lens delivers sharp optical magnification without digital artifacts. Galaxy AI utilities such as Circle to Search and Live Translate provide practical daily conveniences. Charging speed remains at 45W wired, which trails some rival high-wattage charging competitors, but the 5,000mAh cell comfortably handles a full day of demanding usage.',
    verdict:
      'The Samsung Galaxy S25 Ultra is the most capable, complete, and durable Android smartphone currently on the market. For power users and creative professionals who utilize the S Pen and telephoto camera versatility, it stands at the summit of modern mobile hardware.',
    alternativeProductIds: [],
    seoTitle: 'Samsung Galaxy S25 Ultra Review — Yentra Editorial',
    seoDescription:
      'In-depth Yentra editorial review of the Samsung Galaxy S25 Ultra. Snapdragon 8 Elite performance, 200MP camera analysis, S Pen productivity, and long-term value.',
  },
  {
    id: 'review-keychron-k2-pro',
    productId: 'keychron-k2-pro',
    slug: 'keychron-k2-pro-review',
    title: 'Keychron K2 Pro Review: The Sweet Spot in Mechanical Keyboards',
    summary:
      'With full QMK/VIA programmability, hot-swappable switch sockets, and cross-platform Mac/Windows switches, the K2 Pro provides exceptional typing value.',
    authorId: 'yentra-editorial',
    publishedAt: '2025-06-28',
    updatedAt: '2026-01-18',
    featuredImage: '/images/reviews/keychron-k2-pro-review.svg',
    readingTime: 8,
    rating: {
      overall: 8.6,
      dimensions: [
        { label: 'Acoustic Profile & Typing Feel', score: 8.8 },
        { label: 'Customization & QMK/VIA', score: 9.5 },
        { label: 'Chassis & Keycap Durability', score: 8.5 },
        { label: 'Wireless Multi-Pairing', score: 8.0 },
        { label: 'Ergonomic Typing Angle', score: 7.6 },
        { label: 'Price-to-Performance Ratio', score: 9.3 },
      ],
      verdict: 'Excellent',
    },
    overview:
      'The Keychron K2 Pro is a compact 75% wireless mechanical keyboard designed for software engineers, copywriters, and hardware customizers. It features a space-saving 84-key layout that preserves dedicated navigation arrows and function rows while offering hot-swappable switch sockets, sound-absorbing acoustic foam layers, double-shot PBT keycaps, and complete QMK/VIA open-source firmware compatibility.',
    ourTake:
      'The K2 Pro hits the sweet spot between plug-and-play accessibility and deep customizability. Many commercial mechanical keyboards lock users into proprietary bloatware; Keychron bypasses this by adopting the open-source VIA web interface, allowing instant key remapping, media control assignment, and multi-layer macros that save directly onto the onboard memory. Pre-lubed Gateron switches and screw-in PCB stabilizers provide a smooth, rattle-free typing feel right out of the box.',
    realWorldAnalysis:
      'In typical office or home office environments, the 75% footprint preserves precious desk space for mouse travel without sacrificing dedicated arrow keys. The Mac/Windows hardware toggle switch on the side makes it effortless for hybrid workers who switch between an office PC and a personal MacBook. Note that the keyboard chassis has a relatively high front profile, so pairing it with a padded wrist rest is recommended for extended writing sessions.',
    verdict:
      'The Keychron K2 Pro is our top-recommended wireless mechanical keyboard for typists and coders seeking premium build materials, hot-swap flexibility, and open-source remapping without spending enthusiast-tier custom keyboard prices.',
    alternativeProductIds: [],
    seoTitle: 'Keychron K2 Pro Review — Yentra Editorial',
    seoDescription:
      'Independent Yentra editorial review of the Keychron K2 Pro 75% mechanical keyboard. QMK/VIA remapping, hot-swap PCB, Gateron switches, and ergonomics.',
  },
];

export function getReviewBySlug(slug: string): Review | undefined {
  return reviews.find((r) => r.slug === slug);
}

export function getReviewByProductId(productId: string): Review | undefined {
  return reviews.find((r) => r.productId === productId);
}

export function getLatestReviews(count = 6): Review[] {
  return [...reviews]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}
