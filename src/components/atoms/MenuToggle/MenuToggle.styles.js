import { MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { media } from '../../../utils/media';


export const MenuButton = styled(MenuItem)`
    right: 24px;
    top: 24px;
    z-index: var(--stack-level-1);
    color: ${({theme}) => theme.primaryColor};

    &.nav-open-false {
        color: ${({theme}) => theme.primaryColor};
    }

    ${media.desktop`
        display: none;
    `}
`;