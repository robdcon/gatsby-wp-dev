import React from 'react';
import { Nav, NavList, NavListItem, NavLink } from './Navigation.styles';


const Navigation = ({props, links}) => {
  console.log(links)
  return(
    <Nav className="nav">
      <NavList {...props} >
      {
        links && links.map((link) => {
            return(
              <NavListItem key={link.title} className="nav__list-item">
                <NavLink text={link.title} href={link.link} className="nav__link" />
              </NavListItem>
            )
          })
        }
      </NavList>
    </Nav>
  )
};

export default Navigation;
