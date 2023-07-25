import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyles = createGlobalStyle`
   html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`;