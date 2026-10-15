import { Star } from 'lucide-react';
import { REVIEWS } from '../data/reviews';
import { GOOGLE_MAPS_WRITE_REVIEW_LINK } from '../data/siteConfig';

export default function Reviews() {
  return (
    <section id="reviews" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto text-center reveal">
        <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          What Clients Say
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-white">Client Reviews</h2>
        <div className="underline-accent mx-auto my-6" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              style={{ '--delay': `${(i % 3) * 120}ms` }}
              className="reveal card-lift hover:border-accent/40 bg-bg-card border border-white/10 rounded-lg p-6 text-left flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-5 flex-1">"{review.text}"</p>
              <p className="text-white font-semibold text-sm">{review.name}</p>
            </div>
          ))}
        </div>

        <a
          href={GOOGLE_MAPS_WRITE_REVIEW_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded hover:border-accent hover:text-accent transition-colors uppercase tracking-wide text-sm"
        >
          Write a Review
        </a>
      </div>
    </section>
  );
}
