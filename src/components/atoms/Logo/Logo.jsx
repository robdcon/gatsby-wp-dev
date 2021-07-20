import React from 'react';
import { StyledLogo } from './Logo.styles';
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => (
  <StyledLogo>
    <StaticImage 
      className="logo" 
      src="../../../images/gatsby-icon.png" 
      alt="Gatsby"
      placeholder="blurred"
      layout="fixed"
      width={50}
      height={50}
    />
  </StyledLogo>
);

export default Logo;
