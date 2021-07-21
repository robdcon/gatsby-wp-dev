import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
    position: relative;
    font-family: ${({theme}) => theme.primaryFont};
    color: ${({theme}) => theme.colors.greyDarkText};
    font-weight: 300;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    &:active, &:visited {
        color: ${({theme}) => theme.colors.greyDarkText};
    }

    &:hover {
        cursor: pointer;
    }
`;
