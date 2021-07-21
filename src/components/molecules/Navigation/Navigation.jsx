import React from 'react';
import { Nav, NavList, NavListItem, NavLink } from './Navigation.styles';


const Navigation = ({props, links}) => {
  console.log(links)
  return(
    <Nav className="nav">
      <NavList {...props} >
      {
        links && links.map(({title, link}) => {
            return(
              <NavListItem key={title} className="nav__list-item">
                <NavLink text={title} href={link} className="nav__link" />
              </NavListItem>
            )
          })
        }
      </NavList>
    </Nav>
  )
};

export default Navigation;
