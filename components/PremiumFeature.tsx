'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function PremiumFeature() {
  return (
    <section className="relative overflow-hidden bg-espresso">
      {/* Full-width image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/972845/pexels-photo-972845.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Serene café interior with sunlight streaming through large windows"
          className="h-full w-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/30" />
      </div>

      <div className="relative z-10 section-padding mx-auto max-w-[1600px] py-24 md:py-36">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] font-medium text-gold">
              A MOMENT FOR YOU
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-warm-white leading-[1.1] text-balance"
          >
            Take a moment.
            <br />
            Enjoy the coffee.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 text-lg text-warm-white/75 leading-relaxed max-w-md"
          >
            Whether you&apos;re starting your morning, catching up with friends,
            or simply taking a break, Vandys Cafe is made for everyday moments
            worth slowing down for.
          </motion.p>

          <motion.a
            href="#visit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-warm-white border-b border-gold pb-1 hover:gap-3 transition-all duration-300"
          >
            VISIT VANDYS
            <ArrowRight className="h-4 w-4 text-gold" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
