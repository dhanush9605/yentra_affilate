import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Mail, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy — Yentra',
  description: 'Privacy Policy for Yentra. Explaining how we handle user data, cookies, external links, and communications.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-14">
      <div className="container-site max-w-3xl">
        <div className="mb-10">
          <span className="badge badge-emerald mb-4 inline-flex">Transparency</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-[var(--text-muted)]">Last updated: October 2026</p>
        </div>

        <div className="prose-yentra space-y-8 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
          <div className="p-5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-2xl">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              <strong>Overview:</strong> Yentra is an independent consumer information and review website. We do not require user accounts, we do not operate a user database, and we do not sell personal data. This policy outlines how information is handled when you browse Yentra.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">1. Information We Do Not Collect</h2>
            <p>
              Unlike many web services, Yentra does not require registration, login credentials, passwords, or personal profiles. We do not maintain a user database, newsletter marketing funnel, or payment gateway.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">2. Local Browser Storage & Preferences</h2>
            <p>
              Our website uses browser local storage solely to store your visual theme preference (light mode or dark mode) via your web browser. This preference is stored locally on your device and is not transmitted to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">3. External Links & Affiliate Relationships</h2>
            <p>
              Yentra contains outbound hyperlinks to third-party e-commerce platforms, primarily Amazon India (amazon.in). When you click an external link to Amazon:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>You leave Yentra and navigate to an external website governed by Amazon’s own Privacy Notice and Terms of Use.</li>
              <li>Amazon may place functional cookies or session identifiers on your browser according to their standard operating procedures to track qualifying purchases.</li>
              <li>Yentra does not receive, process, or store your name, payment details, address, or billing information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">4. Communications Sent by You</h2>
            <p>
              If you contact Yentra directly by emailing our published editorial address (such as to provide product feedback or editorial corrections), we receive your email address and any text content you include in your message. This correspondence is used exclusively to answer your inquiry and is never shared, rented, or sold.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">5. Hosting & Server Logs</h2>
            <p>
              Our website is hosted on modern cloud edge infrastructure (such as Vercel). Like standard web servers, basic request headers (such as IP address, operating system, and browser user agent) are processed ephemerally at the network layer to deliver web pages securely and prevent denial-of-service abuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">6. User Rights</h2>
            <p>
              Under applicable Indian information technology and digital personal data protection principles, you have the right to inquire about any data you transmit to us via email correspondence and request its deletion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">7. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please reach out directly to our editorial contact:
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
