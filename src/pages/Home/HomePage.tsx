import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import CategoriesSection from '../../components/sections/CategoriesSection/CategoriesSection';
import FeaturedCoursesSection from '../../components/sections/FeaturedCoursesSection/FeaturedCoursesSection';
import StatsSection from '../../components/sections/StatsSection/StatsSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection';
import CTASection from '../../components/sections/CTASection/CTASection';
import NewsletterSection from '../../components/sections/NewsletterSection/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
