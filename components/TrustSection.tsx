'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Coffee } from 'lucide-react';
import { SITE } from '@/lib/site';

const items = [
  {
    value: SITE.rating,
    label: `${SITE.reviewCount} Google Reviews`,
    icon: Star,
    sub: '/ 5',
  },
  {
    value: SITE.priceRange,
    label: 'Average Price Range',
    icon: Coffee,
  },
  {
    value: 'Buderim',
    label: 'Queensland, Australia',
    icon: MapPin,
  },
  {
    value: 'Dine In',
    label: 'Takeaway',
  },
];

export default function TrustSection() {
  return (
    <section className="bg-warm-white border-b border-beige/60">
      <div className="section-padding mx-auto max-w-[1600px] py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-beige/50">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-warm-white px-6 py-8 md:py-10 text-center flex flex-col items-center"
              >
                {Icon && (
                  <Icon className="h-5 w-5 text-gold mb-3" strokeWidth={1.5} />
                )}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-2xl md:text-3xl font-medium text-espresso">
                    {item.value}
                  </span>
                  {item.sub && (
                    <span className="text-sm text-coffee">{item.sub}</span>
                  )}
                </div>
                <span className="mt-2 text-xs tracking-wider uppercase text-coffee/70">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
