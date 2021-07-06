import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { NavWrapper, Nav, NavListItem, NavLink } from './CollapsableNavigation.styles';

const CollapsableNavigation = ({pages}) => {
 console.log('pages: ', pages)
  return (
  <NavWrapper className="CollapsableNavigationWrapper">
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
  )
};

CollapsableNavigation.propTypes = {
  // bla: PropTypes.string,
};

CollapsableNavigation.defaultProps = {
  // bla: 'test',
};

export default CollapsableNavigation;
