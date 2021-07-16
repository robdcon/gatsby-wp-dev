import styled from 'styled-components';
import { centerContent } from '../../../utils/mixins';

export const StyledCard = styled.div`
    ${centerContent}
    flex-basis: 33.333%;
    flex-direction: column;
    box-shadow: ${({theme}) => theme.cardShadow};
    padding-bottom: 32px;
    border-radius: 6px;
    img {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
`;

export const StyledDescription = styled.p`
    font-family: inherit;
    font-size: 18px;
    padding: 16px;
    text-align: center;
`;
