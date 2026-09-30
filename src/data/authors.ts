import type { Author } from '@/types';

export const authors: Author[] = [
  {
    id: 'yentra-editorial',
    name: 'Yentra Editorial',
    slug: 'yentra-editorial',
    bio: 'Independent product research and consumer buying guides for Indian shoppers.',
    role: 'Editorial',
  },
];

export function getAuthorById(id: string): Author | undefined {
  if (id === 'yendra-editorial' || id === 'yentra-editorial') {
    return authors[0];
  }
  return authors.find((a) => a.id === id);
}
