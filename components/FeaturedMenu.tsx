'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedMenu() {
  return (
    <section className="bg-warm-white">
      <div className="section-padding mx-auto max-w-[1600px] py-20 md:py-32">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] font-medium text-gold">
              FROM THE KITCHEN
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium text-espresso leading-[1.1] text-balance"
          >
            Simple food. Great coffee. Easy mornings.
          </motion.h2>
        </div>

        {/* Editorial layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Large left item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 group"
          >
            <div className="relative aspect-[16/11] overflow-hidden rounded-md mb-6">
              <img
                src="https://images.pexels.com/photos/5620668/pexels-photo-5620668.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Eggs benedict and banana toast served at a café"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-espresso">
              Breakfast Favourites
            </h3>
            <p className="mt-3 text-base text-coffee/80 leading-relaxed max-w-md">
              Freshly prepared plates to start your morning right.
            </p>
            <a
              href="#menu"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-espresso border-b border-gold pb-1 hover:gap-3 transition-all duration-300"
            >
              VIEW MENU
              <ArrowRight className="h-4 w-4 text-gold" />
            </a>
          </motion.div>

          {/* Two stacked right items */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-5">
                <img
                  src="https://images.pexels.com/photos/32300842/pexels-photo-32300842.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Croissant filled with cream and strawberries"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-espresso">
                Fresh Pastries
              </h3>
              <p className="mt-2 text-sm text-coffee/80 leading-relaxed">
                Golden, flaky, and perfect with your coffee.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-5">
                <img
                  src="https://images.pexels.com/photos/5865760/pexels-photo-5865760.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Avocado toast with poached eggs on a rustic wooden table"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-espresso">
                Café Classics
              </h3>
              <p className="mt-2 text-sm text-coffee/80 leading-relaxed">
                Wholesome options for any time of day.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
