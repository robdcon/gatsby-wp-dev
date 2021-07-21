import React, { useState } from 'react';
import { StyledHeader } from './Header.styles';
import Logo from '../../atoms/Logo';
import CollapsableNavigation from '../CollapsableNavigation';
import MenuToggle from '../../atoms/MenuToggle/MenuToggle';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    const isOpen = navOpen;
    setNavOpen(!isOpen);
  }

  return(
    <StyledHeader className="header">
      <Logo />
      <CollapsableNavigation navOpen={navOpen} />
      <MenuToggle action={handleNav} isNavOpen={navOpen} />
    </StyledHeader>
  )
};

export default Header;
