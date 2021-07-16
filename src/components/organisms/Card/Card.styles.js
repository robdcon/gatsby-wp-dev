import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: ${({theme}) => theme.cardShadow}
`;

export const StyledDescription = styled.p`
    font-family: inherit;
    font-size: 18px;
`;
