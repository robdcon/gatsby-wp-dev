import styled from 'styled-components';

export const FooterWrapper = styled.footer`
 display: flex;
 background-color: ${({theme}) => theme.footerBackground};
`;

export const FooterNav = styled.nav`
    ${({theme}) => theme.global.horizontalNavStyles}
`;
