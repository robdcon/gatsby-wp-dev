import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.body};
        color: #333333;
    }
    
    header {
        display: inline-block;
        margin: 0;
    }

    main {
        scroll-snap-type: y mandatory;
    }

    a {
        text-decoration: none;
    }

    button {
        ${({theme}) => theme.buttonStyles}
    }

    section {
        padding: 50px 16px;
        scroll-snap-align: start;
        scroll-snap-stop: always;

        @media(min-width: 600px) {
            padding: 50px 100px;
        }
    }

    ::placeholder {
        color: #aaa;
    }
`; 