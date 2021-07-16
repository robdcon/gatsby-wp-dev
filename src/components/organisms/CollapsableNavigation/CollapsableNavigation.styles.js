import styled from 'styled-components';
import { media } from '../../../utils/media';

export const NavWrapper = styled.div`
    display: flex;
    background-color: #fff;
    z-index: var(--stack-level-3);
    width: 100%;
    &.mobile-nav {
        position: absolute;
        top: 0;
        left: 0;
        z-index: var(--stack-level-2);
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
        height: 100%;
        padding-top: 0;

        ${media.desktop`
            display: flex;
        `}
    }
`;