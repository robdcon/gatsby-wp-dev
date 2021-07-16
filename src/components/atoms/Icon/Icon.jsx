import React from 'react';
import { StyledIcon } from './Icon.styles';

const Icon = ({iconSVG}) => (
  <StyledIcon className="IconWrapper">
    {iconSVG}
  </StyledIcon>
);

export default Icon;
