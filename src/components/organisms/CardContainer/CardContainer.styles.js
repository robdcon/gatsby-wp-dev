import styled from 'styled-components';
import { media } from '../../../utils/media';
import { centerContent } from '../../../utils/mixins';

export const CardRow = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    padding: ${({theme}) => theme.sectionPadding};

    ${media.desktop`
        flex-direction: row;
    `};
`;

export const StyledCardContainer = styled.section`
    ${centerContent};
    flex-direction: column;
    h2 {
        text-align: center;
    }
`;
