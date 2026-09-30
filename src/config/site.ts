// =============================================================================
// YENTRA — Site & Marketplace Configuration
// =============================================================================

import type { Marketplace } from '@/types';

export const SITE_CONFIG = {
  name: 'Yentra',
  tagline: 'Discover. Compare. Choose Better.',
  description:
    'Yentra is an independent consumer product review and buying-guide website focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yendra.com',
  defaultLocale: 'en-IN',
  country: 'India',
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@yendra.com',
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '',
  },
} as const;

// ---------------------------------------------------------------------------
// Marketplace definitions
// ---------------------------------------------------------------------------

export const MARKETPLACES: Record<string, Marketplace> = {
  'amazon-in': {
    id: 'amazon-in',
    name: 'Amazon India',
    country: 'India',
    domain: 'amazon.in',
    currency: 'INR',
    currencySymbol: '₹',
    locale: 'en-IN',
    associateTagEnvKey: 'AMAZON_IN_ASSOCIATE_TAG',
  },
  'amazon-uk': {
    id: 'amazon-uk',
    name: 'Amazon UK',
    country: 'United Kingdom',
    domain: 'amazon.co.uk',
    currency: 'GBP',
    currencySymbol: '£',
    locale: 'en-GB',
    associateTagEnvKey: 'AMAZON_UK_ASSOCIATE_TAG',
  },
};

/** The currently active primary marketplace */
export const PRIMARY_MARKETPLACE_ID = 'amazon-in' as const;

export const PRIMARY_MARKETPLACE = MARKETPLACES[PRIMARY_MARKETPLACE_ID];

