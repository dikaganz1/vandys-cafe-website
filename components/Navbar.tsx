'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(58,41,33,0.06)] py-3'
            : 'bg-warm-white/90 backdrop-blur-sm py-5'
        )}
      >
        <nav className="section-padding mx-auto max-w-[1600px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex flex-col leading-none"
            aria-label="Vandys Cafe home"
          >
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-espresso">
              VANDYS CAFE
            </span>
            <span className="text-[0.625rem] tracking-[0.25em] text-gold mt-1 hidden sm:block">
              BUDERIM &bull; QLD
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-espresso/80 hover:text-espresso transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#menu"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 border border-espresso text-espresso text-sm font-medium tracking-wide hover:bg-espresso hover:text-warm-white transition-all duration-300 rounded-md"
          >
            VIEW MENU
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-1.5 text-espresso"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-warm-white lg:hidden"
          >
            <div className="flex items-center justify-between section-padding py-5">
              <span className="font-serif text-xl font-semibold text-espresso">
                VANDYS CAFE
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-1.5 text-espresso"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col section-padding pt-8 gap-1"
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 border-b border-beige/70 text-2xl font-serif text-espresso hover:text-coffee transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#menu"
                onClick={() => setMobileOpen(false)}
                className="mt-8 inline-flex items-center justify-center px-6 py-4 bg-espresso text-warm-white text-sm font-medium tracking-wide rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                VIEW MENU
              </motion.a>
              <motion.a
                href={SITE.phoneHref}
                className="mt-3 text-center text-sm text-coffee"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {SITE.phone}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
