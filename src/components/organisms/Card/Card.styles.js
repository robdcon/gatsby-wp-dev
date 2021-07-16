import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: ${({theme}) => theme.cardShadow}
`;
