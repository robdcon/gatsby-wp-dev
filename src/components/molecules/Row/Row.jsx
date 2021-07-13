import React from 'react';
import { StyledRow, StyledContainer } from './Row.styles';

const Row = (props) => (
  <StyledRow className="row" {...props}>
    {props.children.map( (item, i) => {
        return (
          <StyledContainer key={i}>{item}</StyledContainer>
        )
      }
    )}
  </StyledRow>
);

export default Row;
