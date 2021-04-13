import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    body{
        overflow-x: hidden;
    }

    button{
        font-family: inherit;
        outline: none;
        border: none;
        cursor: pointer;
    }

    input{
        outline: none;
    }
`


