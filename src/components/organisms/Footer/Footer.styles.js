import styled from 'styled-components';
import Navigation from '../../molecules/Navigation';

export const FooterWrapper = styled.footer`
    display: flex;
    background-color: ${({theme}) => theme.footerBackground};
`;

export const FooterNav = styled(Navigation)`
    li.nav__list-item {
        padding: 0 0 8px 0;
        a {
            color: ${({theme}) => theme.colors.greyDarkText};
            &:active, &:visited {
                color: ${({theme}) => theme.colors.greyDarkText};
            }
            &:hover {
                color: ${({theme}) => theme.colors.greyLightText};
            }
        }
    }
`;
