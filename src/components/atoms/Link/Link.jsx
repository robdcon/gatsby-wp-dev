import React from 'react';
import { StyledLink } from './Link.styles';

const Link = ({href, text}) => (
  <StyledLink 
    title={text} 
    to={href}
    className="link" 
    aria-label={text}
    description={`Open ${text} page`}
  >
    {text}
  </StyledLink>
);

export default Link;
