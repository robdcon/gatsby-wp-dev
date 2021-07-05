import styled from 'styled-components';
import { Link } from "gatsby"

export const NavWrapper = styled.div`
    display: flex;
    background-color: #000;
`;

export const Nav = styled.nav`
    display: flex;
`;

export const NavLink = styled(Link)`
    color: #fff;
`;