import React from 'react';
import { StyledLogo } from './Logo.styles';

const Logo = ({src="https://webdesign.robdcon.co.uk/wp-content/uploads/2020/01/logo.png", alt=""}) => (
  <StyledLogo 
    className="logo" 
    src={src} 
    alt={alt}
    placeholder="blurred"
    layout="fixed"
    width={100}
  />
);

export default Logo;
