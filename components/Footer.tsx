'use client';

import { Facebook, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-coffee/20">
      <div className="section-padding mx-auto max-w-[1600px] py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + address */}
          <div>
            <span className="font-serif text-xl font-semibold text-warm-white tracking-wide">
              VANDYS CAFE
            </span>
            <div className="mt-5 space-y-3 text-sm text-warm-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-white transition-colors"
                >
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.country}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold shrink-0" strokeWidth={1.5} />
                <a
                  href={SITE.phoneHref}
                  className="hover:text-warm-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-white/60 hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5">
              Connect
            </h4>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-warm-white/60 hover:text-warm-white transition-colors"
            >
              <Facebook className="h-5 w-5 text-gold" strokeWidth={1.5} />
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-coffee/20 text-center">
          <p className="text-xs text-warm-white/40 tracking-wide">
            &copy; 2026 Vandys Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
