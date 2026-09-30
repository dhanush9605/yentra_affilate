import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — Yentra',
  description:
    'Yentra affiliate disclosure — how commercial affiliate links work, our pre-application status, and our commitment to editorial independence.',
};

export default function DisclosurePage() {
  return (
    <div className="py-14">
      <div className="container-site max-w-3xl">
        <div className="mb-8">
          <span className="badge badge-amber mb-4 inline-flex">Transparency & Compliance</span>
          <h1 className="text-4xl font-black text-[var(--text-primary)] mb-3">
            Affiliate Disclosure
          </h1>
          <p className="text-xs text-[var(--text-muted)]">Last updated: October 2026</p>
        </div>

        <div className="prose-yentra space-y-6 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
          {/* Truthful Pre-Application Statement */}
          <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
              <Info size={18} />
              <span>Core Disclosure Statement</span>
            </div>
            <p className="text-sm text-[var(--text-primary)] font-medium leading-relaxed">
              Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you.
            </p>
          </div>

          <h2 className="text-xl font-bold text-[var(--text-primary)]">What are Affiliate Links?</h2>
          <p>
            An affiliate link is a specific URL that contains an identifier enabling an e-commerce platform (such as Amazon India) to track that a visitor arrived from our website. If you follow an affiliate link and complete an eligible purchase, the retailer pays a small percentage of the sale to Yentra as a referral fee.
          </p>
          <p>
            <strong>The retail price you pay remains completely unchanged.</strong> You pay the exact same price whether you navigate directly to the retailer or access the product via our links.
          </p>

          <h2 className="text-xl font-bold text-[var(--text-primary)]">Current Associates & Program Status</h2>
          <p>
            Yentra is an independent consumer resource preparing for formal participation in affiliate marketing programs, primarily the Amazon India Associates Programme. At this stage:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
            <li>We do not claim active status under the Amazon Associates Programme until our application is formally submitted, reviewed, and approved by Amazon.</li>
            <li>Outbound product links currently route directly to the respective verified merchant product pages on Amazon India (amazon.in).</li>
            <li>Once an official tracking ID is issued upon program approval, links will include compliant tracking tags and the official Amazon statement: <em>&ldquo;As an Amazon Associate I earn from qualifying purchases.&rdquo;</em></li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--text-primary)]">Editorial Independence Guarantee</h2>
          <p>
            Our editorial evaluations, pros/cons breakdowns, and buying verdicts are decided entirely independently of affiliate commission structures.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
            <li>We do not accept paid placement fees, sponsored reviews, or pre-approved review copy from manufacturers.</li>
            <li>We never alter an editorial rating or withhold a product criticism to boost commission likelihood.</li>
            <li>If an affordable product provides superior value over an expensive flagship, we explicitly recommend the affordable product regardless of the lower commission it may generate.</li>
          </ul>

          <h2 className="text-xl font-bold text-[var(--text-primary)]">Questions or Feedback</h2>
          <p>
            If you have questions regarding this disclosure or any link on our website, please email our editorial desk at{' '}
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[var(--brand-primary)] hover:underline">
              {SITE_CONFIG.contact.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
