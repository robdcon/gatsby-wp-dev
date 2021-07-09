import styled from 'styled-components';
import { media } from '../../../utils/media';

export const StyledButton = styled.button`
    display: flex;
    min-width: 135px;
    min-height: 30px;
    padding: 8px 24px;

    ${({theme}) => theme.global.buttonStyles};
    font-family: ${({theme}) => theme.global.primaryFont};
    font-weight: 600;
    ${media.desktop`
        width: auto;
        min-width: 180px;
    `}
`;
