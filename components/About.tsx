'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-beige/40">
      <div className="section-padding mx-auto max-w-[1600px] py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <img
                src="/a local place.jpeg"
                alt="Cafe interior with wooden chairs, tables, and greenery"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs tracking-[0.3em] font-medium text-gold">
                ABOUT US
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-espresso leading-[1.1] text-balance">
              A local place
              <br />
              to slow down.
            </h2>
            <p className="mt-8 text-lg text-coffee leading-relaxed max-w-md">
              Located on Burnett Street in Buderim, Vandys Cafe is a welcoming
              local destination for coffee, café favourites, and relaxed
              moments.
            </p>
            <p className="mt-4 text-base text-coffee/80 leading-relaxed max-w-md">
              We believe good coffee and good food don&apos;t need to be
              complicated — just made well, served warm, and enjoyed in good
              company.
            </p>
          </motion.div>
        </div>

        {/* Three smaller images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              src: '/local place1.jpg',
              alt: 'Inviting café interior with wooden decor and ambient lighting',
              span: 'md:col-span-1',
            },
            {
              src: '/local place2.jpg',
              alt: 'Artistic latte with coffee beans on a wooden table',
              span: 'md:col-span-1',
            },
            {
              src: '/local place3.jpg',
              alt: 'Friends enjoying coffee together at an outdoor cafe',
              span: 'col-span-2 md:col-span-1',
            },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-md group ${img.span}`}
            >
              <div className="aspect-[3/2] md:aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
