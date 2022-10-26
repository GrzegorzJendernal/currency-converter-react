import { createGlobalStyle } from "styled-components";
import background from "./background/background.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url("${background}");
        background-color: #d9d9d9;
        background-size: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
        padding: 20px;
        font-family: 'Lato', sans-serif;
        line-height: 1.5;
    }

    @media (max-width: 767px) {
        body {
            background-size: 600px;
            background-repeat: round;
        }
        }
`;