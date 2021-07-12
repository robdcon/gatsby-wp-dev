import React from 'react';
import { StyledRow, StyledContainer } from './Row.styles';

const Row = ({children}) => (
  <StyledRow className="row">
    {children}
  </StyledRow>
);

export default Row;
