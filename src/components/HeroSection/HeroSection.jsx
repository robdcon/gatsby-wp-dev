import React from 'react';
import { Section } from './HeroSection.styles';

const HeroSection = ({children}) => (
  <Section className="HeroSectionWrapper">
    {children}
  </Section>
);

export default HeroSection;
