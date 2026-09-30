import type { Metadata } from 'next';
import HomePageContent from '@/components/home/HomePageContent';

export const metadata: Metadata = {
  title: 'Yentra — Independent Product Reviews & Buying Guides for Indian Shoppers',
  description:
    'Yentra is an independent consumer product review and buying-guide website focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.',
};

export default function HomePage() {
  return <HomePageContent />;
}
