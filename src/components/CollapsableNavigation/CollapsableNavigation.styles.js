import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
import { media } from '../../utils/media';
import { Link } from "gatsby"

export const NavWrapper = styled.nav`
    position: fixed;    
    top: 0;
    left: 0;
    padding-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #000;
    min-height: 100vh;

    &.nav-open-false {
        display: none;
    }

    ${media.desktop`
        min-height: 80px;
        padding-top: 0;
    `}
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;

    ${media.desktop`
        height: 80px;
        min-height: auto;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `}
`;

export const NavListItem = styled.li`
    width: 100%;
    list-style: none;
    padding: 16px 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

export const MenuToggle = styled(MenuIcon)`
    position: fixed;
    right: 24px;
    top: 24px;
    z-index: 999;
    color: #fff;

    &.nav-open-false {
        color: #000;
    }

    ${media.desktop`
        display: none;
    `}



`;