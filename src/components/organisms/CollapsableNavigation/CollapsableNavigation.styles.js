import styled from 'styled-components';
import { media } from '../../../utils/media';

export const NavWrapper = styled.div`
    position: fixed;    
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    background-color: #000;
    z-index: 99;

    &.mobile-nav {
        padding-top: 80px;
        justify-content: center;
        min-height: 100vh;

        &.nav-open-false {
            display: none;
        }

        ${media.desktop`
            display: none;
        `}
    }

    &.desktop-nav {
        display: none;
        min-height: 80px;
        padding-top: 0;

        ${media.desktop`
            display: flex;
        `}
    }
`;