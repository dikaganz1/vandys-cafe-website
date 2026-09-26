'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Using a standard img tag instead of next/image to avoid heavy overlay */}
        <img
          src="/vandys-bg.jpeg"
          alt="Latte art coffee on a wooden table in warm morning light"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Subtle warm gradient for text contrast — not a heavy overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding mx-auto max-w-[1600px] w-full pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] font-medium text-white/90">
              BUDERIM &bull; QUEENSLAND
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.05] text-balance"
          >
            Good Coffee.
            <br />
            Good Moments.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 text-lg text-white/85 leading-relaxed max-w-xl"
          >
            A relaxed local café serving quality coffee, fresh café favourites,
            and welcoming moments in the heart of Buderim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-warm-white text-espresso text-sm font-medium tracking-wide rounded-md hover:bg-gold hover:text-white transition-all duration-300"
            >
              VIEW MENU
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/60 text-white text-sm font-medium tracking-wide rounded-md hover:bg-white hover:text-espresso transition-all duration-300"
            >
              VISIT US
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[0.625rem] tracking-[0.3em] text-white/70">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="h-8 w-px bg-white/40"
        />
      </motion.div>
    </section>
  );
}
