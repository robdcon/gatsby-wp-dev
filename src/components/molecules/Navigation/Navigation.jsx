import React, { useContext } from 'react';
import { PageContext } from '../../../templates/layout';
import { Nav, NavList, NavListItem, NavLink } from './Navigation.styles';


const Navigation = () => {
  const pages = useContext(PageContext);
  return(
    <Nav className="nav">
      <NavList>
      {
        pages && pages.map(({node}) => {
            return(
              <NavListItem key={node.title}>
                <NavLink text={node.title} href={node.link} />
              </NavListItem>
            )
          })
        }
      </NavList>
    </Nav>
  )
};

export default Navigation;
