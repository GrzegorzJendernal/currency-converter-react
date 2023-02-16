import { createGlobalStyle } from "styled-components";
import background from "./background/background.jpg";

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
    max-width: 600px;
    padding: 20px;
    margin: 20px auto;
    font-family: 'Lato', sans-serif;
    line-height: 1.5;
  }
`;