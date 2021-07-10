import {css} from 'styled-components';

export const display = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const customButtonStyles = css`
    transition: border 0.5s ease-out 0.5s, color 0.5s ease-out;
    background-color: transparent;
    border: 2px solid #dddddd;
    color: ${({theme}) => theme.colors.primaryColor};

    &:before, &:after {
        content: '';
        border-style: solid;
        border-color: ${({theme}) => theme.colors.primaryColor};
        position: absolute;
        z-index: 999;
        border-radius: 3px;
        box-sizing: content-box;
        transition: height 0.5s, width 0.5s;
    }

    &:before {
        width: 0;
        height: 100%;
        border-width: 2px 0 2px 0;
        top: -2px;
        left: 0;
        transition-delay: 0.05s;
    }

    &:after {
        width: 100%;
        height: 0;
        border-width: 0 2px 0 2px;
        top: 0;
        left: -2px;
    }

    &:hover {
        border-color: ${({theme}) => theme.colors.primaryColor};
    }

    &:active {
        border-color: transparent;
    }

    &:hover:before {
        width: 100%;
    }

    &:hover:after {
        height: 100%;
    }
`;