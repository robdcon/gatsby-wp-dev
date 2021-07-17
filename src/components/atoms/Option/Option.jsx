import React from 'react';
import { StyledOption } from './Option.styles';

const Option = ({children}) => (
  <StyledOption className="option">
    {children}
  </StyledOption>
);

export default Option;
