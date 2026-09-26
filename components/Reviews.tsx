'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function Reviews() {
  return (
    <section className="bg-beige/40">
      <div className="section-padding mx-auto max-w-[1600px] py-20 md:py-32">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] font-medium text-gold">
              REVIEWS
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-espresso text-balance">
            What our guests say.
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-gold text-gold"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-sm text-coffee font-medium ml-2">
              {SITE.rating} / 5
            </span>
            <span className="text-sm text-coffee/60">
              &middot; {SITE.reviewCount} Google Reviews
            </span>
          </div>
        </div>

        {/* Rating summary note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-base text-coffee/70 leading-relaxed">
            We&apos;re grateful for every guest who takes a moment to share
            their experience. Verified reviews can be found on our Google
            listing.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-espresso text-espresso text-sm font-medium tracking-wide rounded-md hover:bg-espresso hover:text-warm-white transition-all duration-300"
          >
            READ MORE REVIEWS
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
