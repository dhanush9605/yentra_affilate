import type { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-20">
      <span className="text-8xl font-black gradient-text mb-6">404</span>
      <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Page not found</h1>
      <p className="text-[var(--text-muted)] max-w-md mb-8">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link href="/" className="btn-affiliate btn-primary text-sm px-6 py-3">
        <Home size={15} /> Back to home
      </Link>
    </div>
  );
}
