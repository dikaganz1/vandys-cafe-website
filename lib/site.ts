export const SITE = {
  name: 'Vandys Cafe',
  phone: '+61 434 364 959',
  phoneHref: 'tel:+61434364959',
  address: {
    line1: '116 Burnett St',
    line2: 'Buderim QLD 4556',
    country: 'Australia',
  },
  facebook: 'https://www.facebook.com/VandysCafeBuderim',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Vandys+Cafe+116+Burnett+St+Buderim+QLD+4556',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=116+Burnett+St+Buderim+QLD+4556',
  rating: '4.8',
  reviewCount: '189',
  priceRange: '$1–20',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
] as const;
