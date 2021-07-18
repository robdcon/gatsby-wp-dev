import styled from 'styled-components';
import { media } from '../../../utils/media';
import { centerContent } from '../../../utils/mixins';

export const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${({theme}) => theme.sectionPadding}

    ${props => props.spaceEvenly && `justify-content: space-evenly`};
    ${props => props.spaceAround && `justify-content: space-around`};
    ${props => props.spaceBetween && `justify-content: space-between`};

    ${media.desktop`
        flex-direction: row;
    `};
`;

export const StyledContainer = styled.div`
    ${centerContent}
`;
