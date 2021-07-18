import styled from 'styled-components';

export const CardRow = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: ${({theme}) => theme.sectionPadding};
`;
