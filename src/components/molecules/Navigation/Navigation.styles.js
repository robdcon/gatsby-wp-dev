import styled from 'styled-components';
import { media } from '../../../utils/media';
import Link from '../../atoms/Link';

export const Nav = styled.nav`
    display: flex;
    width: 100%;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;

    ${media.desktop`
        ${props => !(props.vertical) && `flex-direction: row`};
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
    &:hover {
        color: ${({theme}) => theme.primaryColor};
        transform: translateY(-5px);
        text-decoration: none;
    }
`;