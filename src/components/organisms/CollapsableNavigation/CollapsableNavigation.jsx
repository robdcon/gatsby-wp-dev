import React from 'react';
import { NavWrapper } from './CollapsableNavigation.styles';
import Navigation from '../../molecules/Navigation/Navigation';

const CollapsableNavigation = ({navOpen}) => {

  return (
  <>
    <NavWrapper className={`mobile-nav nav-open-${navOpen}`}>
      <Navigation />
    </NavWrapper>

    <NavWrapper className={`desktop-nav nav-open-${navOpen}`}>
      <Navigation />
    </NavWrapper>
  </>
  )
};

export default CollapsableNavigation;
