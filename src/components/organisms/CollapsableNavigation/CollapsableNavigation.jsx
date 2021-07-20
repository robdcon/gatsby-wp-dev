import React, { useContext } from 'react';
import { PageContext } from '../../../templates/layout';
import { NavWrapper } from './CollapsableNavigation.styles';
import Navigation from '../../molecules/Navigation/Navigation';

const CollapsableNavigation = ({navOpen}) => {
  const pages = useContext(PageContext);
  return (
  <>
    <NavWrapper className={`mobile-nav nav-open-${navOpen}`}>
      <Navigation links={pages} />
    </NavWrapper>

    <NavWrapper className={`desktop-nav nav-open-${navOpen}`}>
      <Navigation links={pages} />
    </NavWrapper>
  </>
  )
};

export default CollapsableNavigation;
