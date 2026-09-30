import type { Metadata } from 'next';
import { Mail, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact — Yentra',
  description: 'Get in touch with Yentra Editorial for feedback, product corrections, suggestions, or editorial inquiries.',
};

export default function ContactPage() {
  return (
    <div className="py-14">
      <div className="container-site max-w-3xl">
        <div className="mb-10">
          <span className="badge badge-indigo mb-4 inline-flex">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
            Contact <span className="gradient-text">Yentra</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Have a question, product suggestion, or factual correction? We welcome constructive communication from readers.
          </p>
        </div>

        <div className="space-y-8">
          {/* Primary Contact Card */}
          <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
              <Mail size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Email Our Editorial Desk</h2>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                For all general correspondence, editorial feedback, and corrections:
              </p>
            </div>
            <div className="pt-2">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-[var(--brand-primary)] hover:underline"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              We review incoming messages regularly and prioritize factual corrections and reader queries.
            </p>
          </div>

          {/* What You Can Contact Us About */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">What You Can Contact Us About</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-xl space-y-2">
                <AlertCircle size={18} className="text-amber-500" />
                <h3 className="font-bold text-sm text-[var(--text-primary)]">Factual Corrections</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  If you spot an inaccurate specification or outdated information in any of our guides, please notify us with the product name and correction.
                </p>
              </div>

              <div className="p-5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-xl space-y-2">
                <Sparkles size={18} className="text-indigo-500" />
                <h3 className="font-bold text-sm text-[var(--text-primary)]">Product Suggestions</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Are you researching a tech, gaming, or beauty item available on Amazon India that you would like our editorial team to break down? Send your request.
                </p>
              </div>

              <div className="p-5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-xl space-y-2">
                <MessageSquare size={18} className="text-emerald-500" />
                <h3 className="font-bold text-sm text-[var(--text-primary)]">General Feedback</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Suggestions on how we can improve our comparison tables, readability, or mobile viewing experience are always valued.
                </p>
              </div>
            </div>
          </div>

          {/* Honest Transparency Note */}
          <div className="p-5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-xl text-xs text-[var(--text-muted)] leading-relaxed">
            <p>
              <strong>Notice:</strong> Yentra is an independent digital publication. We do not sell retail products directly, process customer orders, or handle logistics for items purchased through merchant links. For delivery inquiries or order cancellations, please contact Amazon India customer service directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
