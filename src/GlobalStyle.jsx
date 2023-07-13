import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
