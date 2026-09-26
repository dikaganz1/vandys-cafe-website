'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="bg-warm-white">
      <div className="section-padding mx-auto max-w-[1600px] py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs tracking-[0.3em] font-medium text-gold">
                WELCOME TO VANDYS
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-espresso leading-[1.1] text-balance">
              Coffee made for
              <br />
              good days.
            </h2>
            <p className="mt-8 text-lg text-coffee leading-relaxed max-w-md">
              Vandys Cafe is a local espresso bar in Buderim, bringing together
              quality coffee, café favourites, and a relaxed atmosphere.
            </p>
            <p className="mt-4 text-base text-coffee/80 leading-relaxed max-w-md">
              Whether it&apos;s your morning ritual or a midday pause, every cup
              is made with care and every visit is met with a warm welcome.
            </p>
            <a
              href="#about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-espresso border-b border-gold pb-1 hover:gap-3 transition-all duration-300"
            >
              DISCOVER VANDYS
              <ArrowRight className="h-4 w-4 text-gold" />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <img
                src="https://images.pexels.com/photos/32590864/pexels-photo-32590864.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Barista pouring steamed milk to create latte art"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Small accent image */}
            <div className="absolute -bottom-8 -left-8 w-40 h-52 overflow-hidden rounded-md shadow-xl border-4 border-warm-white hidden md:block">
              <img
                src="https://images.pexels.com/photos/30283107/pexels-photo-30283107.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Fresh espresso shot in a glass cup"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
