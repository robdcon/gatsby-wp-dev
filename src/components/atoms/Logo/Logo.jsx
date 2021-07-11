import React from 'react';
import { StyledLogo } from './Logo.styles';

const Logo = ({src, alt}) => (
  <StyledLogo className="logo" src={src} alt={alt} />
);

export default Logo;
