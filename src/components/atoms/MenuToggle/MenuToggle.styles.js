import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { media } from '../../../utils/media';


export const MenuButton = styled(MenuIcon)`
    position: fixed;
    right: 24px;
    top: 24px;
    z-index: 999;
    color: #fff;

    &.nav-open-false {
        color: #000;
    }

    ${media.desktop`
        display: none;
    `}
`;