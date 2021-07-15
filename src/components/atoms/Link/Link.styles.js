import styled from 'styled-components';
import { Link } from 'gatsby';
import { hoverStyles } from '../../../utils/mixins';

export const StyledLink = styled(Link)`
    position: relative;
    font-family: ${({theme}) => theme.primaryFont};
    color: #fff;
    font-weight: 300;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    &:active, &:visited {
        color: #fff;
    }

    ${hoverStyles({color: '#fff', hoverColor: ({theme}) => theme.colors.primaryColor })};
`;
