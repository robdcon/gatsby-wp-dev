import styled from 'styled-components';
import { media } from '../../../utils/media';
import { hoverStyles } from '../../../utils/mixins';
import Link from '../../atoms/Link';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;

    ${media.desktop`
        ${props => !(props.vertical) && `flex-direction: row`};
        justify-content: center;
        align-items: center;
        height: 100%;
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
    ${hoverStyles({color: '#fff', hoverColor: ({theme}) => theme.colors.primaryColor })};
`;