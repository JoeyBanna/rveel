import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { ContactCta } from '../components/home/ContactCta';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ContactCta />
    </>
  );
}