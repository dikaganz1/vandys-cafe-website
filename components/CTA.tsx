'use client';

import { motion } from 'framer-motion';
import { Navigation, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function CTA() {
  return (
    <section className="bg-espresso">
      <div className="section-padding mx-auto max-w-[1600px] py-24 md:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs tracking-[0.3em] font-medium text-gold">
            VANDYS CAFE
          </span>
          <span className="h-px w-10 bg-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-warm-white leading-[1.1] text-balance max-w-3xl mx-auto"
        >
          Good coffee
          <br />
          is always worth
          <br />
          the stop.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-lg text-warm-white/70 leading-relaxed max-w-xl mx-auto"
        >
          Visit Vandys Cafe in Buderim and make your next coffee moment a good
          one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={SITE.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-white text-sm font-medium tracking-wide rounded-md hover:bg-gold/90 transition-all duration-300"
          >
            <Navigation className="h-4 w-4" />
            GET DIRECTIONS
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-warm-white/30 text-warm-white text-sm font-medium tracking-wide rounded-md hover:bg-warm-white hover:text-espresso transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            CALL US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
