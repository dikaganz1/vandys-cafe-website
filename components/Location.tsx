'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { SITE } from '@/lib/site';
import OpeningHours from './OpeningHours';

export default function Location() {
  return (
    <section id="visit" className="bg-warm-white">
      <div className="section-padding mx-auto max-w-[1600px] py-20 md:py-32">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] font-medium text-gold">
              VISIT US
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-espresso text-balance">
            Come say hello.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: info + hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Address */}
            <div>
              <h3 className="font-serif text-2xl font-medium text-espresso mb-4">
                Vandys Cafe
              </h3>
              <div className="flex items-start gap-3 text-coffee">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-espresso transition-colors"
                  >
                    {SITE.address.line1}
                    <br />
                    {SITE.address.line2}
                    <br />
                    {SITE.address.country}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-coffee mt-4">
                <Phone className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} />
                <a
                  href={SITE.phoneHref}
                  className="hover:text-espresso transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-espresso text-warm-white text-sm font-medium tracking-wide rounded-md hover:bg-coffee transition-all duration-300"
              >
                <Navigation className="h-4 w-4" />
                GET DIRECTIONS
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-espresso text-espresso text-sm font-medium tracking-wide rounded-md hover:bg-espresso hover:text-warm-white transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                CALL VANDYS
              </a>
            </div>

            {/* Opening hours */}
            <OpeningHours />
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative min-h-[400px] lg:min-h-full rounded-md overflow-hidden border border-beige"
          >
            <iframe
              title="Map to Vandys Cafe, 116 Burnett St, Buderim QLD 4556"
              src="https://www.google.com/maps?q=116+Burnett+St+Buderim+QLD+4556&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
