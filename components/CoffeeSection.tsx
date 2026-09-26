'use client';

import { motion } from 'framer-motion';

const items = [
  {
    title: 'Espresso',
    description: 'Rich, balanced, and crafted for coffee lovers.',
    image:
      'https://images.pexels.com/photos/30283107/pexels-photo-30283107.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Freshly brewed espresso shot in a glass cup',
  },
  {
    title: 'Latte',
    description: "One of Vandys Cafe's featured favourites.",
    image:
      'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Latte with heart-shaped art in a cup on a wooden table',
  },
  {
    title: 'Café Favourites',
    description:
      'A selection of drinks prepared for everyday coffee moments.',
    image:
      'https://images.pexels.com/photos/37034121/pexels-photo-37034121.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cups of coffee with intricate latte art on a wooden table',
  },
];

export default function CoffeeSection() {
  return (
    <section className="bg-beige/40">
      <div className="section-padding mx-auto max-w-[1600px] py-20 md:py-32">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] font-medium text-gold">
              THE COFFEE
            </span>
            <span className="h-px w-10 bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium text-espresso text-balance"
          >
            Your daily ritual, done well.
          </motion.h2>
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-6">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-espresso">
                {item.title}
              </h3>
              <p className="mt-3 text-base text-coffee/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
