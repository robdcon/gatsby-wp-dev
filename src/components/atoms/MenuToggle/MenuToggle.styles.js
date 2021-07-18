import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { media } from '../../../utils/media';


export const MenuButton = styled(MenuIcon)`
    right: 24px;
    top: 24px;
    z-index: var(--stack-level-1);
    color: #fff;

    &.nav-open-false {
        color: #fff;
    }

    ${media.desktop`
        display: none;
    `}
`;