import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import BrandingSection from '../../components/sections/BrandingSection/BrandingSection';
import DiscoverSection from '../../components/sections/DiscoverSection/DiscoverSection';
import { GrowthSection } from '../../components/sections/GrowthSection/GrowthSection';
import { CtaSection } from '../../components/sections/CtaSection/CtaSection';
import { TestimonialsSection } from '../../components/sections/TestimonialsSection/TestimonialsSection';
import { Footer } from '../../components/sections/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BrandingSection />
      <DiscoverSection />
      <GrowthSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default HomePage;
