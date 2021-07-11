import React, {useState} from 'react';
import { NavWrapper } from './CollapsableNavigation.styles';
import MenuToggle from '../../atoms/MenuToggle/MenuToggle';
import Navigation from '../../molecules/Navigation/Navigation';

const CollapsableNavigation = ({pages}) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    const isOpen = navOpen;
    setNavOpen(!isOpen);
  }

  return (
  <>
    <MenuToggle action={handleNav} isNavOpen={navOpen} />
    
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
