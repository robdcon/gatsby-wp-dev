import styled from 'styled-components';

export const StyledInput = styled.input`
    border: ${({theme}) => theme.borderStyle};
    border-radius: 6px;
    width:100%;
    padding: 16px;
    margin-bottom: 8px;
    background-color: #fff;

    &::placeholder {
        font-family: ${({theme}) => theme.primaryFont};
        color: #aaa;
    }
`;
