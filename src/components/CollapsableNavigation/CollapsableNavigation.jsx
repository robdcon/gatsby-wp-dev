import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { NavWrapper, Nav, NavListItem, NavLink, MenuToggle } from './CollapsableNavigation.styles';

const CollapsableNavigation = ({pages}) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    const isOpen = navOpen;
    setNavOpen(!isOpen);
    console.log(navOpen);
  }

  return (
  <>
    <MenuToggle onClick={handleNav} className={`nav-open-${navOpen}`} />
    <NavWrapper className={`CollapsableNavigationWrapper nav-open-${navOpen}`}>
      <Nav>
      {
        pages && pages.map(({node}) => {
          console.log(node)
          return(
            <NavListItem>
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

CollapsableNavigation.propTypes = {
  // bla: PropTypes.string,
};

CollapsableNavigation.defaultProps = {
  // bla: 'test',
};

export default CollapsableNavigation;
