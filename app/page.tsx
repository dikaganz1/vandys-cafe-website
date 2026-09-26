import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import IntroSection from '@/components/IntroSection';
import CoffeeSection from '@/components/CoffeeSection';
import FeaturedMenu from '@/components/FeaturedMenu';
import Menu from '@/components/Menu';
import PremiumFeature from '@/components/PremiumFeature';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <IntroSection />
        <CoffeeSection />
        <FeaturedMenu />
        <Menu />
        <PremiumFeature />
        <About />
        <Gallery />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
