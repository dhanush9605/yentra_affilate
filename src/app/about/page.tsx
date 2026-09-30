import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, IndianRupee, ShieldCheck, BookOpen, Layers } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Yentra — Independent Consumer Guides & Reviews',
  description:
    'Learn about Yentra — an independent consumer product review and buying-guide publication focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.',
};

export default function AboutPage() {
  return (
    <div className="py-14">
      <div className="container-site max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <span className="badge badge-indigo mb-4 inline-flex">About Our Publication</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-4">
            What is <span className="gradient-text">Yentra</span>?
          </h1>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            Yentra is an independent consumer product review and buying-guide website focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[
            {
              icon: Target,
              title: 'Our Purpose',
              body: 'Help Indian consumers cut through hyperbolic marketing by providing objective, clear, and structured product evaluations before they spend their hard-earned money.',
              color: 'text-indigo-500',
              bg: 'bg-indigo-500/10',
            },
            {
              icon: IndianRupee,
              title: 'India-Focused Context',
              body: 'We evaluate products within the context of the Indian market: domestic retail pricing, climate durability, voltage compatibility, and availability on Amazon India.',
              color: 'text-emerald-500',
              bg: 'bg-emerald-500/10',
            },
            {
              icon: ShieldCheck,
              title: 'Editorial Independence',
              body: 'We do not publish sponsored reviews or accept paid placement fees from manufacturers. Product recommendations are decided strictly on merit.',
              color: 'text-violet-500',
              bg: 'bg-violet-500/10',
            },
            {
              icon: Layers,
              title: 'Independent Publication',
              body: 'Yentra is run as an independent editorial project dedicated to thorough research, clear comparison breakdowns, and honest consumer advice.',
              color: 'text-cyan-500',
              bg: 'bg-cyan-500/10',
            },
          ].map(({ icon: Icon, title, body, color, bg }) => (
            <div
              key={title}
              className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl flex flex-col gap-3"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>
                <Icon size={20} className={color} />
              </div>
              <h2 className="font-bold text-[var(--text-primary)]">{title}</h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Narrative & Methodology */}
        <div className="prose-yentra space-y-6 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">How Content is Researched</h2>
          <p>
            Rather than relying on unverified claims or copying promotional brochures, Yentra synthesizes official manufacturer engineering whitepapers, technical specifications, user manual documentation, and verified purchaser patterns.
          </p>
          <p>
            Where an evaluation is based on manufacturer specifications, we clearly present it as such rather than pretending to maintain laboratory test facilities or making fabricated claims of hands-on use. We outline real strengths, critical weaknesses, who a product is ideal for, and who should actively avoid it.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8">Commercial & Affiliate Transparency</h2>
          <p>
            Yentra may use affiliate links to recommend products. Where applicable, we may earn a commission when you purchase through our links, at no additional cost to you.
          </p>
          <p>
            This commercial structure allows our publication to remain freely accessible without intrusive paywalls or advertorials. Crucially, affiliate relationships never dictate our verdicts: we routinely point out flaws in popular high-commission items and recommend better budget-friendly alternatives whenever warranted.
          </p>

          <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8">Editorial Contact</h2>
          <p>
            We welcome corrections, suggestions, and feedback from our readers. Please reach out to our editorial desk at{' '}
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[var(--brand-primary)] hover:underline">
              {SITE_CONFIG.contact.email}
            </a>{' '}
            or visit our{' '}
            <Link href="/contact" className="text-[var(--brand-primary)] hover:underline">
              contact page
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
