import React from 'react';
import { MenuButton } from './MenuToggle.styles';

const MenuToggle = ({isNavOpen=false, action}) => (
  <MenuButton className={`menu-toggle nav-open-${isNavOpen}`} onClick={action} />
);

export default MenuToggle;
