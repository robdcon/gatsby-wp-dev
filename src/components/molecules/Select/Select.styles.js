import styled from 'styled-components';

export const StyledSelect = styled.select`
    border: ${({theme}) => theme.borderStyle};
    border-radius: 6px;
    width: 100%;
    padding: 16px;
    margin-bottom: 8px;
    background-color: #fff;
    position: relative;
    font-family: ${({theme}) => theme.primaryFont};

    &.untouched {
        color: #aaa;
    }
`;