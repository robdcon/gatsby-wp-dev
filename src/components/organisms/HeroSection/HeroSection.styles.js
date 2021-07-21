import styled from 'styled-components';
import { media } from '../../../utils/media';

export const Section = styled.section`
    display: flex;
    padding-top: 100px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;

    p {
        text-align: center;
    }

   ${media.desktop`
        padding: 0;
        justify-content: center;
    `} 
`;
