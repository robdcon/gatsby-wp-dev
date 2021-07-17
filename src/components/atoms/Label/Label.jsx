import React from 'react';
import { StyledLabel } from './Label.styles';

const Label = ({children}) => (
  <div className="label">
    {children}
  </div>
);

export default Label;
