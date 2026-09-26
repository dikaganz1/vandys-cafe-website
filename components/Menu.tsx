'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const categories: MenuCategory[] = [
  {
    id: 'coffee',
    label: 'Coffee',
    items: [
      { name: 'Espresso', price: '—', description: 'Rich and balanced single origin' },
      { name: 'Long Black', price: '—', description: 'Double shot, smooth and bold' },
      { name: 'Latte', price: '—', description: 'Creamy milk, velvety texture' },
      { name: 'Cappuccino', price: '—', description: 'Classic foam and cocoa' },
      { name: 'Flat White', price: '—', description: 'Silky micro-foam, full flavour' },
      { name: 'Mocha', price: '—', description: 'Coffee and chocolate, indulgent' },
      { name: 'Hot Chocolate', price: '—', description: 'Rich and warming' },
      { name: 'Chai Latte', price: '—', description: 'Spiced and soothing' },
    ],
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    items: [
      { name: 'Big Breakfast', price: '—', description: 'Eggs, bacon, sausage, toast, sides' },
      { name: 'Eggs Benedict', price: '—', description: 'Poached eggs, hollandaise, English muffin' },
      { name: 'Avocado Toast', price: '—', description: 'Smashed avo, poached eggs, salsa' },
      { name: 'French Toast', price: '—', description: 'With berries and maple syrup' },
      { name: 'Granola Bowl', price: '—', description: 'Yoghurt, fresh fruit, honey' },
      { name: 'Croissant', price: '—', description: 'Freshly baked, butter and flaky' },
    ],
  },
  {
    id: 'food',
    label: 'Food',
    items: [
      { name: 'Beef Burger', price: '—', description: 'Grilled beef, cheese, house sauce' },
      { name: 'Chicken Wrap', price: '—', description: 'Grilled chicken, salad, aioli' },
      { name: 'Caesar Salad', price: '—', description: 'Cos lettuce, bacon, croutons, parmesan' },
      { name: 'Soup of the Day', price: '—', description: 'Served with crusty bread' },
      { name: 'Club Sandwich', price: '—', description: 'Triple decker, chips on the side' },
      { name: 'Fries', price: '—', description: 'Golden and crispy' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      { name: 'Fresh Orange Juice', price: '—', description: 'Pressed daily' },
      { name: 'Iced Coffee', price: '—', description: 'With milk and ice cream' },
      { name: 'Iced Chocolate', price: '—', description: 'Rich and refreshing' },
      { name: 'Smoothie', price: '—', description: 'Berry or tropical' },
      { name: 'Tea', price: '—', description: 'Selection of loose-leaf teas' },
      { name: 'Mineral Water', price: '—', description: 'Still or sparkling' },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState('coffee');
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="bg-warm-white">
      <div className="section-padding mx-auto max-w-[1600px] py-20 md:py-32">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] font-medium text-gold">
              THE MENU
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-espresso text-balance">
            A taste of what we serve.
          </h2>
          <p className="mt-5 text-base text-coffee/80">
            Prices are listed in-store. Ask our team for today&apos;s specials.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 text-sm font-medium tracking-wide rounded-md transition-all duration-300 ${
                active === cat.id
                  ? 'bg-espresso text-warm-white'
                  : 'border border-beige text-coffee hover:border-gold hover:text-espresso'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
              {activeCategory.items.map((item, i) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 py-4 border-b border-beige/60"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-espresso">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm text-coffee/60 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 shrink-0">
                    <span className="text-xs text-gold">$</span>
                    <span className="font-serif text-lg text-coffee">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center mt-12 text-xs text-coffee/50 tracking-wide">
          Menu items and pricing may vary. Please ask in-store for the full
          menu.
        </p>
      </div>
    </section>
  );
}
