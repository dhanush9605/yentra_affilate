// =============================================================================
// YENTRA — Centralized Amazon Affiliate Link System
// =============================================================================
// All outbound Amazon links MUST flow through these functions.
// No component should manually construct affiliate URLs.
//
// Rules:
// 1. Defaults strictly to Amazon India (https://www.amazon.in/).
// 2. If no Associate Tag is configured in environment variables:
//    Outputs clean non-affiliate link: https://www.amazon.in/dp/ASIN
// 3. When the user receives their real tag from Amazon and configures
//    NEXT_PUBLIC_AMAZON_IN_ASSOCIATE_TAG or AMAZON_IN_ASSOCIATE_TAG:
//    Outputs: https://www.amazon.in/dp/ASIN?tag=REAL_TAG
// =============================================================================

import type { MarketplaceId } from '@/types';
import { MARKETPLACES, PRIMARY_MARKETPLACE_ID } from '@/config/site';

/**
 * Retrieves the configured Amazon India associate tag, if any.
 * Checks both client-accessible NEXT_PUBLIC_AMAZON_IN_ASSOCIATE_TAG
 * and server-only AMAZON_IN_ASSOCIATE_TAG.
 */
export function getAmazonInAssociateTag(): string | null {
  const tag =
    process.env.NEXT_PUBLIC_AMAZON_IN_ASSOCIATE_TAG ||
    process.env.AMAZON_IN_ASSOCIATE_TAG ||
    '';

  const cleanTag = tag.trim();
  // Ensure we never return a placeholder or empty tag
  if (!cleanTag || cleanTag === 'yendra-21' || cleanTag === 'yourtag-21') {
    return null;
  }
  return cleanTag;
}

/**
 * Primary helper for creating Amazon India URLs.
 * All product CTAs should use this function.
 *
 * @param asin - Amazon Standard Identification Number (10 alphanumeric characters)
 * @returns Clean URL with ?tag= if tag is configured, or clean Amazon India URL if not yet active.
 */
export function createAmazonLink(asin: string): string {
  const cleanAsin = asin.trim();
  if (!cleanAsin) return 'https://www.amazon.in/';

  const tag = getAmazonInAssociateTag();
  if (tag) {
    return `https://www.amazon.in/dp/${cleanAsin}?tag=${encodeURIComponent(tag)}`;
  }

  return `https://www.amazon.in/dp/${cleanAsin}`;
}

/**
 * Backwards-compatible affiliate link generator.
 * Defaults marketplace to Amazon India ('amazon-in').
 */
export function createAffiliateLink(
  asin: string,
  marketplaceId: MarketplaceId = PRIMARY_MARKETPLACE_ID
): { url: string; isConfigured: boolean } {
  const cleanAsin = asin.trim();
  const tag = getAmazonInAssociateTag();

  if (!cleanAsin) {
    return { url: 'https://www.amazon.in/', isConfigured: false };
  }

  if (marketplaceId === 'amazon-in' || !marketplaceId) {
    if (tag) {
      return {
        url: `https://www.amazon.in/dp/${cleanAsin}?tag=${encodeURIComponent(tag)}`,
        isConfigured: true,
      };
    }
    return {
      url: `https://www.amazon.in/dp/${cleanAsin}`,
      isConfigured: false,
    };
  }

  // Fallback for non-India if ever specified
  const marketplace = MARKETPLACES[marketplaceId] || MARKETPLACES['amazon-in'];
  return {
    url: `https://www.${marketplace.domain}/dp/${cleanAsin}`,
    isConfigured: false,
  };
}

/**
 * Explicit non-affiliate URL generator (clean Amazon India product page).
 */
export function createNonAffiliateUrl(
  asin: string,
  marketplaceId: MarketplaceId = PRIMARY_MARKETPLACE_ID
): string {
  const cleanAsin = asin.trim();
  if (!cleanAsin) return 'https://www.amazon.in/';
  const marketplace = MARKETPLACES[marketplaceId] || MARKETPLACES['amazon-in'];
  return `https://www.${marketplace.domain}/dp/${cleanAsin}`;
}

/**
 * Checks whether an Amazon Associates tag is currently active.
 * Currently returns false because no tag is assigned.
 */
export function isAffiliateTagActive(): boolean {
  return getAmazonInAssociateTag() !== null;
}

/** Legacy alias */
export const isAnyAffiliateConfigured = isAffiliateTagActive;
