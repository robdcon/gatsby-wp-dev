import React from 'react';
import { Nav, NavList, NavListItem, NavLink } from './Navigation.styles';

const Navigation = ({pages}) => (
  <Nav className="nav">
    <NavList>
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
    </NavList>
  </Nav>
);

export default Navigation;
