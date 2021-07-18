import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
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
