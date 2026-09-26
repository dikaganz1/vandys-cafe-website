'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryImage = {
  src: string;
  alt: string;
  category: 'Coffee' | 'Food' | 'Cafe' | 'Moments';
};

const images: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Latte with heart-shaped art in a blue cup',
    category: 'Coffee',
  },
  {
    src: 'https://images.pexels.com/photos/34104248/pexels-photo-34104248.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Café interior with wooden decor and ambient lighting',
    category: 'Cafe',
  },
  {
    src: 'https://images.pexels.com/photos/5620668/pexels-photo-5620668.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Eggs benedict and banana toast served at a café',
    category: 'Food',
  },
  {
    src: 'https://images.pexels.com/photos/36729519/pexels-photo-36729519.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Barista serving coffee to friends at a cozy café',
    category: 'Moments',
  },
  {
    src: 'https://images.pexels.com/photos/30283107/pexels-photo-30283107.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Freshly brewed espresso shot in a glass cup',
    category: 'Coffee',
  },
  {
    src: 'https://images.pexels.com/photos/32300842/pexels-photo-32300842.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Croissant filled with cream and strawberries',
    category: 'Food',
  },
  {
    src: 'https://images.pexels.com/photos/18721982/pexels-photo-18721982.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cafe interior with wooden chairs, tables, and greenery',
    category: 'Cafe',
  },
  {
    src: 'https://images.pexels.com/photos/6140394/pexels-photo-6140394.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Friends enjoying coffee together at an outdoor cafe',
    category: 'Moments',
  },
  {
    src: 'https://images.pexels.com/photos/10204269/pexels-photo-10204269.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Coffee with latte art served on a wooden table',
    category: 'Coffee',
  },
  {
    src: 'https://images.pexels.com/photos/28097283/pexels-photo-28097283.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'French toast topped with ice cream and strawberries',
    category: 'Food',
  },
  {
    src: 'https://images.pexels.com/photos/12802124/pexels-photo-12802124.png?auto=compress&cs=tinysrgb&w=800',
    alt: 'Modern café interior with wooden chairs and pendant lamp',
    category: 'Cafe',
  },
  {
    src: 'https://images.pexels.com/photos/36729801/pexels-photo-36729801.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Friends enjoying conversation over coffee at a cafe',
    category: 'Moments',
  },
];

const filters = ['All', 'Coffee', 'Food', 'Cafe', 'Moments'] as const;

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === 'All'
      ? images
      : images.filter((img) => img.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null ? prev : (prev + 1) % filtered.length
      ),
    [filtered.length]
  );
  const prevImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null
          ? prev
          : (prev - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="bg-warm-white">
      <div className="section-padding mx-auto max-w-[1600px] py-20 md:py-32">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] font-medium text-gold">
              GALLERY
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-espresso text-balance">
            Moments at Vandys.
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-300 ${
                filter === f
                  ? 'bg-espresso text-warm-white'
                  : 'border border-beige text-coffee hover:border-gold hover:text-espresso'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6"
        >
          {filtered.map((img, i) => (
            <motion.button
              key={img.src}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => setLightboxIndex(i)}
              className="group relative w-full mb-4 md:mb-6 overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={`View image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-500" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-espresso/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-warm-white/80 hover:text-warm-white p-2"
              aria-label="Close lightbox"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-warm-white/80 hover:text-warm-white p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <motion.img
              key={lightboxIndex}
              src={filtered[lightboxIndex].src.replace('w=800', 'w=1200')}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-warm-white/80 hover:text-warm-white p-2"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-warm-white/60 tracking-wide">
              {lightboxIndex + 1} / {filtered.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
