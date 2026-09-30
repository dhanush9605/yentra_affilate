'use client';

interface StarRatingProps {
  score: number; // 0-10
  size?: 'sm' | 'md';
}

export default function StarRating({ score, size = 'sm' }: StarRatingProps) {
  // Convert 0-10 to 0-5
  const stars = score / 2;
  const full = Math.floor(stars);
  const partial = stars - full;
  const empty = 5 - full - (partial > 0 ? 1 : 0);

  const sz = size === 'sm' ? 14 : 18;

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${score} out of 10`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`full-${i}`} width={sz} height={sz} viewBox="0 0 24 24" fill="#f59e0b">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
      {partial > 0.1 && (
        <svg width={sz} height={sz} viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`partial-${score}`}>
              <stop offset={`${partial * 100}%`} stopColor="#f59e0b" />
              <stop offset={`${partial * 100}%`} stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={`url(#partial-${score})`}
          />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`empty-${i}`} width={sz} height={sz} viewBox="0 0 24 24" fill="#e2e8f0">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}
