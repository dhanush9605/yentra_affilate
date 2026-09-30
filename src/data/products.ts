// =============================================================================
// YENTRA — Product Catalog (Amazon India Primary)
// =============================================================================
// All data is curated based on manufacturer technical documentation, verified
// specifications, and availability on Amazon India.
// =============================================================================

import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'sony-wh1000xm6',
    name: 'Sony WH-1000XM6 Wireless Noise Cancelling Headphones',
    slug: 'sony-wh-1000xm6',
    brand: 'Sony',
    categoryId: 'headphones',
    summary: "Sony's flagship wireless over-ear noise-cancelling headphones featuring refined acoustic drivers and industry-leading dual-processor ANC.",
    description:
      "The Sony WH-1000XM6 represents Sony's premium over-ear audio hardware, engineered with advanced dual-processor active noise cancellation, precision 30mm carbon composite drivers, and multi-microphone beamforming arrays. Designed for discerning listeners, commuters, and remote professionals, it delivers high-resolution audio support via Sony's proprietary LDAC codec alongside seamless multipoint device pairing.",
    images: ['/images/products/sony-wh1000xm6.svg'],
    specs: [
      { label: 'Driver Type', value: '30mm Carbon Composite Dome' },
      { label: 'Frequency Response', value: '4 Hz – 40,000 Hz (JEITA)' },
      { label: 'Noise Cancellation', value: 'Dual Processor (Integrated V2 + HD QN1)' },
      { label: 'Bluetooth Version', value: 'Bluetooth 5.3 (Multipoint, LDAC, AAC, SBC)' },
      { label: 'Battery Life', value: 'Up to 30 hours (ANC On), 40 hours (ANC Off)' },
      { label: 'Fast Charging', value: 'USB-C (3 minutes charge gives approx 3 hours)' },
      { label: 'Weight', value: 'Approx. 250g' },
      { label: 'Wired Connection', value: '3.5mm Stereo Audio Cable Included' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B0CZMS1YFJ' },
    },
    tags: ['editors-pick', 'premium'],
    pros: [
      'Industry-leading active noise cancellation for transport and office noise',
      'High-resolution LDAC wireless audio streaming support',
      'Plush, lightweight ergonomic headband and ear cushions for long sessions',
      'Dependable 30-hour battery life with rapid USB-C charging',
      'Reliable multipoint Bluetooth pairing across two devices simultaneously',
    ],
    cons: [
      'Premium price tier in the Indian market',
      'Earcups do not fold inward into a compact travel footprint',
      'LDAC high-resolution codec is supported on Android but not iOS devices',
    ],
    whoIsItFor:
      'Daily commuters, frequent flyers, software engineers, and audiophiles seeking top-tier passive and active acoustic isolation.',
    whoShouldAvoid:
      'Casual listeners on a strict budget or gym-goers requiring sweat-resistant sports-oriented headphones.',
    relatedProductIds: ['bose-qc45', 'apple-airpods-pro-2'],
    publishedAt: '2025-11-01',
    updatedAt: '2026-02-15',
    featured: true,
  },
  {
    id: 'bose-qc45',
    name: 'Bose QuietComfort 45 Bluetooth Headphones',
    slug: 'bose-quietcomfort-45',
    brand: 'Bose',
    categoryId: 'headphones',
    summary: "Bose's classic comfort-first over-ear headphones with balanced acoustic performance and intuitive physical tactile controls.",
    description:
      "The Bose QuietComfort 45 prioritizes all-day physical wearing comfort alongside proven active noise cancellation. Built with Bose's proprietary TriPort acoustic headphone structure, synthetic leather ear cushions, and minimal clamping pressure, it features physical button controls that prevent accidental touches during use.",
    images: ['/images/products/bose-qc45.svg'],
    specs: [
      { label: 'Acoustic Architecture', value: 'TriPort Acoustic Headphone Structure' },
      { label: 'Noise Cancellation', value: 'Quiet Mode (Full ANC) and Aware Mode' },
      { label: 'Battery Life', value: 'Up to 24 hours per full charge' },
      { label: 'Charging', value: 'USB-C (15 minutes yields up to 3 hours)' },
      { label: 'Connectivity', value: 'Bluetooth 5.1 (Up to 9m range, multipoint)' },
      { label: 'Weight', value: '240g' },
      { label: 'Controls', value: 'Physical tactile buttons' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B098FKXT8L' },
    },
    tags: ['best-value'],
    pros: [
      'Exceptionally light clamping force and plush cushions for all-day comfort',
      'Tactile physical buttons prevent accidental swipes or mis-touches',
      'Effective cancellation of low-frequency engine hum and background chatter',
      'Foldable design fits easily into the included travel hard case',
    ],
    cons: [
      'Lacks advanced high-res Bluetooth codecs like LDAC or aptX HD',
      'Aware transparency mode sounds slightly less natural than newer alternatives',
      'Cannot completely disable noise cancellation (must choose Quiet or Aware)',
    ],
    whoIsItFor:
      'Office workers, travelers, and students who place wearing comfort and simple button controls above complex audio tweakability.',
    whoShouldAvoid:
      'Listeners looking for high-bitrate LDAC audio codecs or extensive custom EQ presets.',
    relatedProductIds: ['sony-wh1000xm6', 'apple-airpods-pro-2'],
    publishedAt: '2025-10-10',
    updatedAt: '2026-01-20',
  },
  {
    id: 'apple-airpods-pro-2',
    name: 'Apple AirPods Pro (2nd Gen, USB-C)',
    slug: 'apple-airpods-pro-2',
    brand: 'Apple',
    categoryId: 'earbuds',
    summary: "Apple's flagship true-wireless in-ear earphones powered by the H2 chip with Adaptive Audio and MagSafe USB-C charging.",
    description:
      "The Apple AirPods Pro (2nd Generation with USB-C) features the Apple-designed H2 processor, which powers computational noise cancellation, Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking. The updated MagSafe charging case provides IP54 dust and water resistance, an integrated speaker for Find My alerts, and a lanyard loop.",
    images: ['/images/products/airpods-pro-2.svg'],
    specs: [
      { label: 'Audio Processor', value: 'Apple H2 Headphone Chip' },
      { label: 'Case Processor', value: 'Apple U1 / U2 Chip (Precision Finding)' },
      { label: 'Battery (Earbuds)', value: 'Up to 6 hours listening time with ANC on' },
      { label: 'Battery (Total with Case)', value: 'Up to 30 hours listening time' },
      { label: 'Charging Options', value: 'USB-C, MagSafe, Apple Watch charger, Qi' },
      { label: 'Ingress Protection', value: 'IP54 dust, sweat, and water resistant (buds & case)' },
      { label: 'Wireless Protocol', value: 'Bluetooth 5.3' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B0CHWRXH8B' },
    },
    tags: ['editors-pick', 'premium', 'trending'],
    pros: [
      'Unmatched software integration, fast-switching, and setup for Apple device owners',
      'Adaptive Audio intelligently blends ANC and transparency in dynamic environments',
      'Exceptional spatial audio performance with responsive head tracking',
      'Pocketable case with Find My precision tracking and built-in speaker',
    ],
    cons: [
      'Most advanced computational audio features require an iPhone or iPad to configure',
      'High-resolution codecs like LDAC are not available',
      'Silicone tip seal is critical to acoustic and noise cancellation performance',
    ],
    whoIsItFor:
      'Apple ecosystem users seeking high-performance true wireless earbuds for work calls, commuting, and everyday listening.',
    whoShouldAvoid:
      'Android device owners who cannot access firmware updates, spatial audio, or customization options.',
    relatedProductIds: ['sony-wf1000xm5'],
    publishedAt: '2025-09-15',
    updatedAt: '2026-02-10',
    featured: true,
  },
  {
    id: 'sony-wf1000xm5',
    name: 'Sony WF-1000XM5 Truly Wireless Earbuds',
    slug: 'sony-wf-1000xm5',
    brand: 'Sony',
    categoryId: 'earbuds',
    summary: "Compact, high-resolution true wireless earbuds with Dynamic Driver X, dual audio processors, and polyurethane foam tips.",
    description:
      "The Sony WF-1000XM5 earbuds pack Sony's flagship noise cancellation hardware into a chassis that is approximately 25% smaller and 20% lighter than its predecessor. Powered by the Integrated Processor V2 and HD Noise Cancelling Processor QN2e, it uses Dynamic Driver X acoustic architecture and included noise-isolation foam tips to block high and low frequency ambient sounds.",
    images: ['/images/products/sony-wf1000xm5.svg'],
    specs: [
      { label: 'Acoustic Driver', value: '8.4mm Dynamic Driver X' },
      { label: 'Processors', value: 'Integrated Processor V2 + HD QN2e' },
      { label: 'Audio Codecs', value: 'LDAC, LC3, AAC, SBC' },
      { label: 'Battery Life', value: 'Up to 8 hours (ANC on) + 16 hours via case (24h total)' },
      { label: 'Charging', value: 'USB-C and Qi Wireless Charging compatible' },
      { label: 'Water Resistance', value: 'IPX4 splash and sweat resistance' },
      { label: 'Bluetooth', value: 'Bluetooth 5.3 with multipoint connection' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B0C33XXND4' },
    },
    tags: ['editors-pick', 'premium'],
    pros: [
      'Supports high-resolution LDAC audio on modern Android phones',
      'Significantly smaller and more comfortable in-ear fit than previous generations',
      'Included polyurethane foam tips provide superior passive noise isolation',
      'Reliable multipoint pairing connects laptop and smartphone at once',
    ],
    cons: [
      'Glossy edge finish can make earbuds slippery to remove from the case',
      'Foam ear tips wear down faster than standard silicone tips and require periodic replacement',
      'Wind noise reduction on calls is average in heavy outdoor breezes',
    ],
    whoIsItFor:
      'Android smartphone users and audiophiles who prioritize wireless high-fidelity music playback and deep noise isolation.',
    whoShouldAvoid:
      'Users who dislike the pressure sensation of in-ear foam tips, or committed iOS users who benefit more from AirPods integration.',
    relatedProductIds: ['apple-airpods-pro-2'],
    publishedAt: '2025-08-20',
    updatedAt: '2026-01-25',
  },
  {
    id: 'samsung-galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 5G',
    slug: 'samsung-galaxy-s25-ultra',
    brand: 'Samsung',
    categoryId: 'smartphones',
    summary: "Samsung's flagship smartphone powered by Qualcomm Snapdragon 8 Elite, a 200MP camera system, and integrated S Pen.",
    description:
      "The Samsung Galaxy S25 Ultra is engineered with a lightweight titanium frame, a flat 6.9-inch Dynamic AMOLED 2X display with Corning Gorilla Armor anti-reflective glass, and Qualcomm's 3nm Snapdragon 8 Elite Mobile Platform for Galaxy. Equipped with an embedded S Pen stylus and a versatile quad-lens rear camera suite featuring 200MP wide and 50MP 5x periscope optical telephoto lenses.",
    images: ['/images/products/galaxy-s25-ultra.svg'],
    specs: [
      { label: 'Processor', value: 'Qualcomm Snapdragon 8 Elite for Galaxy (3nm)' },
      { label: 'Display', value: '6.9-inch Dynamic AMOLED 2X, QHD+, 1-120Hz LTPO' },
      { label: 'Rear Cameras', value: '200MP Main (OIS) + 50MP Ultra-Wide + 50MP 5x Telephoto + 10MP 3x Telephoto' },
      { label: 'Front Camera', value: '12MP Dual Pixel AF' },
      { label: 'Battery & Charging', value: '5,000 mAh (45W wired, 15W wireless)' },
      { label: 'Materials', value: 'Grade 5 Titanium Frame, Corning Gorilla Armor' },
      { label: 'Software Support', value: '7 Generations of Android OS and Security Updates' },
      { label: 'Stylus', value: 'Integrated S Pen with 4,096 pressure levels' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B0CYYFRH1T' },
    },
    tags: ['premium', 'trending', 'editors-pick'],
    pros: [
      'Top-tier computational and graphics performance via Snapdragon 8 Elite',
      'Corning Gorilla Armor significantly reduces glare and reflections in bright sunlight',
      'Exceptional camera versatility with 5x optical and up to 100x digital zoom',
      'Long-term value assurance with Samsung’s 7-year software update commitment',
      'Integrated S Pen remains unmatched for note-taking and document signing',
    ],
    cons: [
      'Substantial financial investment at the premium flagship tier',
      'Large 6.9-inch physical dimensions may feel unwieldy for smaller hands',
      'Wired charging speeds remain capped at 45W without a power adapter in the box',
    ],
    whoIsItFor:
      'Power users, enterprise professionals, mobile content creators, and photography enthusiasts demanding maximum productivity.',
    whoShouldAvoid:
      'Consumers looking for a compact one-handed phone or those unwilling to spend over ₹1,20,000 on a mobile device.',
    relatedProductIds: ['samsung-galaxy-watch-7'],
    publishedAt: '2026-01-22',
    updatedAt: '2026-03-05',
    featured: true,
  },
  {
    id: 'logitech-mx-master-3s',
    name: 'Logitech MX Master 3S Wireless Performance Mouse',
    slug: 'logitech-mx-master-3s',
    brand: 'Logitech',
    categoryId: 'mice',
    summary: "Ergonomic wireless mouse featuring 8000 DPI Darkfield tracking, near-silent click switches, and MagSpeed electromagnetic scrolling.",
    description:
      "The Logitech MX Master 3S is designed specifically for software developers, financial analysts, and creative professionals. Built with an ergonomic thumb-rest silhouette, it features Logitech's Quiet Click acoustic switches that dampen click noise by 90%, an 8000 DPI Darkfield optical sensor capable of tracking on glass, and the electromagnetic MagSpeed scroll wheel that shifts from ratchet precision to free-spin scrolling.",
    images: ['/images/products/logitech-mx-master-3s.svg'],
    specs: [
      { label: 'Sensor Technology', value: 'Darkfield High Precision (tracks on glass)' },
      { label: 'Nominal DPI', value: '1000 DPI (Adjustable from 200 to 8000 in 50 DPI steps)' },
      { label: 'Scroll Wheel', value: 'MagSpeed Electromagnetic with SmartShift' },
      { label: 'Switches', value: 'Quiet Click acoustic dampening (90% quieter)' },
      { label: 'Battery', value: 'Rechargeable Li-Po (500 mAh), up to 70 days per charge' },
      { label: 'Connectivity', value: 'Bluetooth Low Energy & Logi Bolt USB Receiver' },
      { label: 'Multi-Device', value: 'Easy-Switch across up to 3 paired computers' },
      { label: 'Weight', value: '141g' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B09HM94VDS' },
    },
    tags: ['editors-pick', 'best-value'],
    pros: [
      'Superb sculpted ergonomic grip minimizes forearm strain during long workdays',
      'MagSpeed wheel scrolls up to 1,000 lines per second in silent frictionless mode',
      'Quiet Click switches eliminate loud clicking noise in shared office environments',
      'Tracks reliably on virtually any surface, including clear glass desks (min 4mm thickness)',
    ],
    cons: [
      'Sculpted right-handed silhouette is completely unusable for left-handed users',
      '141g weight and 125Hz polling rate are not tailored for competitive fast-twitch gaming',
      'Logi Options+ configuration software requires significant system resources',
    ],
    whoIsItFor:
      'Programmers, financial modelers, video editors, and knowledge workers who spend 8+ hours daily at a workstation.',
    whoShouldAvoid:
      'Left-handed mouse users or competitive gamers who require ultralight 1000Hz+ esports mice.',
    relatedProductIds: ['keychron-k2-pro', 'anker-737-power-bank'],
    publishedAt: '2025-07-10',
    updatedAt: '2026-01-10',
  },
  {
    id: 'dyson-airwrap-complete',
    name: 'Dyson Airwrap Multi-Styler Complete',
    slug: 'dyson-airwrap-complete',
    brand: 'Dyson',
    categoryId: 'beauty-tools',
    summary: "Versatile multi-styler using aerodynamic Coanda airflow technology to curl, wave, and smooth hair without extreme heat damage.",
    description:
      "The Dyson Airwrap Multi-Styler Complete harnesses the physical Coanda effect to attract and wrap hair around cylindrical styling barrels using high-velocity airflow rather than extreme conduction heat. Powered by the Dyson digital motor V9 spinning at 110,000 RPM, it integrates intelligent thermistor heat control that monitors airflow temperature 40 times per second to keep heat consistently below 150°C.",
    images: ['/images/products/dyson-airwrap.svg'],
    specs: [
      { label: 'Motor', value: 'Dyson Digital Motor V9 (110,000 RPM)' },
      { label: 'Airflow Pressure', value: '3.2 kPa' },
      { label: 'Heat Regulation', value: 'Intelligent heat control below 150°C' },
      { label: 'Settings', value: '3 precise airflow speeds, 3 heat settings, 28°C cold shot' },
      { label: 'Power Consumption', value: '1300W (220V–240V Indian power compatible)' },
      { label: 'Cable Length', value: '2.68m swivel cord' },
      { label: 'Included Attachments', value: 'Coanda smoothing dryer, 30mm/40mm barrels, firm/soft smoothing brushes, round volumising brush' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B09BKFQNLS' },
    },
    tags: ['premium', 'editors-pick'],
    pros: [
      'Styles and dries simultaneously while protecting hair fibers from extreme heat damage',
      'Bidirectional Coanda airflow barrels allow curling in both directions without changing attachments',
      'Smoothing dryer attachment conceals flyaways under longer hair strands efficiently',
      'High-grade engineering and durable protective storage case included',
    ],
    cons: [
      'High upfront cost compared to conventional hair straighteners or curling wands',
      'Noticeable technique learning curve required before achieving consistent salon-style results',
      'Holding curls in very coarse or naturally straight resistant hair requires styling mousse/hairspray',
    ],
    whoIsItFor:
      'Individuals who style their hair frequently and want to prevent cumulative heat degradation on fine, color-treated, or medium hair.',
    whoShouldAvoid:
      'Budget shoppers or users with very short pixie-length hair that cannot wrap around the barrels.',
    relatedProductIds: [],
    publishedAt: '2025-10-20',
    updatedAt: '2026-02-05',
    featured: true,
  },
  {
    id: 'keychron-k2-pro',
    name: 'Keychron K2 Pro QMK/VIA Wireless Mechanical Keyboard',
    slug: 'keychron-k2-pro',
    brand: 'Keychron',
    categoryId: 'keyboards',
    summary: "Compact 75% wireless mechanical keyboard featuring open-source QMK/VIA key remapping, hot-swappable switches, and Mac/Windows support.",
    description:
      "The Keychron K2 Pro is a 75% layout mechanical keyboard engineered for programmers, typists, and hardware enthusiasts. It features hot-swappable switch sockets supporting both 3-pin and 5-pin mechanical switches, pre-lubed internal screw-in PCB stabilizers, sound-absorbing acoustic foam, and open-source QMK/VIA compatibility that allows complete custom key mapping across both macOS and Windows operating systems.",
    images: ['/images/products/keychron-k2-pro.svg'],
    specs: [
      { label: 'Layout', value: '75% (84 Keys)' },
      { label: 'Switch Compatibility', value: 'Hot-swappable 3-pin & 5-pin MX Mechanical Switches' },
      { label: 'Firmware Support', value: 'Open-Source QMK and VIA key remapping' },
      { label: 'Keycaps', value: 'Double-Shot PBT, Non-shine-through OSA Profile' },
      { label: 'Connectivity', value: 'Bluetooth 5.1 (Up to 3 devices) & USB Type-C Wired' },
      { label: 'Battery Capacity', value: '4000 mAh rechargeable lithium-polymer' },
      { label: 'Backlighting', value: 'South-facing RGB with 22 lighting presets' },
      { label: 'Stabilizers', value: 'PCB-mounted screw-in stabilizers' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B0BM6HBBBT' },
    },
    tags: ['best-value', 'editors-pick'],
    pros: [
      'Comprehensive QMK/VIA software support enables full key remapping and multi-layer macros',
      'Hot-swappable PCB allows switch replacement in minutes without any soldering',
      'Premium double-shot PBT keycaps resist oily finger shine and legend wear over years',
      'Seamless hardware toggle switch between Mac and Windows modifier layouts',
    ],
    cons: [
      'Relatively tall front typing height makes an external wrist rest advisable for comfort',
      'Bluetooth polling rate (90Hz) is suited for typing but not competitive multiplayer gaming',
      'Battery life drops significantly with south-facing RGB backlighting kept at maximum brightness',
    ],
    whoIsItFor:
      'Coders, writers, and desktop enthusiasts who want a durable, highly customizable mechanical keyboard without building one from scratch.',
    whoShouldAvoid:
      'Users looking for ultra-low-profile membrane laptop-style keyboards or 2.4GHz low-latency wireless gaming boards.',
    relatedProductIds: ['logitech-mx-master-3s'],
    publishedAt: '2025-06-15',
    updatedAt: '2026-01-18',
  },
  {
    id: 'anker-737-power-bank',
    name: 'Anker 737 Power Bank (PowerCore 24K, 140W)',
    slug: 'anker-737-power-bank',
    brand: 'Anker',
    categoryId: 'power-banks',
    summary: "High-capacity 24,000mAh portable charger with 140W bidirectional USB Power Delivery 3.1 and a real-time digital smart display.",
    description:
      "The Anker 737 Power Bank (PowerCore 24K) is built with USB Power Delivery 3.1 and proprietary PowerIQ 4.0 charging technology to deliver up to 140W of power through a single USB-C port. Equipped with an interactive color digital screen, it reports live input/output wattages, port distribution, remaining battery percentage, and time-to-full recharge while operating within aviation-compliant carry-on limits.",
    images: ['/images/products/anker-737.svg'],
    specs: [
      { label: 'Battery Capacity', value: '24,000 mAh (86.4 Wh — airline carry-on compliant)' },
      { label: 'Max Single Port Output', value: '140W via USB-C (Power Delivery 3.1 EPR)' },
      { label: 'Max Total Output', value: '140W simultaneous across connected devices' },
      { label: 'Max Input (Recharging)', value: '140W via USB-C (Full recharge in ~52 minutes)' },
      { label: 'Ports', value: '2x USB-C (Bi-directional), 1x USB-A (18W Max)' },
      { label: 'Display', value: 'Smart Digital Color Display (Wattage, Capacity, Health)' },
      { label: 'Safety System', value: 'ActiveShield 2.0 Intelligent Temperature Monitoring' },
      { label: 'Weight', value: '632g' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B09VPHVT2Z' },
    },
    tags: ['best-value'],
    pros: [
      'Capable of charging modern 14-inch and 16-inch laptops at full 100W-140W speeds',
      'Informative smart display shows accurate real-time wattages and battery health',
      '86.4Wh capacity is comfortably within the standard 100Wh flight carry-on allowance',
      'Rapid 140W self-recharge can take the power bank from empty to 100% in under one hour',
    ],
    cons: [
      'At 632g, it is heavy and bulky for casual pocket carry',
      'Requires a compatible 100W+ USB-PD charger and 140W-rated cable to achieve peak recharge speeds',
      'High-capacity output can generate noticeable internal warmth during prolonged sustained 140W draws',
    ],
    whoIsItFor:
      'Traveling developers, video producers, and remote workers who need to keep laptops and tablets powered away from wall sockets.',
    whoShouldAvoid:
      'Users who only need an emergency top-up for a smartphone and prefer an ultralight pocket-sized 5,000mAh battery.',
    relatedProductIds: ['logitech-mx-master-3s'],
    publishedAt: '2025-05-01',
    updatedAt: '2026-02-12',
  },
  {
    id: 'samsung-galaxy-watch-7',
    name: 'Samsung Galaxy Watch 7 (Bluetooth, 44mm)',
    slug: 'samsung-galaxy-watch-7',
    brand: 'Samsung',
    categoryId: 'smartwatches',
    summary: "Advanced Android smartwatch powered by a 3nm Exynos W1000 processor, dual-frequency GPS, and the BioActive health sensor.",
    description:
      "The Samsung Galaxy Watch 7 is built around Samsung's 3nm Exynos W1000 processor, bringing a tri-fold CPU speed improvement and increased power efficiency to Wear OS 5. Equipped with dual-frequency L1+L5 GPS for precise outdoor location tracking, a sapphire crystal display, and an enhanced BioActive sensor suite supporting heart rate, ECG, blood oxygen, body composition analysis, and sleep tracking.",
    images: ['/images/products/galaxy-watch-7.svg'],
    specs: [
      { label: 'Processor', value: 'Exynos W1000 (3nm, 5-Core)' },
      { label: 'Display', value: '1.5-inch Super AMOLED (480 x 480), Sapphire Crystal' },
      { label: 'Memory & Storage', value: '2GB RAM + 32GB Internal Storage' },
      { label: 'GNSS Location', value: 'Dual-frequency GPS (L1 + L5), GLONASS, Galileo, BeiDou' },
      { label: 'Biometric Sensors', value: 'BioActive Sensor (Optical HR, ECG, BIA Body Composition), Temperature Sensor' },
      { label: 'Durability', value: '5ATM water resistance + IP68 dust/water + MIL-STD-810H' },
      { label: 'Battery Capacity', value: '425 mAh (WPC-based wireless charging)' },
      { label: 'Operating System', value: 'Wear OS Powered by Samsung (One UI 6 Watch)' },
    ],
    affiliateLinks: {
      'amazon-in': { asin: 'B0D3J9JLGW' },
    },
    tags: ['trending'],
    pros: [
      'Exynos W1000 3nm chip eliminates UI stutter and handles app launching smoothly',
      'Dual-frequency L1+L5 GPS provides reliable route tracking between high-rise buildings and tree canopies',
      'Rich ecosystem of third-party Android apps via Google Play Store on Wear OS',
      'Comprehensive wellness suite including body composition, ECG, and sleep tracking',
    ],
    cons: [
      'ECG and Blood Pressure monitoring features require a paired Samsung Galaxy smartphone',
      'Battery longevity typically requires charging every 24 to 36 hours under normal usage',
      'Not compatible with Apple iOS devices',
    ],
    whoIsItFor:
      'Android smartphone owners — particularly Samsung Galaxy users — seeking an intelligent smartwatch with top-tier fitness and health metrics.',
    whoShouldAvoid:
      'iPhone users, or outdoor endurance athletes requiring multi-week battery longevity like dedicated Garmin watches.',
    relatedProductIds: ['samsung-galaxy-s25-ultra'],
    publishedAt: '2026-01-10',
    updatedAt: '2026-02-28',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getTrendingProducts(): Product[] {
  return products.filter((p) => p.tags.includes('trending'));
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getEditorsPicks(): Product[] {
  return products.filter((p) => p.tags.includes('editors-pick'));
}

export function getRelatedProducts(ids: string[]): Product[] {
  return ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];
}
