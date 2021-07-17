import styled from 'styled-components';

export const StyledLabel = styled.div`
    font-family: ${({theme}) => theme.primaryFont};
    color: ${({theme}) => theme.greyLightText};
    font-size: 14px;
`;
