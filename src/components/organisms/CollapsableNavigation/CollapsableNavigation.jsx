import React from 'react';
import { NavWrapper } from './CollapsableNavigation.styles';
import Navigation from '../../molecules/Navigation/Navigation';

const CollapsableNavigation = ({pages, navOpen}) => {

  return (
  <>
    <NavWrapper className={`mobile-nav nav-open-${navOpen}`}>
      <Navigation pages={pages} />
    </NavWrapper>

    <NavWrapper className={`desktop-nav nav-open-${navOpen}`}>
      <Navigation  pages={pages} />
    </NavWrapper>
  </>
  )
};

export default CollapsableNavigation;
