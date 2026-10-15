import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/gallery';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(null);

  const isOpen = activeIndex !== null;

  const openAt = (index) => setActiveIndex(index);
  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, showPrev, showNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 50;
    if (deltaX > SWIPE_THRESHOLD) showPrev();
    else if (deltaX < -SWIPE_THRESHOLD) showNext();
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto text-center reveal">
        <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Our Work
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-white">Gallery</h2>
        <div className="underline-accent mx-auto my-6" />
        <p className="text-gray-400 max-w-2xl mx-auto">
          A look at recent hair, makeup, and henna work from our team.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <button
              key={img.src}
              onClick={() => openAt(index)}
              style={{ '--delay': `${(index % 4) * 90}ms` }}
              className="reveal group relative aspect-square overflow-hidden rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={`Open image ${index + 1} of ${GALLERY_IMAGES.length}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/0 to-transparent group-hover:from-accent-deep/40 transition-colors duration-500" />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-accent transition-colors p-2 z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={showPrev}
            aria-label="Previous image"
            className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-accent transition-colors p-2 z-10"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={showNext}
            aria-label="Next image"
            className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-accent transition-colors p-2 z-10"
          >
            <ChevronRight size={40} />
          </button>

          <img
            src={GALLERY_IMAGES[activeIndex].src}
            alt={GALLERY_IMAGES[activeIndex].alt}
            className="max-h-[85vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded shadow-2xl select-none"
          />

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={showPrev}
              aria-label="Previous image"
              className="sm:hidden text-white/70 hover:text-accent transition-colors p-2"
            >
              <ChevronLeft size={28} />
            </button>
            <p className="text-gray-400 text-xs sm:text-sm tracking-wide">
              {activeIndex + 1} / {GALLERY_IMAGES.length}
            </p>
            <button
              onClick={showNext}
              aria-label="Next image"
              className="sm:hidden text-white/70 hover:text-accent transition-colors p-2"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
