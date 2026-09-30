# Yentra — Independent Product Reviews & Buying Guides

Yentra is an independent consumer product review and buying-guide website focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.

## Technology Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Custom CSS Variables Design System
- **Icons:** Lucide React
- **Animation & Visuals:** Framer Motion, OGL WebGL MicroSlats

## Architecture & Configuration

All domain, email, and affiliate settings are centralized in single-source-of-truth configuration files:

- **Site Configuration:** [`src/config/site.ts`](file:///c:/Users/dhanu/Downloads/amazon%20affiliate/yendra/src/config/site.ts)
- **Affiliate Link Engine:** [`src/lib/affiliate.ts`](file:///c:/Users/dhanu/Downloads/amazon%20affiliate/yendra/src/lib/affiliate.ts)
- **Environment Variables:** `.env.local` (see [`.env.example`](file:///c:/Users/dhanu/Downloads/amazon%20affiliate/yendra/.env.example))

### Affiliate Link Behavior

Outbound Amazon links strictly default to Amazon India (`amazon.in`). The helper function `createAmazonLink(asin)` in [`src/lib/affiliate.ts`](file:///c:/Users/dhanu/Downloads/amazon%20affiliate/yendra/src/lib/affiliate.ts) controls all outbound product CTAs:

- **Before Amazon Associates Approval:** Outbound links route to clean Amazon India product URLs (`https://www.amazon.in/dp/ASIN`).
- **After Amazon Associates Approval:** Adding `NEXT_PUBLIC_AMAZON_IN_ASSOCIATE_TAG=yourtag-21` (or `AMAZON_IN_ASSOCIATE_TAG=yourtag-21`) automatically appends your approved tracking tag across every component on the website without modifying code.

## Getting Started

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
