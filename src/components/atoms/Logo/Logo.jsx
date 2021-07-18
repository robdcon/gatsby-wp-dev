import React from 'react';
import { StyledLogo } from './Logo.styles';
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => (
  <StyledLogo>
    <StaticImage 
      className="logo" 
      src="https://via.placeholder.com/100x100" 
      alt=""
      placeholder="blurred"
      layout="fixed"
      width={50}
      height={50}
    />
  </StyledLogo>
);

export default Logo;
