import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import BrandingSection from '../../components/sections/BrandingSection/BrandingSection';
import DiscoverSection from '../../components/sections/DiscoverSection/DiscoverSection';
import CategoriesSection from '../../components/sections/CategoriesSection/CategoriesSection';
import { GrowthSection } from '../../components/sections/GrowthSection/GrowthSection';
import { CtaSection } from '../../components/sections/CtaSection/CtaSection';
import { TestimonialsSection } from '../../components/sections/TestimonialsSection/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BrandingSection />
      <DiscoverSection />
      <CategoriesSection />
      <GrowthSection />
      <CtaSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
