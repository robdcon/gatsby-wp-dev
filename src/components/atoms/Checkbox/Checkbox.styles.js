import styled from 'styled-components';
export const StyledCheckbox = styled.label`
    display: block;
    position: relative;
    margin: .5em 0 1em;
    padding: .125em .125em .125em calc(24px + 8px);
    font-family: ${({theme}) => theme.primaryFont};
    font-weight: 100;
    font-size: 1em;
    line-height: 1.7;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 3px;

    &:focus {
        border: 1px solid ${({theme}) => theme.colors.primaryColor};
    }

    .checkbox--custom {
        position: absolute;
        top: 2px;
        left: 2px;
        height: 24px;
        width: 24px;
        background-color: #eee;
        border-radius: 3px;
        border: 1px solid #767676;
    }

    .checkbox--custom:before {
        content: "✔";
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        display: none;
    }

    .checkbox--native {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    &:hover .checkbox--custom {
        background-color: #ccc;
    }

    input[type=checkbox]:checked ~ .checkbox--custom {
        &:before {
            display: block;
        }
    }

`;