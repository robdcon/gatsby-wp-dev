import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { media } from '../../../utils/media';

export const MenuButton = styled(MenuIcon)`
    right: 24px;
    top: 24px;
    z-index: var(--stack-level-1);
    color: ${({theme}) => theme.primaryColor};

    ${media.desktop`
        display: none;
    `}
`;

export const CloseButton = styled(CloseIcon)`
    right: 24px;
    top: 24px;
    z-index: var(--stack-level-1);
    color: ${({theme}) => theme.primaryColor};

    ${media.desktop`
        display: none;
    `}
`;