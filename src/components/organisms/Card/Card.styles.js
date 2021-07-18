import styled from 'styled-components';
import { centerContent } from '../../../utils/mixins';
import { media } from '../../../utils/media';

export const StyledCard = styled.div`
    ${centerContent}
    flex-direction: column;
    box-shadow: ${({theme}) => theme.cardShadow};
    padding-bottom: 32px;
    border-radius: 6px;
    flex-basis: 100%;

    h3 {
        padding: 0 16px 8px 16px;
        text-align: center;
    }

    img {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    ${media.desktop`flex-basis: 33.333%`};
`;

export const StyledDescription = styled.p`
    font-family: inherit;
    font-size: 18px;
    padding: 16px;
    text-align: center;
`;
