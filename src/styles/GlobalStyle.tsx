import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button {
        font-size: 14px;
        background-color: transparent;
        outline: none;
        border: none;
        font-family: 'Segoe UI', Tahoma, sans-serif
    }
`;