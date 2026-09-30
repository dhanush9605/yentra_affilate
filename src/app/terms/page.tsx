import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Use — Yentra',
  description: 'Terms and conditions governing the informational and editorial use of Yentra.',
};

export default function TermsPage() {
  return (
    <div className="py-14">
      <div className="container-site max-w-3xl">
        <div className="mb-10">
          <span className="badge badge-amber mb-4 inline-flex">Legal Terms</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
            Terms of Use
          </h1>
          <p className="text-xs text-[var(--text-muted)]">Last updated: October 2026</p>
        </div>

        <div className="prose-yentra space-y-8 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">1. Website Purpose & Informational Scope</h2>
            <p>
              Yentra is an independent digital publication providing consumer product reviews, technical comparisons, and buying guides focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products. All content is published strictly for informational, educational, and editorial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">2. Editorial Independence & Opinions</h2>
            <p>
              Evaluations, verdicts, scores, and buying advice presented on Yentra represent the independent editorial assessments of Yentra Editorial. While we strive to base our publications on verified manufacturer specifications and extensive product research, our assessments constitute editorial opinions rather than guaranteed warranties or representations of performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">3. Product Specifications & Pricing Limitations</h2>
            <p>
              Product specifications, availability, features, and retail prices on third-party marketplaces (including Amazon India) change frequently due to manufacturer updates, currency movements, and merchant promotions. Yentra does not operate live pricing feeds and cannot guarantee that product prices, configurations, or stock statuses match third-party listings at any given moment. Readers are advised to verify all pricing and technical specifications directly on the merchant listing before making a financial commitment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">4. Outbound Links & Third-Party Merchants</h2>
            <p>
              Yentra contains outbound hyperlinks to third-party merchant sites, primarily Amazon India (amazon.in). When you follow an external link, you leave Yentra. Yentra does not sell physical goods, process retail transactions, manage fulfillment, or accept payments. Any purchase made through an external link is executed entirely between you and the respective third-party merchant, subject to that merchant’s terms, return policies, and warranties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">5. Commercial Relationships & Affiliate Disclosure</h2>
            <p>
              Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you. For comprehensive information on how commercial links are managed, please consult our dedicated{' '}
              <Link href="/disclosure" className="text-[var(--brand-primary)] hover:underline">
                Affiliate Disclosure
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">6. Intellectual Property & Acceptable Use</h2>
            <p>
              All original text, editorial articles, evaluations, graphics, and layout designs published on Yentra are protected by intellectual property laws. You may read, share, and link to our content for personal, non-commercial purposes. You may not scrape, copy, republish, or syndicate our editorial text in bulk without prior written permission.
            </p>
            <p className="mt-2">
              All third-party trademarks, product names, logos, and brand identities referenced on Yentra remain the property of their respective trademark holders. Reference to them is strictly nominative to identify the specific goods under discussion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable Indian law, Yentra and its operators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your reliance on editorial content, product recommendations, or transactions concluded with third-party retailers linked from our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">8. Contact Information</h2>
            <p>
              Questions regarding these Terms of Use should be directed via email to:
            </p>
            <p className="mt-2 font-medium">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-[var(--brand-primary)] hover:underline"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
