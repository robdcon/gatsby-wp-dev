import React, {useState} from 'react';
import { NavWrapper, Nav, NavListItem, NavLink, MenuToggle } from './CollapsableNavigation.styles';

const CollapsableNavigation = ({pages}) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    const isOpen = navOpen;
    setNavOpen(!isOpen);
  }

  return (
  <>
    <MenuToggle onClick={handleNav} className={`nav-open-${navOpen}`} />
    
    <NavWrapper className={`mobile-nav nav-open-${navOpen}`}>
      <Nav>
      {
        pages && pages.map(({node}) => {
          return(
            <NavListItem key={node.title}>
              <NavLink key={node.slug} to={node.link}>
                {node.title}
              </NavLink>
            </NavListItem>
          )
        })
      }
      </Nav>
    </NavWrapper>

    <NavWrapper className={`desktop-nav nav-open-${navOpen}`}>
      <Nav>
      {
        pages && pages.map(({node}) => {
          return(
            <NavListItem key={node.title}>
              <NavLink key={node.slug} to={node.link}>
                {node.title}
              </NavLink>
            </NavListItem>
          )
        })
      }
      </Nav>
    </NavWrapper>
  </>
  )
};

export default CollapsableNavigation;
